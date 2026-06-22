/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, CheckCircle2, Send, MessageSquare, User, Smartphone } from 'lucide-react';

export default function ContactUs() {
  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formName.trim() && formEmail.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="pt-20 pb-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#786637] font-mono bg-[#786637]/5 px-3.5 py-1.5 rounded-full">
            Inquiries & Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
            Let&apos;s Restore Your Land Together
          </h2>
          <p className="text-base text-[#615a4d] max-w-2xl mx-auto">
            Submit your land soil details or commercial project requirement. Our agritech scientists and research laboratory representatives will reach out within 24-48 hours.
          </p>
        </motion.div>

        {/* Message Sender Form Card - Beautifully centered and adjusted */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-12 rounded-3xl border-2 border-sand-100 bg-white shadow-2xl shadow-sand-200/40 text-left relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-clay-600 via-amber-500 to-sage-600" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  onSubmit={handleFormSubmit} 
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2.5 pb-4 border-b border-sand-100">
                    <div className="w-10 h-10 rounded-xl bg-clay-50 border border-clay-100 flex items-center justify-center text-clay-700">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg font-display tracking-tight">Direct Lab Transmission</h3>
                      <p className="text-xs text-sand-500 font-sans">Fill in the technical context of your request below.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="sender-name" className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-sand-500" />
                        <span>Your Full Name:</span>
                      </label>
                      <input 
                        type="text"
                        id="sender-name"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full text-sm p-3.5 rounded-xl border border-sand-200 bg-[#fbfbf9]/40 shadow-inner focus:outline-none focus:bg-white focus:ring-2 focus:ring-clay-500 transition-all font-sans text-slate-900"
                      />
                    </div>
                    
                    {/* E-Mail */}
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="sender-email" className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-sand-500" />
                        <span>Email Address:</span>
                      </label>
                      <input 
                        type="email"
                        id="sender-email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full text-sm p-3.5 rounded-xl border border-sand-200 bg-[#fbfbf9]/40 shadow-inner focus:outline-none focus:bg-white focus:ring-2 focus:ring-clay-500 transition-all font-sans text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Indian Mobile Number */}
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="sender-phone" className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-[#786637]" />
                        <span>Indian Mobile Number:</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3.5 text-sm font-bold font-mono text-slate-400 border-r border-sand-200 pr-2.5">+91</span>
                        <input 
                          type="tel"
                          id="sender-phone"
                          required
                          value={formPhone}
                          onChange={(e) => {
                            const cleaned = e.target.value.replace(/\D/g, '');
                            if (cleaned.length <= 10) {
                              setFormPhone(cleaned);
                            }
                          }}
                          placeholder="98765 43210"
                          className="w-full text-sm pl-16 pr-3.5 py-3.5 rounded-xl border border-sand-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-mono text-slate-900"
                        />
                      </div>
                    </div>

                    {/* Site Location */}
                    <div className="space-y-2 flex flex-col">
                      <label htmlFor="sender-location" className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#786637]" />
                        <span>Farm / Site Location (State/City):</span>
                      </label>
                      <input 
                        type="text"
                        id="sender-location"
                        required
                        value={formLocation}
                        onChange={(e) => setFormLocation(e.target.value)}
                        placeholder="e.g. Ajmer, Rajasthan"
                        className="w-full text-sm p-3.5 rounded-xl border border-sand-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-sans text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Detailed Message */}
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="sender-msg" className="text-xs font-extrabold text-slate-800">
                      Detailed Inquiry Message:
                    </label>
                    <textarea 
                      id="sender-msg"
                      required
                      rows={5}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Please share details about your dry desert soil conditions, estimated farm acreage, water availability, and project timeline..."
                      className="w-full text-sm p-3.5 rounded-xl border border-sand-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all font-sans text-slate-900 leading-relaxed"
                    />
                  </div>

                  {/* Submit message button with superb high visibility */}
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    id="submit-contact"
                    className="group flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-xl bg-amber-600 text-white font-extrabold text-sm tracking-wider uppercase shadow-xl shadow-amber-600/30 hover:shadow-2xl hover:bg-amber-700 active:bg-amber-800 transition-all w-full cursor-pointer border border-amber-600/10"
                  >
                    <span className="text-white text-sm font-extrabold tracking-wide uppercase">Transmit Inquiry to Research Scientists</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
                  </motion.button>

                </motion.form>
              ) : (
                <motion.div 
                  key="success-banner"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 px-6 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-50 border border-sage-200 text-sage-600 flex items-center justify-center shadow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h4 className="text-xl font-bold font-display text-slate-900">Inquiry Received Successfully</h4>
                    <p className="text-xs text-sand-500 leading-normal">
                      Thank you, <span className="font-bold text-slate-800">{formName}</span>. Your details and soil treatment inquiry have been routed to Diksha Kumari and Dr. Akhil Agrawal at the central research laboratory.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-sand-100/50 border border-sand-200 text-xs font-mono text-sand-700 text-left w-full max-w-lg space-y-2 animate-fade-in">
                    <div><strong>Transaction ID:</strong> RESOL-TXN-{Math.floor(Math.random() * 900000 + 100000)}</div>
                    <div><strong>E-Mail Route:</strong> {formEmail}</div>
                    <div><strong>Mobile Number:</strong> +91 {formPhone}</div>
                    <div><strong>Site Location:</strong> {formLocation}</div>
                    <div className="pt-2 border-t border-sand-200 text-[10px] text-amber-800 font-bold">
                      A research liaison expects to issue a formal feedback within 24-48 working hours.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormMessage('');
                      setFormPhone('');
                      setFormLocation('');
                    }}
                    id="reset-form-btn"
                    className="px-6 py-2.5 rounded-lg bg-white border border-sand-300 hover:bg-sand-50 text-xs font-bold text-sand-800 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3. Direct Addressable Offices Grid cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 border-t border-sand-200">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-5 rounded-2xl bg-[#fbfbf9]/60 border border-sand-200 flex items-start gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#786637] font-mono">Central Lab Address</h4>
              <p className="text-xs font-bold text-slate-800 leading-normal mt-1.5">
                Department of Microbiology,<br />
                Central University of Rajasthan,<br />
                Ajmer, Rajasthan Area, India
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-5 rounded-2xl bg-[#fbfbf9]/60 border border-sand-200 flex items-start gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-clay-50 border border-clay-100 flex items-center justify-center text-clay-600 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#786637] font-mono">Academic & Commercial Email</h4>
              <p className="text-xs font-bold text-slate-800 leading-normal mt-1.5">
                <a href="mailto:akhil.agrawal@curaj.ac.in" className="hover:text-clay-600">akhil.agrawal@curaj.ac.in</a><br />
                <a href="mailto:inquiries@resolagritech.com" className="hover:text-clay-600">inquiries@resolagritech.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-5 rounded-2xl bg-[#fbfbf9]/60 border border-sand-200 flex items-start gap-4 text-left sm:col-span-2 lg:col-span-1"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#786637] font-mono">Mobile & WhatsApp Liaison</h4>
              <p className="text-xs font-bold text-slate-800 leading-normal mt-1.5">
                +91 1463 238755 (Office Line)<br />
                +91 9414 445899 (Commercial Desk)
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
