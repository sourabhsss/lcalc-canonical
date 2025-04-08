// Types for the Gross Monthly Income Calculator

export type IncomeType = 'salary' | 'hourly';
export type PayFrequency = 'weekly' | 'biweekly' | 'monthly';
export type FilingStatus = 'single' | 'married' | 'headOfHousehold';
export type State = 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA' | 
                    'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD' | 
                    'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ' | 
                    'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC' | 
                    'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY';

export interface GrossMonthlyIncomeInputs {
  incomeType: IncomeType;
  hourlyRate: number;
  hoursPerWeek: number;
  annualSalary: number;
  payFrequency: PayFrequency;
  filingStatus: FilingStatus;
  state: State;
  dependents: number;
  preTaxDeductions: number;
}

export type IncomeFrequency = 'hourly' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'annually';
export type TaxFilingStatus = 'single' | 'married' | 'headOfHousehold';

export interface IncomeDetails {
  amount: number;
  frequency: IncomeFrequency;
  hoursPerWeek?: number;
  daysPerWeek?: number;
  includeOvertime?: boolean;
  overtimeHours?: number;
  overtimeRate?: number;
  includeBonuses?: boolean;
  bonusAmount?: number;
  bonusFrequency?: 'monthly' | 'quarterly' | 'annually';
}

export interface DeductionDetails {
  federalTaxRate?: number;
  stateTaxRate?: number;
  localTaxRate?: number;
  socialSecurityRate?: number;
  medicareRate?: number;
  retirementContribution?: number;
  healthInsurance?: number;
  otherDeductions?: number;
  filingStatus?: TaxFilingStatus;
}

export interface GrossMonthlyIncomeResult {
  grossMonthlyIncome: number;
  grossAnnualIncome: number;
  netMonthlyIncome: number;
  netAnnualIncome: number;
  monthlyDeductions: {
    federalTax: number;
    stateTax: number;
    localTax: number;
    socialSecurity: number;
    medicare: number;
    retirement: number;
    healthInsurance: number;
    otherDeductions: number;
    totalDeductions: number;
  };
  hourlyRate: number;
  effectiveTaxRate: number;
  takeHomePercentage: number;
}

// Default tax rates based on US averages
export const DEFAULT_TAX_RATES = {
  federalTaxRate: 12, // 12% - middle bracket estimate
  stateTaxRate: 5, // 5% - average across states
  localTaxRate: 1, // 1% - conservative estimate
  socialSecurityRate: 6.2, // Fixed for most US employees
  medicareRate: 1.45, // Fixed for most US employees
};

// Default tax brackets for federal taxes (2023 data)
export const FEDERAL_TAX_BRACKETS = {
  single: [
    { min: 0, max: 11000, rate: 10 },
    { min: 11001, max: 44725, rate: 12 },
    { min: 44726, max: 95375, rate: 22 },
    { min: 95376, max: 182100, rate: 24 },
    { min: 182101, max: 231250, rate: 32 },
    { min: 231251, max: 578125, rate: 35 },
    { min: 578126, max: Infinity, rate: 37 }
  ],
  married: [
    { min: 0, max: 22000, rate: 10 },
    { min: 22001, max: 89450, rate: 12 },
    { min: 89451, max: 190750, rate: 22 },
    { min: 190751, max: 364200, rate: 24 },
    { min: 364201, max: 462500, rate: 32 },
    { min: 462501, max: 693750, rate: 35 },
    { min: 693751, max: Infinity, rate: 37 }
  ],
  headOfHousehold: [
    { min: 0, max: 15700, rate: 10 },
    { min: 15701, max: 59850, rate: 12 },
    { min: 59851, max: 95350, rate: 22 },
    { min: 95351, max: 182100, rate: 24 },
    { min: 182101, max: 231250, rate: 32 },
    { min: 231251, max: 578100, rate: 35 },
    { min: 578101, max: Infinity, rate: 37 }
  ]
};

