
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import TDEECalculator from '@/calculators/tdee/TDEECalculator';

const TDEECalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="TDEE Calculator"
      description="Calculate your Total Daily Energy Expenditure (TDEE) to determine your daily caloric needs for weight loss, maintenance, or muscle gain."
      category="Sports & Fitness"
      categoryUrl="/calculators"
      metaDescription="Free TDEE Calculator - Determine your Total Daily Energy Expenditure based on your personal metrics and activity level. Get personalized recommendations for weight management, muscle building, and optimal nutrition."
      canonicalUrl="https://lcalculator.com/tdee-calculator"
    >
      <div className="py-6">
        <TDEECalculator />
      </div>
    </CalculatorLayout>
  );
};

export default TDEECalculatorPage;
