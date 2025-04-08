
import React from 'react';
import { Calculator, TrendingUp, DollarSign, Building } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Related Calculators</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <Building className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-lg">Mortgage Calculator</h4>
          </div>
          <p className="mb-4">
            Calculate your monthly mortgage payments, including principal, interest, taxes, and insurance.
          </p>
          <a href="/mortgage-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-lg">Pay Raise Calculator</h4>
          </div>
          <p className="mb-4">
            Determine the impact of a salary increase on your earnings, accounting for taxes and inflation.
          </p>
          <a href="/pay-raise-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-lg">APY Calculator</h4>
          </div>
          <p className="mb-4">
            Calculate Annual Percentage Yield (APY) to see how compound interest affects your investment returns over time.
          </p>
          <a href="/apy-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-lg">GST Calculator</h4>
          </div>
          <p className="mb-4">
            Calculate Goods and Services Tax (GST) or Value Added Tax (VAT) for products and services in various countries.
          </p>
          <a href="/gst-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
      </div>
    </div>
  );
};

export default RelatedCalculators;
