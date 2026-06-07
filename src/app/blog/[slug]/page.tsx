import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPostBySlug,
  getPublishedArticles,
  getPageBlocks,
  type NotionPost,
  type NotionBlock,
  type RichTextItem,
} from "../../../lib/notion";

// ---------------------------------------------------------------------------
// Static params
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

/** Flatten plain text from a Notion rich_text array. */
function plainText(richText: RichTextItem[]): string {
  return richText.map((t) => t.plain_text).join("");
}

/** Render a single rich_text item with annotations applied inline. */
function RichTextSpan({ item }: { item: RichTextItem }) {
  const { bold, italic, strikethrough, underline, code } = item.annotations;
  let content: React.ReactNode = item.plain_text;

  if (code) {
    content = (
      <code className="px-1.5 py-0.5 rounded bg-[#1e1e2e] text-indigo-300 text-[0.875em] font-mono">
        {content}
      </code>
    );
  }
  if (bold) content = <strong className="font-semibold text-white">{content}</strong>;
  if (italic) content = <em className="italic">{content}</em>;
  if (strikethrough) content = <s>{content}</s>;
  if (underline) content = <u>{content}</u>;
  if (item.href) {
    content = (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 underline underline-offset-2 hover:text-indigo-300 transition-colors"
      >
        {content}
      </a>
    );
  }
  return <>{content}</>;
}

/** Render a rich_text array. */
function RichText({ items }: { items: RichTextItem[] }) {
  if (!items?.length) return null;
  return (
    <>
      {items.map((item, i) => (
        <RichTextSpan key={i} item={item} />
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Block renderer
// ---------------------------------------------------------------------------

function NotionBlockRenderer({ block }: { block: NotionBlock }) {
  const { type } = block;
  const data = block[type] ?? {};
  const rt: RichTextItem[] = data.rich_text ?? [];

  switch (type) {
    // Paragraphs
    case "paragraph":
      if (!rt.length) return <div className="mt-6 mb-0 h-4" />;
      return (
        <p className="mt-0 mb-5 text-gray-300 leading-[1.85] text-[1.05rem]">
          <RichText items={rt} />
        </p>
      );

    // Headings
    case "heading_1":
      return (
        <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-bold text-white leading-snug">
          <RichText items={rt} />
        </h2>
      );
    case "heading_2":
      return (
        <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-semibold text-white leading-snug">
          <RichText items={rt} />
        </h3>
      );
    case "heading_3":
      return (
        <h4 className="mt-6 mb-2 text-lg font-semibold text-gray-100 leading-snug">
          <RichText items={rt} />
        </h4>
      );

    // Lists
    case "bulleted_list_item":
      return (
        <li className="ml-5 list-disc text-gray-300 leading-[1.85] text-[1.05rem] mb-1.5">
          <RichText items={rt} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li className="ml-5 list-decimal text-gray-300 leading-[1.85] text-[1.05rem] mb-1.5">
          <RichText items={rt} />
        </li>
      );

    // To-do
    case "to_do":
      return (
        <div className="flex items-start gap-3 mb-2 text-gray-300 text-[1.05rem] leading-[1.85]">
          <span
            className={`mt-1 flex-shrink-0 w-4 h-4 rounded border ${
              data.checked
                ? "bg-indigo-500 border-indigo-500"
                : "border-gray-600"
            } flex items-center justify-center`}
          >
            {data.checked && (
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="currentColor">
                <path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span className={data.checked ? "line-through text-gray-500" : ""}>
            <RichText items={rt} />
          </span>
        </div>
      );

    // Quote
    case "quote":
      return (
        <blockquote className="my-6 pl-5 border-l-4 border-indigo-500/60 text-gray-400 italic text-[1.05rem] leading-[1.85]">
          <RichText items={rt} />
        </blockquote>
      );

    // Callout
    case "callout": {
      const emoji = data.icon?.emoji ?? "💡";
      return (
        <div className="my-6 flex gap-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 px-5 py-4 text-gray-300 text-[1.05rem] leading-[1.85]">
          <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
          <span><RichText items={rt} /></span>
        </div>
      );
    }

    // Divider
    case "divider":
      return <hr className="my-8 border-[#1e1e1e]" />;

    // Code block
    case "code":
      return (
        <div className="my-6 rounded-xl overflow-hidden border border-[#1e1e1e]">
          {data.language && (
            <div className="px-4 py-2 bg-[#0d0d0d] text-xs text-gray-500 font-mono border-b border-[#1e1e1e]">
              {data.language}
            </div>
          )}
          <pre className="bg-[#111111] px-5 py-4 overflow-x-auto text-sm leading-relaxed text-green-300 font-mono">
            <code>{plainText(rt)}</code>
          </pre>
        </div>
      );

    // Image
    case "image": {
      const src =
        data.type === "external" ? data.external?.url : data.file?.url;
      const caption = plainText(data.caption ?? []);
      if (!src) return null;
      return (
        <figure className="my-8">
          <div className="relative w-full rounded-xl overflow-hidden border border-[#1e1e1e]" style={{ aspectRatio: "16/9" }}>
            <Image src={src} alt={caption || "Article image"} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>
          {caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    }

    // Toggle (collapsed — show title only)
    case "toggle":
      return (
        <details className="my-4 group">
          <summary className="cursor-pointer list-none flex items-center gap-2 text-gray-300 text-[1.05rem] leading-[1.85] font-medium select-none">
            <span className="transition-transform group-open:rotate-90 text-indigo-400">▶</span>
            <RichText items={rt} />
          </summary>
        </details>
      );

    // Column layouts — just show nothing (we don't recurse into children here)
    case "column_list":
    case "column":
      return null;

    // Unsupported / unknown — render nothing silently
    default:
      return null;
  }
}

/**
 * Wraps consecutive list items of the same type inside a <ul> or <ol> so
 * the browser renders them as proper lists with correct spacing.
 */
function renderBlocks(blocks: NotionBlock[]) {
  const output: React.ReactNode[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block.type === "bulleted_list_item") {
      const items: NotionBlock[] = [];
      while (i < blocks.length && blocks[i].type === "bulleted_list_item") {
        items.push(blocks[i++]);
      }
      output.push(
        <ul key={`ul-${items[0].id}`} className="my-4 space-y-0.5 pl-1">
          {items.map((b) => (
            <NotionBlockRenderer key={b.id} block={b} />
          ))}
        </ul>
      );
      continue;
    }

    if (block.type === "numbered_list_item") {
      const items: NotionBlock[] = [];
      while (i < blocks.length && blocks[i].type === "numbered_list_item") {
        items.push(blocks[i++]);
      }
      output.push(
        <ol key={`ol-${items[0].id}`} className="my-4 space-y-0.5 pl-1">
          {items.map((b) => (
            <NotionBlockRenderer key={b.id} block={b} />
          ))}
        </ol>
      );
      continue;
    }

    output.push(<NotionBlockRenderer key={block.id} block={block} />);
    i++;
  }

  return output;
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post: NotionPost | null = await getPostBySlug(slug);

  if (!post) notFound();

  const blocks = await getPageBlocks(post.id);

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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Article body — Notion blocks */}
        <article className="prose-notion">
          {blocks.length > 0 ? (
            renderBlocks(blocks)
          ) : (
            <p className="text-gray-500 italic">Содержимое статьи не найдено.</p>
          )}
        </article>
      </div>
    </main>
  );
}
