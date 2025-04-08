
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import PeptideForm from './PeptideForm';
import PeptideResult from './PeptideResult';
import { PeptideData, CalculatedPeptideProperties } from './peptideTypes';
import { calculatePeptideProperties } from './peptideCalculatorUtils';

const PeptideCalculator: React.FC = () => {
  const [result, setResult] = useState<CalculatedPeptideProperties | null>(null);
  const [inputData, setInputData] = useState<PeptideData | null>(null);
  
  const handleCalculate = (data: PeptideData) => {
    const calculatedProperties = calculatePeptideProperties(data.sequence);
    setResult(calculatedProperties);
    setInputData(data);
  };
  
  const handleReset = () => {
    setResult(null);
    setInputData(null);
  };
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Column */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="pt-6">
              {!result ? (
                <PeptideForm onCalculate={handleCalculate} />
              ) : (
                <PeptideResult 
                  properties={result}
                  inputData={inputData}
                  onReset={handleReset}
                />
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Instructions Column */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">How to Use</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Peptide Calculator helps you determine important biochemical properties of peptides based on their amino acid sequence.
                </p>
                
                <ol className="list-decimal list-inside space-y-2">
                  <li>Enter the peptide sequence using single-letter amino acid codes (e.g., ACDEFGHIKLMNPQRSTVWY)</li>
                  <li>Select any additional calculation options if needed</li>
                  <li>Click "Calculate Properties" to analyze your peptide</li>
                  <li>Review the comprehensive results including molecular weight, isoelectric point, and more</li>
                </ol>
                
                <p className="text-sm italic mt-4">
                  This calculator is designed for educational and research purposes. For critical applications, always validate results with laboratory analysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PeptideCalculator;
