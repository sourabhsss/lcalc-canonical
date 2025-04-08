
import React, { useState, useEffect } from 'react';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calculator, RotateCcw } from 'lucide-react';
import { taxRates } from './gstUtils';

interface GstFormProps {
  onCalculate: (
    amount: number, 
    rate: number, 
    calculationType: 'exclusive' | 'inclusive',
    countryCode: string,
    rateName?: string,
    currencySymbol?: string
  ) => void;
  onReset: () => void;
}

const GstForm: React.FC<GstFormProps> = ({ onCalculate, onReset }) => {
  const [amount, setAmount] = useState<string>('100');
  const [countryCode, setCountryCode] = useState<string>('australia');
  const [calculationType, setCalculationType] = useState<'exclusive' | 'inclusive'>('exclusive');
  const [taxRate, setTaxRate] = useState<number>(taxRates.australia.standardRate);
  const [rateName, setRateName] = useState<string>('Standard Rate');
  const [currencySymbol, setCurrencySymbol] = useState<string>('$');
  const [errors, setErrors] = useState<{
    amount?: string;
    taxRate?: string;
  }>({});

  const countryCurrencies: {[key: string]: string} = {
    australia: 'A$',
    india: '₹',
    singapore: 'S$',
    newZealand: 'NZ$',
    uk: '£',
    eu: '€',
    canada: 'C$',
    us: '$',
    japan: '¥',
    southAfrica: 'R',
  };

  useEffect(() => {
    setCurrencySymbol(countryCurrencies[countryCode] || '$');
    setTaxRate(taxRates[countryCode].standardRate);
    setRateName('Standard Rate');
  }, [countryCode]);

  const validateInputs = () => {
    const newErrors: {
      amount?: string;
      taxRate?: string;
    } = {};

    // Validate amount
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = 'Please enter a valid positive amount';
    }

    // Validate tax rate
    if (taxRate < 0 || taxRate > 100) {
      newErrors.taxRate = 'Tax rate must be between 0 and 100';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateInputs()) {
      onCalculate(
        Number(amount),
        taxRate,
        calculationType,
        countryCode,
        rateName,
        currencySymbol
      );
    }
  };

  const handleReset = () => {
    setAmount('100');
    setCountryCode('australia');
    setCalculationType('exclusive');
    setTaxRate(taxRates.australia.standardRate);
    setRateName('Standard Rate');
    setCurrencySymbol('A$');
    setErrors({});
    onReset();
  };

  const handleRateChange = (value: string) => {
    const country = taxRates[countryCode];
    
    if (value === 'standard') {
      setTaxRate(country.standardRate);
      setRateName('Standard Rate');
    } else if (country.otherRates && country.otherRates[value] !== undefined) {
      setTaxRate(country.otherRates[value]);
      setRateName(value);
    } else {
      // Custom rate
      setRateName('Custom Rate');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
      <div className="space-y-4">
        <div>
          <Label htmlFor="country">Country/Tax System</Label>
          <Select
            value={countryCode}
            onValueChange={(value) => setCountryCode(value)}
          >
            <SelectTrigger id="country" className="w-full">
              <SelectValue placeholder="Select country or tax system" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(taxRates).map(([code, { name }]) => (
                <SelectItem key={code} value={code}>{name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="calculationType">Calculation Type</Label>
          <RadioGroup
            value={calculationType}
            onValueChange={(value) => setCalculationType(value as 'exclusive' | 'inclusive')}
            className="flex flex-col space-y-1 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="exclusive" id="exclusive" />
              <Label htmlFor="exclusive" className="font-normal cursor-pointer">
                GST Exclusive (Add tax to amount)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="inclusive" id="inclusive" />
              <Label htmlFor="inclusive" className="font-normal cursor-pointer">
                GST Inclusive (Extract tax from amount)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="amount">Amount ({currencySymbol})</Label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-muted-foreground">{currencySymbol}</span>
            </div>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-10"
              step="0.01"
              min="0"
            />
          </div>
          {errors.amount && <p className="text-destructive text-sm mt-1">{errors.amount}</p>}
        </div>

        <div>
          <Label htmlFor="taxRate">Tax Rate</Label>
          <div className="grid grid-cols-2 gap-4">
            {countryCode && taxRates[countryCode].otherRates ? (
              <Select
                value={rateName === 'Standard Rate' ? 'standard' : rateName}
                onValueChange={handleRateChange}
              >
                <SelectTrigger id="taxRateType">
                  <SelectValue placeholder="Select tax rate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Rate ({taxRates[countryCode].standardRate}%)</SelectItem>
                  {Object.entries(taxRates[countryCode].otherRates || {}).map(([name, rate]) => (
                    <SelectItem key={name} value={name}>{name} ({rate}%)</SelectItem>
                  ))}
                  <SelectItem value="custom">Custom Rate</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <Select
                value={rateName === 'Standard Rate' ? 'standard' : 'custom'}
                onValueChange={handleRateChange}
              >
                <SelectTrigger id="taxRateType">
                  <SelectValue placeholder="Select tax rate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Rate ({taxRates[countryCode].standardRate}%)</SelectItem>
                  <SelectItem value="custom">Custom Rate</SelectItem>
                </SelectContent>
              </Select>
            )}

            <div className="relative">
              <Input
                id="taxRate"
                type="number"
                value={taxRate}
                onChange={(e) => {
                  setTaxRate(Number(e.target.value));
                  setRateName('Custom Rate');
                }}
                step="0.1"
                min="0"
                max="100"
                disabled={rateName !== 'Custom Rate'}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-muted-foreground">%</span>
              </div>
            </div>
          </div>
          {errors.taxRate && <p className="text-destructive text-sm mt-1">{errors.taxRate}</p>}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" className="flex-1">
          <Calculator className="mr-2 h-4 w-4" />
          Calculate {taxRates[countryCode]?.name.split(' ')[0] || 'GST'}
        </Button>
        <Button type="button" variant="outline" onClick={handleReset} className="flex-1">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </form>
  );
};

export default GstForm;
