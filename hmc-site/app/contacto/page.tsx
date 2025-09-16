export default function Contacto() {
  return (
    <main className="py-16">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-prussian">Contacto</h1>
        <p className="text-slate-600 mt-2">Cuéntanos tu proyecto y te respondemos en 48h.</p>
        <form action="https://formspree.io/f/your-id" method="POST" className="card p-6 mt-6 space-y-3">
          <div className="grid md:grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Nombre" name="name" required />
            <input type="email" className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Email" name="email" required />
          </div>
          <input className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Empresa (opcional)" name="company" />
          <textarea className="px-3 py-2 rounded-xl border border-slate-200 w-full" placeholder="Describe brevemente tu proyecto" name="message" rows={5} />
          <button className="btn btn-primary w-full" type="submit">Enviar</button>
          <p className="text-xs text-slate-500">Al enviar, aceptas el contacto por email.</p>
        </form>
      </div>
    </main>
  );
}
