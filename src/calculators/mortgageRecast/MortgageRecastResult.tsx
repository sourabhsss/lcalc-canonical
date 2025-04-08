
import React from 'react';

interface MortgageRecastResultProps {
  result: {
    originalMonthlyPayment: number;
    newMonthlyPayment: number;
    monthlySavings: number;
    totalInterestSaved: number;
    newLoanBalance: number;
    newLoanTerm: number;
  };
}

const MortgageRecastResult: React.FC<MortgageRecastResultProps> = ({ result }) => {
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="space-y-4">
      <div className="bg-primary/10 p-4 rounded-lg">
        <h3 className="font-medium text-lg">Monthly Payment Savings</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-muted-foreground">Original Payment:</span>
          <span className="font-semibold">{formatCurrency(result.originalMonthlyPayment)}/mo</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-muted-foreground">New Payment:</span>
          <span className="font-semibold">{formatCurrency(result.newMonthlyPayment)}/mo</span>
        </div>
        <div className="flex justify-between items-center mt-2 border-t pt-2">
          <span className="text-primary font-medium">Your Monthly Savings:</span>
          <span className="text-primary font-bold">{formatCurrency(result.monthlySavings)}/mo</span>
        </div>
      </div>

      <div className="bg-secondary/10 p-4 rounded-lg">
        <h3 className="font-medium text-lg">Long-Term Benefits</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-muted-foreground">New Loan Balance:</span>
          <span className="font-semibold">{formatCurrency(result.newLoanBalance)}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-muted-foreground">Remaining Term:</span>
          <span className="font-semibold">{result.newLoanTerm} years</span>
        </div>
        <div className="flex justify-between items-center mt-2 border-t pt-2">
          <span className="text-secondary font-medium">Total Interest Saved:</span>
          <span className="text-secondary font-bold">{formatCurrency(result.totalInterestSaved)}</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        <p>
          This calculation is an estimate based on the information provided. Actual results may vary. Contact your mortgage lender for specific details about their recast program.
        </p>
      </div>
    </div>
  );
};

export default MortgageRecastResult;
