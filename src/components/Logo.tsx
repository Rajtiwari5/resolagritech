/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-12 h-12", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`relative ${className} shrink-0 transition-transform duration-500 group-hover:scale-105`}>
        {/* Circle Container SVG representing the real logo */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            {/* Sky gradient */}
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" /> {/* light blue */}
              <stop offset="60%" stopColor="#fef08a" /> {/* yellow sky */}
              <stop offset="100%" stopColor="#fed7aa" /> {/* orange dawn */}
            </linearGradient>
            
            {/* Sand dune gradient */}
            <linearGradient id="sandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>

            {/* Field rows gradient */}
            <linearGradient id="fieldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#84cc16" />
            </linearGradient>
          </defs>

          {/* Core circular badge cut */}
          <clipPath id="circleClip">
            <circle cx="50" cy="50" r="46" />
          </clipPath>

          <g clipPath="url(#circleClip)">
            {/* 1. Sky & Sun */}
            <rect x="0" y="0" width="100" height="100" fill="url(#skyGrad)" />
            <circle cx="60" cy="20" r="10" fill="#f97316" className="animate-pulse" />

            {/* 2. Soft Desert Dunes on left */}
            <path d="M -10 65 Q 25 45 60 62 T 110 50 L 110 100 L -10 100 Z" fill="url(#sandGrad)" opacity="0.9" />
            <path d="M -10 52 Q 15 40 40 50 T 110 40 L 110 100 L -10 100 Z" fill="#d97706" opacity="0.4" />

            {/* 3. Camel silhouette on the dunes */}
            {/* Camel body */}
            <path d="M 28 50 Q 30 46 32 46 Q 34 46 36 49 T 40 47 Q 41 45 40 42 Q 39 40 41 38 Q 43 38 42 41 L 43 45 Q 45 47 44 49 T 48 51 T 45 54 L 46 62 M 43 62 T 42 54" 
                  stroke="#5e2f0d" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Camel standing pose simplified */}
            <path d="M 26 53 
                     Q 28 52 32 52 
                     H 36 
                     Q 38 52 40 54 
                     L 38 64 
                     M 36 53 
                     L 35 64
                     M 30 52 
                     L 29 63
                     M 28 52 
                     L 27 63" 
                  stroke="#5e2f0d" strokeWidth="1.2" strokeLinecap="round" />

            {/* 4. Palm tree on the right */}
            <path d="M 75 65 Q 73 53 72 38" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Palm leaves */}
            <path d="M 72 38 Q 63 35 56 42" stroke="#14532d" strokeWidth="1.5" fill="none" />
            <path d="M 72 38 Q 65 30 60 28" stroke="#166534" strokeWidth="1.5" fill="none" />
            <path d="M 72 38 Q 78 28 84 29" stroke="#15803d" strokeWidth="1.5" fill="none" />
            <path d="M 72 38 Q 80 40 82 48" stroke="#16a34a" strokeWidth="1.5" fill="none" />
            <path d="M 72 38 Q 68 45 66 52" stroke="#14532d" strokeWidth="1.5" fill="none" />

            {/* 5. Tractor driving on fields */}
            {/* Tractor Body */}
            <rect x="49" y="42" width="14" height="8" fill="#ea580c" rx="1" />
            <rect x="55" y="37" width="8" height="6" fill="none" stroke="#ea580c" strokeWidth="1.2" />
            {/* Tractor Exhaust pipe */}
            <line x1="51" y1="42" x2="51" y2="35" stroke="#374151" strokeWidth="1" />
            {/* Big rear wheel */}
            <circle cx="61" cy="51" r="5" fill="#1f2937" stroke="#374151" strokeWidth="0.8" />
            <circle cx="61" cy="51" r="1.5" fill="#f97316" />
            {/* Small front wheel */}
            <circle cx="51" cy="53" r="3" fill="#1f2937" stroke="#374151" strokeWidth="0.8" />
            <circle cx="51" cy="53" r="1" fill="#f97316" />

            {/* 6. Green field grooves at the bottom */}
            <path d="M -10 58 C 20 62, 70 56, 110 58 L 110 100 L -10 100 Z" fill="url(#fieldGrad)" />
            {/* Rows lines details */}
            <path d="M 50 58 L 30 100 M 50 58 L 45 100 M 50 58 L 60 100 M 50 58 L 75 100 M 50 58 L 15 100 M 50 58 L 95 100" stroke="#bef264" strokeWidth="1.2" opacity="0.8" />
          </g>

          {/* Border rings outer representing certificates */}
          <circle cx="50" cy="50" r="47" stroke="#938144" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          <circle cx="50" cy="50" r="49" stroke="#ab9b5b" strokeWidth="0.8" fill="none" />
        </svg>

        {/* Shimmer animation light effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none rounded-full" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline leading-none font-display">
            <span className="text-2xl font-bold text-clay-600 tracking-tight transition-colors duration-300 group-hover:text-clay-500">RE</span>
            <span className="text-2xl font-bold text-sage-700 tracking-tight transition-colors duration-300 group-hover:text-sage-500">SOL</span>
          </div>
          <span className="text-[10px] font-semibold text-sand-600 font-mono tracking-wider uppercase mt-0.5">Agritech Pvt. Ltd.</span>
        </div>
      )}
    </div>
  );
}
