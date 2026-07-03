"use html";
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono font-black text-white text-lg tracking-wider">
            JUST <span className="text-red-600">HACK</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">.about()</a>
          <a href="#intel" className="hover:text-cyan-400 transition-colors">.intel()</a>
          <a href="#bundles" className="hover:text-cyan-400 transition-colors">.bundles()</a>

 <a
  href="https://www.cyziumacademy.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-500 hover:text-slate-950 transition-all font-bold"
>
  <Terminal className="w-4 h-4" />
  Access Academy
</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-900 mt-4 py-4 flex flex-col gap-4 font-mono text-sm px-2"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300 py-2 px-4 rounded hover:bg-slate-900">.about()</a>
            <a href="#bundles" onClick={() => setIsOpen(false)} className="text-slate-300 py-2 px-4 rounded hover:bg-slate-900">.bundles()</a>
            <a 
              href="#bundles" 
              onClick={() => setIsOpen(false)} 
              className="bg-cyan-500 text-slate-950 text-center font-bold py-2.5 rounded-lg"
            >
              Access Academy
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};