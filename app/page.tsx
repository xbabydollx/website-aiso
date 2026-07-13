import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import MainContent from "@/components/MainContent";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="bg-black min-h-screen text-white overflow-hidden cursor-none">
        <Hero />
        <Manifesto />
        <MainContent />
      </main>
    </SmoothScroll>
  );
}