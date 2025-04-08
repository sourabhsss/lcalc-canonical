import React, { useState } from 'react';
import MortgageForm from './MortgageForm';
import MortgageResult from './MortgageResult';
import MortgageContent from './MortgageContent';
import { Card } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';
import { mortgageFAQs } from './mortgageUtils';

const MortgageCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalCost: number;
    amortizationSchedule: {
      month: number;
      payment: number;
      principal: number;
      interest: number;
      balance: number;
    }[];
  } | null>(null);

  const calculateMortgage = (
    homePrice: number,
    downPayment: number,
    loanTerm: number,
    interestRate: number,
    propertyTax: number,
    homeInsurance: number,
    pmi: number,
    includePropertyTax: boolean,
    includeHomeInsurance: boolean,
    includePMI: boolean
  ) => {
    // Calculate loan amount
    const loanAmount = homePrice - downPayment;
    
    // Calculate monthly interest rate
    const monthlyRate = interestRate / 100 / 12;
    
    // Calculate number of payments
    const payments = loanTerm * 12;
    
    // Calculate monthly principal and interest (P&I) payment
    const monthlyPrincipalAndInterest = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, payments)) / 
      (Math.pow(1 + monthlyRate, payments) - 1);
    
    // Calculate monthly property tax (if included)
    const monthlyPropertyTax = includePropertyTax ? (propertyTax / 12) : 0;
    
    // Calculate monthly home insurance (if included)
    const monthlyHomeInsurance = includeHomeInsurance ? (homeInsurance / 12) : 0;
    
    // Calculate monthly PMI (if included)
    const monthlyPMI = includePMI ? ((pmi / 100) * loanAmount / 12) : 0;
    
    // Calculate total monthly payment
    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyHomeInsurance + monthlyPMI;
    
    // Calculate total interest paid over the life of the loan
    const totalInterest = (monthlyPrincipalAndInterest * payments) - loanAmount;
    
    // Calculate total cost of the loan
    const totalCost = loanAmount + totalInterest + 
      (monthlyPropertyTax * payments) + 
      (monthlyHomeInsurance * payments) + 
      (monthlyPMI * payments);
    
    // Generate amortization schedule
    const amortizationSchedule = [];
    let balance = loanAmount;
    
    for (let month = 1; month <= payments; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPrincipalAndInterest - interestPayment;
      balance -= principalPayment;
      
      // Only store data points at 12-month intervals to keep the array manageable
      // plus the first and last month
      if (month === 1 || month === payments || month % 12 === 0) {
        amortizationSchedule.push({
          month,
          payment: totalMonthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance)
        });
      }
    }
    
    setResults({
      monthlyPayment: totalMonthlyPayment,
      totalInterest,
      totalCost,
      amortizationSchedule
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card className="mb-6 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Calculate Your Mortgage</h2>
              <MortgageForm onCalculate={calculateMortgage} />
            </div>
          </Card>
          
          {results && (
            <Card className="overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Results</h2>
                <MortgageResult result={results} />
              </div>
            </Card>
          )}
        </div>
        
        <div className="lg:col-span-2">
          <MortgageContent />
          
          <div className="mt-12">
            <FAQSection 
              title="Frequently Asked Questions About Mortgages" 
              faqs={mortgageFAQs} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
