
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { CubeRootData } from './cubeRootTypes';

interface CubeRootFormProps {
  onCalculate: (data: CubeRootData) => void;
  onReset: () => void;
  showResult: boolean;
}

const CubeRootForm: React.FC<CubeRootFormProps> = ({
  onCalculate,
  onReset,
  showResult
}) => {
  const [number, setNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumber(value);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!number.trim()) {
      setError('Please enter a number');
      return;
    }
    
    const parsedNumber = parseFloat(number);
    
    if (isNaN(parsedNumber)) {
      setError('Please enter a valid number');
      return;
    }
    
    onCalculate({
      number: parsedNumber
    });
  };

  const handleReset = () => {
    setNumber('');
    setError('');
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
          Enter a Number
        </label>
        <div className="relative">
          <input
            id="number"
            type="text"
            inputMode="decimal"
            value={number}
            onChange={handleInputChange}
            className={`input-field w-full pr-10 ${error ? 'border-red-500' : ''}`}
            placeholder="e.g., 27"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Calculator className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="btn-primary flex-1"
        >
          Calculate Cube Root
        </button>
        
        {showResult && (
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary flex-1"
          >
            Reset
          </button>
        )}
      </div>
    </form>
  );
};

export default CubeRootForm;
