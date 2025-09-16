export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;   // path under /public/
  tags?: string[];
};

export const projects: Project[] = [
  {
    slug: "alimentos-chile-a-espana",
    title: "Alimentos de Chile a España",
    summary: "Validación de categoría, registros sanitarios, etiquetado y primer shipment DDP.",
    image: "/images/proyectos/proj1.svg",
    tags: ["Importación", "Food", "DDP"]
  },
  {
    slug: "marca-latam-retail",
    title: "Marca LATAM en retail español",
    summary: "Aterrizaje legal, pricing y negociación con cadenas; pilotos en 2 retailers.",
    image: "/images/proyectos/proj2.svg",
    tags: ["Retail", "Go-to-Market"]
  },
  {
    slug: "saas-eu",
    title: "SaaS hacia la UE",
    summary: "Localización fiscal (OSS), primeros partners y generación de pipeline.",
    image: "/images/proyectos/proj3.svg",
    tags: ["SaaS", "Partners"]
  }
];
