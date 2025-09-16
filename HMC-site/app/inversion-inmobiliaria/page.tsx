import Image from "next/image";
export default function InversionInmobiliaria(){
  return(<main className="bg-white">
    <section className="py-10"><div className="container-lg">
      <h1>Invierte en propiedades en España y nosotros hacemos todo por ti!</h1>
      <p className="mt-2 text-slate-700">Con nuestros servicios podrás acceder a:</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <h3>Asesoramos y gestionamos tu compra de propiedad en España</h3>
          <p className="mt-2 text-slate-700">Contamos con una completa selección de propiedades para proponerte las opciones de inversión que mejor se ajusten a lo que buscas. Analizamos la propiedad seleccionada revisando sus antecedentes, negociamos, velamos por la seguridad en la compra y realizamos el proceso de registro a tu nombre.</p>
        </div>
        <Image src="/images/inv-1.jpg" alt="Foto inversión 1" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        <Image src="/images/inv-2.jpg" alt="Foto inversión 2" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        <div className="card p-6">
          <h3>Remodelamos y ambientamos tu propiedad</h3>
          <p className="mt-2 text-slate-700">Nuestro equipo en Valencia se encarga de proponer el proyecto de remodelación que permita mejorar el valor de venta o arriendo de tu propiedad. Contamos con el equipo de profesionales que ejecutará el proyecto acordado y ambientará tu propiedad para la venta o arriendo.</p>
        </div>
        <div className="card p-6">
          <h3>Administramos tu propiedad en España</h3>
          <p className="mt-2 text-slate-700">Buscamos posibles compradores o arrendatarios. Te representamos en el contrato de venta o arrendamiento. Gestionamos el seguro de impago y mantenemos la relación con el arrendatario por ti. En caso de propiedades vacacionales, administramos la gestión en las plataformas de reservas, hacemos cargo de todo el proceso, desde la ficha técnica hasta el check out, además de gestionar el aseo y mantención de ésta.</p>
        </div>
        <Image src="/images/inv-3.jpg" alt="Foto inversión 3" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        <Image src="/images/inv-4.jpg" alt="Foto inversión 4" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto"/>
        <div className="card p-6">
          <h3>Gestionamos tu postulación a visa de inversionista</h3>
          <p className="mt-2 text-slate-700">Un equipo de abogados especialistas te asesorará para aprovechar tu inversión en propiedades, gestionando la presentación de antecedentes de ésta para la obtención de la visa de inversionista que te permite residir en España.</p>
        </div>
        <div className="card p-6 md:col-span-2">
          <h3>Obtenemos tu cuenta corriente en Banco Español</h3>
          <p className="mt-2 text-slate-700">Te representaremos para que apertures una cuenta corriente en un reconocido banco español, y desde ahí poder gestionar las compras de tus propiedades.</p>
        </div>
        <Image src="/images/inv-5.jpg" alt="Foto inversión 5" width={800} height={500} className="rounded-2xl border border-slate-200 w-full h-auto md:col-span-2"/>
      </div>
      <div className="mt-10 card p-6">
        <h3>¿Quieres que te contactemos para conversar sobre posibilidades de visa de residencia e inversiones en España?</h3>
        <p className="text-sm text-slate-600 mt-2">Déjanos tu teléfono y te llamaremos*</p>
        <div className="mt-3"><input className="w-full border rounded-xl p-3" placeholder="Formato:+569 XXX XXXX"/></div>
        <button className="btn btn-primary mt-3">Quiero que me llamen</button>
      </div>
    </div></section>
  </main>);
}
