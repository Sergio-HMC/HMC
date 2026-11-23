import Image from "next/image";
export default function Proyectos(){
  return(<main className="bg-white">
    <section className="py-14 md:py-20 bg-white"><div className="container-lg">
      <h1>Proyectos</h1>
      <p className="text-slate-600 mt-2">Ejemplos visuales del potencial de una reforma</p>
      <h2 className="mt-8 text-center">Ejemplo ilustrativo de transformación de una vivienda</h2>
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
        <p>Las siguientes imágenes son representaciones generadas con inteligencia artificial para ilustrar el tipo de transformación que puede conseguirse con una reforma. No corresponden a una obra ejecutada por Home Market Consulting.</p>
        <p>Una intervención puede contemplar renovación de instalaciones, carpinterías, redistribución de espacios y actualización de acabados, según el estado del inmueble y las autorizaciones aplicables.</p>
        <p>Cada operación requiere un análisis individual de costes, riesgos y rentabilidad; las imágenes no representan resultados financieros reales.</p>
      </div>
    </div></section>
  </main>);
}
