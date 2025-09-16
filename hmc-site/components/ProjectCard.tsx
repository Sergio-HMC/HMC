import Image from "next/image";

type Props = {
  title: string;
  summary: string;
  image: string;
  tags?: string[];
};

export default function ProjectCard({ title, summary, image, tags }: Props) {
  return (
    <div className="card p-4">
      <div className="relative w-full aspect-[3/2] overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="mt-4 font-semibold text-brand-prussian">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{summary}</p>
      {tags && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-200 text-slate-600">{t}</span>
          ))}
        </div>
      )}
    </div>
  );
}
