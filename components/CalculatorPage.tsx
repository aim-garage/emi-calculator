import Link from "next/link";
import { EmiCalculator } from "@/components/EmiCalculator";

export function CalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ClearEMI",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "Free EMI calculator to estimate monthly repayments, total interest, and loan repayment schedules for home, personal, and vehicle loans.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    featureList: [
      "Loan EMI calculation",
      "Interest estimate",
      "Repayment schedule",
      "Principal versus tenure comparison",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="page-container">
        <section className="page-intro">
        <div className="intro-copy">
          <span className="eyebrow">BORROW WITH CLARITY</span>
          <h1>EMI calculator</h1>
          <p>See your monthly payment, total interest, and repayment timeline before you choose a loan.</p>
        </div>
        <div className="intro-aside"><span className="aside-mark">01</span><span>Free to use<br />No sign-up needed</span></div>
      </section>

      <EmiCalculator />

      <section className="explainer-section">
        <div className="section-kicker">THE METHOD</div>
        <div className="explainer-copy">
          <h2>How is EMI calculated?</h2>
          <p>For a reducing-balance loan, each payment covers that month’s interest first; the remainder reduces your principal. As the balance falls, the interest portion of each payment also falls.</p>
          <div className="formula-box">
            <span className="formula-label">MONTHLY EMI</span>
            <span className="formula">P × r × (1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)</span>
            <span className="formula-note">P = loan amount · r = monthly rate · n = number of monthly payments</span>
          </div>
          <p>For a zero-interest loan, the estimate is simply the principal divided by the number of months. Your lender’s fees, rate type, and rounding rules may change the final amount.</p>
        </div>
      </section>

      <section className="related-section">
        <div><span className="eyebrow">ABOUT THIS TOOL</span><h2>Clear numbers for a big decision.</h2></div>
        <p>ClearEMI is a simple starting point for understanding loan repayments. The calculation runs in your browser and is intended for estimates, not as a loan offer.</p>
        <Link href="/disclaimer" className="text-link">Read the financial disclaimer <span aria-hidden="true">↗</span></Link>
      </section>
      </div>
    </>
  );
}