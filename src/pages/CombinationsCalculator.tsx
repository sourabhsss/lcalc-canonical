
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import CombinationsCalculator from '@/calculators/combinations/CombinationsCalculator';

const CombinationsCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Combinations Calculator"
      description="Calculate the number of ways to select items from a set without regard to order."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Combinations Calculator (nCr) - Calculate the number of possible combinations when selecting items from a set. Used for probability, statistics, lottery odds, and combinatorial problems."
    >
      <div className="py-12">
        <CombinationsCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default CombinationsCalculatorPage;
