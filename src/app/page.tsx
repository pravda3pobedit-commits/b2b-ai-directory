import type { Metadata } from "next";
import HomeDirectory from "@/components/HomeDirectory";

const SITE_DESCRIPTION =
  "Curated AI tools for B2B teams, with practical categories, honest recommendations, and comparison-focused pages.";

export const metadata: Metadata = {
  title: "B2BAIStack | Practical AI Tools for B2B Teams",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "B2BAIStack | Practical AI Tools for B2B Teams",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "B2BAIStack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "B2BAIStack | Practical AI Tools for B2B Teams",
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return <HomeDirectory />;
}
