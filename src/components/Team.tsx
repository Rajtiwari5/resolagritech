/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, Award, Sprout, Landmark, Lightbulb } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

export default function Team() {
  
  // Render high-fidelity SVG portraits that portray them as professional researchers and strategists
  const renderArtisticPortrait = (id: string) => {
    if (id === 'diksha-kumari') {
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fee2e2" />
              <stop offset="60%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="labCoat" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>
            <clipPath id="portraitClip">
              <rect width="400" height="500" rx="32" />
            </clipPath>
          </defs>
          
          <g clipPath="url(#portraitClip)">
            {/* Background: Sunset agricultural field out of focus */}
            <rect width="400" height="500" fill="url(#sunsetSky)" />
            {/* Distant mountains/dunes */}
            <path d="M -50 320 Q 100 240 250 300 T 450 280 L 450 500 L -50 500 Z" fill="#b45309" opacity="0.15" />
            <path d="M -50 280 Q 80 220 200 270 T 450 240 L 450 500 L -50 500 Z" fill="#d97706" opacity="0.1" />
            
            {/* Decorative growing green leaves inside background */}
            <g opacity="0.25">
              <circle cx="80" cy="180" r="16" fill="#15803d" />
              <circle cx="340" cy="120" r="22" fill="#166534" />
              <circle cx="350" cy="380" r="30" fill="#15803d" />
            </g>

            {/* Main torso (Researcher Lab Coat & Vest) */}
            <g>
              {/* Dark inner top */}
              <path d="M 120 400 L 280 400 L 260 500 L 140 500 Z" fill="#0f172a" />
              {/* Lab Coat */}
              <path d="M 80 430 Q 130 380 200 380 Q 270 380 320 430 L 340 500 L 60 500 Z" fill="url(#labCoat)" stroke="#cbd5e1" strokeWidth="1.5" />
              {/* Lapels */}
              <path d="M 140 380 L 165 440 L 140 460" stroke="#cbd5e1" strokeWidth="2" fill="#ffffff" />
              <path d="M 260 380 L 235 440 L 260 460" stroke="#cbd5e1" strokeWidth="2" fill="#ffffff" />
              {/* Medha Scholar Badge */}
              <rect x="110" y="440" width="18" height="24" rx="2" fill="#ca8a04" />
              <circle cx="119" cy="448" r="4" fill="#fef08a" />
            </g>

            {/* Neck & Head */}
            <rect x="175" y="300" width="50" height="90" fill="#fbcfe8" opacity="0.12" />
            <rect x="175" y="320" width="50" height="70" fill="#fbe5d6" />
            <path d="M 140 230 C 140 140, 260 140, 260 230 C 260 310, 140 310, 140 230 Z" fill="#f3c6a5" />

            {/* Hair: Long, elegant dark hair */}
            <g>
              <path d="M 130 230 C 120 120, 280 120, 270 230 C 285 340, 290 420, 280 460 C 250 430, 240 440, 200 440 C 160 440, 150 430, 120 460 C 110 420, 115 340, 130 230 Z" fill="url(#hairGrad)" />
              {/* Hair strands */}
              <path d="M 140 210 Q 200 170 260 210" fill="none" stroke="#312e81" strokeWidth="4" />
            </g>

            {/* Facial features */}
            <g>
              {/* Eyes */}
              <ellipse cx="178" cy="225" rx="3.5" ry="2" fill="#1e293b" />
              <ellipse cx="222" cy="225" rx="3.5" ry="2" fill="#1e293b" />
              {/* Eyebrows */}
              <path d="M 168 218 Q 178 214 186 219" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M 232 218 Q 222 214 214 219" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Friendly smile */}
              <path d="M 185 258 Q 200 274 215 258" stroke="#be123c" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              {/* Cheeks blush */}
              <circle cx="164" cy="238" r="8" fill="#fda4af" opacity="0.3" />
              <circle cx="236" cy="238" r="8" fill="#fda4af" opacity="0.3" />
            </g>

            {/* Hands holding growing test tube container */}
            <g>
              <rect x="188" y="390" width="24" height="65" rx="12" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" opacity="0.9" />
              {/* Blue fluid and young green plant */}
              <rect x="191" y="415" width="18" height="36" rx="9" fill="#38bdf8" opacity="0.8" />
              {/* Green Sprout */}
              <path d="M 200 425 Q 200 375 220 370" fill="none" stroke="#22c55e" strokeWidth="3.2" strokeLinecap="round" />
              <path d="M 200 405 Q 185 395 190 380" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
            </g>

          </g>
        </svg>
      );
    }

    if (id === 'dr-akhil-agrawal') {
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="scientificBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dbeafe" />
              <stop offset="50%" stopColor="#eff6ff" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </linearGradient>
            <linearGradient id="suitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <clipPath id="portraitClip2">
              <rect width="400" height="500" rx="32" />
            </clipPath>
          </defs>

          <g clipPath="url(#portraitClip2)">
            {/* Background */}
            <rect width="400" height="500" fill="url(#scientificBlue)" />
            {/* Hexagon lattice nodes representing molecular microbiology */}
            <g opacity="0.15" stroke="#2563eb" strokeWidth="1.5" fill="none">
              <polygon points="100,80 140,60 180,80 180,120 140,140 100,120" />
              <polygon points="180,80 220,60 260,80 260,120 220,140 180,120" />
              <circle cx="140" cy="60" r="4" fill="#2563eb" />
              <circle cx="180" cy="80" r="4" fill="#2563eb" />
              <circle cx="220" cy="60" r="4" fill="#2563eb" />
            </g>

            {/* Torso: Academic navy coat and tie */}
            <g>
              <path d="M 80 420 Q 140 370 200 370 Q 260 370 320 420 L 330 500 L 70 500 Z" fill="url(#suitGrad)" stroke="#1e293b" strokeWidth="1" />
              {/* White collar */}
              <path d="M 160 370 L 200 425 L 240 370 Z" fill="#ffffff" />
              {/* Emerald Green Ties */}
              <path d="M 195 400 L 205 400 L 212 480 L 188 480 Z" fill="#047857" />
            </g>

            {/* Neck and Head */}
            <rect x="180" y="300" width="40" height="80" fill="#f5d0ba" opacity="0.1" />
            <rect x="180" y="315" width="40" height="60" fill="#f5cbb0" />
            <path d="M 145 220 C 145 135, 255 135, 255 220 C 255 295, 145 295, 145 220 Z" fill="#f1be9b" />

            {/* Hair: Slicked professional look */}
            <g>
              <path d="M 142 210 C 138 120, 262 120, 258 210 C 258 210, 250 140, 200 140 C 150 140, 142 210, 142 210 Z" fill="#18181b" />
              {/* Sharp professor beard stubble/beard */}
              <path d="M 152 225 Q 152 284 200 284 Q 248 284 248 225 L 235 230 Q 200 252 165 230 Z" fill="#27272a" opacity="0.9" />
            </g>

            {/* Spectacles representation */}
            <g>
              <rect x="160" y="195" width="30" height="20" rx="4" stroke="#111827" strokeWidth="3.2" fill="none" />
              <rect x="210" y="195" width="30" height="20" rx="4" stroke="#111827" strokeWidth="3.2" fill="none" />
              <line x1="190" y1="205" x2="210" y2="205" stroke="#111827" strokeWidth="3.2" />
            </g>

            {/* Smile and Eyes */}
            <g>
              <circle cx="175" cy="205" r="2.5" fill="#000000" />
              <circle cx="225" cy="205" r="2.5" fill="#000000" />
              <path d="M 188 245 Q 200 258 212 245" stroke="#000000" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            </g>

          </g>
        </svg>
      );
    }

    if (id === 'anjana-sanganeria') {
      return (
        <svg viewBox="0 0 400 500" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="warmOchre" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffeedd" />
              <stop offset="100%" stopColor="#ffe4cc" />
            </linearGradient>
            <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#1e1847" />
            </linearGradient>
            <clipPath id="portraitClip3">
              <rect width="400" height="500" rx="32" />
            </clipPath>
          </defs>

          <g clipPath="url(#portraitClip3)">
            {/* Background */}
            <rect width="400" height="500" fill="url(#warmOchre)" />
            
            {/* Soft geometric commercial growth arrows in background */}
            <g opacity="0.12" fill="none" stroke="#ea580c" strokeWidth="2">
              <path d="M 50 350 L 120 280 L 160 300 L 240 210" />
              <polyline points="220,210 240,210 240,230" strokeWidth="3" />
            </g>

            {/* Torso: Chic Indigo blazer suit */}
            <g>
              <path d="M 80 430 Q 140 380 200 380 Q 260 380 320 430 L 330 500 L 70 500 Z" fill="url(#blazerGrad)" stroke="#1e1b4b" strokeWidth="1" />
              {/* Ochre blouse collar underneath */}
              <path d="M 170 380 L 200 440 L 230 380 Z" fill="#fdba74" />
            </g>

            {/* Neck and Head */}
            <rect x="180" y="310" width="40" height="70" fill="#fae8ff" opacity="0.1" />
            <rect x="180" y="325" width="40" height="55" fill="#fbd3b6" />
            <path d="M 148 225 C 148 140, 252 140, 252 225 C 252 300, 148 300, 148 225 Z" fill="#ebbe9a" />

            {/* Hair: Stylish professional bob haircut */}
            <g>
              <path d="M 136 220 Q 130 110 200 110 Q 270 110 264 220 C 260 280, 274 340, 260 340 C 240 320, 245 328, 200 328 C 155 328, 160 320, 140 340 C 126 340, 140 280, 136 220 Z" fill="#2d1500" />
              {/* Front sidebangs */}
              <path d="M 145 190 Q 170 145 200 155" stroke="#2d1500" strokeWidth="4" fill="none" />
            </g>

            {/* Eyes, blush and smile */}
            <g>
              <circle cx="180" cy="215" r="3" fill="#1e1b4b" />
              <circle cx="220" cy="215" r="3" fill="#1e1b4b" />
              
              <path d="M 190 250 Q 200 264 210 250" stroke="#b91c1c" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="166" cy="232" rx="7" ry="4" fill="#f43f5e" opacity="0.25" />
              <ellipse cx="234" cy="232" rx="7" ry="4" fill="#f43f5e" opacity="0.25" />
            </g>

          </g>
        </svg>
      );
    }

    return null;
  };

  const ClaySquiggles = () => (
    <svg viewBox="0 0 60 180" className="absolute top-[20%] -right-7 w-12 h-44 pointer-events-none stroke-[#c47743] fill-none opacity-90 hidden sm:block" strokeWidth="2.8" strokeLinecap="round">
      <path d="M 12 20 A 12 12 0 0 1 37 20" />
      <path d="M 27 40 A 12 12 0 0 1 52 40" />
      <path d="M 7 60 A 12 12 0 0 1 32 60" />
      <path d="M 17 80 A 12 12 0 0 1 42 80" />
      <path d="M 30 100 A 12 12 0 0 1 55 100" />
      <path d="M 12 120 A 12 12 0 0 1 37 120" />
      <path d="M 22 140 A 12 12 0 0 1 47 140" />
      <path d="M 7 160 A 12 12 0 0 1 32 160" />
      <path d="M 20 180 A 12 12 0 0 1 45 180" />
    </svg>
  );

  // Return custom bold headline prompts matched visually with Apeel-style "Let's talk about..." editorial vibes
  const getFounderEditorialTheme = (id: string) => {
    switch(id) {
      case "diksha-kumari":
        return {
          leadWord: "The Science of Restorative Agriculture",
          boldQuote: "Let's talk about the product.",
          iconBadge: <Sprout className="w-5 h-5 text-emerald-700" />
        };
      case "dr-akhil-agrawal":
        return {
          leadWord: "Pioneering Environmental Microbiology",
          boldQuote: "Let's talk about the biological proof.",
          iconBadge: <Landmark className="w-5 h-5 text-blue-700" />
        };
      case "anjana-sanganeria":
        return {
          leadWord: "Empowering Farmers & Restoring Capital",
          boldQuote: "Let's talk about the market impact.",
          iconBadge: <Lightbulb className="w-5 h-5 text-orange-700" />
        };
      default:
        return {
          leadWord: "Resol Leadership Pillars",
          boldQuote: "Let's talk about the future.",
          iconBadge: <Award className="w-5 h-5 text-clay-700" />
        };
    }
  };

  return (
    <section className="pt-20 pb-24 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-left mb-24 space-y-3"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-none">
            Our Core Team
          </h2>
          <p className="text-base sm:text-lg text-sand-600 leading-relaxed font-normal max-w-xl">
            A tight-knit collaborative of doctoral microbiologists, scientific mentors, and business planners engineering high-impact soilification agents.
          </p>
        </motion.div>

        {/* Clean, Magnificently Stacked Founder Rows: Photo Left, Content Right */}
        <div className="space-y-32 border-t border-sand-200/40">
          {TEAM_MEMBERS.map((member) => {
            const ed = getFounderEditorialTheme(member.id);

            return (
              <motion.div 
                key={member.id} 
                id={`founder-row-${member.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-24 first:pt-0"
              >
                
                {/* 1. Profile Picture Column on the Left with organic clay squiggles overlapping */}
                <div className="lg:col-span-5 flex justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5]"
                  >
                    
                    {/* The Squiggle curves behind/overlapping right border exactly like Apeel style image */}
                    <ClaySquiggles />

                    {/* Premium Card containing the portrait illustration */}
                    <div className="w-full h-full rounded-[2.5rem] bg-[#efebe4] border border-[#dcd6cb] overflow-hidden shadow-sm flex items-center justify-center relative translate-x-0 outline outline-8 outline-white/15">
                      {renderArtisticPortrait(member.id)}
                    </div>

                    {/* Bayer Medha or CURAJ Badge overlay */}
                    {member.id === 'diksha-kumari' && (
                      <div className="absolute -bottom-4 -left-4 bg-[#b55716] text-white px-4 py-2 rounded-2xl border-4 border-[#faf6f0] text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                        Bayer Medha Fellow
                      </div>
                    )}
                    {member.id === 'dr-akhil-agrawal' && (
                      <div className="absolute -bottom-4 -left-4 bg-[#1e40af] text-white px-4 py-2 rounded-2xl border-4 border-[#faf6f0] text-[10px] font-mono font-bold uppercase tracking-widest shadow-md">
                        CURAJ Mentor
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* 2. Detailed Technical & Biographical Narrative Column on the Right */}
                <div className="lg:col-span-7 text-left space-y-6">
                  
                  {/* Lead statement tag */}
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-[#f0ebd8] border border-[#dfd6be]">
                      {ed.iconBadge}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7c6339] font-mono">
                      {ed.leadWord}
                    </span>
                  </div>

                  {/* Bold editorial headline statement */}
                  <div className="space-y-4">
                    <h3 className="text-3xl sm:text-5.5xl font-extrabold text-[#111827] tracking-tight leading-none font-display">
                      {ed.boldQuote}
                    </h3>

                    {/* Clean formatted founder subtitle */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5 pt-1.5">
                      <span className="text-xl font-bold font-display text-slate-800">{member.name}</span>
                      <span className="hidden sm:inline text-sand-300">|</span>
                      <span className="text-xs font-bold font-mono text-clay-600 block sm:inline uppercase tracking-wide">{member.role}</span>
                    </div>

                    <span className="text-xs font-semibold text-sand-500 block">
                      {member.degree}
                    </span>
                  </div>

                  {/* Narrative Bio Paragraphs */}
                  <div className="space-y-4 text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                    {member.bio.map((para, pIdx) => (
                      <p key={pIdx}>
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Link action footers */}
                  <div className="pt-6 border-t border-[#e8dfcf] flex flex-wrap gap-4 items-center">
                    
                    {member.socials.email && (
                      <a 
                        href={`mailto:${member.socials.email}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 hover:text-clay-600 transition-colors border-b-2 border-slate-800 hover:border-clay-600 pb-0.5"
                      >
                        <span>Direct Mail</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 hover:text-clay-600 transition-colors border-b-2 border-slate-800 hover:border-clay-600 pb-0.5"
                      >
                        <span>Professional LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

