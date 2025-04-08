
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import DunkCalculator from '@/calculators/dunk/DunkCalculator';
import DunkContent from '@/calculators/dunk/components/DunkContent';
import DunkFAQ from '@/calculators/dunk/components/DunkFAQ';
import RelatedCalculators from '@/calculators/dunk/components/RelatedCalculators';

const DunkCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Dunk Calculator"
      description="Calculate your vertical leap requirements for basketball dunking based on your height, reach, and dunk type."
      category="Sports & Fitness"
      categoryUrl="/calculators"
      metaDescription="Free Dunk Calculator to determine if you can dunk a basketball. Get personalized training recommendations to improve your vertical leap and achieve your dunking goals."
      canonicalUrl="https://lcalculator.com/dunk-calculator"
    >
      <div className="py-6">
        <DunkCalculator />
      </div>
      
      <div className="py-6">
        <DunkContent />
      </div>
      
      <div className="py-6">
        <RelatedCalculators />
      </div>
      
      <div className="py-6">
        <DunkFAQ />
      </div>
    </CalculatorLayout>
  );
};

export default DunkCalculatorPage;
