
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import ReverseMortgageCalculator from '@/calculators/reverseMortgage/ReverseMortgageCalculator';

const ReverseMortgageCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Reverse Mortgage Calculator"
      description="Calculate how much you could receive with a reverse mortgage based on your age, home value, and current interest rates."
      category="Construction & Real Estate"
      categoryUrl="/calculators"
      metaDescription="Use our free Reverse Mortgage Calculator to estimate loan amounts, payment options, and costs for HECM loans. Learn how reverse mortgages work."
      canonicalUrl="https://lcalculator.com/reverse-mortgage-calculator"
    >
      <div className="py-12">
        <ReverseMortgageCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default ReverseMortgageCalculatorPage;
