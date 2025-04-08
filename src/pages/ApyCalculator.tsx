
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import ApyCalculator from '@/calculators/apy/ApyCalculator';

const ApyCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="APY Calculator"
      description="Calculate Annual Percentage Yield (APY) for investments and savings accounts. Compare interest rates and potential earnings with our free APY calculator."
      metaDescription="Free APY Calculator to determine your Annual Percentage Yield and compare investment returns. Understand how compound interest affects your savings over time."
      canonicalUrl="https://lcalculator.com/apy-calculator"
    >
      <div className="py-12">
        <ApyCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default ApyCalculatorPage;
