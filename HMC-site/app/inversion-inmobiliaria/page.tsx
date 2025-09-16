export default function Inversion() {
  return (
    <main className="bg-white">
      <section className="py-12 border-b border-slate-200/70">
        <div className="container-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Inversión inmobiliaria en España</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Te acompañamos de punta a punta: selección, compra, remodelación y administración.
            Tú eliges el objetivo (renta, plusvalía o mixto) y nosotros ejecutamos.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="container-lg grid md:grid-cols-3 gap-6">
          {[
            ["Selección y análisis","Curamos oportunidades según tu perfil. Analizamos barrio, demanda de arriendo, gastos y potencial de mejora."],
            ["Compra y legal","Coordinamos reservas, arras, escritura y registro. Notaría y gestoría para una adquisición limpia."],
            ["Remodelación","Proyecto para maximizar rentabilidad: obra, interiorismo y puesta a punto para arriendo o venta."],
            ["Administración","Búsqueda de arrendatarios, contratos, seguro de impago y gestión día a día."],
            ["Cuenta bancaria","Te asistimos para abrir tu cuenta en banco español y operar desde tu país."],
            ["Reporte y seguimiento","Informe de estado y KPIs periódicos. Transparencia en cada etapa."],
          ].map(([t, d]) => (
            <div key={t} className="card p-6">
              <h3 className="font-semibold text-brand-prussian">{t}</h3>
              <p className="text-slate-600 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
