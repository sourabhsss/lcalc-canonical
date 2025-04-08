
import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  DUNK_TYPES,
  calculateStandingReach
} from './dunkUtils';

interface DunkFormProps {
  onCalculate: (formData: DunkFormData) => void;
}

export interface DunkFormData {
  height: number;
  unit: 'in' | 'cm';
  standingReach: number;
  currentVertical: number;
  dunkType: string;
}

const DunkForm: React.FC<DunkFormProps> = ({ onCalculate }) => {
  const [height, setHeight] = useState<number | ''>('');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [useCalculatedReach, setUseCalculatedReach] = useState(true);
  const [standingReach, setStandingReach] = useState<number | ''>('');
  const [currentVertical, setCurrentVertical] = useState<number | ''>('');
  const [dunkType, setDunkType] = useState('Basic Dunk');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate standing reach when height changes
  useEffect(() => {
    if (height && useCalculatedReach) {
      const calculatedReach = calculateStandingReach(Number(height), unit);
      setStandingReach(calculatedReach);
    }
  }, [height, unit, useCalculatedReach]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!height) {
      newErrors.height = 'Height is required';
    } else if (unit === 'in' && (Number(height) < 48 || Number(height) > 96)) {
      newErrors.height = 'Height should be between 48-96 inches (4-8 feet)';
    } else if (unit === 'cm' && (Number(height) < 120 || Number(height) > 245)) {
      newErrors.height = 'Height should be between 120-245 cm';
    }
    
    if (!standingReach) {
      newErrors.standingReach = 'Standing reach is required';
    } else if (unit === 'in' && (Number(standingReach) < 60 || Number(standingReach) > 120)) {
      newErrors.standingReach = 'Standing reach should be between 60-120 inches (5-10 feet)';
    } else if (unit === 'cm' && (Number(standingReach) < 150 || Number(standingReach) > 305)) {
      newErrors.standingReach = 'Standing reach should be between 150-305 cm';
    }
    
    if (currentVertical === '') {
      newErrors.currentVertical = 'Current vertical leap is required';
    } else if (Number(currentVertical) < 0 || Number(currentVertical) > 60) {
      newErrors.currentVertical = unit === 'in' 
        ? 'Vertical leap should be between 0-60 inches' 
        : 'Vertical leap should be between 0-150 cm';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCalculate({
        height: Number(height),
        unit,
        standingReach: Number(standingReach),
        currentVertical: Number(currentVertical),
        dunkType
      });
    }
  };

  const handleUnitChange = (newUnit: 'in' | 'cm') => {
    if (unit !== newUnit) {
      setUnit(newUnit);
      
      // Convert values when changing units
      if (height) {
        setHeight(newUnit === 'cm' 
          ? Math.round(Number(height) * 2.54 * 10) / 10
          : Math.round(Number(height) / 2.54 * 10) / 10
        );
      }
      
      if (standingReach) {
        setStandingReach(newUnit === 'cm'
          ? Math.round(Number(standingReach) * 2.54 * 10) / 10
          : Math.round(Number(standingReach) / 2.54 * 10) / 10
        );
      }
      
      if (currentVertical !== '') {
        setCurrentVertical(newUnit === 'cm'
          ? Math.round(Number(currentVertical) * 2.54 * 10) / 10
          : Math.round(Number(currentVertical) / 2.54 * 10) / 10
        );
      }
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="unit" className="text-sm font-medium">Measurement Unit</Label>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  type="button"
                  variant={unit === 'in' ? "default" : "outline"}
                  onClick={() => handleUnitChange('in')}
                  className="flex-1"
                >
                  Inches (in)
                </Button>
                <Button 
                  type="button"
                  variant={unit === 'cm' ? "default" : "outline"}
                  onClick={() => handleUnitChange('cm')}
                  className="flex-1"
                >
                  Centimeters (cm)
                </Button>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="height" className="text-sm font-medium">Height</Label>
              </div>
              <div className="flex">
                <Input
                  id="height"
                  type="number"
                  step="0.1"
                  placeholder={unit === 'in' ? "Height in inches" : "Height in centimeters"}
                  value={height}
                  onChange={(e) => setHeight(e.target.value ? Number(e.target.value) : '')}
                  className={errors.height ? "border-red-500" : ""}
                />
                <span className="flex items-center justify-center px-3 bg-gray-100 border border-l-0 rounded-r-md">
                  {unit}
                </span>
              </div>
              {errors.height && <p className="mt-1 text-sm text-red-500">{errors.height}</p>}
              <p className="mt-1 text-xs text-muted-foreground">
                {unit === 'in' 
                  ? "For a 6'0\" person, enter 72 inches" 
                  : "For a 183 cm tall person, enter 183"}
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="standingReach" className="text-sm font-medium">Standing Reach</Label>
                <div className="flex items-center">
                  <Label htmlFor="useCalculatedReach" className="mr-2 text-xs text-muted-foreground">
                    Estimate for me
                  </Label>
                  <input
                    id="useCalculatedReach"
                    type="checkbox"
                    checked={useCalculatedReach}
                    onChange={(e) => setUseCalculatedReach(e.target.checked)}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="flex">
                <Input
                  id="standingReach"
                  type="number"
                  step="0.1"
                  placeholder={unit === 'in' ? "Reach in inches" : "Reach in centimeters"}
                  value={standingReach}
                  onChange={(e) => setStandingReach(e.target.value ? Number(e.target.value) : '')}
                  disabled={useCalculatedReach}
                  className={errors.standingReach ? "border-red-500" : ""}
                />
                <span className="flex items-center justify-center px-3 bg-gray-100 border border-l-0 rounded-r-md">
                  {unit}
                </span>
              </div>
              {errors.standingReach && <p className="mt-1 text-sm text-red-500">{errors.standingReach}</p>}
              <p className="mt-1 text-xs text-muted-foreground">
                Standing reach is how high you can extend your arm while standing flat-footed
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="currentVertical" className="text-sm font-medium">Current Vertical Leap</Label>
              </div>
              <div className="flex">
                <Input
                  id="currentVertical"
                  type="number"
                  step="0.1"
                  placeholder={unit === 'in' ? "Vertical leap in inches" : "Vertical leap in centimeters"}
                  value={currentVertical}
                  onChange={(e) => setCurrentVertical(e.target.value ? Number(e.target.value) : '')}
                  className={errors.currentVertical ? "border-red-500" : ""}
                />
                <span className="flex items-center justify-center px-3 bg-gray-100 border border-l-0 rounded-r-md">
                  {unit}
                </span>
              </div>
              {errors.currentVertical && <p className="mt-1 text-sm text-red-500">{errors.currentVertical}</p>}
              <p className="mt-1 text-xs text-muted-foreground">
                If unknown, enter 0 for a baseline assessment
              </p>
            </div>
            
            <div>
              <Label htmlFor="dunkType" className="block mb-2 text-sm font-medium">Dunk Type</Label>
              <Select
                value={dunkType}
                onValueChange={(value) => setDunkType(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select dunk type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(DUNK_TYPES).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="mt-1 text-xs text-muted-foreground">
                Different dunk types require different vertical leap heights
              </p>
            </div>
          </div>
          
          <Button type="submit" className="w-full">Calculate Dunk Requirements</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DunkForm;
