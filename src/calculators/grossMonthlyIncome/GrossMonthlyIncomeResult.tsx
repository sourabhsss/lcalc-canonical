
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { 
  Coins, 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Clock, 
  Info, 
  CreditCard, 
  HelpCircle,
  ArrowDownCircle,
  ArrowUpCircle
} from 'lucide-react';
import { GrossMonthlyIncomeResult as GrossMonthlyIncomeResultType, formatCurrency, formatPercentage } from './grossMonthlyIncomeUtils';

interface GrossMonthlyIncomeResultProps {
  result: GrossMonthlyIncomeResultType;
}

const GrossMonthlyIncomeResult: React.FC<GrossMonthlyIncomeResultProps> = ({ result }) => {
  const {
    grossMonthlyIncome,
    grossAnnualIncome,
    netMonthlyIncome,
    netAnnualIncome,
    monthlyDeductions,
    hourlyRate,
    effectiveTaxRate,
    takeHomePercentage
  } = result;

  // Helper function to calculate percentage of total gross income
  const calculatePercentage = (amount: number): number => {
    return (amount / grossMonthlyIncome) * 100;
  };

  // Format the deductions for display
  const totalDeductions = monthlyDeductions.totalDeductions;
  const federalTaxPct = calculatePercentage(monthlyDeductions.federalTax);
  const stateTaxPct = calculatePercentage(monthlyDeductions.stateTax);
  const localTaxPct = calculatePercentage(monthlyDeductions.localTax);
  const socialSecurityPct = calculatePercentage(monthlyDeductions.socialSecurity);
  const medicarePct = calculatePercentage(monthlyDeductions.medicare);
  const retirementPct = calculatePercentage(monthlyDeductions.retirement);
  const healthInsurancePct = calculatePercentage(monthlyDeductions.healthInsurance);
  const otherDeductionsPct = calculatePercentage(monthlyDeductions.otherDeductions);

  // Income level classification
  const getIncomeLevel = (annualIncome: number): { level: string; text: string; color: string } => {
    if (annualIncome < 25000) {
      return { 
        level: 'Lower Income', 
        text: 'According to U.S. standards, this annual income falls in the lower income bracket. Consider exploring government assistance programs like EITC or SNAP if eligible.',
        color: 'text-red-600'
      };
    } else if (annualIncome < 75000) {
      return { 
        level: 'Middle Income', 
        text: 'Your income is within the middle-income range for U.S. households. Consider building an emergency fund and starting to invest for retirement.',
        color: 'text-amber-600'
      };
    } else if (annualIncome < 150000) {
      return { 
        level: 'Upper Middle Income', 
        text: 'You\'re in the upper-middle income bracket. Consider maximizing retirement contributions and diversifying investments.',
        color: 'text-lime-600'
      };
    } else {
      return { 
        level: 'High Income', 
        text: 'Your income is in the high bracket. Consider tax optimization strategies, maximizing retirement accounts, and potentially consulting with a financial advisor.',
        color: 'text-green-600'
      };
    }
  };

  const incomeLevel = getIncomeLevel(grossAnnualIncome);

  // Spending recommendations based on income
  const spendingRecommendation = {
    housing: netMonthlyIncome * 0.3,
    utilities: netMonthlyIncome * 0.05,
    food: netMonthlyIncome * 0.15,
    transportation: netMonthlyIncome * 0.1,
    healthCare: netMonthlyIncome * 0.1,
    savings: netMonthlyIncome * 0.2,
    discretionary: netMonthlyIncome * 0.1,
  };

  return (
    <div className="space-y-6 mt-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center space-x-2">
            <Coins className="h-5 w-5 text-primary" />
            <span>Income Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Gross Monthly Income:</p>
              <p className="text-3xl font-bold">{formatCurrency(grossMonthlyIncome)}</p>
              <p className="text-sm text-muted-foreground">
                ({formatCurrency(grossAnnualIncome)} annually)
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Net Monthly Income:</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(netMonthlyIncome)}</p>
              <p className="text-sm text-muted-foreground">
                ({formatCurrency(netAnnualIncome)} annually)
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Monthly Deductions:</p>
              <p className="text-3xl font-bold text-red-500">{formatCurrency(totalDeductions)}</p>
              <p className="text-sm text-muted-foreground">
                ({formatPercentage(effectiveTaxRate)} of gross income)
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Hourly Rate:</p>
                <p className="text-lg font-semibold">{formatCurrency(hourlyRate)}/hour</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Take-Home Percentage:</p>
                <p className="text-lg font-semibold">{formatPercentage(takeHomePercentage)}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Income Level:</p>
                <p className={`text-lg font-semibold ${incomeLevel.color}`}>{incomeLevel.level}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Effective Tax Rate:</p>
                <p className="text-lg font-semibold">{formatPercentage(effectiveTaxRate)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ArrowDownCircle className="h-5 w-5 text-red-500" />
              Monthly Deductions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Federal Income Tax:</span>
                  <span className="font-medium">{formatCurrency(monthlyDeductions.federalTax)}</span>
                </div>
                <Progress value={federalTaxPct} className="h-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>State Income Tax:</span>
                  <span className="font-medium">{formatCurrency(monthlyDeductions.stateTax)}</span>
                </div>
                <Progress value={stateTaxPct} className="h-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Local Income Tax:</span>
                  <span className="font-medium">{formatCurrency(monthlyDeductions.localTax)}</span>
                </div>
                <Progress value={localTaxPct} className="h-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Social Security (FICA):</span>
                  <span className="font-medium">{formatCurrency(monthlyDeductions.socialSecurity)}</span>
                </div>
                <Progress value={socialSecurityPct} className="h-1" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Medicare:</span>
                  <span className="font-medium">{formatCurrency(monthlyDeductions.medicare)}</span>
                </div>
                <Progress value={medicarePct} className="h-1" />
              </div>
              
              {monthlyDeductions.retirement > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Retirement Contribution:</span>
                    <span className="font-medium">{formatCurrency(monthlyDeductions.retirement)}</span>
                  </div>
                  <Progress value={retirementPct} className="h-1" />
                </div>
              )}
              
              {monthlyDeductions.healthInsurance > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Health Insurance:</span>
                    <span className="font-medium">{formatCurrency(monthlyDeductions.healthInsurance)}</span>
                  </div>
                  <Progress value={healthInsurancePct} className="h-1" />
                </div>
              )}
              
              {monthlyDeductions.otherDeductions > 0 && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Other Deductions:</span>
                    <span className="font-medium">{formatCurrency(monthlyDeductions.otherDeductions)}</span>
                  </div>
                  <Progress value={otherDeductionsPct} className="h-1" />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ArrowUpCircle className="h-5 w-5 text-green-500" />
              Recommended Monthly Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Housing (30%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.housing)}</span>
                </div>
                <Progress value={30} className="h-1 bg-blue-100">
                  <div className="h-full bg-blue-500 rounded-full" />
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Utilities (5%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.utilities)}</span>
                </div>
                <Progress value={5} className="h-1 bg-amber-100">
                  <div className="h-full bg-amber-500 rounded-full" />
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Food (15%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.food)}</span>
                </div>
                <Progress value={15} className="h-1 bg-green-100">
                  <div className="h-full bg-green-500 rounded-full" />
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Transportation (10%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.transportation)}</span>
                </div>
                <Progress value={10} className="h-1 bg-purple-100">
                  <div className="h-full bg-purple-500 rounded-full" />
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Healthcare (10%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.healthCare)}</span>
                </div>
                <Progress value={10} className="h-1 bg-red-100">
                  <div className="h-full bg-red-500 rounded-full" />
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Savings & Investments (20%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.savings)}</span>
                </div>
                <Progress value={20} className="h-1 bg-indigo-100">
                  <div className="h-full bg-indigo-500 rounded-full" />
                </Progress>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Discretionary (10%):</span>
                  <span className="font-medium">{formatCurrency(spendingRecommendation.discretionary)}</span>
                </div>
                <Progress value={10} className="h-1 bg-pink-100">
                  <div className="h-full bg-pink-500 rounded-full" />
                </Progress>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-700">
          Based on your annual income of {formatCurrency(grossAnnualIncome)}, you fall into the <span className={`font-medium ${incomeLevel.color}`}>{incomeLevel.level}</span> bracket. {incomeLevel.text}
        </AlertDescription>
      </Alert>
      
      <div className="rounded-lg border border-amber-200 p-4 bg-amber-50">
        <div className="flex items-start space-x-2">
          <Clock className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-amber-800">Work Hours Perspective</h4>
            <p className="text-sm text-amber-700">
              With your hourly equivalent rate of {formatCurrency(hourlyRate)}, you would need to work approximately {Math.round(1000 / hourlyRate * 10) / 10} hours to earn $1,000 before taxes.
            </p>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border border-green-200 p-4 bg-green-50">
        <div className="flex items-start space-x-2">
          <CreditCard className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-green-800">Financial Planning</h4>
            <p className="text-sm text-green-700">
              Your monthly take-home pay of {formatCurrency(netMonthlyIncome)} gives you approximately {formatCurrency(netMonthlyIncome / 30)} to spend each day. For major purchases, consider the "hours worked" cost: a $500 purchase equals {Math.round(500 / hourlyRate * 10) / 10} hours of work.
            </p>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border border-purple-200 p-4 bg-purple-50">
        <div className="flex items-start space-x-2">
          <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-purple-800">Income Growth Potential</h4>
            <p className="text-sm text-purple-700">
              A 5% raise would increase your gross annual income to {formatCurrency(grossAnnualIncome * 1.05)} and your monthly take-home pay to approximately {formatCurrency(netMonthlyIncome * 1.05)}. Consider asking for a performance review or exploring skills that could qualify you for higher compensation.
            </p>
          </div>
        </div>
      </div>
      
      <Alert className="bg-emerald-50 border-emerald-200">
        <HelpCircle className="h-4 w-4 text-emerald-600" />
        <AlertDescription className="text-emerald-700">
          Based on our calculator, you should aim to save at least {formatCurrency(netMonthlyIncome * 0.2)} per month (20% of net income) for emergency funds, retirement, and other financial goals. At this rate, you could accumulate {formatCurrency(netMonthlyIncome * 0.2 * 12)} in savings per year, not including investment returns.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default GrossMonthlyIncomeResult;
