import type { Metadata } from "next";
import Link from "next/link";
import { platforms } from "@/data/platforms";
import { Video, Sparkles, CheckCircle2 } from "lucide-react";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";

export const metadata: Metadata = {
  title: "Top AI Video & Ad Generators for B2B Marketing | b2baistack.com",
  description:
    "Compare AI video generators, ad creative tools, avatar video platforms, and voiceover tools for B2B marketing teams.",
  alternates: {
    canonical: "https://www.b2baistack.com/category/ai-video-ad-generators",
  },
  openGraph: {
    title: "Top AI Video & Ad Generators for B2B Marketing | b2baistack.com",
    description:
      "Compare AI video generators, ad creative tools, avatar video platforms, and voiceover tools for B2B marketing teams.",
    url: "https://www.b2baistack.com/category/ai-video-ad-generators",
    type: "website",
  },
};

const TOOL_IDS = ["invideo-ai", "vidyo-ai", "creatify-ai", "heygen", "elevenlabs"];

const categoryTools = TOOL_IDS
  .map((id) => platforms.find((p) => p.id === id))
  .filter(Boolean) as typeof platforms;

const benefits = [
  "Turn text prompts into campaign-ready videos",
  "Repurpose webinars and long-form content into social clips",
  "Generate UGC-style product ads from URLs",
  "Create avatar videos and localized campaigns without studio shoots",
  "Add realistic AI voiceovers at scale",
  "Test more creative variations with lower production costs",
];

export default function AIVideoAdGeneratorsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-violet-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[120px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/[0.05] bg-black/20 backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-white font-semibold tracking-tight text-sm hover:opacity-80 transition-opacity"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>B2B AI Stack</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-gray-700">/</span>
          <span className="text-gray-300">AI Video &amp; Ad Generators</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Category · Video &amp; Ads
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6">
          AI Video &amp;{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Ad Generators
          </span>
        </h1>

        {/* Category Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
          Create high-converting video ads, avatar campaigns, and social content
          at scale — without a production team. Purpose-built AI tools for B2B
          marketing, growth, and agencies.
        </p>

        {/* Target Audience Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["B2B Marketers", "Growth Teams", "Agencies"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">
            Why AI Video Tools Matter for B2B Marketing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300 leading-snug">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Tool Cards */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
            Top AI Video &amp; Ad Generator Tools
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Hand-picked tools used by B2B marketers, growth teams, and agencies
            to produce video content and ads at scale.
          </p>
          <p className="text-xs text-gray-600 mb-8">
            Disclosure: Some links on this page are affiliate links. We may earn a commission if you sign up, at no extra cost to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categoryTools.map((platform: any) => {
              const Icon = platform.icon ?? Video;
              return (
                <div
                  key={platform.id}
                  className={`relative flex flex-col p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    platform.featured
                      ? "bg-white/[0.02] border-2 border-indigo-500/60 shadow-[0_0_40px_-8px_rgba(79,70,229,0.4)]"
                      : "bg-zinc-900/50 border border-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_0_30px_rgba(99,102,241,0.07)]"
                  }`}
                >
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="p-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl">
                      <Icon className="w-5 h-5 text-indigo-300" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-semibold text-white">
                        {platform.metricBusiness ?? platform.metric}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-gray-500">
                        {platform.metricLabelBusiness ?? platform.metricLabel}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {platform.name}
                    </h3>
                    {platform.featured && (
                      <span className="px-2 py-[2px] rounded-full bg-cyan-900/30 border border-cyan-500/40 text-[9px] font-bold tracking-widest uppercase text-cyan-400">
                        {platform.badgeText ?? "TOP PICK"}
                      </span>
                    )}
                  </div>

                  <p className="relative z-10 text-sm text-gray-400 leading-snug mb-4 flex-1">
                    {platform.descBusiness ?? platform.descFreelancer ?? platform.shortDescription}
                  </p>

                  {platform.features && (
                    <ul className="relative z-10 mb-5 space-y-1.5">
                      {platform.features.slice(0, 3).map((feat: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                          <span className="mt-0.5 w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
                          <span className="line-clamp-1">
                            {feat.includes(":") ? feat.split(":")[0] : feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="relative z-10 flex gap-2 mt-auto">
                    <Link
                      href={`/tool/${platform.id}`}
                      className="flex-1 text-center px-4 py-2 rounded-full bg-slate-800/60 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                    >
                      View Details
                    </Link>
                    <TrackedAffiliateLink
                      href={platform.affiliateLink}
                      toolId={platform.id}
                      toolName={platform.name}
                      ctaText={platform.ctaText ?? "Get Started"}
                      icon="arrow"
                      className="flex items-center gap-1 px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Back CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            ← Browse all B2B AI categories
          </Link>
        </div>
      </main>
    </div>
  );
}
