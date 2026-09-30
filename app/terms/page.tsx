import type { Metadata } from "next";
import { InfoPage } from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the ClearEMI terms of use for using the EMI calculator and understanding the limits of this financial estimate tool.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <InfoPage title="Terms of use" intro="A few important limits on using this estimate.">
      <h2>Informational use</h2>
      <p>ClearEMI provides estimates for general information and planning. Using the calculator does not create a financial advisory relationship or a loan offer.</p>
      <h2>Check with your lender</h2>
      <p>Results depend on the values entered and the assumptions of a fixed rate and regular monthly payments. Your lender may calculate payments differently or include charges not represented here.</p>
      <h2>Use of the site</h2>
      <p>Do not rely on this estimate as the sole basis for a financial decision. Verify all figures and terms with the relevant lender or a qualified professional.</p>
    </InfoPage>
  );
}