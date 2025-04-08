
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import PayRaiseCalculator from '@/calculators/payRaise/PayRaiseCalculator';

const PayRaiseCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Pay Raise Calculator"
      description="Calculate the impact of your salary increase, including percentage change, tax effects, and inflation adjustment."
      category="Finance"
      categoryUrl="/calculators"
      metaDescription="Free Pay Raise Calculator to determine your new salary after an increase. Understand the true value of your raise, accounting for taxes and inflation."
      canonicalUrl="https://lcalculator.com/pay-raise-calculator"
    >
      <div className="py-12">
        <PayRaiseCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default PayRaiseCalculatorPage;
