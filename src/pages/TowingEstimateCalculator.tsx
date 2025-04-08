
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import TowingEstimateCalculator from '@/calculators/towingEstimate/TowingEstimateCalculator';

const TowingEstimateCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Towing Estimate Calculator"
      description="Calculate the cost of towing services based on distance, vehicle type, time of day, and additional services."
      category="Finance"
      categoryUrl="/calculators"
      metaDescription="Use our free Towing Estimate Calculator to determine how much your tow will cost. Calculate based on distance, vehicle type, service options, and additional fees for accurate estimates."
    >
      <div className="container mx-auto py-12">
        <TowingEstimateCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default TowingEstimateCalculatorPage;
