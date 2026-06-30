import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Scale,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterSignup from "@/components/NewsletterSignup";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";
import { comparisons, getComparison } from "@/data/comparisons";
import { platforms } from "@/data/platforms";

const BASE_URL = "https://www.b2baistack.com";

const fallbackTools: Record<
  string,
  {
    name: string;
    category: string;
    description: string;
    websiteUrl: string;
  }
> = {
  fathom: {
    name: "Fathom",
    category: "AI Meetings & Intelligence",
    description:
      "AI meeting recorder and note-taking tool often considered by teams that want quick call summaries and highlights.",
    websiteUrl: "https://fathom.video/",
  },
};

type DirectoryTool = {
  id: string;
  name: string;
  category: string;
  shortDescription?: string;
  descBusiness?: string;
  descFreelancer?: string;
  longDescription: string;
  affiliateLink: string;
  ctaText?: string;
  imagePath?: string;
};

function getTool(toolId: string) {
  const platform = platforms.find((item) => item.id === toolId);
  if (platform) {
    const tool = platform as DirectoryTool;
    return {
      id: tool.id,
      name: tool.name,
      category: tool.category,
      description:
        tool.shortDescription ??
        tool.descBusiness ??
        tool.descFreelancer ??
        tool.longDescription,
      href: `/tool/${tool.id}`,
      affiliateLink: tool.affiliateLink,
      ctaText: tool.ctaText ?? "Visit Tool",
      imagePath: tool.imagePath,
      isDirectoryTool: true,
    };
  }

  const fallback = fallbackTools[toolId];
  if (!fallback) return null;

  return {
    id: toolId,
    name: fallback.name,
    category: fallback.category,
    description: fallback.description,
    href: fallback.websiteUrl,
    affiliateLink: fallback.websiteUrl,
    ctaText: `Visit ${fallback.name}`,
    imagePath: undefined,
    isDirectoryTool: false,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((comparison) => ({ slug: comparison.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    return {
      title: "Comparison Not Found | B2BAIStack",
    };
  }

  const url = `${BASE_URL}/comparisons/${comparison.slug}`;

  return {
    title: `${comparison.shortTitle} | B2BAIStack`,
    description: comparison.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${comparison.shortTitle} | B2BAIStack`,
      description: comparison.description,
      url,
      siteName: "B2BAIStack",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${comparison.shortTitle} | B2BAIStack`,
      description: comparison.description,
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);

  if (!comparison) {
    notFound();
  }

  const tools = comparison.toolIds.map(getTool);
  const [firstTool, secondTool] = tools;

  if (!firstTool || !secondTool) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/comparisons/${comparison.slug}`;
  const video = comparison.video;
  const videoUrl = video ? `https://youtu.be/${video.youtubeId}` : undefined;
  const videoEmbedUrl = video
    ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}`
    : undefined;
  const videoThumbnailUrl = video
    ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
    : undefined;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comparison.title,
    description: comparison.description,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
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
    ...(video && videoUrl && videoEmbedUrl && videoThumbnailUrl
      ? {
          video: {
            "@type": "VideoObject",
            name: video.title,
            description: video.description,
            uploadDate: video.uploadDate,
            thumbnailUrl: [videoThumbnailUrl],
            embedUrl: videoEmbedUrl,
            url: videoUrl,
            isAccessibleForFree: true,
          },
        }
      : {}),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comparison.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[8%] left-[10%] w-[560px] h-[560px] rounded-full bg-indigo-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[8%] w-[480px] h-[480px] rounded-full bg-cyan-900/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 md:py-16">
        <Link
          href="/comparisons"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to comparisons
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-5">
          <Scale className="w-3.5 h-3.5" />
          {comparison.category}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
          {comparison.title}
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mb-10">
          {comparison.summary}
        </p>

        {video && videoUrl && videoEmbedUrl && (
          <section className="mb-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-zinc-900/45">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr]">
              <div className="aspect-video bg-zinc-950">
                <iframe
                  src={videoEmbedUrl}
                  title={video.title}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col justify-center p-6 lg:p-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-indigo-300">
                  Video walkthrough
                </p>
                <h2 className="mb-3 text-2xl font-semibold tracking-tight text-white">
                  {video.title}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-slate-400">
                  {video.description}
                </p>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  Open on YouTube
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {[firstTool, secondTool].map((tool) => (
            <div
              key={tool.id}
              className="rounded-3xl border border-white/[0.07] bg-zinc-900/50 p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-2">
                    {tool.category}
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    {tool.name}
                  </h2>
                </div>
                {tool.imagePath && (
                  <Image
                    src={tool.imagePath}
                    alt={tool.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl object-cover border border-white/10 bg-zinc-950"
                  />
                )}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {tool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tool.isDirectoryTool ? (
                  <Link
                    href={tool.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                ) : (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    Website
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {tool.isDirectoryTool && (
                  <TrackedAffiliateLink
                    href={tool.affiliateLink}
                    toolId={tool.id}
                    toolName={tool.name}
                    ctaText={tool.ctaText}
                    icon="arrow"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
                  />
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12 rounded-3xl border border-indigo-500/20 bg-indigo-500/[0.05] p-6">
          <h2 className="text-xl font-semibold text-white mb-3">
            Quick Verdict
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            {comparison.verdict}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {comparison.useCases.map((useCase) => {
            const tool = getTool(useCase.toolId);
            return (
              <div
                key={useCase.toolId}
                className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <h2 className="text-xl font-semibold text-white mb-4">
                  {useCase.heading}
                  {tool ? `: ${tool.name}` : ""}
                </h2>
                <ul className="space-y-3">
                  {useCase.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Side-by-side comparison
          </h2>
          <div className="overflow-hidden rounded-3xl border border-white/[0.08]">
            <div className="grid grid-cols-3 bg-white/[0.04] text-xs font-semibold uppercase tracking-widest text-slate-400">
              <div className="p-4">Criteria</div>
              <div className="p-4 border-l border-white/[0.08]">
                {firstTool.name}
              </div>
              <div className="p-4 border-l border-white/[0.08]">
                {secondTool.name}
              </div>
            </div>

            {comparison.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]"
              >
                <div className="p-4 text-sm font-medium text-white bg-white/[0.02]">
                  {row.label}
                </div>
                <div className="p-4 text-sm leading-relaxed text-slate-300 md:border-l border-white/[0.08]">
                  {row.first}
                </div>
                <div className="p-4 text-sm leading-relaxed text-slate-300 md:border-l border-white/[0.08]">
                  {row.second}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-3xl border border-amber-500/20 bg-amber-500/[0.05] p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-4 h-4 text-amber-300" />
            <h2 className="text-xl font-semibold text-white">
              What to verify before choosing
            </h2>
          </div>
          <ul className="space-y-3">
            {comparison.cautions.map((caution) => (
              <li
                key={caution}
                className="text-sm leading-relaxed text-slate-300"
              >
                {caution}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-white mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {comparison.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/[0.08] bg-zinc-900/45 p-5"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-white group-open:mb-3">
                  {faq.question}
                </summary>
                <p className="text-sm leading-relaxed text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {comparison.relatedLinks && comparison.relatedLinks.length > 0 && (
          <section className="mb-12">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Related next steps
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  Use these pages to move from a two-tool comparison into the
                  broader workflow.
                </p>
              </div>
              <Link
                href="/comparisons"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:bg-white/[0.07] hover:text-white"
              >
                All comparisons
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {comparison.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-3xl border border-white/[0.07] bg-zinc-900/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/35 hover:bg-indigo-500/[0.06]"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="text-[11px] uppercase tracking-widest text-indigo-300">
                      Next step
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-indigo-300" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {link.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <NewsletterSignup
          className="mb-12"
          source={`comparison-${comparison.slug}`}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-8">
          <p className="max-w-xl text-xs leading-relaxed text-slate-500">
            Disclosure: Some tool links are affiliate links. B2BAIStack may earn
            a commission if you sign up, at no extra cost to you. Comparisons
            are written to clarify fit and tradeoffs, not to guarantee outcomes.
          </p>
          <Link
            href="/comparisons"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.07] hover:text-white transition-colors"
          >
            Browse all comparisons
          </Link>
        </div>
      </div>
    </main>
  );
}
