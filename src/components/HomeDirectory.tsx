"use client";

import { track } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { ChevronRight, type LucideIcon, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import NewsletterSignup from "@/components/NewsletterSignup";
import { comparisons } from "@/data/comparisons";
import { platforms } from "@/data/platforms";
import { cn } from "@/lib/utils";

type DirectoryPlatform = {
  id: string;
  name: string;
  category: string;
  icon: LucideIcon;
  featured?: boolean;
  badgeText?: string;
  categories?: string[];
  metric?: string;
  metricLabel?: string;
  metricBusiness?: string;
  metricLabelBusiness?: string;
  shortDescription?: string;
  descBusiness?: string;
  descFreelancer?: string;
  longDescription?: string;
  bestFor?: string;
  expertRecommendation?: string;
  features?: string[];
};

const directoryPlatforms: DirectoryPlatform[] = platforms;

const filterCategories = [
  "Content Creation",
  "Marketing",
  "Sales",
  "AI Meetings & Intelligence",
  "Customer Support",
  "Operations",
  "HR",
  "IT & Dev",
];

const categoryLinks = [
  { label: "AI meetings", href: "/category/ai-meetings-intelligence" },
  { label: "Video ads", href: "/category/ai-video-ad-generators" },
  { label: "Sales prospecting", href: "/category/ai-sales-prospecting-tools" },
  { label: "Customer support", href: "/category/ai-customer-support-tools" },
  {
    label: "Workflow automation",
    href: "/category/ai-workflow-automation-tools",
  },
];

const guideLinks = [
  {
    label: "AI sales prospecting stack",
    href: "/guides/ai-sales-prospecting-stack",
    description:
      "Map data, enrichment, sending, deliverability, and review across the outbound stack.",
  },
];

const getPlatformCategories = (platform: DirectoryPlatform) =>
  platform.categories ?? [platform.category];

const getPlatformSearchText = (platform: DirectoryPlatform) =>
  [
    platform.name,
    platform.category,
    getPlatformCategories(platform).join(" "),
    platform.shortDescription,
    platform.descBusiness,
    platform.descFreelancer,
    platform.longDescription,
    platform.bestFor,
    platform.expertRecommendation,
    Array.isArray(platform.features) ? platform.features.join(" ") : "",
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchTerms = useMemo(
    () => normalizedQuery.split(/\s+/).filter(Boolean),
    [normalizedQuery],
  );

  const filteredPlatforms = useMemo(
    () =>
      directoryPlatforms
        .filter((platform) => {
          if (activeCategory === "All") return true;
          return getPlatformCategories(platform).includes(activeCategory);
        })
        .filter((platform) => {
          if (searchTerms.length === 0) return true;
          const searchText = getPlatformSearchText(platform);
          return searchTerms.every((term) => searchText.includes(term));
        })
        .sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        }),
    [activeCategory, searchTerms],
  );

  const searchResults = useMemo(() => {
    if (searchTerms.length === 0) return [];

    const platformResults = directoryPlatforms.map((platform) => ({
      title: platform.name,
      type: "Tool",
      href: `/tool/${platform.id}`,
      category: platform.category,
      description:
        platform.shortDescription ??
        platform.descBusiness ??
        platform.descFreelancer,
      text: getPlatformSearchText(platform),
      priority: platform.featured ? 0 : 1,
    }));

    const comparisonResults = comparisons.map((comparison) => ({
      title: comparison.shortTitle,
      type: "Comparison",
      href: `/comparisons/${comparison.slug}`,
      category: comparison.category,
      description: comparison.description,
      text: [
        comparison.title,
        comparison.shortTitle,
        comparison.category,
        comparison.description,
        comparison.summary,
        comparison.verdict,
      ]
        .join(" ")
        .toLowerCase(),
      priority: 2,
    }));

    const categoryResults = categoryLinks.map((category) => ({
      title: category.label,
      type: "Category",
      href: category.href,
      category: "Directory",
      description: `Browse ${category.label.toLowerCase()} tools and related comparisons.`,
      text: `${category.label} ${category.href.replaceAll("-", " ")}`.toLowerCase(),
      priority: 3,
    }));

    const guideResults = guideLinks.map((guide) => ({
      title: guide.label,
      type: "Guide",
      href: guide.href,
      category: "Workflow",
      description: guide.description,
      text: `${guide.label} ${guide.href.replaceAll("-", " ")} ${guide.description}`.toLowerCase(),
      priority: 4,
    }));

    return [
      ...platformResults,
      ...comparisonResults,
      ...categoryResults,
      ...guideResults,
    ]
      .filter((result) =>
        searchTerms.every((term) => result.text.includes(term)),
      )
      .sort((a, b) => a.priority - b.priority || a.title.localeCompare(b.title))
      .slice(0, 8);
  }, [searchTerms]);

  const showSearchResults = searchTerms.length > 0;

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const categoryButtons = filterCategories.map((cat) => (
    <button
      key={cat}
      type="button"
      onClick={() => handleCategoryClick(cat)}
      className={cn(
        "text-xs px-3 py-1 rounded-full border transition-colors duration-300",
        activeCategory === cat
          ? "bg-slate-700 text-white border-slate-600 font-medium"
          : "border-slate-800/80 text-slate-400 hover:bg-slate-800/50 hover:border-slate-700 hover:text-slate-300",
      )}
    >
      {cat}
    </button>
  ));

  const allButton = (
    <button
      type="button"
      onClick={() => handleCategoryClick("All")}
      className={cn(
        "text-xs px-3 py-1 rounded-full border transition-colors duration-300",
        activeCategory === "All"
          ? "bg-slate-700 text-white border-slate-600 font-medium"
          : "border-slate-800/80 text-slate-400 hover:bg-slate-800/50 hover:border-slate-700 hover:text-slate-300",
      )}
    >
      All
    </button>
  );

  const renderCard = (
    platform: DirectoryPlatform,
    index: number,
    wrapperIndex: string | number,
  ) => {
    const Icon = platform.icon;
    return (
      <div
        key={`${platform.id}-${index}-${wrapperIndex}`}
        className={`w-[280px] min-h-[240px] h-auto shrink-0 group relative flex flex-col p-4 rounded-3xl overflow-hidden backdrop-blur-sm hover:-translate-y-1 ${platform.id === "creatify-ai" || platform.featured ? "bg-white/[0.02] border-2 border-indigo-500/70 shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] transition-all duration-300 hover:scale-[1.01]" : "bg-zinc-900/50 border border-white/5 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.1] hover:shadow-[0_0_40px_rgba(99,102,241,0.05)]"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-2">
            <div className="p-2 bg-white/[0.03] border border-white/[0.08] rounded-xl transition-all duration-300 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:text-indigo-300">
              <Icon className="w-4 h-4 text-gray-300 group-hover:text-indigo-400 transition-colors" />
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-white">
                {platform.metricBusiness ?? platform.metric}
              </span>
              <span className="text-[8px] uppercase tracking-wider text-gray-500">
                {platform.metricLabelBusiness ?? platform.metricLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-base font-semibold tracking-tight text-white">
              {platform.name}
            </h3>
            {platform.featured &&
              (platform.badgeText ? (
                <div className="ml-2 px-2 py-[2px] rounded-full bg-cyan-900/30 border border-cyan-500/40 text-[9px] font-bold tracking-widest uppercase text-cyan-400 whitespace-nowrap">
                  {platform.badgeText}
                </div>
              ) : (
                <div className="ml-2 px-2 py-[2px] rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-widest uppercase bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
                  TOP PICK
                </div>
              ))}
          </div>

          {platform.id === "creatify-ai" && (
            <div className="mb-2 px-2 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-md text-[10px] text-emerald-300 font-medium leading-snug">
              🎁 Use promo code{" "}
              <strong className="text-emerald-100 font-bold">TEAM15</strong> at
              checkout for 15% off!
            </div>
          )}

          <p className="text-gray-400 group-hover:text-white transition-colors duration-300 text-[11px] leading-tight mb-2 line-clamp-2">
            {platform.descBusiness || platform.descFreelancer}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.05] mt-auto">
          <Link
            href={`/tool/${platform.id}`}
            className="w-full relative overflow-hidden rounded-full bg-slate-800/50 hover:bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-200 hover:text-white group border border-slate-700 transition-colors flex justify-center items-center gap-2"
          >
            <span className="relative z-20">View Details</span>
            <span className="relative z-20 group-hover:translate-x-1 transition-transform">
              →
            </span>
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1300ms] delay-1000 ease-in-out z-10" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-graphite-animated text-white selection:bg-indigo-500/30 overflow-x-hidden font-sans flex flex-col justify-between items-center relative z-0">
      {/* Cinematic Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[120px] mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      {/* Floating Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <div className="flex flex-col items-center w-full z-10 pt-14 mt-0">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center max-w-4xl space-y-1 mb-1 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-medium tracking-wide uppercase mb-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
            B2BAIStack Directory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-none text-white"
          >
            Practical AI Tools for{" "}
            <span className="text-blue-600">B2B Operators</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-xs md:text-sm text-gray-400 max-w-2xl mt-1.5 mb-0"
          >
            Browse a curated directory of AI tools for automation, sales,
            support, meetings, video, and everyday B2B workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="w-full max-w-2xl pt-2"
          >
            <search className="relative flex items-center rounded-2xl border border-white/10 bg-black/35 px-4 py-2.5 text-left shadow-2xl shadow-black/30 backdrop-blur-2xl focus-within:border-indigo-400/60 focus-within:bg-black/45">
              <Search className="h-4 w-4 shrink-0 text-indigo-300" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search AI tools, workflows, or comparisons"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
                aria-label="Search AI tools, workflows, or comparisons"
              />
              {searchQuery.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="rounded-full p-1 text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </search>

            {showSearchResults && (
              <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 text-left shadow-2xl shadow-black/40 backdrop-blur-2xl">
                {searchResults.length > 0 ? (
                  <div className="grid divide-y divide-white/10">
                    {searchResults.map((result) => (
                      <Link
                        key={`${result.type}-${result.href}`}
                        href={result.href}
                        onClick={() =>
                          track("Directory Search Result Click", {
                            href: result.href,
                            query: normalizedQuery.slice(0, 80),
                            result_title: result.title,
                            result_type: result.type,
                          })
                        }
                        className="group flex items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-white/[0.04]"
                      >
                        <span className="min-w-0">
                          <span className="mb-1 flex flex-wrap items-center gap-2">
                            <span className="text-sm font-semibold text-white">
                              {result.title}
                            </span>
                            <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-indigo-200">
                              {result.type}
                            </span>
                            <span className="text-[11px] text-slate-500">
                              {result.category}
                            </span>
                          </span>
                          <span className="line-clamp-1 text-xs leading-5 text-slate-400">
                            {result.description}
                          </span>
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-600 transition-colors group-hover:text-indigo-300" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-sm text-slate-400">
                    No matches yet. Try another tool, category, or workflow.
                  </div>
                )}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-1"
          >
            {categoryButtons}
            {categoryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-indigo-200 transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            {allButton}
          </motion.div>
        </div>

        {/* Cinematic Marquee Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full overflow-hidden flex relative mt-3 mb-2 py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 left-0 w-8 md:w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-8 md:w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

          <div
            className={cn(
              "flex px-4 items-stretch pb-2 w-full",
              filteredPlatforms.length <= 4 ? "justify-center" : "w-max gap-4",
            )}
          >
            {filteredPlatforms.length <= 4 ? (
              <div className="flex gap-4 items-stretch flex-wrap justify-center w-full">
                {filteredPlatforms.map((platform, index) =>
                  renderCard(platform, index, "static"),
                )}
              </div>
            ) : (
              [0, 1].map((wrapperIndex) => (
                <div
                  key={wrapperIndex}
                  className="flex animate-marquee shrink-0 gap-4 items-stretch"
                  style={{
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {filteredPlatforms.map((platform, index) =>
                    renderCard(platform, index, wrapperIndex),
                  )}
                </div>
              ))
            )}
          </div>
        </motion.div>

        <NewsletterSignup
          compact
          source="homepage"
          className="mx-6 mb-10 mt-2 w-[calc(100%-3rem)]"
        />
      </div>
    </div>
  );
}
