import Image from "next/image";
export default function Proyectos(){
  return(<main className="bg-white">
    <section className="py-8"><div className="container-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian text-center">Proyectos</h1>
      <p className="text-center text-slate-600 mt-2">Algunos de los proyectos que hemos realizado</p>
      <h2 className="mt-8 text-xl font-semibold text-center">Reforma Integral de Departamento en Quart de Poblet, Valencia.</h2>
      <div className="mt-6 relative w-full">
        <Image src="/images/proyectos.jpg" alt="Proyectos" width={1600} height={2000} className="rounded-2xl border border-slate-200 shadow-card w-full h-auto"/>
      </div>
      <div className="mt-8 space-y-4 text-slate-700">
        <p>Se realizó una reforma completa de un departamento ubicado a 10 minutos en metro y auto de Valencia Capital.</p>
        <p>Los cambios realizados consistieron en: cambiar todas las ventanas por Termopanel de PVC, realizar todas las instalaciones de agua y electricidad desde cero, apertura de living-comedor con cocina, para dejar un espacio integrado. En el suelo se colocó un piso vinílico de ingeniería de alta resistencia.</p>
        <p>Con esta reforma y con una inversión total inferior a 100.000€, nuestro cliente obtiene una rentabilidad, después de los gastos de administración, de un 8% anual.</p>
      </div>
    </div></section>
  </main>);
}
