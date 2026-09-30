import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how ClearEMI helps users estimate loan EMI, interest, and repayment timelines with a simple, transparent calculator.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <InfoPage title="About ClearEMI" intro="A practical calculator to help make loan costs easier to understand.">
      <h2>Clarity before commitment</h2>
      <p>ClearEMI helps you estimate a monthly loan payment, the total interest over the loan term, and how the outstanding balance changes year by year.</p>
      <h2>How the calculator works</h2>
      <p>The estimate uses the reducing-balance EMI formula and the values you enter. It runs in your browser; it is not connected to a lender and does not make loan decisions.</p>
      <h2>Our scope</h2>
      <p>This is an informational tool, not a financial advisory service. Always confirm rates, fees, and repayment terms directly with your lender.</p>
    </InfoPage>
  );
}