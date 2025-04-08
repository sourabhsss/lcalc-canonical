
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
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

  // Type-safe handlers
  const handleDeadlineTypeChange = (value: string) => {
    if (value === 'calendar' || value === 'business' || value === 'court') {
      setDeadlineType(value);
    }
  };

  const handleCourtTypeChange = (value: string) => {
    if (value === 'federal' || value === 'state' || value === 'local') {
      setCourtType(value);
    }
  };

  const handleFilingMethodChange = (value: string) => {
    if (value === 'inPerson' || value === 'electronic' || value === 'mail') {
      setFilingMethod(value);
    }
  };
  
  return (
    <Card className="p-6">
      <form onSubmit={handleCalculate}>
        <div className="space-y-6">
          {/* Filing Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="filingDate" className="text-base font-semibold flex items-center gap-2">
              Filing Date
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
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
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
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            {formErrors.filingDate && <p className="text-red-500 text-sm">{formErrors.filingDate}</p>}
          </div>

          {/* Deadline Days Input */}
          <div className="space-y-2">
            <Label htmlFor="deadlineDays" className="text-base font-semibold flex items-center gap-2">
              Deadline (Days)
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
            </Label>
            <Input
              id="deadlineDays"
              type="number"
              placeholder="Enter number of days"
              value={deadlineDays}
              onChange={(e) => setDeadlineDays(parseInt(e.target.value))}
              className={formErrors.deadlineDays ? "border-red-500" : ""}
            />
            {formErrors.deadlineDays && <p className="text-red-500 text-sm">{formErrors.deadlineDays}</p>}
          </div>

          {/* Deadline Type Selection */}
          <div>
            <Label className="text-base font-semibold flex items-center gap-2">
              Deadline Type
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
            </Label>
            <RadioGroup 
              value={deadlineType} 
              onValueChange={handleDeadlineTypeChange}
              className="flex flex-col space-y-2 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="calendar" id="calendar" />
                <Label htmlFor="calendar" className="cursor-pointer">Calendar Days (includes weekends & holidays)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business" className="cursor-pointer">Business Days (excludes weekends & holidays)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="court" id="court" />
                <Label htmlFor="court" className="cursor-pointer">Court Days (follows court rules)</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Court Type Selection */}
          <div>
            <Label htmlFor="courtType" className="text-base font-semibold">Court Type</Label>
            <Select value={courtType} onValueChange={handleCourtTypeChange}>
              <SelectTrigger id="courtType">
                <SelectValue placeholder="Select court type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="federal">Federal Court</SelectItem>
                <SelectItem value="state">State Court</SelectItem>
                <SelectItem value="local">Local Court</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filing Method Selection */}
          <div>
            <Label htmlFor="filingMethod" className="text-base font-semibold">Filing Method</Label>
            <Select value={filingMethod} onValueChange={handleFilingMethodChange}>
              <SelectTrigger id="filingMethod">
                <SelectValue placeholder="Select filing method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="inPerson">In Person</SelectItem>
                <SelectItem value="electronic">Electronic Filing</SelectItem>
                <SelectItem value="mail">Mail</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State Selection */}
          {courtType === 'state' && (
            <div>
              <Label htmlFor="state" className="text-base font-semibold">State</Label>
              <Select value={state} onValueChange={(value: string) => setState(value)}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AL">Alabama</SelectItem>
                  <SelectItem value="AK">Alaska</SelectItem>
                  <SelectItem value="AZ">Arizona</SelectItem>
                  <SelectItem value="AR">Arkansas</SelectItem>
                  <SelectItem value="CA">California</SelectItem>
                  <SelectItem value="CO">Colorado</SelectItem>
                  <SelectItem value="CT">Connecticut</SelectItem>
                  <SelectItem value="DE">Delaware</SelectItem>
                  <SelectItem value="FL">Florida</SelectItem>
                  <SelectItem value="GA">Georgia</SelectItem>
                  <SelectItem value="HI">Hawaii</SelectItem>
                  <SelectItem value="ID">Idaho</SelectItem>
                  <SelectItem value="IL">Illinois</SelectItem>
                  <SelectItem value="IN">Indiana</SelectItem>
                  <SelectItem value="IA">Iowa</SelectItem>
                  <SelectItem value="KS">Kansas</SelectItem>
                  <SelectItem value="KY">Kentucky</SelectItem>
                  <SelectItem value="LA">Louisiana</SelectItem>
                  <SelectItem value="ME">Maine</SelectItem>
                  <SelectItem value="MD">Maryland</SelectItem>
                  <SelectItem value="MA">Massachusetts</SelectItem>
                  <SelectItem value="MI">Michigan</SelectItem>
                  <SelectItem value="MN">Minnesota</SelectItem>
                  <SelectItem value="MS">Mississippi</SelectItem>
                  <SelectItem value="MO">Missouri</SelectItem>
                  <SelectItem value="MT">Montana</SelectItem>
                  <SelectItem value="NE">Nebraska</SelectItem>
                  <SelectItem value="NV">Nevada</SelectItem>
                  <SelectItem value="NH">New Hampshire</SelectItem>
                  <SelectItem value="NJ">New Jersey</SelectItem>
                  <SelectItem value="NM">New Mexico</SelectItem>
                  <SelectItem value="NY">New York</SelectItem>
                  <SelectItem value="NC">North Carolina</SelectItem>
                  <SelectItem value="ND">North Dakota</SelectItem>
                  <SelectItem value="OH">Ohio</SelectItem>
                  <SelectItem value="OK">Oklahoma</SelectItem>
                  <SelectItem value="OR">Oregon</SelectItem>
                  <SelectItem value="PA">Pennsylvania</SelectItem>
                  <SelectItem value="RI">Rhode Island</SelectItem>
                  <SelectItem value="SC">South Carolina</SelectItem>
                  <SelectItem value="SD">South Dakota</SelectItem>
                  <SelectItem value="TN">Tennessee</SelectItem>
                  <SelectItem value="TX">Texas</SelectItem>
                  <SelectItem value="UT">Utah</SelectItem>
                  <SelectItem value="VT">Vermont</SelectItem>
                  <SelectItem value="VA">Virginia</SelectItem>
                  <SelectItem value="WA">Washington</SelectItem>
                  <SelectItem value="WV">West Virginia</SelectItem>
                  <SelectItem value="WI">Wisconsin</SelectItem>
                  <SelectItem value="WY">Wyoming</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Include Holidays Toggle */}
          <div className="flex items-center space-x-2">
            <Switch 
              id="includeHolidays" 
              checked={includeHolidays} 
              onCheckedChange={setIncludeHolidays} 
            />
            <Label htmlFor="includeHolidays" className="cursor-pointer">Include Holidays in Calculation</Label>
          </div>
          
          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1" size="lg">
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Court Deadline
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} size="lg">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default CourtDeadlineForm;
