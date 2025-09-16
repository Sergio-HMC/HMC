import Image from "next/image"; import Link from "next/link";
export default function Footer(){
  return(<footer className="py-10 border-t border-slate-200 bg-white">
    <div className="container-lg grid md:grid-cols-3 gap-8 items-start">
      <div className="flex items-center md:items-start gap-3">
        <div className="hidden md:block"><Image src="/Logo.png" alt="Home Market Consulting" width={220} height={48} className="h-12 w-auto"/></div>
        <div className="md:hidden"><Image src="/Logoresponsive.png" alt="Home Market Consulting" width={40} height={40} className="h-10 w-auto"/></div>
      </div>
      <nav className="flex flex-col gap-2 text-sm text-slate-700">
        <Link href="/inversion-inmobiliaria" className="hover:opacity-80">Inversión Inmobiliaria</Link>
        <Link href="/visas-y-residencias" className="hover:opacity-80">Visas y Residencias</Link>
        <Link href="/nosotros" className="hover:opacity-80">Nosotros</Link>
        <Link href="/proyectos" className="hover:opacity-80">Proyectos</Link>
        <Link href="/contacto" className="hover:opacity-80">Contacto</Link>
      </nav>
      <div className="text-sm text-slate-700 space-y-2">
        <div>España: +34 695 980 853</div>
        <div>Email: <a href="mailto:contacto@homemarketconsulting.com" className="underline">contacto@homemarketconsulting.com</a></div>
        <div className="flex items-center gap-4 pt-2">
          <a href="#" target="_blank" className="hover:opacity-80">Instagram</a>
          <a href="#" target="_blank" className="hover:opacity-80">Facebook</a>
          <a href="#" target="_blank" className="hover:opacity-80">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="container-lg mt-8 text-xs text-slate-500 flex items-center justify-between">
      <div>© {new Date().getFullYear()} Home Market Consulting</div>
      <div className="flex items-center gap-4">
        <Link href="/aviso-legal" className="hover:opacity-80">Aviso legal</Link>
        <Link href="/privacidad" className="hover:opacity-80">Privacidad</Link>
      </div>
    </div>
  </footer>);
}
