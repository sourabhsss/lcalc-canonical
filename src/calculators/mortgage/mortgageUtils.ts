
export const mortgageFAQs = [
  {
    question: "What factors affect my mortgage payment?",
    answer: "Your mortgage payment is primarily affected by the loan amount, interest rate, and loan term. Other factors include property taxes, homeowners insurance, and possibly private mortgage insurance (PMI) if your down payment is less than 20%. Location matters too—property taxes vary significantly by region, affecting your total payment. Your credit score influences your interest rate, with higher scores typically resulting in lower rates and reduced monthly payments."
  },
  {
    question: "How does my down payment affect my mortgage?",
    answer: "Your down payment impacts your mortgage in several ways. A larger down payment reduces your loan amount, resulting in lower monthly payments and less interest paid over the life of the loan. If your down payment is at least 20% of the purchase price, you can typically avoid private mortgage insurance (PMI), which can save you hundreds of dollars monthly. Additionally, a larger down payment may help you qualify for better interest rates, as lenders consider you a lower risk when you have more equity in the home from the start."
  },
  {
    question: "What's the difference between a fixed-rate and adjustable-rate mortgage?",
    answer: "A fixed-rate mortgage maintains the same interest rate throughout the entire loan term, providing consistent, predictable monthly payments. This is the most common type, offering stability and protection from interest rate increases. An adjustable-rate mortgage (ARM) starts with a fixed rate for an initial period (typically 3, 5, 7, or 10 years), after which the rate adjusts periodically based on market indices. ARMs usually offer lower initial rates but come with the risk of payments increasing if interest rates rise. ARMs might be suitable if you plan to move or refinance before the initial fixed period ends."
  },
  {
    question: "What is PMI and can I avoid it?",
    answer: "Private Mortgage Insurance (PMI) is a type of insurance that protects the lender if you default on your loan. It's typically required when your down payment is less than 20% of the home's purchase price. You can avoid PMI by making a down payment of at least 20%, using a government-backed loan like a VA loan (for eligible veterans), or structuring your financing with a primary mortgage at 80% and a second loan (piggyback loan) for part of the remaining amount. Once you reach 20% equity in your home, you can request PMI removal. By law, lenders must automatically terminate PMI when your loan balance reaches 78% of the original purchase price."
  },
  {
    question: "How much house can I afford?",
    answer: "Financial experts typically recommend following the 28/36 rule: your monthly mortgage payment (including principal, interest, taxes, and insurance) should not exceed 28% of your gross monthly income, and your total monthly debt payments should not exceed 36% of your gross income. Another approach is the 25% rule, keeping housing costs below 25% of your take-home pay. Consider additional homeownership costs like maintenance, utilities, and HOA fees when determining affordability. Your emergency fund, job stability, and future financial goals should also factor into your decision."
  },
  {
    question: "What costs are included in closing?",
    answer: "Closing costs typically range from 2-5% of the loan amount and include lender fees (application fee, origination fee, credit report fee), third-party fees (appraisal, home inspection, title search, title insurance), prepaid expenses (property taxes, homeowners insurance premiums, mortgage interest), and potentially discount points to lower your interest rate. These costs vary by location, lender, and loan type. Some lenders offer 'no closing cost' mortgages, but these typically have higher interest rates to offset the upfront savings."
  },
  {
    question: "Should I pay points to lower my interest rate?",
    answer: "Mortgage points (or discount points) are upfront fees paid to reduce your interest rate, with each point costing 1% of your loan amount. Whether this makes financial sense depends on how long you plan to keep the mortgage. Calculate your break-even point by dividing the cost of the points by your monthly savings. If you'll keep the loan longer than this period, paying points can save money long-term. For example, if paying $3,000 in points saves you $50 monthly, your break-even is 60 months (5 years). If you plan to move or refinance before then, points may not be worth the upfront cost."
  },
  {
    question: "What's the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification is an informal, preliminary estimate of how much you might be able to borrow based on self-reported information about your income, assets, and debts. It's quick but carries less weight with sellers. Pre-approval is a more thorough process where the lender verifies your financial information, checks your credit, and issues a conditional commitment to lend up to a specific amount. Pre-approval gives you a clearer picture of your buying power and shows sellers you're a serious, qualified buyer, giving you an advantage in competitive markets."
  },
  {
    question: "How does my credit score affect my mortgage rate?",
    answer: "Your credit score significantly impacts your mortgage interest rate. Lenders use credit scores to assess risk, with higher scores resulting in lower rates. According to FICO data, the difference between a 620 score and a 760+ score can be more than 1.5 percentage points. On a $300,000 30-year fixed mortgage, this difference could amount to over $100,000 in interest over the life of the loan. Even a 20-point improvement in your score can sometimes drop your rate enough to save thousands. Before applying for a mortgage, it's worth checking your credit report, correcting any errors, and taking steps to improve your score."
  },
  {
    question: "What is mortgage amortization?",
    answer: "Mortgage amortization is the process of paying off your loan through regular payments that include both principal and interest over time. In the early years of your mortgage, a larger portion of each payment goes toward interest, with a smaller amount reducing the principal. As you progress through the loan term, this gradually shifts, with more of each payment going toward principal reduction. This is why you build equity slowly at first, then faster later in the loan. An amortization schedule shows exactly how each payment is split between principal and interest throughout the life of your loan, allowing you to see your balance at any point in time."
  },
  {
    question: "When should I refinance my mortgage?",
    answer: "Refinancing typically makes sense when you can lower your interest rate by at least 0.75-1 percentage point, though even smaller reductions can be worthwhile for larger loans. Other good reasons to refinance include switching from an adjustable-rate to a fixed-rate mortgage for more payment stability, shortening your loan term to pay off your home faster, or tapping home equity for major expenses. Consider the closing costs (typically 2-5% of the loan amount) and calculate your break-even point by dividing these costs by your monthly savings. Refinancing is generally most beneficial if you plan to stay in your home beyond this break-even point."
  }
];

