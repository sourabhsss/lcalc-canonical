
export interface TaxRates {
  [country: string]: {
    name: string;
    standardRate: number;
    otherRates?: { [name: string]: number };
  };
}

export const taxRates: TaxRates = {
  australia: {
    name: "Australia (GST)",
    standardRate: 10,
  },
  india: {
    name: "India (GST)",
    standardRate: 18,
    otherRates: {
      "0% Rate": 0,
      "5% Rate": 5,
      "12% Rate": 12,
      "18% Rate": 18,
      "28% Rate": 28,
    },
  },
  singapore: {
    name: "Singapore (GST)",
    standardRate: 8,
  },
  newZealand: {
    name: "New Zealand (GST)",
    standardRate: 15,
  },
  uk: {
    name: "United Kingdom (VAT)",
    standardRate: 20,
    otherRates: {
      "Zero Rate": 0,
      "Reduced Rate": 5,
    },
  },
  eu: {
    name: "European Union (VAT)",
    standardRate: 21, // Average rate
    otherRates: {
      "Reduced Rate": 10,
      "Super Reduced Rate": 5,
      "Zero Rate": 0,
    },
  },
  canada: {
    name: "Canada (GST/HST)",
    standardRate: 5,
    otherRates: {
      "HST (ON)": 13,
      "HST (NB, NL, NS, PE)": 15,
    },
  },
  us: {
    name: "United States (Sales Tax)",
    standardRate: 7.25, // Average
  },
  japan: {
    name: "Japan (Consumption Tax)",
    standardRate: 10,
    otherRates: {
      "Reduced Rate": 8,
    },
  },
  southAfrica: {
    name: "South Africa (VAT)",
    standardRate: 15,
  },
};

export const calculateGST = (
  amount: number,
  rate: number,
  calculationType: "exclusive" | "inclusive"
): { 
  originalAmount: number;
  gstAmount: number;
  totalAmount: number;
} => {
  if (calculationType === "exclusive") {
    // GST is added to the amount
    const gstAmount = (amount * rate) / 100;
    return {
      originalAmount: amount,
      gstAmount,
      totalAmount: amount + gstAmount,
    };
  } else {
    // GST is included in the amount (extracting GST)
    const originalAmount = (amount * 100) / (100 + rate);
    const gstAmount = amount - originalAmount;
    return {
      originalAmount,
      gstAmount,
      totalAmount: amount,
    };
  }
};

export const formatCurrency = (amount: number, currency: string = "$"): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  }).format(amount).replace("$", currency);
};

export const gstFaqs = [
  {
    question: "What is GST and how does it work?",
    answer: "Goods and Services Tax (GST) is a consumption tax applied on the supply of goods and services. It's a value-added tax where businesses collect GST on their sales and can claim credits for GST paid on their purchases. Ultimately, the end consumer bears the tax. GST systems are implemented differently across countries - Australia, India, Singapore, and New Zealand have GST, while similar systems like VAT exist in the UK and EU, and sales tax in the US."
  },
  {
    question: "What's the difference between GST exclusive and inclusive calculations?",
    answer: "GST exclusive means the tax is added to the base price (e.g., $100 + 10% GST = $110 total). This is common when businesses quote prices to other businesses. GST inclusive means the tax is already included in the displayed price (e.g., $110 including 10% GST, where the base price is $100). Most consumer pricing uses inclusive pricing to show the final amount customers will pay. Our calculator supports both methods."
  },
  {
    question: "Why do different countries have different GST/VAT rates?",
    answer: "GST/VAT rates vary by country based on government fiscal policies, economic conditions, and social objectives. Some countries, like Singapore (8%) or Australia (10%), have relatively low single rates. Others, like India, have multiple slabs (0%, 5%, 12%, 18%, 28%) for different categories of goods and services. The EU member states have standard rates between 17-27%, with reduced rates for essentials. Each country sets rates to balance revenue needs, economic growth, and social equity."
  },
  {
    question: "Are any goods or services exempt from GST?",
    answer: "Yes, many countries exempt certain essential goods and services from GST. Common exemptions include basic food items, healthcare services, educational services, financial services, and exports. For example, in Australia, fresh food, health services, and education are GST-free. India has a 0% GST slab for essentials like milk and grains. It's important to check your specific country's regulations as exemptions vary significantly between jurisdictions."
  },
  {
    question: "How often do GST rates change?",
    answer: "GST/VAT rates typically don't change frequently, but adjustments do occur as part of government fiscal policy. For example, Singapore increased its GST from 7% to 8% in January 2023, with a planned increase to 9% in 2024. Japan raised its consumption tax from 8% to 10% in 2019. India implemented its GST system in 2017 and has adjusted rate slabs several times since. Businesses must stay informed about rate changes to ensure compliance."
  },
  {
    question: "Who needs to register for GST?",
    answer: "Registration requirements vary by country, but typically businesses must register when their turnover exceeds a threshold. In Australia, registration is mandatory when annual turnover reaches AUD 75,000 (AUD 150,000 for non-profit organizations). In India, the threshold is INR 40 lakhs for goods and INR 20 lakhs for services. In the UK, the VAT registration threshold is £85,000. Voluntary registration is usually possible below these thresholds if businesses want to claim GST/VAT credits on their purchases."
  },
  {
    question: "How is GST different from VAT?",
    answer: "GST (Goods and Services Tax) and VAT (Value-Added Tax) are very similar systems conceptually - both are consumption taxes collected at each stage of the supply chain with credits for taxes already paid. The main difference is in name and specific implementation details. Countries like Australia, India, and Singapore use the term GST, while the UK and EU use VAT. The US doesn't have a federal GST/VAT system, instead using sales taxes that are only collected at the final consumer stage with no input credits."
  },
  {
    question: "How do I calculate GST on my international purchases?",
    answer: "For international purchases, GST/VAT may apply based on import rules. Many countries have de minimis thresholds below which no tax is collected. For example, Australia applies 10% GST on imported goods valued over AUD 1,000. The EU removed its de minimis threshold in 2021, meaning VAT applies to all imports regardless of value. Digital services typically have special rules - for instance, non-resident digital service providers must register and charge GST/VAT when selling to consumers in many countries."
  }
];
