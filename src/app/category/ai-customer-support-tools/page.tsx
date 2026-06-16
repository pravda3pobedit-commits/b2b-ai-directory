import { CheckCircle2, HeadphonesIcon, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";
import { platforms } from "@/data/platforms";

const BASE_URL = "https://www.b2baistack.com";
const PAGE_URL = `${BASE_URL}/category/ai-customer-support-tools`;

export const metadata: Metadata = {
  title: "Top AI Customer Support Tools for B2B Teams | b2baistack.com",
  description:
    "Compare AI customer support tools for website agents, helpdesk automation, ticket triage, knowledge base answers, and support handoffs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Top AI Customer Support Tools for B2B Teams | b2baistack.com",
    description:
      "Compare AI customer support tools for website agents, helpdesk automation, ticket triage, knowledge base answers, and support handoffs.",
    url: PAGE_URL,
    type: "website",
  },
};

const TOOL_IDS = ["chatbase", "intercom-fin", "zendesk-ai"];
type Platform = (typeof platforms)[number];

const supportTools = TOOL_IDS.map((id) =>
  platforms.find((p) => p.id === id),
).filter((tool): tool is Platform => Boolean(tool));

const benefits = [
  "Answer common customer questions from approved help content",
  "Add AI agents to websites, help centers, and support workflows",
  "Route conversations to humans when intent, risk, or account context matters",
  "Review ticket themes, missing docs, and recurring support gaps",
  "Compare focused AI website agents with broader helpdesk platforms",
  "Keep sensitive data, permissions, and escalation rules under control",
];

const supportAngles = [
  {
    title: "Website AI Agent",
    tool: "Chatbase",
    copy: "Best when the goal is a focused customer-facing agent trained on docs, pages, FAQs, and selected business content.",
  },
  {
    title: "Customer Messaging",
    tool: "Intercom Fin",
    copy: "Best when AI support should live inside a broader customer messaging and inbox workflow.",
  },
  {
    title: "Service Operations",
    tool: "Zendesk AI",
    copy: "Best when ticketing, agent assist, routing, and larger support operations are already central to the team.",
  },
];

export default function AICustomerSupportToolsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
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
          <span className="text-gray-300">AI Customer Support Tools</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Category · Customer Support
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6">
          AI Customer{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Support Tools
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
          Compare AI website agents, helpdesk AI, ticket triage, knowledge base
          answers, and support handoff workflows for B2B SaaS, ecommerce,
          agencies, and customer success teams.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Support Teams", "SaaS", "Customer Success"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">
            Why AI Support Tools Matter for B2B Teams
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

        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">
            Pick by Support Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supportAngles.map((angle) => (
              <div
                key={angle.title}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
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

        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Top AI Customer Support Tools
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl">
                Hand-picked tools for teams that need website AI agents,
                knowledge-based answers, ticket support, human handoffs, and
                customer conversation workflows.
              </p>
            </div>
            <Link
              href="/comparisons/chatbase-vs-intercom"
              className="text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
            >
              Compare Chatbase vs Intercom
            </Link>
          </div>

          <p className="text-xs text-gray-600 mb-8">
            Disclosure: Some links on this page are affiliate links. We may earn
            a commission if you sign up, at no extra cost to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {supportTools.map((platform) => {
              const Icon = platform.icon ?? HeadphonesIcon;
              return (
                <div
                  key={platform.id}
                  className={`relative flex flex-col p-6 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    platform.featured
                      ? "bg-white/[0.02] border-2 border-indigo-500/60 shadow-[0_0_40px_-8px_rgba(79,70,229,0.4)]"
                      : "bg-zinc-900/50 border border-white/[0.07] hover:border-white/[0.15] hover:shadow-[0_0_30px_rgba(99,102,241,0.07)]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

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
          source="category-ai-customer-support-tools"
        />

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Back to all B2B AI categories
          </Link>
        </div>
      </main>
    </div>
  );
}
