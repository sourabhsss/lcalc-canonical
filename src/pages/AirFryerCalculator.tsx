
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import AirFryerCalculator from '@/calculators/airFryer/AirFryerCalculator';

const AirFryerCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Air Fryer Time & Temperature Calculator"
      description="Calculate optimal cooking times and temperatures for your air fryer based on food type, weight, and thickness. Get energy savings estimates and expert cooking tips."
      category="Lifestyle & Relationships"
      categoryUrl="/calculators"
      metaDescription="Use our free Air Fryer Calculator to determine perfect cooking times and temperatures. Get customized results for different food types, weights, and air fryer sizes."
    >
      <div className="container mx-auto py-12">
        <AirFryerCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default AirFryerCalculatorPage;
