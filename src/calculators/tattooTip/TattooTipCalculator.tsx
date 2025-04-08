
import React, { useState } from 'react';
import TattooTipForm from './TattooTipForm';
import TattooTipResult from './TattooTipResult';
import TattooTipContent from './components/TattooTipContent';
import TattooTipFAQ from './components/TattooTipFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { TattooTipFormData, TattooTipResultData } from './tattooTipTypes';
import { calculateTattooTip } from './tattooTipUtils';

const TattooTipCalculator: React.FC = () => {
  const [result, setResult] = useState<TattooTipResultData | null>(null);

  const handleCalculate = (data: TattooTipFormData) => {
    const calculationResult = calculateTattooTip(data);
    setResult(calculationResult);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        {!result ? (
          <TattooTipForm onCalculate={handleCalculate} />
        ) : (
          <TattooTipResult result={result} onReset={handleReset} />
        )}
      </div>

      <div className="space-y-12">
        <TattooTipContent />
        <RelatedCalculators />
        <TattooTipFAQ />
      </div>
    </div>
  );
};

export default TattooTipCalculator;
