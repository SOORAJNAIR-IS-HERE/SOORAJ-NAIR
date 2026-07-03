"use html";
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Terminal, ExternalLink, Cpu, HardDrive } from 'lucide-react';

interface RepoProject {
  id: string;
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
}

interface MediumArticle {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  link: string;
}

const githubProjects: RepoProject[] = [
  {
    id: 'tool-1',
    name: 'NETNAB',
    description: 'Automated 802.11ax monitor injection pipeline and continuous beacon frame analyzer tailored for WPA3 transition mode vulnerabilities.',
    stars: '34',
    language: 'Python',
    link: 'https://github.com/SOORAJNAIR-IS-HERE/Netnab'
  },
  {
    id: 'tool-2',
    name: 'RIFTER',
    description: 'A hardware-agnostic BLE simulation tool engineered to sniff active GATT descriptors and reconstruct custom malicious peripheral clones.',
    stars: '18',
    language: 'TypeScript',
    link: 'https://github.com/SOORAJNAIR-IS-HERE/Rifter'
  },
  {
    id: 'tool-3',
    name: 'HEADEX',
    description: 'Offensive script compilation implementing highly obfuscated memory staging routines designed to test endpoint defensive configurations.',
    stars: '20',
    language: 'Go',
    link: 'https://github.com/SOORAJNAIR-IS-HERE/Headex'
  }
];

const mediumArticles: MediumArticle[] = [
  {
    id: 'blog-1',
    title: 'Implementing Website Log Monitoring using Splunk On WordPress Created in Ubuntu 23.10',
    excerpt: 'An in-depth technical analysis demonstrating how architectural misconfigurations allow modern corporate airwaves to fall back to legacy handshake vulnerabilities.',
    readTime: '8 min read',
    link: 'https://medium.com/@cyziumacademy/implementing-website-log-monitoring-using-splunk-on-wordpress-created-in-ubuntu-23-10-6165308b00c6'
  },
  {
    id: 'blog-2',
    title: 'Exploiting AI for Spyware Code',
    excerpt: 'Step-by-step documentation on capturing Bluetooth Low Energy packets during authentication cycles to discover static cryptographic variables.',
    readTime: '12 min read',
    link: 'https://medium.com/@cyziumacademy/ai-prompting-for-spyware-c6ab12fdfa7d'
  }
];

export const Intel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'github' | 'medium'>('github');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingLines = [
    "Establishing secure handshake with endpoint...",
    "Cloning remote repository nodes...",
    "Parsing dynamic markdown syntax trees...",
    "Deciphering index logs successfully."
  ];

  // Trigger loading state changes when switching tabs
  const handleTabChange = (tab: 'github' | 'medium') => {
    if (tab === activeTab) return;
    setIsLoading(true);
    setLoadingStep(0);
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingLines.length - 1) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400); // Smooth output transition
          return prev;
        }
        return prev + 1;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <section id="intel" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24 relative font-mono text-xs">
      
      {/* Outer Tactical Frame Wrapper */}
      <div className="border border-slate-900 rounded-3xl p-6 md:p-10 bg-slate-950/40 backdrop-blur-md relative overflow-hidden">
        
        {/* Cyberpunk Top Corner Graphic Design Accent */}
        <div className="absolute top-0 right-0 w-32 h-10 border-b border-l border-slate-900 bg-slate-950 flex items-center justify-center text-[10px] text-slate-600 tracking-widest uppercase">
          SECURE_CONN_01
        </div>

        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-6 border-b border-slate-900">
          <div>
            <div className="text-cyan-400 font-bold mb-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-ping" />
              SYSTEM://DATA_PIPELINES
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase font-sans">
              Threat Intelligence & Toolkit
            </h2>
          </div>

          {/* Futuristic Selector Buttons */}
          <div className="flex bg-slate-950 border border-slate-900 rounded-xl p-1 relative z-10">
            <button
              onClick={() => handleTabChange('github')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'github' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
                Tools
            </button>
            <button
              onClick={() => handleTabChange('medium')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                activeTab === 'medium' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> BLOG
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="min-h-[300px] relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              /* --- 1. HOVER TERMINAL LOADING SCREEN --- */
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col justify-center min-h-[280px] font-mono text-slate-400 space-y-2 bg-slate-950/60 p-6 rounded-2xl border border-slate-900/60"
              >
                <div className="flex items-center gap-2 text-cyan-400 mb-4 text-sm font-bold">
                  <Cpu className="w-4 h-4 animate-spin" />
                  <span>INITIALIZING RAW INTELLIGENCE DECRYPTION...</span>
                </div>
                
                {loadingLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: idx <= loadingStep ? 1 : 0.15, x: 0 }}
                    className={`flex items-center gap-2 ${idx === loadingStep ? 'text-emerald-400' : 'text-slate-500'}`}
                  >
                    <span>{idx <= loadingStep ? "✓" : "⚡"}</span>
                    <span>{line}</span>
                  </motion.div>
                ))}
              </motion.div>
            ) : activeTab === 'github' ? (
              /* --- 2. ADVANCED GITHUB UNIQUE LIST --- */
              <motion.div
                key="github-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {githubProjects.map((repo, idx) => (
                  <div
                    key={repo.id}
                    className="group relative flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-slate-950/80 border border-slate-900 hover:border-cyan-500/40 transition-all duration-300 rounded-xl overflow-hidden"
                  >
                    {/* Glowing Laser Scanner Hover Bar */}
                    <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                    
                    {/* Core Data Block */}
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-600 font-bold">[{idx + 1}]</span>
                        <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {repo.name}
                        </h3>
                        <span className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-400 border border-slate-800">
                          {repo.language}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs font-sans leading-relaxed pl-7">
                        {repo.description}
                      </p>
                    </div>

                    {/* Operational Actions */}
                    <div className="flex items-center gap-6 pl-7 md:pl-0 shrink-0 font-mono text-slate-500 text-xs">
                      <span className="flex items-center gap-1 group-hover:text-slate-300 transition-colors">
                        ★ {repo.stars}
                      </span>
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all"
                      >
                        <Terminal className="w-3.5 h-3.5" /> Get now
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* --- 3. UNIQUE TIMELINE-STYLE MEDIUM ARTICLES --- */
              <motion.div
                key="medium-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative border-l border-slate-900 ml-4 pl-6 space-y-8 py-2"
              >
                {mediumArticles.map((article) => (
                  <div key={article.id} className="relative group">
                    {/* Floating Tactical Bullet Nodes */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-950/20 transition-all">
                      <div className="w-1.5 h-1.5 rounded-sm bg-slate-700 group-hover:bg-purple-400 transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-500 font-bold tracking-widest block uppercase">
                        // PUBLISHED INTERCEPT REPORT — {article.readTime}
                      </span>
                      <h3 className="text-lg font-bold text-white font-sans group-hover:text-purple-400 transition-colors max-w-4xl">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs font-sans max-w-3xl leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="pt-2">
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 font-bold transition-colors"
                        >
                          <HardDrive className="w-3.5 h-3.5" /> read_stream.log <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};