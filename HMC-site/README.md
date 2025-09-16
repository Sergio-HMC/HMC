# HMC-site (Next.js 14 + Tailwind)

Estructura completa lista para reemplazar el sitio de Wix.
Coloca tus imágenes reales en `/public/images` y tus logos en `/public`.

## Logos y favicon
- `public/Logo.png` (logo largo escritorio)
- `public/Logoresponsive.png` (logo cuadrado móvil)
- `public/favicon.ico`

## Imágenes de ejemplo (reemplazo)
En `/public/images/` encontrarás:
- `imagen-01.jpg` → Hero de la Home
- `imagen-02.jpg`..`imagen-09.jpg` → Galería de Proyectos
- (puedes seguir agregando `imagen-10.jpg` etc)

Cada imagen tiene texto: “REEMPLAZAR ACA POR IMAGEN XX”. Sustitúyelas respetando el nombre del archivo para no tocar código.

## Rutas incluidas
- `/` Home
- `/inversion-inmobiliaria`
- `/visas-y-residencias`
- `/nosotros`
- `/proyectos` (galería)
- `/contacto`

## Deploy
1. `npm install`
2. `npm run dev` (local)
3. Importa el repo en Vercel (Root Directory: `./`), build `npm run build`.

