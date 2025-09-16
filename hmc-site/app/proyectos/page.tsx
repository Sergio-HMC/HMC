import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Proyectos() {
  return (
    <main className="py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-brand-prussian">Proyectos</h1>
        <p className="text-slate-600 mt-2">Sube tus fotos a <code>/public/images/proyectos/</code> y edita <code>data/projects.ts</code> para añadirlos o actualizarlos.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} title={p.title} summary={p.summary} image={p.image} tags={p.tags} />
          ))}
        </div>
      </div>
    </main>
  );
}
