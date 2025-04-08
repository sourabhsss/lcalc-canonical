
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PercentErrorData } from './percentErrorTypes';

interface PercentErrorFormProps {
  onCalculate: (data: PercentErrorData) => void;
  onReset: () => void;
  showResult: boolean;
}

const PercentErrorForm: React.FC<PercentErrorFormProps> = ({
  onCalculate,
  onReset,
  showResult
}) => {
  const [measuredValue, setMeasuredValue] = useState<string>('');
  const [actualValue, setActualValue] = useState<string>('');
  const [units, setUnits] = useState<string>('');
  const [errors, setErrors] = useState<{
    measuredValue?: string;
    actualValue?: string;
  }>({});

  const validateInputs = (): boolean => {
    const newErrors: {
      measuredValue?: string;
      actualValue?: string;
    } = {};
    
    if (!measuredValue.trim()) {
      newErrors.measuredValue = 'Measured value is required';
    } else if (isNaN(Number(measuredValue))) {
      newErrors.measuredValue = 'Must be a valid number';
    }
    
    if (!actualValue.trim()) {
      newErrors.actualValue = 'Actual value is required';
    } else if (isNaN(Number(actualValue))) {
      newErrors.actualValue = 'Must be a valid number';
    } else if (Number(actualValue) === 0) {
      newErrors.actualValue = 'Actual value cannot be zero';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }
    
    onCalculate({
      measuredValue: Number(measuredValue),
      actualValue: Number(actualValue),
      units: units.trim() || undefined
    });
  };

  const handleReset = () => {
    setMeasuredValue('');
    setActualValue('');
    setUnits('');
    setErrors({});
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="measuredValue">Measured Value</Label>
          <div className="relative">
            <Input
              id="measuredValue"
              type="text"
              inputMode="decimal"
              value={measuredValue}
              onChange={(e) => setMeasuredValue(e.target.value)}
              placeholder="e.g., 10.5"
              className={errors.measuredValue ? "border-red-500" : ""}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Calculator className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          {errors.measuredValue && (
            <p className="text-red-500 text-sm">{errors.measuredValue}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="actualValue">Actual Value</Label>
          <div className="relative">
            <Input
              id="actualValue"
              type="text"
              inputMode="decimal"
              value={actualValue}
              onChange={(e) => setActualValue(e.target.value)}
              placeholder="e.g., 10"
              className={errors.actualValue ? "border-red-500" : ""}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Calculator className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          {errors.actualValue && (
            <p className="text-red-500 text-sm">{errors.actualValue}</p>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="units">Units (Optional)</Label>
        <Input
          id="units"
          type="text"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder="e.g., meters, kg, °C"
        />
        <p className="text-sm text-gray-500">
          Specify the units of measurement (optional)
        </p>
      </div>
      
      <div className="flex space-x-4">
        <button
          type="submit"
          className="btn-primary flex-1"
        >
          Calculate Percent Error
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

export default PercentErrorForm;
