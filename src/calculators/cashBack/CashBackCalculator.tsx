
import React, { useState } from 'react';
import CashBackForm from './CashBackForm';
import CashBackResult from './CashBackResult';
import CashBackContent from './components/CashBackContent';
import CashBackFAQ from './components/CashBackFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { CashBackData, CashBackResult as CashBackResultType } from './cashBackTypes';

const CashBackCalculator: React.FC = () => {
  const [result, setResult] = useState<CashBackResultType | null>(null);
  const [data, setData] = useState<CashBackData | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (formData: CashBackData) => {
    const { purchaseAmount, cashBackRate, annualFee = 0, otherBenefits = 0 } = formData;
    
    // Calculate monthly reward
    const monthlyReward = purchaseAmount * (cashBackRate / 100);
    
    // Calculate annual cash back
    const annualCashBack = monthlyReward * 12;
    
    // Calculate effective rate (after annual fee)
    const annualSpending = purchaseAmount * 12;
    const effectiveRate = annualSpending > 0 
      ? ((annualCashBack - annualFee) / annualSpending) * 100 
      : 0;
    
    // Calculate annual net value (cash back - fees + other benefits)
    const annualNetValue = annualCashBack - annualFee + otherBenefits;
    
    const calculationResult: CashBackResultType = {
      cashBackAmount: annualCashBack,
      effectiveRate: effectiveRate >= 0 ? effectiveRate : 0,
      annualNetValue,
      monthlyReward
    };
    
    setResult(calculationResult);
    setData(formData);
    setShowResult(true);
  };

  const handleReset = () => {
    setResult(null);
    setData(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Cash Back Calculator</h2>
        
        <CashBackForm
          onCalculate={handleCalculate}
          onReset={handleReset}
          showResult={showResult}
        />
        
        {showResult && data && result && (
          <CashBackResult
            data={data}
            result={result}
          />
        )}
      </div>
      
      <CashBackContent />
      
      <CashBackFAQ />
      
      <RelatedCalculators />
    </div>
  );
};

export default CashBackCalculator;
