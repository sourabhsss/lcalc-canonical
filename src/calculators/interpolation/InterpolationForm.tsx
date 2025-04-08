
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Plus, Trash2 } from 'lucide-react';
import { DataPoint, InterpolationData, InterpolationMethod } from './interpolationUtils';
import { toast } from 'sonner';

interface InterpolationFormProps {
  onCalculate: (data: InterpolationData, method: InterpolationMethod) => void;
}

const InterpolationForm: React.FC<InterpolationFormProps> = ({ onCalculate }) => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([
    { x: 0, y: 0 },
    { x: 1, y: 1 }
  ]);
  
  const [targetX, setTargetX] = useState<string>('0.5');
  const [method, setMethod] = useState<InterpolationMethod>('linear');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const addDataPoint = () => {
    setDataPoints([...dataPoints, { x: 0, y: 0 }]);
  };

  const removeDataPoint = (index: number) => {
    if (dataPoints.length <= 2) {
      toast.error("At least two data points are required for interpolation");
      return;
    }
    
    const newPoints = dataPoints.filter((_, i) => i !== index);
    setDataPoints(newPoints);
  };

  const updateDataPoint = (index: number, field: 'x' | 'y', value: string) => {
    const newPoints = [...dataPoints];
    const numValue = parseFloat(value);
    
    if (!isNaN(numValue)) {
      newPoints[index][field] = numValue;
      setDataPoints(newPoints);
      
      // Clear any error for this field
      if (errors[`point-${index}-${field}`]) {
        const newErrors = { ...errors };
        delete newErrors[`point-${index}-${field}`];
        setErrors(newErrors);
      }
    } else if (value === '') {
      // Allow empty string during typing
      const newPoints = [...dataPoints];
      newPoints[index][field] = 0;
      setDataPoints(newPoints);
    } else {
      // Set error
      setErrors({
        ...errors,
        [`point-${index}-${field}`]: "Please enter a valid number"
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    // Check for duplicate x values
    const xValues = dataPoints.map(p => p.x);
    const hasDuplicates = xValues.some((value, index) => xValues.indexOf(value) !== index);
    
    if (hasDuplicates) {
      newErrors['duplicates'] = "X values must be unique for each data point";
      isValid = false;
    }

    // Check target X
    const xValue = parseFloat(targetX);
    if (isNaN(xValue)) {
      newErrors['targetX'] = "Please enter a valid number for the target X value";
      isValid = false;
    }

    // Minimum required points for different methods
    if (method === 'polynomial' && dataPoints.length < 3) {
      newErrors['points'] = "Polynomial interpolation works best with at least 3 data points";
      isValid = false;
    }

    if (method === 'cubic' && dataPoints.length < 3) {
      newErrors['points'] = "Cubic spline interpolation requires at least 3 data points";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const data: InterpolationData = {
      points: dataPoints,
      xValue: parseFloat(targetX)
    };

    onCalculate(data, method);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Data Points</h3>
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={addDataPoint}
            className="flex items-center gap-1"
          >
            <Plus size={16} /> Add Data Point
          </Button>
        </div>
        
        <div className="space-y-3">
          {dataPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-1">
                <Label htmlFor={`x-${index}`} className="text-sm">
                  X{index + 1}
                </Label>
                <Input
                  id={`x-${index}`}
                  type="number"
                  step="any"
                  value={point.x}
                  onChange={(e) => updateDataPoint(index, 'x', e.target.value)}
                  className={errors[`point-${index}-x`] ? "border-destructive" : ""}
                />
                {errors[`point-${index}-x`] && (
                  <p className="text-destructive text-sm mt-1">{errors[`point-${index}-x`]}</p>
                )}
              </div>
              
              <div className="flex-1">
                <Label htmlFor={`y-${index}`} className="text-sm">
                  Y{index + 1}
                </Label>
                <Input
                  id={`y-${index}`}
                  type="number"
                  step="any"
                  value={point.y}
                  onChange={(e) => updateDataPoint(index, 'y', e.target.value)}
                  className={errors[`point-${index}-y`] ? "border-destructive" : ""}
                />
                {errors[`point-${index}-y`] && (
                  <p className="text-destructive text-sm mt-1">{errors[`point-${index}-y`]}</p>
                )}
              </div>
              
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="self-end mb-1"
                onClick={() => removeDataPoint(index)}
                disabled={dataPoints.length <= 2}
              >
                <Trash2 size={18} className="text-destructive" />
              </Button>
            </div>
          ))}
        </div>
        
        {errors['duplicates'] && (
          <p className="text-destructive text-sm">{errors['duplicates']}</p>
        )}
        
        {errors['points'] && (
          <p className="text-destructive text-sm">{errors['points']}</p>
        )}

        <div className="pt-4 border-t">
          <Label htmlFor="target-x" className="text-sm">
            Target X Value to Interpolate
          </Label>
          <Input
            id="target-x"
            type="number"
            step="any"
            value={targetX}
            onChange={(e) => setTargetX(e.target.value)}
            className={errors['targetX'] ? "border-destructive" : ""}
          />
          {errors['targetX'] && (
            <p className="text-destructive text-sm mt-1">{errors['targetX']}</p>
          )}
        </div>
        
        <div className="pt-4">
          <Label className="text-sm block mb-2">
            Interpolation Method
          </Label>
          <RadioGroup 
            value={method} 
            onValueChange={(value) => setMethod(value as InterpolationMethod)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="linear" id="method-linear" />
              <Label htmlFor="method-linear" className="font-normal">
                Linear Interpolation
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="polynomial" id="method-polynomial" />
              <Label htmlFor="method-polynomial" className="font-normal">
                Polynomial Interpolation
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cubic" id="method-cubic" />
              <Label htmlFor="method-cubic" className="font-normal">
                Cubic Spline Interpolation
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button type="submit" className="px-8">
          Calculate
        </Button>
      </div>
    </form>
  );
};

export default InterpolationForm;
