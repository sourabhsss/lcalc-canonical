
import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import AsphaltForm from './AsphaltForm';
import AsphaltResult from './AsphaltResult';
import AsphaltContent from './components/AsphaltContent';
import AsphaltFAQ from './components/AsphaltFAQ';

const AsphaltCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [params, setParams] = useState<{
    length: number;
    width: number;
    depth: number;
    pricePerTon: number;
    areaUnit: 'ft' | 'm';
    depthUnit: 'in' | 'cm' | 'mm';
    weightUnit: 'metric' | 'us';
  } | null>(null);

  const handleCalculate = (
    length: number,
    width: number,
    depth: number,
    pricePerTon: number,
    areaUnit: 'ft' | 'm',
    depthUnit: 'in' | 'cm' | 'mm',
    weightUnit: 'metric' | 'us'
  ) => {
    setParams({ length, width, depth, pricePerTon, areaUnit, depthUnit, weightUnit });
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
          <Layers className="text-primary" />
          <h2 className="text-xl font-semibold">Asphalt Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the amount of asphalt needed for your project based on dimensions.
            This calculator provides estimates for area, volume, weight, and cost.
          </p>
          
          <AsphaltForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && params && (
            <AsphaltResult {...params} />
          )}
        </div>
      </div>
      
      {/* Detailed Content */}
      <AsphaltContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <AsphaltFAQ />
      </div>
    </div>
  );
};

export default AsphaltCalculator;
