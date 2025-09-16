import Image from "next/image";
import { Links } from "@/data/links";
import { Building2, Paintbrush, Home as HomeIcon, Banknote } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Top banner */}
      <section className="bg-white">
        <div className="relative w-full aspect-[16/5] md:aspect-[16/4]">
          <Image
            src="/images/home-hero.jpg"
            alt="Banner Home"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Hero text + CTAs */}
      <section className="py-10 md:py-14 bg-white">
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
          <section className="py-10 md:py-14 bg-white">
  <div className="container-lg text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-brand-prussian">Contáctanos ahora</h2>
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
      <a href={Links.whatsapp} target="_blank" className="btn btn-outline flex items-center gap-2">
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
      <a href={Links.phone} className="btn btn-outline flex items-center gap-2">
        <Phone className="w-5 h-5" /> Llamar
      </a>
      <a href={Links.calendly} target="_blank" className="btn btn-outline flex items-center gap-2">
        <Calendar className="w-5 h-5" /> Agenda
      </a>
      <a href={Links.email} className="btn btn-outline flex items-center gap-2">
        <Mail className="w-5 h-5" /> Email
      </a>
    </div>
  </div>
</section>
        </div>
      </section>

      {/* Services squares */}
      <section className="py-10 md:py-14 bg-brand-steel/10">
        <div className="container-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-prussian text-center">Nuestros servicios</h2>
          <section className="py-10 md:py-14 bg-white">
  <div className="container-lg text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-brand-prussian">Contáctanos ahora</h2>
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
      <a href={Links.whatsapp} target="_blank" className="btn btn-outline flex items-center gap-2">
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
      <a href={Links.phone} className="btn btn-outline flex items-center gap-2">
        <Phone className="w-5 h-5" /> Llamar
      </a>
      <a href={Links.calendly} target="_blank" className="btn btn-outline flex items-center gap-2">
        <Calendar className="w-5 h-5" /> Agenda
      </a>
      <a href={Links.email} className="btn btn-outline flex items-center gap-2">
        <Mail className="w-5 h-5" /> Email
      </a>
    </div>
  </div>
</section>
            <div className="card p-6 text-center">
              <Paintbrush className="mx-auto mb-3" />
              <h3>Remodelación</h3>
              <p className="text-slate-600 mt-1 text-sm">Ejecución de mejoras y ambientación.</p>
            </div>
            <div className="card p-6 text-center">
              <HomeIcon className="mx-auto mb-3" />
              <h3>Administración</h3>
              <p className="text-slate-600 mt-1 text-sm">Arriendo, venta y gestión operativa completa.</p>
            </div>
            <div className="card p-6 text-center">
              <Banknote className="mx-auto mb-3" />
              <h3>Visa & Cuenta Bancaria</h3>
              <p className="text-slate-600 mt-1 text-sm">Visa de inversionista y apertura de cuenta.</p>
            </div>
          </div>
        </div>
      </section>
      {/* divider */}
      <section className="py-6 bg-white"></section>
    </main>
  );
}
