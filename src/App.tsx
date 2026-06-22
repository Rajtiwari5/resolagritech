/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, HelpCircle, Users, Sprout, Award, Mail } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Technology from './components/Technology';
import FieldTrials from './components/FieldTrials';
import Awards from './components/Awards';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home-about');

  // Smooth scroll page contents back to top upon shifting tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const tabs = [
    { id: 'home-about', label: 'Home & About', icon: <Home className="w-4.5 h-4.5" /> },
    { id: 'problem-tech', label: 'Problem & Tech', icon: <HelpCircle className="w-4.5 h-4.5" /> },
    { id: 'team', label: 'Our Team', icon: <Users className="w-4.5 h-4.5" /> },
    { id: 'trials', label: 'Field Trials', icon: <Sprout className="w-4.5 h-4.5" /> },
    { id: 'awards', label: 'Awards & Press', icon: <Award className="w-4.5 h-4.5" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-4.5 h-4.5" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-clay-200 selection:text-clay-950">
      
      {/* 1. Header Navigation */}
      <Navbar 
        currentTab={currentTab} 
        onTabChange={setCurrentTab} 
        tabs={tabs} 
      />

      {/* 2. Main screen transitions */}
      <main className="flex-grow">
        {currentTab !== 'home-about' && <div className="h-20" />}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id={`tab-viewpage-${currentTab}`}
            className="w-full"
          >
            {currentTab === 'home-about' && (
              <div className="w-full">
                <Hero 
                  onLearnMoreClick={() => setCurrentTab('trials')} 
                  onExploreTechClick={() => setCurrentTab('problem-tech')} 
                />
                <AboutUs />
              </div>
            )}

            {currentTab === 'team' && (
              <div className="w-full">
                <Team />
              </div>
            )}

            {currentTab === 'problem-tech' && (
              <div className="w-full">
                <Technology />
              </div>
            )}

            {currentTab === 'trials' && (
              <div className="w-full">
                <FieldTrials />
              </div>
            )}

            {currentTab === 'awards' && (
              <div className="w-full">
                <Awards />
              </div>
            )}

            {currentTab === 'contact' && (
              <div className="w-full">
                <ContactUs />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer onTabChange={setCurrentTab} />

    </div>
  );
}
