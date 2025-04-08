
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import TherapyProductivityCalculator from '@/calculators/therapyProductivity/TherapyProductivityCalculator';

const TherapyProductivityCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Therapy Productivity Calculator"
      description="Calculate and analyze productivity metrics for therapists, including billable hours, efficiency rates, and revenue projections. Optimize your practice with data-driven insights."
      category="Lifestyle & Relationships"
      categoryUrl="/calculators"
      metaDescription="Free online Therapy Productivity Calculator - Track billable hours, analyze productivity rates, calculate revenue projections, and optimize your therapy practice with actionable insights and recommendations."
    >
      <div className="py-12">
        <TherapyProductivityCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default TherapyProductivityCalculatorPage;
