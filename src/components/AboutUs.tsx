/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, BarChart3, Receipt, ArrowRight, ShieldCheck, HelpCircle, GraduationCap } from 'lucide-react';
import { ABOUT_US_CONTENT, REVENUE_AND_MARKET } from '../data';

export default function AboutUs() {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  return (
    <section className="py-20 bg-sand-50/50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Section Header */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end mb-16">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-clay-600 font-mono block mb-2">Corporate Profile</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Resol Agritech Private Limited
            </h2>
          </div>
          <p className="text-base text-sand-500 max-w-md text-left">
            An innovative, DPIIT-certified agritech spin-off developing green polymer technologies to address dry desert cultivation blocks.
          </p>
        </div>

        {/* Vision & Mission bento cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-sm text-left flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-600">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight font-display">Our Corporate Vision</h3>
              <p className="text-md text-sand-800 leading-relaxed mt-3.5">
                {ABOUT_US_CONTENT.vision}
              </p>
            </div>
          </motion.div>

          {/* Mission card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-sand-200 shadow-sm text-left flex flex-col gap-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-clay-50 border border-clay-100 flex items-center justify-center text-clay-600">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight font-display">Our Strategic Mission</h3>
              <p className="text-md text-sand-800 leading-relaxed mt-3.5">
                {ABOUT_US_CONTENT.mission}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Financial and Market Structure Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-sand-100 to-sand-50 border border-sand-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & description */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#938144] font-mono block mb-2">Sustainable Business Canvas</span>
                <h3 className="text-3xl font-extrabold text-[#1a160d] tracking-tight font-display">Revenue Allocation & Markets</h3>
              </div>
              
              <p className="text-sand-800 text-base leading-relaxed">
                By maintaining a highly optimized formulation supply chain (75% revenue focus), we provide competitive unit costs while funding our specialized services and validation contract operations.
              </p>

              {/* Market columns info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/70 border border-sand-200 shadow-sm">
                  <span className="text-[11px] font-mono font-bold text-sage-700 uppercase tracking-widest block mb-1">Primary Market Focus</span>
                  <p className="text-xs font-semibold text-sand-800">{REVENUE_AND_MARKET.markets.primary}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/70 border border-sand-200 shadow-sm">
                  <span className="text-[11px] font-mono font-bold text-clay-600 uppercase tracking-widest block mb-1">Secondary Segments</span>
                  <p className="text-xs font-semibold text-sand-800">{REVENUE_AND_MARKET.markets.secondary}</p>
                </div>
              </div>
            </div>

            {/* Interactive Custom percentage segment bars */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#786637] uppercase tracking-widest block text-left mb-2">Hover to inspect distribution:</span>
              
              <div className="space-y-3.5">
                {REVENUE_AND_MARKET.sources.map((item, idx) => {
                  const isHovered = activeSegment === idx;
                  return (
                    <div
                      key={item.source}
                      onMouseEnter={() => setActiveSegment(idx)}
                      onMouseLeave={() => setActiveSegment(null)}
                      className={`p-4 rounded-2xl border transition-all duration-300 text-left cursor-help ${
                        isHovered 
                          ? 'bg-white border-clay-300 shadow-md translate-x-2'
                          : 'bg-white/55 border-sand-200 shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-bold text-slate-800 text-sm">{item.source}</span>
                        <span className="font-mono font-bold text-clay-600 text-sm">{item.share}%</span>
                      </div>
                      
                      {/* Percent Fill bar background track */}
                      <div className="w-full h-2.5 bg-sand-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-clay-500 to-clay-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.share}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                        />
                      </div>

                      {/* Expanding details on hover */}
                      <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-20 opacity-100 mt-2.5 pt-2 border-t border-sand-200' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs text-sand-700 leading-relaxed font-normal">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Credentials and Certifications banner */}
        <div className="mt-20 pt-10 border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-xl bg-sage-50 border border-sage-200 flex items-center justify-center text-sage-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">DPIIT Startup Recognition & Compliances</h4>
              <p className="text-xs text-sand-500 font-medium">Formally established Private Limited entity under Ministry of Commerce & Industry, GoI</p>
            </div>
          </div>
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 tracking-tight">Bayer Medha Academic Spin-Off</h4>
              <p className="text-xs text-sand-500 font-medium">Backed-up by scientific PhD research scholarship grants</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
