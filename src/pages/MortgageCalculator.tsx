
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import MortgageCalculator from '@/calculators/mortgage/MortgageCalculator';

const MortgageCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Mortgage Calculator"
      description="Calculate your monthly mortgage payments, view amortization schedules, and understand the true cost of homeownership."
      category="Construction & Real Estate"
      categoryUrl="/calculators"
      metaDescription="Use our free mortgage calculator to estimate monthly payments, see amortization schedules, and understand how much house you can afford including principal, interest, taxes, and insurance."
      canonicalUrl="https://lcalculator.com/mortgage-calculator"
    >
      <div className="py-12">
        <MortgageCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default MortgageCalculatorPage;
