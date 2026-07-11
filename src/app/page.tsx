import type { Metadata } from "next";
import HomeDirectory from "@/components/HomeDirectory";

const SITE_DESCRIPTION =
  "A practical B2B AI tools directory with comparison pages for sales prospecting, customer support, workflow automation, meeting intelligence, and video workflows.";
const SITE_TITLE = "B2B AI Tools Directory & Comparisons | B2BAIStack";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "B2BAIStack",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return <HomeDirectory />;
}
