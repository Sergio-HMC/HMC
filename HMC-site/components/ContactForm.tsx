"use client";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending"); setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("No pudimos enviar tu consulta. Inténtalo nuevamente o escríbenos directamente por correo.");
      form.reset(); setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
      setStatus("error");
    }
  }
  return <form onSubmit={submit} className="hmc-contact-form">
    <h3>Envíanos tu consulta</h3>
    <p>Completa el formulario y recibiremos tu mensaje directamente.</p>
    <label>Nombre *<input name="name" required maxLength={120} autoComplete="name" placeholder="Tu nombre" /></label>
    <label>Correo electrónico *<input name="email" required type="email" maxLength={254} autoComplete="email" placeholder="tu@correo.com" /></label>
    <label>Teléfono<input name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Opcional" /></label>
    <label>Servicio de interés<select name="service" defaultValue=""><option value="">Selecciona un servicio (opcional)</option><option value="Inversión inmobiliaria">Inversión inmobiliaria</option><option value="Residencia y asesoramiento">Residencia y asesoramiento</option><option value="Otros">Otros</option></select></label>
    <label>Mensaje *<textarea name="message" required minLength={5} maxLength={5000} rows={5} placeholder="Cuéntanos qué necesitas" /></label>
    <div aria-hidden="true" style={{position:"absolute",left:"-9999px"}}><label>No rellenar<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar consulta"}</button>
    <div role="status" aria-live="polite">{status === "success" && <p style={{color:"#126341",fontWeight:600}}>¡Mensaje enviado correctamente! Gracias por contactar con Home Market Consulting. Hemos recibido tu consulta y nos pondremos en contacto contigo lo antes posible.</p>}{status === "error" && <p style={{color:"#a32727"}}>{error} También puedes escribir a <a href="mailto:contacto@homemarketconsulting.com">contacto@homemarketconsulting.com</a>.</p>}</div>
  </form>;
}