// Calculate monthly mortgage payment
export const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  termInYears: number
): number => {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = termInYears * 12;
  
  // Prevent division by zero or negative rates
  if (monthlyRate <= 0) {
    return principal / numberOfPayments;
  }
  
  // Calculate payment using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
};

// Calculate total interest paid over the loan term
export const calculateTotalInterest = (
  principal: number,
  monthlyPayment: number,
  termInYears: number
): number => {
  return (monthlyPayment * termInYears * 12) - principal;
};

// Calculate how much of a home you can afford based on income and existing debt
export const calculateAffordability = (
  monthlyIncome: number,
  monthlyDebt: number,
  interestRate: number,
  downPaymentPercent: number,
  termInYears: number,
  propertyTaxRate: number = 1.5,
  insuranceRate: number = 0.5,
  pmiRate: number = 0.5
): number => {
  // Maximum housing payment based on 28% rule
  const maxPaymentFromIncome = monthlyIncome * 0.28;
  
  // Maximum total debt payment based on 36% rule
  const maxTotalDebt = monthlyIncome * 0.36;
  
  // Maximum housing payment based on existing debt
  const maxPaymentFromDebt = maxTotalDebt - monthlyDebt;
  
  // Use the lower of the two maximum payments
  const maxHousingPayment = Math.min(maxPaymentFromIncome, maxPaymentFromDebt);
  
  // Estimate monthly costs per $100,000 of home value
  const monthlyRatePerHundredK = interestRate / 100 / 12;
  const paymentsPerHundredK = termInYears * 12;
  const loanAmountPerHundredK = 100000 * (1 - (downPaymentPercent / 100));
  
  // Principal and interest per $100,000 of home value
  const piPaymentPerHundredK = (loanAmountPerHundredK * monthlyRatePerHundredK * 
    Math.pow(1 + monthlyRatePerHundredK, paymentsPerHundredK)) / 
    (Math.pow(1 + monthlyRatePerHundredK, paymentsPerHundredK) - 1);
  
  // Property tax per $100,000 of home value
  const taxPaymentPerHundredK = (100000 * propertyTaxRate / 100) / 12;
  
  // Insurance per $100,000 of home value
  const insurancePaymentPerHundredK = (100000 * insuranceRate / 100) / 12;
  
  // PMI per $100,000 of home value (if down payment < 20%)
  const pmiPaymentPerHundredK = downPaymentPercent < 20 ? 
    (loanAmountPerHundredK * pmiRate / 100) / 12 : 0;
  
  // Total payment per $100,000 of home value
  const totalPaymentPerHundredK = piPaymentPerHundredK + taxPaymentPerHundredK + 
    insurancePaymentPerHundredK + pmiPaymentPerHundredK;
  
  // Maximum home value based on maximum housing payment
  const maxHomeValue = (maxHousingPayment / totalPaymentPerHundredK) * 100000;
  
  return Math.round(maxHomeValue);
};
