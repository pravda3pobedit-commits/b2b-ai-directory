import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const BASE_URL = "https://www.b2baistack.com";
const SITE_NAME = "B2BAIStack";
const SITE_DESCRIPTION =
  "Curated AI tools for B2B teams, with practical categories, honest recommendations, and comparison-focused pages.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: SITE_NAME,
  title: `${SITE_NAME} | Practical AI Tools for B2B Teams`,
  description: SITE_DESCRIPTION,
  other: { "impact-site-verification": "b96e3adc-b8c2-43b0-8ed1-8c4c844a3c7a" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE_NAME,
      url: BASE_URL,
      description: SITE_DESCRIPTION,
      knowsAbout: [
        "B2B AI tools",
        "AI sales prospecting tools",
        "AI video generators",
        "AI ad generators",
        "AI meeting assistants",
        "AI workflow automation",
        "AI customer support tools",
        "B2B software comparisons",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: SITE_NAME,
      alternateName: "B2B AI Stack",
      url: BASE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      about: [
        "B2B AI tools",
        "AI tool comparisons",
        "AI sales prospecting",
        "AI video and ad workflows",
        "AI workflow automation",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD is serialized locally and escapes "<".
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-W8FP7FW13K" />
      </body>
    </html>
  );
}
