
/**
 * Utility functions for the Percentage Increase Calculator
 */

/**
 * Calculate percentage change between two values
 * @param oldValue - The original value
 * @param newValue - The new value
 */
export const calculatePercentageChange = (oldValue: number, newValue: number) => {
  // Calculate absolute change
  const absoluteChange = newValue - oldValue;
  
  // Calculate percentage change
  let percentageChange = 0;
  if (oldValue !== 0) {
    percentageChange = (absoluteChange / Math.abs(oldValue)) * 100;
  } else if (absoluteChange !== 0) {
    // If old value is zero and there is a change, percentage change is technically infinite
    // But we'll represent it as a very large number for practical purposes
    percentageChange = absoluteChange > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER;
  }
  
  // Determine if it's an increase, decrease, or no change
  const isIncrease = percentageChange >= 0;
  
  // Generate the formula representation
  const formula = `Percentage Change = ((New Value - Original Value) / |Original Value|) × 100%`;
  
  // Create detailed steps for calculation
  const steps = [];
  
  // Step 1: Calculate the difference
  steps.push({
    description: "Calculate the difference (New Value - Original Value)",
    calculation: `${newValue} - ${oldValue}`,
    result: absoluteChange
  });
  
  // Step 2: Divide by the absolute value of the original value
  if (oldValue !== 0) {
    steps.push({
      description: "Divide by the absolute value of the Original Value",
      calculation: `${absoluteChange} ÷ |${oldValue}|`,
      result: absoluteChange / Math.abs(oldValue)
    });
  } else {
    steps.push({
      description: "Divide by the absolute value of the Original Value",
      calculation: `${absoluteChange} ÷ |${oldValue}|`,
      result: "Undefined (division by zero)"
    });
  }
  
  // Step 3: Multiply by 100 to get percentage
  if (oldValue !== 0) {
    steps.push({
      description: "Multiply by 100 to get percentage",
      calculation: `${(absoluteChange / Math.abs(oldValue)).toFixed(6)} × 100`,
      result: percentageChange
    });
  } else if (absoluteChange !== 0) {
    steps.push({
      description: "Multiply by 100 to get percentage",
      calculation: "Undefined × 100",
      result: absoluteChange > 0 ? "Infinite increase" : "Infinite decrease"
    });
  } else {
    steps.push({
      description: "Multiply by 100 to get percentage",
      calculation: "0 × 100",
      result: 0
    });
  }
  
  // Step 4: Interpret the result
  steps.push({
    description: "Interpret the result",
    calculation: percentageChange === 0 
      ? "0% = No change" 
      : percentageChange > 0 
        ? `+${percentageChange.toFixed(2)}% = Increase` 
        : `${percentageChange.toFixed(2)}% = Decrease`,
    result: percentageChange === 0 
      ? "No change" 
      : isIncrease 
        ? `${percentageChange.toFixed(2)}% increase` 
        : `${Math.abs(percentageChange).toFixed(2)}% decrease`
  });
  
  return {
    oldValue,
    newValue,
    percentageChange,
    absoluteChange,
    isIncrease,
    formula,
    steps
  };
};

/**
 * Calculate a new value after applying a percentage increase
 * @param baseValue - The original value
 * @param percentageIncrease - The percentage to increase by
 */
export const calculateValueAfterPercentageIncrease = (baseValue: number, percentageIncrease: number) => {
  const multiplier = 1 + (percentageIncrease / 100);
  const newValue = baseValue * multiplier;
  
  return {
    baseValue,
    percentageIncrease,
    newValue,
    absoluteChange: newValue - baseValue,
    multiplier
  };
};

/**
 * Calculate a new value after applying a percentage decrease
 * @param baseValue - The original value
 * @param percentageDecrease - The percentage to decrease by
 */
export const calculateValueAfterPercentageDecrease = (baseValue: number, percentageDecrease: number) => {
  const multiplier = 1 - (percentageDecrease / 100);
  const newValue = baseValue * multiplier;
  
  return {
    baseValue,
    percentageDecrease,
    newValue,
    absoluteChange: newValue - baseValue,
    multiplier
  };
};

/**
 * Calculate the original value before a percentage change
 * @param newValue - The final value after the change
 * @param percentageChange - The percentage change applied
 */
export const calculateOriginalValueBeforePercentageChange = (newValue: number, percentageChange: number) => {
  const multiplier = 1 + (percentageChange / 100);
  const originalValue = newValue / multiplier;
  
  return {
    newValue,
    percentageChange,
    originalValue,
    absoluteChange: newValue - originalValue,
    multiplier
  };
};
