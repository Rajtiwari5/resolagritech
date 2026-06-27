/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sprout,
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  TrendingUp,
  Video, // Added for the YouTube Section badge
  Leaf,  // Added for the University logo badge
} from 'lucide-react';
import { FIELD_TRIALS } from '../data';

type Trial = (typeof FIELD_TRIALS)[number];
type TrialPhase = Trial['phase'];
type Step = Trial['detailedSteps'][number];

export default function FieldTrials() {
  const [activeTrialIndex, setActiveTrialIndex] = useState(1);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const currentTrial: Trial = FIELD_TRIALS[activeTrialIndex];

  const getRealFieldImage = (phase: TrialPhase) => {
    if (phase === 'TRL-6') {
      return '/src/assets/real%20field%20trial%20in%20pushkar%20rajasthan%20in%20deseart.png';
    }
    if (phase === 'TRL-5') {
      return '/src/assets/plot%20scale%20field%20trial%20of%20guar%20bajra%20mung%20crop.png';
    }
    return '/src/assets/field%20preperation%20and%20locatin%20information.png';
  };

  const phaseToKeyResult = (phase: TrialPhase) => {
    return phase === 'TRL-6'
      ? '1,120 kg/acre wheat yield with only 3 irrigations vs 6 required normally'
      : 'Guar, Bajra & Mung successfully cultivated with superior root development';
  };

  const handlePreviousTrial = () => {
    setActiveTrialIndex((prev) => (prev === 0 ? FIELD_TRIALS.length - 1 : prev - 1));
    setActiveStepIdx(0);
  };

  const handleNextTrial = () => {
    setActiveTrialIndex((prev) => (prev === FIELD_TRIALS.length - 1 ? 0 : prev + 1));
    setActiveStepIdx(0);
  };

  const prevStep = () => {
    setActiveStepIdx((prev) =>
      prev === 0 ? currentTrial.detailedSteps.length - 1 : prev - 1,
    );
  };

  const nextStep = () => {
    setActiveStepIdx((prev) =>
      prev === currentTrial.detailedSteps.length - 1 ? 0 : prev + 1,
    );
  };

  const isTRL6 = currentTrial.phase === 'TRL-6';

  const renderMockTrialPhoto = (_phase: TrialPhase, stepIndex: number) => {
    return (
      <div className="w-full h-full bg-sand-100 flex items-center justify-center">
        <div className="w-[85%] h-[60%] rounded-2xl border border-sand-200 bg-white/70 shadow-sm flex flex-col items-center justify-center gap-2">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-700">Step {stepIndex + 1}</div>
          <div className="text-[11px] text-slate-600 text-center px-3">
            {currentTrial.detailedSteps[stepIndex]?.label}
          </div>
        </div>
      </div>
    );
  };

  const getPhaseDisplay = (phase: TrialPhase) => {
    if (phase === 'TRL-6') return 'Real Field-Scale Trial (TRL-6)';
    if (phase === 'TRL-5') return 'Pilot Scale Field Testing (TRL-5)';
    return phase;
  };

  return (
    <section className="pt-20 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-10 space-y-4 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-none">
            Field Trials & Scale-up Proof
          </h2>
          <p className="text-lg text-sand-600 font-normal">
            Validated at multiple levels of technology readiness: TRL-5 controlled agricultural laboratory frames, leading to TRL-6 open desert crop harvest lines.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-[#f3f1e9] p-1.5 rounded-2xl border border-sand-200/80 shadow-sm overflow-hidden">
            <button
              onClick={() => {
                setActiveTrialIndex(0);
                setActiveStepIdx(0);
              }}
              className={`px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap text-center flex flex-col items-center justify-center ${
                activeTrialIndex === 0
                  ? 'bg-[#9a5d35] text-white shadow-md'
                  : 'text-sand-700 hover:text-slate-900 hover:bg-sand-200/50'
              }`}
            >
              <span>TRL-5 PILOT GRID</span>
              <span>(GUAR / BAJRA)</span>
            </button>
            <button
              onClick={() => {
                setActiveTrialIndex(1);
                setActiveStepIdx(0);
              }}
              className={`px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap text-center flex flex-col items-center justify-center ${
                activeTrialIndex === 1
                  ? 'bg-[#9a5d35] text-white shadow-md'
                  : 'text-sand-700 hover:text-slate-900 hover:bg-sand-200/50'
              }`}
            >
              <span>TRL-6 PUSHKAR FIELD</span>
              <span>(WHEAT)</span>
            </button>
          </div>
        </motion.div>

        {/* Main interactive field details layout card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-sand-200 bg-white shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Section */}
            <div className="lg:col-span-6 bg-sand-50 relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
              <img
                src={getRealFieldImage(currentTrial.phase)}
                alt={`${currentTrial.phase} - ${currentTrial.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute top-6 left-6 z-10">
                <div className={`px-5 py-2.5 backdrop-blur-md border text-sm font-bold rounded-full shadow-xl uppercase tracking-wider flex items-center gap-2 ${
                  currentTrial.phase === 'TRL-6' 
                    ? 'bg-orange-600/90 border-orange-400 text-white shadow-orange-500/30'
                    : 'bg-emerald-600/90 border-emerald-400 text-white shadow-emerald-500/30'
                }`}>
                  <Sprout className="w-4 h-4" />
                  {getPhaseDisplay(currentTrial.phase)}
                </div>
              </div>

              <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2 text-slate-900">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                  <span className="text-xs font-semibold">{currentTrial.location}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-slate-900 font-display">
                    {currentTrial.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                      <Sprout className="w-3.5 h-3.5" />
                      {currentTrial.crops}
                    </span>
                    {currentTrial.date && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                        <Calendar className="w-3.5 h-3.5" />
                        {currentTrial.date}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-sand-700 leading-relaxed font-normal">
                  {currentTrial.description}
                </p>

                {/* Steps breakdown */}
                <div className="space-y-3 pt-4 border-t border-sand-200">
                  <span className="text-xs font-bold uppercase tracking-widest text-clay-600 font-mono block">
                    Execution Steps
                  </span>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {currentTrial.detailedSteps.map((step: Step, idx: number) => {
                      const selected = idx === activeStepIdx;
                      return (
                        <motion.div
                          key={`${step.label}-${idx}`}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setActiveStepIdx(idx)}
                          className={`flex gap-2 text-xs cursor-pointer rounded-xl p-2 transition-colors border ${
                            selected
                              ? 'bg-white border-[#deb081] shadow-sm'
                              : 'bg-white/40 border-transparent hover:bg-white/60'
                          }`}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle2
                              className={`w-4 h-4 ${selected ? 'text-emerald-600' : 'text-emerald-400'}`}
                            />
                          </div>
                          <div>
                            <span className="font-bold text-slate-800">{step.label}</span>
                            <p className="text-sand-600">{step.detail}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Navigation & Key Result */}
              <div className="pt-8 border-t border-sand-200 space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                      Key Result
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    {phaseToKeyResult(currentTrial.phase)}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={handlePreviousTrial}
                    className="p-2 rounded-lg border border-sand-200 hover:bg-sand-50 transition-colors"
                    aria-label="Previous trial"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                  </button>

                  <div className="flex gap-2">
                    {FIELD_TRIALS.map((_, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveTrialIndex(idx);
                          setActiveStepIdx(0);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          idx === activeTrialIndex ? 'bg-orange-600 w-6' : 'bg-sand-300'
                        }`}
                        aria-label={`Trial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextTrial}
                    className="p-2 rounded-lg border border-sand-200 hover:bg-sand-50 transition-colors"
                    aria-label="Next trial"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>

                <AnimatePresence>
                  <div className="mt-4 rounded-2xl overflow-hidden border border-sand-200 bg-sand-50">
                    <div className="w-full aspect-[16/7] relative">
                      <div className="absolute inset-0">
                        <motion.div
                          key={`${activeTrialIndex}-${activeStepIdx}-${currentTrial.phase}`}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="w-full h-full"
                        >
                          {renderMockTrialPhoto(currentTrial.phase, activeStepIdx)}
                        </motion.div>
                      </div>
                    </div>

                    {/* Step controls */}
                    <div className="flex items-center justify-between gap-3 p-4">
                      <button
                        onClick={prevStep}
                        className="p-2 rounded-xl bg-white border border-sand-200 hover:bg-sand-50 text-sand-700 cursor-pointer shadow-sm transition-all"
                        aria-label="Previous step"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <span className="text-xs font-mono font-extrabold text-[#786637]">
                        Step {activeStepIdx + 1} of {currentTrial.detailedSteps.length}
                      </span>

                      <button
                        onClick={nextStep}
                        className="p-2 rounded-xl bg-white border border-sand-200 hover:bg-sand-50 text-sand-700 cursor-pointer shadow-sm transition-all"
                        aria-label="Next step"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </AnimatePresence>

                {isTRL6 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 rounded-2xl bg-sage-50 border border-sage-200 flex items-center gap-3.5 text-left w-full"
                  >
                    <TrendingUp className="w-8 h-8 text-sage-600 bg-sage-100 p-1.5 rounded-xl border border-sage-200 shrink-0" />
                    <div>
                      <h4 className="text-xs font-extrabold text-[#15803d] uppercase tracking-wider font-mono">
                        Real-world Outcome
                      </h4>
                      <p className="text-xs font-bold text-slate-800 leading-relaxed mt-1">
                        First-ever successful wheat crop production in dry desert sands. Water cycles halved!
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 6. Magnificent Standalone YouTube Field Documentary Section (Exactly as Mockup) */} 
        <div>  
          <motion.div 
            initial={{ opacity: 0, y: 45 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }} 
            className="mt-24 p-8 sm:p-12 rounded-[2rem] border border-sand-200 bg-white shadow-sm hover:shadow-md transition-shadow" 
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
///////////////////////////////////////////////////////////////
// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import {
//   Sprout,
//   MapPin,
//   Calendar,
//   ChevronRight,
//   ChevronLeft,
//   CheckCircle2,
//   TrendingUp,
//   Video, // Added for the YouTube Section badge
//   Leaf,  // Added for the University logo badge
// } from 'lucide-react';
// import { FIELD_TRIALS } from '../data';

// type Trial = (typeof FIELD_TRIALS)[number];
// type TrialPhase = Trial['phase'];
// type Step = Trial['detailedSteps'][number];

// export default function FieldTrials() {
//   const [activeTrialIndex, setActiveTrialIndex] = useState(1);
//   const [activeStepIdx, setActiveStepIdx] = useState(0);
  
//   // Local state to toggle between YouTube preview thumbnail and live video playback
//   const [videoPlaying, setVideoPlaying] = useState(false);

//   const currentTrial: Trial = FIELD_TRIALS[activeTrialIndex];

//   const getRealFieldImage = (phase: TrialPhase) => {
//     if (phase === 'TRL-6') {
//       return '/src/assets/real%20field%20trial%20in%20pushkar%20rajasthan%20in%20deseart.png';
//     }
//     if (phase === 'TRL-5') {
//       return '/src/assets/plot%20scale%20field%20trial%20of%20guar%20bajra%20mung%20crop.png';
//     }
//     return '/src/assets/field%20preperation%20and%20locatin%20information.png';
//   };

//   const phaseToKeyResult = (phase: TrialPhase) => {
//     return phase === 'TRL-6'
//       ? '1,120 kg/acre wheat yield with only 3 irrigations vs 6 required normally'
//       : 'Guar, Bajra & Mung successfully cultivated with superior root development';
//   };

//   const handlePreviousTrial = () => {
//     setActiveTrialIndex((prev) => (prev === 0 ? FIELD_TRIALS.length - 1 : prev - 1));
//     setActiveStepIdx(0);
//   };

//   const handleNextTrial = () => {
//     setActiveTrialIndex((prev) => (prev === FIELD_TRIALS.length - 1 ? 0 : prev + 1));
//     setActiveStepIdx(0);
//   };

//   const prevStep = () => {
//     setActiveStepIdx((prev) =>
//       prev === 0 ? currentTrial.detailedSteps.length - 1 : prev - 1,
//     );
//   };

//   const nextStep = () => {
//     setActiveStepIdx((prev) =>
//       prev === currentTrial.detailedSteps.length - 1 ? 0 : prev + 1,
//     );
//   };

//   const isTRL6 = currentTrial.phase === 'TRL-6';

//   const renderMockTrialPhoto = (_phase: TrialPhase, stepIndex: number) => {
//     return (
//       <div className="w-full h-full bg-sand-100 flex items-center justify-center">
//         <div className="w-[85%] h-[60%] rounded-2xl border border-sand-200 bg-white/70 shadow-sm flex flex-col items-center justify-center gap-2">
//           <div className="text-xs font-bold uppercase tracking-widest text-amber-700">Step {stepIndex + 1}</div>
//           <div className="text-[11px] text-slate-600 text-center px-3">
//             {currentTrial.detailedSteps[stepIndex]?.label}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const getPhaseDisplay = (phase: TrialPhase) => {
//     if (phase === 'TRL-6') return 'Real Field-Scale Trial (TRL-6)';
//     if (phase === 'TRL-5') return 'Pilot Scale Field Testing (TRL-5)';
//     return phase;
//   };

//   return (
//     <section className="pt-20 pb-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto mb-10 space-y-4 text-center"
//         >
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-none">
//             Field Trials & Scale-up Proof
//           </h2>
//           <p className="text-lg text-sand-600 font-normal">
//             Validated at multiple levels of technology readiness: TRL-5 controlled agricultural laboratory frames, leading to TRL-6 open desert crop harvest lines.
//           </p>
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex justify-center mb-16"
//         >
//           <div className="inline-flex bg-[#f3f1e9] p-1.5 rounded-2xl border border-sand-200/80 shadow-sm overflow-hidden">
//             <button
//               onClick={() => {
//                 setActiveTrialIndex(0);
//                 setActiveStepIdx(0);
//               }}
//               className={`px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap text-center flex flex-col items-center justify-center ${
//                 activeTrialIndex === 0
//                   ? 'bg-[#9a5d35] text-white shadow-md'
//                   : 'text-sand-700 hover:text-slate-900 hover:bg-sand-200/50'
//               }`}
//             >
//               <span>TRL-5 PILOT GRID</span>
//               <span>(GUAR / BAJRA)</span>
//             </button>
//             <button
//               onClick={() => {
//                 setActiveTrialIndex(1);
//                 setActiveStepIdx(0);
//               }}
//               className={`px-6 sm:px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap text-center flex flex-col items-center justify-center ${
//                 activeTrialIndex === 1
//                   ? 'bg-[#9a5d35] text-white shadow-md'
//                   : 'text-sand-700 hover:text-slate-900 hover:bg-sand-200/50'
//               }`}
//             >
//               <span>TRL-6 PUSHKAR FIELD</span>
//               <span>(WHEAT)</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Main interactive field details layout card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="rounded-3xl border border-sand-200 bg-white shadow-lg overflow-hidden"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
//             {/* Image Section */}
//             <div className="lg:col-span-6 bg-sand-50 relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
//               <img
//                 src={getRealFieldImage(currentTrial.phase)}
//                 alt={`${currentTrial.phase} - ${currentTrial.title}`}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
//               />

//               <div className="absolute top-6 left-6 z-10">
//                 <div className={`px-5 py-2.5 backdrop-blur-md border text-sm font-bold rounded-full shadow-xl uppercase tracking-wider flex items-center gap-2 ${
//                   currentTrial.phase === 'TRL-6' 
//                     ? 'bg-orange-600/90 border-orange-400 text-white shadow-orange-500/30'
//                     : 'bg-emerald-600/90 border-emerald-400 text-white shadow-emerald-500/30'
//                 }`}>
//                   <Sprout className="w-4 h-4" />
//                   {getPhaseDisplay(currentTrial.phase)}
//                 </div>
//               </div>

//               <div className="absolute bottom-6 left-6 z-10 bg-white/95 backdrop-blur rounded-xl p-3 shadow-lg">
//                 <div className="flex items-center gap-2 text-slate-900">
//                   <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
//                   <span className="text-xs font-semibold">{currentTrial.location}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
//               <div className="space-y-6">
//                 <div className="space-y-2">
//                   <h3 className="text-3xl font-extrabold text-slate-900 font-display">
//                     {currentTrial.title}
//                   </h3>

//                   <div className="flex flex-wrap gap-3 pt-2">
//                     <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
//                       <Sprout className="w-3.5 h-3.5" />
//                       {currentTrial.crops}
//                     </span>
//                     {currentTrial.date && (
//                       <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
//                         <Calendar className="w-3.5 h-3.5" />
//                         {currentTrial.date}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <p className="text-sm text-sand-700 leading-relaxed font-normal">
//                   {currentTrial.description}
//                 </p>

//                 {/* Steps breakdown */}
//                 <div className="space-y-3 pt-4 border-t border-sand-200">
//                   <span className="text-xs font-bold uppercase tracking-widest text-clay-600 font-mono block">
//                     Execution Steps
//                   </span>

//                   <div className="space-y-2 max-h-48 overflow-y-auto">
//                     {currentTrial.detailedSteps.map((step: Step, idx: number) => {
//                       const selected = idx === activeStepIdx;
//                       return (
//                         <motion.div
//                           key={`${step.label}-${idx}`}
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.3 }}
//                           onClick={() => setActiveStepIdx(idx)}
//                           className={`flex gap-2 text-xs cursor-pointer rounded-xl p-2 transition-colors border ${
//                             selected
//                               ? 'bg-white border-[#deb081] shadow-sm'
//                               : 'bg-white/40 border-transparent hover:bg-white/60'
//                           }`}
//                         >
//                           <div className="flex-shrink-0 mt-0.5">
//                             <CheckCircle2
//                               className={`w-4 h-4 ${selected ? 'text-emerald-600' : 'text-emerald-400'}`}
//                             />
//                           </div>
//                           <div>
//                             <span className="font-bold text-slate-800">{step.label}</span>
//                             <p className="text-sand-600">{step.detail}</p>
//                           </div>
//                         </motion.div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation & Key Result */}
//               <div className="pt-8 border-t border-sand-200 space-y-4">
//                 <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
//                   <div className="flex items-center gap-2 mb-1">
//                     <TrendingUp className="w-4 h-4 text-orange-600" />
//                     <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
//                       Key Result
//                     </span>
//                   </div>
//                   <p className="text-sm font-bold text-slate-900">
//                     {phaseToKeyResult(currentTrial.phase)}
//                   </p>
//                 </div>

//                 <div className="flex items-center justify-between gap-3">
//                   <button
//                     onClick={handlePreviousTrial}
//                     className="p-2 rounded-lg border border-sand-200 hover:bg-sand-50 transition-colors"
//                     aria-label="Previous trial"
//                   >
//                     <ChevronLeft className="w-5 h-5 text-slate-600" />
//                   </button>

//                   <div className="flex gap-2">
//                     {FIELD_TRIALS.map((_, idx: number) => (
//                       <button
//                         key={idx}
//                         onClick={() => {
//                           setActiveTrialIndex(idx);
//                           setActiveStepIdx(0);
//                         }}
//                         className={`w-2 h-2 rounded-full transition-all ${
//                           idx === activeTrialIndex ? 'bg-orange-600 w-6' : 'bg-sand-300'
//                         }`}
//                         aria-label={`Trial ${idx + 1}`}
//                       />
//                     ))}
//                   </div>

//                   <button
//                     onClick={handleNextTrial}
//                     className="p-2 rounded-lg border border-sand-200 hover:bg-sand-50 transition-colors"
//                     aria-label="Next trial"
//                   >
//                     <ChevronRight className="w-5 h-5 text-slate-600" />
//                   </button>
//                 </div>

//                 <AnimatePresence>
//                   <div className="mt-4 rounded-2xl overflow-hidden border border-sand-200 bg-sand-50">
//                     <div className="w-full aspect-[16/7] relative">
//                       <div className="absolute inset-0">
//                         <motion.div
//                           key={`${activeTrialIndex}-${activeStepIdx}-${currentTrial.phase}`}
//                           initial={{ opacity: 0, scale: 0.98 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           exit={{ opacity: 0, scale: 0.98 }}
//                           transition={{ duration: 0.2 }}
//                           className="w-full h-full"
//                         >
//                           {renderMockTrialPhoto(currentTrial.phase, activeStepIdx)}
//                         </motion.div>
//                       </div>
//                     </div>

//                     {/* Step controls */}
//                     <div className="flex items-center justify-between gap-3 p-4">
//                       <button
//                         onClick={prevStep}
//                         className="p-2 rounded-xl bg-white border border-sand-200 hover:bg-sand-50 text-sand-700 cursor-pointer shadow-sm transition-all"
//                         aria-label="Previous step"
//                       >
//                         <ChevronLeft className="w-5 h-5" />
//                       </button>

//                       <span className="text-xs font-mono font-extrabold text-[#786637]">
//                         Step {activeStepIdx + 1} of {currentTrial.detailedSteps.length}
//                       </span>

//                       <button
//                         onClick={nextStep}
//                         className="p-2 rounded-xl bg-white border border-sand-200 hover:bg-sand-50 text-sand-700 cursor-pointer shadow-sm transition-all"
//                         aria-label="Next step"
//                       >
//                         <ChevronRight className="w-5 h-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </AnimatePresence>

//                 {isTRL6 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.3 }}
//                     className="mt-2 p-4 rounded-2xl bg-sage-50 border border-sage-200 flex items-center gap-3.5 text-left w-full"
//                   >
//                     <TrendingUp className="w-8 h-8 text-sage-600 bg-sage-100 p-1.5 rounded-xl border border-sage-200 shrink-0" />
//                     <div>
//                       <h4 className="text-xs font-extrabold text-[#15803d] uppercase tracking-wider font-mono">
//                         Real-world Outcome
//                       </h4>
//                       <p className="text-xs font-bold text-slate-800 leading-relaxed mt-1">
//                         First-ever successful wheat crop production in dry desert sands. Water cycles halved!
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* 6. Magnificent Standalone YouTube Field Documentary Section */} 
//         <div>  
//           <motion.div 
//             initial={{ opacity: 0, y: 45 }} 
//             whileInView={{ opacity: 1, y: 0 }} 
//             viewport={{ once: true }} 
//             transition={{ duration: 0.8 }} 
//             className="mt-24 p-8 sm:p-12 rounded-[2rem] border border-sand-200 bg-white shadow-sm hover:shadow-md transition-shadow" 
//           > 
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"> 
               
//               {/* Left Column: Descriptive text and action */} 
//               <div className="lg:col-span-5 text-left space-y-6 flex flex-col items-start"> 
                 
//                 {/* Green badge pill matching mockup */} 
//                 <span className="px-3.5 py-1.5 rounded-md bg-[#f0f5ed] border border-[#dce6d7] text-[#34532b] text-[11px] font-mono font-bold uppercase tracking-wider flex items-center gap-2"> 
//                   <Video className="w-3.5 h-3.5 text-[#34532b]" /> 
//                   <span>Field Experiment Documentary</span> 
//                 </span>  

//                 {/* Paragraph matching mockup */} 
//                 <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed"> 
//                   Watch the official physical experiment recording proving soil matrix stability, sand particle coordination, germination, water savings, and wheat harvesting on the Rajasthan desert borders. 
//                 </p>  

//                 {/* Subdued compact anchor button */} 
//                 <a  
//                   href="https://www.youtube.com/watch?v=oR-NqcqsGyA"  
//                   target="_blank"  
//                   rel="noopener noreferrer" 
//                   id="youtube-field-video" 
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-sand-50 text-xs text-slate-800 font-mono font-bold tracking-wide border border-sand-300 rounded-md shadow-sm transition-all" 
//                 > 
//                   <span>Open Video in YouTube</span> 
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 stroke-slate-500"> 
//                     <line x1="7" y1="17" x2="17" y2="7"></line> 
//                     <polyline points="7 7 17 7 17 17"></polyline> 
//                   </svg> 
//                 </a> 
//               </div>  

//               {/* Right Column: Interactive YouTube play container */} 
//               <div className="lg:col-span-7"> 
//                 <div className="relative w-full aspect-video rounded-2xl bg-zinc-950 overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all text-left"> 
//                   {videoPlaying ? (
//                     /* Embedded Video Iframe plays on click */
//                     <iframe
//                       src="https://www.youtube.com/embed/oR-NqcqsGyA?autoplay=1"
//                       title="Desert Soilification Field Experiment Documentary"
//                       className="absolute inset-0 w-full h-full"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   ) : (
//                     /* Lazy loaded Preview Card */
//                     <div 
//                       onClick={() => setVideoPlaying(true)}
//                       className="group relative w-full h-full cursor-pointer"
//                     >
//                       {/* Thumbnail loaded directly from YouTube */}
//                       <img 
//                         src="https://img.youtube.com/vi/oR-NqcqsGyA/maxresdefault.jpg"
//                         alt="Desert Soilification Field Experiment video thumbnail"
//                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                         onError={(e) => {
//                           // Fallback to high quality standard preview if maxres is unavailable
//                           e.currentTarget.src = "https://img.youtube.com/vi/oR-NqcqsGyA/hqdefault.jpg";
//                         }}
//                       />

//                       {/* Dark transparent gradient overlay */} 
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />  

//                       {/* Top Header Controls (Central University of Rajasthan Logo & EERG Lab text) */} 
//                       <div className="absolute top-4 left-4 flex items-center gap-3 select-none"> 
//                         {/* Integrated CURAJ Leaf Badge logo */} 
//                         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border border-emerald-500 shadow-sm shrink-0"> 
//                           <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-100 to-green-150 flex items-center justify-center text-emerald-700"> 
//                             <Leaf className="w-5 h-5 fill-emerald-600/20" /> 
//                           </div> 
//                         </div>  

//                         <div className="text-white drop-shadow-md"> 
//                           <h4 className="text-xs sm:text-sm font-semibold tracking-tight leading-tight"> 
//                             Desert Soilification Field Experiment video 
//                           </h4> 
//                           <p className="text-[10px] text-zinc-300 font-medium font-mono leading-none mt-0.5"> 
//                             EERG Laboratory 
//                           </p> 
//                         </div> 
//                       </div>  

//                       {/* Top Right: Bayer Corporate Logo in White Circular Frame */} 
//                       <div className="absolute top-4 right-4 text-white drop-shadow-md flex items-center justify-center"> 
//                         <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center p-0.5 leading-none shrink-0" title="Bayer Sponsor"> 
//                           <div className="text-[7px] font-mono tracking-widest font-extrabold text-[#94a3b8] scale-90 mb-[1px]">BAYER</div> 
//                           <div className="w-5 h-px bg-white/20 select-none" /> 
//                           <div className="text-[6px] font-bold text-emerald-400 mt-[1.5px] tracking-tight">SPONSOR</div> 
//                         </div> 
//                       </div>  

//                       {/* Giant Central Red YouTube Play Toggle */} 
//                       <div className="absolute inset-0 flex items-center justify-center"> 
//                         <div className="w-16 h-11 bg-[#ff0000] text-white flex items-center justify-center rounded-2xl shadow-xl transition-all duration-300 group-hover:bg-[#cc0000] group-hover:scale-110"> 
//                           <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 translate-x-[1px]"> 
//                             <path d="M8 5v14l11-7z" strokeLinejoin="miter" strokeWidth="1" /> 
//                           </svg> 
//                         </div> 
//                       </div>  

//                       {/* Bottom Controls Panel (Share Indicator, Clock, Watch on YouTube Button) */} 
//                       <div className="absolute bottom-12 inset-x-0 px-4 flex justify-between items-center text-white/90"> 
                         
//                         {/* Action toggles bottom left */} 
//                         <div className="flex items-center gap-4"> 
//                           {/* Curved share arrow */} 
//                           <button className="p-1.5 hover:text-white transition-all cursor-pointer" title="Share Video"> 
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"> 
//                               <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /> 
//                               <polyline points="16 6 12 2 8 6" /> 
//                               <line x1="12" y1="2" x2="12" y2="15" /> 
//                             </svg> 
//                           </button> 
                           
//                           {/* Clock icon */} 
//                           <button className="p-1.5 hover:text-white transition-all cursor-pointer" title="Watch Later"> 
//                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4"> 
//                               <circle cx="12" cy="12" r="10" /> 
//                               <polyline points="12 6 12 12 16 14" /> 
//                             </svg> 
//                           </button> 
//                         </div>  

//                         {/* Translucent Watch on YouTube bottom-right badge */} 
//                         <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-md text-xs font-semibold backdrop-blur-xs select-none border border-white/5 cursor-pointer"> 
//                           <span className="text-[10px] text-zinc-300 font-normal">Watch on</span> 
//                           <span className="inline-flex items-center gap-0.5 font-bold tracking-tight text-white scale-95 origin-left"> 
//                             {/* Small red triangle */} 
//                             <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-red-600 inline"> 
//                               <path d="M8 5v14l11-7z" /> 
//                             </svg> 
//                             <span>YouTube</span> 
//                           </span> 
//                         </div>  

//                       </div>  

//                       {/* Dark Blue Static Title Base Strip matching User image */} 
//                       <div className="absolute bottom-0 inset-x-0 h-9 bg-[#13224b] border-t border-blue-950/40 flex items-center justify-center"> 
//                         <span className="text-white text-xs font-bold italic font-serif tracking-wide select-none"> 
//                           Seed Sowing (Mung, Guar and Pearl Millet) 
//                         </span> 
//                       </div>  
//                     </div>
//                   )} 
//                 </div> 
//               </div>  

//             </div> 
//           </motion.div> 
//         </div>

//       </div>
//     </section>
//   );
// }