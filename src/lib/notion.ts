"use server";

const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;
const NOTION_TOKEN = process.env.NOTION_TOKEN as string;

export async function getPublishedArticles() {
  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        property: "Status",
        status: { equals: "Ready to Publish" }
      }
    })
  });

  if (!response.ok) {
    console.error("Ошибка Notion API:", await response.text());
    return [];
  }

  const data = await response.json();
  return data.results;
}

export async function getPostBySlug(slug: string) {
  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: {
        property: "Slug",
        rich_text: { equals: slug }
      }
    })
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data.results.length > 0 ? data.results[0] : null;
}