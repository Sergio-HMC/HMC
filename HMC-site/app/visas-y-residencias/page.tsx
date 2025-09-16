import Image from "next/image";
export default function Visas(){
  return(<main className="bg-white">
    <section className="py-8"><div className="container-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Visas y Residencias</h1>
      <div className="mt-6 relative w-full">
        <Image src="/images/visas.jpg" alt="Visas" width={1600} height={1200} className="rounded-2xl border border-slate-200 shadow-card w-full h-auto"/>
      </div>
    </div></section>
  </main>);
}
