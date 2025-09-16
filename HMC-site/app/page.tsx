import Image from "next/image"; import Link from "next/link";
export default function Home(){
  return(<main>
    <section className="py-16 bg-white">
      <div className="container-lg grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian leading-tight">Invierte en Propiedades en España sin moverte de tu país.</h1>
          <div className="mt-4 space-y-3 text-slate-700 whitespace-pre-line">'Invierte en Propiedades en España sin moverte de tu país.\n\nPodrás invertir en propiedades en España desde tu país y Home Market Consulting gestiona todo.\n\nCompramos la propiedad a tu nombre, remodelamos, arrendamos y hacemos toda la gestión para que sólo te preocupes de recibir los ingresos en tu cuenta bancaria europea.\n\nNuestro Equipo de trabajo está situado en Valencia, ciudad elegida el año 2020 como la mejor ciudad del mundo para vivir* y donde llevaremos a cabo tus inversiones inmobiliarias mediante un proceso integral.'</div>
          <div className="mt-6 flex gap-3">
            <Link href="/contacto" className="btn btn-primary">Contáctanos</Link>
            <Link href="/proyectos" className="btn btn-outline">Ver proyectos</Link>
          </div>
        </div>
        <div className="relative aspect-[3/2]">
          <Image src="/images/imagen-01.jpg" alt="REEMPLAZAR ACA POR IMAGEN 01" fill className="object-cover rounded-2xl border border-slate-200 shadow-card" priority />
        </div>
      </div>
    </section>
  </main>);
}
