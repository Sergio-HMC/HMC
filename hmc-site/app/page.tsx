import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="py-20">
        <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-prussian leading-tight">
              Tu puente al mercado europeo
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Te ayudamos a entrar y crecer en España/UE: constitución, fiscalidad,
              importación, logística y expansión comercial. Equipo binacional con
              base en Madrid.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contacto" className="btn btn-primary">Agenda una reunión</Link>
              <Link href="/proyectos" className="btn btn-outline">Ver proyectos</Link>
            </div>
          </div>
          <div className="relative aspect-[3/2]">
            <Image src="/images/proyectos/proj1.svg" alt="HMC" fill className="object-cover rounded-2xl border border-slate-200 shadow-card" />
          </div>
        </div>
      </section>

      {/* BLOQUES */}
      <section className="py-14 bg-white">
        <div className="container-narrow grid md:grid-cols-3 gap-6">
          {[
            { t: "Aterrizaje legal‑fiscal", d: "SL/Sucursal, NIF‑IVA, contratos, marcas." },
            { t: "Importación & logística", d: "Aranceles, incoterms, 3PL, fulfillment." },
            { t: "Representación comercial", d: "Prospección B2B, cuentas y pricing." },
          ].map((b) => (
            <div key={b.t} className="card p-6">
              <h3 className="font-semibold text-brand-prussian">{b.t}</h3>
              <p className="text-slate-600 text-sm mt-1">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
