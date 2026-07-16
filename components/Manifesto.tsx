'use client';

export default function Manifesto() {
  return (
    <section className="min-h-screen bg-[#000000] text-white py-32 px-6 md:px-12 flex flex-col justify-center border-t border-zinc-950 relative font-sans overflow-hidden">
      {/* Marquee Container dengan interaksi sentuhan aktif */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none flex active:[animation-play-state:paused] touch-none">
        <div className="inline-block animate-marquee text-[12vw] font-black tracking-tighter text-zinc-400 uppercase pr-4 whitespace-nowrap">
          WE BUILD PERCEPTION • WE DON'T JUST CREATE DESIGNS •&nbsp;
        </div>
        <div className="inline-block animate-marquee text-[12vw] font-black tracking-tighter text-zinc-400 uppercase pr-4 whitespace-nowrap">
          WE BUILD PERCEPTION • WE DON'T JUST CREATE DESIGNS •&nbsp;
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 w-full">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-red-600 uppercase block">
            // OUR MANIFESTO
          </span>
          <h2 className="text-[6vw] md:text-[5vw] font-black tracking-tighter leading-none uppercase">
            WE DON'T JUST <br />
            <span className="text-zinc-600 hover:text-zinc-100 transition-colors duration-500 cursor-default">
              CREATE DESIGNS.
            </span> <br />
            WE BUILD PERCEPTION.
          </h2>
        </div>

        <div className="lg:col-span-4 lg:mt-20 border-l border-red-600 pl-6 space-y-6">
          <p className="text-zinc-400 text-xs md:text-sm font-light tracking-widest uppercase leading-relaxed">
            Desain bukan sekadar visual yang indah.
          </p>
          <p className="text-white text-xs md:text-sm font-medium tracking-widest uppercase leading-relaxed">
            Kami menciptakan persepsi, menanamkan makna, dan membangun koneksi.
          </p>
        </div>
      </div>
    </section>
  );
}