import Link from "next/link"; import { Links } from "@/data/links";
export default function Footer(){
  return(<footer className="py-10 border-t border-slate-200 bg-white">
    <div className="container-lg grid md:grid-cols-3 gap-8 items-start text-center md:text-left">
      <div className="text-sm text-slate-700 space-y-2">
        <div>España: <a href={Links.phone} className="underline">+34 695 980 853</a></div>
        <div>Email: <a href={Links.email} className="underline">contacto@homemarketconsulting.com</a></div>
      </div>
      <nav className="flex flex-col gap-2 text-sm text-slate-700">
        <Link href="/inversion-inmobiliaria" className="hover:opacity-80">Inversión Inmobiliaria</Link>
        <Link href="/visas-y-residencias" className="hover:opacity-80">Visas y Residencias</Link>
        <Link href="/nosotros" className="hover:opacity-80">Nosotros</Link>
        <Link href="/proyectos" className="hover:opacity-80">Proyectos</Link>
        <Link href="/contacto" className="hover:opacity-80">Contacto</Link>
      </nav>
      <div className="text-sm text-slate-700">
        <div className="flex items-center gap-4 pt-2">
          <a href={Links.instagram} target="_blank" className="hover:opacity-80">Instagram</a>
          <a href={Links.facebook}  target="_blank" className="hover:opacity-80">Facebook</a>
          <a href={Links.linkedin}  target="_blank" className="hover:opacity-80">LinkedIn</a>
        </div>
      </div>
    </div>
    <div className="container-lg mt-8 text-xs text-slate-500">
      © {new Date().getFullYear()} Home Market Consulting
    </div>
  </footer>);
}
