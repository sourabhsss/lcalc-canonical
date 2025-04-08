
import React, { useState } from 'react';
import { Circle } from 'lucide-react';
import GravelForm from './GravelForm';
import GravelResult from './GravelResult';
import GravelContent from './components/GravelContent';
import GravelFAQ from './components/GravelFAQ';
import { GRAVEL_DENSITY } from './gravelUtils';

const GravelCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [params, setParams] = useState<{
    length: number;
    width: number;
    depth: number;
    pricePerUnit: number;
    areaUnit: 'ft' | 'm' | 'yd';
    depthUnit: 'in' | 'cm' | 'mm';
    gravelType: keyof typeof GRAVEL_DENSITY;
    weightUnit: 'tons' | 'tonnes';
  } | null>(null);

  const handleCalculate = (
    length: number,
    width: number,
    depth: number,
    pricePerUnit: number,
    areaUnit: 'ft' | 'm' | 'yd',
    depthUnit: 'in' | 'cm' | 'mm',
    gravelType: keyof typeof GRAVEL_DENSITY,
    weightUnit: 'tons' | 'tonnes'
  ) => {
    setParams({ length, width, depth, pricePerUnit, areaUnit, depthUnit, gravelType, weightUnit });
    setCalculating(true);
  };

  const handleReset = () => {
    setParams(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Circle className="text-primary" />
          <h2 className="text-xl font-semibold">Gravel Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the amount of gravel needed for your landscaping or construction project based on dimensions.
            This calculator provides estimates for volume, weight, and cost for different types of gravel.
          </p>
          
          <GravelForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && params && (
            <GravelResult {...params} />
          )}
        </div>
      </div>
      
      {/* Detailed Content */}
      <GravelContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <GravelFAQ />
      </div>
    </div>
  );
};

export default GravelCalculator;
