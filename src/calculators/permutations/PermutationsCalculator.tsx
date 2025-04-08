
import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import PermutationsForm from './PermutationsForm';
import PermutationsResult from './PermutationsResult';
import PermutationsContent from './components/PermutationsContent';
import PermutationsFAQ from './components/PermutationsFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { calculatePermutation } from './permutationsUtils';

const PermutationsCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    n: number;
    r: number;
    permutations: number;
    formula: string;
    steps: Array<{
      description: string;
      calculation: string;
      result: number | string;
    }>;
  } | null>(null);

  const handleCalculate = (n: number, r: number) => {
    if (n >= r && r >= 0) {
      const result = calculatePermutation(n, r);
      setResults(result);
    }
  };

  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <PermutationsForm onCalculate={handleCalculate} />
        </div>
        
        <div className="lg:col-span-2">
          {results ? (
            <PermutationsResult results={results} />
          ) : (
            <div className="h-full flex items-center justify-center p-6 border rounded-lg bg-muted/5">
              <p className="text-center text-muted-foreground">
                Enter values to calculate the number of permutations.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-16">
        <PermutationsContent />
        <PermutationsFAQ />
        <RelatedCalculators />
      </div>
    </Container>
  );
};

export default PermutationsCalculator;
