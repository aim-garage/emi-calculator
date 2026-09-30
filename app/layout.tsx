import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clearemi.com"),
  applicationName: "ClearEMI",
  title: {
    default: "ClearEMI | Free Loan EMI Calculator",
    template: "%s | ClearEMI",
  },
  description:
    "Calculate monthly EMI, total interest, and repayment schedules with ClearEMI. A fast, free loan EMI calculator for loans and mortgages.",
  keywords: [
    "EMI calculator",
    "loan EMI calculator",
    "monthly EMI calculator",
    "home loan EMI calculator",
    "personal loan calculator",
    "car loan calculator",
    "loan repayment calculator",
    "interest calculator",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ClearEMI | Free Loan EMI Calculator",
    description:
      "Estimate your monthly EMI, total interest, and repayment schedule with a clear, free calculator built for fast loan planning.",
    url: "https://www.clearemi.com/",
    siteName: "ClearEMI",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearEMI | Free Loan EMI Calculator",
    description:
      "Estimate your monthly EMI, total interest, and repayment schedule with a clear, free calculator built for fast loan planning.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
