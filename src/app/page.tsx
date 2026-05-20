"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { platforms } from "@/data/platforms";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function Home() {
  const [isBusiness, setIsBusiness] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="h-screen max-h-screen w-full bg-graphite-animated text-white selection:bg-indigo-500/30 overflow-hidden font-sans flex flex-col justify-center items-center relative z-0">

      {/* Cinematic Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      {/* Keyframes for the marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.25rem)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes graphite {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-graphite-animated {
          background: linear-gradient(-45deg, #050505, #0a0a0f, #1e3a8a, #050505, #111827);
          background-size: 400% 400%;
          animation: graphite 15s ease infinite;
        }
      `}} />

      {/* Floating Sticky Navigation */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-5 py-2.5 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-2 text-white font-semibold tracking-tight">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>Nexus AI</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/10"></div>
        <div className="hidden md:flex gap-5 text-xs font-medium text-gray-400">
          <a href="https://x.com/intent/tweet?text=Just%20found%20the%20ultimate%20curated%20directory%20for%20B2B%20AI%20tools!%20%F0%9F%9A%80%20Check%20it%20out:&url=https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Share on X</a>
          <a href="mailto:pravda3pobedit@gmail.com?subject=Sponsorship%20Inquiry%20-%20Nexus%20AI" className="hover:text-white transition-colors">Advertise</a>
          <a href="mailto:pravda3pobedit@gmail.com?subject=Contact%20-%20Nexus%20AI" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="https://forms.gle/nLY5faWU2oRZnNMv6" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
          Add Your AI
        </a>
      </motion.nav>

      {/* Main Content Area */}
      <div className="flex flex-col items-center w-full z-10 pt-16 mt-4">

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl space-y-4 mb-6 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Directory 2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40"
          >
            Next-Gen AI Tools for Creators & Enterprises.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-gray-400 max-w-xl leading-snug font-light"
          >
            Stop searching, start scaling. Access a hand-picked directory of advanced AI solutions built to supercharge your productivity.
          </motion.p>
        </div>

        {/* Premium Audience Segment Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center mb-4 w-full"
        >
          <div className="relative flex p-1.5 bg-slate-950 shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)] border border-slate-800/80 rounded-full">
            <button
              onClick={() => setIsBusiness(false)}
              className={cn(
                "relative z-10 px-6 py-2 text-xs transition-colors duration-300 font-medium",
                !isBusiness ? "text-white" : "text-slate-400 hover:text-slate-200 bg-transparent shadow-none border-transparent"
              )}
            >
              For Creators
              {!isBusiness && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 border-t border-slate-600 border-x-slate-700 border-b-slate-900 rounded-full -z-10 shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setIsBusiness(true)}
              className={cn(
                "relative z-10 px-6 py-2 text-xs transition-colors duration-300 font-medium",
                isBusiness ? "text-white" : "text-slate-400 hover:text-slate-200 bg-transparent shadow-none border-transparent"
              )}
            >
              For Enterprises
              {isBusiness && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800 border-t border-slate-600 border-x-slate-700 border-b-slate-900 rounded-full -z-10 shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </motion.div>

        {/* Cinematic Marquee Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full overflow-hidden flex relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left and Right fade gradients */}
          <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

          <div className="flex w-max gap-5 px-4 items-center pb-4">
            {[0, 1].map((wrapperIndex) => (
              <div 
                key={wrapperIndex} 
                className="flex animate-marquee shrink-0 gap-5 items-center"
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              >
                {platforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <div
                      key={`${platform.id}-${index}-${wrapperIndex}`}
                  className="w-[280px] shrink-0 group relative flex flex-col justify-between p-4 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_0_40px_rgba(99,102,241,0.05)] hover:-translate-y-1"
                >
                  {/* Subtle internal gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 bg-white/[0.03] border border-white/[0.08] rounded-xl group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:text-indigo-300 transition-all duration-300">
                        <Icon className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-base font-medium text-white">
                          {isBusiness && 'metricBusiness' in platform ? (platform as any).metricBusiness : platform.metric}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-gray-500">
                          {isBusiness && 'metricLabelBusiness' in platform ? (platform as any).metricLabelBusiness : platform.metricLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-white mb-1.5">{platform.name}</h3>

                    <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xs leading-snug mb-3 min-h-[40px]">
                      {!isBusiness ? platform.descFreelancer : platform.descBusiness}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/[0.05]">
                    <button className="w-full relative overflow-hidden rounded-full bg-slate-800/50 hover:bg-slate-800 px-5 py-2 text-sm text-slate-200 hover:text-white group border border-slate-700 transition-colors flex justify-center items-center gap-2">
                      <span className="relative z-20">Explore Platform</span>
                      <span className="relative z-20 group-hover:translate-x-1 transition-transform">→</span>
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1300ms] delay-1000 ease-in-out z-10" />
                    </button>
                  </div>
                </div>
              )
            })}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
