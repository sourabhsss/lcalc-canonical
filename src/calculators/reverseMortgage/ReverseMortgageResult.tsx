
import React from 'react';
import { DollarSign, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ResultProps {
  result: {
    estimatedLoanAmount: number;
    paymentOption: string;
    monthlyPayment?: number;
    lumpSum?: number;
    lineOfCredit?: number;
    fees: number;
    netProceeds: number;
  };
}

const ReverseMortgageResult: React.FC<ResultProps> = ({ result }) => {
  // Format currency
  const formatCurrency = (amount: number | undefined): string => {
    if (amount === undefined) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Get the relevant payment information based on selected option
  const getPaymentDetails = () => {
    switch (result.paymentOption) {
      case 'tenure':
        return (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Monthly Payment:</span>
              <span className="font-semibold text-xl">{formatCurrency(result.monthlyPayment)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This is an estimated monthly payment for as long as you live in your home.
            </p>
          </div>
        );
      case 'lump-sum':
        return (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Lump Sum Amount:</span>
              <span className="font-semibold text-xl">{formatCurrency(result.lumpSum)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This is the total amount you would receive as a one-time payment.
            </p>
          </div>
        );
      case 'line-of-credit':
        return (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Line of Credit:</span>
              <span className="font-semibold text-xl">{formatCurrency(result.lineOfCredit)}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              This is the amount available in your line of credit. The unused portion typically grows over time.
            </p>
          </div>
        );
      case 'modified-tenure':
        return (
          <>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Initial Lump Sum:</span>
                <span className="font-semibold text-xl">{formatCurrency(result.lumpSum)}</span>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Monthly Payment:</span>
                <span className="font-semibold text-xl">{formatCurrency(result.monthlyPayment)}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                You receive part of your proceeds as a lump sum and the rest as monthly payments.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-primary/10 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground flex items-center">
            Estimated Principal Limit:
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size={16} className="ml-1 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">The maximum loan amount based on your home value, age, and current interest rates</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
          <span className="font-semibold text-xl">{formatCurrency(result.estimatedLoanAmount)}</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-semibold mb-3">Payment Details</h3>
        {getPaymentDetails()}
      </div>

      <div className="border-t pt-4">
        <h3 className="font-semibold mb-3">Costs & Fees</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground">Total Fees:</span>
          <span className="font-semibold">{formatCurrency(result.fees)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Includes origination fees, mortgage insurance premium, and closing costs.
        </p>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-muted-foreground font-semibold">Net Proceeds:</span>
          <span className="font-bold text-xl text-primary">{formatCurrency(result.netProceeds)}</span>
        </div>
        <p className="text-sm text-muted-foreground">
          This is the amount available to you after fees and paying off any existing mortgage.
        </p>
      </div>

      <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
        <div className="flex items-start">
          <DollarSign className="text-secondary mr-2 flex-shrink-0 mt-1" size={18} />
          <p className="text-sm">
            This is an estimate only. Actual amounts may vary based on final appraisal, interest rates at closing, and other factors. Contact a reverse mortgage counselor for specific advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReverseMortgageResult;
