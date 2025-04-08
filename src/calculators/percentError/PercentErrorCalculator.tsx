
import React, { useState } from 'react';
import PercentErrorForm from './PercentErrorForm';
import PercentErrorResult from './PercentErrorResult';
import PercentErrorContent from './components/PercentErrorContent';
import PercentErrorFAQ from './components/PercentErrorFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { PercentErrorData } from './percentErrorTypes';

const PercentErrorCalculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [data, setData] = useState<PercentErrorData | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = (formData: PercentErrorData) => {
    const { measuredValue, actualValue } = formData;
    
    // Calculate percent error: |(measured - actual) / actual| × 100%
    const error = Math.abs((measuredValue - actualValue) / actualValue) * 100;
    
    setResult(error);
    setData(formData);
    setShowResult(true);
  };

  const handleReset = () => {
    setResult(null);
    setData(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Percent Error Calculator</h2>
        
        <PercentErrorForm
          onCalculate={handleCalculate}
          onReset={handleReset}
          showResult={showResult}
        />
        
        {showResult && data && result !== null && (
          <PercentErrorResult
            data={data}
            result={result}
          />
        )}
      </div>
      
      <PercentErrorContent />
      
      <PercentErrorFAQ />
      
      <RelatedCalculators />
    </div>
  );
};

export default PercentErrorCalculator;
