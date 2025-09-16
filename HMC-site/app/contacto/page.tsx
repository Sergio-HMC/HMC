import Image from "next/image"; import { Links } from "@/data/links";
export default function Contacto(){
  return(<main className="bg-white">
    <section className="py-8"><div className="container-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Contáctanos</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6 space-y-3">
          <a href={Links.whatsapp} target="_blank" className="btn btn-outline w-full">Contáctanos en WhatsApp</a>
          <a href={Links.phone} className="btn btn-outline w-full">Llámanos en España</a>
          <a href={Links.calendly} target="_blank" className="btn btn-outline w-full">Agenda aquí tu reunión</a>
          <a href={Links.email} className="btn btn-outline w-full">Escríbenos a contacto@homemarketconsulting.com</a>
        </div>
        <div className="relative w-full">
          <Image src="/images/contacto.jpg" alt="Contacto" width={1600} height={900} className="rounded-2xl border border-slate-200 shadow-card w-full h-auto"/>
        </div>
      </div>
    </div></section>
  </main>);
}
