import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import CashBackCalculator from '@/calculators/cashBack/CashBackCalculator';

const CashBackCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Cash Back Calculator"
      description="Calculate potential rewards from cash back credit cards, analyze whether annual fees are worth it, and maximize your card benefits."
      category="Finance"
      categoryUrl="/calculators"
      metaDescription="Free online Cash Back Calculator - Determine the true value of your credit card rewards, compare cash back options, and optimize your spending strategy for maximum returns."
      canonicalUrl="https://lcalculator.com/cash-back-calculator"
    >
      <div className="py-12">
        <CashBackCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default CashBackCalculatorPage;
