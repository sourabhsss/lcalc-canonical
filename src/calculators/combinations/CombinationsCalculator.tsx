
import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import CombinationsForm from './CombinationsForm';
import CombinationsResult from './CombinationsResult';
import CombinationsContent from './components/CombinationsContent';
import CombinationsFAQ from './components/CombinationsFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { calculateCombination } from './combinationsUtils';

const CombinationsCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    n: number;
    r: number;
    combinations: number;
    formula: string;
    steps: Array<{
      description: string;
      calculation: string;
      result: number | string;
    }>;
  } | null>(null);

  const handleCalculate = (n: number, r: number) => {
    if (n >= r && r >= 0) {
      const result = calculateCombination(n, r);
      setResults(result);
    }
  };

  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <CombinationsForm onCalculate={handleCalculate} />
        </div>
        
        <div className="lg:col-span-2">
          {results ? (
            <CombinationsResult results={results} />
          ) : (
            <div className="h-full flex items-center justify-center p-6 border rounded-lg bg-muted/5">
              <p className="text-center text-muted-foreground">
                Enter values to calculate the number of combinations.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-16">
        <CombinationsContent />
        <CombinationsFAQ />
        <RelatedCalculators />
      </div>
    </Container>
  );
};

export default CombinationsCalculator;
