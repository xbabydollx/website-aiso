'use client';

import React from 'react';

const services = [
  { num: '01', name: 'BRAND STRATEGY', desc: 'Holistic research, positioning architecture, and foundational strategy designed to forge irreplaceable market presence.' },
  { num: '02', name: 'BRAND IDENTITY', desc: 'Curation of elevated visual ecosystems, blending artistic distinction with deep cultural meaning.' },
  { num: '03', name: 'WEB DIGITAL SUITE', desc: 'Bespoke, high-fidelity digital platforms utilizing ultra-smooth interactivity and flawless performance architecture.' },
  { num: '04', name: 'DIGITAL CAMPAIGN', desc: 'Avant-garde digital marketing narratives curated precisely for high-intent audiences and lasting impact.' },
  { num: '05', name: 'VISUAL PRODUCTION', desc: 'Cinematic art direction, high-end photography, and fluid motion design that brings brand philosophy into physical emotion.' },
  { num: '06', name: 'AI AUTOMATION', desc: 'Intelligent systems design seamlessly woven into operations to accelerate digital transformation effortlessly.' },
];

const processes = [
  { step: 'I', title: 'DISCOVER', desc: 'An immersive immersion into your brand’s core lineage, uncovering overlooked capital.' },
  { step: 'II', title: 'INTELLIGENCE', desc: 'Rigorous market diagnostics and strategic mapping to design unfair advantages.' },
  { step: 'III', title: 'CONCEPT', desc: 'Translating strategic absolute values into radical, poetic creative concepts.' },
  { step: 'IV', title: 'CRAFT', desc: 'Exquisite execution of visual, textual, and technological artifacts.' },
  { step: 'V', title: 'ELEVATE', desc: 'Continuous scaling, calibration, and market positioning stewardship.' },
];

