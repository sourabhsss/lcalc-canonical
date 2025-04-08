
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { 
  Card,
  CardContent 
} from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

interface PayRaiseFormProps {
  onCalculate: (
    currentSalary: number,
    raiseType: 'percentage' | 'amount',
    raiseValue: number,
    includeInflation: boolean,
    inflationRate: number,
    includeTaxImpact: boolean,
    payPeriod: 'annual' | 'monthly' | 'hourly',
    hoursPerWeek: number
  ) => void;
  onReset: () => void;
}

const PayRaiseForm: React.FC<PayRaiseFormProps> = ({ onCalculate, onReset }) => {
  // Form state
  const [currentSalary, setCurrentSalary] = useState<number>(50000);
  const [payPeriod, setPayPeriod] = useState<'annual' | 'monthly' | 'hourly'>('annual');
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [raiseType, setRaiseType] = useState<'percentage' | 'amount'>('percentage');
  const [raiseValue, setRaiseValue] = useState<number>(5);
  const [includeInflation, setIncludeInflation] = useState<boolean>(false);
  const [inflationRate, setInflationRate] = useState<number>(3.5);
  const [includeTaxImpact, setIncludeTaxImpact] = useState<boolean>(false);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(
      currentSalary,
      raiseType,
      raiseValue,
      includeInflation,
      inflationRate,
      includeTaxImpact,
      payPeriod,
      hoursPerWeek
    );
  };

  // Handle form reset
  const handleReset = () => {
    setCurrentSalary(50000);
    setRaiseType('percentage');
    setRaiseValue(5);
    setIncludeInflation(false);
    setInflationRate(3.5);
    setIncludeTaxImpact(false);
    setPayPeriod('annual');
    setHoursPerWeek(40);
    onReset();
  };

  return (
    <Card className="border rounded-lg shadow-sm">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Current Salary Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentSalary">Current Salary</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input
                    id="currentSalary"
                    type="number"
                    min="0"
                    step="1"
                    value={currentSalary}
                    onChange={(e) => setCurrentSalary(Number(e.target.value))}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="payPeriod">Pay Period</Label>
                <Select 
                  value={payPeriod} 
                  onValueChange={(value: 'annual' | 'monthly' | 'hourly') => setPayPeriod(value)}
                >
                  <SelectTrigger id="payPeriod">
                    <SelectValue placeholder="Select pay period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {payPeriod === 'hourly' && (
              <div className="space-y-2">
                <Label htmlFor="hoursPerWeek">Hours Per Week</Label>
                <Input
                  id="hoursPerWeek"
                  type="number"
                  min="1"
                  max="168"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  required
                />
              </div>
            )}
          </div>
          
          {/* Raise Details Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="raiseType">Raise Type</Label>
                <Select 
                  value={raiseType} 
                  onValueChange={(value: 'percentage' | 'amount') => setRaiseType(value)}
                >
                  <SelectTrigger id="raiseType">
                    <SelectValue placeholder="Select raise type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (%)</SelectItem>
                    <SelectItem value="amount">Flat Amount ($)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="raiseValue">
                  {raiseType === 'percentage' ? 'Raise Percentage (%)' : 'Raise Amount ($)'}
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {raiseType === 'percentage' ? (
                      <span className="text-muted-foreground">%</span>
                    ) : (
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <Input
                    id="raiseValue"
                    type="number"
                    min="0"
                    step={raiseType === 'percentage' ? '0.1' : '1'}
                    value={raiseValue}
                    onChange={(e) => setRaiseValue(Number(e.target.value))}
                    className="pl-9"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Advanced Options */}
          <div className="space-y-4 pt-2 border-t">
            <h3 className="text-sm font-medium">Advanced Options</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch
                  id="includeInflation"
                  checked={includeInflation}
                  onCheckedChange={setIncludeInflation}
                />
                <Label htmlFor="includeInflation" className="cursor-pointer">
                  Include Inflation Adjustment
                </Label>
              </div>
            </div>
            
            {includeInflation && (
              <div className="space-y-2 pl-6">
                <Label htmlFor="inflationRate">Inflation Rate (%)</Label>
                <Input
                  id="inflationRate"
                  type="number"
                  min="0"
                  step="0.1"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(Number(e.target.value))}
                  required
                />
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Switch
                  id="includeTaxImpact"
                  checked={includeTaxImpact}
                  onCheckedChange={setIncludeTaxImpact}
                />
                <Label htmlFor="includeTaxImpact" className="cursor-pointer">
                  Estimate Tax Impact (US Federal Tax)
                </Label>
              </div>
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" className="w-full">Calculate Pay Raise</Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleReset}
              className="w-full"
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PayRaiseForm;
