export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="font-semibold text-brand-prussian">Home Market Consulting</div>
        <div className="flex items-center gap-4">
          <a href="/aviso-legal" className="hover:opacity-80">Aviso legal</a>
          <a href="/privacidad" className="hover:opacity-80">Privacidad</a>
          <a href="/contacto" className="hover:opacity-80">Contacto</a>
        </div>
        <div>© {new Date().getFullYear()} HMC</div>
      </div>
    </footer>
  );
}
