
import React, { useState } from 'react';
import LcmHcfForm from './LcmHcfForm';
import LcmHcfResult from './LcmHcfResult';
import { LcmHcfFormData, LcmHcfResult as ResultType } from './lcmHcfTypes';
import { 
  calculateLCMOfArray, 
  calculateHCFOfArray,
  generateLCMSteps,
  generateHCFSteps
} from './lcmHcfUtils';
import LcmHcfContent from './components/LcmHcfContent';
import LcmHcfFAQ from './components/LcmHcfFAQ';
import RelatedCalculators from './components/RelatedCalculators';

const LcmHcfCalculator: React.FC = () => {
  const [result, setResult] = useState<ResultType | null>(null);

  const handleCalculate = (data: LcmHcfFormData) => {
    // Parse input numbers
    const numbers = data.numbers
      .split(',')
      .map(num => parseInt(num.trim()))
      .filter(num => !isNaN(num));

    if (numbers.length === 0) {
      return;
    }

    let calculationResult: number;
    let steps: string[] | undefined;

    if (data.calculationType === 'lcm') {
      calculationResult = calculateLCMOfArray(numbers);
      steps = data.showSteps ? generateLCMSteps(numbers) : undefined;
    } else {
      calculationResult = calculateHCFOfArray(numbers);
      steps = data.showSteps ? generateHCFSteps(numbers) : undefined;
    }

    setResult({
      result: calculationResult,
      numbers,
      calculationType: data.calculationType,
      steps
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <LcmHcfForm onCalculate={handleCalculate} />
        
        {result && <LcmHcfResult result={result} />}
        
        <LcmHcfContent />
        <RelatedCalculators />
        <LcmHcfFAQ />
      </div>
    </div>
  );
};

export default LcmHcfCalculator;
