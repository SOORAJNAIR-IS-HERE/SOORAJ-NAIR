"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export const Hero: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto pt-30 pb-20 px-6 grid lg:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: Text Info */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-6 text-center lg:text-left"
      >
<motion.h1
  initial={{
    opacity: 0,
    x: -50,
    filter: "blur(12px)",
  }}
  animate={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
    delay: 0.1,
    ease: "easeOut",
  }}
  className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3 font-['Plus_Jakarta_Sans'] text-white"
>
  SOORAJ NAIR
</motion.h1>

<motion.h1
  initial={{
    opacity: 0,
    x: -50,
    filter: "blur(12px)",
  }}
  animate={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
    delay: 0.2,
    ease: "easeOut",
  }}
  className="text-lg md:text-xl font-semibold text-cyan-400 mb-2"
>
  Founder & CEO of Cyzium Hacker Academy
</motion.h1>

<motion.h1
  initial={{
    opacity: 0,
    x: -50,
    filter: "blur(12px)",
  }}
  animate={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
    delay: 0.3,
    ease: "easeOut",
  }}
  className="text-xl md:text-3xl text-slate-400 font-mono font-medium mb-6"
>
  &gt; Certified Ethical <span className="text-red-500 font-semibold">Hacker</span>
</motion.h1>

<motion.h1
  initial={{
    opacity: 0,
    x: -50,
    scale: 0.95,
    filter: "blur(12px)",
  }}
  animate={{
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.8,
    delay: 0.3,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 text-base md:text-lg"
>
  Founder of Cyzium Hacker Academy, dedicated to training the next generation of ethical hackers through practical, real-world cybersecurity education. Learn bug bounty hunting, web application security, RF exploitation, WiFi, and Bluetooth security from hands-on courses designed for aspiring professionals.
</motion.h1>

<p className="text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 text-base md:text-lg">
  
</p>
<motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
>
  <motion.a
    href="#bundles"
    variants={{
      hidden: { opacity: 0, scale: 0.8, y: 10 },
      show: { opacity: 1, scale: 1, y: 0 },
    }}
    transition={{
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="bg-red-500 text-slate-950 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-400 transition-all duration-200 text-center shadow-lg shadow-red-500/20"
  >
    Learn Hacking from me
  </motion.a>

  <motion.a
    href="#bundles"
    variants={{
      hidden: { opacity: 0, scale: 0.8, y: 10 },
      show: { opacity: 1, scale: 1, y: 0 },
    }}
    transition={{
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="border border-slate-800 bg-slate-900/30 text-white px-8 py-3.5 rounded-xl font-mono hover:bg-slate-900 transition-colors text-center"
  >
    contact me
  </motion.a>
</motion.div>

      </motion.div>

      {/* Right Column: Large Profile Photo Only */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-6 hidden lg:block relative"
      >
        {/* Futuristic Cyber Ambient Glow behind the photo */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative group max-w-md mx-auto">
          {/* Cyberpunk Overlay Accents */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/20 rounded-2xl opacity-40 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />
          <div className="absolute inset-0 border border-slate-800 rounded-2xl group-hover:border-cyan-500/50 transition-colors duration-300 z-20 pointer-events-none" />
          
          {/* Main Photo Wrapper */}
<div className="relative bg-slate-950 rounded-2xl overflow-hidden aspect-[6/8] shadow-2xl flex items-center justify-center">

  <img
    src="/profile.jpg"
    alt="Sooraj Nair"
    className="w-full h-full object-cover object-center filter grayscale contrast-70 group-hover:grayscale-0 transition-all duration-700 scale-[1.1] group-hover:scale-[1.2]"
  />

  {/* CC Light Sweep */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="cc-light-sweep" />
  </div>
            

{/* Top Left - Socials */}
<span className="absolute top-3 left-3 inline-flex items-center gap-4 font-mono text-black px-2.5 py-1 z-20">
  <FaInstagram
    className="w-8 h-7 cursor-pointer hover:scale-110 transition-transform"
    color="#E4405F"
  />
  <FaYoutube
    className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
    color="#FF0000"
  />
  <span className="text-2.5xl font-bold tracking-wide">
    soorajctl
  </span>
</span>

{/* Bottom Right - Email */}
<span className="absolute bottom-20 right-25 inline-flex items-center gap-2 text-blue-500 text-xl font-semibold z-20">
  <FaEnvelope className="w-5 h-5" />
  <span>soorajhax@gmail.com</span>
</span>
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-20" />
          </div>
        </div>
      </motion.div>

    </section>
  );
};