import { ArrowRight, CheckCircle2, Scale, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { comparisons } from "@/data/comparisons";
import { platforms } from "@/data/platforms";

const BASE_URL = "https://www.b2baistack.com";
const fallbackToolNames: Record<string, string> = {
  fathom: "Fathom",
};

export const metadata: Metadata = {
  title: "AI Tool Comparisons for B2B Teams | B2BAIStack",
  description:
    "Compare AI tools by practical B2B use case: automation, sales prospecting, customer support, meeting notes, and video ad workflows.",
  alternates: {
    canonical: "/comparisons",
  },
  openGraph: {
    title: "AI Tool Comparisons for B2B Teams | B2BAIStack",
    description:
      "Compare AI tools by practical B2B use case: automation, sales prospecting, customer support, meeting notes, and video ad workflows.",
    url: `${BASE_URL}/comparisons`,
    siteName: "B2BAIStack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AI Tool Comparisons for B2B Teams | B2BAIStack",
    description:
      "Compare AI tools by practical B2B use case: automation, sales prospecting, customer support, meeting notes, and video ad workflows.",
  },
};

function getToolName(toolId: string) {
  return (
    platforms.find((platform) => platform.id === toolId)?.name ??
    fallbackToolNames[toolId] ??
    toolId
  );
}

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Tool Comparisons",
  url: `${BASE_URL}/comparisons`,
  itemListElement: comparisons.map((comparison, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: comparison.shortTitle,
    url: `${BASE_URL}/comparisons/${comparison.slug}`,
  })),
};

export default function ComparisonsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans relative overflow-x-hidden">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[4%] left-[12%] w-[560px] h-[560px] rounded-full bg-indigo-900/15 blur-[140px]" />
        <div className="absolute bottom-[8%] right-[8%] w-[460px] h-[460px] rounded-full bg-cyan-900/10 blur-[130px]" />
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-5">
            <Scale className="w-3.5 h-3.5" />
            AI Tool Comparisons
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Practical AI tool comparisons for B2B teams
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed">
            Side-by-side pages for operators who need to choose the right AI
            tool for a workflow, not just collect another software logo.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          {[
            "Choose by use case, not hype",
            "See tradeoffs and limitations",
            "Jump from comparisons to tool pages",
          ].map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
            >
              <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span className="text-sm text-slate-300">{benefit}</span>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparisons.map((comparison) => {
            const firstName = getToolName(comparison.toolIds[0]);
            const secondName = getToolName(comparison.toolIds[1]);

            return (
              <Link
                key={comparison.slug}
                href={`/comparisons/${comparison.slug}`}
                className="group rounded-3xl border border-white/[0.07] bg-zinc-900/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:bg-indigo-500/[0.06]"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-indigo-300">
                    {comparison.category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-indigo-300" />
                </div>

                <h2 className="text-xl font-semibold text-white mb-3">
                  {comparison.shortTitle}
                </h2>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {[firstName, secondName].map((name) => (
                    <span
                      key={name}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                    >
                      {name}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {comparison.description}
                </p>
              </Link>
            );
          })}
        </section>

        <div className="mt-14 rounded-3xl border border-indigo-500/20 bg-indigo-500/[0.05] p-6">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-300 mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-slate-300">
              These pages are editorial comparisons. Some linked tool pages
              include affiliate links, but the recommendation logic should stay
              practical: where each tool fits, where it does not, and what a B2B
              team should verify before buying.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
