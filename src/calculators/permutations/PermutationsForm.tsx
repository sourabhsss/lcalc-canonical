
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

const PermutationsForm: React.FC<{
  onCalculate: (n: number, r: number) => void;
}> = ({ onCalculate }) => {
  const [n, setN] = useState('');
  const [r, setR] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validateInputs = () => {
    setError(null);
    
    // Check if inputs are empty
    if (!n.trim() || !r.trim()) {
      setError('Please enter values for both n and r');
      return false;
    }
    
    // Parse inputs to numbers
    const nValue = parseInt(n, 10);
    const rValue = parseInt(r, 10);
    
    // Check if inputs are valid numbers
    if (isNaN(nValue) || isNaN(rValue)) {
      setError('Both inputs must be valid numbers');
      return false;
    }
    
    // Check if inputs are non-negative integers
    if (nValue < 0 || rValue < 0 || !Number.isInteger(nValue) || !Number.isInteger(rValue)) {
      setError('Both n and r must be non-negative integers');
      return false;
    }
    
    // Check if r is less than or equal to n
    if (rValue > nValue) {
      setError('r cannot be greater than n');
      return false;
    }
    
    // Check if inputs are not too large to calculate
    if (nValue > 100) {
      setError('n is too large for accurate calculation (maximum is 100)');
      return false;
    }
    
    return true;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateInputs()) {
      onCalculate(parseInt(n, 10), parseInt(r, 10));
    }
  };

  const handleExample = () => {
    setN('10');
    setR('3');
    setError(null);
  };

  return (
    <Card className="w-full shadow-sm">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-xl">Permutations Calculator</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleCalculate}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="n-value" className="text-base">
                Total items (n)
              </Label>
              <Input
                id="n-value"
                type="number"
                min="0"
                step="1"
                placeholder="Enter the total number of items"
                value={n}
                onChange={(e) => setN(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                The total number of elements in the set
              </p>
            </div>
            
            <div>
              <Label htmlFor="r-value" className="text-base">
                Items to arrange (r)
              </Label>
              <Input
                id="r-value"
                type="number"
                min="0"
                step="1"
                placeholder="Enter the number of items to arrange"
                value={r}
                onChange={(e) => setR(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                The number of elements to arrange in sequence
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
                Calculate Permutations
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

export default PermutationsForm;
