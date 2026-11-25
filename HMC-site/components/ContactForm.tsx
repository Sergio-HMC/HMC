"use client";
import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";
export default function ContactForm({english=false}:{english?:boolean}) {
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
      if (!response.ok) throw new Error(english?"We could not send your enquiry. Please try again or email us directly.":"No pudimos enviar tu consulta. Inténtalo nuevamente o escríbenos directamente por correo.");
      form.reset(); setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : (english?"Unable to send your message.":"No se pudo enviar el mensaje."));
      setStatus("error");
    }
  }
  return <form onSubmit={submit} className="hmc-contact-form">
    <h3>{english?"Send us your enquiry":"Env\u00edanos tu consulta"}</h3>
    <p>{english?"Complete the form and we will receive your message directly.":"Completa el formulario y recibiremos tu mensaje directamente."}</p>
    <label>{english?"Name *":"Nombre *"}<input name="name" required maxLength={120} autoComplete="name" placeholder={english?"Your name":"Tu nombre"} /></label>
    <label>{english?"Email *":"Correo electr\u00f3nico *"}<input name="email" required type="email" maxLength={254} autoComplete="email" placeholder={english?"you@example.com":"tu@correo.com"} /></label>
    <label>{english?"Phone":"Tel\u00e9fono"}<input name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder={english?"Optional":"Opcional"} /></label>
    <label>{english?"Service of interest":"Servicio de inter\u00e9s"}<select name="service" defaultValue=""><option value="">{english?"Select a service (optional)":"Selecciona un servicio (opcional)"}</option><option value="Inversión inmobiliaria">{english?"Property investment":"Inversi\u00f3n inmobiliaria"}</option><option value="Residencia y asesoramiento">{english?"Residency guidance":"Residencia y asesoramiento"}</option><option value="Otros">{english?"Other":"Otros"}</option></select></label>
    <label>{english?"Message *":"Mensaje *"}<textarea name="message" required minLength={5} maxLength={5000} rows={5} placeholder={english?"Tell us what you need":"Cu\u00e9ntanos qu\u00e9 necesitas"} /></label>
    <div aria-hidden="true" style={{position:"absolute",left:"-9999px"}}><label>{english?"Leave blank":"No rellenar"}<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <button type="submit" disabled={status === "sending"}>{status === "sending" ? (english?"Sending…":"Enviando…") : (english?"Send enquiry":"Enviar consulta")}</button>
    <div role="status" aria-live="polite">{status === "success" && <p style={{color:"#126341",fontWeight:600}}>{english?"Message sent successfully! Thank you for contacting Home Market Consulting. We have received your enquiry and will be in touch as soon as possible.":"\u00a1Mensaje enviado correctamente! Gracias por contactar con Home Market Consulting. Hemos recibido tu consulta y nos pondremos en contacto contigo lo antes posible."}</p>}{status === "error" && <p style={{color:"#a32727"}}>{error}{english?" You can also email ":" También puedes escribir a "}<a href="mailto:contacto@homemarketconsulting.com">contacto@homemarketconsulting.com</a>.</p>}</div>
  </form>;
}
