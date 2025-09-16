import Image from "next/image";
import { Links } from "@/data/links";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="py-14 md:py-20">
        <div className="container-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-prussian">
            Reside en España y obtén tu pasaporte Español
          </h1>

          <p className="mt-5 text-slate-700 text-lg leading-relaxed max-w-3xl">
            Obtén tu Visa para vivir en España o invertir en propiedades en España desde tu país, ¡Home Market Consulting gestiona todo! Te asesoramos y acompañamos para obtener tu visa de Inversionista o de Residencia en España, para que así puedas vivir en el país. No te tendrás que preocupar de nada, ya que nuestro equipo de abogados hará todo por ti.
          </p>
          <p className="mt-3 text-slate-700 text-lg leading-relaxed max-w-3xl">
            Si lo que quieres es invertir, nosotros compramos la propiedad a tu nombre, la renovamos, remodelamos y hacemos toda la gestión para que solo te preocupes de recibir los ingresos en tu cuenta bancaria europea.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            <a href={Links.whatsapp} target="_blank" className="btn btn-outline w-full">Contáctanos en WhatsApp</a>
            <a href={Links.phone} className="btn btn-outline w-full">Llámanos en España</a>
            <a href={Links.calendly} target="_blank" className="btn btn-outline w-full">Agenda aquí tu reunión</a>
            <a href={Links.email} className="btn btn-outline w-full">Escríbenos</a>
          </div>

          <div className="mt-10 relative w-full aspect-[16/6] md:aspect-[16/5]">
            <Image
              src="/images/home-hero.jpg"
              alt="Banner Home"
              fill
              className="object-cover rounded-2xl border border-slate-200 shadow-card"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
