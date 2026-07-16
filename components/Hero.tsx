'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      '.reveal-text',
      { y: '100%' },
      { y: '0%', duration: 1.2, ease: 'power4.out', stagger: 0.15 }
    );
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      gsap.fromTo(
        menuOverlayRef.current,
        { y: '-100%' },
        { y: '0%', duration: 0.6, ease: 'power4.out' }
      );
    } else {
      gsap.to(menuOverlayRef.current, {
        y: '-100%',
        duration: 0.5,
        ease: 'power4.inOut',
        onComplete: () => setIsMenuOpen(false),
      });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen w-full bg-transparent text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden select-none"
    >
      {/* Top Nav */}
      <div className="flex justify-between items-center w-full text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-zinc-500 font-medium pt-2 relative z-50">
        <div>AISO ® / CREATIVE AGENCY</div>
        <div 
          onClick={toggleMenu}
          className="hover:text-white cursor-pointer transition-colors active:scale-90 duration-200"
        >
          {isMenuOpen ? 'CLOSE — [ X ]' : 'MENU — [ // ]'}
        </div>
      </div>

      {/* Premium Fullscreen Curtain Menu Overlay */}
      <div 
        ref={menuOverlayRef}
        className={`fixed inset-0 bg-[#0D0E10]/95 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <div className="text-zinc-700 text-[10px] font-mono tracking-[0.4em] mb-4">// NAVIGATION ARCHITECTURE</div>
        {['CAPABILITIES', 'CASE STUDY', 'METHODOLOGY', 'ENGAGEMENT'].map((link, idx) => (
          <div 
            key={idx} 
            onClick={toggleMenu}
            className="text-2xl md:text-5xl font-black tracking-tighter uppercase text-zinc-400 hover:text-white transition-colors duration-300 active:scale-95 cursor-pointer"
          >
            {link}
          </div>
        ))}
      </div>

      {/* Main Branding Layout */}
      <div className="my-auto py-12">
        <div className="overflow-hidden block leading-none mb-2">
          <h1 className="reveal-text text-[14vw] font-black tracking-tighter uppercase text-white">
            AISO
          </h1>
        </div>
        <div className="overflow-hidden block leading-none">
          <p className="reveal-text text-[4vw] font-black tracking-tight text-red-600 uppercase">
            CREATIVE AGENCY.
          </p>
        </div>
      </div>

      {/* Footer Details */}
      <div className="w-full border-t border-zinc-900 pt-6 pb-2 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="text-[10px] md:text-[11px] tracking-[0.3em] text-zinc-600 font-mono">
          [ EST. 2026 // GLOBAL OUTPUT ]
        </div>
        <div className="max-w-md">
          <p className="text-[11px] md:text-xs tracking-[0.2em] text-zinc-400 font-light uppercase leading-relaxed md:text-right">
            Strategy at heart. Creative in execution. <br />
            <span className="text-white font-medium">Impact in every detail.</span>
          </p>
        </div>
      </div>
    </section>
  );
}