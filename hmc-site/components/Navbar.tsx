import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-narrow py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block w-6 h-[18px] bg-brand-primary rounded-sm"></span>
          <span className="font-bold text-brand-prussian">Home Market Consulting</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/servicios" className="hover:opacity-80">Servicios</Link>
          <Link href="/proyectos" className="hover:opacity-80">Proyectos</Link>
          <Link href="/contacto" className="hover:opacity-80">Contacto</Link>
        </nav>
        <Link href="/contacto" className="btn btn-primary">Agenda una reunión</Link>
      </div>
    </header>
  );
}
