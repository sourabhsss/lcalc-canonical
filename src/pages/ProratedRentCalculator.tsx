
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import ProratedRentCalculator from '@/calculators/proratedRent/ProratedRentCalculator';

const ProratedRentCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Prorated Rent Calculator"
      description="Calculate the correct amount of rent for a partial month when moving in."
      metaDescription="Free Prorated Rent Calculator to determine your partial rent amount when moving in on a day other than the first of the month. Multiple calculation methods supported."
      canonicalUrl="https://lcalculator.com/prorated-rent-calculator"
    >
      <div className="py-12">
        <ProratedRentCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default ProratedRentCalculatorPage;
