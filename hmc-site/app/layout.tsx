export const metadata = {
  title: "Home Market Consulting — Puentes hacia Europa",
  description: "Aterrizaje legal‑fiscal, importación y representación comercial.",
};

import "../styles/globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
       <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-50 font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
