
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import SleepCalculator from '@/calculators/sleep/SleepCalculator';

const SleepCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Sleep Calculator"
      description="Calculate optimal bedtime and wake-up times based on sleep cycles for better rest and increased energy levels."
      category="Lifestyle & Relationships"
      categoryUrl="/calculators"
      metaDescription="Free online Sleep Calculator - Determine your ideal bedtime or wake-up time based on sleep cycles. Get personalized recommendations for better sleep quality, improved energy, and optimal health."
    >
      <div className="py-12">
        <SleepCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default SleepCalculatorPage;
