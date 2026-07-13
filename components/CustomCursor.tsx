'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set posisi awal kursor tersembunyi agar tidak kaget saat load
    gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 0 });

    const moveCursor = (e: MouseEvent) => {
      // Menggunakan GSAP untuk efek kursor elastis (mengikuti dengan sedikit delay halus)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power3.out',
        scale: 1, // Tampilkan kursor saat mouse bergerak
      });
    };

    window.addEventListener('mousemove', moveCursor);

    // --- INTERAKSI HOVER ---
    // Efek saat kursor menyentuh link, tombol, atau teks interaktif
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 4,
        backgroundColor: 'rgba(239, 68, 68, 0.2)', // Berubah jadi merah transparan ala AISO
        borderColor: '#ef4444',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: '#ffffff',
        duration: 0.3,
      });
    };

    // Cari elemen-elemen yang mau dikasih efek interaktif
    const interactiveElements = document.querySelectorAll(
      'a, [cursor-pointer], .group, h1, h2'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    // Lingkaran kursor custom
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] hidden md:block transition-[border-color,background-color] duration-300"
    />
  );
}