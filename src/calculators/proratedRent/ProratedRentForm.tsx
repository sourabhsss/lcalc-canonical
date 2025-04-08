
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
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ProratedRentFormProps {
  onCalculate: (
    monthlyRent: number,
    moveInDate: Date,
    method: 'daysInMonth' | 'standardMonth' | 'dailyRate'
  ) => void;
  onReset: () => void;
}

const ProratedRentForm: React.FC<ProratedRentFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [monthlyRent, setMonthlyRent] = useState<string>('');
  const [moveInDate, setMoveInDate] = useState<Date | undefined>(undefined);
  const [calculationMethod, setCalculationMethod] = useState<'daysInMonth' | 'standardMonth' | 'dailyRate'>('daysInMonth');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const rentValue = parseFloat(monthlyRent);
    
    if (isNaN(rentValue) || rentValue <= 0) {
      setError('Please enter a valid monthly rent amount.');
      return;
    }
    
    if (!moveInDate) {
      setError('Please select a move-in date.');
      return;
    }
    
    setError(null);
    onCalculate(rentValue, moveInDate, calculationMethod);
  };

  const handleReset = () => {
    setMonthlyRent('');
    setMoveInDate(undefined);
    setCalculationMethod('daysInMonth');
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="monthlyRent">Monthly Rent</Label>
          <div className="flex mt-1">
            <div className="bg-muted text-muted-foreground px-3 flex items-center border border-r-0 rounded-l-md">
              $
            </div>
            <Input
              id="monthlyRent"
              type="number"
              step="0.01"
              min="0.01"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              placeholder="Enter monthly rent amount"
              className="rounded-l-none"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="moveInDate">Move-In Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="moveInDate"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !moveInDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {moveInDate ? format(moveInDate, "MMMM d, yyyy") : <span>Select move-in date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={moveInDate}
                onSelect={setMoveInDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="calculationMethod">Calculation Method</Label>
          <Select
            value={calculationMethod}
            onValueChange={(value) => setCalculationMethod(value as 'daysInMonth' | 'standardMonth' | 'dailyRate')}
          >
            <SelectTrigger id="calculationMethod" className="mt-1">
              <SelectValue placeholder="Select calculation method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daysInMonth">Exact Days in Month (Most Common)</SelectItem>
              <SelectItem value="standardMonth">Standard 30-Day Month</SelectItem>
              <SelectItem value="dailyRate">Daily Rate (Higher Daily Amount)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground mt-1">
            Different landlords use different methods for calculating prorated rent. Check your lease or ask your landlord.
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
          Calculate Prorated Rent
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default ProratedRentForm;
