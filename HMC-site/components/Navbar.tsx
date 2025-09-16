"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-lg py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="Home Market Consulting" width={220} height={48} className="hidden md:block h-12 w-auto" priority />
          <Image src="/Logoresponsive.png" alt="Home Market Consulting" width={40} height={40} className="md:hidden h-10 w-auto" priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/inversion-inmobiliaria" className="hover:opacity-80">Inversión Inmobiliaria</Link>
          <Link href="/visas-y-residencias" className="hover:opacity-80">Visas y Residencias</Link>
          <Link href="/nosotros" className="hover:opacity-80">Nosotros</Link>
          <Link href="/proyectos" className="hover:opacity-80">Proyectos</Link>
          <Link href="/contacto" className="hover:opacity-80">Contacto</Link>
        </nav>
        <Link href="/contacto" className="btn btn-primary hidden md:inline-flex">Agenda tu reunión</Link>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200"
          onClick={() => setOpen(!open)} aria-label={open? "Cerrar menú":"Abrir menú"}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-lg py-3 flex flex-col gap-3">
            <Link href="/inversion-inmobiliaria" onClick={() => setOpen(false)}>Inversión Inmobiliaria</Link>
            <Link href="/visas-y-residencias" onClick={() => setOpen(false)}>Visas y Residencias</Link>
            <Link href="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
            <Link href="/proyectos" onClick={() => setOpen(false)}>Proyectos</Link>
            <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
            <Link href="/contacto" className="btn btn-primary w-full" onClick={() => setOpen(false)}>Agenda tu reunión</Link>
          </div>
        </div>
      )}
    </header>
  );
}
