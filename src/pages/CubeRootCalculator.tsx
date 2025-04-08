
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import CubeRootCalculator from '@/calculators/cubeRoot/CubeRootCalculator';

const CubeRootCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Cube Root Calculator"
      description="Calculate the cube root of any number with precision. Free online cube root calculator with step-by-step verification."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Cube Root Calculator - Find the exact cube root of any positive or negative number with high precision. Includes mathematical verification and perfect cube detection."
    >
      <div className="py-12">
        <CubeRootCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default CubeRootCalculatorPage;
