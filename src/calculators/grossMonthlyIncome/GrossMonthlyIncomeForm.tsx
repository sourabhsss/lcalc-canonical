
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, DollarSign, Info, RotateCcw } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { IncomeType, PayFrequency, FilingStatus, State, GrossMonthlyIncomeInputs } from './grossMonthlyIncomeUtils';

interface GrossMonthlyIncomeFormProps {
  onCalculate: (inputs: GrossMonthlyIncomeInputs) => void;
  onReset: () => void;
}

const GrossMonthlyIncomeForm: React.FC<GrossMonthlyIncomeFormProps> = ({ onCalculate, onReset }) => {
  const [incomeType, setIncomeType] = useState<IncomeType>('salary');
  const [hourlyRate, setHourlyRate] = useState<number>(20);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [annualSalary, setAnnualSalary] = useState<number>(50000);
  const [payFrequency, setPayFrequency] = useState<PayFrequency>('monthly');
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');
  const [state, setState] = useState<State>('CA');
  const [dependents, setDependents] = useState<number>(0);
  const [preTaxDeductions, setPreTaxDeductions] = useState<number>(0);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};

    if (incomeType === 'hourly' && (isNaN(hourlyRate) || hourlyRate <= 0)) {
      errors.hourlyRate = "Please enter a valid hourly rate greater than 0";
    }

    if (incomeType === 'hourly' && (isNaN(hoursPerWeek) || hoursPerWeek <= 0)) {
      errors.hoursPerWeek = "Please enter valid hours per week greater than 0";
    }

    if (incomeType === 'salary' && (isNaN(annualSalary) || annualSalary <= 0)) {
      errors.annualSalary = "Please enter a valid annual salary greater than 0";
    }

    if (isNaN(dependents) || dependents < 0) {
      errors.dependents = "Dependents cannot be negative";
    }

    if (isNaN(preTaxDeductions) || preTaxDeductions < 0) {
      errors.preTaxDeductions = "Pre-tax deductions cannot be negative";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    let calculatedAnnualSalary: number;

    if (incomeType === 'hourly') {
      calculatedAnnualSalary = hourlyRate * hoursPerWeek * 52;
    } else {
      calculatedAnnualSalary = annualSalary;
    }

    const inputs: GrossMonthlyIncomeInputs = {
      incomeType,
      hourlyRate,
      hoursPerWeek,
      annualSalary: calculatedAnnualSalary,
      payFrequency,
      filingStatus,
      state,
      dependents,
      preTaxDeductions,
    };

    onCalculate(inputs);
  };

  const handleReset = () => {
    setIncomeType('salary');
    setHourlyRate(20);
    setHoursPerWeek(40);
    setAnnualSalary(50000);
    setPayFrequency('monthly');
    setFilingStatus('single');
    setState('CA');
    setDependents(0);
    setPreTaxDeductions(0);
    setFormErrors({});
    onReset();
  };

  // Type-safe handler for RadioGroup value changes
  const handleIncomeTypeChange = (value: string) => {
    // Validate that the value is of type IncomeType before setting it
    if (value === 'salary' || value === 'hourly') {
      setIncomeType(value);
    }
  };
  
  return (
    <Card className="p-6">
      <form onSubmit={handleCalculate}>
        <div className="space-y-6">
          {/* Income Type Selection */}
          <div>
            <Label className="text-base font-semibold flex items-center gap-2">
              Income Type
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Select how you earn income - hourly wages, annual salary, or self-employment.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <RadioGroup 
              value={incomeType} 
              onValueChange={handleIncomeTypeChange}
              className="flex flex-wrap gap-3 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="salary" id="salary" />
                <Label htmlFor="salary" className="cursor-pointer">Salary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hourly" id="hourly" />
                <Label htmlFor="hourly" className="cursor-pointer">Hourly</Label>
              </div>
            </RadioGroup>
          </div>

          <Tabs defaultValue="salary" value={incomeType} onValueChange={handleIncomeTypeChange}>
            <TabsList className="hidden">
              <TabsTrigger value="salary">Salary</TabsTrigger>
              <TabsTrigger value="hourly">Hourly</TabsTrigger>
            </TabsList>
            
            {/* Salary Input */}
            <TabsContent value="salary" className="mt-4">
              <div className="space-y-2">
                <Label htmlFor="annualSalary">Annual Salary</Label>
                <Input
                  id="annualSalary"
                  type="number"
                  placeholder="Enter annual salary"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(parseFloat(e.target.value))}
                  className={formErrors.annualSalary ? "border-red-500" : ""}
                />
                {formErrors.annualSalary && <p className="text-red-500 text-sm">{formErrors.annualSalary}</p>}
              </div>
            </TabsContent>
            
            {/* Hourly Input */}
            <TabsContent value="hourly" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    placeholder="Enter hourly rate"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
                    className={formErrors.hourlyRate ? "border-red-500" : ""}
                  />
                  {formErrors.hourlyRate && <p className="text-red-500 text-sm">{formErrors.hourlyRate}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hoursPerWeek">Hours per Week</Label>
                  <Input
                    id="hoursPerWeek"
                    type="number"
                    placeholder="Enter hours per week"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                    className={formErrors.hoursPerWeek ? "border-red-500" : ""}
                  />
                  {formErrors.hoursPerWeek && <p className="text-red-500 text-sm">{formErrors.hoursPerWeek}</p>}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Pay Frequency Selection */}
          <div>
            <Label htmlFor="payFrequency" className="text-base font-semibold">Pay Frequency</Label>
            <Select value={payFrequency} onValueChange={(value: string) => {
              if (value === 'weekly' || value === 'biweekly' || value === 'monthly') {
                setPayFrequency(value);
              }
            }}>
              <SelectTrigger id="payFrequency">
                <SelectValue placeholder="Select pay frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filing Status Selection */}
          <div>
            <Label htmlFor="filingStatus" className="text-base font-semibold">Filing Status</Label>
            <Select value={filingStatus} onValueChange={(value: string) => {
              if (value === 'single' || value === 'married' || value === 'headOfHousehold') {
                setFilingStatus(value);
              }
            }}>
              <SelectTrigger id="filingStatus">
                <SelectValue placeholder="Select filing status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="headOfHousehold">Head of Household</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* State Selection */}
          <div>
            <Label htmlFor="state" className="text-base font-semibold">State</Label>
            <Select value={state} onValueChange={(value: string) => {
              // This is safe because we're selecting from a predefined list
              setState(value as State);
            }}>
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

          {/* Dependents Input */}
          <div className="space-y-2">
            <Label htmlFor="dependents">Dependents</Label>
            <Input
              id="dependents"
              type="number"
              placeholder="Enter number of dependents"
              value={dependents}
              onChange={(e) => setDependents(parseInt(e.target.value))}
              className={formErrors.dependents ? "border-red-500" : ""}
            />
            {formErrors.dependents && <p className="text-red-500 text-sm">{formErrors.dependents}</p>}
          </div>

          {/* Pre-Tax Deductions Input */}
          <div className="space-y-2">
            <Label htmlFor="preTaxDeductions">Pre-Tax Deductions</Label>
            <Input
              id="preTaxDeductions"
              type="number"
              placeholder="Enter pre-tax deductions"
              value={preTaxDeductions}
              onChange={(e) => setPreTaxDeductions(parseFloat(e.target.value))}
              className={formErrors.preTaxDeductions ? "border-red-500" : ""}
            />
            {formErrors.preTaxDeductions && <p className="text-red-500 text-sm">{formErrors.preTaxDeductions}</p>}
          </div>
          
          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" className="flex-1" size="lg">
              <DollarSign className="mr-2 h-4 w-4" />
              Calculate Monthly Income
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

export default GrossMonthlyIncomeForm;
