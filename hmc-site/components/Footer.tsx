export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="container-lg flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="font-semibold text-brand-prussian">© Home Market Consulting</div>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
