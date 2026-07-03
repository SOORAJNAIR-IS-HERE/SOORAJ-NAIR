"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Eye, Heart, MessageCircle, ArrowLeft, ArrowRight, X, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";

interface ReelData {
  id: string;
  videoUrl: string;
  title: string;
  tag: string;
  likes: string;
  comments: string;
}

const reels: ReelData[] = [
  {
    id: 'reel-1',
    videoUrl: '/video4.mp4',
    tag: '// WIRELESS_LABS',
    title: 'Setting up the ultra-portable field deck for 2.4GHz / 5GHz signal monitoring.',
    likes: '1.2k',
    comments: '42'
  },
  {
    id: 'reel-2',
    videoUrl: '/video3.mp4',
    tag: '// WIRELESS_LABS',
    title: 'Setting up the ultra-portable field deck for 2.4GHz / 5GHz signal monitoring.',
    likes: '1.2k',
    comments: '42'
  },
  {
    id: 'reel-3',
    videoUrl: '/video2.mp4',
    tag: '// BLUETOOTH_AUDITS',
    title: 'Sniffing GATT descriptors on smart IoT locks to map static credentials real-time.',
    likes: '948',
    comments: '29'
  },
  {
    id: 'reel-4',
    videoUrl: '/video.mp4',
    tag: '// HARDWARE_STATION',
    title: 'Custom logic analyzer setups: tracking UART serial interfaces on unknown firmware boards.',
    likes: '1.5k',
    comments: '56'
  },
  {
    id: 'reel-5',
    videoUrl: '/video5.mp4',
    tag: '// HARDWARE_STATION',
    title: 'Custom logic analyzer setups: tracking UART serial interfaces on unknown firmware boards.',
    likes: '1.5k',
    comments: '56'
  }
];

export const InstaShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedReel, setSelectedReel] = useState<ReelData | null>(null);
  const [modalMuted, setModalMuted] = useState(false);

  // Auto-scroll loop mechanics
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoScroll = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // NEW: Cinematic Blur + Zoom-In Staggered Cascade
  const trackVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Distinct interval timing between sequential cards
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.88,        // Zoom starting point
      filter: "blur(12px)", // Smooth camera lens blur effect
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,           // Resolves out to true resolution scale
      filter: "blur(0px)",  // Lens refocuses cleanly
      y: 0,
      transition: { 
        duration: 0.85, 
        ease: [0.34, 1.56, 0.64, 1] // Custom sleek cubic bezier curve for smooth braking snap
      } 
    }
  };

  return (
    <section id="showcase" className="py-24 max-w-7xl mx-auto scroll-mt-24 overflow-hidden relative">
      
      {/* Top Section Headers with a clean fade-in refocus */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 pb-6 border-b border-slate-900/60 gap-4 px-6">
        <motion.div
          initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-1.5 text-pink-500 font-mono text-[11px] tracking-widest uppercase font-bold mb-2">
            <FaInstagram className="w-3.5 h-3.5" /> soorjactl
          </div>
          <h2 className="text-2xl md:text-3xl font-sans font-black text-white tracking-tight uppercase">
            Technical Briefings
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-slate-500 text-xs font-mono max-w-xs md:text-right"
        >
          [ This is for strictly Education purpose! ]
        </motion.p>
      </div>

      {/* Track Viewport Frame */}
      <div className="relative group/track w-full">
        
        {/* Large Floating Left Arrow Control */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-5 rounded-full bg-slate-950/90 hover:bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 opacity-0 group-hover/track:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-md hidden md:flex active:scale-95"
          aria-label="Scroll Left"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Large Floating Right Arrow Control */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-5 rounded-full bg-slate-950/90 hover:bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 opacity-0 group-hover/track:opacity-100 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-md hidden md:flex active:scale-95"
          aria-label="Scroll Right"
        >
          <ArrowRight className="w-6 h-6" />
        </button>

        {/* Side-by-Side Horizontal Sliding Canvas Container */}
        <motion.div 
          ref={containerRef}
          variants={trackVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="flex flex-nowrap gap-0 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reels.map((reel) => (
            <motion.div 
              key={reel.id}
              variants={cardVariants}
              onClick={() => setSelectedReel(reel)}
              className="w-[300px] md:w-[320px] shrink-0 snap-center p-0 hover:scale-[1.01] transition-transform duration-300 relative group cursor-pointer"
            >
              {/* Borderless Frame with Deep Ambient Box Shadows instead of lines */}
              <div className="relative aspect-[9/16] w-full rounded-[2rem] overflow-hidden bg-slate-950 shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-all duration-500">
                
                <video
                  src={reel.videoUrl}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* Hover Play State Cover Trigger */}
                <div className="absolute inset-0 bg-slate-950/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="p-4 rounded-full bg-slate-950/90 border border-slate-800 backdrop-blur-sm text-cyan-400 scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />

                {/* Meta Header Content */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] text-white/70 font-mono pointer-events-none">
                  <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5 flex items-center gap-1">
                    <Eye className="w-3 h-3 text-cyan-400" /> LIVE
                  </span>
                  <span className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5">
                    <Heart className="w-3 h-3 text-pink-500 fill-current" /> {reel.likes}
                  </span>
                </div>

                {/* Lower Typography Content Block */}
                <div className="absolute bottom-6 left-5 right-5 space-y-1.5 pointer-events-none">
                  <span className="text-[9px] font-mono font-bold text-pink-400 tracking-widest uppercase block">
                    {reel.tag}
                  </span>
                  <h3 className="text-xs font-sans font-bold text-white leading-snug tracking-tight">
                    {reel.title}
                  </h3>
                  <div className="flex items-center gap-2 pt-1 text-[9px] text-slate-500 font-mono">
                    <span><MessageCircle className="w-3 h-3 inline mr-1" />{reel.comments} feedback entries</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DEEP IMMERSIVE FULL SCREEN PLAYER MODAL */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
          >
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedReel(null)} />

            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[380px] aspect-[9/16] bg-slate-950 border border-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl z-10 overflow-hidden"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <video
                  src={selectedReel.videoUrl}
                  loop
                  playsInline
                  autoPlay
                  controls={false}
                  muted={modalMuted}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                  <button 
                    onClick={() => setSelectedReel(null)}
                    className="p-2 rounded-full bg-slate-950/80 border border-slate-800 text-white hover:text-red-400 transition-colors backdrop-blur-md"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={() => setModalMuted(!modalMuted)}
                    className="p-2 rounded-full bg-slate-950/80 border border-slate-800 text-white hover:text-cyan-400 transition-colors backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono px-3"
                  >
                    {modalMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                    <span>{modalMuted ? "UNMUTE" : "AUDIO_ON"}</span>
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-2 text-left z-20">
                  <span className="text-[10px] font-mono font-bold text-pink-400 tracking-widest uppercase block">
                    {selectedReel.tag}
                  </span>
                  <h3 className="text-sm font-sans font-bold text-white leading-relaxed">
                    {selectedReel.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-mono pt-1">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-pink-500 fill-current" /> {selectedReel.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3 text-cyan-400" /> {selectedReel.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};