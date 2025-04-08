import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import PercentageIncreaseCalculator from '@/calculators/percentageIncrease/PercentageIncreaseCalculator';

const PercentageIncreaseCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Percentage Increase Calculator"
      description="Calculate percentage change, increase, or decrease between two values."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Percentage Change Calculator - Calculate percentage increase, decrease, or change between two values. Perfect for financial calculations, inflation rates, growth metrics, and price changes."
      canonicalUrl="https://lcalculator.com/percentage-increase-calculator"
    >
      <div className="py-12">
        <PercentageIncreaseCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default PercentageIncreaseCalculatorPage;
