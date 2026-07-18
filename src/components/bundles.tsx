"use client";

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
  ];

  return (
    <section
      id="bundles"
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