import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath: "/emi-calculator",
  basePath: isProd ? "/emi-calculator" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
