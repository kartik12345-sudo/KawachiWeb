import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
  // Only set these for GitHub Pages deployment
  ...(isProd &&
    isGithubActions && {
      assetPrefix: "/KawachiWeb",
      basePath: "/KawachiWeb",
    }),
};

export default nextConfig;
