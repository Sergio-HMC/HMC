import Image from "next/image";
export default function Visas(){
  return(<main className="bg-white">
    <section className="py-10"><div className="container-lg">
      <h1>Visas y Residencias</h1>
      <p className="mt-2 text-slate-700">Todo lo que necesitas para vivir en España y obtener la Nacionalidad.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8 items-start">
        <div className="card p-6">
          <h3>Visa No Lucrativa</h3>
          <p className="mt-2 text-slate-700">Esta visa es la opción de vivir en España de manera legal sin poder trabajar en el país. Permite vivir de rentas generadas y/o trabajo remoto a otros países. Además al cabo de 2 años, podrás solicitar tu Nacionalidad Española.</p>
          <p className="mt-2 text-slate-700">Nuestro equipo de abogados especialistas te guiarán y harán todo el proceso por ti, para que así puedas llegar a España sin tener mayores preocupaciones.</p>
          <p className="mt-3 text-sm text-slate-600">¡Déjanos tus datos y te contactamos para responder tus dudas!</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="border rounded-xl p-3" placeholder="Nombre*"/>
            <input className="border rounded-xl p-3" placeholder="Teléfono*  Formato:+569 XXX XXXX"/>
          </div>
          <button className="btn btn-primary mt-3">Me interesa!</button>
        </div>
        <Image src="/images/visas-hero.jpg" alt="Pareja descansando" width={1400} height={900} className="rounded-2xl border border-slate-200 w-full h-auto"/>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10 items-start">
        <Image src="/images/visas-foto2.jpg" alt="Playa con cercas de madera" width={1400} height={900} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        <div className="card p-6">
          <h3>Visa de Inversionista</h3>
          <p className="mt-2 text-slate-700">Mediante una inversión inmobiliaria de 500.000€ podrás obtener esta visa, la cual te permite vivir y trabajar legalmente en España. Además al cabo de 2 años, podrás solicitar tu Nacionalidad Española.</p>
          <p className="mt-2 text-slate-700">Nuestro equipo de abogados especialistas te guiarán y harán todo el proceso por ti, para que así puedas llegar a España sin tener mayores preocupaciones.</p>
          <p className="mt-3 text-sm text-slate-600">¡Déjanos tus datos y te contactamos para responder tus dudas!</p>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="border rounded-xl p-3" placeholder="Nombre*"/>
            <input className="border rounded-xl p-3" placeholder="Teléfono*  Formato:+569 XXX XXXX"/>
          </div>
          <button className="btn btn-primary mt-3">Me interesa!</button>
        </div>
      </div>
    </div></section>
  </main>);
}
