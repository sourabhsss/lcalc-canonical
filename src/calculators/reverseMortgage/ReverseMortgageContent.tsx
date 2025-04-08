import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calculator, Check, AlertTriangle, HelpCircle, PiggyBank, Home, TrendingUp } from 'lucide-react';

const ReverseMortgageContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">What is a Reverse Mortgage?</h2>
        <p className="text-muted-foreground">
          A reverse mortgage is a financial product for homeowners aged 62 and older that allows them to convert part of their home equity into cash, a fixed monthly payment, or a line of credit. Unlike a traditional mortgage where you make payments to a lender, in a reverse mortgage, the lender pays you. The loan is repaid when the borrower moves out, sells the home, or passes away.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardContent className="pt-6">
              <Home className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Home Equity Conversion</h3>
              <p className="text-sm text-muted-foreground">
                Convert your home equity into cash without selling your home while maintaining ownership.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <PiggyBank className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">No Monthly Payments</h3>
              <p className="text-sm text-muted-foreground">
                Unlike traditional mortgages, you don't need to make monthly mortgage payments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Growing Line of Credit</h3>
              <p className="text-sm text-muted-foreground">
                The unused portion of a line of credit grows over time, increasing your available funds.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Types of Reverse Mortgages</h2>
        <p className="mb-4 text-muted-foreground">
          There are three main types of reverse mortgages, each serving different needs and situations:
        </p>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Home Equity Conversion Mortgage (HECM)</h3>
            <p className="text-muted-foreground mb-2">
              The most common type, HECMs are federally-insured reverse mortgages backed by the U.S. Department of Housing and Urban Development (HUD).
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Federally regulated with borrower protections</li>
              <li>Maximum loan limits ($1,089,300 in 2023)</li>
              <li>Requires financial counseling before approval</li>
              <li>Multiple payment options available</li>
            </ul>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Proprietary Reverse Mortgages</h3>
            <p className="text-muted-foreground mb-2">
              Private loans by companies that are not federally insured, typically for higher-value homes above the HECM limit.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Can provide larger loan amounts for high-value homes</li>
              <li>Not federally insured, fewer regulatory protections</li>
              <li>Terms vary by lender</li>
            </ul>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Single-Purpose Reverse Mortgages</h3>
            <p className="text-muted-foreground mb-2">
              Offered by some state and local government agencies and nonprofit organizations, typically for a specific purpose.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Lowest-cost option</li>
              <li>Limited eligibility (usually lower-income homeowners)</li>
              <li>Funds can only be used for specified purposes (home repairs, property taxes, etc.)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">How a Reverse Mortgage Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Eligibility Requirements</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span>Borrower must be at least 62 years old</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span>Own your home outright or have a low mortgage balance</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span>Home must be your primary residence</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span>Property must meet FHA standards</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span>Must meet financial eligibility criteria</span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span>Complete HUD-approved counseling</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Payment Options</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Lump Sum</h4>
                <p className="text-sm text-muted-foreground">One-time payment at a fixed interest rate</p>
              </li>
              <li>
                <h4 className="font-medium">Tenure</h4>
                <p className="text-sm text-muted-foreground">Equal monthly payments as long as one borrower lives in the home</p>
              </li>
              <li>
                <h4 className="font-medium">Term</h4>
                <p className="text-sm text-muted-foreground">Equal monthly payments for a fixed period</p>
              </li>
              <li>
                <h4 className="font-medium">Line of Credit</h4>
                <p className="text-sm text-muted-foreground">Draw funds as needed, with unused amounts growing over time</p>
              </li>
              <li>
                <h4 className="font-medium">Modified Tenure/Term</h4>
                <p className="text-sm text-muted-foreground">Combination of line of credit with monthly payments</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Costs & Fees</h2>
        <p className="mb-4 text-muted-foreground">
          Understanding the costs associated with reverse mortgages is crucial to determining if it's the right financial solution for you. While these loans provide access to home equity without monthly payments, they do come with various fees:
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded mr-3 flex-shrink-0">
              <span className="font-semibold">1</span>
            </div>
            <div>
              <h4 className="font-semibold">Mortgage Insurance Premium (MIP)</h4>
              <p className="text-sm text-muted-foreground">
                For HECMs, you'll pay an upfront MIP of 2% of the home's appraised value (or FHA limit, whichever is less), plus an annual MIP of 0.5% of the outstanding loan balance.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded mr-3 flex-shrink-0">
              <span className="font-semibold">2</span>
            </div>
            <div>
              <h4 className="font-semibold">Origination Fee</h4>
              <p className="text-sm text-muted-foreground">
                Lenders charge an origination fee that can range from $2,500 to $6,000, depending on your home's value. The fee is typically 2% of the first $200,000 of your home's value plus 1% of the value above $200,000, with a cap of $6,000.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded mr-3 flex-shrink-0">
              <span className="font-semibold">3</span>
            </div>
            <div>
              <h4 className="font-semibold">Closing Costs</h4>
              <p className="text-sm text-muted-foreground">
                Similar to traditional mortgages, reverse mortgages include closing costs for services like appraisals, title searches, surveys, inspections, recording fees, and other closing services, typically ranging from $2,000 to $3,000.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded mr-3 flex-shrink-0">
              <span className="font-semibold">4</span>
            </div>
            <div>
              <h4 className="font-semibold">Servicing Fees</h4>
              <p className="text-sm text-muted-foreground">
                Lenders may charge monthly servicing fees, typically around $30-$35, although many modern reverse mortgages have eliminated or reduced these fees.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded mr-3 flex-shrink-0">
              <span className="font-semibold">5</span>
            </div>
            <div>
              <h4 className="font-semibold">Interest</h4>
              <p className="text-sm text-muted-foreground">
                The loan accrues interest over time, which is added to the loan balance. Rates can be fixed or variable, depending on the payment option you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Pros and Cons of Reverse Mortgages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-green-200 p-4 rounded-lg bg-green-50">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <Check className="text-green-500 mr-2" size={20} />
              Advantages
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">No monthly mortgage payments required</li>
              <li className="text-sm">Stay in your home and maintain ownership</li>
              <li className="text-sm">Use the funds for any purpose</li>
              <li className="text-sm">Non-recourse loan (you'll never owe more than the home's value)</li>
              <li className="text-sm">Multiple payment options to suit different needs</li>
              <li className="text-sm">Line of credit grows over time</li>
              <li className="text-sm">Social Security and Medicare benefits usually not affected</li>
            </ul>
          </div>
          
          <div className="border border-red-200 p-4 rounded-lg bg-red-50">
            <h3 className="font-semibold text-lg mb-3 flex items-center">
              <AlertTriangle className="text-red-500 mr-2" size={20} />
              Disadvantages
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">High upfront costs and fees</li>
              <li className="text-sm">Interest compounds over time, reducing home equity</li>
              <li className="text-sm">May affect eligibility for need-based programs like Medicaid</li>
              <li className="text-sm">Must maintain the home and pay property taxes and insurance</li>
              <li className="text-sm">Reduces inheritance for heirs</li>
              <li className="text-sm">Loan becomes due when you move out for more than 12 months</li>
              <li className="text-sm">Complexity can lead to misunderstandings</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Who Should Consider a Reverse Mortgage?</h2>
        <p className="mb-4 text-muted-foreground">
          Reverse mortgages can be beneficial for certain individuals, but they're not ideal for everyone. Consider a reverse mortgage if:
        </p>
        <div className="space-y-3">
          <div className="flex items-start">
            <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">You plan to stay in your home long-term.</span> Reverse mortgages have high upfront costs, so they generally make more sense if you plan to stay in your home for several years.
            </p>
          </div>
          <div className="flex items-start">
            <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">You need to supplement retirement income.</span> If you're on a fixed income and need additional funds for daily expenses or healthcare costs.
            </p>
          </div>
          <div className="flex items-start">
            <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">You want to age in place.</span> If you need funds to modify your home for aging or to pay for in-home care.
            </p>
          </div>
          <div className="flex items-start">
            <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">You have limited retirement savings.</span> If most of your wealth is tied up in your home equity.
            </p>
          </div>
          <div className="flex items-start">
            <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">You don't have mortgage payments, or can pay off your current mortgage.</span> A reverse mortgage must be in first lien position, so any existing mortgage must be paid off.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <h3 className="font-semibold text-lg mb-2 flex items-center">
            <HelpCircle className="text-orange-500 mr-2" size={20} />
            A Reverse Mortgage May Not Be Right If:
          </h3>
          <ul className="space-y-2">
            <li className="text-sm flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>You plan to move in the near future</span>
            </li>
            <li className="text-sm flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>You want to leave your home to your heirs</span>
            </li>
            <li className="text-sm flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>You have other lower-cost options available</span>
            </li>
            <li className="text-sm flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>You cannot afford property taxes, insurance, and home maintenance</span>
            </li>
            <li className="text-sm flex items-start">
              <AlertTriangle className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
              <span>You rely on means-tested government benefits that could be affected</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Real-World Example</h2>
        <div className="p-5 bg-gray-50 rounded-lg border">
          <h3 className="font-semibold mb-2">Case Study: Meeting Retirement Needs</h3>
          <p className="mb-3 text-muted-foreground">
            Consider Martha, a 75-year-old widow living in a home valued at $350,000 with no mortgage. On a fixed income of $1,800 monthly from Social Security, she struggles with healthcare costs and home maintenance.
          </p>
          <div className="mb-3">
            <h4 className="font-medium">Martha's Financial Situation:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Home Value: $350,000</li>
              <li>Existing Mortgage: $0</li>
              <li>Age: 75</li>
              <li>Monthly Income: $1,800</li>
              <li>Monthly Expenses: $2,200</li>
            </ul>
          </div>
          <div className="mb-3">
            <h4 className="font-medium">Reverse Mortgage Solution:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground ml-4 space-y-1">
              <li>Martha qualifies for a HECM reverse mortgage with a principal limit of approximately $175,000 (50% of her home value)</li>
              <li>After paying closing costs and fees of about $15,000, she has $160,000 available</li>
              <li>She chooses a tenure payment option, receiving about $900 per month for as long as she lives in the home</li>
              <li>This additional income bridges her monthly shortfall and provides a small cushion for emergencies</li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            This arrangement allows Martha to stay in her home comfortably without financial stress. She maintains ownership of her home while accessing her equity to improve her quality of life.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Alternatives to Consider</h2>
        <p className="mb-4 text-muted-foreground">
          Before deciding on a reverse mortgage, explore these alternatives that might better suit your financial needs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Home Equity Loan or HELOC</h3>
            <p className="text-sm text-muted-foreground">
              Traditional home equity loans or lines of credit typically have lower fees than reverse mortgages but require monthly payments. They're good options if you need a lump sum or access to funds for a specific purpose and can manage the monthly payments.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Use our <Link href="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</Link> to estimate payments.
            </p>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Refinancing</h3>
            <p className="text-sm text-muted-foreground">
              If interest rates have dropped since you got your mortgage, refinancing could lower your monthly payments and possibly allow you to take some cash out. This option works best if you can secure a significantly lower interest rate.
            </p>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Downsizing</h3>
            <p className="text-sm text-muted-foreground">
              Selling your current home and moving to a less expensive one could free up equity while reducing maintenance costs, property taxes, and utilities. This option provides a clean break and potentially significant cash.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Our <Link href="/prorated-rent-calculator" className="text-primary hover:underline">Prorated Rent Calculator</Link> can help if you're transitioning to renting.
            </p>
          </div>
          
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Government Assistance Programs</h3>
            <p className="text-sm text-muted-foreground">
              Various federal, state, and local programs can help seniors with property taxes, utility bills, home repairs, and other expenses. These include property tax exemptions for seniors, energy assistance programs, and home modification grants.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="bg-primary/5 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
          <p className="mb-4 text-muted-foreground">
            Explore these related calculators to help with other financial decisions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/work-experience-calculator" className="flex items-center p-3 border rounded-lg hover:bg-primary/5 transition-colors">
              <Calculator className="text-primary mr-3" size={24} />
              <div>
                <h3 className="font-medium">Work Experience Calculator</h3>
                <p className="text-sm text-muted-foreground">Calculate your total work experience for retirement planning</p>
              </div>
              <ArrowRight className="ml-auto" size={18} />
            </Link>
            <Link href="/prorated-rent-calculator" className="flex items-center p-3 border rounded-lg hover:bg-primary/5 transition-colors">
              <Calculator className="text-primary mr-3" size={24} />
              <div>
                <h3 className="font-medium">Prorated Rent Calculator</h3>
                <h3 className="text-sm text-muted-foreground">Calculate partial rent payments for housing transitions</h3>
              </div>
              <ArrowRight className="ml-auto" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReverseMortgageContent;
