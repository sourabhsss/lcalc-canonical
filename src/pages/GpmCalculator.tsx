
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import GpmCalculator from '@/calculators/gpm/GpmCalculator';

const GpmCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="GPM Calculator (Gallons Per Minute)"
      description="Calculate water flow rate in gallons per minute (GPM) for plumbing, irrigation, and water systems. Convert between flow rate units and determine system requirements."
      category="Construction & Real Estate"
      categoryUrl="/calculators"
      metaDescription="Free online GPM Calculator - Calculate gallons per minute for plumbing, irrigation, well systems, and water flow applications. Multiple calculation methods and instant unit conversions."
    >
      <div className="py-12">
        <GpmCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default GpmCalculatorPage;