// Average state tax rates by state (2023 data)
export const STATE_TAX_RATES = {
  AL: 5.0, AK: 0.0, AZ: 2.5, AR: 5.5, CA: 9.3, CO: 4.55, CT: 6.99, DE: 6.6, FL: 0.0, GA: 5.75,
  HI: 11.0, ID: 6.5, IL: 4.95, IN: 3.23, IA: 6.0, KS: 5.7, KY: 5.0, LA: 4.25, ME: 7.15, MD: 5.75,
  MA: 5.0, MI: 4.25, MN: 7.85, MS: 5.0, MO: 5.3, MT: 6.75, NE: 6.84, NV: 0.0, NH: 5.0, NJ: 10.75,
  NM: 5.9, NY: 10.9, NC: 4.99, ND: 2.9, OH: 3.99, OK: 4.75, OR: 9.9, PA: 3.07, RI: 5.99, SC: 7.0,
  SD: 0.0, TN: 0.0, TX: 0.0, UT: 4.95, VT: 8.75, VA: 5.75, WA: 0.0, WV: 6.5, WI: 7.65, WY: 0.0
};

/**
 * Calculates the average income by profession and experience level
 * Data source: Bureau of Labor Statistics (simplified and estimated)
 */
export const AVERAGE_INCOME_BY_PROFESSION = {
  'Software Developer': { entry: 70000, mid: 95000, senior: 130000 },
  'Registered Nurse': { entry: 55000, mid: 75000, senior: 95000 },
  'Teacher': { entry: 45000, mid: 60000, senior: 80000 },
  'Accountant': { entry: 50000, mid: 70000, senior: 90000 },
  'Marketing Manager': { entry: 60000, mid: 85000, senior: 110000 },
  'Construction Worker': { entry: 35000, mid: 50000, senior: 70000 },
  'Administrative Assistant': { entry: 35000, mid: 45000, senior: 60000 },
  'Sales Representative': { entry: 40000, mid: 65000, senior: 100000 },
  'Financial Analyst': { entry: 65000, mid: 85000, senior: 120000 },
  'Graphic Designer': { entry: 45000, mid: 65000, senior: 85000 }
};

// Format currency with correct localization
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Format percentage with correct localization
export const formatPercentage = (percentage: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(percentage / 100);
};

/**
 * Convert any income frequency to monthly
 */
export const convertToMonthlyIncome = (income: IncomeDetails): number => {
  let monthlyAmount = 0;
  const amount = income.amount || 0;
  
  switch (income.frequency) {
    case 'hourly':
      const hoursPerWeek = income.hoursPerWeek || 40;
      let weeklyIncome = amount * hoursPerWeek;
      
      // Add overtime if applicable
      if (income.includeOvertime && income.overtimeHours && income.overtimeRate) {
        weeklyIncome += (income.overtimeHours * income.amount * income.overtimeRate);
      }
      
      monthlyAmount = weeklyIncome * 52 / 12;
      break;
      
    case 'daily':
      const daysPerWeek = income.daysPerWeek || 5;
      monthlyAmount = amount * daysPerWeek * 52 / 12;
      break;
      
    case 'weekly':
      monthlyAmount = amount * 52 / 12;
      break;
      
    case 'biweekly':
      monthlyAmount = amount * 26 / 12;
      break;
      
    case 'monthly':
      monthlyAmount = amount;
      break;
      
    case 'annually':
      monthlyAmount = amount / 12;
      break;
      
    default:
      monthlyAmount = 0;
  }
  
  // Add bonuses if applicable
  if (income.includeBonuses && income.bonusAmount && income.bonusFrequency) {
    switch (income.bonusFrequency) {
      case 'monthly':
        monthlyAmount += income.bonusAmount;
        break;
      case 'quarterly':
        monthlyAmount += income.bonusAmount / 3;
        break;
      case 'annually':
        monthlyAmount += income.bonusAmount / 12;
        break;
    }
  }
  
  return monthlyAmount;
};

