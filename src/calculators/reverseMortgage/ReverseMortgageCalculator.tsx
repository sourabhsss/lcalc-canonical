
import React, { useState } from 'react';
import ReverseMortgageForm from './ReverseMortgageForm';
import ReverseMortgageResult from './ReverseMortgageResult';
import ReverseMortgageContent from './ReverseMortgageContent';
import { Card } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';
import { reverseMortgageFAQs } from './reverseMortgageUtils';

const ReverseMortgageCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    estimatedLoanAmount: number;
    paymentOption: string;
    monthlyPayment?: number;
    lumpSum?: number;
    lineOfCredit?: number;
    fees: number;
    netProceeds: number;
  } | null>(null);

  const calculateReverseMortgage = (
    homeValue: number,
    age: number,
    mortgageBalance: number,
    interestRate: number,
    paymentOption: string
  ) => {
    // Principal Limit Factor (PLF) - simplified approximation based on age and interest rate
    // In reality, this would be a complex table provided by FHA/HUD
    let plf = 0.4; // Base PLF
    
    // Adjust PLF based on age (higher age = higher PLF)
    if (age >= 62 && age < 70) {
      plf = 0.4;
    } else if (age >= 70 && age < 80) {
      plf = 0.5;
    } else if (age >= 80 && age < 90) {
      plf = 0.6;
    } else if (age >= 90) {
      plf = 0.7;
    }
    
    // Adjust PLF based on interest rate (higher rate = lower PLF)
    plf -= (interestRate - 3.5) * 0.1;
    
    // Ensure PLF stays within reasonable bounds
    plf = Math.max(0.2, Math.min(0.75, plf));
    
    // Calculate maximum loan amount
    const maxLoanAmount = homeValue * plf;
    
    // Calculate available loan after paying off existing mortgage
    const availableLoan = Math.max(0, maxLoanAmount - mortgageBalance);
    
    // Closing costs and fees (simplified)
    const originationFee = Math.min(6000, Math.max(2500, homeValue * 0.02));
    const mortgageInsurancePremium = homeValue * 0.02; // 2% upfront MIP
    const otherClosingCosts = 3000; // Estimate for appraisal, title, etc.
    const totalFees = originationFee + mortgageInsurancePremium + otherClosingCosts;
    
    // Net proceeds after fees
    const netProceeds = Math.max(0, availableLoan - totalFees);
    
    // Calculate payment options
    let monthlyPayment, lumpSum, lineOfCredit;
    
    switch (paymentOption) {
      case 'tenure':
        // Tenure payment (simplified calculation)
        // Based on remaining life expectancy
        const lifeExpectancy = Math.max(5, 100 - age); // Simplified life expectancy
        monthlyPayment = netProceeds / (lifeExpectancy * 12);
        break;
      case 'lump-sum':
        lumpSum = netProceeds;
        break;
      case 'line-of-credit':
        lineOfCredit = netProceeds;
        // Line of credit grows over time (not calculated in this simplified model)
        break;
      case 'modified-tenure':
        // 50% lump sum, 50% tenure payments
        lumpSum = netProceeds * 0.5;
        const remainingAmount = netProceeds * 0.5;
        const remainingLifeExpectancy = Math.max(5, 100 - age);
        monthlyPayment = remainingAmount / (remainingLifeExpectancy * 12);
        break;
      default:
        // Default to lump sum
        lumpSum = netProceeds;
    }
    
    setResults({
      estimatedLoanAmount: maxLoanAmount,
      paymentOption,
      monthlyPayment,
      lumpSum,
      lineOfCredit,
      fees: totalFees,
      netProceeds
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="mb-6 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Calculate Your Reverse Mortgage</h2>
              <ReverseMortgageForm onCalculate={calculateReverseMortgage} />
            </div>
          </Card>
          
          {results && (
            <Card className="overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Results</h2>
                <ReverseMortgageResult result={results} />
              </div>
            </Card>
          )}
        </div>
        
        <div className="lg:col-span-2">
          <ReverseMortgageContent />
          
          <div className="mt-12">
            <FAQSection 
              title="Frequently Asked Questions About Reverse Mortgages" 
              faqs={reverseMortgageFAQs} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReverseMortgageCalculator;
