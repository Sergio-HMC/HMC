export default function Contacto() {
  return (
    <main className="py-16 bg-white">
      <div className="container-lg">
        <h1 className="text-3xl font-bold text-brand-prussian">Contáctanos</h1>
        <p className="text-slate-700 mt-2">Nos encantaría poder conversar contigo.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <form action="https://formspree.io/f/your-id" method="POST" className="card p-6 space-y-3">
            <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Nombre" name="name" required />
            <input type="email" className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Email" name="email" required />
            <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Teléfono" name="phone" />
            <textarea className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Mensaje" name="message" rows={6} />
            <button className="btn btn-primary w-full" type="submit">Enviar</button>
            <p className="text-xs text-slate-500">Al enviar, aceptas el contacto por email.</p>
          </form>
          <div className="card p-6">
            <h2 className="font-semibold text-brand-prussian">O si prefieres:</h2>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>Whatsapp (enlace)</li>
              <li>España: +34 695 980 853</li>
              <li>Email: contacto@homemarketconsulting.com</li>
              <li><a href="#" className="underline" target="_blank">Agenda aquí tu reunión</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
