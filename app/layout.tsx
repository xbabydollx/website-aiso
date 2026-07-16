import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AISO ® // Creative Agency",
  description: "Bespoke digital architecture and strategic intelligence suite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        
        {/* 🌊 WADAH UTAMA EFEK AIR BERGERAK & MENYELAM */}
        <div className="fixed inset-0 -z-50 w-full h-full bg-[#0D0E10] pointer-events-none">
          {/* Div inilah yang mengeksekusi class liquid-bg dan dive-mask dari CSS kita */}
          <div className="w-full h-full liquid-bg dive-mask transition-all duration-300" />
        </div>

        {children}
      </body>
    </html>
  );
}