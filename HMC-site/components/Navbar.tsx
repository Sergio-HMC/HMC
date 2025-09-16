"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/inversion-inmobiliaria", label: "Inversión Inmobiliaria" },
  { href: "/visas-y-residencias", label: "Visas y Residencias" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) => {
    const active = pathname === href || (href !== "/" && pathname.startsWith(href));
    return [
      "pb-1 transition",
      active ? "text-brand-prussian font-semibold border-b-2 border-brand-primary" : "hover:opacity-80 text-slate-700"
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-lg py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Logo (smaller) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Home Market Consulting"
            width={180}
            height={40}
            className="hidden md:block h-10 w-auto"
            priority
          />
          <Image
            src="/Logoresponsive.png"
            alt="HMC"
            width={36}
            height={36}
            className="md:hidden h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav with more spacing */}
        <nav className="hidden md:flex items-center gap-10 text-[15px]">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Translator placeholder (top-right) */}
        <div id="google_translate_element" className="hidden md:block text-xs"></div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-lg py-3 flex flex-col gap-3">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
