
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import PoolVolumeCalculator from '@/calculators/poolVolume/PoolVolumeCalculator';

const PoolVolumeCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Pool Volume Calculator"
      description="Calculate your swimming pool's volume in gallons, liters, or cubic meters. Get accurate water volume for chemical dosing, maintenance, and cost estimation."
      category="Construction & Real Estate"
      categoryUrl="/calculators"
      metaDescription="Use our free Pool Volume Calculator to determine the exact water capacity of any swimming pool shape. Calculate in gallons, liters, or cubic meters with maintenance tips."
    >
      <div className="container mx-auto py-12">
        <PoolVolumeCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default PoolVolumeCalculatorPage;
