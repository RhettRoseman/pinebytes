'use client'
import React from "react";
import { NextJS, Python, TypeScript, TailwindCSS } from "./icons/Languages";

// Array of components (not JSX)
const languages = [NextJS, Python, TypeScript, TailwindCSS];

export default function LanguageMarquee() {
  return (
    <div className="overflow-hidden relative w-full py-4 bg-gray-50">
      <div className="flex w-[200%] animate-marquee gap-8">
        {/* Render icons twice for seamless loop */}
        {languages.concat(languages).map((Icon, idx) => (
          <div key={idx} className="w-12 h-12 flex items-center justify-center">
        
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

