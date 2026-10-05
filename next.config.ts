import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves this project under its repository name.
  output: "export",
  trailingSlash: true,
  ...(process.env.GITHUB_PAGES === "true"
    ? { basePath: "/Astraliva_website_v1" }
    : {}),
  images: { unoptimized: true },
};

export default nextConfig;
