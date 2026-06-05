import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getPublishedArticles, type NotionPost } from "../../../lib/notion";

// ---------------------------------------------------------------------------
// Static params (optional but recommended for SSG)
// ---------------------------------------------------------------------------

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await getPublishedArticles();
  return posts
    .filter((p: any) => p && p.slug)
    .map((p: any) => ({ slug: String(p.slug) }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata
// ---------------------------------------------------------------------------

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post: NotionPost | null = await getPostBySlug(slug);

  if (!post) {
    return { title: "Статья не найдена | B2B AI Stack" };
  }

  return {
    title: `${post.title} | B2B AI Stack`,
    description: post.metaDescription || undefined,
    openGraph: {
      title: post.title,
      description: post.metaDescription || undefined,
      type: "article",
      publishedTime: post.publishedDate ?? undefined,
      tags: post.tags,
      ...(post.coverUrl
        ? {
            images: [
              {
                url: post.coverUrl,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || undefined,
      ...(post.coverUrl ? { images: [post.coverUrl] } : {}),
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post: NotionPost | null = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans">
      {/* Cover image */}
      {post.coverUrl && (
        <div className="relative w-full h-64 sm:h-96 overflow-hidden">
          <Image
            src={post.coverUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>
      )}

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-400 transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Все статьи
        </a>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: any) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-[#1e1e1e]">
          {post.publishedDate && (
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {formatDate(post.publishedDate)}
            </span>
          )}
          <span className="text-xs px-2 py-0.5 rounded bg-[#1e1e1e] text-gray-500">
            {post.status}
          </span>
        </div>

        {/* Description / lead */}
        {post.metaDescription && (
          <p className="text-gray-400 text-lg leading-relaxed mb-8 italic border-l-2 border-indigo-500/40 pl-4">
            {post.metaDescription}
          </p>
        )}

        {/* Placeholder for full body content */}
        {/* TODO: render Notion block children using notion.blocks.children.list */}
        <div className="rounded-2xl border border-[#1e1e1e] bg-[#111111] p-6 text-sm text-gray-500">
          Полный текст статьи загружается из Notion Blocks (следующий шаг).
        </div>
      </div>
    </main>
  );
}
