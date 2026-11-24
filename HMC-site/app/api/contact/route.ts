import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
const DESTINATION = "contacto@homemarketconsulting.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const safeHeader = (value: string) => value.replace(/[\r\n]/g, " ");

export async function POST(request: NextRequest) {
  try {
    if (Number(request.headers.get("content-length") || 0) > 16000) return NextResponse.json({ error: "Solicitud demasiado grande" }, { status: 413 });
    const body = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ error: "Datos incorrectos" }, { status: 400 });
    // Honeypot: don't send automated submissions.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });
    const name = clean(body.name, 120), email = clean(body.email, 254);
    const phone = clean(body.phone, 40), service = clean(body.service, 100);
    const message = clean(body.message, 5000);
    if (!name || !EMAIL_PATTERN.test(email) || message.length < 5 || message.length > 5000) return NextResponse.json({ error: "Revisa los campos obligatorios" }, { status: 400 });
    if ([body.name, body.email, body.phone, body.service, body.message].some((v) => v !== undefined && typeof v !== "string")) return NextResponse.json({ error: "Datos incorrectos" }, { status: 400 });

    const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, GOOGLE_SENDER_EMAIL } = process.env;
    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN || !GOOGLE_SENDER_EMAIL) {
      console.error("HMC contact: faltan variables de Gmail API");
      return NextResponse.json({ error: "Servicio no configurado" }, { status: 503 });
    }
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: GOOGLE_CLIENT_ID, client_secret: GOOGLE_CLIENT_SECRET, refresh_token: GOOGLE_REFRESH_TOKEN, grant_type: "refresh_token" }),
      cache: "no-store",
    });
    if (!tokenResponse.ok) { console.error("HMC contact: error al renovar token", tokenResponse.status); return NextResponse.json({ error: "Error del servicio de correo" }, { status: 502 }); }
    const token = await tokenResponse.json() as { access_token?: string };
    if (!token.access_token) return NextResponse.json({ error: "Error del servicio de correo" }, { status: 502 });
    const subject = safeHeader(`Nueva consulta web HMC — ${name}`);
    const content = `Nueva consulta recibida desde la web de Home Market Consulting\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone || "No indicado"}\nServicio: ${service || "No indicado"}\n\nMensaje:\n${message}\n`;
    const mime = [
      `From: ${safeHeader(GOOGLE_SENDER_EMAIL)}`,
      `To: ${DESTINATION}`,
      `Reply-To: ${safeHeader(email)}`,
      `Subject: =?UTF-8?B?${Buffer.from(subject, "utf8").toString("base64")}?=`,
      "MIME-Version: 1.0", "Content-Type: text/plain; charset=UTF-8", "Content-Transfer-Encoding: base64", "",
      Buffer.from(content, "utf8").toString("base64"),
    ].join("\r\n");
    const raw = Buffer.from(mime, "utf8").toString("base64url");
    const sendResponse = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST", headers: { Authorization: `Bearer ${token.access_token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ raw }), cache: "no-store",
    });
    if (!sendResponse.ok) { console.error("HMC contact: Gmail API no pudo enviar", sendResponse.status); return NextResponse.json({ error: "No se pudo enviar" }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("HMC contact: error de solicitud", error instanceof Error ? error.message : "desconocido");
    return NextResponse.json({ error: "Error al procesar el formulario" }, { status: 500 });
  }
}
