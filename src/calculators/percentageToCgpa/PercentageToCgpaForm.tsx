
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PercentageToCgpaFormProps {
  onCalculate: (percentage: number, scale: 4 | 7 | 10) => void;
  onReset: () => void;
}

const PercentageToCgpaForm: React.FC<PercentageToCgpaFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [percentage, setPercentage] = useState<string>('');
  const [scale, setScale] = useState<4 | 7 | 10>(10);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const percentageValue = parseFloat(percentage);
    
    if (isNaN(percentageValue)) {
      setError('Please enter a valid percentage.');
      return;
    }
    
    if (percentageValue < 0 || percentageValue > 100) {
      setError('Percentage must be between 0 and 100.');
      return;
    }
    
    setError(null);
    onCalculate(percentageValue, scale);
  };

  const handleReset = () => {
    setPercentage('');
    setScale(10);
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="percentage">Percentage (%)</Label>
          <Input
            id="percentage"
            type="number"
            step="0.01"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            placeholder="Enter your percentage (e.g., 85.5)"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="scale">CGPA Scale</Label>
          <Select
            value={scale.toString()}
            onValueChange={(value) => setScale(parseInt(value) as 4 | 7 | 10)}
          >
            <SelectTrigger id="scale" className="mt-1">
              <SelectValue placeholder="Select CGPA scale" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10-point scale (India)</SelectItem>
              <SelectItem value="4">4-point scale (US)</SelectItem>
              <SelectItem value="7">7-point scale</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">
            Different universities use different CGPA scales. Choose the scale that matches your institution.
          </p>
        </div>
      </div>

      {error && (
        <div className="text-sm text-destructive mt-2">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button type="submit" className="px-8">
          Convert to CGPA
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default PercentageToCgpaForm;
