/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, Leaf, Newspaper, Video, MessageSquareQuote, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { AWARDS_LIST, MEDIA_COVERAGE } from '../data';

export default function Awards() {
  return (
    <section className="pt-20 pb-20 bg-sand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">Awards & Press Validation</h2>
          <p className="text-base text-sand-500">
            Formally validated under Indian national technology framework summits, backed by corporate doctoral research fellowships and major mainstream media.
          </p>
        </div>

        {/* 1. Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              id={`award-card-${award.id}`}
              className="p-6 sm:p-8 rounded-3xl border border-sand-200 bg-white shadow-sm hover:shadow-xl hover:border-sand-300 transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 inline-block">
                    <Award className="w-6 h-6" />
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase text-sand-400">Awarded Milestone</span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug font-display">{award.title}</h3>
                  <span className="text-xs font-semibold text-clay-600 inline-block">{award.recipient}</span>
                </div>

                <p className="text-xs text-sand-500 leading-relaxed font-normal pt-2 border-t border-sand-100">
                  {award.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sand-100 flex items-center gap-2 text-[10px] font-mono font-bold text-sand-400">
                <span className="text-[#ca8a04]">Authorized:</span>
                <span className="text-slate-700 uppercase tracking-wider">{award.authority}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Media highlights & Video channel */}
        <div className="space-y-12">
          
          {/* A. News Clipping Card styled as a premium editorial block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl border border-sand-200 bg-white shadow-sm text-left relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start justify-between"
          >
            <div className="space-y-4 max-w-4xl">
              {/* Header branding */}
              <div className="flex items-center gap-2 text-slate-800 pb-2 border-b border-sand-100">
                <Newspaper className="w-5 h-5 text-sand-500" />
                <span className="font-display font-semibold text-base leading-none tracking-tight">The Hindu</span>
                <span className="text-xs font-mono text-sand-400 font-bold ml-2">| {MEDIA_COVERAGE.date}</span>
              </div>

              {/* Quoted headline */}
              <div className="flex gap-2 text-clay-600">
                <MessageSquareQuote className="w-7 h-7 opacity-20 shrink-0 mt-1" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display leading-tight">
                  &ldquo;{MEDIA_COVERAGE.headline}&rdquo;
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-sand-700 leading-relaxed font-normal pl-9">
                {MEDIA_COVERAGE.extract}
              </p>
            </div>

            {/* Author details */}
            <div className="shrink-0 self-end sm:self-center font-mono text-right space-y-1 min-w-[150px]">
              <span className="text-[10px] text-sand-400 uppercase tracking-wider block">Coverage By</span>
              <span className="text-xs font-bold text-slate-800 block">{MEDIA_COVERAGE.author}</span>
              <span className="inline-block bg-sage-50 text-sage-700 px-2 py-0.5 rounded border border-sage-150 text-[9px]">Verified News Archive</span>
            </div>
          </motion.div>

          {/* B. Magnificent Standalone YouTube Field Documentary Section (Exactly as Mockup) */}
          <motion.div 
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 sm:p-12 rounded-[2rem] border border-sand-200 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Descriptive text and action */}
              <div className="lg:col-span-5 text-left space-y-6 flex flex-col items-start">
                
                {/* Green badge pill matching mockup */}
                <span className="px-3.5 py-1.5 rounded-md bg-[#f0f5ed] border border-[#dce6d7] text-[#34532b] text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-[#34532b]" />
                  <span>Field Experiment Documentary</span>
                </span>

                {/* Paragraph matching mockup */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                  Watch the official physical experiment recording proving soil matrix stability, sand particle coordination, germination, water savings, and wheat harvesting on the Rajasthan desert borders.
                </p>

                {/* Subdued compact anchor button */}
                <a 
                  href="https://www.youtube.com/watch?v=oR-NqcqsGyA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  id="youtube-field-video"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-sand-50 text-xs text-slate-800 font-mono font-bold tracking-wide border border-sand-300 rounded-md shadow-sm transition-all"
                >
                  <span>Open Video in YouTube</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 stroke-slate-500">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>

              {/* Right Column: High-fidelity interactive simulated YouTube play space */}
              <div className="lg:col-span-7">
                <a 
                  href="https://www.youtube.com/watch?v=oR-NqcqsGyA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-full aspect-video rounded-2xl bg-zinc-950 overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all block text-left animate-none"
                >
                  {/* Detailed responsive vector drawing mimicking original video screenshot of students in sand field */}
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
                      {/* Sand base gradient */}
                      <defs>
                        <linearGradient id="sandDeep" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#e2bc8a" />
                          <stop offset="50%" stopColor="#d6aa70" />
                          <stop offset="100%" stopColor="#be9054" />
                        </linearGradient>
                      </defs>

                      {/* Backdrop/trees and horizon */}
                      <rect width="800" height="450" fill="#e9e0d3" />
                      
                      {/* Lush green bushes/trees boundary */}
                      <path d="M 0 145 C 100 120, 220 125, 340 140 C 460 155, 620 120, 800 135 L 800 240 L 0 240 Z" fill="#6a875a" />
                      <path d="M 0 110 C 120 95, 280 115, 420 125 C 560 135, 680 100, 800 115 L 800 180 L 0 180 Z" fill="#506a42" opacity="0.4" />
                      
                      {/* electrical post with gray box/transformer detail */}
                      <line x1="280" y1="110" x2="280" y2="240" stroke="#485c3f" strokeWidth="2.5" />
                      <rect x="272" y="155" width="16" height="22" fill="#9ca3af" stroke="#4b5563" strokeWidth="1" />
                      <line x1="250" y1="115" x2="310" y2="115" stroke="#4b5563" strokeWidth="1" />
                      <line x1="280" y1="115" x2="280" y2="155" stroke="#4b5563" strokeWidth="1" />

                      {/* Arid sand field ground floor */}
                      <rect y="210" width="800" height="240" fill="url(#sandDeep)" />

                      {/* Perspective deep furrows (trenches shown in the field trial video image) */}
                      <path d="M 120 450 L 260 210" stroke="#92622f" strokeWidth="3" opacity="0.3" />
                      <path d="M 280 450 L 330 210" stroke="#92622f" strokeWidth="3" opacity="0.3" />
                      <path d="M 420 450 L 400 210" stroke="#92622f" strokeWidth="3" opacity="0.3" />
                      <path d="M 540 450 L 470 210" stroke="#92622f" strokeWidth="3" opacity="0.3" />
                      <path d="M 680 450 L 550 210" stroke="#92622f" strokeWidth="3" opacity="0.3" />

                      {/* Alignment ropes & stake grids */}
                      <line x1="160" y1="380" x2="160" y2="420" stroke="#372514" strokeWidth="3" />
                      <line x1="240" y1="365" x2="240" y2="400" stroke="#372514" strokeWidth="3" />
                      <line x1="335" y1="345" x2="335" y2="375" stroke="#372514" strokeWidth="3" />
                      <line x1="450" y1="330" x2="450" y2="360" stroke="#372514" strokeWidth="3" />
                      <line x1="560" y1="320" x2="560" y2="350" stroke="#372514" strokeWidth="3" />

                      {/* String matrix system */}
                      <line x1="60" y1="385" x2="740" y2="335" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.85" />
                      <line x1="80" y1="410" x2="760" y2="355" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.85" />
                      <line x1="40" y1="355" x2="700" y2="310" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />

                      {/* Sowing Student 1 Silhouette / Figure (bending model in middle/left) */}
                      {/* Leaning forward, planting */}
                      <g>
                        {/* head */}
                        <circle cx="515" cy="270" r="10.5" fill="#fcd34d" />
                        <ellipse cx="513" cy="265" rx="10" ry="7" fill="#18181b" /> {/* hair */}
                        
                        {/* shirt (Ochre) */}
                        <path d="M 515 278 C 532 258, 555 258, 570 268 C 555 288, 545 292, 532 292 Z" fill="#d97706" />
                        
                        {/* pants (Indigo) */}
                        <path d="M 552 284 L 568 335 L 554 338 L 542 300 Q 538 316 532 334 L 518 330 L 532 288 Z" fill="#1e1b4b" />
                        
                        {/* arms working under soil */}
                        <path d="M 514 278 L 500 310" stroke="#eab308" strokeWidth="5.5" strokeLinecap="round" />
                      </g>

                      {/* Standing Student 2 Silhouette on the right (with hair & glasses) */}
                      <g>
                        {/* head & hair */}
                        <circle cx="658" cy="205" r="11" fill="#fcd34d" />
                        <path d="M 648 194 C 654 188, 666 188, 670 198 L 668 221 Q 654 221 648 205 Z" fill="#27272a" />
                        
                        {/* shirt (Slate grey blue) */}
                        <path d="M 646 216 L 670 216 L 666 265 L 648 265 Z" fill="#5f8796" stroke="#5f8796" strokeWidth="2" strokeLinejoin="round" />
                        
                        {/* arms tracking parameters */}
                        <path d="M 650 218 Q 634 230 642 245" stroke="#fcd34d" strokeWidth="5" fill="none" strokeLinecap="round" />
                        <path d="M 665 218 Q 675 228 668 242" stroke="#fcd34d" strokeWidth="5" fill="none" strokeLinecap="round" />

                        {/* pants (Blue) */}
                        <path d="M 648 266 L 644 345 L 654 345 L 658 290 L 660 345 L 670 345 L 666 266 Z" fill="#111827" />
                      </g>
                    </svg>
                  </div>

                  {/* Dark transparent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

                  {/* Top Header Controls (Central University of Rajasthan Logo & EERG Lab text) */}
                  <div className="absolute top-4 left-4 flex items-center gap-3 select-none">
                    {/* Integrated CURAJ Leaf Badge logo */}
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-emerald-500 shadow-sm shrink-0">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-100 to-green-150 flex items-center justify-center text-emerald-700">
                        <Leaf className="w-5 h-5 fill-emerald-600/20" />
                      </div>
                    </div>

                    <div className="text-white drop-shadow-md">
                      <h4 className="text-xs sm:text-sm font-semibold tracking-tight leading-tight">
                        Desert Soilification Field Experiment video
                      </h4>
                      <p className="text-[10px] text-zinc-300 font-medium font-mono leading-none mt-0.5">
                        EERG Laboratory
                      </p>
                    </div>
                  </div>

                  {/* Top Right: Bayer Corporate Logo in White Circular Frame */}
                  <div className="absolute top-4 right-4 text-white drop-shadow-md flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center p-0.5 leading-none shrink-0" title="Bayer Sponsor">
                      <div className="text-[7px] font-mono tracking-widest font-extrabold text-[#94a3b8] scale-90 mb-[1px]">BAYER</div>
                      <div className="w-5 h-px bg-white/20 select-none" />
                      <div className="text-[6px] font-bold text-emerald-400 mt-[1.5px] tracking-tight">SPONSOR</div>
                    </div>
                  </div>

                  {/* Giant Central Red YouTube Play Toggle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-11 bg-[#ff0000] text-white flex items-center justify-center rounded-2xl shadow-xl transition-all duration-300 group-hover:bg-[#cc0000] group-hover:scale-110">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 translate-x-[1px]">
                        <path d="M8 5v14l11-7z" strokeLinejoin="miter" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Controls Panel (Share Indicator, Clock, Watch on YouTube Button) */}
                  <div className="absolute bottom-12 inset-x-0 px-4 flex justify-between items-center text-white/90">
                    
                    {/* Action toggles bottom left */}
                    <div className="flex items-center gap-4">
                      {/* Curved share arrow */}
                      <button className="p-1.5 hover:text-white transition-all cursor-pointer" title="Share Video">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                      </button>
                      
                      {/* Clock icon */}
                      <button className="p-1.5 hover:text-white transition-all cursor-pointer" title="Watch Later">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </button>
                    </div>

                    {/* Translucient Watch on YouTube bottom-right badge */}
                    <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-md text-xs font-semibold backdrop-blur-xs select-none border border-white/5 cursor-pointer">
                      <span className="text-[10px] text-zinc-300 font-normal">Watch on</span>
                      <span className="inline-flex items-center gap-0.5 font-bold tracking-tight text-white scale-95 origin-left">
                        {/* Small red triangle */}
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-red-600 inline">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span>YouTube</span>
                      </span>
                    </div>

                  </div>

                  {/* Dark Blue Static Title Base Strip matching User image */}
                  <div className="absolute bottom-0 inset-x-0 h-9 bg-[#13224b] border-t border-blue-950/40 flex items-center justify-center">
                    <span className="text-white text-xs font-bold italic font-serif tracking-wide select-none">
                      Seed Sowing (Mung, Guar and Pearl Millet)
                    </span>
                  </div>

                </a>
              </div>

            </div>
          </motion.div>

        </div>


      </div>
    </section>
  );
}
