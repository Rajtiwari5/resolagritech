/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-12 h-12", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`relative ${className} shrink-0 transition-transform duration-500 group-hover:scale-105`}>
        <img src={logoImg} alt="Resol Agritech Logo" className="w-full h-full object-contain drop-shadow-md" />
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
