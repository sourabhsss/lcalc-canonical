
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import GravelCalculator from '@/calculators/gravel/GravelCalculator';

const GravelCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Gravel Calculator"
      description="Calculate the required amount of gravel for your landscaping or construction project with cost estimation."
      metaDescription="Free Gravel Calculator to determine the quantity and cost of gravel needed for driveways, pathways, and landscaping projects. Supports multiple gravel types and measurement units."
      canonicalUrl="https://lcalculator.com/gravel-calculator"
    >
      <div className="py-12">
        <GravelCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default GravelCalculatorPage;
