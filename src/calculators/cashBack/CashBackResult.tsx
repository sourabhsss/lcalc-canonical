
import React from 'react';
import { CashBackData, CashBackResult as CashBackResultType } from './cashBackTypes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, TrendingUp, PiggyBank, Calendar } from 'lucide-react';

interface CashBackResultProps {
  data: CashBackData;
  result: CashBackResultType;
}

const CashBackResult: React.FC<CashBackResultProps> = ({ data, result }) => {
  return (
    <div className="mt-6 bg-primary/5 p-6 rounded-lg border border-border">
      <h3 className="text-xl font-semibold mb-4">Cash Back Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Monthly Cash Back</CardDescription>
            <CardTitle className="text-2xl flex items-center text-primary">
              <CreditCard className="mr-2 h-5 w-5" />
              ${result.monthlyReward.toFixed(2)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Based on ${data.purchaseAmount.toFixed(2)} monthly spending at {data.cashBackRate}% cash back
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Annual Cash Back</CardDescription>
            <CardTitle className="text-2xl flex items-center text-primary">
              <Calendar className="mr-2 h-5 w-5" />
              ${result.cashBackAmount.toFixed(2)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your total cash back earnings per year
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Effective Rate</CardDescription>
            <CardTitle className="text-2xl flex items-center text-primary">
              <TrendingUp className="mr-2 h-5 w-5" />
              {result.effectiveRate.toFixed(2)}%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your true cash back rate after accounting for fees
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Net Annual Value</CardDescription>
            <CardTitle className="text-2xl flex items-center text-primary">
              <PiggyBank className="mr-2 h-5 w-5" />
              ${result.annualNetValue.toFixed(2)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Cash back minus fees plus additional benefits
            </p>
          </CardContent>
        </Card>
      </div>

      {data.annualFee && data.annualFee > 0 ? (
        <div className="mt-4 text-sm">
          <p>
            <span className="font-medium">Annual fee consideration:</span> For this card to be worthwhile based solely on cash back, 
            you need to spend at least ${(data.annualFee / (data.cashBackRate / 100)).toFixed(2)} annually.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default CashBackResult;
