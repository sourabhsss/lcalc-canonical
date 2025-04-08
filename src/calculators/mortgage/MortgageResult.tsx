
import React from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface ResultProps {
  result: {
    monthlyPayment: number;
    totalInterest: number;
    totalCost: number;
    amortizationSchedule: {
      month: number;
      payment: number;
      principal: number;
      interest: number;
      balance: number;
    }[];
  };
}

const MortgageResult: React.FC<ResultProps> = ({ result }) => {
  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format smaller currency
  const formatSmallCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Chart data prep
  const chartData = result.amortizationSchedule.map(entry => ({
    month: entry.month,
    principal: entry.balance,
    interest: (result.totalInterest * entry.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month)
  }));

  // Custom tooltip for chart
  const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, string>) => {
    if (active && payload && payload.length) {
      // Fix: Convert label to number before using it
      const month = typeof label === 'number' ? label : parseInt(label as string, 10);
      const years = Math.floor(month / 12);
      const months = month % 12;
      const timeString = `${years} year${years !== 1 ? 's' : ''}${months > 0 ? `, ${months} month${months !== 1 ? 's' : ''}` : ''}`;
      
      return (
        <div className="bg-background border rounded p-2 shadow-md text-xs">
          <p className="font-semibold">{timeString}</p>
          <p className="text-blue-600">Remaining Principal: {formatCurrency(payload[0].value as number)}</p>
          <p className="text-amber-600">Interest Paid: {formatCurrency(payload[1].value as number)}</p>
        </div>
      );
    }
    return null;
  };

  // Find the year data points for summary
  const getYearData = (year: number) => {
    const month = year * 12;
    return result.amortizationSchedule.find(entry => entry.month === month) || result.amortizationSchedule[0];
  };

  // Get data for 5, 10, 15 year marks if the term is long enough
  const year5Data = getYearData(5);
  const year10Data = getYearData(10);
  const year15Data = getYearData(15);
  
  // Format month number as year and month
  const formatMonthAsYearMonth = (month: number): string => {
    const years = Math.floor(month / 12);
    const months = month % 12;
    return `${years}y ${months}m`;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-primary/10 p-4 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">Monthly Payment</p>
          <p className="text-2xl font-bold">{formatSmallCurrency(result.monthlyPayment)}</p>
        </div>
        <div className="bg-secondary/10 p-4 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">Total Interest</p>
          <p className="text-2xl font-bold">{formatCurrency(result.totalInterest)}</p>
        </div>
        <div className="bg-muted p-4 rounded-lg text-center">
          <p className="text-xs text-muted-foreground">Total Cost</p>
          <p className="text-2xl font-bold">{formatCurrency(result.totalCost)}</p>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-semibold mb-3">Amortization Schedule</h3>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                tickFormatter={(value: number) => formatMonthAsYearMonth(value)} 
                tick={{fontSize: 12}}
              />
              <YAxis 
                tickFormatter={(value: number) => formatCurrency(value).replace('$', '').replace(',000', 'k')} 
                tick={{fontSize: 12}}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="principal" 
                stackId="1" 
                stroke="#3182ce" 
                fill="#3182ce" 
                fillOpacity={0.6} 
                name="Principal Remaining" 
              />
              <Area 
                type="monotone" 
                dataKey="interest" 
                stackId="2" 
                stroke="#ed8936" 
                fill="#ed8936" 
                fillOpacity={0.6} 
                name="Interest Paid" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-lg font-semibold mb-3">Loan Progress</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-2 text-left">Timeline</th>
                <th className="border border-border p-2 text-right">Principal Paid</th>
                <th className="border border-border p-2 text-right">Interest Paid</th>
                <th className="border border-border p-2 text-right">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-2 text-left">Year 1</td>
                <td className="border border-border p-2 text-right">
                  {formatCurrency(result.amortizationSchedule[0].payment * 12 - result.amortizationSchedule[0].interest * 12)}
                </td>
                <td className="border border-border p-2 text-right">
                  {formatCurrency(result.amortizationSchedule[0].interest * 12)}
                </td>
                <td className="border border-border p-2 text-right">
                  {formatCurrency(result.amortizationSchedule[0].balance)}
                </td>
              </tr>
              {year5Data && (
                <tr>
                  <td className="border border-border p-2 text-left">Year 5</td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency(year5Data.payment * year5Data.month - (result.totalInterest * year5Data.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month))}
                  </td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency((result.totalInterest * year5Data.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month))}
                  </td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency(year5Data.balance)}
                  </td>
                </tr>
              )}
              {year10Data && (
                <tr>
                  <td className="border border-border p-2 text-left">Year 10</td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency(year10Data.payment * year10Data.month - (result.totalInterest * year10Data.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month))}
                  </td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency((result.totalInterest * year10Data.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month))}
                  </td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency(year10Data.balance)}
                  </td>
                </tr>
              )}
              {year15Data && (
                <tr>
                  <td className="border border-border p-2 text-left">Year 15</td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency(year15Data.payment * year15Data.month - (result.totalInterest * year15Data.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month))}
                  </td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency((result.totalInterest * year15Data.month) / (result.amortizationSchedule[result.amortizationSchedule.length - 1].month))}
                  </td>
                  <td className="border border-border p-2 text-right">
                    {formatCurrency(year15Data.balance)}
                  </td>
                </tr>
              )}
              <tr className="bg-muted/50">
                <td className="border border-border p-2 text-left font-semibold">Full Term</td>
                <td className="border border-border p-2 text-right font-semibold">
                  {formatCurrency(result.totalCost - result.totalInterest)}
                </td>
                <td className="border border-border p-2 text-right font-semibold">
                  {formatCurrency(result.totalInterest)}
                </td>
                <td className="border border-border p-2 text-right font-semibold">
                  $0
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MortgageResult;
