import type { MetadataRoute } from "next";
import { comparisons } from "@/data/comparisons";
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
      url: `${BASE_URL}/comparisons`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map(
    (comparison) => ({
      url: `${BASE_URL}/comparisons/${comparison.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.72,
    }),
  );

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

  return [...staticPages, ...comparisonPages, ...toolPages, ...categoryPages];
}
