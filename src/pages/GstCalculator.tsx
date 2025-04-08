
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import GstCalculator from '@/calculators/gst/GstCalculator';

const GstCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="GST Calculator"
      description="Calculate Goods and Services Tax (GST), Value Added Tax (VAT), or Sales Tax for different countries and tax rates."
      metaDescription="Free GST Calculator to determine GST/VAT amounts for different countries and rates. Support for both tax-inclusive and tax-exclusive calculations with multiple tax rates and country-specific settings."
      canonicalUrl="https://lcalculator.com/gst-calculator"
    >
      <div className="py-12">
        <GstCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default GstCalculatorPage;