/**
 * Calculate the federal tax amount using progressive tax brackets
 */
export const calculateFederalTax = (annualIncome: number, filingStatus: TaxFilingStatus = 'single'): number => {
  const brackets = FEDERAL_TAX_BRACKETS[filingStatus];
  let tax = 0;
  
  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    const previousBracketMax = i > 0 ? brackets[i-1].max : 0;
    
    if (annualIncome > previousBracketMax) {
      const taxableInThisBracket = Math.min(annualIncome, bracket.max) - previousBracketMax;
      tax += taxableInThisBracket * (bracket.rate / 100);
    }
    
    if (annualIncome <= bracket.max) {
      break;
    }
  }
  
  return tax;
};

/**
 * Calculate gross monthly income and related financial metrics
 */
export const calculateGrossMonthlyIncome = (
  income: IncomeDetails,
  deductions: DeductionDetails
): GrossMonthlyIncomeResult => {
  // Calculate gross monthly income
  const grossMonthlyIncome = convertToMonthlyIncome(income);
  const grossAnnualIncome = grossMonthlyIncome * 12;
  
  // Calculate taxes and deductions
  let federalTax = 0;
  
  // If specific filing status is provided, use tax brackets
  if (deductions.filingStatus) {
    federalTax = calculateFederalTax(grossAnnualIncome, deductions.filingStatus) / 12;
  } else if (deductions.federalTaxRate) {
    // Otherwise use flat rate
    federalTax = grossMonthlyIncome * (deductions.federalTaxRate / 100);
  } else {
    // Use default rate
    federalTax = grossMonthlyIncome * (DEFAULT_TAX_RATES.federalTaxRate / 100);
  }
  
  const stateTax = grossMonthlyIncome * ((deductions.stateTaxRate || DEFAULT_TAX_RATES.stateTaxRate) / 100);
  const localTax = grossMonthlyIncome * ((deductions.localTaxRate || DEFAULT_TAX_RATES.localTaxRate) / 100);
  const socialSecurity = grossMonthlyIncome * ((deductions.socialSecurityRate || DEFAULT_TAX_RATES.socialSecurityRate) / 100);
  const medicare = grossMonthlyIncome * ((deductions.medicareRate || DEFAULT_TAX_RATES.medicareRate) / 100);
  const retirement = (deductions.retirementContribution || 0);
  const healthInsurance = (deductions.healthInsurance || 0);
  const other = (deductions.otherDeductions || 0);
  
  const totalMonthlyDeductions = federalTax + stateTax + localTax + socialSecurity + medicare + retirement + healthInsurance + other;
  
  // Calculate net income
  const netMonthlyIncome = grossMonthlyIncome - totalMonthlyDeductions;
  const netAnnualIncome = netMonthlyIncome * 12;
  
  // Calculate derived metrics
  const hourlyRate = income.frequency === 'hourly' 
    ? income.amount 
    : grossAnnualIncome / ((income.hoursPerWeek || 40) * 52);
    
  const effectiveTaxRate = (totalMonthlyDeductions / grossMonthlyIncome) * 100;
  const takeHomePercentage = 100 - effectiveTaxRate;
  
  return {
    grossMonthlyIncome,
    grossAnnualIncome,
    netMonthlyIncome,
    netAnnualIncome,
    monthlyDeductions: {
      federalTax,
      stateTax,
      localTax,
      socialSecurity,
      medicare,
      retirement,
      healthInsurance,
      otherDeductions: other,
      totalDeductions: totalMonthlyDeductions
    },
    hourlyRate,
    effectiveTaxRate,
    takeHomePercentage
  };
};

