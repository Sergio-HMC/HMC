import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-lg py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-block w-7 h-5 bg-brand-primary rounded-sm" />
          <span className="font-bold text-brand-prussian">Home Market Consulting</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/inversion-inmobiliaria" className="hover:opacity-80">Inversión Inmobiliaria</Link>
          <Link href="/visas-y-residencias" className="hover:opacity-80">Visas y Residencias</Link>
          <Link href="/nosotros" className="hover:opacity-80">Nosotros</Link>
          <Link href="/contacto" className="hover:opacity-80">Contacto</Link>
        </nav>
        <Link href="/contacto" className="btn btn-primary hidden md:inline-flex">Agenda aquí tu reunión</Link>
      </div>
    </header>
  );
}
