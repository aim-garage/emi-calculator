import type { Metadata } from "next";
import { CalculatorPage } from "@/components/CalculatorPage";

export const metadata: Metadata = {
  title: "Loan EMI Calculator",
  description:
    "Estimate your monthly loan EMI, total interest, and repayment schedule with the free ClearEMI calculator for personal, home, or car loans.",
  alternates: {
    canonical: "/emi-calculator",
  },
  openGraph: {
    title: "Loan EMI Calculator | ClearEMI",
    description:
      "Estimate monthly instalments, total interest, and the full repayment timeline for your next loan with ClearEMI.",
    url: "https://aim-garage.github.io/emi-calculator/emi-calculator",
  },
};

export default function EmiCalculatorPage() {
  return <CalculatorPage />;
}