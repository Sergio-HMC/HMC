import { MessageCircle, Phone, Calendar, Mail } from "lucide-react";
import { Links } from "@/data/links";
export default function Contacto(){
  return(<main className="bg-white">
    <section className="py-14 md:py-20 bg-white"><div className="container-lg">
      <h1>Contáctanos</h1>
      <p className="mt-2 text-slate-700">Nos encantaría poder conversar contigo</p>
      <div className="grid md:grid-cols-4 gap-4 mt-6">
        <a href={Links.whatsapp} target="_blank" className="card p-6 text-center">Contáctanos en WhatsApp</a>
        <a href={Links.phone} className="card p-6 text-center">Llámanos en España al<br/>+34 695 980 853</a>
        <a href={Links.calendly} target="_blank" className="card p-6 text-center">Agenda aquí tu reunión</a>
        <a href={Links.email} className="card p-6 text-center">Escríbenos a contacto@homemarketconsulting.com</a>
      </div>
      <div className="mt-10 card p-6">
        <p className="mb-4">También puedes escribirnos en nuestro formulario para que te contactemos sobre inversiones en España:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <input className="border rounded-xl p-3" placeholder="Nombre *"/>
          <input className="border rounded-xl p-3" placeholder="Email *"/>
          <input className="border rounded-xl p-3 md:col-span-2" placeholder="Asunto"/>
          <textarea className="border rounded-xl p-3 md:col-span-2" rows={5} placeholder="Mensaje"></textarea>
        </div>
        <button className="btn btn-primary mt-4">Enviar</button>
      </div>
    </div></section>
  </main>);
}
