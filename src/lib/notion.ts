"use server";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;
const NOTION_TOKEN = process.env.NOTION_TOKEN as string;

const HEADERS = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  "Notion-Version": "2022-06-28",
  "Content-Type": "application/json",
};

// ---------------------------------------------------------------------------
// Public type — consumed by blog/page.tsx and blog/[slug]/page.tsx
// ---------------------------------------------------------------------------

export interface NotionPost {
  id: string;
  title: string;
  slug: string | null;
  metaDescription: string | null;
  coverUrl: string | null;
  tags: string[];
  publishedDate: string | null;
  status: string | null;
}

// ---------------------------------------------------------------------------
// Raw Notion helpers
// ---------------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRawPage(page: any): NotionPost {
  const props = page.properties ?? {};

  // Title — standard Notion title type
  const titleArr =
    props["Title"]?.title ?? props["Name"]?.title ?? [];
  const title: string = titleArr.map((t: any) => t.plain_text).join("");

  // Slug — rich_text field named "Slug"
  const slugArr = props["Slug"]?.rich_text ?? [];
  const slug: string | null =
    slugArr.length > 0 ? slugArr.map((t: any) => t.plain_text).join("") : null;

  // Meta description — rich_text
  const descArr =
    props["Meta Description"]?.rich_text ??
    props["Description"]?.rich_text ??
    [];
  const metaDescription: string | null =
    descArr.length > 0
      ? descArr.map((t: any) => t.plain_text).join("") || null
      : null;

  // Tags — multi_select
  const tagsRaw =
    props["Tags"]?.multi_select ?? props["Category"]?.multi_select ?? [];
  const tags: string[] = tagsRaw.map((s: any) => s.name);

  // Published date — date field
  const publishedDate: string | null =
    props["Published Date"]?.date?.start ??
    props["Date"]?.date?.start ??
    null;

  // Status — status field
  const status: string | null = props["Status"]?.status?.name ?? null;

  // Cover image
  let coverUrl: string | null = null;
  if (page.cover?.type === "external") {
    coverUrl = page.cover.external.url;
  } else if (page.cover?.type === "file") {
    coverUrl = page.cover.file.url;
  }

  return { id: page.id, title, slug, metaDescription, coverUrl, tags, publishedDate, status };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch all articles whose Status = "Ready to Publish".
 * Returns mapped NotionPost[] — safe to call from Server Components and
 * Server Actions only (NOTION_TOKEN never sent to the browser).
 */
export async function getPublishedArticles(): Promise<NotionPost[]> {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        filter: {
          property: "Status",
          status: { equals: "Ready to Publish" },
        },
        sorts: [{ property: "Published Date", direction: "descending" }],
      }),
      // Revalidate every 60 s (Next.js fetch cache)
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    console.error("[notion] getPublishedArticles failed:", await response.text());
    return [];
  }

  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data.results ?? []).map((page: any) => mapRawPage(page));
}

/**
 * Fetch a single article by its slug value (rich_text property "Slug").
 * Returns null if not found or on error.
 */
export async function getPostBySlug(slug: string): Promise<NotionPost | null> {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        filter: {
          property: "Slug",
          rich_text: { equals: slug },
        },
      }),
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) return null;

  const data = await response.json();
  const page = data.results?.[0];
  return page ? mapRawPage(page) : null;
}