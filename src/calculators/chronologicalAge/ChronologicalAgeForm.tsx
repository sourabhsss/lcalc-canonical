
import React, { useState } from 'react';
import { format, isValid, isAfter, differenceInDays } from 'date-fns';
import { CalendarIcon, RotateCcw, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { calculateChronologicalAge } from './chronologicalAgeUtils';
import { cn } from '@/lib/utils';

interface ChronologicalAgeFormProps {
  onCalculate: (result: {
    years: number;
    months: number;
    days: number;
    totalDays: number;
    birthDate: Date;
    targetDate: Date;
  }) => void;
  onReset: () => void;
}

const ChronologicalAgeForm: React.FC<ChronologicalAgeFormProps> = ({ onCalculate, onReset }) => {
  const today = new Date();
  const [birthDate, setBirthDate] = useState<Date | undefined>(undefined);
  const [targetDate, setTargetDate] = useState<Date | undefined>(today);
  const [error, setError] = useState<string | null>(null);
  
  const handleCalculate = () => {
    // Validate dates
    if (!birthDate || !isValid(birthDate)) {
      setError('Please select a valid birth date');
      return;
    }
    
    if (!targetDate || !isValid(targetDate)) {
      setError('Please select a valid target date');
      return;
    }
    
    // Check if birth date is before target date
    if (isAfter(birthDate, targetDate)) {
      setError('Birth date must be before the target date');
      return;
    }
    
    setError(null);
    
    // Calculate age
    const { years, months, days } = calculateChronologicalAge(birthDate, targetDate);
    const totalDays = differenceInDays(targetDate, birthDate);
    
    onCalculate({
      years,
      months,
      days,
      totalDays,
      birthDate,
      targetDate
    });
  };
  
  const handleReset = () => {
    setBirthDate(undefined);
    setTargetDate(today);
    setError(null);
    onReset();
  };
  
  return (
    <form 
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleCalculate();
      }}
    >
      {error && (
        <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="birth-date">Birth Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="birth-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !birthDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? format(birthDate, "PPP") : <span>Select birth date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
                disabled={(date) => isAfter(date, today)}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="target-date">Target Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="target-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !targetDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {targetDate ? format(targetDate, "PPP") : <span>Select target date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={targetDate}
                onSelect={setTargetDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <Button type="submit" className="flex-1 sm:flex-none" disabled={!birthDate}>
          <Calculator className="mr-2 h-4 w-4" />
          Calculate Age
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          className="flex-1 sm:flex-none"
          onClick={handleReset}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </form>
  );
};

export default ChronologicalAgeForm;
