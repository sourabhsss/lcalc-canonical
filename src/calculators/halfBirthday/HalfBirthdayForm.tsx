
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { format, isValid, parse } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface HalfBirthdayFormProps {
  onCalculate: (date: Date) => void;
  onReset: () => void;
}

const HalfBirthdayForm: React.FC<HalfBirthdayFormProps> = ({ onCalculate, onReset }) => {
  const [date, setDate] = useState<Date | undefined>();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      setError('Please select a date.');
      return;
    }
    
    if (!isValid(date)) {
      setError('Please select a valid date.');
      return;
    }
    
    setError(null);
    onCalculate(date);
  };

  const handleClear = () => {
    setDate(undefined);
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="birthdate" className="block text-sm font-medium mb-1">
          Enter Your Birthdate
        </label>
        <div className="flex gap-2 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {date ? format(date, "MMMM d, yyyy") : <span>Select your birthdate</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        {error && (
          <p className="text-destructive text-sm mt-1">{error}</p>
        )}
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          Calculate Half Birthday
        </Button>
        <Button 
          type="button" 
          onClick={handleClear}
          variant="outline"
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default HalfBirthdayForm;