// Helper function to convert GrossMonthlyIncomeInputs to IncomeDetails and DeductionDetails
export const processGrossMonthlyIncomeInputs = (inputs: GrossMonthlyIncomeInputs): { income: IncomeDetails, deductions: DeductionDetails } => {
  const income: IncomeDetails = {
    amount: inputs.incomeType === 'hourly' ? inputs.hourlyRate : inputs.annualSalary,
    frequency: inputs.incomeType === 'hourly' ? 'hourly' : 'annually',
    hoursPerWeek: inputs.incomeType === 'hourly' ? inputs.hoursPerWeek : undefined,
  };

  const deductions: DeductionDetails = {
    filingStatus: inputs.filingStatus,
    stateTaxRate: STATE_TAX_RATES[inputs.state] || DEFAULT_TAX_RATES.stateTaxRate,
    localTaxRate: DEFAULT_TAX_RATES.localTaxRate,
    socialSecurityRate: DEFAULT_TAX_RATES.socialSecurityRate,
    medicareRate: DEFAULT_TAX_RATES.medicareRate,
    retirementContribution: inputs.preTaxDeductions,
  };

  return { income, deductions };
};

// FAQs for the Gross Monthly Income Calculator
export const grossMonthlyIncomeFaqs = [
  {
    question: "What is gross monthly income?",
    answer: "Gross monthly income is the total amount of money you earn each month before any taxes or deductions are taken out. It includes all sources of income such as wages, salaries, bonuses, overtime pay, commissions, and self-employment earnings. This figure is important for budgeting, loan applications, and determining your tax obligations."
  },
  {
    question: "How is gross monthly income different from net monthly income?",
    answer: "Gross monthly income is your total earnings before any deductions, while net monthly income (or take-home pay) is what you actually receive after taxes and other deductions have been subtracted. Net income is typically 20-30% lower than gross income, depending on your tax bracket, retirement contributions, and other withholdings."
  },
  {
    question: "How do I convert my hourly wage to gross monthly income?",
    answer: "To convert an hourly wage to gross monthly income, multiply your hourly rate by the number of hours you work per week, then multiply by 52 (weeks in a year), and divide by 12 (months in a year). For example, if you earn $20 per hour and work 40 hours per week: $20 × 40 × 52 ÷ 12 = $3,466.67 gross monthly income."
  },
  {
    question: "What deductions are typically taken from gross monthly income?",
    answer: "Common deductions include federal, state, and local income taxes; Social Security and Medicare taxes (FICA); health insurance premiums; retirement plan contributions (401(k), 403(b), IRA); flexible spending account (FSA) or health savings account (HSA) contributions; life or disability insurance premiums; and garnishments or child support payments if applicable."
  },
  {
    question: "Why is calculating gross monthly income important?",
    answer: "Calculating your gross monthly income is important for several reasons: it helps with budgeting and financial planning; lenders use it to determine loan affordability and qualification; landlords often require it for rental applications (typically wanting your gross monthly income to be 3x the rent); and it's the starting point for tax calculations and retirement planning."
  },
  {
    question: "Should I include bonuses in my gross monthly income calculations?",
    answer: "Yes, you should include bonuses in your gross monthly income calculations if they are regular and dependable. For occasional or performance-based bonuses, you might want to calculate their monthly average by dividing the annual bonus amount by 12. However, for loan applications, lenders may only consider bonuses if you have a history of receiving them consistently for at least two years."
  },
  {
    question: "How do tax brackets affect my net income?",
    answer: "The U.S. uses a progressive tax system where different portions of your income are taxed at different rates. As your income increases, the new dollars earned are taxed at a higher rate than previous dollars. Our calculator uses these progressive federal tax brackets to estimate your tax burden more accurately than a simple flat percentage, resulting in a more precise net income estimate."
  },
  {
    question: "How can I increase my net monthly income?",
    answer: "To increase your net monthly income, consider: asking for a raise or promotion; developing new skills to qualify for higher-paying positions; working overtime or taking on side jobs; maximizing tax deductions and credits you're eligible for; contributing to pre-tax retirement accounts like 401(k)s; using health savings accounts (HSAs) or flexible spending accounts (FSAs); and reviewing your withholdings to ensure you're not having too much tax withheld."
  },
  {
    question: "Do state income taxes vary significantly across the United States?",
    answer: "Yes, state income taxes vary dramatically across the United States. Some states like Florida, Texas, Nevada, Washington, Wyoming, Alaska, and South Dakota have no state income tax at all. Others like California, Hawaii, New Jersey, Oregon, Minnesota, and New York have top marginal rates that exceed 9%. Our calculator provides estimates based on average rates, but you should check your specific state's tax rates for more accurate calculations."
  },
  {
    question: "What's the difference between a marginal tax rate and an effective tax rate?",
    answer: "Your marginal tax rate is the rate at which your last dollar of income is taxed, based on which tax bracket that dollar falls into. Your effective tax rate is the average rate at which your entire income is taxed, calculated by dividing your total tax paid by your total income. The effective rate is always lower than the marginal rate in a progressive tax system like the U.S. Our calculator shows your estimated effective tax rate based on your inputs."
  }
];

