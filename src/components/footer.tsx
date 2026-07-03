"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  ArrowUp, 
  Sparkles, 
  Compass, 
  BookOpen, 
  Laptop 
} from "lucide-react";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const [statusIndex, setStatusIndex] = useState(0);
  
  // A creative, dynamic rotation of what you are working on right now
  const studioStatus = [
    "Currently exploring advanced wireless protocols 📡",
    "Editing a new video tutorial for YouTube 🎬",
    "Reviewing student code submissions 💻",
    "Reading: 'Designing Data-Intensive Applications' 📚",
    "Curating new security tips for Instagram 📸"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % studioStatus.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [studioStatus.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-slate-900 bg-slate-950/60 backdrop-blur-md pt-16 pb-12 font-mono text-xs text-slate-400">
      
      {/* Subtle Top Accent Border Line */}
      <div className="absolute top-0 left-0 w-full flex justify-between px-6 pointer-events-none">
        <div className="h-[1px] w-24 bg-gradient-to-r from-cyan-500/50 to-transparent" />
        <div className="h-[1px] w-24 bg-gradient-to-l from-purple-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-900 items-stretch">
          
          {/* 1. Profile / Brand Identity Block */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-white font-sans font-black text-lg tracking-wider">
                  SOORAJ<span className="text-cyan-400">NAIR</span>
                </span>
              </div>
              <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm">
                Security researcher, academic educator, and content creator. Documenting the intersection of hardware, wireless networks, and defensive engineering.
              </p>
            </div>

            {/* Clean Status Indicator */}
            <div className="flex items-center gap-2 text-slate-300 text-[11px] bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-xl w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-slate-500 font-bold">STUDIO_STATUS:</span> 
              <span className="text-slate-300">Available for projects</span>
            </div>
          </div>

          {/* 2. Creative Element: Live Studio Ticker */}
          <div className="lg:col-span-4 bg-slate-900/30 border border-slate-900 rounded-xl p-5 flex flex-col justify-between min-h-[150px]">
            <div>
              <span className="text-slate-500 font-bold text-[10px] tracking-widest uppercase block mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> CURRENTLY_DOING
              </span>
              
              <div className="h-[40px] flex items-center overflow-hidden">
                <motion.p 
                  key={statusIndex}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  className="text-slate-200 font-sans text-xs leading-relaxed"
                >
                  {studioStatus[statusIndex]}
                </motion.p>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-900/60 flex items-center justify-between font-sans">
              <span className="flex items-center gap-1"><Laptop className="w-3 h-3 text-slate-600" /> updated_live</span>
              <span className="text-purple-400 font-mono text-[9px] font-bold">@sooractl</span>
            </div>
          </div>

          {/* 3. Social Grid & Navigation Controls */}
          <div className="lg:col-span-4 bg-slate-900/10 border border-slate-900/60 rounded-xl p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-slate-500 font-bold text-[10px] tracking-wider uppercase block flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" /> CHANNELS_CONNECT
              </span>

              {/* Clean Interactive Social Row */}
              <div className="grid grid-cols-3 gap-2">
                <a 
                  href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 transition-all group gap-1"
                >
                  <FaInstagram className="w-4 h-4" />
                  <span className="text-[9px] font-bold tracking-tight">INSTA</span>
                </a>
                <a 
                  href="https://youtube.com" target="_blank" rel="noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-red-400 hover:border-red-500/30 transition-all group gap-1"
                >
                  <FaYoutube className="w-4 h-4" />
                  <span className="text-[9px] font-bold tracking-tight">YOUTUBE</span>
                </a>
                <a 
                  href="mailto:your-email@domain.com"
                  className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all group gap-1"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-[9px] font-bold tracking-tight">EMAIL</span>
                </a>
              </div>
            </div>

            {/* Return to top row */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-900/60">
              <span className="text-slate-600 font-bold text-[10px] tracking-widest uppercase">
                REV // 2026
              </span>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToTop}
                className="flex items-center gap-1 bg-slate-950 border border-slate-800 text-slate-400 px-3 py-1.5 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all font-bold text-[10px]"
              >
                scroll_up
                <ArrowUp className="w-3 h-3" />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Minimal Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-wider text-slate-600 font-sans">
          <p>© {new Date().getFullYear()} SOORAJ NAIR. ALL RIGHTS RESERVED.</p>
          <p className="font-mono text-slate-700 tracking-widest text-[9px] uppercase flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> DESIGNED WITH PURPOSE
          </p>
        </div>
      </div>
    </footer>
  );
}