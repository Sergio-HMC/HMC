# HMC — Home Market Consulting

Sitio en Next.js (App Router) con Tailwind. Incluye secciones: Inicio, Servicios, Proyectos y Contacto.

## Cómo desplegar en Vercel
1. Crea un repo nuevo en GitHub y sube todos estos archivos.
2. En Vercel, **Import Project** desde tu repo.
3. Asegúrate de que el **Root Directory** sea la raíz del repo (donde está `package.json`).
4. Deploy.

## Añadir proyectos y fotos
- Sube tus imágenes a `public/images/proyectos/` (ideal `.webp` o `.jpg`).
- Edita `data/projects.ts` y agrega un objeto con: `slug`, `title`, `summary`, `image`, `tags`.
- La propiedad `image` debe ser la ruta pública, p. ej.: `/images/proyectos/tu-foto.jpg`.

## Colores & tipografía
- Paleta basada en HMC: `brand.primary #204975`, `brand.prussian #142E4A`, `brand.steel #8D99AE`, `brand.cornsilk #FAF4D3`, `brand.tea #C2EFB3`.
- Tipografía: **Lato**.
