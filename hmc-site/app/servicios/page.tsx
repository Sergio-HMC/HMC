export default function Servicios() {
  return (
    <main className="py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-brand-prussian">Servicios</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            ["Aterrizaje legal‑fiscal","SL/Sucursal, NIF‑IVA, contratos, marcas (OEPM/EUIPO)."],
            ["Importación & logística","Aranceles, incoterms, 3PL, fulfillment y devoluciones."],
            ["Go‑to‑Market","Validación, precios, canales B2B/retail/marketplaces."],
            ["Representación comercial","Prospección, agendas y gestión de cuentas."],
          ].map(([t,d]) => (
            <div key={t} className="card p-6">
              <h3 className="font-semibold text-brand-prussian">{t}</h3>
              <p className="text-slate-600 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
