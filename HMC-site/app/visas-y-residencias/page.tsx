import Image from "next/image";
export default function Visas(){
  return(<main className="bg-white">
    <section className="py-14 md:py-20">
      <div className="container-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Visas y Residencias</h1>
        <p className="mt-2 text-slate-700">Todo lo que necesitas para vivir en España y obtener la Nacionalidad.</p>

        {/* Bloque 1: Visa No Lucrativa */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Texto */}
          <div className="card p-6 h-full flex flex-col justify-between min-h-[420px] md:min-h-[460px]">
            <div>
              <h3 className="text-xl font-semibold text-brand-prussian">Visa No Lucrativa</h3>
              <p className="mt-2 text-slate-700">Esta visa es la opción de vivir en España de manera legal sin poder trabajar en el país. Permite vivir de rentas generadas y/o trabajo remoto a otros países. Además al cabo de 2 años, podrás solicitar tu Nacionalidad Española.</p>
              <p className="mt-2 text-slate-700">Nuestro equipo de abogados especialistas te guiarán y harán todo el proceso por ti, para que así puedas llegar a España sin tener mayores preocupaciones.</p>
            </div>
            <div className="mt-4 text-sm text-slate-600">¡Déjanos tus datos y te contactamos para responder tus dudas!</div>
          </div>
          {/* Imagen con misma altura */}
          <div className="h-full min-h-[420px] md:min-h-[460px] rounded-2xl border border-slate-200 overflow-hidden">
            <div className="relative w-full h-full min-h-[420px] md:min-h-[460px]">
              <Image src="/images/visas-hero.jpg" alt="Pareja descansando" fill className="object-cover"/>
            </div>
          </div>
        </div>

        {/* Bloque 2: Visa de Inversionista */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Imagen con misma altura */}
          <div className="h-full min-h-[420px] md:min-h-[460px] rounded-2xl border border-slate-200 overflow-hidden">
            <div className="relative w-full h-full min-h-[420px] md:min-h-[460px]">
              <Image src="/images/visas-foto2.jpg" alt="Playa con cercas de madera" fill className="object-cover"/>
            </div>
          </div>
          {/* Texto */}
          <div className="card p-6 h-full flex flex-col justify-between min-h-[420px] md:min-h-[460px]">
            <div>
              <h3 className="text-xl font-semibold text-brand-prussian">Visa de Inversionista</h3>
              <p className="mt-2 text-slate-700">Mediante una inversión inmobiliaria de 500.000€ podrás obtener esta visa, la cual te permite vivir y trabajar legalmente en España. Además al cabo de 2 años, podrás solicitar tu Nacionalidad Española.</p>
              <p className="mt-2 text-slate-700">Nuestro equipo de abogados especialistas te guiarán y harán todo el proceso por ti, para que así puedas llegar a España sin tener mayores preocupaciones.</p>
            </div>
            <div className="mt-4 text-sm text-slate-600">¡Déjanos tus datos y te contactamos para responder tus dudas!</div>
          </div>
        </div>
      </div>
    </section>
  </main>);
}
