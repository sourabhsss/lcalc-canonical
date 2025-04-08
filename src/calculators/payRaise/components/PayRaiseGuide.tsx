
import React from 'react';
import { Check, TrendingUp } from 'lucide-react';

const PayRaiseGuide: React.FC = () => {
  return (
    <div className="mt-10 space-y-6">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        Understanding Pay Raises
      </h3>
      
      <div className="space-y-4">
        <p>
          A pay raise is an increase in an employee's salary or wages, typically awarded as recognition for good performance, to adjust for inflation, or to remain competitive in the job market. Understanding how pay raises work and how to calculate them is essential for both employers and employees.
        </p>
        
        <h4 className="text-xl font-medium mt-6">Types of Pay Raises</h4>
        <p>
          Pay raises typically come in two forms: percentage increases or flat amount increases. Each has its advantages and considerations:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-primary/5 p-5 rounded-lg border">
            <h5 className="font-medium mb-2">Percentage Increase</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Scales with your current salary</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Typically ranges from 3-5% for annual merit increases</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Higher percentages (10-20%) often accompany promotions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Easy to compare to inflation rates and industry standards</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary/5 p-5 rounded-lg border">
            <h5 className="font-medium mb-2">Flat Amount Increase</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Fixed dollar amount added to your salary</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>More tangible and easier to understand</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Can be more equitable for lower-paid employees</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Often used for cost-of-living adjustments or bonuses</span>
              </li>
            </ul>
          </div>
        </div>
        
        <h4 className="text-xl font-medium mt-6">Factors Affecting Your Pay Raise</h4>
        <p>
          Several factors influence the size and frequency of pay raises you might receive:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Company performance:</strong> Organizations typically allocate larger salary increase budgets when they're performing well financially.</li>
          <li><strong>Individual performance:</strong> High performers usually receive larger raises than average or below-average performers.</li>
          <li><strong>Market conditions:</strong> Competitive job markets with talent shortages often lead to higher raises to retain employees.</li>
          <li><strong>Economic factors:</strong> Inflation rates, cost of living, and general economic conditions influence raise budgets.</li>
          <li><strong>Industry standards:</strong> Some industries consistently offer higher raises than others based on profitability and growth.</li>
          <li><strong>Location:</strong> Raises often vary by geographic region, reflecting local cost of living and labor market conditions.</li>
        </ul>
        
        <h4 className="text-xl font-medium mt-6">Understanding the Real Value of Your Raise</h4>
        <p>
          While a pay raise might seem straightforward, several factors affect its real value to you:
        </p>
        
        <h5 className="font-medium mt-4">Inflation Impact</h5>
        <p>
          Inflation decreases the purchasing power of your money over time. If your raise doesn't keep pace with inflation, you're effectively taking a pay cut in terms of what your salary can buy. For example, if you receive a 3% raise during a period of 5% inflation, your "real" income has decreased by approximately 2%.
        </p>
        
        <h5 className="font-medium mt-4">Tax Considerations</h5>
        <p>
          A salary increase may push some of your income into a higher tax bracket. However, it's important to understand that in a progressive tax system, only the portion of your income that falls into the higher bracket gets taxed at the higher rate, not your entire income. Nevertheless, the after-tax value of your raise will be lower than the gross amount.
        </p>
        
        <h5 className="font-medium mt-4">Benefits Impact</h5>
        <p>
          Some benefits, like retirement contributions, are calculated as a percentage of your salary. A raise can automatically increase these benefits, providing additional value beyond the direct salary increase. For example, if your employer matches 5% of your salary for retirement, a $5,000 raise also increases your retirement benefit by $250 annually.
        </p>
      </div>
    </div>
  );
};

export default PayRaiseGuide;
