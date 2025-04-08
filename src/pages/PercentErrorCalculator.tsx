import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import PercentErrorCalculator from '@/calculators/percentError/PercentErrorCalculator';

const PercentErrorCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Percent Error Calculator"
      description="Calculate the accuracy of measurements by determining the percentage of error between measured and actual values."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Percent Error Calculator - Determine the accuracy of your measurements with this easy-to-use tool. Calculate percent error for scientific experiments, lab reports, and academic research."
      canonicalUrl="https://lcalculator.com/percent-error-calculator"
    >
      <div className="py-12">
        <PercentErrorCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default PercentErrorCalculatorPage;
