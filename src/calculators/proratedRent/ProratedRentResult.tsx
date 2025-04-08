
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  calculateProratedRent, 
  calculateNextRentDueDate,
  formatCurrency, 
  getMonthName 
} from './proratedRentUtils';
import { format } from 'date-fns';

interface ProratedRentResultProps {
  monthlyRent: number;
  moveInDate: Date;
  calculationMethod: 'daysInMonth' | 'standardMonth' | 'dailyRate';
}

const ProratedRentResult: React.FC<ProratedRentResultProps> = ({ 
  monthlyRent, 
  moveInDate,
  calculationMethod 
}) => {
  // Extract date components
  const moveInDay = moveInDate.getDate();
  const month = moveInDate.getMonth() + 1; // JavaScript months are 0-indexed
  const year = moveInDate.getFullYear();
  
  // Calculate prorated rent
  const { 
    proratedAmount, 
    daysInMonth, 
    daysOccupied, 
    dailyRate 
  } = calculateProratedRent(monthlyRent, moveInDay, month, year, calculationMethod);
  
  // Calculate the next rent due date
  const nextRentDueDate = calculateNextRentDueDate(moveInDay, month, year);
  
  // Format the daily rate
  const formattedDailyRate = formatCurrency(dailyRate);
  
  // Format the prorated amount
  const formattedProratedAmount = formatCurrency(proratedAmount);
  
  // Format the monthly rent
  const formattedMonthlyRent = formatCurrency(monthlyRent);
  
  // Get month name
  const monthName = getMonthName(month);
  
  // Get the method description
  const getMethodDescription = () => {
    switch (calculationMethod) {
      case 'daysInMonth':
        return `Monthly rent (${formattedMonthlyRent}) ÷ Days in ${monthName} (${daysInMonth}) = ${formattedDailyRate} per day`;
      case 'standardMonth':
        return `Monthly rent (${formattedMonthlyRent}) ÷ 30 days = ${formattedDailyRate} per day`;
      case 'dailyRate':
        return `Monthly rent (${formattedMonthlyRent}) ÷ 30 days × 1.5 = ${formattedDailyRate} per day`;
      default:
        return '';
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Prorated Rent Calculation</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Prorated Rent Amount</div>
              <div className="text-3xl font-bold text-primary">{formattedProratedAmount}</div>
              <div className="text-xs text-muted-foreground mt-1">
                For {daysOccupied} days in {monthName}
              </div>
            </div>
            
            <div className="p-4 bg-primary/5 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Next Month's Full Rent</div>
              <div className="text-3xl font-bold text-primary">{formattedMonthlyRent}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Due on {format(nextRentDueDate, 'MMMM d, yyyy')}
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-medium mb-3">Calculation Details</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Monthly Rent:</td>
                  <td className="py-1">{formattedMonthlyRent}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Move-in Date:</td>
                  <td className="py-1">{format(moveInDate, 'MMMM d, yyyy')}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Days in {monthName}:</td>
                  <td className="py-1">{daysInMonth} days</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Days You'll Occupy:</td>
                  <td className="py-1">{daysOccupied} days (from day {moveInDay} to day {daysInMonth})</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Calculation Method:</td>
                  <td className="py-1 capitalize">{calculationMethod.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Daily Rate:</td>
                  <td className="py-1">{formattedDailyRate} per day</td>
                </tr>
                <tr>
                  <td className="py-1 text-muted-foreground">Formula:</td>
                  <td className="py-1">{getMethodDescription()}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="p-4 bg-secondary/10 rounded-lg text-center">
              <div className="text-sm text-muted-foreground">Total First Month Payment</div>
              <div className="text-xl font-bold">{formattedProratedAmount}</div>
              <div className="text-xs text-muted-foreground mt-1">
                Due at move-in on {format(moveInDate, 'MMMM d, yyyy')}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-4 bg-secondary/5 rounded-lg">
        <h3 className="font-medium mb-2">About Prorated Rent Calculation:</h3>
        <p className="text-sm text-muted-foreground">
          Prorated rent is calculated when you move in on a day other than the first of the month. 
          Your landlord charges you only for the days you actually occupy the property during your 
          first month. This calculator uses the "{calculationMethod}" method, but check 
          your lease or ask your landlord to confirm which method they use.
        </p>
      </div>
    </div>
  );
};

export default ProratedRentResult;
