import Image from "next/image"; import { Links } from "@/data/links";
export default function Home(){
  return(<main className="bg-white">
    <section className="py-10"><div className="container-lg">
      <h1>Reside en España y obtén tu pasaporte Español</h1>
      <p className="mt-4 text-slate-700">Obtén tu Visa para vivir en España o invertir en propiedades en España desde tu país, ¡Home Market Consulting gestiona todo! Te asesoramos y acompañamos para obtener tu visa de Inversionista o de Residencia en España, para que así puedas vivir en el país. No te tendrás que preocupar de nada, ya que nuestro equipo de abogados hará todo por ti.</p>
      <p className="mt-2 text-slate-700">Si lo que quieres es invertir, nosotros compramos la propiedad a tu nombre, la renovamos, remodelamos y hacemos toda la gestión para que solo te preocupes de recibir los ingresos en tu cuenta bancaria europea.</p>
      <div className="mt-6"><Image src="/images/home-hero.jpg" alt="Banner Home" width={1920} height={700} className="rounded-2xl border border-slate-200 w-full h-auto"/></div>
      <h3 className="mt-8 text-brand-prussian">Contáctanos:</h3>
      <ul className="grid sm:grid-cols-4 gap-4 mt-4 text-sm">
        <li><a href={Links.whatsapp} target="_blank" className="btn btn-outline w-full">Contáctanos en Whatsapp</a></li>
        <li><a href={Links.phone} className="btn btn-outline w-full">Llámamos en España</a></li>
        <li><a href={Links.calendly} target="_blank" className="btn btn-outline w-full">Agenda aquí tu reunión</a></li>
        <li><a href={Links.email} className="btn btn-outline w-full">Escríbenos a contacto@homemarketconsulting.com</a></li>
      </ul>
    </div></section>
  </main>);
}
