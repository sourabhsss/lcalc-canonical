
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import LcmHcfCalculator from '@/calculators/lcmHcf/LcmHcfCalculator';

const LcmHcfCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="LCM and HCF Calculator"
      description="Calculate the Least Common Multiple (LCM) and Highest Common Factor (HCF) of multiple numbers with step-by-step solutions."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online LCM and HCF Calculator - Find the Least Common Multiple and Highest Common Factor (Greatest Common Divisor) of multiple numbers with detailed step-by-step solutions and explanations."
    >
      <div className="py-12">
        <LcmHcfCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default LcmHcfCalculatorPage;
