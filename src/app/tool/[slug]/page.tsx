import Link from "next/link";
import { platforms } from "@/data/platforms";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

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

  const Icon = tool.icon;

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white flex flex-col items-center pt-24 px-6 font-sans">
      <div className="max-w-3xl w-full">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Directory
        </Link>

        {/* Header Section */}
        <div className="flex items-start gap-6 mb-8 border-b border-white/10 pb-8">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex-shrink-0">
            {Icon && <Icon className="w-12 h-12 text-indigo-400" />}
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-3">
              {tool.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">{tool.name}</h1>
            <p className="text-lg text-gray-400 leading-relaxed">{tool.descBusiness || tool.descFreelancer}</p>
          </div>
        </div>

        {/* Action Section */}
        <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Ready to automate?</h2>
            <p className="text-sm text-gray-400">Start using {tool.name} today and scale your operations.</p>
          </div>
          <a
            href={tool.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-colors flex items-center gap-2"
          >
            Start Free Trial <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
