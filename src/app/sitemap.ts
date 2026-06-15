import type { MetadataRoute } from "next";
import { platforms } from "@/data/platforms";

const BASE_URL = "https://www.b2baistack.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
  ];

  // Tool pages — use slug if present, otherwise id
  const toolPages: MetadataRoute.Sitemap = platforms.map((platform) => ({
    url: `${BASE_URL}/tool/${"slug" in platform && typeof platform.slug === "string" ? platform.slug : platform.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Category pages that exist under src/app/category/*
  const categorySlugs = [
    "ai-meetings-intelligence",
    "ai-video-ad-generators",
    "ai-sales-prospecting-tools",
    "ai-workflow-automation-tools",
  ];

  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${BASE_URL}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // TODO: Include individual /blog/[slug] URLs once Notion posts can be
  // fetched at build time without NOTION_TOKEN / NOTION_DATABASE_ID.
  // For now, /blog index is included above.

  return [...staticPages, ...toolPages, ...categoryPages];
}
