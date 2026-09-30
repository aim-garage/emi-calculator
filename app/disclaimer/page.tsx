import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Financial Disclaimer",
  description:
    "Understand the limits of the ClearEMI loan estimator and why lender-specific fees, rates, and terms may differ from the estimate.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <InfoPage title="Financial disclaimer" intro="Use the estimate as a guide, not a guarantee.">
      <h2>Not financial advice</h2>
      <p>The information and calculations on ClearEMI are provided for educational and planning purposes only. They are not financial, legal, tax, or lending advice.</p>
      <h2>Estimates can differ</h2>
      <p>Actual instalments and total costs depend on lender-specific terms, fees, payment timing, rate changes, and rounding. Confirm the complete repayment schedule with your lender before borrowing.</p>
      <h2>Your decision</h2>
      <p>You are responsible for evaluating whether a loan is suitable for your circumstances. Consider seeking independent professional advice where appropriate.</p>
    </InfoPage>
  );
}