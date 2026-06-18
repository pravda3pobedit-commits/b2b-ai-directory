import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";
import { platforms } from "@/data/platforms";

export const metadata: Metadata = {
  title: "Top AI Sales Prospecting Tools for B2B Teams | b2baistack.com",
  description:
    "Compare AI sales prospecting tools for email finding, contact verification, sales intelligence, AI research, outbound stack design, and responsible workflows.",
  alternates: {
    canonical: "https://www.b2baistack.com/category/ai-sales-prospecting-tools",
  },
  openGraph: {
    title: "Top AI Sales Prospecting Tools for B2B Teams | b2baistack.com",
    description:
      "Compare AI sales prospecting tools for email finding, contact verification, sales intelligence, AI research, outbound stack design, and responsible workflows.",
    url: "https://www.b2baistack.com/category/ai-sales-prospecting-tools",
    type: "website",
  },
};

const TOOL_IDS = ["hunter-io", "apollo-ai", "juicebox"];

const categoryTools = TOOL_IDS.map((id) =>
  platforms.find((p) => p.id === id),
).filter((tool): tool is (typeof platforms)[number] => Boolean(tool));

const benefits = [
  "Find professional contacts and companies for targeted outreach",
  "Verify email addresses before campaigns and handoffs",
  "Compare email finder, sales database, and AI people search workflows",
  "Map the outbound stack across data, enrichment, sequencing, deliverability, and review",
  "Build cleaner prospect lists for sales, recruiting, partnerships, and agencies",
  "Support responsible outbound with review, consent, and deliverability checks",
  "Connect prospecting research to CRM, outreach, and automation workflows",
];

export default function AISalesProspectingToolsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-emerald-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-teal-900/10 blur-[120px]" />
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
          <span className="text-gray-300">AI Sales Prospecting Tools</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Category · Sales Prospecting
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6">
          AI Sales{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Prospecting Tools
          </span>
        </h1>

        {/* Category Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
          Compare email finding, contact verification, sales intelligence, and
          AI people search tools for B2B outbound, recruiting-adjacent sourcing,
          and GTM research.
        </p>

        {/* Target Audience Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Sales Teams", "Founders", "Agencies"].map((tag) => (
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
            Why AI Prospecting Tools Matter for B2B Teams
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

        <section className="mb-16 rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-emerald-300 text-[11px] uppercase tracking-widest mb-3">
                <Layers3 className="w-4 h-4" />
                Outbound stack guide
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                Clay, Apollo, Hunter, Instantly, Smartlead, or Lemlist?
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                The right sales prospecting setup is usually a stack, not one
                magic tool. Map data, enrichment, AI research, sending,
                deliverability, and human review before buying overlapping
                software.
              </p>
            </div>
            <Link
              href="/guides/ai-sales-prospecting-stack"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors whitespace-nowrap"
            >
              Read the stack guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Tool Cards */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-2">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Top AI Sales Prospecting Tools
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl">
                Hand-picked tools for B2B teams that need email discovery,
                contact verification, sales intelligence, people search, and
                prospect research workflows.
              </p>
            </div>
            <Link
              href="/comparisons/hunter-vs-apollo"
              className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              Compare Hunter vs Apollo
            </Link>
          </div>
          <p className="text-xs text-gray-600 mb-8">
            Disclosure: Some links on this page are affiliate links. We may earn
            a commission if you sign up, at no extra cost to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categoryTools.map((platform) => {
              const Icon = platform.icon ?? Search;
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
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

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
                    {platform.descBusiness ??
                      platform.descFreelancer ??
                      platform.shortDescription}
                  </p>

                  {platform.features && (
                    <ul className="relative z-10 mb-5 space-y-1.5">
                      {platform.features.slice(0, 3).map((feat: string) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2 text-xs text-gray-500"
                        >
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

        <NewsletterSignup
          className="mt-16"
          source="category-ai-sales-prospecting-tools"
        />

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
