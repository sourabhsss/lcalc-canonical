
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import PercentageToCgpaCalculator from '@/calculators/percentageToCgpa/PercentageToCgpaCalculator';

const PercentageToCgpaCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Percentage to CGPA Calculator"
      description="Convert percentage marks to CGPA on 10-point, 7-point, and 4-point scales. Easy and accurate conversion for students worldwide."
      metaDescription="Free Percentage to CGPA Calculator to convert your percentage marks to CGPA on different scales. Support for 10-point, 7-point, and 4-point scales used worldwide."
      canonicalUrl="https://lcalculator.com/percentage-to-cgpa-calculator"
    >
      <div className="py-12">
        <PercentageToCgpaCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default PercentageToCgpaCalculatorPage;
