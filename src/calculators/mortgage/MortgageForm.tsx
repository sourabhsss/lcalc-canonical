
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Info } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface MortgageFormProps {
  onCalculate: (
    homePrice: number,
    downPayment: number,
    loanTerm: number,
    interestRate: number,
    propertyTax: number,
    homeInsurance: number,
    pmi: number,
    includePropertyTax: boolean,
    includeHomeInsurance: boolean,
    includePMI: boolean
  ) => void;
}

const MortgageForm: React.FC<MortgageFormProps> = ({ onCalculate }) => {
  const [homePrice, setHomePrice] = useState<string>('300000');
  const [downPayment, setDownPayment] = useState<string>('60000');
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<string>('6.5');
  const [propertyTax, setPropertyTax] = useState<string>('3600');
  const [homeInsurance, setHomeInsurance] = useState<string>('1200');
  const [pmi, setPmi] = useState<string>('0.5');
  const [includePropertyTax, setIncludePropertyTax] = useState<boolean>(true);
  const [includeHomeInsurance, setIncludeHomeInsurance] = useState<boolean>(true);
  const [includePMI, setIncludePMI] = useState<boolean>(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Update down payment percent when home price or down payment changes
  useEffect(() => {
    const price = parseFloat(homePrice.replace(/,/g, '')) || 0;
    const payment = parseFloat(downPayment.replace(/,/g, '')) || 0;
    
    if (price > 0) {
      const newPercent = Math.round((payment / price) * 100);
      if (newPercent !== downPaymentPercent) {
        setDownPaymentPercent(newPercent);
      }
    }
  }, [homePrice, downPayment]);

  // Update down payment when percentage changes
  const handleDownPaymentPercentChange = (newPercent: number) => {
    setDownPaymentPercent(newPercent);
    const price = parseFloat(homePrice.replace(/,/g, '')) || 0;
    const newDownPayment = Math.round((price * newPercent) / 100);
    setDownPayment(newDownPayment.toString());
  };

  // Auto-enable PMI when down payment is less than 20%
  useEffect(() => {
    if (downPaymentPercent < 20) {
      setIncludePMI(true);
    } else {
      setIncludePMI(false);
    }
  }, [downPaymentPercent]);

  const validateInputs = () => {
    const newErrors: {[key: string]: string} = {};
    
    const price = parseFloat(homePrice.replace(/,/g, ''));
    if (isNaN(price) || price <= 0) {
      newErrors.homePrice = 'Please enter a valid home price';
    }
    
    const payment = parseFloat(downPayment.replace(/,/g, ''));
    if (isNaN(payment) || payment < 0) {
      newErrors.downPayment = 'Please enter a valid down payment';
    } else if (payment > price) {
      newErrors.downPayment = 'Down payment cannot exceed home price';
    }
    
    const rate = parseFloat(interestRate);
    if (isNaN(rate) || rate <= 0 || rate >= 30) {
      newErrors.interestRate = 'Please enter a valid interest rate (0-30%)';
    }
    
    if (includePropertyTax) {
      const tax = parseFloat(propertyTax.replace(/,/g, ''));
      if (isNaN(tax) || tax < 0) {
        newErrors.propertyTax = 'Please enter a valid property tax amount';
      }
    }
    
    if (includeHomeInsurance) {
      const insurance = parseFloat(homeInsurance.replace(/,/g, ''));
      if (isNaN(insurance) || insurance < 0) {
        newErrors.homeInsurance = 'Please enter a valid home insurance amount';
      }
    }
    
    if (includePMI) {
      const pmiRate = parseFloat(pmi);
      if (isNaN(pmiRate) || pmiRate <= 0 || pmiRate >= 5) {
        newErrors.pmi = 'Please enter a valid PMI rate (0-5%)';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateInputs()) {
      onCalculate(
        parseFloat(homePrice.replace(/,/g, '')),
        parseFloat(downPayment.replace(/,/g, '')),
        loanTerm,
        parseFloat(interestRate),
        parseFloat(propertyTax.replace(/,/g, '')),
        parseFloat(homeInsurance.replace(/,/g, '')),
        parseFloat(pmi),
        includePropertyTax,
        includeHomeInsurance,
        includePMI
      );
    }
  };

  // Format number with commas as thousands separator
  const formatNumber = (value: string): string => {
    // Remove any non-digit characters except decimal point
    const sanitized = value.replace(/[^\d.]/g, '');
    
    // Split by decimal point
    const parts = sanitized.split('.');
    
    // Format the whole number part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Join with decimal part if it exists
    return parts.join('.');
  };

  // Parse formatted number back to raw number for state
  const parseNumber = (formatted: string): string => {
    return formatted.replace(/,/g, '');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="homePrice">Home Price</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">The total purchase price of the home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="homePrice"
            type="text"
            value={formatNumber(homePrice)}
            onChange={(e) => setHomePrice(parseNumber(e.target.value))}
            className="pl-7"
          />
        </div>
        {errors.homePrice && <p className="text-destructive text-sm mt-1">{errors.homePrice}</p>}
      </div>

      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Label htmlFor="downPayment">Down Payment</Label>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">The initial payment you make toward the home purchase</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <span className="text-sm text-muted-foreground">{downPaymentPercent}%</span>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="downPayment"
            type="text"
            value={formatNumber(downPayment)}
            onChange={(e) => setDownPayment(parseNumber(e.target.value))}
            className="pl-7"
          />
        </div>
        <Slider
          defaultValue={[20]}
          value={[downPaymentPercent]}
          onValueChange={(value) => handleDownPaymentPercentChange(value[0])}
          min={0}
          max={50}
          step={1}
          className="mt-2"
        />
        {errors.downPayment && <p className="text-destructive text-sm mt-1">{errors.downPayment}</p>}
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="loanTerm">Loan Term (Years)</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">The number of years you have to repay the loan</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex space-x-2">
          {[15, 20, 30].map((term) => (
            <Button
              key={term}
              type="button"
              variant={loanTerm === term ? "default" : "outline"}
              className="flex-1"
              onClick={() => setLoanTerm(term)}
            >
              {term} years
            </Button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="interestRate">Interest Rate</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">The annual interest rate for your mortgage</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <Input
            id="interestRate"
            type="number"
            step="0.01"
            min="0.1"
            max="30"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="pr-7"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
        </div>
        {errors.interestRate && <p className="text-destructive text-sm mt-1">{errors.interestRate}</p>}
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-md font-medium mb-2">Additional Costs</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="includePropertyTax"
                checked={includePropertyTax}
                onCheckedChange={setIncludePropertyTax}
              />
              <Label htmlFor="includePropertyTax" className="cursor-pointer">Property Tax</Label>
            </div>
            {includePropertyTax && (
              <div className="relative w-1/2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <Input
                  type="text"
                  value={formatNumber(propertyTax)}
                  onChange={(e) => setPropertyTax(parseNumber(e.target.value))}
                  className="pl-7"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">/year</span>
              </div>
            )}
          </div>
          {errors.propertyTax && <p className="text-destructive text-sm">{errors.propertyTax}</p>}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="includeHomeInsurance"
                checked={includeHomeInsurance}
                onCheckedChange={setIncludeHomeInsurance}
              />
              <Label htmlFor="includeHomeInsurance" className="cursor-pointer">Home Insurance</Label>
            </div>
            {includeHomeInsurance && (
              <div className="relative w-1/2">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <Input
                  type="text"
                  value={formatNumber(homeInsurance)}
                  onChange={(e) => setHomeInsurance(parseNumber(e.target.value))}
                  className="pl-7"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">/year</span>
              </div>
            )}
          </div>
          {errors.homeInsurance && <p className="text-destructive text-sm">{errors.homeInsurance}</p>}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="includePMI"
                checked={includePMI}
                onCheckedChange={setIncludePMI}
                disabled={downPaymentPercent < 20}
              />
              <Label htmlFor="includePMI" className="cursor-pointer">
                Private Mortgage Insurance (PMI)
                {downPaymentPercent < 20 && <span className="ml-1 text-xs text-primary">(Required)</span>}
              </Label>
            </div>
            {includePMI && (
              <div className="relative w-1/2">
                <Input
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="5"
                  value={pmi}
                  onChange={(e) => setPmi(e.target.value)}
                  className="pr-8"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
              </div>
            )}
          </div>
          {errors.pmi && <p className="text-destructive text-sm">{errors.pmi}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full">Calculate Mortgage</Button>
    </form>
  );
};

export default MortgageForm;
