// next.config.ts
import type { NextConfig } from "next";

// ⬇️ set this to your repo name on GitHub (no spaces)
const repo = "day-zero-journal-nextjs-";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // put static site into /out
  images: { unoptimized: true },  // next/image needs a server; disable optimization
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
