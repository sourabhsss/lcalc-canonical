
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ExternalLink, PercentSquare, Landmark, Wallet } from 'lucide-react';

interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

interface TaxDeductionGuideProps {
  resources: ResourceLink[];
}

const TaxDeductionGuide: React.FC<TaxDeductionGuideProps> = ({ resources }) => {
  return (
    <div className="mt-12 space-y-6">
      <h3 className="text-xl font-semibold">Understanding Taxes and Deductions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" />
              Federal Income Tax
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Federal income tax follows a progressive system with rates ranging from 10% to 37% in 2023.
              Your income is taxed in brackets, meaning you pay different rates on different portions of your income.
            </p>
            
            <div className="space-y-3 mt-4">
              <h4 className="font-medium text-sm">2023 Federal Tax Brackets (Single Filers)</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-2 rounded">10%: $0 to $11,000</div>
                <div className="bg-slate-50 p-2 rounded">12%: $11,001 to $44,725</div>
                <div className="bg-slate-50 p-2 rounded">22%: $44,726 to $95,375</div>
                <div className="bg-slate-50 p-2 rounded">24%: $95,376 to $182,100</div>
                <div className="bg-slate-50 p-2 rounded">32%: $182,101 to $231,250</div>
                <div className="bg-slate-50 p-2 rounded">35%: $231,251 to $578,125</div>
                <div className="bg-slate-50 p-2 rounded">37%: $578,126+</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <PercentSquare className="h-5 w-5 text-primary" />
              Common Payroll Deductions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium text-sm">Social Security (FICA)</h4>
              <p className="text-xs text-muted-foreground">
                Flat 6.2% on wages up to the annual wage base limit ($160,200 in 2023). This funds retirement, disability, 
                and survivor benefits.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm">Medicare</h4>
              <p className="text-xs text-muted-foreground">
                Flat 1.45% on all earned income with an additional 0.9% for high earners (over $200,000 for single filers).
                Funds the Medicare program providing healthcare for seniors.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm">Retirement Plans</h4>
              <p className="text-xs text-muted-foreground">
                401(k) and 403(b) contributions are pre-tax, reducing taxable income. The 2023 contribution limit is $22,500
                with an additional $7,500 catch-up for those over 50.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm">Health Insurance</h4>
              <p className="text-xs text-muted-foreground">
                Premiums for employer-sponsored plans are often deducted pre-tax, averaging $466/month for single coverage
                and $1,322/month for family coverage in 2023.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-slate-50 border rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-full shadow-sm">
            <Wallet className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Maximizing Your Take-Home Pay</h3>
            <p className="text-muted-foreground mb-4">
              Strategic financial planning can help you optimize your gross monthly income and retain more of your earnings.
              Consider these approaches to potentially increase your take-home pay and financial efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-2">Tax-Advantaged Accounts</h4>
                <p className="text-sm text-muted-foreground">
                  Maximize contributions to retirement accounts (401(k), IRA), Health Savings Accounts (HSAs), and Flexible Spending 
                  Accounts (FSAs) to reduce taxable income while saving for important financial goals.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-medium mb-2">Tax Credits vs. Deductions</h4>
                <p className="text-sm text-muted-foreground">
                  Tax credits (like Child Tax Credit, Earned Income Credit) directly reduce your tax bill dollar-for-dollar, 
                  while deductions reduce taxable income. Credits typically offer more significant savings.
                </p>
              </div>
            </div>
            
            <h4 className="font-medium mt-6 mb-3">Helpful Resources</h4>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-3 border rounded-lg">
                  <FileText className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <a 
                      href={resource.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      {resource.title}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxDeductionGuide;
