import React, { useState } from 'react';
import { Container } from '@/components/ui/container';
import DunkForm, { DunkFormData } from './DunkForm';
import DunkResult from './DunkResult';

const DunkCalculator: React.FC = () => {
  const [result, setResult] = useState<DunkFormData | null>(null);

  const handleCalculate = (formData: DunkFormData) => {
    setResult(formData);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('dunk-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-1">
          <DunkForm onCalculate={handleCalculate} />
        </div>
        
        <div className="lg:col-span-1">
          {result ? (
            <div id="dunk-results">
              <DunkResult formData={result} />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-6 border rounded-lg bg-muted/5">
              <p className="text-center text-muted-foreground">
                Enter your measurements to calculate your dunking potential.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default DunkCalculator;
