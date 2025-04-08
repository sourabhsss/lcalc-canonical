
import React, { useState } from 'react';
import MortgageRecastForm from './MortgageRecastForm';
import MortgageRecastResult from './MortgageRecastResult';
import MortgageRecastContent from './MortgageRecastContent';
import { Card } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';
import { mortgageRecastFAQs } from './mortgageRecastUtils';

const MortgageRecastCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    originalMonthlyPayment: number;
    newMonthlyPayment: number;
    monthlySavings: number;
    totalInterestSaved: number;
    newLoanBalance: number;
    newLoanTerm: number;
  } | null>(null);

  const calculateMortgageRecast = (
    currentBalance: number,
    originalLoanAmount: number,
    interestRate: number,
    remainingTerm: number,
    lumpSumPayment: number,
    recastFee: number
  ) => {
    // Calculate original monthly payment (P&I only)
    const monthlyRate = interestRate / 100 / 12;
    const originalTermMonths = remainingTerm * 12;
    
    // Calculate original monthly payment using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const originalMonthlyPayment = 
      (currentBalance * monthlyRate * Math.pow(1 + monthlyRate, originalTermMonths)) / 
      (Math.pow(1 + monthlyRate, originalTermMonths) - 1);
    
    // Calculate new loan balance after lump sum payment
    const newLoanBalance = Math.max(0, currentBalance - lumpSumPayment + recastFee);
    
    // Calculate new monthly payment with the same remaining term
    const newMonthlyPayment = 
      (newLoanBalance * monthlyRate * Math.pow(1 + monthlyRate, originalTermMonths)) / 
      (Math.pow(1 + monthlyRate, originalTermMonths) - 1);
    
    // Calculate monthly savings
    const monthlySavings = originalMonthlyPayment - newMonthlyPayment;
    
    // Calculate total interest saved over the life of the loan
    const totalPaymentsOriginal = originalMonthlyPayment * originalTermMonths;
    const totalPaymentsNew = newMonthlyPayment * originalTermMonths;
    const totalInterestSaved = (totalPaymentsOriginal - currentBalance) - 
                               (totalPaymentsNew - newLoanBalance);
    
    setResults({
      originalMonthlyPayment,
      newMonthlyPayment,
      monthlySavings,
      totalInterestSaved,
      newLoanBalance,
      newLoanTerm: remainingTerm
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="mb-6 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Calculate Your Mortgage Recast</h2>
              <MortgageRecastForm onCalculate={calculateMortgageRecast} />
            </div>
          </Card>
          
          {results && (
            <Card className="overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Results</h2>
                <MortgageRecastResult result={results} />
              </div>
            </Card>
          )}
        </div>
        
        <div className="lg:col-span-2">
          <MortgageRecastContent />
          
          <div className="mt-12">
            <FAQSection 
              title="Frequently Asked Questions About Mortgage Recasting" 
              faqs={mortgageRecastFAQs} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageRecastCalculator;
