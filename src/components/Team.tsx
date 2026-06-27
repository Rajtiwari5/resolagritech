/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight, Award, Sprout, Landmark, Lightbulb } from 'lucide-react';
import { TEAM_MEMBERS } from '../data';

// Import images statically for Vite production compilation
import founderImg from '../assets/founder.png';
import coFounderImg from '../assets/co founder.png';

export default function Team() {
  
  const renderPersonImage = (id: string, name: string) => {
    let imgSrc = "";
    if (id === 'diksha-kumari') {
      imgSrc = founderImg;
    } else if (id === 'dr-akhil-agrawal') {
      imgSrc = coFounderImg;
    } else {
      imgSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=random`;
    }


    return (
      <img 
        src={imgSrc} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    );
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
                      {renderPersonImage(member.id, member.name)}
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