import Image from "next/image";
export default function Home(){
  return(<main>
    <section className="py-6 md:py-10 bg-white">
      <div className="container-lg">
        <div className="relative w-full">
          <Image src="/images/home.jpg" alt="Home" width={1600} height={900} className="rounded-2xl border border-slate-200 shadow-card w-full h-auto"/>
        </div>
      </div>
    </section>
  </main>);
}
