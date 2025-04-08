
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import SwimPaceCalculator from '@/calculators/swimPace/SwimPaceCalculator';
import SwimPaceContent from '@/calculators/swimPace/components/SwimPaceContent';
import SwimPaceFAQ from '@/calculators/swimPace/components/SwimPaceFAQ';
import RelatedCalculators from '@/calculators/swimPace/components/RelatedCalculators';

const SwimPaceCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Swim Pace Calculator"
      description="Calculate your swimming pace, speed, and estimated calorie burn based on distance and time. Optimize your training and track your progress in the pool."
      category="Sports & Fitness"
      categoryUrl="/calculators"
      metaDescription="Free online Swim Pace Calculator - Determine your swimming pace per 100m/100yds, estimate calories burned, and analyze your swim performance. Perfect for swimmers, triathletes, and coaches."
      canonicalUrl="https://lcalculator.com/swim-pace-calculator"
    >
      <div className="py-6">
        <SwimPaceCalculator />
      </div>
      
      <div className="py-6">
        <SwimPaceContent />
      </div>
      
      <div className="py-6">
        <RelatedCalculators />
      </div>
      
      <div className="py-6">
        <SwimPaceFAQ />
      </div>
    </CalculatorLayout>
  );
};

export default SwimPaceCalculatorPage;
