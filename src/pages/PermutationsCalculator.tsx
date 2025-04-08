import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import PermutationsCalculator from '@/calculators/permutations/PermutationsCalculator';

const PermutationsCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Permutations Calculator"
      description="Calculate the number of ways to arrange items in a specific order."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Permutations Calculator (nPr) - Calculate the number of possible arrangements when ordering items from a set. Used for probability, statistics, cryptography, and combinatorial problems."
      canonicalUrl="https://lcalculator.com/permutations-calculator"
    >
      <div className="py-12">
        <PermutationsCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default PermutationsCalculatorPage;
