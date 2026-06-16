import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/blog/:path*",
        destination: "/comparisons",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      // Notion hosted files (external cover images)
      { protocol: "https", hostname: "prod.files.statics.notion.com" },
      { protocol: "https", hostname: "*.notion.so" },
      // Notion S3 file uploads
      { protocol: "https", hostname: "s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "s3-us-west-2.amazonaws.com" },
      // General https images (for external URLs stored in Notion)
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
