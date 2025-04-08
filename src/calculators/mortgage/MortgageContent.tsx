import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Home, PiggyBank, AlertTriangle, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MortgageContent: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding Mortgage Calculations</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            A mortgage is likely the largest financial commitment you'll ever make. Understanding how mortgage payments are calculated is essential for making informed decisions about homeownership and managing your finances effectively. According to the Federal Reserve, over 65% of American homeowners have a mortgage, with the average mortgage debt standing at $220,380 as of 2022.
          </p>
          <p className="mb-4">
            Our mortgage calculator provides a comprehensive breakdown of your potential monthly payments, including principal, interest, taxes, and insurance. By exploring different scenarios—such as varying down payment amounts, interest rates, and loan terms—you can find the mortgage arrangement that best fits your financial situation.
          </p>
          <p>
            The Consumer Financial Protection Bureau reports that comparing just three different mortgage offers could save you more than $3,500 over the first five years of your mortgage. By using our calculator to explore different options, you could potentially save tens of thousands of dollars over the life of your loan.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How Mortgage Payments Are Calculated</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Mortgage payments typically consist of four components, often referred to as PITI: Principal, Interest, Taxes, and Insurance. Understanding each component helps clarify where your money goes each month.
          </p>
          <p className="mb-4">
            <strong>Principal and Interest (P&I):</strong> This forms the core of your mortgage payment. The calculation uses a complex formula that factors in your loan amount, interest rate, and loan term. For a fixed-rate mortgage, this amount remains constant throughout the loan term. The formula used is:
          </p>
          <div className="bg-muted p-3 rounded-md my-4 text-center">
            <p className="font-mono">M = P [ r(1+r)^n / ((1+r)^n) - 1) ]</p>
            <p className="text-sm mt-2">Where: M = monthly payment, P = principal (loan amount), r = monthly interest rate, n = number of payments</p>
          </div>
          <p className="mb-4">
            <strong>Property Taxes:</strong> These are typically collected by your lender and held in escrow until they're due. According to the U.S. Census Bureau, the median annual property tax payment is about $2,471, but this varies significantly by location. In high-tax areas like New Jersey or New York, property taxes might exceed $7,000 annually.
          </p>
          <p className="mb-4">
            <strong>Homeowners Insurance:</strong> This protects your property against damage and liability. The Insurance Information Institute reports that the average annual homeowners insurance premium is approximately $1,200, though this varies based on location, coverage amount, and other factors.
          </p>
          <p>
            <strong>Private Mortgage Insurance (PMI):</strong> If your down payment is less than 20% of the home's value, lenders typically require PMI. According to the Urban Institute, the average PMI premium ranges from 0.46% to 1.50% of the loan amount annually, depending on your credit score and down payment amount. For a $300,000 mortgage, this could add $1,380 to $4,500 to your annual payments.
          </p>
        </div>
      </section>

      <section className="bg-primary/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Factors Affecting Your Mortgage Payment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex">
            <div className="mr-4 text-primary">
              <Home size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Home Price</h3>
              <p className="text-muted-foreground">
                The National Association of Realtors reports that the median existing-home price was $375,700 as of early 2023. Each additional $10,000 in home price adds approximately $45-$65 to your monthly payment, depending on your interest rate and loan term.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-primary">
              <PiggyBank size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Down Payment</h3>
              <p className="text-muted-foreground">
                The average down payment for first-time homebuyers is about 6% of the purchase price, while repeat buyers average 16%, according to data from the National Association of Realtors. A larger down payment reduces your loan amount and could eliminate the need for PMI.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-primary">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Interest Rate</h3>
              <p className="text-muted-foreground">
                Freddie Mac data shows that the average 30-year fixed mortgage rate has fluctuated between 2.65% and 7.08% over the past decade. A 1% difference in your rate can change your payment by about $126 per month on a $300,000 loan—amounting to over $45,000 in additional interest over 30 years.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-primary">
              <BarChart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Loan Term</h3>
              <p className="text-muted-foreground">
                Approximately 90% of homebuyers choose a 30-year fixed-rate mortgage, according to the Urban Institute. While a 15-year term increases monthly payments (by about 40-50%), it can reduce your total interest costs by more than 50% compared to a 30-year term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Types of Mortgages</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Different mortgage types offer various benefits depending on your financial situation and homeownership goals. According to the Mortgage Bankers Association, the distribution of mortgage types in the U.S. is approximately:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Conventional Loans (65%):</strong> These loans are not backed by the government and typically require higher credit scores. They're a good option if you have a stable income and good credit.
            </li>
            <li>
              <strong>FHA Loans (18%):</strong> Backed by the Federal Housing Administration, these loans offer lower down payment requirements (as low as 3.5%) and are more accessible to borrowers with credit challenges. However, they require mortgage insurance for the life of the loan if your down payment is less than 10%.
            </li>
            <li>
              <strong>VA Loans (10%):</strong> Available to service members, veterans, and eligible spouses, VA loans offer competitive rates and don't require a down payment or mortgage insurance. The Department of Veterans Affairs reports that over 1 million veterans use VA loans annually.
            </li>
            <li>
              <strong>USDA Loans (7%):</strong> These loans are designed for rural and suburban homebuyers with moderate to low incomes. They offer 100% financing with no down payment requirement, though the property must be in an eligible rural area.
            </li>
          </ul>
          <p className="mb-4">
            Within these categories, you'll find various interest rate structures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Fixed-Rate Mortgages:</strong> The interest rate remains constant throughout the loan term. According to Freddie Mac, about 95% of mortgages are fixed-rate, with the 30-year term being the most popular.
            </li>
            <li>
              <strong>Adjustable-Rate Mortgages (ARMs):</strong> These start with a lower fixed rate for an initial period (typically 3, 5, 7, or 10 years), after which the rate adjusts periodically based on market indices. ARMs comprise about 5% of the market but can increase during periods of rising fixed rates.
            </li>
            <li>
              <strong>Interest-Only Mortgages:</strong> These allow you to pay only the interest portion for an initial period, resulting in lower payments but no principal reduction. They're relatively rare, accounting for less than 2% of mortgages.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">The Impact of Your Credit Score</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Your credit score significantly influences your mortgage interest rate and, consequently, your monthly payment. According to data from FICO, here's how credit scores affected interest rates for a 30-year fixed mortgage of $300,000 as of early 2023:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left">Credit Score Range</th>
                  <th className="p-3 text-left">Average APR</th>
                  <th className="p-3 text-left">Monthly Payment</th>
                  <th className="p-3 text-left">Total Interest Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">760-850</td>
                  <td className="p-3">6.35%</td>
                  <td className="p-3">$1,865</td>
                  <td className="p-3">$371,400</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">700-759</td>
                  <td className="p-3">6.57%</td>
                  <td className="p-3">$1,908</td>
                  <td className="p-3">$386,880</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">680-699</td>
                  <td className="p-3">6.73%</td>
                  <td className="p-3">$1,940</td>
                  <td className="p-3">$398,400</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">660-679</td>
                  <td className="p-3">6.94%</td>
                  <td className="p-3">$1,983</td>
                  <td className="p-3">$413,880</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">640-659</td>
                  <td className="p-3">7.35%</td>
                  <td className="p-3">$2,065</td>
                  <td className="p-3">$443,400</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">620-639</td>
                  <td className="p-3">7.87%</td>
                  <td className="p-3">$2,170</td>
                  <td className="p-3">$481,200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            The difference between the highest and lowest credit score categories amounts to $305 per month, or $109,800 over the life of the loan. This demonstrates the substantial financial benefit of improving your credit score before applying for a mortgage.
          </p>
        </div>
      </section>

      <section className="bg-accent/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">How to Lower Your Mortgage Payment</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            If you're looking to reduce your monthly mortgage payment, consider these strategies:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>Increase your down payment:</strong> The Mortgage Bankers Association reports that for every additional 5% of the home price you put down, your monthly payment decreases by approximately 5-7%. Plus, reaching the 20% threshold eliminates the need for PMI.
            </li>
            <li>
              <strong>Improve your credit score:</strong> According to Experian, raising your credit score by 100 points could save you thousands over the life of your loan. For example, improving from 650 to 750 could reduce your rate by approximately 0.5-1.0%.
            </li>
            <li>
              <strong>Extend your loan term:</strong> While this increases your total interest paid, extending from a 15-year to a 30-year mortgage typically reduces monthly payments by 30-40%.
            </li>
            <li>
              <strong>Shop around for better rates:</strong> The Federal Reserve found that getting just one additional mortgage quote saved borrowers an average of $1,500 over the life of the loan, while five quotes saved about $3,000.
            </li>
            <li>
              <strong>Consider a mortgage recast:</strong> If you can make a large lump sum payment toward your principal, <Link href="/mortgage-recast-calculator" className="text-primary hover:underline">recasting your mortgage</Link> keeps your interest rate and term the same but recalculates your payments based on the new, lower balance.
            </li>
            <li>
              <strong>Refinance your mortgage:</strong> When interest rates drop significantly below your current rate, refinancing can lead to substantial savings. The general rule is that refinancing makes financial sense if you can reduce your rate by at least 0.75-1.0%.
            </li>
            <li>
              <strong>Challenge your property tax assessment:</strong> About 20-40% of property tax appeals result in a reduced assessment, according to the National Taxpayers Union Foundation, potentially saving hundreds per year.
            </li>
            <li>
              <strong>Shop for cheaper homeowners insurance:</strong> The Insurance Information Institute recommends comparing quotes from at least three insurers, which can save 10-15% on premiums.
            </li>
          </ul>
          <p>
            <strong className="text-foreground">Expert Tip:</strong> The Consumer Financial Protection Bureau advises that homeowners who shop around for mortgage rates save an average of $300 per year, which translates to $9,000 over a 30-year loan term. Spending just a few hours comparing lenders can yield significant long-term savings.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding the Mortgage Application Process</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            The mortgage application process typically follows these steps:
          </p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Pre-approval:</strong> This involves submitting your financial information to a lender who verifies your creditworthiness and provides an estimate of how much you can borrow. The Consumer Financial Protection Bureau strongly recommends getting pre-approved before house hunting, as it strengthens your position when making offers.
            </li>
            <li>
              <strong>Home shopping and offer:</strong> Once pre-approved, you can confidently shop for homes within your budget. When you find a suitable property, you'll make an offer that includes your pre-approval letter.
            </li>
            <li>
              <strong>Loan application:</strong> After your offer is accepted, you'll complete a full mortgage application (Uniform Residential Loan Application, or Form 1003). This comprehensive form collects detailed information about your finances, employment history, and the property.
            </li>
            <li>
              <strong>Processing and underwriting:</strong> The lender verifies all your information, orders an appraisal of the property, and assesses your application against their lending criteria. According to the Mortgage Bankers Association, this process takes an average of 40-50 days.
            </li>
            <li>
              <strong>Closing:</strong> Once approved, you'll attend a closing meeting where you'll sign the final documents, pay closing costs, and receive the keys to your new home. The National Association of Realtors reports that closing costs typically range from 2-5% of the loan amount.
            </li>
          </ol>
          <p className="mt-4">
            According to a Federal Reserve survey, the average homebuyer applies with 2-3 lenders and spends about 5-10 hours researching mortgage options. This relatively small investment of time can result in substantial savings over the life of your loan.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Hidden Costs of Homeownership</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Beyond your mortgage payment, homeownership involves several other expenses that should factor into your budget. According to Zillow Research, homeowners spend an average of $9,080 annually on hidden costs, including:
          </p>
          <div className="bg-muted/20 p-4 rounded-lg space-y-3 mb-4">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Property Taxes</span>
              <span>$2,700/year on average (varies significantly by location)</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Homeowners Insurance</span>
              <span>$1,200/year on average</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Utilities</span>
              <span>$2,800/year on average</span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="font-medium">Home Maintenance</span>
              <span>1-4% of home value annually ($3,000-$12,000 for a $300,000 home)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">HOA Fees (if applicable)</span>
              <span>$200-$400/month ($2,400-$4,800/year)</span>
            </div>
          </div>
          <p className="mb-4">
            Financial advisors generally recommend budgeting at least 1-4% of your home's value for annual maintenance and repairs. For a $300,000 home, that's $3,000-$12,000 per year, or $250-$1,000 per month—a significant addition to your monthly housing budget.
          </p>
          <div className="flex items-center gap-2 p-4 border border-border rounded-md bg-primary/5">
            <AlertTriangle size={20} className="text-primary flex-shrink-0" />
            <p className="text-sm">
              <strong>Important:</strong> Many first-time homebuyers focus solely on the mortgage payment and underestimate these additional costs. According to a survey by the National Association of Home Builders, 63% of new homeowners reported being surprised by maintenance and repair costs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Mortgage Affordability Guidelines</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Financial experts typically recommend these guidelines when determining how much house you can afford:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>
              <strong>The 28/36 Rule:</strong> Your monthly mortgage payment (including principal, interest, taxes, and insurance) should not exceed 28% of your gross monthly income, and your total debt payments (including your mortgage, car loans, student loans, etc.) should not exceed 36% of your gross monthly income. According to a Federal Reserve report, homeowners who stay within these guidelines have a mortgage default rate of less than 2%.
            </li>
            <li>
              <strong>The 25% Rule:</strong> A more conservative approach suggests keeping your housing payment (including utilities) below 25% of your take-home (after-tax) pay. Financial planner Dave Ramsey advocates this approach for better financial security.
            </li>
            <li>
              <strong>The 3x Income Rule:</strong> A simple guideline is that your home price should not exceed three times your annual household income. While this varies by location, Zillow Research found that the average price-to-income ratio nationwide is about 3.5, with coastal markets often exceeding 5.0.
            </li>
          </ul>
          <p>
            The Consumer Financial Protection Bureau notes that borrowers whose mortgage payments exceed 32% of their income have a substantially higher risk of payment difficulties. Their research shows that for every 5% increase in the payment-to-income ratio above 32%, the chance of mortgage stress increases by approximately 10%.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-primary/5 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Related Calculators</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our suite of real estate and financial calculators can help you make informed decisions about your property and investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/mortgage-recast-calculator" className="block bg-background hover:bg-accent/10 transition border border-border rounded-lg p-4 text-center">
              <Home className="mx-auto mb-2 text-primary" size={24} />
              <h3 className="font-semibold mb-1">Mortgage Recast Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate how a lump sum payment can lower your monthly payments</p>
            </Link>
            <Link href="/reverse-mortgage-calculator" className="block bg-background hover:bg-accent/10 transition border border-border rounded-lg p-4 text-center">
              <Home className="mx-auto mb-2 text-primary" size={24} />
              <h3 className="font-semibold mb-1">Reverse Mortgage Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your potential reverse mortgage benefits</p>
            </Link>
            <Link href="/prorated-rent-calculator" className="block bg-background hover:bg-accent/10 transition border border-border rounded-lg p-4 text-center">
              <Calculator className="mx-auto mb-2 text-primary" size={24} />
              <h3 className="font-semibold mb-1">Prorated Rent Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate partial rent payments for incomplete rental periods</p>
            </Link>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/calculators" className="inline-flex items-center">
                View All Calculators
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortgageContent;
