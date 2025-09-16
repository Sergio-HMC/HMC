import Image from "next/image";
const imgs = Array.from({length: 8}, (_,i)=>`/images/imagen-${(i+2).toString().padStart(2,"0")}.jpg`);
export default function Proyectos(){
  return(<main className="bg-white">
    <section className="py-12 border-b border-slate-200/70"><div className="container-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Proyectos</h1>
      <p className="mt-3 text-slate-700 max-w-3xl">Galería de proyectos. Reemplaza cada imagen por tus fotos reales manteniendo el mismo nombre de archivo.</p>
    </div></section>
    <section className="py-14"><div className="container-lg grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {imgs.map((src, idx)=> (<div key={src} className="card overflow-hidden">
        <div className="relative aspect-[4/3]"><Image src={src} alt={`REEMPLAZAR ACA POR IMAGEN ${(idx+2).toString().padStart(2,"0")}`} fill className="object-cover"/></div>
        <div className="p-4 text-sm text-slate-600">Proyecto {(idx+1)}</div>
      </div>))}
    </div></section>
  </main>);
}
