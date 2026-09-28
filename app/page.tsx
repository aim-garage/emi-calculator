import type { Metadata } from "next";
import { CalculatorPage } from "@/components/CalculatorPage";

export const metadata: Metadata = {
  title: "EMI Calculator – Calculate Loan EMI & Interest | ClearEMI",
  description: "Calculate your monthly loan EMI, total interest, and repayment schedule with this free EMI calculator.",
};

export default function Home() {
  return <CalculatorPage />;
}