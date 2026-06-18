import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  MailCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";
import { platforms } from "@/data/platforms";

const BASE_URL = "https://www.b2baistack.com";

export const metadata: Metadata = {
  title: "Best AI Sales Prospecting Stack for B2B Teams | B2BAIStack",
  description:
    "A practical guide to building an AI sales prospecting stack with email finding, enrichment, AI research, outbound sequencing, deliverability, and responsible review.",
  alternates: {
    canonical: `${BASE_URL}/guides/ai-sales-prospecting-stack`,
  },
  openGraph: {
    title: "Best AI Sales Prospecting Stack for B2B Teams | B2BAIStack",
    description:
      "Map the roles of Hunter, Apollo, Clay, Instantly, Smartlead, and Lemlist in a responsible B2B outbound workflow.",
    url: `${BASE_URL}/guides/ai-sales-prospecting-stack`,
    siteName: "B2BAIStack",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Best AI Sales Prospecting Stack for B2B Teams | B2BAIStack",
    description:
      "Map the roles of Hunter, Apollo, Clay, Instantly, Smartlead, and Lemlist in a responsible B2B outbound workflow.",
  },
};

const hunter = platforms.find((platform) => platform.id === "hunter-io");
const apollo = platforms.find((platform) => platform.id === "apollo-ai");
const recommendedTools = [hunter, apollo].filter(
  (tool): tool is NonNullable<typeof hunter> => Boolean(tool),
);

const stackLayers = [
  {
    icon: Search,
    label: "Contact data",
    tools: "Hunter, Apollo",
    description:
      "Find professional email addresses, verify contacts, and build an initial prospect list before any outreach happens.",
  },
  {
    icon: Workflow,
    label: "Data orchestration",
    tools: "Clay",
    description:
      "Enrich accounts, combine signals, run AI research, and turn a rough target list into a better outbound workflow.",
  },
  {
    icon: Layers3,
    label: "GTM workspace",
    tools: "Apollo",
    description:
      "Organize prospecting views, enrichment, sequences, website visitor workflows, AI research, and sales team activity in one place.",
  },
  {
    icon: MailCheck,
    label: "Sending and deliverability",
    tools: "Instantly, Smartlead, Lemlist",
    description:
      "Manage cold email sending, domains, inboxes, follow-ups, reply handling, and campaign operations after the list is ready.",
  },
  {
    icon: ShieldCheck,
    label: "Review and compliance",
    tools: "Human review",
    description:
      "Check consent, relevance, unsubscribe rules, do-not-contact signals, sender reputation, and whether the message is worth sending.",
  },
];

const scenarios = [
  {
    heading: "Lean founder or agency",
    answer: "Hunter + spreadsheet or CRM + a careful sending workflow",
    notes:
      "Start simple when the main bottleneck is verified email discovery. Add Apollo or Clay only when prospecting complexity justifies it.",
  },
  {
    heading: "Sales team that wants one workspace",
    answer:
      "Apollo first, then add Hunter or Clay where data quality needs help",
    notes:
      "Apollo is the broader workspace for lists, enrichment, AI-assisted research, sequences, and sales activity.",
  },
  {
    heading: "Advanced outbound motion",
    answer: "Clay + Apollo or Hunter + Instantly/Smartlead/Lemlist",
    notes:
      "Use Clay for enrichment and workflow logic, Apollo or Hunter for prospect data, and a sending platform for campaign operations.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best AI Sales Prospecting Stack for B2B Teams",
  description:
    "A practical guide to building an AI sales prospecting stack with email finding, enrichment, AI research, outbound sequencing, deliverability, and responsible review.",
  url: `${BASE_URL}/guides/ai-sales-prospecting-stack`,
  mainEntityOfPage: `${BASE_URL}/guides/ai-sales-prospecting-stack`,
  author: {
    "@type": "Organization",
    name: "B2BAIStack",
    url: BASE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "B2BAIStack",
    url: BASE_URL,
  },
};

export default function AISalesProspectingStackGuide() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[10%] w-[560px] h-[560px] rounded-full bg-emerald-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[8%] w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-16">
        <Link
          href="/category/ai-sales-prospecting-tools"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-10"
        >
          ← Back to sales prospecting tools
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium tracking-wide uppercase mb-5">
          <Sparkles className="w-3.5 h-3.5" />
          Sales Prospecting Guide
        </div>

        <section className="max-w-4xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Build an AI sales prospecting stack without buying the same tool
            twice
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            The useful question is not whether Clay, Apollo, Hunter, Instantly,
            Smartlead, or Lemlist is the single best tool. They usually solve
            different layers: data, enrichment, GTM workspace, sending, and
            review. A good B2B outbound stack makes those layers clear before
            the team spends money.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-16">
          {stackLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.label}
                className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 p-5"
              >
                <div className="w-10 h-10 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-emerald-300" />
                </div>
                <p className="text-[11px] uppercase tracking-widest text-emerald-300 mb-2">
                  {layer.label}
                </p>
                <h2 className="text-base font-semibold text-white mb-3">
                  {layer.tools}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {layer.description}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                Which stack should a B2B team start with?
              </h2>
              <p className="text-sm text-slate-500 max-w-2xl">
                Start with the smallest workflow that solves the real
                bottleneck. Add orchestration only after the simple layer is
                working.
              </p>
            </div>
            <Link
              href="/comparisons/hunter-vs-apollo"
              className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              Compare Hunter vs Apollo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((scenario) => (
              <div
                key={scenario.heading}
                className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {scenario.heading}
                </h3>
                <p className="text-sm text-emerald-200 leading-relaxed mb-3">
                  {scenario.answer}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {scenario.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5 mb-16">
          <div className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              What changed in 2026
            </h2>
            <div className="space-y-4">
              {[
                "Clay is pushing GTM agents, MCP access, and workflow orchestration, which makes it more like a data and operations layer than a simple prospecting list.",
                "Apollo is adding AI assistant workflows, AI Research, prospecting view customization, Google Maps prospecting, DNC filters, and waterfall enrichment options.",
                "Cold email benchmarks point back to relevance, segmentation, short emails, follow-ups, and deliverability discipline rather than simple sending volume.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-1 shrink-0" />
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-amber-500/[0.04] p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <h2 className="text-xl font-semibold text-white">
                Responsible outbound filter
              </h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Before adding another tool, check whether the campaign is targeted
              enough to deserve sending.
            </p>
            <ul className="space-y-3">
              {[
                "The recipient segment has a clear business reason to care.",
                "The email is short, specific, and easy to decline.",
                "Addresses are verified and sender reputation is protected.",
                "Do-not-contact, unsubscribe, privacy, and regional rules are respected.",
                "A human reviews targeting and message quality before scale.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recommendedTools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 p-6"
            >
              <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-2">
                Recommended starting point
              </p>
              <h2 className="text-2xl font-semibold text-white mb-3">
                {tool.name}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {tool.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/tool/${tool.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  View details
                </Link>
                <TrackedAffiliateLink
                  href={tool.affiliateLink}
                  toolId={tool.id}
                  toolName={tool.name}
                  ctaText={tool.ctaText ?? "Visit Tool"}
                  icon="arrow"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-500 transition-colors"
                />
              </div>
            </div>
          ))}
        </section>

        <NewsletterSignup
          className="mt-16"
          source="guide-ai-sales-prospecting-stack"
        />
      </div>
    </main>
  );
}
