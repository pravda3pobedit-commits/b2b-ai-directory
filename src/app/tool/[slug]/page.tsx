import type { Metadata } from "next";
import Link from "next/link";
import { platforms } from "@/data/platforms";
import { ArrowLeft, CheckCircle, Lightbulb } from "lucide-react";
import { notFound } from "next/navigation";
import TrackedAffiliateLink from "@/components/TrackedAffiliateLink";

const BASE_URL = "https://www.b2baistack.com";

function findTool(slug: string) {
  return platforms.find(
    (p) =>
      p.id?.toString().toLowerCase() === slug?.toString().toLowerCase() ||
      ("slug" in p &&
        typeof p.slug === "string" &&
        p.slug.toLowerCase() === slug?.toString().toLowerCase()),
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return platforms.map((platform) => ({
    slug:
      "slug" in platform && typeof platform.slug === "string"
        ? platform.slug
        : platform.id,
  }));
}

/** Pick the best available description, truncated to ~160 chars. */
function getDescription(
  tool: NonNullable<ReturnType<typeof findTool>>,
): string {
  const raw =
    ("shortDescription" in tool && typeof tool.shortDescription === "string"
      ? tool.shortDescription
      : undefined) ??
    tool.descBusiness ??
    tool.descFreelancer ??
    tool.longDescription ??
    `Explore ${tool.name} on B2B AI Stack — features, use cases, and expert insights.`;

  // Trim to ~160 chars at a word boundary
  if (raw.length <= 160) return raw;
  return `${raw.slice(0, 157).replace(/\s+\S*$/, "")}…`;
}

/** Resolve imagePath to an absolute URL suitable for OG/Twitter images. */
function resolveImage(imagePath: string | undefined): string | undefined {
  if (!imagePath) return undefined;
  if (imagePath.startsWith("http")) return imagePath;
  // Local path like "/invideo.png" → absolute URL
  return `${BASE_URL}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = findTool(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | B2B AI Stack",
      description:
        "The requested tool could not be found in the B2B AI Stack directory.",
    };
  }

  const title = `${tool.name} Review, Features & Use Cases | B2B AI Stack`;
  const description = getDescription(tool);
  const canonicalUrl = `${BASE_URL}/tool/${tool.id}`;
  const image = resolveImage(tool.imagePath);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "B2B AI Stack",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

// Converts markdown-style [text](url) links and \n\n paragraph breaks to HTML
function parseRecommendation(text: string): string {
  return text
    .split("\n\n")
    .map(
      (para) =>
        `<p>${para.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" target="_blank" rel="sponsored nofollow noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 font-medium transition-colors">$1</a>',
        )}</p>`,
    )
    .join("");
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await params to fix Next.js 15 sync-dynamic-apis error
  const { slug } = await params;

  const tool = findTool(slug);

  if (!tool) {
    notFound();
  }

  const toolUrl = `${BASE_URL}/tool/${tool.id}`;
  const image = resolveImage(tool.imagePath);
  const faqItems: { question: string; answer: string }[] =
    "faq" in tool && Array.isArray(tool.faq) ? tool.faq : [];

  const softwareAppLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: getDescription(tool),
    applicationCategory: tool.category,
    operatingSystem: "Web",
    url: toolUrl,
    ...(image ? { image } : {}),
    offers: {
      "@type": "Offer",
      url: tool.affiliateLink,
      category: "Free Trial",
    },
  };

  const faqLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col items-center pt-24 px-6 font-sans">
      {/* Structured Data – JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <div className="max-w-3xl w-full">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Directory
        </Link>

        {/* Hero Image */}
        <img
          src={tool.imagePath}
          alt={tool.name}
          className="w-full aspect-video object-cover bg-zinc-900 rounded-2xl border border-white/10 shadow-2xl mb-8"
        />

        {/* Header Section */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-3">
            {tool.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {tool.name}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            {tool.longDescription}
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tool.features?.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Recommendation */}
        {(tool as any).expertRecommendation && (
          <div className="mb-12 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Expert Recommendation
              </span>
            </div>
            <div
              className="text-gray-300 text-sm leading-relaxed space-y-3 [&_p]:mb-0"
              dangerouslySetInnerHTML={{
                __html: parseRecommendation((tool as any).expertRecommendation),
              }}
            />
          </div>
        )}

        {/* Action Section */}
        <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ready to evaluate?</h2>
            <p className="text-sm text-gray-400">
              Review {tool.name}, compare the fit, and decide whether it belongs
              in your workflow.
            </p>
            {tool.id === "creatify-ai" && (
              <div className="mt-4 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-300 font-medium inline-block">
                🎁 Use promo code{" "}
                <strong className="text-emerald-100 font-bold text-sm">
                  TEAM15
                </strong>{" "}
                at checkout for 15% off!
              </div>
            )}
          </div>
          <div className="flex flex-col items-center sm:items-end gap-3">
            <TrackedAffiliateLink
              href={tool.affiliateLink}
              toolId={tool.id}
              toolName={tool.name}
              ctaText={tool.ctaText || "Try for Free"}
              className="whitespace-nowrap px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors flex items-center gap-2 h-fit"
            />

            <p className="max-w-xs text-center sm:text-right text-xs leading-relaxed text-gray-500">
              Disclosure: Some links on this page are affiliate links. We may
              earn a commission if you sign up, at no extra cost to you.
            </p>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        {(tool as any).faq && (tool as any).faq.length > 0 && (
          <div className="mt-12 mb-12 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            {(tool as any).faq.map(
              (item: { question: string; answer: string }, idx: number) => (
                <details
                  key={idx}
                  className="bg-[#0f111a] border border-gray-800 rounded-xl overflow-hidden cursor-pointer group"
                >
                  <summary className="p-5 text-lg font-semibold text-gray-100 outline-none list-none hover:bg-gray-800/50 transition-colors flex items-center justify-between [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </summary>
                  <div className="p-5 pt-0 text-gray-400 text-sm leading-relaxed border-t border-gray-800">
                    {item.answer}
                  </div>
                </details>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
