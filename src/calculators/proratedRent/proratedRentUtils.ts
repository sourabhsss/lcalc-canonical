
/**
 * Prorated Rent calculation utilities
 */

import { getDaysInMonth } from 'date-fns';

// Calculate prorated rent for a partial month
export const calculateProratedRent = (
  monthlyRent: number,
  moveInDay: number,
  month: number,
  year: number,
  method: 'daysInMonth' | 'standardMonth' | 'dailyRate'
): {
  proratedAmount: number;
  daysInMonth: number;
  daysOccupied: number;
  dailyRate: number;
} => {
  // Get the number of days in the specified month
  const totalDaysInMonth = getDaysInMonth(new Date(year, month - 1));
  
  // Calculate days occupied (from move-in day to end of month)
  const daysOccupied = totalDaysInMonth - moveInDay + 1;
  
  // Calculate the daily rate based on the selected method
  let dailyRate: number;
  
  switch (method) {
    case 'daysInMonth':
      // Exact days in month method
      dailyRate = monthlyRent / totalDaysInMonth;
      break;
    case 'standardMonth':
      // 30-day standard month method
      dailyRate = monthlyRent / 30;
      break;
    case 'dailyRate':
      // Daily rate method (monthly rent / 30 * 1.5)
      dailyRate = (monthlyRent / 30) * 1.5;
      break;
    default:
      dailyRate = monthlyRent / totalDaysInMonth;
  }
  
  // Calculate the prorated amount
  const proratedAmount = dailyRate * daysOccupied;
  
  return {
    proratedAmount,
    daysInMonth: totalDaysInMonth,
    daysOccupied,
    dailyRate
  };
};

// Calculate next month's full rent due date
export const calculateNextRentDueDate = (
  moveInDay: number,
  month: number,
  year: number
): Date => {
  // Get the move-in date
  const moveInDate = new Date(year, month - 1, moveInDay);
  
  // Calculate the next month's rent due date (typically the 1st of the next month)
  const nextMonth = new Date(moveInDate);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(1);
  
  return nextMonth;
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Get month name from month number
export const getMonthName = (month: number): string => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return months[month - 1];
};
