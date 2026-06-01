import Link from "next/link";
import { platforms } from "@/data/platforms";
import { ArrowLeft, ExternalLink, CheckCircle, Lightbulb } from "lucide-react";
import { notFound } from "next/navigation";

// Converts markdown-style [text](url) links and \n\n paragraph breaks to HTML
function parseRecommendation(text: string): string {
  return text
    .split("\n\n")
    .map((para) =>
      `<p>${para.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 font-medium transition-colors">$1</a>'
      )}</p>`
    )
    .join("");
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await params to fix Next.js 15 sync-dynamic-apis error
  const { slug } = await params;

  // Bulletproof case-insensitive lookup using the existing 'id' field
  const tool = platforms.find(
    (p) => p.id?.toString().toLowerCase() === slug?.toString().toLowerCase()
  );

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col items-center pt-24 px-6 font-sans">
      <div className="max-w-3xl w-full">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Directory
        </Link>

        {/* Hero Image */}
        <img 
          src={tool.imagePath} 
          alt={tool.name} 
          className="w-full aspect-video object-contain bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl mb-8" 
        />

        {/* Header Section */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-3">
            {tool.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">{tool.name}</h1>
          <p className="text-lg text-gray-400 leading-relaxed">{tool.longDescription}</p>
        </div>

        {/* Key Features Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tool.features?.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Recommendation */}
        {(tool as any).expertRecommendation && (
          <div className="mb-12 bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Expert Recommendation</span>
            </div>
            <div
              className="text-gray-300 text-sm leading-relaxed space-y-3 [&_p]:mb-0"
              dangerouslySetInnerHTML={{ __html: parseRecommendation((tool as any).expertRecommendation) }}
            />
          </div>
        )}

        {/* Action Section */}
        <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ready to automate?</h2>
            <p className="text-sm text-gray-400">Start using {tool.name} today and scale your operations.</p>
            {tool.id === 'creatify-ai' && (
              <div className="mt-4 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-xs text-emerald-300 font-medium inline-block">
                🎁 Use promo code <strong className="text-emerald-100 font-bold text-sm">TEAM15</strong> at checkout for 15% off!
              </div>
            )}
          </div>
          <a
            href={tool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors flex items-center gap-2 h-fit"
          >
            {tool.ctaText || "Try for Free"} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
