import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ClearEMI",
    short_name: "ClearEMI",
    description:
      "Free EMI calculator to estimate loan repayments, interest, and repayment schedules.",
    start_url: "/emi-calculator/",
    scope: "/emi-calculator/",
    display: "standalone",
    background_color: "#f4f5f1",
    theme_color: "#164c3e",
    orientation: "portrait",
    lang: "en-IN",
    icons: [
      {
        src: "/emi-calculator/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/emi-calculator/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
