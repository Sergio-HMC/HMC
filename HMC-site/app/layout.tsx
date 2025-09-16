export const metadata={title:"Home Market Consulting",description:"Invierte en propiedades en España — HMC gestiona todo el proceso."};
import "../styles/globals.css"; import type { ReactNode } from "react"; import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer";
export default function RootLayout({children}:{children:ReactNode}){
  return(<html lang="es"><head>
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
    {/* Google Translate (opcional) */}
    <script dangerouslySetInnerHTML={{__html:`
      function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'es',includedLanguages:'en,es'},'google_translate_element');}
    `}} />
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  </head><body className="min-h-screen bg-slate-50 font-sans">
    <div id="google_translate_element" className="fixed bottom-4 right-4 z-50 bg-white/90 border rounded-lg px-3 py-2 text-xs shadow-card"></div>
    <Navbar/>{children}<Footer/>
  </body></html>);
}
