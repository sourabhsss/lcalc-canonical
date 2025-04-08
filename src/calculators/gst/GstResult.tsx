
import React from 'react';
import { taxRates, formatCurrency } from './gstUtils';

interface GstResultProps {
  originalAmount: number;
  gstAmount: number;
  totalAmount: number;
  rate: number;
  calculationType: 'exclusive' | 'inclusive';
  countryCode: string;
  rateName: string;
  currencySymbol: string;
}

const GstResult: React.FC<GstResultProps> = ({ 
  originalAmount, 
  gstAmount, 
  totalAmount,
  rate,
  calculationType,
  countryCode,
  rateName,
  currencySymbol
}) => {
  const taxName = taxRates[countryCode]?.name.split(' ')[0] || 'GST';
  
  return (
    <div className="mt-8 space-y-6">
      <div className="bg-primary/5 p-6 rounded-lg border">
        <h3 className="font-semibold text-xl mb-4">{taxName} Calculation Results</h3>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-muted-foreground">Calculation Type:</span>
            <span className="font-medium">
              {calculationType === 'exclusive' ? 
                `${taxName} Exclusive (${taxName} added to amount)` : 
                `${taxName} Inclusive (${taxName} included in amount)`}
            </span>
          </div>
          
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-muted-foreground">Tax Rate:</span>
            <span className="font-medium">{rate}% ({rateName})</span>
          </div>
          
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-muted-foreground">
              {calculationType === 'exclusive' ? 'Amount (before tax):' : 'Total Amount (including tax):'}
            </span>
            <span className="font-medium">
              {formatCurrency(calculationType === 'exclusive' ? originalAmount : totalAmount, currencySymbol)}
            </span>
          </div>
          
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-muted-foreground">{taxName} Amount:</span>
            <span className="font-medium text-primary">{formatCurrency(gstAmount, currencySymbol)}</span>
          </div>
          
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold">
              {calculationType === 'exclusive' ? 'Total Amount (including tax):' : 'Amount (before tax):'}
            </span>
            <span className="font-bold">
              {formatCurrency(calculationType === 'exclusive' ? totalAmount : originalAmount, currencySymbol)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="bg-card p-6 rounded-lg border">
        <h3 className="font-semibold text-lg mb-2">Calculation Breakdown</h3>
        <p className="mb-4">
          {calculationType === 'exclusive' 
            ? `With a ${rate}% ${taxName} rate applied to ${formatCurrency(originalAmount, currencySymbol)}, the ${taxName} amount is ${formatCurrency(gstAmount, currencySymbol)}, resulting in a total of ${formatCurrency(totalAmount, currencySymbol)}.`
            : `From a total of ${formatCurrency(totalAmount, currencySymbol)} (including ${rate}% ${taxName}), the ${taxName} component is ${formatCurrency(gstAmount, currencySymbol)}, making the pre-tax amount ${formatCurrency(originalAmount, currencySymbol)}.`
          }
        </p>
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-medium text-sm text-muted-foreground mb-2">Calculation Formula:</h4>
          <div className="font-mono text-sm bg-muted p-3 rounded">
            {calculationType === 'exclusive' 
              ? `${taxName} Amount = Original Amount × (Rate / 100)\nTotal Amount = Original Amount + ${taxName} Amount`
              : `Original Amount = Total Amount / (1 + Rate/100)\n${taxName} Amount = Total Amount - Original Amount`
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GstResult;
