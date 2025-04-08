
import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import PercentageIncreaseForm from './PercentageIncreaseForm';
import PercentageIncreaseResult from './PercentageIncreaseResult';
import PercentageIncreaseContent from './components/PercentageIncreaseContent';
import PercentageIncreaseFAQ from './components/PercentageIncreaseFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { calculatePercentageChange } from './percentageIncreaseUtils';

const PercentageIncreaseCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    oldValue: number;
    newValue: number;
    percentageChange: number;
    absoluteChange: number;
    isIncrease: boolean;
    formula: string;
    steps: Array<{
      description: string;
      calculation: string;
      result: number | string;
    }>;
  } | null>(null);

  const handleCalculate = (oldValue: number, newValue: number) => {
    const result = calculatePercentageChange(oldValue, newValue);
    setResults(result);
  };

  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <PercentageIncreaseForm onCalculate={handleCalculate} />
        </div>
        
        <div className="lg:col-span-2">
          {results ? (
            <PercentageIncreaseResult results={results} />
          ) : (
            <div className="h-full flex items-center justify-center p-6 border rounded-lg bg-muted/5">
              <p className="text-center text-muted-foreground">
                Enter values to calculate the percentage change.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-16">
        <PercentageIncreaseContent />
        <PercentageIncreaseFAQ />
        <RelatedCalculators />
      </div>
    </Container>
  );
};

export default PercentageIncreaseCalculator;
