
import React from 'react';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import { PayRaiseResult as PayRaiseResultType } from './payRaiseUtils';
import { formatCurrency, formatPercentage } from './payRaiseUtils';
import { TrendingUp, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PayRaiseResultProps {
  result: PayRaiseResultType;
  payPeriod: 'annual' | 'monthly' | 'hourly';
  hoursPerWeek: number;
}

const PayRaiseResult: React.FC<PayRaiseResultProps> = ({ 
  result, 
  payPeriod,
  hoursPerWeek 
}) => {
  const {
    newSalary,
    raiseAmount,
    percentageIncrease,
    monthlySalaryBefore,
    monthlySalaryAfter,
    taxImpactEstimate,
    inflationAdjustedValue
  } = result;

  // Calculate hourly rates if needed
  const calculateHourlyRate = (annual: number): number => {
    return annual / (hoursPerWeek * 52);
  };

  // Format salary based on pay period
  const formatSalary = (value: number): string => {
    if (payPeriod === 'annual') {
      return formatCurrency(value);
    } else if (payPeriod === 'monthly') {
      return `${formatCurrency(value / 12)} per month`;
    } else {
      return `${formatCurrency(calculateHourlyRate(value))} per hour`;
    }
  };

  // Calculate effective raise after tax and inflation
  const calculateEffectiveRaise = (): number => {
    let effectiveRaise = raiseAmount;
    
    // Subtract tax impact if provided
    if (taxImpactEstimate !== null) {
      effectiveRaise -= taxImpactEstimate;
    }
    
    // Adjust for inflation if provided
    if (inflationAdjustedValue !== null) {
      // Calculate "lost" value due to inflation
      const inflationImpact = newSalary - inflationAdjustedValue;
      effectiveRaise -= inflationImpact;
    }
    
    return effectiveRaise;
  };

  const effectiveRaise = calculateEffectiveRaise();
  const effectivePercentage = (effectiveRaise / (newSalary - raiseAmount)) * 100;

  return (
    <div className="space-y-6 mt-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Your Pay Raise Results</span>
          </CardTitle>
          <CardDescription>
            Summary of your new salary and pay increase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">New Salary:</p>
              <p className="text-2xl font-bold">
                {formatSalary(newSalary)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Increase Amount:</p>
              <p className="text-2xl font-bold text-primary">
                {formatCurrency(raiseAmount)}
                <span className="ml-1 text-sm font-normal">
                  ({percentageIncrease.toFixed(2)}%)
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Before & After</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Before Raise:</p>
                <p className="font-medium">
                  {formatSalary(newSalary - raiseAmount)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">After Raise:</p>
                <p className="font-medium text-primary">
                  {formatSalary(newSalary)}
                </p>
              </div>
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">Monthly Before:</p>
                <p className="font-medium">
                  {formatCurrency(monthlySalaryBefore)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Monthly After:</p>
                <p className="font-medium text-primary">
                  {formatCurrency(monthlySalaryAfter)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Impact Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {taxImpactEstimate !== null && (
                <div>
                  <p className="text-sm text-muted-foreground">Estimated Tax Impact:</p>
                  <p className="font-medium">
                    {formatCurrency(taxImpactEstimate)}
                    <span className="ml-1 text-sm text-muted-foreground">
                      (additional tax)
                    </span>
                  </p>
                </div>
              )}
              
              {inflationAdjustedValue !== null && (
                <div>
                  <p className="text-sm text-muted-foreground">Inflation-Adjusted Value:</p>
                  <p className="font-medium">
                    {formatCurrency(inflationAdjustedValue)}
                    <span className="ml-1 text-sm text-muted-foreground">
                      (real value)
                    </span>
                  </p>
                </div>
              )}
              
              {(taxImpactEstimate !== null || inflationAdjustedValue !== null) && (
                <>
                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground">Effective Raise:</p>
                    <p className="font-medium">
                      {formatCurrency(effectiveRaise)}
                      <span className="ml-1 text-sm text-muted-foreground">
                        ({effectivePercentage.toFixed(2)}%)
                      </span>
                    </p>
                  </div>
                  
                  {effectivePercentage <= 0 && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Your effective raise is negative or zero when accounting for taxes and/or inflation.
                      </AlertDescription>
                    </Alert>
                  )}
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayRaiseResult;
