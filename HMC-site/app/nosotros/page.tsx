export default function Nosotros() {
  return (
    <main className="bg-white">
      <section className="py-12 border-b border-slate-200/70">
        <div className="container-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-prussian">Nosotros</h1>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Acompañamos a inversores que quieren entrar al mercado español con seguridad y sin complicaciones.
            Nuestro equipo está basado en Valencia y coordina todas las etapas del proceso.
          </p>
        </div>
      </section>
      <section className="py-14">
        <div className="container-lg grid md:grid-cols-3 gap-6">
          {[
            ["Equipo local","Abogados, arquitectos, gestores y agentes para un servicio integral y transparente."],
            ["Metodología clara","Proceso por etapas con reportes y KPIs. Comunicación permanente y trazabilidad."],
            ["Confidencialidad","Cumplimos la normativa de protección de datos (LOPD). Tu información es prioritaria."],
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
