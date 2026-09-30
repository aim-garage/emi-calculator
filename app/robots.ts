import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aim-garage.github.io/emi-calculator/sitemap.xml",
    host: "https://aim-garage.github.io/emi-calculator",
  };
}
