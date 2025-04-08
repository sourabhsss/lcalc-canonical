
import React, { useState } from 'react';
import RREFForm from './RREFForm';
import RREFResult from './RREFResult';
import MatrixOperationsGuide from './components/MatrixOperationsGuide';
import ApplicationsGuide from './components/ApplicationsGuide';
import RREFStepsGuide from './components/RREFStepsGuide';
import RelatedCalculators from './components/RelatedCalculators';
import { Matrix } from './rrefUtils';

const RREFCalculator: React.FC = () => {
  const [originalMatrix, setOriginalMatrix] = useState<Matrix | null>(null);
  const [rrefMatrix, setRrefMatrix] = useState<Matrix | null>(null);

  const handleCalculate = (original: Matrix, rref: Matrix) => {
    setOriginalMatrix(original);
    setRrefMatrix(rref);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">RREF Calculator</h2>
            <RREFForm onCalculate={handleCalculate} />
          </div>
          
          {(originalMatrix && rrefMatrix) && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <RREFResult originalMatrix={originalMatrix} rrefMatrix={rrefMatrix} />
            </div>
          )}
          
          <MatrixOperationsGuide />
          <RREFStepsGuide />
        </div>
        
        <div className="space-y-8">
          <ApplicationsGuide />
          <RelatedCalculators />
        </div>
      </div>
    </div>
  );
};

export default RREFCalculator;
