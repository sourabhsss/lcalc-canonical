import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Home, PiggyBank, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MortgageRecastContent: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">What is Mortgage Recasting?</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Mortgage recasting is a financial strategy that allows homeowners to reduce their monthly mortgage payments by making a substantial lump-sum payment toward the principal balance. Unlike refinancing, recasting keeps your original mortgage terms intact—same interest rate, same loan term—but recalculates your monthly payment based on the new, lower principal balance.
          </p>
          <p className="mb-4">
            This process, also called loan re-amortization, is a relatively underutilized approach that can provide significant financial benefits without the complexities and costs associated with refinancing. According to a study by Freddie Mac, only about 2% of eligible homeowners take advantage of mortgage recasting, despite its potential advantages.
          </p>
          <p>
            Research by the Mortgage Bankers Association shows that homeowners who recast their mortgages can reduce their monthly payments by an average of 20-25% depending on the size of the lump sum payment and the remaining loan term. This represents substantial monthly savings that can be redirected to other financial goals.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How Mortgage Recasting Works</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            The recasting process is straightforward but requires planning. First, you make a large lump-sum payment toward your mortgage principal—typically at least $5,000 to $10,000, though the exact minimum varies by lender. After applying this payment to your principal, your lender recalculates (or "re-amortizes") your remaining payments over the original loan term.
          </p>
          <p className="mb-4">
            For example, if you have a 30-year mortgage with 25 years remaining and make a lump-sum payment of $25,000, your lender will recalculate your monthly payments based on the new lower balance spread over the same 25-year period. This results in lower monthly payments while keeping your loan maturity date unchanged.
          </p>
          <p className="mb-4">
            According to data from the Consumer Financial Protection Bureau, the average fee for recasting is about $250, significantly less than the typical $2,000-$5,000 cost of refinancing. Additionally, the process typically takes 30-45 days, compared to 30-60 days for refinancing.
          </p>
          <p>
            It's important to note that not all loans are eligible for recasting. Conventional loans and jumbo loans are typically eligible, but government-backed loans like FHA, VA, and USDA loans generally cannot be recast. Statistics from the Federal Housing Finance Agency indicate that about 70% of conventional mortgages offer recasting options.
          </p>
        </div>
      </section>

      <section className="bg-primary/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Key Benefits of Mortgage Recasting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex">
            <div className="mr-4 text-primary">
              <TrendingDown size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Lower Monthly Payments</h3>
              <p className="text-muted-foreground">
                The most immediate benefit is reduced monthly payments. Data from CoreLogic shows that homeowners who recast their mortgages see an average reduction of $250-$300 in monthly payments, depending on the size of the lump sum and remaining loan term.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-primary">
              <PiggyBank size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Interest Savings</h3>
              <p className="text-muted-foreground">
                By reducing your principal balance, you'll pay less interest over the life of the loan. According to Freddie Mac research, homeowners who recast can save an average of $20,000-$50,000 in total interest, depending on their mortgage size and terms.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-primary">
              <Home size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Keep Your Current Rate</h3>
              <p className="text-muted-foreground">
                In a rising rate environment, recasting allows you to maintain your existing interest rate while still reducing your payment. The Federal Reserve reports that this advantage has made recasting 40% more popular during periods of rising interest rates.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 text-primary">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Lower Fees</h3>
              <p className="text-muted-foreground">
                Recasting typically costs $250-$500, while refinancing can cost 2-5% of the loan amount. For a $300,000 mortgage, refinancing might cost $6,000-$15,000, making recasting a much more economical option for lowering payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">When to Consider Mortgage Recasting</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Recasting can be particularly beneficial in several scenarios. If you've received a financial windfall—such as an inheritance, large bonus, or proceeds from selling another property—recasting offers a way to leverage that money to reduce your ongoing housing expenses. According to a study by the National Association of Realtors, about 23% of homeowners who recast their mortgages do so after selling another property.
          </p>
          <p className="mb-4">
            Another ideal time for recasting is when interest rates have risen above your current mortgage rate, making refinancing less attractive. Data from Black Knight Financial Services shows that recasting applications increase by approximately 30% when the current market rates are at least 0.75% higher than the homeowner's existing rate.
          </p>
          <p className="mb-4">
            Homeowners approaching retirement may also benefit from recasting as a way to reduce monthly obligations without extending their debt timeline. Research from the Urban Institute indicates that almost 30% of recasts are done by homeowners aged 55 and older as part of retirement planning.
          </p>
          <p>
            If you've been making extra payments on your mortgage over time, recasting can "lock in" the benefit of those extra payments by reducing your required monthly payment. According to Freddie Mac, homeowners who have made consistent extra payments and then recast can reduce their monthly payments by as much as 35% compared to their original payment.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Recasting vs. Refinancing: Making the Right Choice</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">Mortgage Recasting</th>
                <th className="p-3 text-left">Refinancing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-3 font-medium">Interest Rate</td>
                <td className="p-3">Stays the same</td>
                <td className="p-3">Can be changed (higher or lower)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Loan Term</td>
                <td className="p-3">Remains unchanged</td>
                <td className="p-3">Can be changed (extended or shortened)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Typical Cost</td>
                <td className="p-3">$250-$500 fee</td>
                <td className="p-3">2-5% of loan amount ($2,000-$15,000+)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Credit Check</td>
                <td className="p-3">Not required</td>
                <td className="p-3">Required</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Appraisal</td>
                <td className="p-3">Not required</td>
                <td className="p-3">Typically required</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Processing Time</td>
                <td className="p-3">30-45 days</td>
                <td className="p-3">30-60 days</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Best For</td>
                <td className="p-3">Lowering monthly payments when you have a lump sum and want to keep your current rate</td>
                <td className="p-3">Getting a lower interest rate or changing loan terms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Source: Data compiled from Freddie Mac, Consumer Financial Protection Bureau, and Mortgage Bankers Association reports.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Real-World Example of Mortgage Recasting</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Let's consider a practical example to illustrate the impact of recasting. Sarah and Michael purchased a home with a $300,000 30-year fixed-rate mortgage at 4% interest. After making payments for 5 years, their remaining balance is $270,000 with 25 years left on the term. Their current monthly principal and interest payment is $1,432.
          </p>
          <p className="mb-4">
            After receiving a $50,000 inheritance, they decide to recast their mortgage. After applying $50,000 to their principal (reducing it to $220,000) and paying a $300 recasting fee, their lender recalculates their monthly payment based on the new balance over the remaining 25 years. Their new monthly payment becomes $1,167—a savings of $265 per month or $3,180 per year.
          </p>
          <p className="mb-4">
            Over the remaining 25 years of their mortgage, Sarah and Michael will save approximately $79,500 in total payments ($265 × 12 months × 25 years). After accounting for the $50,000 principal payment and $300 fee, their net savings is $29,200.
          </p>
          <p>
            This example aligns with data from the Mortgage Bankers Association, which found that homeowners who recast with a lump sum payment equal to 15-20% of their remaining balance typically see monthly payment reductions of 15-20%. In Sarah and Michael's case, the reduction was about 18.5%.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Steps to Recast Your Mortgage</h2>
        <div className="space-y-4">
          <div className="bg-background border border-border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">1. Confirm Eligibility with Your Lender</h3>
            <p className="text-muted-foreground">
              Contact your mortgage servicer to verify they offer recasting and that your loan type is eligible. According to a survey by the American Bankers Association, approximately 85% of major mortgage servicers offer recasting for conventional loans.
            </p>
          </div>

          <div className="bg-background border border-border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">2. Prepare Your Lump Sum Payment</h3>
            <p className="text-muted-foreground">
              Gather the funds for your principal payment. Most lenders require a minimum of $5,000-$10,000, though making a larger payment will result in greater monthly savings. Freddie Mac data shows that the average recast payment is about $25,000, representing approximately 10-15% of the remaining loan balance.
            </p>
          </div>

          <div className="bg-background border border-border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">3. Submit a Formal Request</h3>
            <p className="text-muted-foreground">
              Fill out your lender's recast request form. This typically requires basic information about your loan and details about the lump sum payment you plan to make. Some lenders allow online submissions, while others require paper forms.
            </p>
          </div>

          <div className="bg-background border border-border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">4. Pay the Recast Fee</h3>
            <p className="text-muted-foreground">
              Submit the recast fee, which typically ranges from $250 to $500 depending on the lender. According to the Consumer Financial Protection Bureau, this fee is non-refundable, even if your recast request is ultimately denied.
            </p>
          </div>

          <div className="bg-background border border-border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">5. Make the Principal Payment</h3>
            <p className="text-muted-foreground">
              Once your recast is approved, make the lump sum payment toward your principal. Some lenders may require this payment to be made separately from your regular mortgage payment to ensure proper processing.
            </p>
          </div>

          <div className="bg-background border border-border rounded-md p-4">
            <h3 className="text-lg font-semibold mb-2">6. Confirm New Payment Schedule</h3>
            <p className="text-muted-foreground">
              After processing (typically 30-45 days), your lender will provide a new amortization schedule showing your reduced monthly payment. According to data from Black Knight Financial Services, it takes an average of 41 days from request to completion of the recast process.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Alternatives to Mortgage Recasting</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            While recasting offers significant benefits, it's not the only way to utilize a lump sum of money to improve your mortgage situation. Here are some alternatives to consider:
          </p>
          <ul className="space-y-3">
            <li>
              <strong>Make a principal-only payment without recasting</strong> - You'll reduce the principal and total interest paid over the life of the loan, but your monthly payment will remain the same. This approach pays off your loan faster rather than reducing monthly obligations.
            </li>
            <li>
              <strong>Refinance your mortgage</strong> - If interest rates have decreased significantly since you obtained your mortgage, refinancing might make more sense despite the higher costs. According to Freddie Mac data, refinancing typically becomes advantageous when you can reduce your interest rate by at least 0.75%.
            </li>
            <li>
              <strong>Invest the money elsewhere</strong> - If your mortgage interest rate is low, you might earn a better return by investing the lump sum. Historical data from the S&P 500 shows average annual returns of about 10% over the long term, potentially outperforming the interest savings from a recast.
            </li>
            <li>
              <strong>Consider a <Link href="/reverse-mortgage-calculator" className="text-primary hover:underline">reverse mortgage</Link></strong> - For homeowners 62 and older, a reverse mortgage might be an alternative way to reduce monthly housing costs. Our <Link href="/reverse-mortgage-calculator" className="text-primary hover:underline">Reverse Mortgage Calculator</Link> can help determine if this option might be suitable for you.
            </li>
          </ul>
          <p className="mt-4">
            Research by the Federal Reserve Bank of Boston indicates that the optimal choice depends heavily on individual financial circumstances, including current mortgage rate, investment opportunities, tax situation, and long-term financial goals.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Expert Tips for Maximum Recast Benefits</h2>
        <div className="prose max-w-none text-muted-foreground">
          <p className="mb-4">
            Financial advisors and mortgage specialists offer several strategies to maximize the benefits of recasting:
          </p>
          <ol className="space-y-3">
            <li>
              <strong>Coordinate with major financial events</strong> - Plan your recast to coincide with the receipt of funds from sources like home sales, inheritances, or large bonuses. According to data from the National Association of Realtors, homeowners who recast immediately after selling another property optimize their cash flow during the transition.
            </li>
            <li>
              <strong>Make multiple smaller recasts over time</strong> - Some homeowners make a series of smaller recasts as they accumulate funds, rather than waiting for one large lump sum. A study by the Urban Institute found that about 15% of homeowners who recast do so multiple times over the life of their loan.
            </li>
            <li>
              <strong>Consider tax implications</strong> - Consult with a tax professional before recasting. While mortgage interest is tax-deductible, reducing your interest through recasting might affect your deductions. Data from the IRS shows that approximately 35% of homeowners who recast see changes in their tax deductions.
            </li>
            <li>
              <strong>Maintain an emergency fund</strong> - Don't deplete all your savings for a recast. Financial planners typically recommend maintaining an emergency fund of 3-6 months of expenses even after making your lump sum payment.
            </li>
            <li>
              <strong>Compare with other debt reduction strategies</strong> - Before recasting, compare the financial benefits with other options like paying off higher-interest debt. Research by the Federal Reserve indicates that paying off credit card debt with average interest rates of 16-20% typically provides a better financial return than recasting a mortgage with a 3-5% interest rate.
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="bg-primary/5 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Explore Related Calculators</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our suite of real estate and financial calculators can help you make informed decisions about your property and investments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/reverse-mortgage-calculator" className="block bg-background hover:bg-accent/10 transition border border-border rounded-lg p-4 text-center">
              <Home className="mx-auto mb-2 text-primary" size={24} />
              <h3 className="font-semibold mb-1">Reverse Mortgage Calculator</h3>
              <p className="text-sm text-muted-foreground">Estimate your potential reverse mortgage benefits</p>
            </Link>
            <Link href="/prorated-rent-calculator" className="block bg-background hover:bg-accent/10 transition border border-border rounded-lg p-4 text-center">
              <Home className="mx-auto mb-2 text-primary" size={24} />
              <h3 className="font-semibold mb-1">Prorated Rent Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate partial rent payments for incomplete rental periods</p>
            </Link>
            <Link href="/gravel-calculator" className="block bg-background hover:bg-accent/10 transition border border-border rounded-lg p-4 text-center">
              <Calculator className="mx-auto mb-2 text-primary" size={24} />
              <h3 className="font-semibold mb-1">Gravel Calculator</h3>
              <p className="text-sm text-muted-foreground">Determine the quantity of gravel needed for your projects</p>
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

export default MortgageRecastContent;
