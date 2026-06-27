/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Leaf, Newspaper, Video, MessageSquareQuote, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { AWARDS_LIST, MEDIA_COVERAGE } from '../data';

// Array containing your YouTube video information
const VIDEOS_DATA = [
  {
    id: 1,
    title: "DD News Coverage – Resol Agritech",
    category: "DD News",
    youtubeId: "qIOckj5IsO4",
    description:
      "DD News covers Resol Agritech's innovative desert soil transformation technology and its impact on sustainable agriculture."
  },
  {
    id: 2,
    title: "DD News Special Feature – Resol Agritech",
    category: "DD News",
    youtubeId: "lrfj_RLQOyk",
    description:
      "Another DD News feature showcasing Resol Agritech's breakthrough research, innovation, and real-world field implementation."
  }
];

export default function Awards() {
  // Local state to track which image is currently open in fullscreen
  const [activeImage, setActiveImage] = useState(null);

  // Local state for the selected/playing YouTube video
  const [selectedVideo, setSelectedVideo] = useState(VIDEOS_DATA[0]);

  return (
    <section className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">Awards & Press Validation</h2>
          <p className="text-base text-sand-500">
            Formally validated under Indian national technology framework summits, backed by corporate doctoral research fellowships and major mainstream media.
          </p>
        </div>

        {/* 1. Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {AWARDS_LIST.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              id={`award-card-${award.id}`}
              className="p-6 sm:p-8 rounded-3xl border border-sand-200 bg-white shadow-sm hover:shadow-xl hover:border-sand-300 transition-all text-left flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 inline-block">
                    <Award className="w-6 h-6" />
                  </span>
                  <span className="text-[9px] font-mono font-bold uppercase text-sand-400">Awarded Milestone</span>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug font-display">{award.title}</h3>
                  <span className="text-xs font-semibold text-clay-600 inline-block">{award.recipient}</span>
                </div>

                <p className="text-xs text-sand-500 leading-relaxed font-normal pt-2 border-t border-sand-100">
                  {award.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sand-100 flex items-center gap-2 text-[10px] font-mono font-bold text-sand-400 relative z-10">
                <span className="text-[#ca8a04]">Authorized:</span>
                <span className="text-slate-700 uppercase tracking-wider">{award.authority}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Media highlights & Video channel */}
        <div className="space-y-12">
          {/* A. News Clipping Card (The Hindu) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 sm:p-8 rounded-3xl border border-sand-200 bg-white shadow-sm text-left relative overflow-hidden flex flex-col md:flex-row gap-8 items-stretch justify-between group cursor-pointer"
          >
            <div className="space-y-4 max-w-xl md:w-1/2 flex flex-col justify-center">
              {/* Header branding */}
              <div className="flex items-center gap-2 text-slate-800 pb-2 border-b border-sand-100">
                <Newspaper className="w-5 h-5 text-sand-500" />
                <span className="font-display font-semibold text-base leading-none tracking-tight">The Hindu</span>
                <span className="text-xs font-mono text-sand-400 font-bold ml-2">| {MEDIA_COVERAGE.date}</span>
              </div>

              {/* Quoted headline */}
              <div className="flex gap-2 text-clay-600">
                <MessageSquareQuote className="w-7 h-7 opacity-20 shrink-0 mt-1" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display leading-tight group-hover:text-amber-700 transition-colors">
                  &ldquo;{MEDIA_COVERAGE.headline}&rdquo;
                </h3>
              </div>

              <p className="text-sm text-sand-700 leading-relaxed font-normal pl-9">
                {MEDIA_COVERAGE.extract}
              </p>
              
              <div className="pl-9 pt-2">
                <span className="inline-block bg-sage-50 text-sage-700 px-3 py-1 rounded border border-sage-150 text-[10px] font-mono font-bold uppercase">
                  Verified News Archive • {MEDIA_COVERAGE.author}
                </span>
              </div>
            </div>

            {/* News Clipping Image Component */}
            <div
  onClick={() => setActiveImage("/src/assets/the hindu news.jpg")}
  className="md:w-1/2 rounded-2xl overflow-hidden border border-sand-200 bg-sand-50 relative min-h-[250px] shadow-inner group-hover:shadow-md transition-shadow cursor-zoom-in"
  title="Click to zoom image"
>
  <img
    src="/src/assets/the hindu news.jpg"
    alt="The Hindu News Article clipping"
    className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
  />
</div>
          </motion.div>

          {/* B. Dainik Bhaskar News Clipping Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl border border-sand-200 bg-white shadow-sm text-left relative overflow-hidden flex flex-col md:flex-row-reverse gap-8 items-stretch justify-between group cursor-pointer"
          >
            <div className="space-y-4 max-w-xl md:w-1/2 flex flex-col justify-center">
              {/* Header branding */}
              <div className="flex items-center gap-2 text-slate-800 pb-2 border-b border-sand-100">
                <Newspaper className="w-5 h-5 text-red-600" />
                <span className="font-display font-semibold text-base leading-none tracking-tight text-red-600">Dainik Bhaskar</span>
                <span className="text-xs font-mono text-sand-400 font-bold ml-2">| Press Feature</span>
              </div>

              {/* Quoted headline */}
              <div className="flex gap-2 text-clay-600">
                <MessageSquareQuote className="w-7 h-7 opacity-20 shrink-0 mt-1" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-display leading-tight group-hover:text-amber-700 transition-colors">
                  &ldquo;थार में रेत पर उगाया गेहूं, अब बाजरा-मूंग की बारी&rdquo;
                </h3>
              </div>

              <p className="text-sm text-sand-700 leading-relaxed font-normal pl-9">
                National daily Dainik Bhaskar validates the successful implementation of the "Desert Soilification" technology. By utilizing an indigenous bioformulation to modify sand particles into soil-like microstructures, the technology halves crop water requirements and opens new avenues for food cultivation in hyper-arid zones.
              </p>
              
              <div className="pl-9 pt-2">
                <span className="inline-block bg-sage-50 text-sage-700 px-3 py-1 rounded border border-sage-150 text-[10px] font-mono font-bold uppercase">
                  Verified Press • Central University of Rajasthan
                </span>
              </div>
            </div>

            {/* News Clipping Image Component */}
           <div
  onClick={() => setActiveImage("/src/assets/hindi news.jpeg")}
  className="md:w-1/2 rounded-2xl overflow-hidden border border-sand-200 bg-sand-50 relative min-h-[250px] shadow-inner group-hover:shadow-md transition-shadow cursor-zoom-in"
  title="Click to zoom image"
>
  <img
    src="/src/assets/hindi news.jpeg"
    alt="Hindi News Article clipping"
    className="absolute inset-0 w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105"
  />
</div>
          </motion.div>
        </div>

        {/* 3. Price Innovation Challenge Section */}
        <motion.div  
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Image Showcase */}
          <div 
            onClick={() => setActiveImage("/src/assets/1 price innovatin challange.jpg")}
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-sand-200 cursor-zoom-in"
            title="Click to zoom image"
          >
            <img 
              src="/src/assets/1 price innovatin challange.jpg" 
              alt="National Price Innovation Challenge Award" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 text-purple-700 text-xs font-bold uppercase tracking-wider inline-block">
                National Recognition
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display leading-tight">
                1st Prize: National Innovation Challenge
              </h3>
            </div>

            <p className="text-sm text-sand-700 leading-relaxed font-normal">
              Resol Agritech was recognized as the most promising agro-ecological startup invention at the National Innovation &amp; Startup Council's prestigious competition. The judges highlighted our technology's extraordinary potential to transform degraded desert habitats into sustainable food production reserves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-purple-50 border border-purple-200 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-600" />
                  <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">Cost-Effective Solution</span>
                </div>
                <p className="text-sm text-purple-700 font-normal">INR 840/kg formulation—significantly cheaper than competing hydrogels while delivering superior results</p>
              </div>

              <div className="p-5 rounded-xl bg-pink-50 border border-pink-200 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-pink-600" />
                  <span className="text-xs font-bold text-pink-900 uppercase tracking-wider">Scalable Impact</span>
                </div>
                <p className="text-sm text-pink-700 font-normal">From pilot trials to large-scale desert reclamation—proven across multiple geographies and crop types</p>
              </div>

              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-amber-600" />
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">Farmer-Centric Design</span>
                </div>
                <p className="text-sm text-amber-700 font-normal">Accessibility for marginal and small farmers—enabling climate-resilient agriculture in harsh environments</p>
              </div>

              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">Environmental Promise</span>
                </div>
                <p className="text-sm text-emerald-700 font-normal">Restores groundwater balance and soil microenvironments while enabling sustainable food production</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-100/60 to-pink-100/60 border border-purple-200/60 flex items-start gap-3">
              <Award className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-purple-900 uppercase tracking-wider block mb-1">Recognition</p>
                <p className="text-sm text-purple-800">
                  Selected as one of India's most innovative agritech solutions with transformative potential for food security and environmental restoration
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. IISF Mission Startup Laurel Section */}
        <motion.div  
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-300 text-blue-700 text-xs font-bold uppercase tracking-wider inline-block">
                Awarded Milestone
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display leading-tight">
                IISF Mission Startup Laurel
              </h3>
              <p className="text-lg font-semibold text-slate-700">Resol Agritech Pvt. Ltd.</p>
            </div>

            <p className="text-sm text-sand-700 leading-relaxed font-normal">
              Awarded at the Technical Panel session under the Ministry of Science and Technology, Govt of India, celebrating scientific ideas that successfully transition from university laboratories into registered commercial entities.
            </p>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-100/60 to-cyan-100/60 border border-blue-200/60 flex items-start gap-3">
              <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-blue-900 uppercase tracking-wider block mb-1">Authorized</p>
                <p className="text-sm text-blue-800">
                  India International Science Festival (IISF)
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image Showcase */}
          <div 
            onClick={() => setActiveImage("/src/assets/IISF mission startup award.jpg")}
            className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xl border border-sand-200 order-1 lg:order-2 cursor-zoom-in"
            title="Click to zoom image"
          >
            <img 
              src="/src/assets/IISF mission startup award.jpg" 
              alt="IISF Mission Startup Laurel Award" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* 5. TV Media & Press Broadcasts (Now Playing & Video Playlist) */}
        <div className="mt-24 space-y-12">
          <div className="text-left max-w-3xl space-y-2">
            <span className="px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-2">
              <Video className="w-3.5 h-3.5 text-red-600" />
              <span>Broadcast Validation</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              National Television & Press Coverage
            </h3>
            <p className="text-sm text-sand-600 leading-relaxed font-normal">
              Our ecological achievements and sand-to-soil breakthroughs featured across mainstream media formats and national television.
            </p>
          </div>

          {/* Interactive Player Layout - Grid layout matching your requested video playlist UI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Now Playing (Main Video Player) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 font-display">Now Playing</span>
                <span className="text-xs font-mono font-bold text-amber-600 flex items-center gap-1.5 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span> Live Presentation
                </span>
              </div>
              
              {/* Responsive Iframe Container */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg border border-sand-200 bg-slate-950">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=0`}
                  title={selectedVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Dynamic Metadata below main video */}
              <div className="p-2 space-y-1">
                <span className="text-xs font-semibold text-clay-600 uppercase tracking-wider block">
                  {selectedVideo.category}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug font-display">
                  {selectedVideo.title}
                </h4>
                <p className="text-xs sm:text-sm text-sand-600 leading-relaxed font-normal pt-1">
                  {selectedVideo.description}
                </p>
              </div>
            </div>

            {/* Right Column: Video Playlist (Stacked Sidebar) */}
            <div className="lg:col-span-4 h-full">
              <div className="rounded-3xl border border-sand-200 bg-white overflow-hidden shadow-sm flex flex-col h-full">
                
                {/* Custom Playlist Header */}
                <div className="bg-amber-600 text-white px-6 py-4 font-display font-bold text-base tracking-wide flex items-center justify-between">
                  <span>Video Playlist</span>
                  <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full text-white font-mono font-medium">
                    {VIDEOS_DATA.length} Videos
                  </span>
                </div>

                {/* Playlist Scroll Container */}
                <div className="divide-y divide-sand-100 max-h-[460px] overflow-y-auto">
                  {VIDEOS_DATA.map((video) => {
                    const isActive = video.id === selectedVideo.id;
                    return (
                      <div
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`group/item cursor-pointer p-4 flex gap-4 transition-all items-center text-left ${
                          isActive 
                            ? 'bg-amber-50/40 border-l-4 border-amber-600 pl-3' 
                            : 'hover:bg-sand-50/50 border-l-4 border-transparent'
                        }`}
                      >
                        {/* Dynamic Youtube Thumbnail */}
                        <div className="relative w-28 aspect-video rounded-lg overflow-hidden bg-sand-100 shrink-0 border border-sand-200/60 shadow-sm">
                          <img
                            src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                          />
                          
                          {/* Play Button Overlay */}
                          <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity ${
                            isActive ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'
                          }`}>
                            <div className="w-8 h-8 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 translate-x-[0.5px]">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Text Metadata */}
                        <div className="space-y-0.5 min-w-0">
                          <h5 className={`text-xs font-bold leading-snug line-clamp-2 transition-colors ${
                            isActive ? 'text-amber-800' : 'text-slate-900 group-hover/item:text-amber-700'
                          }`}>
                            {video.title}
                          </h5>
                          <span className="text-[10px] font-medium text-sand-500 block">
                            {video.category}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Image Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Expanded Image */}
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={activeImage}
              alt="Enlarged validation archive"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent modal closure if user clicks the image body
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}