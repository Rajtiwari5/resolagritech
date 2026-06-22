/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, MapPin, Calendar, Compass, ChevronRight, ChevronLeft, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';
import { FIELD_TRIALS } from '../data';

export default function FieldTrials() {
  const [activeTrialIndex, setActiveTrialIndex] = useState(1); // Default to TRL-6 (Real Field Scale)
  const currentTrial = FIELD_TRIALS[activeTrialIndex];

  // Helper mock representation of photos based on GPS screenshots inside the PDF
  const renderMockTrialPhoto = (phase: string, stepIndex: number) => {
    const isTRL6 = phase === 'TRL-6';
    
    // Custom vector mock rendering for the soil steps shown in the PDF photos
    return (
      <svg viewBox="0 0 160 100" className="w-full h-full object-cover">
        <defs>
          <linearGradient id="photoSand" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="photoSoil" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <linearGradient id="photoSprout" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>
        </defs>

        {/* Outer frame */}
        <rect width="160" height="100" fill="#f1f5f9" />

        {/* Image Content depending on step and phase */}
        {isTRL6 ? (
          // TRL-6 Pushkar Real field images simulation
          stepIndex === 0 ? (
            // Phase 1: Tonnes of Sandy Desert prepping
            <g>
              <rect width="160" height="100" fill="url(#photoSand)" />
              <path d="M 0 85 Q 35 45 80 80 T 160 70 L 160 100 L 0 100 T 0 85" fill="#b45309" opacity="0.6" />
              <path d="M 0 50 L 160 55" stroke="#78350f" strokeWidth="1" strokeDasharray="2 1" />
              {/* Raking human avatar */}
              <circle cx="110" cy="50" r="4" fill="#1e293b" />
              <line x1="110" y1="54" x2="110" y2="70" stroke="#1e293b" strokeWidth="2" />
              <line x1="110" y1="58" x2="100" y2="65" stroke="#1e293b" strokeWidth="1.5" />
              <line x1="100" y1="65" x2="95" y2="75" stroke="#1e293b" strokeWidth="1" /> {/* rake handle */}
              <line x1="92" y1="75" x2="98" y2="75" stroke="#1e293b" strokeWidth="2" /> {/* rake tooth */}
            </g>
          ) : stepIndex === 1 ? (
            // Phase 2: Mixing bioformulation inside water channel
            <g>
              <rect width="160" height="100" fill="url(#photoSoil)" />
              {/* Trench */}
              <path d="M 40 100 L 70 40 L 90 40 L 120 100 Z" fill="#451a03" />
              {/* Water pouring */}
              <path d="M 70 40 Q 80 50 80 100" stroke="#38bdf8" strokeWidth="12" fill="none" opacity="0.8" />
              <path d="M 90 40 Q 82 50 80 100" stroke="#bae6fd" strokeWidth="4" fill="none" opacity="0.9" />
              {/* Pouring bucket avatar */}
              <path d="M 52 25 L 64 35 L 56 42 L 44 32 Z" fill="#94a3b8" />
              <path d="M 56 32 Q 80 44 80 50" stroke="#e0f2fe" strokeWidth="3" fill="none" />
            </g>
          ) : stepIndex === 2 ? (
            // Phase 3: Sowing wheat map
            <g>
              <rect width="160" height="100" fill="url(#photoSoil)" />
              {/* Field lines grid */}
              <path d="M 10 10 L 10 90 M 35 10 L 35 90 M 60 10 L 60 90 M 85 10 L 85 90 M 110 10 L 110 90 M 135 10 L 135 90" stroke="#d97706" strokeWidth="1" opacity="0.4" />
              <path d="M 0 35 L 160 35 M 0 65 L 160 65" stroke="#d97706" strokeWidth="1" opacity="0.4" />
              {/* Scientific grid board labels */}
              <rect x="25" y="15" width="110" height="70" fill="white" rx="4" opacity="0.95" stroke="#658465" strokeWidth="1.2" />
              <text x="35" y="32" fontSize="9" fontWeight="bold" fill="#1e293b">RESOL FIELD TRIAL</text>
              <text x="35" y="44" fontSize="7" fill="#475569">Crop: Wheat-4079</text>
              <text x="35" y="54" fontSize="6" fill="#15803d">Sponsor: CSIR, DST, BAYER</text>
              <text x="35" y="66" fontSize="6" fontStyle="italic" fill="#c2410c">Location: Banseli, Rajasthan</text>
              {/* little flags */}
              <circle cx="120" cy="40" r="1.5" fill="#ef4444" />
              <line x1="120" y1="40" x2="120" y2="48" stroke="#1f2937" strokeWidth="1" />
            </g>
          ) : stepIndex === 3 ? (
            // Phase 4: Wheat green growing with minimal watering
            <g>
              <rect width="160" height="100" fill="#a3e635" />
              <path d="M 0 100 L 40 40 L 70 100 M 50 100 L 90 20 L 130 100" fill="url(#photoSprout)" />
              <path d="M 10 100 L 45 45 L 80 100 M 60 100 L 95 25 L 140 100" fill="url(#photoSprout)" opacity="0.8" />
              {/* Water droplet minimal badge */}
              <circle cx="135" cy="25" r="11" fill="#3b82f6" />
              <text x="127" y="28" fontSize="8" fontWeight="bold" fill="white" fontFamily="monospace">3X</text>
              <text x="128" y="36" fontSize="4.5" fill="#bfdbfe" fontFamily="sans-serif">WATERS</text>
            </g>
          ) : (
            // Phase 5: Harvest golden crop grains
            <g>
              <rect width="160" height="100" fill="#fef08a" /> {/* golden grain fields */}
              <path d="M 15 100 L 25 20 Q 28 5 35 30 M 45 100 L 55 15 Q 58 5 65 25 M 75 100 L 85 22 Q 88 5 95 30" stroke="#ca8a04" strokeWidth="2" fill="none" />
              {/* Sacks of wheat harvested grains */}
              <rect x="105" y="55" width="22" height="32" rx="4" fill="#cbd5e1" stroke="#94a3b8" />
              <path d="M 105 55 Q 116 51 127 55" stroke="#94a3b8" fill="none" />
              <circle cx="116" cy="68" r="4" fill="#a1a1aa" opacity="0.1" />
              
              <rect x="129" y="60" width="20" height="28" rx="4" fill="#e4e4e7" stroke="#cbd5e1" />
              {/* Grains inside sacks */}
              <ellipse cx="116" cy="54" rx="10" ry="4" fill="#d97706" />
              <ellipse cx="139" cy="59" rx="9" ry="3" fill="#ca8a04" />
            </g>
          )
        ) : (
          // TRL-5 Pilot scale image simulation steps
          stepIndex === 0 ? (
            <g>
              <rect width="160" height="100" fill="#cbd5e1" />
              {/* Large industrial blending tub */}
              <ellipse cx="80" cy="70" rx="45" ry="18" fill="#475569" />
              <ellipse cx="80" cy="65" rx="43" ry="15" fill="#38bdf8" /> {/* active hydration */}
              <path d="M 37 66 L 37 84 A 43 15 0 0 0 123 84 L 123 66" fill="#475569" />
              {/* liquid lines */}
              <path d="M 45 65 Q 80 72 115 65" stroke="#e0f2fe" strokeWidth="1" fill="none" opacity="0.5" />
            </g>
          ) : stepIndex === 1 ? (
            <g>
              <rect width="160" height="100" fill="url(#photoSand)" />
              {/* Dividers grids */}
              <line x1="80" y1="0" x2="80" y2="100" stroke="#b45309" strokeWidth="2" />
              <line x1="0" y1="50" x2="160" y2="50" stroke="#b45309" strokeWidth="2" />
              <text x="15" y="30" fontSize="10" fill="white" fontWeight="bold">Treated G1</text>
              <text x="95" y="30" fontSize="10" fill="white" fontWeight="bold">Control G2</text>
            </g>
          ) : stepIndex === 2 ? (
            <g>
              <rect width="160" height="100" fill="url(#photoSand)" />
              {/* Spray nozzle avatar */}
              <line x1="80" y1="10" x2="80" y2="35" stroke="#4b5563" strokeWidth="3" />
              <path d="M 72 35 L 88 35 L 80 44 Z" fill="#1f2937" />
              {/* Droplets spray mist */}
              <path d="M 80 44 L 40 85 M 80 44 L 60 85 M 80 44 L 80 85 M 80 44 L 100 85 M 80 44 L 120 85" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
            </g>
          ) : stepIndex === 3 ? (
            <g>
              <rect width="160" height="100" fill="url(#photoSoil)" />
              {/* seeds planted */}
              <circle cx="35" cy="65" r="2.5" fill="#fcd34d" />
              <circle cx="80" cy="55" r="2.5" fill="#fcd34d" />
              <circle cx="125" cy="70" r="2.5" fill="#fcd34d" />
            </g>
          ) : (
            <g>
              <rect width="160" height="100" fill="url(#photoSoil)" />
              {/* Guar green crop vertical leaves sprouts */}
              <path d="M 35 100 Q 30 75 35 60 Q 38 45 32 35" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 35 60 Q 45 52 48 40" stroke="#22c55e" strokeWidth="1.8" fill="none" />
              <path d="M 80 100 Q 82 80 78 68 Q 74 55 81 42" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </g>
          )
        )}

        {/* GPS map camera text overlays replicating real field screenshot values */}
        <rect x="5" y="72" width="150" height="23" fill="black/65" rx="2" />
        <text x="10" y="80" fontSize="4.5" fill="white" fontFamily="monospace">GPS Camera: Banseli, Rajasthan, India</text>
        <text x="10" y="86" fontSize="4" fill="#a1a1aa" fontFamily="monospace">Lat: {isTRL6 ? '26.521105°' : '26.521098°'} Long: 74.561076° | {isTRL6 ? 'Nov 2024' : 'Aug 2024'}</text>
        <text x="10" y="92" fontSize="4" fill="#ca8a04" fontFamily="monospace">Elev: TRL-Level {phase}</text>
      </svg>
    );
  };

  // Internal carousel tracker for steps
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const prevStep = () => {
    setActiveStepIdx((prev) => (prev === 0 ? currentTrial.detailedSteps.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setActiveStepIdx((prev) => (prev === currentTrial.detailedSteps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">Field Trials & Scale-up Proof</h2>
          <p className="text-base text-sand-500">
            Validated at multiple levels of technology readiness: TRL-5 controlled agricultural laboratory frames, leading to TRL-6 open desert crop harvest lines.
          </p>
        </motion.div>

        {/* Toggle block tabs TRL-5 vs TRL-6 */}
        <div className="flex justify-center p-1.5 rounded-2xl bg-sand-100 max-w-md mx-auto mb-16 shadow-inner border border-sand-200">
          <button
            onClick={() => {
              setActiveTrialIndex(0);
              setActiveStepIdx(0);
            }}
            id="trl5-toggle"
            className={`flex-1 py-3 px-5 rounded-xl font-bold text-sm tracking-wide transition-all uppercase cursor-pointer ${
              activeTrialIndex === 0 
                ? 'bg-gradient-to-r from-clay-600 to-clay-800 text-white shadow-md' 
                : 'text-sand-700 hover:text-clay-600'
            }`}
          >
            TRL-5 Pilot Grid (Guar / Bajra)
          </button>
          
          <button
            onClick={() => {
              setActiveTrialIndex(1);
              setActiveStepIdx(0);
            }}
            id="trl6-toggle"
            className={`flex-1 py-3 px-5 rounded-xl font-bold text-sm tracking-wide transition-all uppercase cursor-pointer ${
              activeTrialIndex === 1 
                ? 'bg-gradient-to-r from-clay-600 to-clay-800 text-white shadow-md' 
                : 'text-sand-700 hover:text-clay-600'
            }`}
          >
            TRL-6 Pushkar Field (Wheat)
          </button>
        </div>

        {/* Active trial segment showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrialIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl border border-sand-200 bg-[#fbfbf9]/75 shadow-lg"
          >
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Narrative: 7 columns */}
              <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Location and crops tags */}
              <div className="flex flex-wrap gap-4 items-center">
                <span className="px-3.5 py-1.5 rounded bg-sage-50 text-sage-800 border border-sage-200 text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentTrial.location}</span>
                </span>
                
                <span className="px-3.5 py-1.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Sprout className="w-3.5 h-3.5" />
                  <span>{currentTrial.crops}</span>
                </span>

                {currentTrial.date && (
                  <span className="px-3 py-1 text-xs font-bold text-sand-500 font-mono tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{currentTrial.date}</span>
                  </span>
                )}
              </div>

              {/* Title & summary paragraph */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a160d] tracking-tight font-display">
                  {currentTrial.title} ({currentTrial.phase})
                </h3>
                <p className="text-md text-sand-800 leading-relaxed font-normal">
                  {currentTrial.description}
                </p>
              </div>

              {/* Interactive step tracker checklist panel */}
              <div className="space-y-3 pt-3 border-t border-sand-200/60 font-sans">
                <span className="text-[10px] font-mono font-bold text-[#786637] uppercase tracking-widest block">Chronological Field Chronology:</span>
                
                <div className="space-y-2.5">
                  {currentTrial.detailedSteps.map((step, idx) => {
                    const isSelected = activeStepIdx === idx;
                    return (
                      <motion.div 
                        key={step.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        onClick={() => setActiveStepIdx(idx)}
                        className={`flex items-start gap-3.5 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? 'bg-white border-[#deb081] shadow-md translate-x-2' 
                            : 'bg-white/40 border-sand-150 text-sand-700 hover:bg-white/60'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono shrink-0 ${
                          isSelected ? 'bg-clay-600 text-white' : 'bg-sand-200 text-sand-600'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-slate-800 leading-none">{step.label}</h4>
                          <p className={`text-xs text-sand-500 font-normal leading-relaxed mt-1.5 overflow-hidden transition-all duration-300 ${isSelected ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                            {step.detail}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right GPS photos visualization panel: 5 columns */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full relative shadow-lg rounded-3xl overflow-hidden border border-sand-200 aspect-[4/3] bg-sand-100">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeStepIdx + '-' + currentTrial.phase}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {renderMockTrialPhoto(currentTrial.phase, activeStepIdx)}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Photo slide controller row */}
              <div className="flex items-center gap-4 mt-6">
                <button
                  onClick={prevStep}
                  id="prev-field-step"
                  className="p-2 rounded-xl bg-white border border-sand-200 hover:bg-sand-50 text-sand-700 cursor-pointer shadow-sm transition-all"
                  title="Previous Step"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono font-extrabold text-[#786637]">
                  Step {activeStepIdx + 1} of {currentTrial.detailedSteps.length}
                </span>
                <button
                  onClick={nextStep}
                  id="next-field-step"
                  className="p-2 rounded-xl bg-white border border-sand-200 hover:bg-sand-50 text-sand-700 cursor-pointer shadow-sm transition-all"
                  title="Next Step"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* TRL-6 Specific yield feedback block */}
              {currentTrial.phase === 'TRL-6' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mt-8 p-4 rounded-2xl bg-sage-50 border border-sage-200 flex items-center gap-3.5 text-left w-full max-w-sm"
                >
                  <TrendingUp className="w-8 h-8 text-sage-600 bg-sage-100 p-1.5 rounded-xl border border-sage-200 shrink-0" />
                  <div>
                    <h4 className="text-xs font-extrabold text-[#15803d] uppercase tracking-wider font-mono">Real-world Outcome</h4>
                    <p className="text-xs font-bold text-slate-800 leading-relaxed mt-1">First-ever successful wheat crop production in dry desert sands. Water cycles halved!</p>
                  </div>
                </motion.div>
              )}

            </div>

          </div>

        </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
