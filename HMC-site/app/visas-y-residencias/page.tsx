export default function Visas() {
  return (
    <main className="bg-white">
      <section className="py-12 border-b border-slate-200/70">
        <div className="container-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Visas y Residencias</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Te guiamos en el proceso para vivir legalmente en España y, llegado el caso, optar a la nacionalidad.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="container-lg grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold text-brand-prussian">Visa de Inversionista (Golden Visa)</h3>
            <p className="text-slate-600 mt-1">
              Mediante una inversión inmobiliaria de 500.000€ puedes obtener residencia para ti y tu familia.
              Permite vivir y trabajar en España. Preparamos y presentamos la documentación.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-brand-prussian">Visa No Lucrativa</h3>
            <p className="text-slate-600 mt-1">
              Opción para residir en España sin actividad laboral local (ingresos por rentas o trabajo remoto).
              Te acompañamos con requisitos, citas y presentación del expediente.
            </p>
          </div>
          <div className="card p-6 md:col-span-2">
            <h3 className="font-semibold text-brand-prussian">Acompañamiento legal</h3>
            <p className="text-slate-600 mt-1">
              Abogados especialistas te asesoran en cada paso: requisitos, plazos, renovaciones, NIE y empadronamiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
