
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import AsphaltCalculator from '@/calculators/asphalt/AsphaltCalculator';

const AsphaltCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Asphalt Calculator"
      description="Calculate the required amount of asphalt for your paving project with cost estimation."
      metaDescription="Free Asphalt Calculator to determine the quantity and cost of asphalt needed for your paving project. Plan your driveway, parking lot, or road construction with accuracy."
      canonicalUrl="https://lcalculator.com/asphalt-calculator"
      category="Construction & Real Estate"
      categoryUrl="/calculators#construction"
    >
      <div className="py-12">
        <AsphaltCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default AsphaltCalculatorPage;
