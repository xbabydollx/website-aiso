import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import MainContent from "@/components/MainContent";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      {/* KOREKSI: Mengubah bg-black menjadi bg-transparent agar efek air menyelam tidak terhalang */}
      <main className="bg-transparent min-h-screen text-white overflow-hidden cursor-none">
        <Hero />
        <Manifesto />
        <MainContent />
      </main>
    </SmoothScroll>
  );
}