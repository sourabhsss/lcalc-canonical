
import React from 'react';
import { calculateApy, formatCurrency, calculateTotalAmount } from './apyUtils';

interface ApyResultProps {
  principal: number;
  interestRate: number;
  compoundFrequency: number;
}

const ApyResult: React.FC<ApyResultProps> = ({ 
  principal, 
  interestRate,
  compoundFrequency
}) => {
  const apy = calculateApy(interestRate, compoundFrequency);
  
  // Calculate values for multiple years
  const oneYearTotal = calculateTotalAmount(principal, apy, 1);
  const threeYearTotal = calculateTotalAmount(principal, apy, 3);
  const fiveYearTotal = calculateTotalAmount(principal, apy, 5);
  const tenYearTotal = calculateTotalAmount(principal, apy, 10);
  
  // Calculate interest earned
  const oneYearInterest = oneYearTotal - principal;
  const threeYearInterest = threeYearTotal - principal;
  const fiveYearInterest = fiveYearTotal - principal;
  const tenYearInterest = tenYearTotal - principal;
  
  // Get compounding frequency name
  const getFrequencyName = (freq: number) => {
    switch (freq) {
      case 1: return "Annually";
      case 2: return "Semi-annually";
      case 4: return "Quarterly";
      case 12: return "Monthly";
      case 365: return "Daily";
      default: return `${freq} times per year`;
    }
  };
  
  return (
    <div className="mt-8 space-y-6">
      <div className="bg-primary/5 p-6 rounded-lg border">
        <h3 className="font-semibold text-xl mb-4">Results Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Initial Investment</p>
            <p className="text-xl font-medium">{formatCurrency(principal)}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Nominal Interest Rate</p>
            <p className="text-xl font-medium">{interestRate.toFixed(2)}%</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Compounding Frequency</p>
            <p className="text-xl font-medium">{getFrequencyName(compoundFrequency)}</p>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground">Annual Percentage Yield (APY)</p>
            <p className="text-xl font-medium text-primary">{apy.toFixed(2)}%</p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-xl mb-4">Projected Growth</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2">Time Period</th>
                <th className="border border-border px-4 py-2">Total Value</th>
                <th className="border border-border px-4 py-2">Interest Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">1 Year</td>
                <td className="border border-border px-4 py-2">{formatCurrency(oneYearTotal)}</td>
                <td className="border border-border px-4 py-2">{formatCurrency(oneYearInterest)}</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">3 Years</td>
                <td className="border border-border px-4 py-2">{formatCurrency(threeYearTotal)}</td>
                <td className="border border-border px-4 py-2">{formatCurrency(threeYearInterest)}</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">5 Years</td>
                <td className="border border-border px-4 py-2">{formatCurrency(fiveYearTotal)}</td>
                <td className="border border-border px-4 py-2">{formatCurrency(fiveYearInterest)}</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">10 Years</td>
                <td className="border border-border px-4 py-2">{formatCurrency(tenYearTotal)}</td>
                <td className="border border-border px-4 py-2">{formatCurrency(tenYearInterest)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          <p>* These projections assume the interest rate and principal remain constant over time.</p>
        </div>
      </div>
      
      <div className="bg-card p-6 rounded-lg border">
        <h3 className="font-semibold text-lg mb-2">APY vs. Stated Interest Rate</h3>
        <p className="mb-4">
          With your investment of {formatCurrency(principal)} at a stated annual interest rate of {interestRate.toFixed(2)}% compounding {getFrequencyName(compoundFrequency).toLowerCase()}, 
          your effective Annual Percentage Yield (APY) is <strong className="text-primary">{apy.toFixed(2)}%</strong>.
        </p>
        <p>
          This means that over time, your investment will grow as if it were earning a simple interest rate of {apy.toFixed(2)}% per year. 
          The difference between the stated rate ({interestRate.toFixed(2)}%) and the APY ({apy.toFixed(2)}%) is due to the effect of compounding.
        </p>
      </div>
    </div>
  );
};

export default ApyResult;
