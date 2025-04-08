
export const mortgageRecastFAQs = [
  {
    question: "What is mortgage recasting?",
    answer: "Mortgage recasting (also called loan re-amortization) is a process where you make a large lump-sum payment toward your mortgage's principal balance, and then your lender recalculates your monthly payments based on the new, lower balance while keeping the original interest rate and loan term the same. Unlike refinancing, recasting doesn't change your interest rate or restart your loan term."
  },
  {
    question: "How is recasting different from refinancing?",
    answer: "Refinancing replaces your current mortgage with a new loan, potentially with a different interest rate, term length, and even loan type. It involves a complete credit check, appraisal, and closing costs. Recasting, on the other hand, keeps your existing mortgage but recalculates your payments after a lump sum payment. Recasting is typically much less expensive, has minimal paperwork, and doesn't require a credit check or appraisal."
  },
  {
    question: "What are the benefits of mortgage recasting?",
    answer: "The main benefits of recasting include: lower monthly mortgage payments, potential savings on total interest paid over the life of the loan, no need for a credit check or appraisal, significantly lower fees compared to refinancing (typically $250-$500), keeping your existing interest rate (beneficial if rates have increased), and maintaining your original loan maturity date."
  },
  {
    question: "What types of mortgages can be recast?",
    answer: "Conventional loans backed by Fannie Mae or Freddie Mac can typically be recast. Most lenders who service jumbo loans also offer recasting. However, government-backed loans such as FHA, VA, and USDA loans generally cannot be recast. It's important to check with your specific lender to confirm if they offer recasting for your type of mortgage."
  },
  {
    question: "How much do I need to pay to recast my mortgage?",
    answer: "Most lenders require a minimum lump sum payment of $5,000 to $10,000 for a recast, though this amount varies by lender. Some lenders may also require that the payment represent a certain percentage (such as 10%) of your remaining balance. Additionally, there's usually a processing fee for recasting, typically between $250 and $500."
  },
  {
    question: "When is recasting a good idea?",
    answer: "Recasting is often beneficial if: you've come into a large sum of money (inheritance, bonus, etc.) that you want to put toward your mortgage; current interest rates are higher than your existing rate (making refinancing less attractive); you want to lower your monthly payments without extending your loan term; or you recently bought a new home before selling your previous one and now want to apply the proceeds from your old home sale to your new mortgage."
  },
  {
    question: "Can I recast my mortgage multiple times?",
    answer: "Yes, most lenders allow multiple recasts on the same mortgage. However, each recast will incur a fee, and you'll need to meet the minimum lump sum payment requirement each time. Some lenders may also limit the frequency of recasts, such as allowing only one recast per year."
  },
  {
    question: "Will recasting affect my credit score?",
    answer: "No, recasting doesn't impact your credit score since it doesn't involve a new credit inquiry or application. It simply modifies your existing loan, which already appears on your credit report. This is another advantage compared to refinancing, which does require a credit check."
  },
  {
    question: "How long does the recast process take?",
    answer: "The mortgage recast process is typically much faster than refinancing. After submitting your request and making the lump sum payment, the recast can usually be completed within 30-45 days. The exact timeline depends on your lender's procedures and processing times."
  },
  {
    question: "Are there any drawbacks to recasting?",
    answer: "While recasting has many benefits, potential drawbacks include: the requirement for a substantial lump sum payment upfront; possibly losing some liquidity that could be used for other investments; not being able to change your interest rate (if rates have dropped significantly); and not all loan types being eligible. Additionally, if you're close to paying off your mortgage, the recast fee might outweigh the benefits."
  }
];

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
