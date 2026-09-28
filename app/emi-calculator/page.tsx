import type { Metadata } from "next";
import { CalculatorPage } from "@/components/CalculatorPage";

export const metadata: Metadata = {
  title: "EMI Calculator | ClearEMI",
  description: "Estimate your monthly loan EMI, total interest, and repayment schedule with the free ClearEMI calculator.",
};

export default function EmiCalculatorPage() {
  return <CalculatorPage />;
}