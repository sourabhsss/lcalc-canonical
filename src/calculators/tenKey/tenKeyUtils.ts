
/**
 * Utility functions for the 10-key calculator
 */

/**
 * Formats a number for display
 * @param value - The number to format
 * @returns Formatted number string
 */
export const formatNumber = (value: number): string => {
  // Check if the value is a whole number
  const isWholeNumber = value % 1 === 0;
  
  // Format the number with thousands separators and appropriate decimals
  const formattedValue = value.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: isWholeNumber ? 0 : 12,
  });
  
  return formattedValue;
};

/**
 * Performs the specified calculation
 * @param firstValue - First operand
 * @param secondValue - Second operand
 * @param operation - Mathematical operation to perform
 * @returns Calculation result
 */
export const performCalculation = (
  firstValue: number,
  secondValue: number,
  operation: string
): number => {
  switch (operation) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '×':
      return firstValue * secondValue;
    case '÷':
      return secondValue !== 0 ? firstValue / secondValue : NaN;
    default:
      return secondValue;
  }
};

/**
 * Calculates tax amount
 * @param amount - Base amount
 * @param taxRate - Tax rate in percentage
 * @returns Tax amount
 */
export const calculateTax = (amount: number, taxRate: number): number => {
  return (amount * taxRate) / 100;
};

/**
 * Determines if the calculator should reset after an operation
 * @param key - The key that was pressed
 * @param display - Current display value
 * @returns Boolean indicating if calculator should reset
 */
export const shouldResetCalculator = (key: string, display: string): boolean => {
  // Reset if there was an error
  if (display === 'Error') return true;
  
  // Reset if entering a new calculation after equals
  if (key === '+' || key === '-' || key === '×' || key === '÷') return false;
  
  return false;
};

/**
 * Validates if the current input is valid
 * @param currentDisplay - Current display string
 * @param newInput - New input to add
 * @returns Boolean indicating if input is valid
 */
export const isValidInput = (currentDisplay: string, newInput: string): boolean => {
  // Check for multiple decimal points
  if (newInput === '.' && currentDisplay.includes('.')) return false;
  
  // Max length check (prevent overflow)
  if (currentDisplay.replace(/[,.]/g, '').length >= 15) return false;
  
  return true;
};
