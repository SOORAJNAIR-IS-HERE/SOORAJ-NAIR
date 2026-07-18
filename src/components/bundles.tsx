"use client";

<<<<<<< HEAD
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Briefcase,
  Wrench,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function Bundles() {
  // Track open state for individual bundle cards
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    "WiFi Fundamentals",
    "Monitor Mode & Packet Capturing",
    "Handshake Collection",
    "WPA2/WPA3 Password Cracking",
    "Executing Evil Twin Attacks",
    "Performing Deauthentication",
  ];

  const tools = [
    "Aircrack-ng Suite",
    "Wireshark",
    "Wifite2",
    "Kali Linux",
    "Fern WiFi Cracker",
    "Airgeddon",
=======
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
>>>>>>> 6a1c667bf0d10b62c030e7440508e9d8ae2cc5c8
  ];

  return (
    <section
      id="bundles"
<<<<<<< HEAD
      className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto scroll-mt-24 relative overflow-hidden text-slate-100"
    >
      {/* Liquid Fluid Backing Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      
      {/* Section Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Learn with me!
        </h2>
        <div className="h-1 w-12 bg-red-600 mx-auto mt-3 rounded-full" />
      </div>

      {/* Centered Flex Container - Perfect centering for a single card */}
      <div className="flex justify-center items-center w-full relative z-10">
        
        {/* VERTICAL CYBER ACADEMY CARD */}
        <motion.div
          layout
          className="relative rounded-3xl border border-white/[0.06] bg-[#0b0f19]/60 backdrop-blur-2xl overflow-hidden transition-all shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col h-fit w-full max-w-[400px]"
        >
          {/* Specular Glaze Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

          {/* Full Box Image Container */}
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-950 flex items-center justify-center p-4 border-b border-white/[0.04]">
            <img
              src="bundle.png"
              alt="Advanced WiFi Hacking Pack"
              className="w-full h-full object-contain drop-shadow-[0_15px_30px_rgba(239,68,68,0.15)] transform hover:scale-105 transition-transform duration-500"
            />
            {/* Tag Overlay */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/30 bg-black/60 backdrop-blur-md text-red-400 text-[10px] font-mono tracking-wider uppercase">
              <Terminal className="w-3 h-3 text-red-500" /> Pre-Registration
            </div>
          </div>

          {/* Card Body Details */}
          <div className="p-6 flex flex-col flex-1 space-y-4">
            <div>
              <h3 className="text-xl font-black text-white tracking-tight mb-1">
                Advanced WiFi Hacking
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Master enterprise wireless penetration testing, protocol weaknesses, and modern credential harvesting frameworks.
              </p>
            </div>

            {/* Price Line */}
            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-2xl font-black text-white tracking-tight">₹299</span>
              <span className="text-xs line-through text-slate-600 font-medium">₹999</span>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md">
                Save 70%
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-1.5 border border-white/10 hover:border-white/20 bg-white/[0.02] text-slate-300 hover:text-white rounded-xl py-3 text-xs font-bold transition-all"
              >
                {isOpen ? "Hide Specs" : "View Specs"}
                {isOpen ? <ChevronUp className="w-3.5 h-3.5 text-red-400" /> : <ChevronDown className="w-3.5 h-3.5 text-red-400" />}
              </button>

              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-extrabold tracking-wide rounded-xl py-3 text-xs transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.2)] transform active:scale-[0.98]">
                Pre-Book
              </button>
            </div>

            {/* EXPANDABLE CONTENT */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden pt-4 border-t border-white/[0.06] space-y-5"
                >
                  {/* Skills Section */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black tracking-wider text-white uppercase flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-red-400" /> Core Concepts
                    </h4>
                    <div className="space-y-1.5">
                      {skills.map((skill) => (
                        <div key={skill} className="flex items-start gap-2">
                          <CheckCircle2 className="text-red-500 w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Section */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black tracking-wider text-white uppercase flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-red-400" /> Lab Toolkit
                    </h4>
                    <div className="space-y-1.5">
                      {tools.map((tool) => (
                        <div key={tool} className="flex items-start gap-2">
                          <CheckCircle2 className="text-red-500 w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-xs font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
=======
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
>>>>>>> 6a1c667bf0d10b62c030e7440508e9d8ae2cc5c8
