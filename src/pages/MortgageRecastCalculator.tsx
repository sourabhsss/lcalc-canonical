
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import MortgageRecastCalculator from '@/calculators/mortgageRecast/MortgageRecastCalculator';

const MortgageRecastCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Mortgage Recast Calculator"
      description="Calculate how reducing your mortgage principal with a lump sum payment can lower your monthly payments through recasting."
      category="Construction & Real Estate"
      categoryUrl="/calculators"
      metaDescription="Use our free Mortgage Recast Calculator to see how making a lump sum payment can lower your monthly mortgage payments without refinancing. Compare savings and benefits."
      canonicalUrl="https://lcalculator.com/mortgage-recast-calculator"
    >
      <div className="py-12">
        <MortgageRecastCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default MortgageRecastCalculatorPage;
