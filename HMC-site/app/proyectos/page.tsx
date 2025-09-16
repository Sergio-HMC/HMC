import Image from "next/image";
export default function Proyectos(){
  return(<main className="bg-white">
    <section className="py-14 md:py-20"><div className="container-lg">
      <h1>Proyectos</h1>
      <p className="text-slate-600 mt-2">Algunos de los proyectos que hemos realizado</p>
      <h2 className="mt-8 text-center">Reforma Integral de Departamento en Quart de Poblet, Valencia.</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6 items-start">
        <div className="text-center">
          <h3 className="mb-2">Antes</h3>
          <Image src="/images/proyectos-antes-1.jpg" alt="Antes" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        </div>
        <div className="text-center">
          <h3 className="mb-2">Después</h3>
          <Image src="/images/proyectos-despues-1.jpg" alt="Después" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        </div>
      </div>
      <div className="mt-6"><Image src="/images/proyectos-thumbs.jpg" alt="Thumbnails" width={1600} height={200} className="rounded-xl border border-slate-200 w-full h-auto"/></div>
      <div className="mt-8 space-y-4 text-slate-700">
        <p>Se realizó una reforma completa de un departamento ubicado a 10 minutos en metro y auto de Valencia Capital.</p>
        <p>Los cambios realizados consistieron en: cambiar todas las ventanas por Termopanel de PVC, realizar todas las instalaciones de agua y electricidad desde cero, apertura de living-comedor con cocina, para dejar un espacio integrado. En el suelo se colocó un piso vinílico de ingeniería de alta resistencia.</p>
        <p>Con esta reforma y con una inversión total inferior a 100.000€, nuestro cliente obtiene una rentabilidad, después de los gastos de administración, de un 8% anual.</p>
      </div>
    </div></section>
  </main>);
}
