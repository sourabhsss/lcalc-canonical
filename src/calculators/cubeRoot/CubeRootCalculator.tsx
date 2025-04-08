
import React from 'react';
import CubeRootForm from './CubeRootForm';
import CubeRootResult from './CubeRootResult';
import { useState } from 'react';
import { CubeRootData } from './cubeRootTypes';
import CubeRootContent from './components/CubeRootContent';
import CubeRootFAQ from './components/CubeRootFAQ';
import RelatedCalculators from './components/RelatedCalculators';

const CubeRootCalculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateCubeRoot = (data: CubeRootData) => {
    const number = data.number;
    setInputValue(number);
    
    // Calculate cube root
    const cubeRootResult = Math.cbrt(number);
    setResult(cubeRootResult);
    setShowResult(true);
  };

  const resetCalculator = () => {
    setResult(null);
    setInputValue(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Cube Root Calculator</h2>
          
          <CubeRootForm 
            onCalculate={calculateCubeRoot} 
            onReset={resetCalculator}
            showResult={showResult}
          />
          
          {showResult && result !== null && inputValue !== null && (
            <CubeRootResult 
              input={inputValue} 
              result={result} 
            />
          )}
        </div>
      </div>

      <CubeRootContent />
      <CubeRootFAQ />
      <RelatedCalculators />
    </div>
  );
};

export default CubeRootCalculator;
