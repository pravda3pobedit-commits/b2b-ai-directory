import { CheckCircle2, ExternalLink, Mic2, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";
import { platforms } from "@/data/platforms";
import {
  buildCategoryItemListJsonLd,
  buildFaqPageJsonLd,
  jsonLdMarkup,
} from "@/lib/structuredData";

const BASE_URL = "https://www.b2baistack.com";
const PAGE_URL = `${BASE_URL}/category/ai-meetings-intelligence`;

export const metadata: Metadata = {
  title: "Top AI Meeting Assistants & Intelligence Tools | b2baistack.com",
  description:
    "Discover the best AI notetakers and meeting intelligence software to automate transcriptions, generate summaries, and sync data directly to your CRM.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Top AI Meeting Assistants & Intelligence Tools | b2baistack.com",
    description:
      "Discover the best AI notetakers and meeting intelligence software to automate transcriptions, generate summaries, and sync data directly to your CRM.",
    url: PAGE_URL,
    type: "website",
  },
};

const TOOL_IDS = ["fireflies-ai", "otter-ai"];
type Platform = (typeof platforms)[number];

const categoryTools = TOOL_IDS.map((id) =>
  platforms.find((p) => p.id === id),
).filter((tool): tool is Platform => Boolean(tool));

const benefits = [
  "Eliminate manual note-taking from every meeting",
  "Get AI-generated summaries and action items instantly",
  "Sync structured data directly to your CRM automatically",
  "Search and replay any conversation across your entire team",
  "Surface conversation intelligence to coach your sales reps",
  "Stay aligned across distributed teams with zero friction",
];

const meetingAngles = [
  {
    title: "Searchable Meeting Memory",
    tool: "Fireflies.ai",
    copy: "Best when sales, customer success, recruiting, and operations teams need transcripts, summaries, action items, CRM sync, and searchable call history across many meetings.",
  },
  {
    title: "Fast Personal Notes",
    tool: "Fathom",
    copy: "Best when the priority is simple recording, highlights, and quick meeting summaries with minimal setup for individual contributors or smaller teams.",
  },
  {
    title: "Bot-free Capture",
    tool: "Granola",
    copy: "Best when the buyer cares about a quieter note-taking workflow, polished notes, and avoiding an obvious meeting bot in the call.",
  },
  {
    title: "Team Intelligence",
    tool: "Read AI",
    copy: "Best when the team wants broader meeting analytics, searchable workspace memory, follow-up signals, and cross-meeting visibility.",
  },
];

const categoryFaqs = [
  {
    question: "What are AI meeting assistants?",
    answer:
      "AI meeting assistants record, transcribe, summarize, and organize meetings so teams can capture decisions, action items, customer context, and follow-ups without relying only on manual notes.",
  },
  {
    question: "Is Fireflies, Fathom, Granola, or Read AI better for B2B teams?",
    answer:
      "Fireflies is usually stronger for searchable meeting memory and CRM-ready workflows. Fathom is often better for simple meeting notes and highlights. Granola is worth evaluating when bot-free capture and polished notes matter. Read AI is stronger when the team wants broader meeting intelligence and cross-meeting visibility.",
  },
  {
    question: "Should meeting notes sync into a CRM?",
    answer:
      "Sales and customer success teams usually benefit from CRM sync, but they should still review important fields, commitments, and customer-facing follow-ups before relying on automation.",
  },
  {
    question: "Do AI meeting assistants replace human review?",
    answer:
      "No. They reduce note-taking work and preserve context, but teams still need human review for sensitive decisions, customer commitments, consent rules, and details that AI summaries can miss.",
  },
];

const itemListJsonLd = buildCategoryItemListJsonLd({
  name: "AI Meeting Assistants and Intelligence Tools",
  description: metadata.description as string,
  pageUrl: PAGE_URL,
  baseUrl: BASE_URL,
  tools: categoryTools,
});

const faqJsonLd = buildFaqPageJsonLd(categoryFaqs);

export default function AIMeetingsIntelligencePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
        dangerouslySetInnerHTML={jsonLdMarkup(itemListJsonLd)}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
        dangerouslySetInnerHTML={jsonLdMarkup(faqJsonLd)}
      />
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px]" />
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
          <span className="text-gray-300">AI Meetings &amp; Intelligence</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Category · Published &amp; Active
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6">
          AI Meetings &amp;{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>

        {/* Category Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
          Automate your meeting workflows. Transform voice conversations into
          actionable insights, automated summaries, and structured CRM data with
          AI-powered notetakers.
        </p>

        {/* Target Audience Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["B2B Professionals", "Sales Teams", "Operations Leads"].map(
            (tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">
            Why Meeting Intelligence Matters for B2B Teams
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

        <section className="mb-16 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">
            <div className="max-w-2xl">
              <div className="text-[11px] uppercase tracking-widest text-indigo-300 mb-2">
                Meeting notes buyer guide
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Fireflies vs Fathom vs Granola vs Read AI
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Start with the meeting workflow, not the logo. Decide whether
                you need CRM-ready notes, fast personal summaries, bot-free
                capture, or broader team intelligence before choosing a
                notetaker.
              </p>
            </div>
            <Link
              href="/comparisons/fireflies-vs-fathom"
              className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              Fireflies vs Fathom comparison
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {meetingAngles.map((angle) => (
              <div
                key={angle.title}
                className="p-5 rounded-2xl bg-black/25 border border-white/[0.07]"
              >
                <div className="text-[11px] uppercase tracking-wide text-indigo-300 mb-2">
                  {angle.title}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {angle.tool}
                </h3>
                <p className="text-sm text-gray-400 leading-snug">
                  {angle.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tool Cards */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Top AI Meeting Tools
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl">
                Hand-picked tools used by B2B professionals, sales teams, and
                operations leads to capture and act on every conversation.
              </p>
            </div>
            <Link
              href="/comparisons/fireflies-vs-fathom"
              className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              Compare Fireflies vs Fathom
            </Link>
          </div>
          <p className="text-xs text-gray-600 mb-8">
            Disclosure: Some links on this page are affiliate links. We may earn
            a commission if you sign up, at no extra cost to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categoryTools.map((platform) => {
              const Icon = platform.icon ?? Mic2;
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
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

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

        <section className="mt-16">
          <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">
            AI Meeting Assistants FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
              >
                <h3 className="text-sm font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <NewsletterSignup
          className="mt-16"
          source="category-ai-meetings-intelligence"
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
