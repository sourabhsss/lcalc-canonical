
/**
 * Utility functions for pay raise calculations
 */

export interface PayRaiseResult {
  newSalary: number;
  raiseAmount: number;
  percentageIncrease: number;
  monthlySalaryBefore: number;
  monthlySalaryAfter: number;
  taxImpactEstimate: number | null;
  inflationAdjustedValue: number | null;
}

export interface TaxBracket {
  min: number;
  max: number | null;
  rate: number;
}

// Sample tax brackets (US Federal - 2023)
// These are simplified for demonstration purposes
export const usTaxBrackets: TaxBracket[] = [
  { min: 0, max: 11000, rate: 0.10 },
  { min: 11001, max: 44725, rate: 0.12 },
  { min: 44726, max: 95375, rate: 0.22 },
  { min: 95376, max: 182100, rate: 0.24 },
  { min: 182101, max: 231250, rate: 0.32 },
  { min: 231251, max: 578125, rate: 0.35 },
  { min: 578126, max: null, rate: 0.37 }
];

/**
 * Calculate results for a pay raise
 */
export const calculatePayRaise = (
  currentSalary: number,
  raiseType: 'percentage' | 'amount',
  raiseValue: number,
  includeInflation: boolean = false,
  inflationRate: number = 0,
  includeTaxImpact: boolean = false,
  payPeriod: 'annual' | 'monthly' | 'hourly' = 'annual',
  hoursPerWeek: number = 40
): PayRaiseResult => {
  // Normalize to annual if needed
  let annualCurrentSalary = currentSalary;
  if (payPeriod === 'monthly') {
    annualCurrentSalary = currentSalary * 12;
  } else if (payPeriod === 'hourly') {
    annualCurrentSalary = currentSalary * hoursPerWeek * 52;
  }

  let newSalary: number;
  let raiseAmount: number;

  if (raiseType === 'percentage') {
    // Calculate new salary based on percentage increase
    newSalary = annualCurrentSalary * (1 + raiseValue / 100);
    raiseAmount = newSalary - annualCurrentSalary;
  } else {
    // Calculate new salary based on flat amount
    newSalary = annualCurrentSalary + raiseValue;
    raiseAmount = raiseValue;
  }

  // Calculate inflation-adjusted values if requested
  let inflationAdjustedValue: number | null = null;
  if (includeInflation && inflationRate > 0) {
    // Calculate the "real" value of the raise after inflation
    inflationAdjustedValue = newSalary / (1 + inflationRate / 100);
  }

  // Calculate tax impact if requested
  let taxImpactEstimate: number | null = null;
  if (includeTaxImpact) {
    const taxBeforeRaise = estimateTax(annualCurrentSalary, usTaxBrackets);
    const taxAfterRaise = estimateTax(newSalary, usTaxBrackets);
    taxImpactEstimate = taxAfterRaise - taxBeforeRaise;
  }

  // Calculate monthly values
  const monthlySalaryBefore = annualCurrentSalary / 12;
  const monthlySalaryAfter = newSalary / 12;

  // Calculate percentage increase
  const percentageIncrease = (raiseAmount / annualCurrentSalary) * 100;

  return {
    newSalary,
    raiseAmount,
    percentageIncrease,
    monthlySalaryBefore,
    monthlySalaryAfter,
    taxImpactEstimate,
    inflationAdjustedValue
  };
};

/**
 * Estimate tax based on provided tax brackets
 */
export const estimateTax = (income: number, brackets: TaxBracket[]): number => {
  let tax = 0;
  let remainingIncome = income;

  // Sort brackets by min value to ensure correct calculation
  const sortedBrackets = [...brackets].sort((a, b) => a.min - b.min);

  for (let i = 0; i < sortedBrackets.length; i++) {
    const bracket = sortedBrackets[i];
    const nextBracket = sortedBrackets[i + 1];

    if (remainingIncome <= 0) break;

    // Calculate the income that falls within this bracket
    const incomeInBracket = bracket.max === null
      ? remainingIncome
      : Math.min(remainingIncome, bracket.max - bracket.min + 1);

    // Add tax for this bracket
    tax += incomeInBracket * bracket.rate;

    // Reduce remaining income
    remainingIncome -= incomeInBracket;

    // If we have processed all the income, break
    if (nextBracket && remainingIncome <= 0) break;
  }

  return tax;
};

/**
 * Format currency value
 */
export const formatCurrency = (value: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

/**
 * Format percentage value
 */
export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
};

/**
 * FAQs for the Pay Raise Calculator
 */
export const payRaiseFaqs = [
  {
    question: "How do I calculate a percentage salary increase?",
    answer: "To calculate a percentage salary increase, multiply your current salary by the percentage increase (as a decimal). For example, for a 5% raise on a $50,000 salary, you would calculate $50,000 × 0.05 = $2,500. Add this to your current salary to get your new salary: $50,000 + $2,500 = $52,500."
  },
  {
    question: "How much is a 3% raise on a $60,000 salary?",
    answer: "A 3% raise on a $60,000 salary is $1,800 ($60,000 × 0.03). This would increase the annual salary to $61,800. The monthly increase would be $150 ($1,800 ÷ 12)."
  },
  {
    question: "Is a 5% raise good in 2023?",
    answer: "The value of a 5% raise depends on current economic conditions. With recent inflation rates in many countries exceeding 5%, a 5% raise might just keep pace with or slightly lag behind the rising cost of living. However, the average salary increase in 2023 is projected to be around 4.1% in the US, so 5% is above average. Consider your industry standards, job performance, and local cost of living when evaluating if a raise is good."
  },
  {
    question: "How do I convert my annual salary to an hourly rate?",
    answer: "To convert an annual salary to an hourly rate, divide your annual salary by the number of working hours in a year. Assuming a 40-hour workweek and 52 weeks per year (2,080 hours total), divide your annual salary by 2,080. For example, a $60,000 annual salary would be approximately $28.85 per hour ($60,000 ÷ 2,080)."
  },
  {
    question: "How does inflation affect my salary increase?",
    answer: "Inflation reduces the purchasing power of your salary over time. If your salary increase is less than the inflation rate, your 'real' income (purchasing power) actually decreases. For example, if you receive a 3% raise but inflation is 5%, you've effectively taken a 2% pay cut in terms of what your money can buy. Our calculator can factor in inflation to show you the real value of your raise."
  },
  {
    question: "Should I ask for a percentage raise or a specific dollar amount?",
    answer: "This depends on your situation. Percentage raises are standard in many companies and make it easier to compare to industry averages (typically 3-5%). However, asking for a specific dollar amount can be more effective if you've researched salary benchmarks for your role and have a specific target in mind. A dollar amount can also be clearer when negotiating and might be easier for your employer to evaluate against their budget."
  },
  {
    question: "How will taxes affect my pay raise?",
    answer: "A pay raise might push some of your income into a higher tax bracket, but only the income that falls within that bracket will be taxed at the higher rate (not your entire income). This is called a marginal tax rate system. Our calculator provides an estimate of this tax impact, though exact tax implications will depend on your personal situation, deductions, and local tax laws."
  },
  {
    question: "How often should I expect a salary increase?",
    answer: "Most companies conduct annual performance reviews with potential salary adjustments. However, this varies by industry, company size, and economic conditions. Some organizations offer bi-annual reviews or increases tied to specific achievements or milestones. If you've taken on significant new responsibilities or your job market value has increased, you might consider requesting a raise outside the standard review cycle."
  }
];

