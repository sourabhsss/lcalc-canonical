
export const calculateApy = (rate: number, compoundFrequency: number): number => {
  // Convert percentage to decimal form
  const decimalRate = rate / 100;
  
  // Calculate APY
  const apy = Math.pow(1 + decimalRate / compoundFrequency, compoundFrequency) - 1;
  
  // Convert back to percentage
  return apy * 100;
};

export const calculateTotalAmount = (principal: number, apy: number, years: number): number => {
  // Convert percentage to decimal form
  const decimalApy = apy / 100;
  
  // Calculate total amount
  return principal * Math.pow(1 + decimalApy, years);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const apyFaqs = [
  {
    question: "What is APY and how is it different from APR?",
    answer: "APY (Annual Percentage Yield) represents the effective annual rate of return, accounting for compound interest. APR (Annual Percentage Rate) is the simple interest rate without considering compounding. For example, a 5% APR compounded monthly gives an APY of 5.12%. APY is always equal to or higher than APR for the same interest rate."
  },
  {
    question: "How often does interest compound in typical financial products?",
    answer: "Compounding frequency varies by product: savings accounts typically compound daily or monthly, CDs often compound daily, monthly, or quarterly, money market accounts usually compound daily, and bonds generally compound semi-annually. Online banks often compound daily, while traditional banks may compound monthly or quarterly. Higher compounding frequency leads to higher effective returns."
  },
  {
    question: "Why is APY more important than the stated interest rate when comparing investments?",
    answer: "APY is more important because it reflects the actual return you'll earn after accounting for compounding effects. Two investments with the same stated interest rate but different compounding frequencies will yield different returns. APY provides a standardized way to compare various investments fairly, regardless of their compounding frequency."
  },
  {
    question: "How does the Federal Reserve's interest rate policy affect APYs?",
    answer: "The Federal Reserve's interest rate policy directly impacts APYs on savings accounts, CDs, and other interest-bearing products. When the Fed raises its benchmark rate, financial institutions typically increase their APYs, offering higher returns to savers. Conversely, when the Fed lowers rates, APYs tend to decrease. In late 2023 and early 2024, for example, high-yield savings accounts offered APYs around 4-5% following the Fed's rate hikes to combat inflation."
  },
  {
    question: "Can I negotiate for a higher APY with my bank?",
    answer: "Yes, in some cases you can negotiate for a higher APY, especially with larger deposit amounts. Strategies include: comparing rates at competing banks and mentioning them to your current bank, consolidating accounts to reach higher balance tiers that qualify for better rates, being a long-standing customer and leveraging that relationship, or considering credit unions which may offer higher rates than traditional banks."
  },
  {
    question: "How does APY impact my investments over long periods?",
    answer: "APY has a dramatic impact on long-term investments due to compound interest. For example, $10,000 invested at 3% APY for 30 years would grow to about $24,273, while the same amount at 5% APY would grow to $43,219 – nearly $19,000 more. This demonstrates why even small differences in APY can significantly affect long-term wealth accumulation."
  },
  {
    question: "Are higher APYs always better for all financial products?",
    answer: "Higher APYs are generally better for savings and investments, but not for loans where you're paying interest. For borrowing, you want a lower APR. Additionally, higher-yielding investments often carry greater risk, so you should consider your risk tolerance and investment timeframe. Some high-APY products may also have restrictions on liquidity or require minimum balance requirements."
  },
  {
    question: "Does inflation affect the real value of my APY returns?",
    answer: "Yes, inflation erodes the purchasing power of your returns. To calculate the real rate of return, subtract the inflation rate from your APY. For example, if your investment earns 4% APY but inflation is 2%, your real return is only 2%. In periods of high inflation, your APY needs to be higher just to maintain purchasing power. It's important to consider this when evaluating investment returns."
  }
];
