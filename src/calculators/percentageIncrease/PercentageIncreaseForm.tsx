
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PercentageIncreaseForm: React.FC<{
  onCalculate: (oldValue: number, newValue: number) => void;
}> = ({ onCalculate }) => {
  const [oldValue, setOldValue] = useState('');
  const [newValue, setNewValue] = useState('');
  const [calculationType, setCalculationType] = useState<'standard' | 'increase' | 'decrease'>('standard');
  const [error, setError] = useState<string | null>(null);

  const validateInputs = () => {
    setError(null);
    
    // Check if inputs are empty
    if (!oldValue.trim() || !newValue.trim()) {
      setError('Please enter both original and new values');
      return false;
    }
    
    // Parse inputs to numbers
    const oldVal = parseFloat(oldValue);
    const newVal = parseFloat(newValue);
    
    // Check if inputs are valid numbers
    if (isNaN(oldVal) || isNaN(newVal)) {
      setError('Both inputs must be valid numbers');
      return false;
    }
    
    // Old value can't be zero when calculating percentage change
    if (oldVal === 0 && calculationType === 'standard') {
      setError('Original value cannot be zero when calculating percentage change');
      return false;
    }
    
    return true;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateInputs()) {
      const oldVal = parseFloat(oldValue);
      const newVal = parseFloat(newValue);
      onCalculate(oldVal, newVal);
    }
  };

  const handleExample = () => {
    switch (calculationType) {
      case 'standard':
        setOldValue('100');
        setNewValue('125');
        break;
      case 'increase':
        setOldValue('100');
        setNewValue('20');
        break;
      case 'decrease':
        setOldValue('100');
        setNewValue('15');
        break;
    }
    setError(null);
  };

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-xl">Percentage Change Calculator</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleCalculate}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="calculation-type" className="text-base">
                Calculation Type
              </Label>
              <Select
                value={calculationType}
                onValueChange={(value) => setCalculationType(value as 'standard' | 'increase' | 'decrease')}
              >
                <SelectTrigger id="calculation-type">
                  <SelectValue placeholder="Select calculation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Percentage Change</SelectItem>
                  <SelectItem value="increase">Percentage Increase</SelectItem>
                  <SelectItem value="decrease">Percentage Decrease</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-1">
                {calculationType === 'standard' 
                  ? 'Calculate the percentage change between two values' 
                  : calculationType === 'increase'
                    ? 'Calculate a value after a percentage increase'
                    : 'Calculate a value after a percentage decrease'}
              </p>
            </div>
            
            <div>
              <Label htmlFor="old-value" className="text-base">
                {calculationType === 'standard' 
                  ? 'Original Value' 
                  : 'Base Value'}
              </Label>
              <Input
                id="old-value"
                type="number"
                step="any"
                placeholder={calculationType === 'standard' 
                  ? 'Enter the original value' 
                  : 'Enter the base value'}
                value={oldValue}
                onChange={(e) => setOldValue(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {calculationType === 'standard' 
                  ? 'The starting value before the change' 
                  : 'The value before applying the percentage'}
              </p>
            </div>
            
            <div>
              <Label htmlFor="new-value" className="text-base">
                {calculationType === 'standard' 
                  ? 'New Value' 
                  : 'Percentage'}
              </Label>
              <Input
                id="new-value"
                type="number"
                step="any"
                placeholder={calculationType === 'standard' 
                  ? 'Enter the new value' 
                  : 'Enter the percentage'}
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {calculationType === 'standard' 
                  ? 'The final value after the change' 
                  : 'The percentage to apply (e.g., 20 for 20%)'}
              </p>
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Separator />
            
            <div className="pt-2 space-y-2">
              <Button type="submit" className="w-full">
                Calculate
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={handleExample}
              >
                Use Example Values
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PercentageIncreaseForm;
