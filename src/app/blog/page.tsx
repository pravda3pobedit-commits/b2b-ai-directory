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
// Article list item
// ---------------------------------------------------------------------------

function ArticleItem({ post }: { post: NotionPost }) {
  return (
    <Link
      href={post.slug ? `/blog/${post.slug}` : "#"}
      className="group block px-4 py-4 -mx-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-200"
    >
      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-1.5">
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
      <h2 className="text-[0.95rem] font-semibold text-white leading-snug group-hover:text-indigo-200 transition-colors duration-200 line-clamp-2">
        {post.title}
      </h2>

      {/* Excerpt */}
      {post.metaDescription && (
        <p className="mt-1 text-sm text-slate-400 leading-relaxed line-clamp-2">
          {post.metaDescription}
        </p>
      )}

      {/* Date */}
      {post.publishedDate && (
        <p className="mt-2 text-xs text-slate-600">
          {formatDate(post.publishedDate)}
        </p>
      )}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPage() {
  const posts: NotionPost[] = await getPublishedArticles();

  return (
    <div
      className="min-h-screen w-full text-white font-sans relative overflow-x-hidden"
      style={{ background: "linear-gradient(-45deg, #050505, #0a0a0f, #0d1117, #050505)" }}
    >
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
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-28 pb-20">

        {/* Page header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            B2B AI Stack Blog
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 leading-tight">
            AI B2B Insights & News
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Expert reviews, tool comparisons and strategies for teams scaling with AI.
          </p>
        </div>

        {/* List / Empty state */}
        {posts.length === 0 ? (
          <p className="text-slate-500 text-sm">
            Articles will appear here once published in Notion.
          </p>
        ) : (
          <div className="divide-y divide-white/[0.05]">
            {posts.map((post) => (
              <ArticleItem key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}