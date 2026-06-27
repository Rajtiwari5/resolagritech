/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf, Send, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  return (
    <footer className="bg-sand-950 text-white pt-16 pb-12 text-left relative overflow-hidden border-t-4 border-clay-600">
      
      {/* Decorative vectors in dark background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand block (Column 5) */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <Logo className="w-24 h-24" showText={false} />
            </div>

            <p className="text-xs text-sand-300 leading-relaxed font-normal max-w-sm">
              Formulating breakthrough polymer-crosslinker networks to restore soil capillary pores. Spin-off research out of Department of Microbiology, Central University of Rajasthan.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-sand-400">
              <Sparkles className="w-4 h-4 text-clay-500 animate-pulse fill-clay-500/20" />
              <span>DPIIT Startup Certification: Established Pvt Ltd</span>
            </div>
          </div>

          {/* Quick links columns (Column 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#deb081]">Sitemap Directory</h4>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-sand-300">
              <button onClick={() => onTabChange('home-about')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">Home & About</button>
              <button onClick={() => onTabChange('problem-tech')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">Problem & Tech</button>
              <button onClick={() => onTabChange('team')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">Our Team</button>
              <button onClick={() => onTabChange('trials')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">Field Trials</button>
              <button onClick={() => onTabChange('awards')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">Awards & Media</button>
              <button onClick={() => onTabChange('contact')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">Contact Us</button>
            </div>
          </div>

          {/* Compliance & Science columns (Column 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#deb081]">Scientific Board</h4>
            <div className="space-y-2 text-xs text-sand-300">
              <p>• Central University of Rajasthan</p>
              <p>• National Agri-Food Biotechnology</p>
              <p>• National Institute of Agricultural Marketing</p>
              <p className="text-[10px] text-sand-400 font-mono italic pt-1 border-t border-white/5">Licensure: Self-Funded (Partnerships: None)</p>
            </div>
          </div>

        </div>

        {/* Base row watermark and copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sand-400 font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-1">
            <span>&copy; {new Date().getFullYear()} Resol Agritech Pvt. Ltd.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="flex items-center gap-1">
              <span>All Scientific Innovation Reserved</span>
              <Leaf className="w-3.5 h-3.5 text-sage-500 animate-pulse" />
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase text-[#deb081] font-bold tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">TRL-6 Status</span>
            <span>Made in Rajasthan, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
