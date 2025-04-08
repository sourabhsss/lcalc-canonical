
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import PayRaiseForm from './PayRaiseForm';
import PayRaiseResult from './PayRaiseResult';
import { PayRaiseResult as PayRaiseResultType, calculatePayRaise, payRaiseFaqs } from './payRaiseUtils';
import FAQSection from '@/components/FAQSection';
import RelatedCalculators from './components/RelatedCalculators';
import PayRaiseGuide from './components/PayRaiseGuide';
import NegotiationTips from './components/NegotiationTips';
import IndustryData from './components/IndustryData';

const PayRaiseCalculator: React.FC = () => {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<PayRaiseResultType | null>(null);
  const [formData, setFormData] = useState({
    payPeriod: 'annual' as 'annual' | 'monthly' | 'hourly',
    hoursPerWeek: 40
  });

  const handleCalculate = (
    currentSalary: number,
    raiseType: 'percentage' | 'amount',
    raiseValue: number,
    includeInflation: boolean,
    inflationRate: number,
    includeTaxImpact: boolean,
    payPeriod: 'annual' | 'monthly' | 'hourly',
    hoursPerWeek: number
  ) => {
    const calculationResult = calculatePayRaise(
      currentSalary,
      raiseType,
      raiseValue,
      includeInflation,
      inflationRate,
      includeTaxImpact,
      payPeriod,
      hoursPerWeek
    );
    
    setFormData({
      payPeriod,
      hoursPerWeek
    });
    
    setResult(calculationResult);
    setIsCalculated(true);
  };

  const handleReset = () => {
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Calculator className="text-primary" />
          <h2 className="text-xl font-semibold">Pay Raise Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate your new salary after a raise, including the percentage increase, monthly change, and potential tax impacts. 
            This calculator helps you understand the true value of your pay increase.
          </p>
          
          <PayRaiseForm 
            onCalculate={handleCalculate} 
            onReset={handleReset} 
          />
          
          {isCalculated && result && (
            <PayRaiseResult 
              result={result} 
              payPeriod={formData.payPeriod}
              hoursPerWeek={formData.hoursPerWeek}
            />
          )}
          
          {/* Educational content about pay raises */}
          <PayRaiseGuide />
          <NegotiationTips />
          <IndustryData />
        </div>
      </div>
      
      <FAQSection faqs={payRaiseFaqs} />
      
      <RelatedCalculators />
    </div>
  );
};

export default PayRaiseCalculator;
