
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { DollarSign, Calculator, RotateCcw } from 'lucide-react';

interface ApyFormProps {
  onCalculate: (principal: number, interestRate: number, compoundFrequency: number) => void;
  onReset: () => void;
}

const ApyForm: React.FC<ApyFormProps> = ({ onCalculate, onReset }) => {
  const [principal, setPrincipal] = useState<string>('10000');
  const [interestRate, setInterestRate] = useState<string>('5');
  const [compoundFrequency, setCompoundFrequency] = useState<string>('12');
  const [errors, setErrors] = useState<{
    principal?: string;
    interestRate?: string;
  }>({});

  const validateInputs = () => {
    const newErrors: {
      principal?: string;
      interestRate?: string;
    } = {};

    // Validate principal
    if (!principal || isNaN(Number(principal)) || Number(principal) <= 0) {
      newErrors.principal = 'Please enter a valid positive amount';
    }

    // Validate interest rate
    if (!interestRate || isNaN(Number(interestRate)) || Number(interestRate) < 0 || Number(interestRate) > 100) {
      newErrors.interestRate = 'Please enter a valid interest rate between 0 and 100';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      onCalculate(
        Number(principal),
        Number(interestRate),
        Number(compoundFrequency)
      );
    }
  };

  const handleReset = () => {
    setPrincipal('10000');
    setInterestRate('5');
    setCompoundFrequency('12');
    setErrors({});
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
      <div className="space-y-4">
        <div>
          <Label htmlFor="principal">Initial Investment Amount</Label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              id="principal"
              type="number"
              placeholder="Enter initial investment amount"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="pl-10"
              step="0.01"
              min="0"
            />
          </div>
          {errors.principal && <p className="text-destructive text-sm mt-1">{errors.principal}</p>}
        </div>

        <div>
          <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
          <div className="relative mt-1">
            <Input
              id="interestRate"
              type="number"
              placeholder="Enter annual interest rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              step="0.01"
              min="0"
              max="100"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-muted-foreground">%</span>
            </div>
          </div>
          {errors.interestRate && <p className="text-destructive text-sm mt-1">{errors.interestRate}</p>}
        </div>

        <div>
          <Label htmlFor="compoundFrequency">Compounding Frequency</Label>
          <Select
            value={compoundFrequency}
            onValueChange={setCompoundFrequency}
          >
            <SelectTrigger id="compoundFrequency" className="w-full">
              <SelectValue placeholder="Select compounding frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Annually (1 time per year)</SelectItem>
              <SelectItem value="2">Semi-annually (2 times per year)</SelectItem>
              <SelectItem value="4">Quarterly (4 times per year)</SelectItem>
              <SelectItem value="12">Monthly (12 times per year)</SelectItem>
              <SelectItem value="365">Daily (365 times per year)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" className="flex-1">
          <Calculator className="mr-2 h-4 w-4" />
          Calculate APY
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="flex-1">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </form>
  );
};

export default ApyForm;
