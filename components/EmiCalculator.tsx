"use client";

import { useState } from "react";
import { calculateEmi } from "@/lib/emi";

const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatCurrency(value: number) {
  return currency.format(value);
}

export function EmiCalculator() {
  const [principal, setPrincipal] = useState(1_000_000);
  const [annualRate, setAnnualRate] = useState(8.5);
  const [months, setMonths] = useState(240);
  const result = calculateEmi({ principal, annualRate, months });
  const interestShare = result.totalInterest / result.totalPayment * 100;

  return (
    <section className="calculator" aria-label="EMI calculator">
      <div className="calculator-grid">
        <div className="input-panel">
          <div className="panel-heading">
            <span className="eyebrow">Your loan details</span>
            <span className="step-count">01 <span>/ 03</span></span>
          </div>

          <div className="field-group">
            <div className="field-label-row">
              <label htmlFor="principal">Loan amount</label>
              <span className="field-unit">INR</span>
            </div>
            <div className="number-field">
              <span aria-hidden="true">₹</span>
              <input id="principal" type="number" min="10000" max="50000000" step="10000" value={principal}
                onChange={(event) => setPrincipal(Math.min(50_000_000, Math.max(10_000, Number(event.target.value) || 10_000)))} />
            </div>
            <input className="range-input" type="range" aria-label="Adjust loan amount" min="10000" max="50000000" step="10000" value={principal}
              onChange={(event) => setPrincipal(Number(event.target.value))} />
            <div className="range-labels"><span>₹10,000</span><span>₹5 Cr</span></div>
          </div>

          <div className="field-group">
            <div className="field-label-row">
              <label htmlFor="rate">Interest rate</label>
              <span className="field-unit">PER YEAR</span>
            </div>
            <div className="number-field suffix-field">
              <input id="rate" type="number" min="0" max="30" step="0.05" value={annualRate}
                onChange={(event) => setAnnualRate(Math.min(30, Math.max(0, Number(event.target.value) || 0)))} />
              <span aria-hidden="true">%</span>
            </div>
            <input className="range-input" type="range" aria-label="Adjust annual interest rate" min="0" max="30" step="0.05" value={annualRate}
              onChange={(event) => setAnnualRate(Number(event.target.value))} />
            <div className="range-labels"><span>0%</span><span>30%</span></div>
          </div>

          <div className="field-group tenure-group">
            <div className="field-label-row">
              <label htmlFor="tenure">Loan tenure</label>
              <span className="field-unit">MONTHS</span>
            </div>
            <div className="number-field suffix-field">
              <input id="tenure" type="number" min="1" max="360" step="1" value={months}
                onChange={(event) => setMonths(Math.min(360, Math.max(1, Number(event.target.value) || 1)))} />
              <span>mo</span>
            </div>
            <input className="range-input" type="range" aria-label="Adjust loan tenure" min="1" max="360" step="1" value={months}
              onChange={(event) => setMonths(Number(event.target.value))} />
            <div className="range-labels"><span>1 month</span><span>30 years</span></div>
          </div>

          <p className="input-footnote">Change any value to update your estimate instantly.</p>
        </div>

        <div className="result-panel" aria-live="polite">
          <div className="result-topline">
            <span className="eyebrow">Estimated monthly payment</span>
            <span className="result-indicator"><span /> LIVE ESTIMATE</span>
          </div>
          <p className="emi-amount">{formatCurrency(result.monthlyEmi)}</p>
          <p className="result-caption">for {Math.floor(months / 12)} years{months % 12 ? `, ${months % 12} months` : ""}</p>

          <div className="result-divider" />
          <div className="result-breakdown">
            <div><span>Principal amount</span><strong>{formatCurrency(principal)}</strong></div>
            <div><span>Total interest</span><strong>{formatCurrency(result.totalInterest)}</strong></div>
            <div className="total-row"><span>Total repayment</span><strong>{formatCurrency(result.totalPayment)}</strong></div>
          </div>

          <div className="composition">
            <div className="composition-heading"><span>Repayment mix</span><span>{Math.round(interestShare)}% interest</span></div>
            <div className="composition-bar" role="img" aria-label={`${Math.round(100 - interestShare)} percent principal and ${Math.round(interestShare)} percent interest`}>
              <span style={{ width: `${100 - interestShare}%` }} />
            </div>
            <div className="composition-legend">
              <span><i className="legend-principal" /> Principal</span>
              <span><i className="legend-interest" /> Interest</span>
            </div>
          </div>
        </div>
      </div>

      <div className="schedule-section">
        <div className="schedule-heading">
          <div><span className="eyebrow">Repayment over time</span><h2>Yearly breakdown</h2></div>
          <span className="schedule-note">Estimated figures</span>
        </div>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Year</th><th>Principal paid</th><th>Interest paid</th><th>Balance</th></tr></thead>
            <tbody>
              {result.schedule.map((year) => (
                <tr key={year.year}>
                  <th scope="row">{String(year.year).padStart(2, "0")}</th>
                  <td>{formatCurrency(year.principal)}</td>
                  <td>{formatCurrency(year.interest)}</td>
                  <td>{formatCurrency(year.closingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}