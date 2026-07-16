'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ScrollTriggered animation untuk Capabilities di Mobile/PC
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.reveal-row',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.reveal-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: methodologyRef.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="text-[#F3F4F6] font-sans antialiased selection:bg-[#2C2E31] selection:text-white bg-transparent">
      
      {/* 03. EXPERTISE SECTION */}
      <section ref={capabilitiesRef} className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-800/60 bg-transparent">
        <div className="mb-28 max-w-4xl">
          <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 block mb-4 uppercase">// CAPABILITIES</span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight leading-tight uppercase text-white">
            WE FUSE STRATEGIC INTELLIGENCE WITH <span className="italic font-serif text-zinc-400">UNCOMPROMISING CREATIVITY</span> to ARCHITECT TIMELESS DIGITAL POWERHOUSES.
          </h2>
        </div>

        <div className="border-t border-zinc-800/60">
          {services.map((item, index) => (
            <div key={index} className="reveal-row group border-b border-zinc-800/40 py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-700 hover:bg-zinc-900/30 px-4">
              <div className="flex items-center gap-12">
                <span className="text-[10px] font-mono text-zinc-600 group-hover:text-white transition-colors duration-500">{item.num}</span>
                <h3 className="text-xl md:text-2xl font-light tracking-wide text-zinc-300 group-hover:text-white group-hover:translate-x-3 transition-all duration-500">
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

      {/* 04. SELECTED WORKS SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-800/60 bg-transparent">
        <div className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 block mb-2 uppercase">// CASE STUDY IN FOCUS</span>
        </div>
        
        <div className="group border-t border-b border-zinc-800/60 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 block mb-3">REF. 01/26</span>
              <h3 className="text-5xl md:text-8xl font-light tracking-tighter uppercase text-zinc-400 group-hover:text-white transition-colors duration-500">
                ALILA <span className="font-serif italic text-zinc-500 group-hover:text-zinc-300 transition-colors">SOLO</span>
              </h3>
              <p className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase mt-4">HIGH-END HOSPITALITY REBRANDING & SUITE</p>
            </div>
            
            <div className="inline-block border border-zinc-700 rounded-full px-8 py-4 text-[10px] tracking-[0.3em] font-mono uppercase text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-500 cursor-pointer active:scale-95">
              <a href="https://wa.me/6285802949884" target="_blank" rel="noopener noreferrer">
                EXPLORE ARCHIVE →
              </a>
            </div>
          </div>

          {/* PORTFOLIO SWIPE INTERACTIVE FOR MOBILE */}
          <div className="lg:col-span-5 w-full">
            {/* Desktop View: Infinite Carousel Slide (Hidden on Mobile) */}
            <div className="hidden md:block relative w-full max-w-[450px] aspect-[16/10] overflow-hidden border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm rounded-sm group-hover:border-zinc-600 transition-colors duration-500 shadow-2xl ml-auto">
              <div className="absolute inset-0 flex w-[500%] h-full animate-[portfolio-slide_20s_infinite_steps(1)]">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="w-1/5 h-full relative">
                    <img src={`/pictures/ALILA-${num}.png`} alt={`Alila Solo ${num}`} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-102 transition-all duration-700 ease-out" />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View: Premium Touch Horizontal Swipe (Hidden on Desktop) */}
            <div className="block md:hidden w-full">
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="min-w-[80vw] aspect-[4/5] snap-center shrink-0 border border-zinc-800 bg-zinc-900/10 rounded-sm overflow-hidden">
                    <img src={`/pictures/ALILA-${num}.png`} alt={`Alila Mobile ${num}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[9px] font-mono tracking-widest text-zinc-500 text-center mt-2">[ SWIPE TO EXPLORE INTERACTIVE → ]</p>
            </div>
          </div>

        </div>
      </section>

      {/* 05. PROCESS SECTION */}
      <section ref={methodologyRef} className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-800/60 bg-transparent">
        <div className="mb-28">
          <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 block mb-4 uppercase">// METHODOLOGY</span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight uppercase text-white">OUR CURATED JOURNEY.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-t border-zinc-800/60 pt-16">
          {processes.map((proc, idx) => (
            <div key={idx} className="reveal-card space-y-6 border-t border-zinc-800/40 pt-8 hover:border-zinc-500 transition-colors duration-500 group">
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-white transition-colors duration-500 block">{proc.step}</span>
              <h4 className="text-sm font-medium tracking-widest uppercase text-zinc-400 group-hover:text-white transition-colors">{proc.title}</h4>
              <p className="text-[11px] text-zinc-500 font-light leading-relaxed tracking-wide">{proc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06. ABOUT US SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-800/60 bg-transparent grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 block uppercase">// ESSENCE</span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-tight uppercase leading-snug text-zinc-200">
            WE IGNORE <span className="font-serif italic text-zinc-400">MOMENTARY TRENDS</span> TO DEVELOP ENDURING ARCHITECTURES THAT EMPOWER BRANDS TO COMMAND PERMANENT DISCOVERY.
          </h2>
        </div>
        <div className="lg:col-span-5 text-zinc-500 text-xs font-light tracking-widest leading-loose lg:border-l lg:border-zinc-800/60 lg:pl-16 space-y-4">
          <p>
            AISO operates at the convergence of pure strategic engineering and radical visual art. We construct highly calibrated perceptions for ambitious brands globally.
          </p>
          <p className="text-zinc-300 font-medium">
            We do not just optimize; we redefine standard paradigms.
          </p>
        </div>
      </section>

      {/* 07. CONTACT SECTION */}
      <section className="min-h-screen py-40 px-8 md:px-20 border-t border-zinc-800/60 flex flex-col justify-between relative bg-transparent">
        <div>
          <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 block mb-4 uppercase">// ENGAGEMENT</span>
          <h2 className="text-4xl md:text-7xl font-extralight tracking-tighter uppercase mb-28 text-white">
            INITIATE A <br /><span className="font-serif italic text-zinc-500">NEW VISION</span>.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
            
            {/* WHATSAPP CONTAINER BEREAKSI KENYAL */}
            <div className="border border-zinc-800 p-8 rounded-sm bg-zinc-900/5 backdrop-blur-xs flex flex-col sm:flex-row justify-between items-center gap-8 group hover:border-zinc-700 transition-all duration-300 active:scale-[0.99]">
              <div className="space-y-4 text-center sm:text-left w-full">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">// INSTANT GATEWAY</span>
                <a 
                  href="https://wa.me/6285802949884?text=Halo%20AISO%20Creative,%20saya%20tertarik%20untuk%20bekerjasama." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-light tracking-wide uppercase text-zinc-400 group-hover:text-white transition-colors duration-300 block active:scale-95 bg-zinc-800/20 sm:bg-transparent py-3 sm:py-0 rounded-full border border-zinc-800 sm:border-none"
                >
                  WHATSAPP
                </a>
                <p className="text-xs font-mono text-zinc-500">[ +62 858-0294-9884 ]</p>
                <p className="text-[11px] text-zinc-500 font-light max-w-[200px] leading-relaxed hidden sm:block">
                  Scan or click to connect directly with our strategic director.
                </p>
              </div>
              {/* QR Code disembunyikan otomatis di HP */}
              <div className="w-32 h-32 border border-zinc-800 p-2 bg-zinc-900/40 shrink-0 hidden sm:block">
                <img src="/pictures/qr-wa.jpg" alt="QR Code WhatsApp AISO" className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </div>

            {/* INSTAGRAM CONTAINER BEREAKSI KENYAL */}
            <div className="border border-zinc-800 p-8 rounded-sm bg-zinc-900/5 backdrop-blur-xs flex flex-col sm:flex-row justify-between items-center gap-8 group hover:border-zinc-700 transition-all duration-300 active:scale-[0.99]">
              <div className="space-y-4 text-center sm:text-left w-full">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">// VISUAL ARCHIVE</span>
                <a 
                  href="https://www.instagram.com/aiso.creative?igsh=MWVsanZ0a2FlcXFwbA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-light tracking-wide uppercase text-zinc-400 group-hover:text-white transition-colors duration-300 block active:scale-95 bg-zinc-800/20 sm:bg-transparent py-3 sm:py-0 rounded-full border border-zinc-800 sm:border-none"
                >
                  INSTAGRAM
                </a>
                <p className="text-xs font-mono text-zinc-500">[ @AISO.CREATIVE ]</p>
                <p className="text-[11px] text-zinc-500 font-light max-w-[200px] leading-relaxed hidden sm:block">
                  Explore our daily curated thoughts, design experiments, and archives.
                </p>
              </div>
              {/* QR Code disembunyikan otomatis di HP */}
              <div className="w-32 h-32 border border-zinc-800 p-2 bg-zinc-900/40 shrink-0 hidden sm:block">
                <img src="/pictures/qr-ig.jpg" alt="QR Code Instagram AISO" className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </div>

          </div>

          <div className="group max-w-6xl border-b border-zinc-800/60 py-10 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer active:scale-[0.98] transition-transform">
            <a 
              href="mailto:hello@aisocreative.com" 
              className="text-xl md:text-2xl font-light tracking-wider uppercase text-zinc-500 group-hover:text-white transition-colors duration-500"
            >
              GENERAL INQUIRIES
            </a>
            <span className="text-[11px] font-mono text-zinc-500 group-hover:text-white transition-colors duration-500 mt-2 md:mt-0">[ HELLO@AISOCREATIVE.COM ]</span>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pt-32 text-zinc-600 font-mono text-[9px] tracking-[0.3em] uppercase">
          <div>© 2026 AISO INTELLIGENCE SUITE. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <span 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-white cursor-pointer transition-colors duration-300 active:text-red-500"
            >
              ASCEND TO TOP ↑
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}