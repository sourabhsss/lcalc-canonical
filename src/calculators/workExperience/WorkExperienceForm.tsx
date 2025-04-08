
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface WorkExperienceFormProps {
  onCalculate: (startDate: Date, endDate: Date) => void;
  onReset: () => void;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return;
    }

    if (endDate < startDate) {
      setError('End date cannot be earlier than start date.');
      return;
    }

    setError(null);
    onCalculate(startDate, endDate);
  };

  const handleReset = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="start-date">Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="start-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : <span>Select start date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                disabled={(date) => date > new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="end-date">End Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="end-date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "PPP") : <span>Select end date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                disabled={(date) => date > new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {error && (
        <div className="text-sm text-destructive mt-2">
          {error}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <Button type="submit" className="px-8">
          Calculate Experience
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default WorkExperienceForm;
