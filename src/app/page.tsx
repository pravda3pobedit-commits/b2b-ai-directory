"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { platforms } from "@/data/platforms";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["Content Creation", "Marketing", "Sales", "Customer Support", "Operations", "HR", "IT & Dev", "All"];

  const filteredPlatforms = platforms.filter(platform => {
    if (activeCategory === "All") return true;
    if (Array.isArray((platform as any).categories)) {
      return (platform as any).categories.includes(activeCategory);
    }
    return platform.category === activeCategory;
  }).sort((a: any, b: any) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const renderCard = (platform: any, index: number, wrapperIndex: string | number) => {
    const Icon = platform.icon;
    return (
      <div
        key={`${platform.id}-${index}-${wrapperIndex}`}
        className={`w-[280px] min-h-[240px] h-auto shrink-0 group relative flex flex-col p-4 rounded-3xl overflow-hidden backdrop-blur-sm hover:-translate-y-1 ${platform.id === 'creatify-ai' || platform.featured ? 'bg-white/[0.02] border-2 border-indigo-500/70 shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] transition-all duration-300 hover:scale-[1.01]' : 'bg-zinc-900/50 border border-white/5 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_0_40px_rgba(99,102,241,0.05)]'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-white/[0.03] border border-white/[0.08] rounded-xl transition-all duration-300 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:text-indigo-300">
              <Icon className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-white">
                {'metricBusiness' in platform ? platform.metricBusiness : platform.metric}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-gray-500">
                {'metricLabelBusiness' in platform ? platform.metricLabelBusiness : platform.metricLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-base font-semibold tracking-tight text-white">{platform.name}</h3>
            {platform.featured && (
              (platform as any).badgeText ? (
                <div className="ml-2 px-2 py-[2px] rounded-full bg-cyan-900/30 border border-cyan-500/40 text-[9px] font-bold tracking-widest uppercase text-cyan-400 whitespace-nowrap">
                  {(platform as any).badgeText}
                </div>
              ) : (
                <div className="ml-2 px-2 py-[2px] rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                  TOP PICK
                </div>
              )
            )}
          </div>

          {platform.id === 'creatify-ai' && (
            <div className="mb-2 px-2 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-md text-[10px] text-emerald-300 font-medium leading-snug">
              🎁 Use promo code <strong className="text-emerald-100 font-bold">TEAM15</strong> at checkout for 15% off!
            </div>
          )}

          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-[11px] leading-tight mb-2 line-clamp-2">
            {platform.descBusiness || platform.descFreelancer}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.05] mt-auto">
          <Link href={`/tool/${platform.id}`} className="w-full relative overflow-hidden rounded-full bg-slate-800/50 hover:bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-200 hover:text-white group border border-slate-700 transition-colors flex justify-center items-center gap-2">
            <span className="relative z-20">View Details</span>
            <span className="relative z-20 group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1300ms] delay-1000 ease-in-out z-10" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-graphite-animated text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans flex flex-col justify-between items-center relative z-0">
      {/* Cinematic Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

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
        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-5 py-2 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-2 text-white font-semibold tracking-tight text-sm">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>B2B AI Stack</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/10"></div>
        <div className="hidden md:flex gap-5 text-xs font-medium text-gray-400">
          <a href="https://x.com/intent/tweet?text=Just%20found%20the%20ultimate%20curated%20directory%20for%20B2B%20AI%20tools!%20%F0%9F%9A%80%20Check%20it%20out:&url=https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Share on X</a>
          <a href="mailto:pravda3pobedit@gmail.com?subject=Sponsorship%20Inquiry%20-%20B2B%20AI%20Stack" className="hover:text-white transition-colors">Advertise</a>
          <a href="mailto:pravda3pobedit@gmail.com?subject=Contact%20-%20B2B%20AI%20Stack" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="https://forms.gle/nLY5faWU2oRZnNMv6" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
          Add Your AI
        </a>
      </motion.nav>

      {/* Main Content Area */}
      <div className="flex flex-col items-center w-full z-10 pt-14 mt-0">

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl space-y-1 mb-1 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-wide uppercase mb-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            Directory 2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-none text-white"
          >
            The Ultimate Tech Stack for <span className="text-blue-600">AI-Driven Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-xs md:text-sm text-gray-400 max-w-2xl mt-1.5 mb-0"
          >
            Discover and compare enterprise-grade AI tools to automate workflows, reduce costs, and scale your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-xs px-3 py-1 rounded-full border transition-colors duration-300",
                  activeCategory === cat
                    ? "bg-slate-700 text-white border-slate-600 font-medium"
                    : "border-slate-800/80 text-slate-400 hover:bg-slate-800/50 hover:border-slate-700 hover:text-slate-300"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Cinematic Marquee Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full overflow-hidden flex relative mt-3 mb-2 py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 left-0 w-8 md:w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 md:w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

          <div className={cn("flex px-4 items-stretch pb-2 w-full", filteredPlatforms.length <= 4 ? "justify-center" : "w-max gap-4")}>
            {filteredPlatforms.length <= 4 ? (
              <div className="flex gap-4 items-stretch flex-wrap justify-center w-full">
                {filteredPlatforms.map((platform, index) => renderCard(platform, index, 'static'))}
              </div>
            ) : (
              [0, 1].map((wrapperIndex) => (
                <div
                  key={wrapperIndex}
                  className="flex animate-marquee shrink-0 gap-4 items-stretch"
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                >
                  {filteredPlatforms.map((platform, index) => renderCard(platform, index, wrapperIndex))}
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}