// Industry insights for gross monthly income
export const industryIncomeInsights = [
  {
    industry: "Technology",
    insights: "The technology sector continues to offer some of the highest gross monthly incomes in the U.S. labor market. Software developers earn a median annual salary of approximately $120,000, translating to a gross monthly income of $10,000. Entry-level positions typically start at around $75,000 annually ($6,250 monthly), while senior roles and specialized positions in AI, cybersecurity, and cloud architecture can command over $200,000 per year ($16,667 monthly).",
    growthRate: "5.3% annual average"
  },
  {
    industry: "Healthcare",
    insights: "Healthcare professionals enjoy stable and competitive gross monthly incomes. Registered nurses earn a median annual salary of around $77,600 ($6,467 monthly), while physicians typically earn between $200,000 and $300,000+ annually ($16,667 - $25,000+ monthly). The healthcare sector is projected to add more jobs than any other occupational group through 2030, with continued strong income growth.",
    growthRate: "4.1% annual average"
  },
  {
    industry: "Finance",
    insights: "The financial services industry offers substantial gross monthly incomes, particularly in investment banking, private equity, and financial management. Financial analysts typically earn a median of $83,660 annually ($6,972 monthly), while investment bankers can expect considerably higher figures, often exceeding $150,000 annually ($12,500 monthly) plus significant bonuses that can double total compensation.",
    growthRate: "3.8% annual average"
  },
  {
    industry: "Education",
    insights: "While generally lower than technology or finance, education sector incomes vary widely based on institution type and location. Public K-12 teachers earn a national average of approximately $65,090 annually ($5,424 monthly), while university professors' salaries range from $60,000 to $175,000+ annually ($5,000 - $14,583+ monthly) depending on the institution, discipline, and rank.",
    growthRate: "2.7% annual average"
  }
];

// Resources for understanding gross monthly income
export const grossMonthlyIncomeResources = [
  {
    title: "Bureau of Labor Statistics Occupational Outlook Handbook",
    url: "https://www.bls.gov/ooh/",
    description: "Comprehensive information on job duties, education and training, pay, and outlook for hundreds of occupations."
  },
  {
    title: "IRS Tax Withholding Estimator",
    url: "https://www.irs.gov/individuals/tax-withholding-estimator",
    description: "Official IRS tool to help ensure you have the right amount of tax withheld from your paycheck."
  },
  {
    title: "Social Security Administration Benefits Calculators",
    url: "https://www.ssa.gov/benefits/calculators/",
    description: "Tools to help you estimate your future retirement benefits and understand FICA contributions."
  },
  {
    title: "Consumer Financial Protection Bureau: Income and Debt Calculator",
    url: "https://www.consumerfinance.gov/",
    description: "Resources to help understand debt-to-income ratios and how gross monthly income affects borrowing capacity."
  }
];
