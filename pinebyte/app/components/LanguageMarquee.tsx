'use client'
import React from "react";
import { NextJS, Python, TypeScript, TailwindCSS } from "./icons/Languages";

const languages = [NextJS, Python, TypeScript, TailwindCSS];

export default function LanguageMarquee() {
  return (
    <div className="overflow-hidden relative w-full py-4 bg-gray-50">
      <div className="flex animate-marquee gap-8">
        {languages.map((icon, idx) => (
          <div key={idx} className="w-12 h-12 flex items-center justify-center text-gray-800">
            {icon}
          </div>
        ))}
        {languages.map((icon, idx) => (
          <div key={`repeat-${idx}`} className="w-12 h-12 flex items-center justify-center text-gray-800">
            {icon}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