export default function MainContent() {
  return (
    <div className="bg-[#000000] text-[#fcfcfc] font-sans antialiased selection:bg-[#8B1E22]">
      
      {/* 03. EXPERTISE SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-900/50">
        <div className="mb-28 max-w-4xl">
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#8B1E22] block mb-4 uppercase">// CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight uppercase text-zinc-100">
            WE FUSE STRATEGIC INTELLIGENCE WITH <span className="italic font-serif text-zinc-400">UNCOMPROMISING CREATIVITY</span> to ARCHITECT TIMELESS DIGITAL POWERHOUSES.
          </h2>
        </div>

        <div className="border-t border-zinc-900">
          {services.map((item, index) => (
            <div key={index} className="group border-b border-zinc-900 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-700 hover:bg-[#050505] px-4">
              <div className="flex items-center gap-12">
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#8B1E22] transition-colors duration-500">{item.num}</span>
                <h3 className="text-xl md:text-2xl font-light tracking-wide text-zinc-400 group-hover:text-white group-hover:translate-x-3 transition-all duration-500">
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-zinc-500 max-w-md mt-4 md:mt-0 font-light tracking-wide leading-relaxed group-hover:text-zinc-300 transition-colors duration-500 md:text-right">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. SELECTED WORKS SECTION (Luxury Portfolio with 5 Adjusted Images) */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-900/50 bg-[#030303]">
        <div className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#8B1E22] block mb-2 uppercase">// CASE STUDY IN FOCUS</span>
        </div>
        
        <div className="group border-t border-b border-zinc-900 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 relative overflow-hidden">
          
          {/* SISI KIRI: Detail Teks */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] font-mono text-zinc-650 block mb-3">REF. 01/26</span>
              <h3 className="text-5xl md:text-8xl font-light tracking-tighter uppercase text-zinc-200 group-hover:text-white transition-colors duration-500">
                ALILA <span className="font-serif italic text-zinc-500 group-hover:text-zinc-300 transition-colors">SOLO</span>
              </h3>
              <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase mt-4">HIGH-END HOSPITALITY REBRANDING & SUITE</p>
            </div>
            
            <div className="inline-block border border-zinc-800 rounded-full px-8 py-4 text-[10px] tracking-[0.3em] font-mono uppercase text-zinc-400 hover:text-black hover:bg-white hover:border-white transition-all duration-500 cursor-pointer">
              <a href="https://wa.me/6285802949884" target="_blank" rel="noopener noreferrer">
                EXPLORE ARCHIVE →
              </a>
            </div>
          </div>

          {/* SISI KANAN: Slider 5 Gambar dengan Ukuran Proporsional */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            {/* max-w-[450px] dengan aspect-[16/10] atau aspect-video agar lanskapnya proporsional */}
            <div className="relative w-full max-w-[450px] aspect-[16/10] overflow-hidden border border-zinc-900 bg-black rounded-sm group-hover:border-zinc-800 transition-colors duration-500 shadow-2xl">
              
              <div className="absolute inset-0 flex w-[500%] h-full animate-[portfolio-slide_20s_infinite_steps(1)]">
                {/* Gambar 1 */}
                <div className="w-1/5 h-full relative">
                  <img 
                    src="/pictures/ALILA-1.png" 
                    alt="Alila Solo Portfolio 1" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 ease-out"
                  />
                </div>
                {/* Gambar 2 */}
                <div className="w-1/5 h-full relative">
                  <img 
                    src="/pictures/ALILA-2.png" 
                    alt="Alila Solo Portfolio 2" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 ease-out"
                  />
                </div>
                {/* Gambar 3 */}
                <div className="w-1/5 h-full relative">
                  <img 
                    src="/pictures/ALILA-3.png" 
                    alt="Alila Solo Portfolio 3" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 ease-out"
                  />
                </div>
                {/* Gambar 4 */}
                <div className="w-1/5 h-full relative">
                  <img 
                    src="/pictures/ALILA-4.png" 
                    alt="Alila Solo Portfolio 4" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 ease-out"
                  />
                </div>
                {/* Gambar 5 */}
                <div className="w-1/5 h-full relative">
                  <img 
                    src="/pictures/ALILA-5.png" 
                    alt="Alila Solo Portfolio 5" 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Indikator Titik Koordinat */}
              <div className="absolute bottom-4 right-4 flex gap-1.5 z-10 opacity-30 group-hover:opacity-80 transition-opacity duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 05. PROCESS SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-900/50">
        <div className="mb-28">
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#8B1E22] block mb-4 uppercase">// METHODOLOGY</span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight uppercase text-zinc-100">OUR CURATED JOURNEY.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-t border-zinc-900 pt-16">
          {processes.map((proc, idx) => (
            <div key={idx} className="animate-reveal space-y-6 border-t border-zinc-900 pt-8 hover:border-[#8B1E22] transition-colors duration-500 group">
              <span className="text-[10px] font-mono text-zinc-650 group-hover:text-[#8B1E22] transition-colors duration-500 block">{proc.step}</span>
              <h4 className="text-sm font-medium tracking-widest uppercase text-zinc-300 group-hover:text-white transition-colors">{proc.title}</h4>
              <p className="text-[11px] text-zinc-500 font-light leading-relaxed tracking-wide">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. ABOUT US SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-900/50 bg-[#010101] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#8B1E22] block uppercase">// ESSENCE</span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight uppercase leading-snug text-zinc-200">
            WE IGNORE <span className="font-serif italic text-zinc-500">MOMENTARY TRENDS</span> TO DEVELOP ENDURING ARCHITECTURES THAT EMPOWER BRANDS TO COMMAND PERMANENT DISCOVERY.
          </h2>
        </div>
        <div className="lg:col-span-5 text-zinc-500 text-xs font-light tracking-widest leading-loose lg:border-l lg:border-zinc-900 lg:pl-16 space-y-4">
          <p>
            AISO operates at the convergence of pure strategic engineering and radical visual art. We construct highly calibrated perceptions for ambitious brands globally.
          </p>
          <p className="text-zinc-400 font-medium">
            We do not just optimize; we redefine standard paradigms.
          </p>
        </div>
      </section>

      {/* 07. CONTACT SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-900/50 flex flex-col justify-between relative bg-black">
        <div>
          <span className="text-[10px] font-mono tracking-[0.5em] text-[#8B1E22] block mb-4 uppercase">// ENGAGEMENT</span>
          <h2 className="text-4xl md:text-7xl font-extralight tracking-tighter uppercase mb-28 text-zinc-100">
            INITIATE A <br /><span className="font-serif italic text-zinc-500">NEW VISION</span>.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
            
            {/* WHATSAPP */}
            <div className="border border-zinc-900 p-8 rounded-sm bg-[#030303] flex flex-col sm:flex-row justify-between items-center gap-8 group hover:border-[#8B1E22]/50 transition-colors duration-500">
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-[10px] font-mono text-zinc-600 uppercase block">// INSTANT GATEWAY</span>
                <a 
                  href="https://wa.me/6285802949884?text=Halo%20AISO%20Creative,%20saya%20tertarik%20untuk%20bekerjasama." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-light tracking-wide uppercase text-zinc-200 group-hover:text-white transition-colors duration-300 block"
                >
                  WHATSAPP
                </a>
                <p className="text-xs font-mono text-[#8B1E22]">[ +62 858-0294-9884 ]</p>
                <p className="text-[11px] text-zinc-500 font-light max-w-[200px] leading-relaxed">
                  Scan or click to connect directly with our strategic director.
                </p>
              </div>
              {/* QR WA dengan Ukuran Proporsional Semata Mata */}
              <div className="w-32 h-32 border border-zinc-850 p-2 bg-black shrink-0">
                <img 
                  src="/pictures/qr-wa.jpg" 
                  alt="QR Code WhatsApp AISO" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="border border-zinc-900 p-8 rounded-sm bg-[#030303] flex flex-col sm:flex-row justify-between items-center gap-8 group hover:border-[#8B1E22]/50 transition-colors duration-500">
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-[10px] font-mono text-zinc-600 uppercase block">// VISUAL ARCHIVE</span>
                <a 
                  href="https://www.instagram.com/aiso.creative?igsh=MWVsanZ0a2FlcXFwbA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-light tracking-wide uppercase text-zinc-200 group-hover:text-white transition-colors duration-300 block"
                >
                  INSTAGRAM
                </a>
                <p className="text-xs font-mono text-[#8B1E22]">[ @AISO.CREATIVE ]</p>
                <p className="text-[11px] text-zinc-500 font-light max-w-[200px] leading-relaxed">
                  Explore our daily curated thoughts, design experiments, and archives.
                </p>
              </div>
              {/* QR IG dengan Ukuran Proporsional Semata Mata */}
              <div className="w-32 h-32 border border-zinc-850 p-2 bg-black shrink-0">
                <img 
                  src="/pictures/qr-ig.jpg" 
                  alt="QR Code Instagram AISO" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>

          </div>

          <div className="group max-w-6xl border-b border-zinc-900 py-10 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer">
            <a 
              href="mailto:hello@aisocreative.com" 
              className="text-xl md:text-2xl font-light tracking-wider uppercase text-zinc-400 group-hover:text-white transition-colors duration-500"
            >
              GENERAL INQUIRIES
            </a>
            <span className="text-[11px] font-mono text-zinc-650 group-hover:text-zinc-300 transition-colors duration-500 mt-2 md:mt-0">[ HELLO@AISOCREATIVE.COM ]</span>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-32 text-zinc-700 font-mono text-[9px] tracking-[0.3em] uppercase">
          <div>© 2026 AISO INTELLIGENCE SUITE. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <span 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-white cursor-pointer transition-colors duration-300"
            >
              ASCEND TO TOP ↑
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}