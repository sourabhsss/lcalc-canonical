
// FAQ items for the Reverse Mortgage Calculator
export const reverseMortgageFAQs = [
  {
    question: "What is a reverse mortgage?",
    answer: "A reverse mortgage is a loan available to homeowners aged 62 and older that allows them to convert part of their home equity into cash, a fixed monthly payment, or a line of credit. Unlike a traditional mortgage where you make payments to the lender, in a reverse mortgage, the lender pays you. The loan is repaid when the borrower no longer lives in the home as their primary residence."
  },
  {
    question: "Who qualifies for a reverse mortgage?",
    answer: "To qualify for a reverse mortgage, you must: be at least 62 years old; own your home outright or have a low mortgage balance that can be paid off with the reverse mortgage proceeds; live in the home as your primary residence; not be delinquent on any federal debt; have financial resources to pay ongoing property charges including taxes, insurance, HOA fees, etc.; and participate in a HUD-approved counseling session if applying for a HECM."
  },
  {
    question: "How much can I borrow with a reverse mortgage?",
    answer: "The amount you can borrow depends on several factors: your age (or the age of the youngest borrower or eligible non-borrowing spouse); current interest rates; the appraised value of your home; the HECM FHA mortgage limit ($1,089,300 in 2023); and the type of reverse mortgage you select. Generally, the older you are, the more valuable your home, and the lower the interest rate, the more you can borrow."
  },
  {
    question: "What are the different payment options for a reverse mortgage?",
    answer: "Reverse mortgages offer several payment options: Lump Sum (one-time payment at a fixed interest rate); Tenure (equal monthly payments as long as at least one borrower lives in the home); Term (equal monthly payments for a fixed period); Line of Credit (draw funds as needed, with unused portions growing over time); or a combination of these options."
  },
  {
    question: "What are the costs associated with a reverse mortgage?",
    answer: "Reverse mortgages include several costs: Mortgage Insurance Premiums (2% upfront and 0.5% annual for HECMs); Origination Fee (up to $6,000 depending on home value); Closing Costs (appraisal, title search, inspections, etc.); Servicing Fees (monthly fees some lenders charge); and Interest (accrues over the life of the loan). These costs are typically financed as part of the loan, so you don't pay them out of pocket."
  },
  {
    question: "Do I still own my home with a reverse mortgage?",
    answer: "Yes, you retain ownership and title to your home with a reverse mortgage. However, the lender places a lien on the property, and the loan must be repaid when the last borrower moves out, sells the home, or passes away. You are still responsible for property taxes, homeowners insurance, and maintenance."
  },
  {
    question: "When does a reverse mortgage need to be repaid?",
    answer: "A reverse mortgage becomes due and payable when: the last surviving borrower passes away; the home is sold or transferred; the borrower no longer uses the home as their primary residence for more than 12 consecutive months (such as moving to a nursing home); the borrower fails to meet the obligations of the mortgage, such as paying property taxes, insurance, or maintaining the property."
  },
  {
    question: "How does a reverse mortgage affect my heirs?",
    answer: "When the loan becomes due after the last borrower passes away, heirs have several options: repay the loan and keep the house; sell the house to pay off the loan (keeping any excess proceeds); provide a deed in lieu of foreclosure; or allow foreclosure. Since reverse mortgages are non-recourse loans, neither you nor your heirs will owe more than the home's value, even if the loan balance exceeds it."
  },
  {
    question: "Will a reverse mortgage affect my Social Security or Medicare benefits?",
    answer: "Reverse mortgage proceeds generally do not affect Social Security or Medicare benefits, as these are not means-tested programs. However, need-based benefits like Medicaid or Supplemental Security Income (SSI) could be affected if you have excess cash from a reverse mortgage at the end of the month. It's recommended to consult with a financial advisor or benefits specialist if you receive such benefits."
  },
  {
    question: "What happens if my home value decreases after getting a reverse mortgage?",
    answer: "Reverse mortgages are non-recourse loans, meaning you or your heirs will never owe more than the home is worth when the loan is repaid. If your home value decreases and the loan balance exceeds the home's value, FHA insurance covers the difference for HECM loans. This protection ensures that you can still receive your full loan payments even if property values decline."
  },
  {
    question: "Can I pay off a reverse mortgage early?",
    answer: "Yes, you can pay off a reverse mortgage at any time without penalty. You can make payments toward the loan balance, interest, or both during the life of the loan. Some borrowers choose to make payments to preserve more equity in their homes for their heirs or for their own future needs."
  },
  {
    question: "Are there alternatives to a reverse mortgage?",
    answer: "Yes, alternatives include: selling your home and downsizing; getting a home equity loan or line of credit (requires monthly payments); refinancing your existing mortgage at a lower rate; seeking government assistance programs for seniors; borrowing from family members; or exploring other retirement income strategies. Each option has its own advantages and disadvantages depending on your specific situation."
  }
];

// Helper function to calculate approximate reverse mortgage amounts
export const calculateReverseMortgage = (
  homeValue: number,
  age: number,
  mortgageBalance: number,
  interestRate: number
): {
  maxLoanAmount: number;
  availableFunds: number;
  estimatedFees: number;
} => {
  // Principal Limit Factor (PLF) - simplified approximation
  let plf = 0.4; // Base PLF
  
  // Adjust PLF based on age (higher age = higher PLF)
  if (age >= 62 && age < 70) {
    plf = 0.4;
  } else if (age >= 70 && age < 80) {
    plf = 0.5;
  } else if (age >= 80 && age < 90) {
    plf = 0.6;
  } else if (age >= 90) {
    plf = 0.7;
  }
  
  // Adjust PLF based on interest rate (higher rate = lower PLF)
  plf -= (interestRate - 3.5) * 0.1;
  
  // Ensure PLF stays within reasonable bounds
  plf = Math.max(0.2, Math.min(0.75, plf));
  
  // Calculate maximum loan amount
  const maxLoanAmount = homeValue * plf;
  
  // Calculate fees
  const originationFee = Math.min(6000, Math.max(2500, homeValue * 0.02));
  const mortgageInsurancePremium = homeValue * 0.02; // 2% upfront MIP
  const otherClosingCosts = 3000; // Estimate for appraisal, title, etc.
  const totalFees = originationFee + mortgageInsurancePremium + otherClosingCosts;
  
  // Calculate available funds after paying existing mortgage and fees
  const availableFunds = Math.max(0, maxLoanAmount - mortgageBalance - totalFees);
  
  return {
    maxLoanAmount,
    availableFunds,
    estimatedFees: totalFees
  };
};

// Statistical data about reverse mortgages (for informational content)
export const reverseMortgageStats = {
  averageAge: 73, // Average age of reverse mortgage borrowers
  averageLoanAmount: 185000, // Average loan amount
  percentSingleBorrowers: 42, // Percentage of single borrowers
  percentHomeValue: 55, // Average percentage of home value accessed
  topReason: "Supplement income", // Top reason for getting a reverse mortgage
  averageInterestRate: 4.5, // Average interest rate
  percentLumpSum: 32, // Percentage choosing lump sum payment
  percentLineOfCredit: 68, // Percentage choosing line of credit or monthly payments
  totalVolume2022: 22158, // Total number of HECM loans in 2022
  averageHomeValue: 368000, // Average home value for reverse mortgage borrowers
};
