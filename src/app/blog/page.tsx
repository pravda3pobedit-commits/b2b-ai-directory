import Image from "next/image";
import Link from "next/link";
import { getPublishedArticles, type NotionPost } from "@/lib/notion";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "AI B2B Insights & News | B2B AI Stack",
  description:
    "Expert articles, tool reviews and strategies for AI-powered B2B businesses. Curated by the B2B AI Stack team.",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Article Card
// ---------------------------------------------------------------------------

function ArticleCard({ post }: { post: NotionPost }) {
  return (
    <Link
      href={post.slug ? `/blog/${post.slug}` : "#"}
      className="group flex flex-col bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-slate-600/60 hover:bg-zinc-900/80 hover:shadow-[0_0_40px_rgba(99,102,241,0.07)] transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-800/60">
        {post.coverUrl ? (
          <>
            <Image
              src={post.coverUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* subtle dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
          </>
        ) : (
          /* Placeholder when no cover */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-indigo-400/60"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-indigo-200 transition-colors duration-200">
          {post.title}
        </h2>

        {/* Description */}
        {post.metaDescription && (
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 flex-1">
            {post.metaDescription}
          </p>
        )}

        {/* Footer: date + arrow */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.05] mt-auto">
          {post.publishedDate ? (
            <span className="text-xs text-slate-500">
              {formatDate(post.publishedDate)}
            </span>
          ) : (
            <span />
          )}
          <span className="text-xs text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all duration-300">
            Read more
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPage() {
  const posts: NotionPost[] = await getPublishedArticles();

  return (
    <div className="min-h-screen w-full text-white font-sans relative overflow-x-hidden" style={{
      background: "linear-gradient(-45deg, #050505, #0a0a0f, #0d1117, #050505)",
    }}>
      {/* Ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-indigo-900/15 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Page header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            B2B AI Stack Blog
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            AI B2B Insights & News
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Expert reviews, tool comparisons and strategies for teams scaling with AI.
          </p>
        </div>

        {/* Grid / Empty state */}
        {posts.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900/80 border border-white/5 mb-5">
              <svg
                className="w-7 h-7 text-zinc-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-slate-500 text-base">
              Articles will appear here once published in Notion.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}