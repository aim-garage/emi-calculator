export interface EmiInput {
  principal: number;
  annualRate: number;
  months: number;
}

export interface YearSummary {
  year: number;
  principal: number;
  interest: number;
  closingBalance: number;
}

export interface EmiResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
  schedule: YearSummary[];
}

export function calculateEmi({ principal, annualRate, months }: EmiInput): EmiResult {
  const monthlyRate = annualRate / 12 / 100;
  const monthlyEmi = monthlyRate === 0
    ? principal / months
    : principal * monthlyRate * (1 + monthlyRate) ** months
      / ((1 + monthlyRate) ** months - 1);
  const schedule: YearSummary[] = [];
  let balance = principal;

  for (let month = 1; month <= months; month += 1) {
    const interest = balance * monthlyRate;
    const principalPaid = Math.min(balance, monthlyEmi - interest);
    balance = Math.max(0, balance - principalPaid);
    const yearIndex = Math.floor((month - 1) / 12);

    if (!schedule[yearIndex]) {
      schedule[yearIndex] = {
        year: yearIndex + 1,
        principal: 0,
        interest: 0,
        closingBalance: 0,
      };
    }

    schedule[yearIndex].principal += principalPaid;
    schedule[yearIndex].interest += interest;
    schedule[yearIndex].closingBalance = balance;
  }

  const totalPayment = monthlyEmi * months;

  return {
    monthlyEmi,
    totalPayment,
    totalInterest: totalPayment - principal,
    schedule,
  };
}