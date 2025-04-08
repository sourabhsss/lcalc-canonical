
import React, { useState } from 'react';
import { DollarSign, Percent } from 'lucide-react';
import ApyForm from './ApyForm';
import ApyResult from './ApyResult';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';
import { apyFaqs } from './apyUtils';

const ApyCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [principal, setPrincipal] = useState<number | null>(null);
  const [interestRate, setInterestRate] = useState<number | null>(null);
  const [compoundFrequency, setCompoundFrequency] = useState<number>(12);

  const handleCalculate = (
    principalAmount: number,
    rate: number,
    frequency: number
  ) => {
    setPrincipal(principalAmount);
    setInterestRate(rate);
    setCompoundFrequency(frequency);
    setCalculating(true);
  };

  const handleReset = () => {
    setPrincipal(null);
    setInterestRate(null);
    setCompoundFrequency(12);
    setCalculating(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Percent className="text-primary" />
          <h2 className="text-xl font-semibold">Annual Percentage Yield (APY) Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the true annual return on your investments with our APY calculator.
            This tool helps you determine the effective annual yield when interest is compounded multiple times per year.
          </p>
          
          <ApyForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && principal !== null && interestRate !== null && (
            <ApyResult 
              principal={principal} 
              interestRate={interestRate} 
              compoundFrequency={compoundFrequency} 
            />
          )}
          
          <div className="mt-12 space-y-6">
            <h3 className="font-medium text-xl">Understanding Annual Percentage Yield (APY)</h3>
            <p className="text-muted-foreground">
              Annual Percentage Yield (APY) is a standardized measure that represents the effective annual 
              rate of return on an investment, taking into account the effect of compounding interest. 
              Unlike the simple Annual Percentage Rate (APR), APY gives you a more accurate picture of 
              what you'll earn over time because it factors in how often interest is calculated and added to your balance.
            </p>
            
            <h4 className="font-medium text-lg">Why APY Matters</h4>
            <p className="text-muted-foreground">
              APY is crucial for comparing different investment options effectively. Two investments might 
              advertise the same interest rate, but if they compound at different frequencies (daily, monthly, 
              quarterly, etc.), the actual returns will differ. The more frequently interest compounds, the higher 
              the APY will be compared to the stated interest rate.
            </p>
            
            <h4 className="font-medium text-lg">Real-World Applications</h4>
            <p className="text-muted-foreground">
              APY is commonly used to evaluate savings accounts, certificates of deposit (CDs), money market accounts, 
              and other interest-bearing financial products. For example, as of 2023, high-yield savings accounts from 
              online banks might offer APYs around 3-5%, while traditional brick-and-mortar banks might offer just 0.01-0.1%. 
              This significant difference demonstrates why comparing APYs is essential for maximizing your returns.
            </p>
            
            <h4 className="font-medium text-lg">The Power of Compound Interest</h4>
            <p className="text-muted-foreground">
              Albert Einstein reportedly called compound interest "the eighth wonder of the world." Here's why: 
              With compound interest, you earn interest not just on your initial investment, but also on the interest 
              you've already earned. Over time, this creates a snowball effect that can significantly increase your wealth. 
              The higher the APY and the longer your investment horizon, the more dramatic this effect becomes.
            </p>
            
            <div className="bg-secondary/10 p-4 rounded-lg">
              <p className="text-sm">
                Note: While APY helps you compare investments fairly, remember that higher returns often come with higher risks. 
                Always consider the overall risk profile and liquidity needs when making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold">The Math Behind APY Calculation</h3>
        
        <div className="space-y-4">
          <p>
            The formula for calculating APY is:
          </p>
          
          <div className="bg-card p-4 rounded-lg border text-center">
            <p className="font-mono text-lg">APY = (1 + r/n)^n - 1</p>
          </div>
          
          <p>Where:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-mono">r</span> is the nominal interest rate (in decimal form)</li>
            <li><span className="font-mono">n</span> is the number of times interest is compounded per year</li>
          </ul>
          
          <p>
            For example, if you have a savings account with a 5% annual interest rate that compounds monthly, 
            the APY would be calculated as follows:
          </p>
          
          <div className="bg-card p-4 rounded-lg border">
            <p className="font-mono">APY = (1 + 0.05/12)^12 - 1 = 5.12%</p>
          </div>
          
          <p>
            This means that even though the stated interest rate is 5%, you're effectively earning 5.12% 
            per year due to the compounding effect. The difference may seem small for one year, but over 
            multiple years with larger amounts, it becomes significant.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold mt-8">Common Compounding Frequencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Compounding</CardTitle>
              <CardDescription>Interest is calculated and added to your balance every day (365 times per year)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Daily compounding is often used for high-yield savings accounts and some investment platforms. 
                With a 5% interest rate, daily compounding results in an APY of approximately 5.13%.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Compounding</CardTitle>
              <CardDescription>Interest is calculated and added to your balance every month (12 times per year)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Monthly compounding is common for savings accounts, CDs, and many other financial products. 
                With a 5% interest rate, monthly compounding results in an APY of 5.12%.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Compounding</CardTitle>
              <CardDescription>Interest is calculated and added to your balance every three months (4 times per year)</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Quarterly compounding is typically used for some CDs and dividend-paying investments. 
                With a 5% interest rate, quarterly compounding results in an APY of 5.09%.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Annual Compounding</CardTitle>
              <CardDescription>Interest is calculated and added to your balance once per year</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Annual compounding is the simplest form and is sometimes used for bonds and certain types of loans. 
                With annual compounding, the APY equals the stated interest rate (5% in our example).
              </p>
            </CardContent>
          </Card>
        </div>
        
        <h3 className="text-2xl font-semibold mt-8">APY vs. APR: Understanding the Difference</h3>
        
        <div className="space-y-4">
          <p>
            APY and APR are often confused, but they represent different aspects of interest calculations:
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>APR (Annual Percentage Rate):</strong> This is the simple interest rate for a year, 
              not accounting for compounding. For loans, APR includes the interest rate plus any fees.
            </li>
            <li>
              <strong>APY (Annual Percentage Yield):</strong> This is the effective annual rate of return, 
              taking into account compounding. APY is always equal to or higher than APR.
            </li>
          </ul>
          
          <p>
            For borrowers, a lower APR is better. For investors or savers, a higher APY is better. 
            Financial institutions tend to advertise the more favorable number for their products:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Banks typically advertise the APY for savings products (higher number)</li>
            <li>Lenders typically advertise the APR for loan products (lower number)</li>
          </ul>
          
          <p>
            According to the Truth in Savings Act in the United States, banks are required to disclose the 
            APY for deposit accounts, helping consumers make more informed decisions.
          </p>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Historical APY Trends</h3>
        <p className="mb-4">
          Interest rates and APYs fluctuate based on economic conditions and central bank policies. Here's a brief overview:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2">Period</th>
                <th className="border border-border px-4 py-2">Average Savings APY</th>
                <th className="border border-border px-4 py-2">Economic Context</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">1980s</td>
                <td className="border border-border px-4 py-2">5-10%</td>
                <td className="border border-border px-4 py-2">High inflation period, peak rates</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">1990s</td>
                <td className="border border-border px-4 py-2">2-6%</td>
                <td className="border border-border px-4 py-2">Steady economic growth</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">2000-2008</td>
                <td className="border border-border px-4 py-2">1-5%</td>
                <td className="border border-border px-4 py-2">Pre-financial crisis</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">2009-2015</td>
                <td className="border border-border px-4 py-2">0.01-1%</td>
                <td className="border border-border px-4 py-2">Post-financial crisis, low-rate environment</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">2016-2019</td>
                <td className="border border-border px-4 py-2">0.5-2.5%</td>
                <td className="border border-border px-4 py-2">Rate normalization period</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">2020-2021</td>
                <td className="border border-border px-4 py-2">0.01-0.7%</td>
                <td className="border border-border px-4 py-2">COVID-19 pandemic, near-zero rates</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">2022-2023</td>
                <td className="border border-border px-4 py-2">1-5%</td>
                <td className="border border-border px-4 py-2">Rising rates to combat inflation</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-6">
          These historical trends demonstrate how APYs can vary significantly over time. Savvy investors 
          adjust their strategies based on these changing interest rate environments.
        </p>
      </div>
      
      <FAQSection faqs={apyFaqs} />
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Related Calculators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Mortgage Calculator</h4>
            <p className="mb-4">
              Calculate monthly payments, interest costs, and amortization schedules for home loans.
            </p>
            <a href="/mortgage-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Reverse Mortgage Calculator</h4>
            <p className="mb-4">
              Estimate how much you could receive from a reverse mortgage based on your home equity and age.
            </p>
            <a href="/reverse-mortgage-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Mortgage Recast Calculator</h4>
            <p className="mb-4">
              Calculate how making a lump sum payment can reduce your monthly mortgage payments through recasting.
            </p>
            <a href="/mortgage-recast-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Stock Average Calculator</h4>
            <p className="mb-4">
              Calculate your average cost basis when buying stocks or other investments at different prices.
            </p>
            <a href="/stock-average-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApyCalculator;
