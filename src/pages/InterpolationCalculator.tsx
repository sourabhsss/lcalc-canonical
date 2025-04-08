
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import InterpolationCalculator from '@/calculators/interpolation/InterpolationCalculator';

const InterpolationCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Interpolation Calculator"
      description="Calculate unknown values between data points using linear, polynomial, or other interpolation methods."
      category="Math & Statistics"
      categoryUrl="/calculators"
      metaDescription="Free online Interpolation Calculator - Determine unknown values between data points using linear, polynomial, or cubic spline interpolation methods. Perfect for statistics, engineering, data analysis, and scientific research."
    >
      <div className="py-12">
        <InterpolationCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default InterpolationCalculatorPage;
