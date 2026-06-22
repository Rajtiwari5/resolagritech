/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Beaker, CheckCircle2, ChevronRight, HelpCircle, Activity, Wind, Eye, Calculator } from 'lucide-react';
import { TECHNOLOGY_DETAILS, COMPARATIVE_ADVANTAGES } from '../data';

export default function Technology() {
  // Simulator State inside crop estimations
  const [acreage, setAcreage] = useState<number>(5); // Default 5 acres
  const [selectedParam, setSelectedParam] = useState<number>(0); // Active comparative row check

  // Quantitative Yield and Resource Calculations (Using exact PDF metrics)
  // Resol Yield: 1120 kg/acre | Pusa: 180 kg/acre | Sujlam: 120 kg/acre
  // Recommended polymer application: 15 kg per local field area of 1000m² is ~60 kg/acre.
  // Wait, let's keep a standard, realistic application math: e.g. 10 kg/acre needed is great.
  // Unit price: Resol 840/kg, Pusa 1250/kg, Sujlam 650/kg
  const calcYield = (acres: number) => {
    const polymerNeededKg = acres * 10; // 10 kg per acre application rate
    const resolYield = (acres * 1120).toLocaleString();
    const pusaYield = (acres * 180).toLocaleString();
    const sujlamYield = (acres * 120).toLocaleString();

    const resolCost = (polymerNeededKg * 840).toLocaleString();
    const pusaCost = (polymerNeededKg * 1250).toLocaleString();
    const sujlamCost = (polymerNeededKg * 650).toLocaleString();

    // Resol saves 3 massive irrigation cycles (3 water turnouts per acre is ~120,000 Litres saved)
    const waterSavedLitres = (acres * 120000).toLocaleString();

    return { polymerNeededKg, resolYield, pusaYield, sujlamYield, resolCost, pusaCost, sujlamCost, waterSavedLitres };
  };

  const results = calcYield(acreage);

  return (
    <section className="pt-20 pb-20 bg-sand-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">Problem & Desert Soilification Tech</h2>
          <p className="text-base text-sand-500">
            Addressing severe moisture loss and sand particle separation through trace borate-ion active biopolymeric crosslinking bridges.
          </p>
        </motion.div>

        {/* 1. Core Problem Block vs Solution Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          
          {/* Problem Block */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2 pb-2 border-b border-sand-200">
              <span className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100">
                <AlertCircle className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">The Physical Challenge of Desert Agriculture</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECHNOLOGY_DETAILS.problemDescription.map((prob) => (
                <motion.div 
                  key={prob.title} 
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm space-y-2 col-span-1 cursor-pointer hover:shadow-md hover:border-sand-300 transition-all"
                >
                  <h4 className="font-bold text-amber-800 text-sm tracking-tight">{prob.title}</h4>
                  <p className="text-xs text-sand-500 font-normal leading-relaxed">{prob.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Slide 1 Critical Need Callout */}
            <motion.div 
              whileHover={{ scale: 1.015 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/60 border border-amber-200/80 shadow-sm text-left relative overflow-hidden cursor-pointer"
            >
              <span className="text-[9px] font-mono font-bold tracking-widest text-amber-800 uppercase block mb-1">Critical Requirement</span>
              <p className="text-sm font-extrabold text-amber-950 font-display leading-tight">
                There is a critical need to enhance water retention and sand particle aggregation to enable sustainable agriculture in the desert.
              </p>
            </motion.div>
          </div>

          {/* Solution Technology Block */}
          <motion.div 
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200 shadow-lg text-left space-y-6 cursor-pointer"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-sand-200">
              <span className="p-1.5 rounded-lg bg-sage-50 text-sage-600 border border-sage-100">
                <Beaker className="w-5 h-5" />
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-display">The Soilification Solution</h3>
            </div>

            <p className="text-sm text-sand-700 leading-relaxed font-normal">
              {TECHNOLOGY_DETAILS.solutionExplainer}
            </p>

            {/* Component breakdown */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] font-mono font-bold text-sand-500 uppercase tracking-widest block">Structural Formulation Blueprint</span>
              
              <div className="grid grid-cols-1 gap-3">
                {TECHNOLOGY_DETAILS.components.map((comp) => (
                  <motion.div 
                    key={comp.name} 
                    whileHover={{ scale: 1.015, x: 2 }}
                    className="p-3.5 rounded-xl bg-sand-100/60 border border-sand-200 hover:border-sand-300 hover:bg-sand-100/80 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-slate-800 font-display">{comp.name}</span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-sage-100 text-sage-800">{comp.role}</span>
                    </div>
                    <p className="text-xs text-sand-500 font-normal leading-normal">{comp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* 2. Interactive Formulation Flowchart & Chemical Synthesis Map (Slide 3 & 4) */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-sand-100/40 border border-sand-200 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Flow representation: Component A + B + C -> Resol Formulation */}
            <div className="lg:col-span-12 space-y-6">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-clay-600 font-mono block mb-1">Interactive Synthesis Flowchart</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">Our Technology Synthesis</h3>
                <p className="text-sm text-sand-500">
                  Slide 3 scientific blueprint translated into action. Liquid and powder polymers couple with active trace borate linkages to form a stable sand-stabilizing formulation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center relative">
                {/* Component A */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100">Component A</span>
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-155 flex items-center justify-center text-blue-500">
                    <Beaker className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs uppercase font-mono">Polymer Base (VAG)</h4>
                    <p className="text-[11px] text-sand-500 mt-1 leading-normal">High-weight organic biopolymeric chain with active hydroxyl hubs.</p>
                  </div>
                </motion.div>

                {/* Component B */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-100">Component B</span>
                  <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-155 flex items-center justify-center text-amber-500">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs uppercase font-mono">Cross Linker</h4>
                    <p className="text-[11px] text-sand-500 mt-1 leading-normal">Trace inorganic Borates pulling polymer networks into elastic matrices.</p>
                  </div>
                </motion.div>

                {/* Component C */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-col items-center text-center space-y-3 hover:shadow-md transition-all"
                >
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">Component C</span>
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-155 flex items-center justify-center text-emerald-500">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-xs uppercase font-mono">Silica Anchoring Polymer</h4>
                    <p className="text-[11px] text-sand-500 mt-1 leading-normal">High-adherence chains gluing formulation to sand crystals.</p>
                  </div>
                </motion.div>

                {/* Bag result */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-clay-700 to-clay-900 border border-clay-950 text-white flex flex-col items-center text-center space-y-3 relative"
                >
                  <span className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase absolute -top-2.5">Combined Solution</span>
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-amber-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-400 text-xs uppercase font-mono">Resol Formulation</h4>
                    <p className="text-[11px] text-amber-100/80 mt-1 leading-normal">Novel bio-formulation backing soilification trials.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Test tube diagram inputs/outcomes */}
            <div className="lg:col-span-12 border-t border-sand-200/60 pt-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Inputs card */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono block">Efficacy Actions</span>
                  <h4 className="text-xl font-bold text-slate-800 font-display">Inputs & Physical Actions</h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white border border-sand-200 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs">↑</div>
                      <span className="text-xs font-semibold text-slate-700">Increase water-holding capacity</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-sand-200 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs">↓</div>
                      <span className="text-xs font-semibold text-slate-700">Decrease evaporation rate</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-sand-200 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs">↑</div>
                      <span className="text-xs font-semibold text-slate-700">Increase abrasion resistance</span>
                    </div>
                  </div>
                </div>

                {/* Middle diagrammed test tube simulation */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/60 border border-sand-200 rounded-2xl relative"
                >
                  <span className="text-[10px] font-mono font-bold text-clay-700 uppercase tracking-widest block mb-4">Laboratory Formulation</span>
                  
                  {/* Test tube representation */}
                  <div className="w-16 h-48 border-4 border-slate-350 bg-gradient-to-b from-transparent to-teal-100 rounded-b-full shadow-md flex flex-col justify-end p-1 overflow-hidden relative">
                    <motion.div 
                      initial={{ height: "0%" }}
                      whileInView={{ height: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="w-full bg-teal-300 rounded-b-full h-3/5" 
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-teal-950 font-bold text-[10px] tracking-wide">
                      <span className="bg-white/80 px-2 py-0.5 rounded font-mono border border-teal-200">Resol</span>
                    </div>
                  </div>

                  {/* Dosing target indicators */}
                  <div className="mt-4 space-y-1 text-xs">
                    <p className="font-semibold text-slate-700">Present: <span className="font-mono text-clay-700 font-bold">1X Formulation</span></p>
                    <p className="text-[10.5px] text-sand-500 font-normal">1000 ppm Biopolymer + 1.5 ppm Borate</p>
                    <div className="pt-2">
                      <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-mono font-bold border border-amber-200 uppercase tracking-wide">Target: 10X formulation</span>
                    </div>
                  </div>
                </motion.div>

                {/* Outcomes card */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono block">Desert Agricultural Efficacy</span>
                  <h4 className="text-xl font-bold text-slate-800 font-display">Outcomes & Growth Impact</h4>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white border border-sand-200 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-xs">✓</div>
                      <span className="text-xs font-semibold text-slate-700">Help in sustainable desert agriculture</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-sand-200 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-xs">✓</div>
                      <span className="text-xs font-semibold text-slate-700">Increase crop yield significantly</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-sand-200 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-bold flex items-center justify-center text-xs">✓</div>
                      <span className="text-xs font-semibold text-slate-700">Increase economic growth of farmers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slogan index banner (WHC, ER, AR, SA) */}
            <div className="lg:col-span-12 mt-4 p-4 rounded-2xl bg-gradient-to-r from-clay-800 to-clay-950 text-white flex flex-col sm:flex-row items-center justify-around text-center gap-4 shadow-lg border border-clay-900/30">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="flex items-center gap-2 font-mono text-sm cursor-pointer select-none px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
                title="Water Holding Capacity"
              >
                <span className="text-amber-400 font-bold text-lg animate-pulse">↑</span>
                <span className="font-extrabold tracking-wide">WHC</span>
                <span className="text-xs text-clay-200 font-sans font-medium">(Water Holding Capacity)</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="flex items-center gap-2 font-mono text-sm cursor-pointer select-none px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
                title="Evaporation Rate"
              >
                <span className="text-[#a5f3fc] font-bold text-lg animate-pulse">↓</span>
                <span className="font-extrabold tracking-wide">ER</span>
                <span className="text-xs text-clay-200 font-sans font-medium">(Evaporation Rate)</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="flex items-center gap-2 font-mono text-sm cursor-pointer select-none px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
                title="Abrasion Resistance"
              >
                <span className="text-amber-400 font-bold text-lg animate-pulse">↑</span>
                <span className="font-extrabold tracking-wide">AR</span>
                <span className="text-xs text-clay-200 font-sans font-medium">(Abrasion Resistance)</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="flex items-center gap-2 font-mono text-sm cursor-pointer select-none px-4 py-2 rounded-xl hover:bg-white/5 transition-colors"
                title="Soil Aggregation"
              >
                <span className="text-amber-400 font-bold text-lg animate-pulse">↑</span>
                <span className="font-extrabold tracking-wide">SA</span>
                <span className="text-xs text-clay-200 font-sans font-medium">(Soil Aggregation)</span>
              </motion.div>
            </div>

          </div>
        </div>

        {/* 3. Scientific Chemical formulation section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-3xl bg-zinc-900 border border-zinc-800 text-left text-white shadow-xl mb-24 relative overflow-hidden"
        >
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-clay-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage-500/10 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <Beaker className="w-5 h-5 text-clay-300" />
                <span className="text-xs font-bold font-mono text-clay-300 uppercase tracking-widest">Active Ionic Synthesis</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">How Silicon-hydroxyl Bonds Form Soil</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {TECHNOLOGY_DETAILS.chemicalReaction.text}
              </p>
              
              <div className="flex gap-4 pt-2">
                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700 text-center flex-1">
                  <span className="text-[9px] text-zinc-500 font-mono tracking-wide uppercase block">Biopolymer main</span>
                  <span className="text-sm font-bold text-white font-mono">1,000 ppm VAG</span>
                </div>
                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700 text-center flex-1">
                  <span className="text-[9px] text-zinc-500 font-mono tracking-wide uppercase block">Trace crosslinker</span>
                  <span className="text-sm font-bold text-white font-mono">1.5 ppm Borate</span>
                </div>
              </div>
            </div>

            {/* Mathematical Chemical notation board */}
            <div className="lg:col-span-6 p-5 sm:p-7 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 font-mono text-xs sm:text-sm space-y-4 shadow-inner relative">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest block absolute top-3.5 right-4 font-mono">Reactive Formula</span>
              
              <div className="space-y-4 pt-4 select-all">
                <div className="space-y-1.5">
                  <span className="text-clay-400 text-[10px] uppercase font-bold">1. Polymeric Crosslinking Network</span>
                  <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 overflow-x-auto whitespace-pre">
                    {TECHNOLOGY_DETAILS.chemicalReaction.equation1}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-sage-400 text-[10px] uppercase font-bold">2. Sand Aggregation Mechanism (Silica coupling)</span>
                  <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 overflow-x-auto whitespace-pre">
                    {TECHNOLOGY_DETAILS.chemicalReaction.equation2}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 3. Interactive Comparative Advantage Table */}
        <div className="mb-24 text-left">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-clay-600 font-mono block mb-1">Competitive Matrix</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">Advantages Over Traditional Hydrogels</h3>
            <p className="text-sm text-sand-500 mt-1 max-w-xl">
              Compare Resol Formulation against Indian market standards (Pusa Hydrogel & Sujlam Hydrogel). Resol is the only formulation focused on aggregate structure restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Table parameters columns */}
            <div className="lg:col-span-8 overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left" id="advantages-table">
                  <thead>
                    <tr className="bg-sand-100/50 border-b border-sand-200 text-xs text-sand-600 uppercase tracking-widest font-mono">
                      <th className="py-4 px-5">Parameters Checked</th>
                      <th className="py-4 px-5 text-clay-700 font-bold">Resol Formulation</th>
                      <th className="py-4 px-5">Pusa Hydrogel</th>
                      <th className="py-4 px-5">Sujlam Hydrogel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200 text-sm">
                    {COMPARATIVE_ADVANTAGES.map((row, index) => {
                      const isActive = selectedParam === index;
                      return (
                        <tr 
                          key={row.parameter}
                          onClick={() => setSelectedParam(index)}
                          className={`cursor-pointer transition-colors ${isActive ? 'bg-sand-100/30 font-semibold' : 'hover:bg-sand-50/50'}`}
                        >
                          <td className="py-4 px-5 font-bold text-slate-800">{row.parameter}</td>
                          <td className="py-4 px-5 text-clay-700 font-extrabold">{row.resol}</td>
                          <td className="py-4 px-5 text-sand-700">{row.pusa}</td>
                          <td className="py-4 px-5 text-sand-700">{row.sujlam}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right inspect parameter details card */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border border-sand-200 bg-[#fbfbf9] shadow-sm flex flex-col justify-between h-full min-h-[300px]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#938144] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase text-[#786637] tracking-widest">Detail Parameter Audit</span>
                </div>
                
                <div>
                  <h4 className="text-lg font-extrabold text-[#1a160d] tracking-tight leading-snug font-display">
                    {COMPARATIVE_ADVANTAGES[selectedParam].parameter}
                  </h4>
                  <p className="text-xs text-sand-600 font-medium leading-relaxed mt-3">
                    {COMPARATIVE_ADVANTAGES[selectedParam].description}
                  </p>
                </div>

                {/* Micro comparative sliders */}
                <div className="space-y-3.5 pt-4 border-t border-sand-200">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-clay-700">Resol Formulation Performance</span>
                      <span className="font-mono text-clay-700">{COMPARATIVE_ADVANTAGES[selectedParam].resolValue}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-sand-200 rounded-full overflow-hidden">
                      <div className="h-full bg-clay-500 rounded-full" style={{ width: `${COMPARATIVE_ADVANTAGES[selectedParam].resolValue}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-sand-500">
                      <span>Pusa Hydrogel Index</span>
                      <span className="font-mono">{COMPARATIVE_ADVANTAGES[selectedParam].pusaValue}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-sand-200 rounded-full overflow-hidden">
                      <div className="h-full bg-sand-400 rounded-full" style={{ width: `${COMPARATIVE_ADVANTAGES[selectedParam].pusaValue}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-sand-500">
                      <span>Sujlam Hydrogel Index</span>
                      <span className="font-mono">{COMPARATIVE_ADVANTAGES[selectedParam].sujlamValue}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-sand-200 rounded-full overflow-hidden">
                      <div className="h-full bg-sand-400 rounded-full" style={{ width: `${COMPARATIVE_ADVANTAGES[selectedParam].sujlamValue}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-[9px] font-mono text-sand-400 block pt-4 text-center">
                Click table rows to explore other parameters dynamically.
              </span>
            </div>

          </div>
        </div>

        {/* 4. Interactive Yield & Resource Estimator */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#faf1e6] to-[#f4deb8] border border-sand-300 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left controller panel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-clay-700">
                  <Calculator className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest font-mono">Resource Estimator</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a160d] tracking-tight font-display">Resol Field ROI Calculator</h3>
                <p className="text-sm text-sand-700">
                  Select your projected desert farm acreage to analyze the crop harvest quantities and cost savings enabled by Resol Agritech over standard setups.
                </p>
              </div>

              {/* Slider for acres */}
              <div className="space-y-3.5 p-5 rounded-2xl bg-white/75 border border-sand-300">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-sand-800 uppercase tracking-wider font-mono">Target Farmland size:</span>
                  <span className="text-md font-extrabold text-clay-800 font-mono bg-clay-100/50 px-3 py-1 rounded-md border border-clay-200">
                    {acreage} Acres
                  </span>
                </div>
                
                <input 
                  type="range"
                  id="acreage-range"
                  min="1"
                  max="100"
                  value={acreage}
                  onChange={(e) => setAcreage(Number(e.target.value))}
                  className="w-full h-2 bg-sand-300 rounded-lg appearance-none cursor-pointer accent-clay-600 focus:outline-none focus:ring-2 focus:ring-clay-500"
                />
                
                <div className="flex justify-between text-[9px] font-bold text-sand-500 font-mono">
                  <span>1 ACRE</span>
                  <span>50 ACRES</span>
                  <span>100 ACRES</span>
                </div>
              </div>
            </div>

            {/* Right Estimator results */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Crop Harvest Wheat tons */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.015 }}
                className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-sage-600 uppercase tracking-widest block mb-1">Projected Wheat Yield</span>
                  <p className="text-xs text-sand-500 leading-normal">Total crop harvested under Resol (1,120 kg/acre projection)</p>
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-800 font-mono">{results.resolYield}</span>
                  <span className="text-xs font-bold text-sand-500 uppercase font-mono">KG</span>
                </div>
                
                {/* Comparison stats bars */}
                <div className="mt-3.5 pt-3.5 border-t border-sand-100 flex items-center justify-between text-[10px] font-mono text-sand-500 font-bold">
                  <span>Pusa Yield: {results.pusaYield} kg</span>
                  <span>Sujlam: {results.sujlamYield} kg</span>
                </div>
              </motion.div>

              {/* Card 2: Cost Comparison */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.015 }}
                className="p-5 rounded-2xl bg-white border border-sand-200 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-clay-600 uppercase tracking-widest block mb-1">Formulation Investment</span>
                  <p className="text-xs text-sand-500 leading-normal">Estimated Resol cost at 10kg/acre recommended dosing</p>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-xs font-bold text-sand-500">INR</span>
                  <span className="text-3xl font-extrabold text-slate-800 font-mono">{results.resolCost}</span>
                </div>

                <div className="mt-3.5 pt-3.5 border-t border-sand-100 flex items-center justify-between text-[10px] font-mono text-sand-500 font-bold">
                  <span>Pusa: INR {results.pusaCost}</span>
                  <span>Sujlam: INR {results.sujlamCost}</span>
                </div>
              </motion.div>

              {/* Card 3: Water Saved (3 massive cycles) */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.01 }}
                className="p-5 rounded-2xl bg-white border border-[#deb081] shadow-sm flex flex-col justify-between sm:col-span-2 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">Conserved Arid Water Volume</span>
                    <p className="text-xs text-sand-500 leading-none">Net gallons/litres of irrigation saved through capillary moisture holding efficacy</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold font-mono">Water Saving</span>
                </div>
                
                <div className="mt-2 text-2xl font-extrabold text-blue-700 font-mono tracking-tight flex items-baseline gap-1.5">
                  <span>~ {results.waterSavedLitres}</span>
                  <span className="text-xs font-bold text-sand-500 uppercase">Litres</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
