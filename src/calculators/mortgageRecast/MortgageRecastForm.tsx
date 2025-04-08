
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface MortgageRecastFormProps {
  onCalculate: (
    currentBalance: number,
    originalLoanAmount: number,
    interestRate: number,
    remainingTerm: number,
    lumpSumPayment: number,
    recastFee: number
  ) => void;
}

const MortgageRecastForm: React.FC<MortgageRecastFormProps> = ({ onCalculate }) => {
  const [currentBalance, setCurrentBalance] = useState<string>('200000');
  const [originalLoanAmount, setOriginalLoanAmount] = useState<string>('250000');
  const [interestRate, setInterestRate] = useState<string>('4.5');
  const [remainingTerm, setRemainingTerm] = useState<string>('25');
  const [lumpSumPayment, setLumpSumPayment] = useState<string>('25000');
  const [recastFee, setRecastFee] = useState<string>('250');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateInputs = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (isNaN(Number(currentBalance)) || Number(currentBalance) <= 0) {
      newErrors.currentBalance = 'Please enter a valid current balance';
    }
    
    if (isNaN(Number(originalLoanAmount)) || Number(originalLoanAmount) <= 0) {
      newErrors.originalLoanAmount = 'Please enter a valid original loan amount';
    }
    
    if (isNaN(Number(interestRate)) || Number(interestRate) <= 0 || Number(interestRate) >= 20) {
      newErrors.interestRate = 'Please enter a valid interest rate (0-20%)';
    }
    
    if (isNaN(Number(remainingTerm)) || Number(remainingTerm) <= 0 || Number(remainingTerm) > 40) {
      newErrors.remainingTerm = 'Please enter a valid remaining term (1-40 years)';
    }
    
    if (isNaN(Number(lumpSumPayment)) || Number(lumpSumPayment) <= 0) {
      newErrors.lumpSumPayment = 'Please enter a valid lump sum payment';
    } else if (Number(lumpSumPayment) >= Number(currentBalance)) {
      newErrors.lumpSumPayment = 'Payment should be less than current balance';
    }
    
    if (isNaN(Number(recastFee)) || Number(recastFee) < 0) {
      newErrors.recastFee = 'Please enter a valid recast fee';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateInputs()) {
      onCalculate(
        Number(currentBalance),
        Number(originalLoanAmount),
        Number(interestRate),
        Number(remainingTerm),
        Number(lumpSumPayment),
        Number(recastFee)
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
          <Label htmlFor="currentBalance">Current Loan Balance</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Your current mortgage balance (principal remaining)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="currentBalance"
            type="text"
            value={formatNumber(currentBalance)}
            onChange={(e) => setCurrentBalance(parseNumber(e.target.value))}
            className="pl-7"
          />
        </div>
        {errors.currentBalance && <p className="text-destructive text-sm mt-1">{errors.currentBalance}</p>}
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="originalLoanAmount">Original Loan Amount</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">The initial amount you borrowed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="originalLoanAmount"
            type="text"
            value={formatNumber(originalLoanAmount)}
            onChange={(e) => setOriginalLoanAmount(parseNumber(e.target.value))}
            className="pl-7"
          />
        </div>
        {errors.originalLoanAmount && <p className="text-destructive text-sm mt-1">{errors.originalLoanAmount}</p>}
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
                <p className="max-w-xs">Your current mortgage interest rate</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <Input
            id="interestRate"
            type="number"
            step="0.1"
            min="0.1"
            max="20"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="pr-7"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
        </div>
        {errors.interestRate && <p className="text-destructive text-sm mt-1">{errors.interestRate}</p>}
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="remainingTerm">Remaining Loan Term</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Years remaining on your mortgage</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <Input
            id="remainingTerm"
            type="number"
            min="1"
            max="40"
            value={remainingTerm}
            onChange={(e) => setRemainingTerm(e.target.value)}
            className="pr-10"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">years</span>
        </div>
        {errors.remainingTerm && <p className="text-destructive text-sm mt-1">{errors.remainingTerm}</p>}
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="lumpSumPayment">Lump Sum Payment</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">The amount you want to pay towards principal</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="lumpSumPayment"
            type="text"
            value={formatNumber(lumpSumPayment)}
            onChange={(e) => setLumpSumPayment(parseNumber(e.target.value))}
            className="pl-7"
          />
        </div>
        {errors.lumpSumPayment && <p className="text-destructive text-sm mt-1">{errors.lumpSumPayment}</p>}
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Label htmlFor="recastFee">Recast Fee</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">Fee charged by lender to recast the mortgage (typically $250-$500)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="recastFee"
            type="text"
            value={formatNumber(recastFee)}
            onChange={(e) => setRecastFee(parseNumber(e.target.value))}
            className="pl-7"
          />
        </div>
        {errors.recastFee && <p className="text-destructive text-sm mt-1">{errors.recastFee}</p>}
      </div>

      <Button type="submit" className="w-full">Calculate Mortgage Recast</Button>
    </form>
  );
};

export default MortgageRecastForm;
