import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import StandardDeviationCalculator from '@/calculators/standardDeviation/StandardDeviationCalculator';

const StandardDeviationCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Standard Deviation Calculator"
      description="Calculate standard deviation, variance, mean, median, and other statistical measures from your dataset."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Standard Deviation Calculator - Calculate mean, variance, standard deviation, and other statistical measures for your data. Perfect for statistical analysis, research, data science, and educational purposes."
      canonicalUrl="https://lcalculator.com/standard-deviation-calculator"
    >
      <div className="py-12">
        <StandardDeviationCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default StandardDeviationCalculatorPage;
