import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { format } from 'date-fns';
import { 
  Calendar as CalendarIcon, 
  RotateCcw,
  Calculator,
  Info
} from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  CourtDeadlineInputs,
  DeadlineType,
  FilingMethod,
  CourtType,
  Holiday
} from './courtDeadlineUtils';
import { cn } from '@/lib/utils';

interface CourtDeadlineFormProps {
  onCalculate: (inputs: CourtDeadlineInputs) => void;
  onReset: () => void;
}

const CourtDeadlineForm: React.FC<CourtDeadlineFormProps> = ({ onCalculate, onReset }) => {
  const today = new Date();
  const [filingDate, setFilingDate] = useState<Date>(today);
  const [deadlineDays, setDeadlineDays] = useState<number>(30);
  const [deadlineType, setDeadlineType] = useState<DeadlineType>('court');
  const [courtType, setCourtType] = useState<CourtType>('federal');
  const [filingMethod, setFilingMethod] = useState<FilingMethod>('inPerson');
  const [state, setState] = useState<string>('CA');
  const [includeHolidays, setIncludeHolidays] = useState<boolean>(true);
  const [customHolidays, setCustomHolidays] = useState<Holiday[]>([]);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};

    if (!filingDate) {
      errors.filingDate = "Please select a filing date";
    }

    if (isNaN(deadlineDays) || deadlineDays <= 0) {
      errors.deadlineDays = "Please enter a valid number of days greater than 0";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const inputs: CourtDeadlineInputs = {
      filingDate,
      deadlineDays,
      deadlineType,
      courtType,
      filingMethod,
      state,
      includeHolidays,
      customHolidays,
    };

    onCalculate(inputs);
  };

  const handleReset = () => {
    setFilingDate(today);
    setDeadlineDays(30);
    setDeadlineType('court');
    setCourtType('federal');
    setFilingMethod('inPerson');
    setState('CA');
    setIncludeHolidays(true);
    setCustomHolidays([]);
    setFormErrors({});
    onReset();
  };

  return (
    <div className="p-6">
      <form onSubmit={handleCalculate} className="space-y-6">
        {/* Filing Date Selection */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="filingDate" className="text-base font-semibold">Filing Date</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">The date when a legal document is filed with the court.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal bg-white",
                  !filingDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {filingDate ? format(filingDate, "PPP") : <span>Select filing date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={filingDate}
                onSelect={(date) => date && setFilingDate(date)}
                initialFocus
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
          {formErrors.filingDate && <p className="text-red-500 text-sm">{formErrors.filingDate}</p>}
        </div>

        {/* Deadline Days Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="deadlineDays" className="text-base font-semibold">Deadline (Days)</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">Number of days until the legal deadline.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Input
            id="deadlineDays"
            type="number"
            value={deadlineDays}
            onChange={(e) => setDeadlineDays(parseInt(e.target.value))}
            className={cn("bg-white", formErrors.deadlineDays && "border-red-500")}
          />
          {formErrors.deadlineDays && <p className="text-red-500 text-sm">{formErrors.deadlineDays}</p>}
        </div>

        {/* Deadline Type Selection */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label className="text-base font-semibold">Deadline Type</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">How days are counted for the deadline.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <RadioGroup 
            value={deadlineType} 
            onValueChange={(value: DeadlineType) => setDeadlineType(value)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="calendar" id="calendar" />
              <Label htmlFor="calendar" className="text-sm">Calendar Days (includes weekends & holidays)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="business" id="business" />
              <Label htmlFor="business" className="text-sm">Business Days (excludes weekends & holidays)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="court" id="court" />
              <Label htmlFor="court" className="text-sm">Court Days (follows court rules)</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Court Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="courtType" className="text-base font-semibold">Court Type</Label>
          <Select value={courtType} onValueChange={(value: CourtType) => setCourtType(value)}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select court type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="federal">Federal Court</SelectItem>
              <SelectItem value="state">State Court</SelectItem>
              <SelectItem value="local">Local Court</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Filing Method */}
        <div className="space-y-2">
          <Label htmlFor="filingMethod" className="text-base font-semibold">Filing Method</Label>
          <Select value={filingMethod} onValueChange={(value: FilingMethod) => setFilingMethod(value)}>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select filing method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inPerson">In Person</SelectItem>
              <SelectItem value="electronic">Electronic</SelectItem>
              <SelectItem value="mail">Mail</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Include Holidays Toggle */}
        <div className="flex items-center justify-between">
          <Label htmlFor="includeHolidays" className="text-base">Include Holidays in Calculation</Label>
          <Switch 
            id="includeHolidays" 
            checked={includeHolidays} 
            onCheckedChange={setIncludeHolidays}
          />
        </div>

        {/* Form Actions */}
        <div className="flex flex-col gap-3">
          <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
            <Calculator className="mr-2 h-4 w-4" />
            Calculate Court Deadline
          </Button>
          <Button type="button" variant="outline" onClick={handleReset} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CourtDeadlineForm;
