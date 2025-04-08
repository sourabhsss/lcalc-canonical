
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import ChronologicalAgeCalculator from '@/calculators/chronologicalAge/ChronologicalAgeCalculator';

const ChronologicalAgeCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Chronological Age Calculator"
      description="Calculate exact age in years, months, and days between any two dates. Perfect for determining precise age for medical, educational, or legal purposes."
      category="Date & Time"
      categoryUrl="/calculators"
      metaDescription="Free online Chronological Age Calculator - Determine exact age in years, months, and days between any two dates. Precise calculations for medical records, developmental assessments, and legal documentation."
    >
      <div className="py-12">
        <ChronologicalAgeCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default ChronologicalAgeCalculatorPage;
