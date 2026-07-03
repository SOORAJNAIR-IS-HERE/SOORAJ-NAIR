"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  PlayCircle,
  Infinity,
  Download,
  BookOpen,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export const Bundles = () => {
  const syllabus = [
    "WiFi Fundamentals",
    "Monitor Mode",
    "Packet Capturing",
    "Handshake Collection",
    "WPA2/WPA3 Attacks",
    "Evil Twin Labs",
    "Credential Capture",
    "Automation Scripts",
  ];

  return (
    <section
      id="bundles"
      className="py-12 md:py-28 px-4 md:px-6 max-w-6xl mx-auto scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 sm:p-8 md:p-14 overflow-hidden shadow-2xl"
      >
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyan-500/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-slate-500/5 rounded-full blur-[50px] md:blur-[80px] pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE: Course Info & Syllabus */}
          <div className="order-1 lg:col-span-7 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-3 md:mb-4">
                <Terminal className="w-3.5 h-3.5" /> Pre-Registration Open
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white/95">
                Advanced WiFi Hacking
              </h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
                Learn modern wireless penetration testing completely from scratch. 
                Go from foundational network physics to executing advanced credential capture scripts.
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/20 p-3 sm:p-4 rounded-2xl border border-slate-800/50">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200">14+ Hours</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 pl-5.5">HD Content</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200">24 Lessons</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 pl-5.5">Step-by-Step</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Infinity className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200">Lifetime</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 pl-5.5">Valid Forever</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Download className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200">Resources</span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 pl-5.5">Downloads</p>
              </div>
            </div>

            {/* Syllabus Modules */}
            <div className="space-y-3">
              <h4 className="text-slate-400 font-bold text-xs tracking-wide uppercase">
                Expected Training Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {syllabus.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-800/40 p-2.5 bg-slate-900/30 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="text-cyan-400 w-4 h-4 shrink-0" />
                    <span className="text-slate-300 text-xs sm:text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Action Box & Pricing */}
          <div className="order-2 lg:col-span-5 lg:pl-4 w-full">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-6 md:p-8 text-center flex flex-col justify-center shadow-xl">
              
              <div className="hidden sm:flex w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 items-center justify-center mx-auto mb-4">
                <PlayCircle className="w-7 h-7 text-cyan-400 fill-cyan-400/10" />
              </div>

              <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
                Coming Soon
              </span>

              {/* Pricing Blocks */}
              <div className="mt-2 md:mt-3 flex items-baseline justify-center gap-2.5">
                <span className="text-5xl md:text-6xl font-black text-white tracking-tight">
                  ₹299
                </span>
                <span className="text-lg md:text-xl line-through text-slate-600 font-medium">
                  ₹999
                </span>
              </div>
              
              <p className="text-emerald-400 text-[11px] sm:text-xs font-medium mt-1">
                Pre-book now to lock in early bird pricing
              </p>

              {/* CTA Button */}
              <button className="w-full mt-5 md:mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-black tracking-wide rounded-xl py-3.5 md:py-4 text-sm md:text-base transition shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transform active:scale-[0.98]">
                Pre-Book Now
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};