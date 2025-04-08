
import React, { useState } from 'react';
import { Percent, BarChart4 } from 'lucide-react';
import GstForm from './GstForm';
import GstResult from './GstResult';
import { calculateGST, gstFaqs } from './gstUtils';
import FAQSection from '@/components/FAQSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const GstCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [results, setResults] = useState<{
    originalAmount: number;
    gstAmount: number;
    totalAmount: number;
    rate: number;
    calculationType: 'exclusive' | 'inclusive';
    countryCode: string;
    rateName: string;
    currencySymbol: string;
  } | null>(null);

  const handleCalculate = (
    amount: number,
    rate: number,
    calculationType: 'exclusive' | 'inclusive',
    countryCode: string,
    rateName: string = 'Standard Rate',
    currencySymbol: string = '$'
  ) => {
    const calculationResults = calculateGST(amount, rate, calculationType);
    
    setResults({
      ...calculationResults,
      rate,
      calculationType,
      countryCode,
      rateName,
      currencySymbol
    });
    
    setCalculating(true);
  };

  const handleReset = () => {
    setResults(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Percent className="text-primary" />
          <h2 className="text-xl font-semibold">GST/VAT Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate Goods and Services Tax (GST), Value Added Tax (VAT), or Sales Tax for different countries and regions.
            This calculator supports both tax-exclusive and tax-inclusive calculations.
          </p>
          
          <GstForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && results && (
            <GstResult 
              originalAmount={results.originalAmount}
              gstAmount={results.gstAmount}
              totalAmount={results.totalAmount}
              rate={results.rate}
              calculationType={results.calculationType}
              countryCode={results.countryCode}
              rateName={results.rateName}
              currencySymbol={results.currencySymbol}
            />
          )}
          
          <div className="mt-12 space-y-6">
            <h3 className="font-medium text-xl">Understanding GST, VAT, and Sales Tax</h3>
            <p className="text-muted-foreground">
              Goods and Services Tax (GST), Value Added Tax (VAT), and Sales Tax are consumption taxes 
              implemented in various forms across different countries. While they share similar principles, 
              there are important differences in how they're applied and administered.
            </p>
            
            <h4 className="font-medium text-lg">What is GST?</h4>
            <p className="text-muted-foreground">
              Goods and Services Tax (GST) is a broad-based consumption tax levied on the supply of goods and 
              services. It's a value-added tax where tax is collected at each stage of the production and distribution 
              chain, with businesses able to claim credits for GST paid on their purchases. Countries like Australia, 
              India, Singapore, and New Zealand operate GST systems.
            </p>
            
            <p className="text-muted-foreground mt-2">
              For example, in Australia, GST is set at a flat rate of 10% on most goods and services, with 
              exemptions for basic food, healthcare, education, and some other essential services. The GST 
              was introduced in Australia in 2000, replacing various state and federal taxes with a single, 
              comprehensive system.
            </p>
            
            <h4 className="font-medium text-lg">What is VAT?</h4>
            <p className="text-muted-foreground">
              Value Added Tax (VAT) is essentially the same concept as GST but is the term used in the European 
              Union, United Kingdom, and many other countries. Like GST, VAT is collected at each stage of production 
              and distribution, with businesses able to claim credits for VAT paid on inputs.
            </p>
            
            <p className="text-muted-foreground mt-2">
              In the European Union, each member state sets its own VAT rates within parameters established by EU 
              directives. Standard rates typically range from 17% to 27%, with reduced rates for certain categories 
              of goods and services. For example, as of 2023, the standard VAT rate in Germany is 19%, in France it's 
              20%, and in Hungary it's 27%.
            </p>
            
            <h4 className="font-medium text-lg">What is Sales Tax?</h4>
            <p className="text-muted-foreground">
              Sales Tax differs from GST and VAT in that it's typically only applied at the final point of sale to 
              the consumer. It's not a multi-stage tax, so businesses don't collect or claim credits throughout the 
              supply chain. The United States primarily uses sales tax, which is set at the state and local levels 
              rather than federally.
            </p>
            
            <p className="text-muted-foreground mt-2">
              Sales tax rates vary significantly across different states and localities in the US. For instance, 
              California has a base sales tax rate of 7.25%, but local jurisdictions can add their own taxes, 
              resulting in combined rates that can exceed 10% in some areas. Five states (Alaska, Delaware, 
              Montana, New Hampshire, and Oregon) don't have a statewide sales tax.
            </p>
            
            <div className="bg-secondary/10 p-4 rounded-lg mt-4">
              <p className="text-sm">
                <strong>Note:</strong> While this calculator helps you determine tax amounts for different countries and 
                rates, tax regulations can be complex and change frequently. For official tax calculations or 
                business compliance, it's advisable to consult with a tax professional familiar with the specific 
                jurisdiction's requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold">GST/VAT Implementation Around the World</h3>
        
        <div className="space-y-4">
          <p>
            GST and VAT systems have been implemented worldwide as efficient methods for governments to collect revenue. 
            Here's how these systems are structured in different regions:
          </p>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>India's GST System</CardTitle>
              <CardDescription>One of the world's most complex GST implementations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                India implemented its GST system in July 2017, replacing multiple indirect taxes with a unified tax structure. 
                It features a dual GST model where both the central government (CGST) and state governments (SGST) collect tax 
                simultaneously on intra-state transactions, while interstate transactions are subject to Integrated GST (IGST).
              </p>
              <p>
                India's GST has multiple tax slabs:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>0% for essential items like fresh food and healthcare</li>
                <li>5% for items of mass consumption</li>
                <li>12% and 18% for standard goods and services</li>
                <li>28% for luxury items and sin goods (with additional cesses in some cases)</li>
              </ul>
              <p className="mt-3">
                This multi-tiered approach aims to balance revenue generation with social equity by taxing essential goods at 
                lower rates.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Australia's GST System</CardTitle>
              <CardDescription>A simple flat-rate approach</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                Australia introduced its 10% GST in July 2000. Unlike many other countries, Australia maintains a single rate 
                for all taxable goods and services, simplifying compliance and administration. However, certain categories 
                are GST-free, including:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Most basic food items</li>
                <li>Healthcare and medical services</li>
                <li>Education services</li>
                <li>Childcare services</li>
                <li>Exports</li>
              </ul>
              <p className="mt-3">
                The Australian Tax Office (ATO) requires businesses with an annual turnover of AUD 75,000 or more to register 
                for GST. Registered businesses must file regular Business Activity Statements (BAS) to report and pay their 
                GST obligations.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>European Union VAT System</CardTitle>
              <CardDescription>Harmonized but with national variations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-3">
                The EU has established a common framework for VAT, but each member state sets its own rates within agreed 
                parameters. As of 2023:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Standard rates must be at least 15% (currently ranging from 17% in Luxembourg to 27% in Hungary)</li>
                <li>Member states can apply up to two reduced rates (minimum 5%) for specific categories</li>
                <li>Some countries have "super-reduced" rates (below 5%) for certain goods</li>
              </ul>
              <p className="mt-3">
                The EU has a "destination principle" for cross-border transactions within the EU, where the VAT is paid in 
                the country where goods are consumed rather than where they're produced. This system has been enhanced by 
                the One-Stop Shop (OSS) mechanism to simplify compliance for businesses operating across multiple EU countries.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <h3 className="text-2xl font-semibold mt-8">Business Impacts and Compliance</h3>
        
        <div className="space-y-4">
          <p>
            Understanding GST/VAT is crucial for businesses of all sizes. Here's how these taxes affect business operations:
          </p>
          
          <h4 className="font-medium text-lg">Registration Requirements</h4>
          <p className="text-muted-foreground">
            Most countries establish thresholds at which businesses must register for GST/VAT. These thresholds vary widely:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
            <li>Australia: AUD 75,000 annual turnover (AUD 150,000 for non-profit organizations)</li>
            <li>United Kingdom: GBP 85,000 annual turnover</li>
            <li>Singapore: SGD 1 million annual turnover</li>
            <li>India: INR 40 lakhs for goods, INR 20 lakhs for services (lower in some states)</li>
          </ul>
          
          <h4 className="font-medium text-lg">Record-Keeping and Filing</h4>
          <p className="text-muted-foreground">
            GST/VAT registered businesses must maintain detailed records of:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
            <li>All sales and purchases</li>
            <li>Tax collected on sales (output tax)</li>
            <li>Tax paid on purchases (input tax)</li>
            <li>Adjustments and corrections</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            Filing frequencies vary by country and sometimes by business size, ranging from monthly to annually. 
            Many jurisdictions now require electronic filing, with penalties for late or incorrect submissions.
          </p>
          
          <h4 className="font-medium text-lg">Cash Flow Considerations</h4>
          <p className="text-muted-foreground">
            GST/VAT can significantly impact business cash flow. Businesses collect tax from customers but may not 
            need to remit it to tax authorities until the end of the reporting period. Conversely, businesses pay 
            GST/VAT on purchases but may not reclaim it until filing their return.
          </p>
          <p className="text-muted-foreground mt-2">
            This timing difference can create either a cash flow advantage or disadvantage, depending on a business's 
            position in the supply chain and the specific rules in their jurisdiction.
          </p>
          
          <h4 className="font-medium text-lg">International Transactions</h4>
          <p className="text-muted-foreground">
            Cross-border transactions introduce additional complexity to GST/VAT compliance:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
            <li>Exports are typically zero-rated (exempt with credit)</li>
            <li>Imports are usually subject to GST/VAT at the border</li>
            <li>Digital services often have special rules, with many countries requiring non-resident providers to register and collect tax</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            The OECD's International VAT/GST Guidelines provide frameworks for international consistency, but significant 
            variations still exist between countries.
          </p>
        </div>
        
        <h3 className="text-2xl font-semibold mt-8">Digital Economy and GST/VAT Challenges</h3>
        
        <div className="space-y-4">
          <p>
            The growth of e-commerce and digital services has created new challenges for GST/VAT systems that were 
            designed primarily for traditional commerce:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2">Challenge</th>
                  <th className="border border-border px-4 py-2">Policy Response</th>
                  <th className="border border-border px-4 py-2">Country Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Digital Services</td>
                  <td className="border border-border px-4 py-2">Requiring non-resident providers to register and collect tax</td>
                  <td className="border border-border px-4 py-2">EU (MOSS/OSS system), Australia, New Zealand, Singapore</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Low-Value Imports</td>
                  <td className="border border-border px-4 py-2">Removing de minimis thresholds; making marketplaces responsible</td>
                  <td className="border border-border px-4 py-2">Australia (since 2018), EU (since 2021), UK (since 2021)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Platform Economy</td>
                  <td className="border border-border px-4 py-2">Making platforms liable for collecting tax on third-party sales</td>
                  <td className="border border-border px-4 py-2">EU, UK, Australia (for low-value imports)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Cryptocurrencies</td>
                  <td className="border border-border px-4 py-2">Clarifying tax treatment of crypto assets and transactions</td>
                  <td className="border border-border px-4 py-2">Singapore (exempt), Australia (taxable with exceptions)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-3">
            These challenges continue to evolve as technology advances and global e-commerce grows. Jurisdictions are 
            constantly updating their GST/VAT frameworks to capture digital transactions effectively while minimizing 
            the compliance burden on businesses.
          </p>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Global GST/VAT Rate Comparison</h3>
        <p className="mb-4">
          Standard tax rates vary significantly across different regions. Here's a comparison of current rates in major economies:
        </p>
        
        <div className="mb-8">
          <BarChart4 className="h-56 w-full text-primary" />
          <p className="text-center text-sm text-muted-foreground mt-2">
            Chart: Standard GST/VAT rates across selected countries (2023)
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2">Country/Region</th>
                <th className="border border-border px-4 py-2">Standard Rate</th>
                <th className="border border-border px-4 py-2">System Type</th>
                <th className="border border-border px-4 py-2">Implementation Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">Hungary</td>
                <td className="border border-border px-4 py-2">27%</td>
                <td className="border border-border px-4 py-2">VAT</td>
                <td className="border border-border px-4 py-2">1988</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Sweden, Denmark, Norway</td>
                <td className="border border-border px-4 py-2">25%</td>
                <td className="border border-border px-4 py-2">VAT</td>
                <td className="border border-border px-4 py-2">Various</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">United Kingdom</td>
                <td className="border border-border px-4 py-2">20%</td>
                <td className="border border-border px-4 py-2">VAT</td>
                <td className="border border-border px-4 py-2">1973</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">France, Italy</td>
                <td className="border border-border px-4 py-2">20%</td>
                <td className="border border-border px-4 py-2">VAT</td>
                <td className="border border-border px-4 py-2">1954 (France), 1972 (Italy)</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Germany</td>
                <td className="border border-border px-4 py-2">19%</td>
                <td className="border border-border px-4 py-2">VAT</td>
                <td className="border border-border px-4 py-2">1968</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">India (standard)</td>
                <td className="border border-border px-4 py-2">18%</td>
                <td className="border border-border px-4 py-2">GST</td>
                <td className="border border-border px-4 py-2">2017</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">New Zealand</td>
                <td className="border border-border px-4 py-2">15%</td>
                <td className="border border-border px-4 py-2">GST</td>
                <td className="border border-border px-4 py-2">1986</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">South Africa</td>
                <td className="border border-border px-4 py-2">15%</td>
                <td className="border border-border px-4 py-2">VAT</td>
                <td className="border border-border px-4 py-2">1991</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Australia</td>
                <td className="border border-border px-4 py-2">10%</td>
                <td className="border border-border px-4 py-2">GST</td>
                <td className="border border-border px-4 py-2">2000</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Japan</td>
                <td className="border border-border px-4 py-2">10%</td>
                <td className="border border-border px-4 py-2">Consumption Tax</td>
                <td className="border border-border px-4 py-2">1989</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Singapore</td>
                <td className="border border-border px-4 py-2">8%</td>
                <td className="border border-border px-4 py-2">GST</td>
                <td className="border border-border px-4 py-2">1994</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Canada (federal)</td>
                <td className="border border-border px-4 py-2">5%</td>
                <td className="border border-border px-4 py-2">GST</td>
                <td className="border border-border px-4 py-2">1991</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">United States</td>
                <td className="border border-border px-4 py-2">Varies by state/local</td>
                <td className="border border-border px-4 py-2">Sales Tax</td>
                <td className="border border-border px-4 py-2">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-6">
          It's worth noting that many countries apply reduced rates to essential goods and services. For example, the UK 
          applies a reduced 5% rate on domestic fuel and power, while France applies a 5.5% rate on food products.
        </p>
      </div>
      
      <FAQSection faqs={gstFaqs} />
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Related Calculators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">APY Calculator</h4>
            <p className="mb-4">
              Calculate Annual Percentage Yield (APY) for your investments and see how compound interest affects your returns over time.
            </p>
            <a href="/apy-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Mortgage Calculator</h4>
            <p className="mb-4">
              Calculate your monthly mortgage payments, view amortization schedules, and understand the total cost of homeownership.
            </p>
            <a href="/mortgage-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Five Number Summary Calculator</h4>
            <p className="mb-4">
              Calculate the minimum, Q1, median, Q3, and maximum values from a dataset for statistical analysis.
            </p>
            <a href="/five-number-summary-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Prorated Rent Calculator</h4>
            <p className="mb-4">
              Calculate partial rent payments for incomplete rental periods with this easy-to-use tool.
            </p>
            <a href="/prorated-rent-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GstCalculator;
