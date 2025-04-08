
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import TattooTipCalculator from '@/calculators/tattooTip/TattooTipCalculator';

const TattooTipCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Tattoo Tip Calculator"
      description="Calculate the appropriate tip amount for your tattoo artist based on quality, complexity, session duration, and satisfaction level."
      category="Lifestyle & Relationships"
      categoryUrl="/calculators"
      metaDescription="Free online Tattoo Tip Calculator - Determine how much to tip your tattoo artist based on work quality, complexity, duration, and your satisfaction. Get personalized recommendations with our easy-to-use calculator."
    >
      <div className="py-12">
        <TattooTipCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default TattooTipCalculatorPage;
