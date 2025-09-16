export default function Inversion(){
  return(<main className="bg-white">
    <section className="py-12 border-b border-slate-200/70"><div className="container-lg">
      <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Inversión Inmobiliaria España</h1>
      <p className="mt-3 text-slate-700 max-w-3xl whitespace-pre-line">'Asesoramos y gestionamos tu compra de propiedad en España.\n\nContamos con una completa selección de propiedades para proponerte las opciones de inversión que mejor se ajusten a lo que buscas. Analizamos la propiedad seleccionada revisando sus antecedentes, negociamos su valor, te representamos en la compra y realizamos el proceso de registro de la propiedad a tu nombre.'</p>
    </div></section>
    <section className="py-14"><div className="container-lg grid md:grid-cols-3 gap-6">
      {[
        ["Remodelamos y ambientamos tu propiedad","Proponemos y ejecutamos mejoras para agregar valor y maximizar la rentabilidad."],
        ["Administramos tu propiedad","Compramos, arrendamos y administramos tu propiedad en España."],
        ["Gestionamos tu cuenta bancaria","Te asistimos con la apertura de cuenta para operar cómodamente desde tu país."]
      ].map(([t,d])=> (<div key={t} className="card p-6"><h3 className="font-semibold text-brand-prussian">{t}</h3><p className="text-slate-600 mt-1">{d}</p></div>))}
    </div></section>
  </main>);
}
