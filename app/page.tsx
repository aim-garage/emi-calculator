import type { Metadata } from "next";
import { CalculatorPage } from "@/components/CalculatorPage";

export const metadata: Metadata = {
  title: "EMI Calculator",
  description:
    "Calculate monthly EMI, total interest, and repayment schedule for loans with this free EMI calculator. Compare principal, rate, and tenure in seconds.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EMI Calculator | ClearEMI",
    description:
      "Calculate monthly EMI, total interest, and repayment schedules for home, personal, and vehicle loans with ClearEMI.",
    url: "https://aim-garage.github.io/emi-calculator/",
  },
};

export default function Home() {
  return <CalculatorPage />;
}