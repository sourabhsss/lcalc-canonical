
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import SnowDayCalculator from '@/calculators/snowDay/SnowDayCalculator';

const SnowDayCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Snow Day Calculator"
      description="Predict the likelihood of a snow day based on weather conditions and location factors."
      metaDescription="Fun Snow Day Calculator to predict your chances of having school canceled due to snow. Consider snowfall amount, temperature, wind speed, and other factors that influence school closing decisions."
      canonicalUrl="https://lcalculator.com/snow-day-calculator"
    >
      <div className="py-12">
        <SnowDayCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default SnowDayCalculatorPage;
