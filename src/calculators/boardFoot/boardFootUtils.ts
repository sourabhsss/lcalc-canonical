
/**
 * Board foot calculation utilities
 * A board foot is a volume measurement equal to 144 cubic inches
 */

// Calculate board feet from dimensions in inches
export const calculateBoardFeet = (
  thickness: number,
  width: number,
  length: number,
  quantity: number = 1
): number => {
  // Board foot formula: (Thickness x Width x Length) / 144 * Quantity
  const boardFeet = (thickness * width * length) / 144 * quantity;
  return parseFloat(boardFeet.toFixed(3));
};

// Calculate the cost based on board feet and price per board foot
export const calculateCost = (boardFeet: number, pricePerBoardFoot: number): number => {
  const cost = boardFeet * pricePerBoardFoot;
  return parseFloat(cost.toFixed(2));
};

// Convert dimensions from other units to inches
export const convertToInches = (value: number, unit: 'in' | 'ft' | 'cm' | 'm'): number => {
  switch (unit) {
    case 'in': return value;
    case 'ft': return value * 12;
    case 'cm': return value / 2.54;
    case 'm': return value * 39.37;
    default: return value;
  }
};
