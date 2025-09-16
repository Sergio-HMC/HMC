import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container-lg grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian leading-tight">
              Invierte en propiedades en España — nosotros hacemos todo por ti
            </h1>
            <div className="mt-4 space-y-3 text-slate-700">
              <p>Podrás invertir en propiedades en España desde tu país y Home Market Consulting gestiona todo.</p>
              <p>Compramos la propiedad a tu nombre, remodelamos, arrendamos y hacemos toda la gestión para que solo te preocupes de recibir los ingresos en tu cuenta bancaria europea.</p>
              <p>Nuestro equipo está en Valencia, ciudad elegida la mejor del mundo para vivir (2020), donde gestionamos tus inversiones mediante un proceso integral.</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link href="/contacto" className="btn btn-primary">Contáctanos</Link>
              <a href="#" className="btn btn-outline">Agenda aquí tu reunión</a>
            </div>
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <div>Whatsapp</div>
              <div>España: +34 695 980 853</div>
              <div>Email: contacto@homemarketconsulting.com</div>
            </div>
          </div>
          <div className="relative aspect-[3/2]">
            <Image src="/images/hero.jpg" alt="HMC" fill className="object-cover rounded-2xl border border-slate-200 shadow-card" />
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="container-lg">
          <h2 className="text-2xl font-bold text-brand-prussian mb-6">Esto es lo que hacemos por ti</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Cuenta Bancaria","Obtenemos tu cuenta bancaria en reconocido banco europeo."],
              ["Inversión","Seleccionamos propiedades para invertir en la Comunidad Valenciana."],
              ["Remodelaciones","Proponemos y ejecutamos el proyecto para agregar valor."],
              ["Administración de propiedades","Compramos, vendemos, arrendamos y administramos tu propiedad."],
              ["Residencia en España","Gestionamos tu postulación a visa de inversionista."],
            ].map(([t,d]) => (
              <div key={t} className="card p-6">
                <h3 className="font-semibold text-brand-prussian">{t}</h3>
                <p className="text-slate-600 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
