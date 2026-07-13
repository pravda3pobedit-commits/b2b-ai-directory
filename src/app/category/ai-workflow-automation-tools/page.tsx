import { CheckCircle2, ExternalLink, Settings, Sparkles } from "lucide-react";
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
const PAGE_URL = `${BASE_URL}/category/ai-workflow-automation-tools`;

export const metadata: Metadata = {
  title: "Top AI Workflow Automation Tools for B2B Teams | B2BAIStack",
  description:
    "Compare AI workflow automation tools for app integrations, visual workflows, AI agents, webhooks, APIs, and operations automation.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Top AI Workflow Automation Tools for B2B Teams | B2BAIStack",
    description:
      "Compare AI workflow automation tools for app integrations, visual workflows, AI agents, webhooks, APIs, and operations automation.",
    url: PAGE_URL,
    type: "website",
  },
};

const TOOL_IDS = ["make", "zapier", "zapier-central", "uipath-autopilot"];
type Platform = (typeof platforms)[number];

const categoryTools = TOOL_IDS.map((id) =>
  platforms.find((p) => p.id === id),
).filter((tool): tool is Platform => Boolean(tool));

const benefits = [
  "Connect CRMs, forms, spreadsheets, support tools, and marketing apps",
  "Add AI steps for summarization, enrichment, classification, and routing",
  "Use webhooks and APIs when pre-built integrations are not enough",
  "Automate lead routing, reporting, content ops, and support handoffs",
  "Compare visual builders, simple triggers, AI bots, and enterprise RPA",
  "Keep human review in workflows where accuracy, compliance, or tone matters",
];

const workflowAngles = [
  {
    title: "Visual AI Workflows",
    tool: "Make",
    copy: "Best when the team wants visual control over branching, routers, webhooks, HTTP modules, app data, and AI steps in one inspectable scenario.",
  },
  {
    title: "Fast App Automation",
    tool: "Zapier",
    copy: "Best when the priority is quick setup, many app connectors, simple triggers, and governed automation for non-technical teams.",
  },
  {
    title: "Self-hosted Control",
    tool: "n8n",
    copy: "Best when technical teams care about self-hosting, workflow ownership, custom code, privacy posture, and deeper operations control.",
  },
  {
    title: "AI-native Ops",
    tool: "Gumloop",
    copy: "Best when teams are evaluating agentic workflows, AI research, document processing, scraping, enrichment, and human approval loops.",
  },
];

const categoryFaqs = [
  {
    question: "What are AI workflow automation tools?",
    answer:
      "AI workflow automation tools connect apps, APIs, webhooks, business data, and AI models so teams can automate routing, enrichment, summaries, reporting, content operations, support handoffs, and approvals.",
  },
  {
    question: "Is Make, Zapier, n8n, or Gumloop better for AI workflows?",
    answer:
      "Make is usually strongest for visual multi-step scenarios and app/API orchestration. Zapier is often simpler for fast app automations. n8n is better when self-hosting and technical control matter. Gumloop is worth evaluating for AI-native workflows such as research, scraping, document processing, enrichment, and human review.",
  },
  {
    question: "Should AI workflow automation replace human review?",
    answer:
      "No. Use automation to reduce repetitive work, route data, prepare drafts, and surface decisions, but keep human review for customer-facing messages, compliance-sensitive steps, financial actions, and anything that can damage trust if the model is wrong.",
  },
  {
    question: "What should a small B2B team automate first?",
    answer:
      "Start with a narrow workflow that already happens every week: lead routing, CRM cleanup, support triage, meeting follow-up, reporting, content repurposing, or enrichment. Avoid buying a broad automation stack before mapping the trigger, data source, approval step, and owner.",
  },
];

const relatedStackReads = [
  {
    title: "How to add AI tools to a no-code business stack",
    source: "Best No-Code Tools",
    href: "https://best-no-code-tools.com/blog/add-ai-tools-to-a-no-code-business-stack",
    description:
      "A practical companion for teams adding AI helpers after a no-code site, app, form, or automation is already running.",
  },
  {
    title: "How low-code teams should evaluate AI tools before adding them",
    source: "Top 5 Low-Code Platforms",
    href: "https://top-5-low-code-platforms.com/blog/evaluate-ai-tools-for-low-code-teams",
    description:
      "A governance-minded checklist for deciding whether AI belongs inside a low-code platform or beside it.",
  },
];

const itemListJsonLd = buildCategoryItemListJsonLd({
  name: "AI Workflow Automation Tools",
  description: metadata.description as string,
  pageUrl: PAGE_URL,
  baseUrl: BASE_URL,
  tools: categoryTools,
});

const faqJsonLd = buildFaqPageJsonLd(categoryFaqs);

export default function AIWorkflowAutomationToolsPage() {
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
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[120px]" />
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
          <span className="text-gray-300">AI Workflow Automation Tools</span>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          Category · Workflow Automation
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6">
          AI Workflow{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Automation Tools
          </span>
        </h1>

        {/* Category Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
          Compare visual automation builders, AI workflow tools, app connectors,
          webhooks, API modules, AI bots, and enterprise RPA options for B2B
          operations teams.
        </p>

        {/* Target Audience Chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {["Operations Teams", "RevOps", "Agencies"].map((tag) => (
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
            Why AI Automation Tools Matter for B2B Teams
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
          <div className="mb-6 max-w-2xl">
            <div className="text-[11px] uppercase tracking-widest text-indigo-300 mb-2">
              Related stack planning reads
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
              Before adding AI to a no-code or low-code workflow
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              These companion guides help teams map the existing app or
              automation layer before choosing AI tools from the directory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedStackReads.map((resource) => (
              <a
                className="group rounded-2xl border border-white/[0.08] bg-black/25 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-indigo-500/[0.06]"
                href={resource.href}
                key={resource.href}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-[11px] uppercase tracking-widest text-gray-500">
                    {resource.source}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-500 transition-colors group-hover:text-indigo-300" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6 tracking-tight">
            Make vs Zapier vs n8n vs Gumloop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {workflowAngles.map((angle) => (
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

        {/* Tool Cards */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
            Top AI Workflow Automation Tools
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            Hand-picked tools for B2B teams that need app integrations, workflow
            orchestration, AI automation, custom APIs, and operations systems
            that stay in sync.
          </p>
          <p className="text-xs text-gray-600 mb-8">
            Disclosure: Some links on this page are affiliate links. We may earn
            a commission if you sign up, at no extra cost to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categoryTools.map((platform) => {
              const Icon = platform.icon ?? Settings;
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

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
            AI Workflow Automation FAQ
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
          source="category-ai-workflow-automation-tools"
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
