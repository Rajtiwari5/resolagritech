/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sprout, Users, HelpCircle, Award, Mail, Info, Leaf } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  tabs: { id: string; label: string; icon: React.ReactNode }[];
}

export default function Navbar({ currentTab, onTabChange, tabs }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-sand-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo element */}
          <div onClick={() => onTabChange('home-about')} className="cursor-pointer">
            <Logo className="w-11 h-11" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" id="nav-desktop">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-tab-${tab.id}`}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'text-white font-bold' 
                      : 'text-sand-800 hover:text-clay-600 hover:bg-sand-100/50'
                  }`}
                >
                  {/* Active background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-gradient-to-r from-clay-600 to-clay-800 rounded-full -z-10 shadow-md shadow-clay-600/15"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`transition-transform duration-300 ${isActive ? 'scale-110 text-white' : 'scale-100 text-sand-500 hover:text-clay-600'}`}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl bg-sand-100/80 border border-sand-200 text-sand-800 hover:bg-sand-200/50 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-sand-200 bg-white/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1.5 shadow-inner">
              {tabs.map((tab) => {
                const isActive = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`nav-mobile-${tab.id}`}
                    onClick={() => {
                      onTabChange(tab.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-clay-600 to-clay-800 text-white shadow-md'
                        : 'text-sand-800 hover:bg-sand-100 hover:text-clay-600'
                    }`}
                  >
                    <span className={isActive ? 'text-white' : 'text-sand-500'}>
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}

              <div className="pt-4 pb-2 border-t border-sand-200 flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5 text-xs text-sand-500 font-mono">
                  <span>DPIIT Startup Certification</span>
                  <Leaf className="w-3 h-3 text-sage-500 fill-sage-500/20" />
                </div>
                <div className="text-[10px] text-sand-400 font-mono">
                  Resol Agritech Private Limited
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
