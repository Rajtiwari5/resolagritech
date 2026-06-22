/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Wind, Droplets, Sun, ChevronRight, CheckCircle2, Leaf, Sparkles, Building2, Play, Pause } from 'lucide-react';
import { ABOUT_US_CONTENT } from '../data';

interface HeroProps {
  onLearnMoreClick: () => void;
  onExploreTechClick: () => void;
}

export default function Hero({ onLearnMoreClick, onExploreTechClick }: HeroProps) {
  // Simulator state: Sand Moisture & Aggregation Slider
  const [soilificationValue, setSoilificationValue] = useState(0); // 0 = Pure Sand, 100 = Soilified Land
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayDirection = useRef(1); // 1 = increasing, -1 = decreasing

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSoilificationValue((prev) => {
        let next = prev + 1 * autoPlayDirection.current;
        if (next >= 100) {
          autoPlayDirection.current = -1;
          return 100;
        }
        if (next <= 0) {
          autoPlayDirection.current = 1;
          return 0;
        }
        return next;
      });
    }, 45); // smooth increment every 45ms

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Get dynamic state values based on the slider
  const getSimValue = (v: number) => {
    const moisture = Math.round(5 + (v * 0.7)); // 5% to 75%
    const aggregation = Math.round(2 + (v * 0.74)); // 2% to 76%
    const drift = Math.round(95 - (v * 0.9)); // 95% down to 5% drift risk
    return { moisture, aggregation, drift };
  };

  const { moisture, aggregation, drift } = getSimValue(soilificationValue);

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      
      {/* Absolute background effects */}
      <div className="absolute inset-0 -z-20 bg-[#fdfdfb]" />
      <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-clay-100/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50rem] h-[50rem] rounded-full bg-sage-100/30 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main textual hooks (Columns: 6 for text, 6 for visual simulator) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* National Badges row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-100/60 border border-sage-200 text-sage-800 text-[11px] font-bold uppercase tracking-wider font-mono">
                <Sparkles className="w-3.5 h-3.5 fill-sage-500/20" />
                DPIIT Registered Startup
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sand-200/50 border border-sand-300 text-sand-800 text-[11px] font-bold uppercase tracking-wider font-mono">
                <Building2 className="w-3.5 h-3.5" />
                CURAJ Spin-Off
              </div>
              <span className="text-xs text-sand-500 font-semibold font-mono">NABI & NIAM Evaluated</span>
            </motion.div>

            {/* Display Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-sans font-display">
                <span className="block text-gradient bg-gradient-to-r from-clay-800 via-clay-600 to-amber-700 bg-clip-text text-transparent">
                  Converts Desert Sand
                </span>
                <span className="block text-slate-800 mt-1">
                  Into Fertile, Cultivable Land
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-sand-800 leading-relaxed font-normal max-w-2xl">
                {ABOUT_US_CONTENT.pitch}
              </p>
            </motion.div>

            {/* Interactive Call to Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={onExploreTechClick}
                className="group flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-clay-600 to-clay-800 text-white font-bold tracking-wide shadow-lg shadow-clay-700/20 hover:shadow-xl hover:shadow-clay-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Organic Formulation</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onLearnMoreClick}
                className="px-7 py-4 rounded-xl bg-white hover:bg-sand-100 text-sand-950 font-bold border border-sand-300 hover:border-sand-400 shadow-sm transition-all cursor-pointer"
              >
                Read Field Success Stories
              </button>
            </motion.div>

            {/* Institutional Endorsement sub-bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-6 border-t border-sand-200"
            >
              <p className="text-xs font-semibold text-sand-500 uppercase tracking-widest font-mono mb-3">Supporting Research Institutions</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2 text-sand-700 font-semibold text-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-clay-500" />
                  <span>Central University of Rajasthan</span>
                </div>
                <div className="flex items-center gap-2 text-sand-700 font-semibold text-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-sage-500" />
                  <span>National Institute of Agricultural Marketing (NIAM)</span>
                </div>
                <div className="flex items-center gap-2 text-sand-700 font-semibold text-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  <span>National Agri-Food Biotechnology Institute (NABI)</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Column 6: Beautiful Soilification Interactive Simulator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full flex flex-col"
          >
            <div className="relative p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-2xl overflow-hidden bg-white/90 backdrop-blur-md flex flex-col gap-6">
              
              {/* Badge indicating interactions */}
              <div className="flex items-center justify-between pb-3 border-b border-sand-200/80">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-sage-600 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sand-800 font-mono">Soilification Simulator</span>
                </div>
                <button
                  onClick={() => setIsAutoPlaying(prev => !prev)}
                  className={`text-[10px] uppercase font-mono font-extrabold px-2.5 py-1 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    isAutoPlaying 
                      ? 'bg-sage-100 text-sage-950 border-sage-300 hover:bg-sage-200 shadow-sm shadow-sage-200/50' 
                      : 'bg-amber-100 text-amber-950 border-amber-300 hover:bg-amber-200 shadow-sm'
                  }`}
                  title={isAutoPlaying ? "Click to Pause Demo" : "Click to Resume Demo"}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-sage-700 fill-sage-700 animate-pulse" />
                      <span>Auto-Playing</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-amber-700 fill-amber-700" />
                      <span>Play Demo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Graphical Visualizer representation: Sandbox changing state based on the slider */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner border border-sand-300">
                
                {/* 1. Dry desert background layer */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                  style={{
                    backgroundColor: '#e6cc9a',
                    backgroundImage: 'radial-gradient(circle, #fcd34d 0%, #d97706 100%)',
                  }}
                />

                {/* Simulated sand dunes vector drawing overlay */}
                <svg className="absolute bottom-0 left-0 w-full h-1/2 overflow-visible pointer-events-none" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Sandy dune back */}
                  <path d="M 0 80 Q 25 50 60 75 T 100 60 L 100 100 L 0 100" fill="#b45309" opacity="0.6"/>
                  {/* Sandy dune front */}
                  <path d="M 0 90 Q 35 70 70 85 T 100 80 L 100 100 L 0 100" fill="#78350f" opacity="0.8"/>
                </svg>

                {/* 2. Moist soilified land cover layer, fades-in based on slider */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 pointer-events-none"
                  style={{
                    opacity: soilificationValue / 100,
                    backgroundColor: '#4d7c0f',
                    backgroundImage: 'radial-gradient(circle, #84cc16 0%, #1f2d08 100%)'
                  }}
                />

                {/* Green Grass blades drawing growing over the front on soilification */}
                <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible pointer-events-none" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Dynamic trees and crops growing based on slider value */}
                  <g style={{ opacity: Math.max(0, (soilificationValue - 15) / 85) }}>
                    {/* Native crops, grasses and green shrubs sprouting dense */}
                    <path d="M 8 72 Q 10 40 16 48 M 10 72 Q 15 38 11 35 M 11 72 Q 3 45 0 55" stroke="#bef264" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 22 75 Q 20 45 28 50 M 24 75 Q 30 40 25 38" stroke="#a3e635" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M 36 78 Q 38 48 44 54 M 38 78 Q 44 45 40 40" stroke="#bef264" strokeWidth="1.8" strokeLinecap="round" />
                    {/* Big tall crop stalk */}
                    <path d="M 52 75 Q 48 30 56 36 M 56 36 Q 64 25 61 18 M 54 75 Q 62 40 59 36" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Further shrubs and plants */}
                    <path d="M 68 76 Q 72 46 79 52 M 72 76 Q 78 44 74 40 Z" fill="#84cc16" stroke="#84cc16" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 85 72 Q 82 32 90 38 M 90 38 Q 96 26 93 20" stroke="#a3e635" strokeWidth="2.5" strokeLinecap="round" />
                  </g>
                </svg>

                {/* Glowing biopolymer mesh overlay representing polymer bonding action */}
                {soilificationValue > 10 && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" opacity={Math.min(1, (soilificationValue - 10) / 45)}>
                    {/* Constellation web linkages */}
                    <path
                      d="M 12 120 L 25 90 M 25 90 L 45 105 M 45 105 L 65 80 M 65 80 L 85 95 M 85 95 L 95 60 M 25 90 L 15 65 M 65 80 L 55 45 M 45 105 L 35 48"
                      stroke="#fcd34d"
                      strokeWidth="1.8"
                      strokeDasharray="4 3"
                      opacity="0.5"
                    />
                    <circle cx="25" cy="90" r="4" fill="#fbbf24" className="animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="25" cy="90" r="3.5" fill="#fbbf24" />
                    <circle cx="45" cy="105" r="3.5" fill="#fbbf24" />
                    <circle cx="65" cy="80" r="3.5" fill="#fbbf24" />
                    <circle cx="85" cy="95" r="4" fill="#fbbf24" className="animate-ping" style={{ animationDuration: '4s' }} />
                    <circle cx="85" cy="95" r="3.5" fill="#fbbf24" />
                  </svg>
                )}

                {/* Labels indicating active visual status */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md text-white text-[10px] font-mono tracking-wider font-bold">
                  {soilificationValue === 0 ? 'STATUS: UNAMENDED NEVADA SAND' : (soilificationValue < 50 ? 'STATUS: INITIATING COLLOIDAL CRUST' : 'STATUS: SOILIFIED FERTILE LOAM')}
                </div>

                {/* Quick overlay to show water droplets when hydrated */}
                {soilificationValue > 40 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-mono bg-blue-600/95 py-1 px-2 rounded-md backdrop-blur text-white animate-pulse font-bold tracking-wide">
                    <Droplets className="w-3.5 h-3.5 fill-blue-200 text-blue-200" />
                    <span>75% WATER RETAINED</span>
                  </div>
                )}
              </div>

              {/* Slider adjustment element */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label htmlFor="soilification-range" className="text-sm font-extrabold text-sand-800">
                    Apply Resol Bioformulation:
                  </label>
                  <span className="self-start sm:self-auto text-xs font-mono font-extrabold text-clay-800 bg-clay-50 border border-clay-200 px-2.5 py-1 rounded-lg">
                    {soilificationValue === 0 ? 'Unamended (0X)' : `${Math.round(1 + ((soilificationValue / 100) * 9))}X Concentration`}
                  </span>
                </div>
                <input 
                  type="range"
                  id="soilification-range"
                  min="0"
                  max="100"
                  value={soilificationValue}
                  onChange={(e) => {
                    setIsAutoPlaying(false);
                    setSoilificationValue(Number(e.target.value));
                  }}
                  className="w-full h-3 bg-sand-200 rounded-lg appearance-none cursor-pointer accent-clay-600 focus:outline-none focus:ring-2 focus:ring-clay-500"
                />
                <div className="flex justify-between items-center text-[10px] font-bold text-sand-500 uppercase tracking-widest font-mono">
                  <span>Pure Dry Sand</span>
                  <span>10X Ultimate Formulation</span>
                </div>
              </div>

              {/* Quick Presets row */}
              <div className="flex flex-wrap items-center gap-2 -mt-2">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-sand-500 font-mono">Presets:</span>
                <button
                  type="button"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setSoilificationValue(0);
                  }}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-extrabold transition-all cursor-pointer ${
                    soilificationValue === 0 
                      ? 'bg-amber-800 text-white shadow-md shadow-amber-800/10' 
                      : 'bg-sand-100 hover:bg-sand-200 text-sand-800'
                  }`}
                >
                  Desert Dune (0X)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setSoilificationValue(45);
                  }}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-extrabold transition-all cursor-pointer ${
                    soilificationValue >= 30 && soilificationValue <= 60 
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/10' 
                      : 'bg-sand-100 hover:bg-sand-200 text-sand-800'
                  }`}
                >
                  Crust Stabilization (4.5X)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setSoilificationValue(100);
                  }}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-extrabold transition-all cursor-pointer ${
                    soilificationValue === 100 
                      ? 'bg-sage-600 text-white shadow-md shadow-sage-600/10' 
                      : 'bg-sand-100 hover:bg-sand-200 text-sand-800'
                  }`}
                >
                  Ultimate Loam (10X)
                </button>
              </div>

              {/* Dynamic stats metrics updating based on slider */}
              <div className="grid grid-cols-3 gap-3">
                {/* Moisture Card */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 450, damping: 14 }}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer ${
                    moisture > 50 
                      ? 'bg-blue-50/80 border-blue-200 shadow-sm shadow-blue-100/20' 
                      : moisture > 25 
                      ? 'bg-amber-50/50 border-amber-200/60' 
                      : 'bg-sand-100/80 border-sand-200'
                  }`}
                >
                  <Droplets className={`w-4 h-4 mb-1.5 transition-colors ${moisture > 50 ? 'text-blue-600' : 'text-blue-400'}`} />
                  <span className="text-[10px] font-bold text-sand-500 font-mono tracking-wide uppercase leading-none mb-1">Moisture</span>
                  <span className={`text-lg sm:text-xl font-extrabold font-mono transition-all duration-300 ${moisture > 50 ? 'text-blue-900' : 'text-sand-900'}`}>
                    {moisture}%
                  </span>
                </motion.div>

                {/* Aggregates Card */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 450, damping: 14 }}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer ${
                    aggregation > 50 
                      ? 'bg-sage-100/50 border-sage-200 shadow-sm shadow-sage-100/20' 
                      : aggregation > 25 
                      ? 'bg-amber-50/50 border-amber-200/60' 
                      : 'bg-sand-100/80 border-sand-200'
                  }`}
                >
                  <Sprout className={`w-4 h-4 mb-1.5 transition-colors ${aggregation > 50 ? 'text-sage-600' : 'text-sage-500'}`} />
                  <span className="text-[10px] font-bold text-sand-500 font-mono tracking-wide uppercase leading-none mb-1">Aggregates</span>
                  <span className={`text-lg sm:text-xl font-extrabold font-mono transition-all duration-300 ${aggregation > 50 ? 'text-sage-900' : 'text-sand-900'}`}>
                    {aggregation}%
                  </span>
                </motion.div>

                {/* Drift Risk Card */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 450, damping: 14 }}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer ${
                    drift < 30 
                      ? 'bg-emerald-50/50 border-emerald-200 shadow-sm shadow-emerald-100/20' 
                      : drift > 75 
                      ? 'bg-rose-50/80 border-rose-250 text-rose-950' 
                      : 'bg-sand-100/80 border-sand-200'
                  }`}
                >
                  <Wind className={`w-4 h-4 mb-1.5 transition-colors ${drift < 30 ? 'text-emerald-600' : 'text-rose-500'}`} />
                  <span className="text-[10px] font-bold text-sand-500 font-mono tracking-wide uppercase leading-none mb-1">Drift Risk</span>
                  <span className={`text-lg sm:text-xl font-extrabold font-mono transition-all duration-300 ${drift < 30 ? 'text-emerald-950' : 'text-rose-950'}`}>
                    {drift}%
                  </span>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Dynamic numerical grid counters block underneath */}
        <div className="mt-20 pt-16 border-t border-sand-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-clay-600 font-mono block mb-2">Our Numerical Impact</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-display">A Paradigm Shift In Soil Physics</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_US_CONTENT.metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                id={`metric-card-${idx}`}
                className="p-6 rounded-2xl bg-white border border-sand-200 shadow-sm hover:shadow-md hover:border-sand-300 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {idx === 0 && <Droplets className="w-6 h-6 text-blue-500 bg-blue-50 p-1.5 rounded-lg border border-blue-100" />}
                    {idx === 1 && <Wind className="w-6 h-6 text-amber-600 bg-amber-50 p-1.5 rounded-lg border border-amber-100" />}
                    {idx === 2 && <Sun className="w-6 h-6 text-amber-500 bg-amber-50 p-1.5 rounded-lg border border-amber-100" />}
                    {idx === 3 && <Sprout className="w-6 h-6 text-sage-600 bg-sage-50 p-1.5 rounded-lg border border-sage-100" />}
                    <span className="text-[10px] font-mono font-bold uppercase py-0.5 px-2 rounded bg-sand-100 text-sand-700">Measured</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">{metric.label}</h3>
                  <p className="text-sm text-sand-500 leading-normal mt-1.5">{metric.description}</p>
                </div>
                <div className="text-4xl font-extrabold text-clay-700 font-mono tracking-tight mt-6">
                  {metric.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
