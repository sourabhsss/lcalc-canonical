
/**
 * Utility functions for the Combinations Calculator
 */

/**
 * Calculate factorial of a number
 * @param n - The number to calculate factorial for
 */
export const factorial = (n: number): number => {
  if (n < 0) return 0;
  if (n <= 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

/**
 * More efficient calculation of combinations using the multiplicative formula
 * Avoids calculating large factorials separately
 * @param n - The total number of items
 * @param r - The number of items to choose
 */
export const calculateCombinationEfficient = (n: number, r: number): number => {
  // Ensure r is not greater than n-r (for efficiency)
  r = Math.min(r, n - r);
  
  if (r === 0) return 1;
  if (r < 0 || n < 0) return 0;
  
  let result = 1;
  
  // Calculate using the multiplicative formula
  for (let i = 1; i <= r; i++) {
    result *= (n - (i - 1));
    result /= i;
  }
  
  return result;
};

/**
 * Calculate combinations and return detailed steps
 * @param n - The total number of items
 * @param r - The number of items to choose
 */
export const calculateCombination = (n: number, r: number) => {
  const combinations = calculateCombinationEfficient(n, r);
  
  // Generate the formula representation
  const formula = `C(${n},${r}) = ${n}! / (${r}! × (${n}-${r})!)`;
  
  // Create detailed steps for calculation
  const steps = [];
  
  // Step 1: Calculate n!
  const nFactorial = factorial(n);
  steps.push({
    description: `Calculate ${n}!`,
    calculation: `${n}! = ${n} × ${n-1} × ... × 2 × 1`,
    result: nFactorial
  });
  
  // Step 2: Calculate r!
  const rFactorial = factorial(r);
  steps.push({
    description: `Calculate ${r}!`,
    calculation: `${r}! = ${r} × ${r-1} × ... × 2 × 1`,
    result: rFactorial
  });
  
  // Step 3: Calculate (n-r)!
  const nMinusR = n - r;
  const nMinusRFactorial = factorial(nMinusR);
  steps.push({
    description: `Calculate (${n} - ${r})!`,
    calculation: `${nMinusR}! = ${nMinusR} × ${nMinusR-1} × ... × 2 × 1`,
    result: nMinusRFactorial
  });
  
  // Step 4: Calculate r! × (n-r)!
  const denominator = rFactorial * nMinusRFactorial;
  steps.push({
    description: `Multiply ${r}! × (${n} - ${r})!`,
    calculation: `${rFactorial} × ${nMinusRFactorial}`,
    result: denominator
  });
  
  // Step 5: Calculate final result
  steps.push({
    description: `Divide ${n}! by (${r}! × (${n} - ${r})!)`,
    calculation: `${nFactorial} ÷ ${denominator}`,
    result: combinations
  });
  
  // For large numbers, provide alternative calculation method
  if (n > 20) {
    steps.push({
      description: "Note: For large numbers, we use a more efficient calculation method to avoid overflow.",
      calculation: "Multiplicative formula: C(n,r) = (n × (n-1) × ... × (n-r+1)) / (r × (r-1) × ... × 1)",
      result: "Same result with higher precision"
    });
  }
  
  return {
    n,
    r,
    combinations,
    formula,
    steps
  };
};

/**
 * Generate examples of combinations for the given n and r values
 * @param n - The total number of items
 * @param r - The number of items to choose
 * @param maxExamples - Maximum number of examples to generate
 */
export const generateCombinationExamples = (
  n: number, 
  r: number, 
  maxExamples: number = 10
): string[] => {
  // For display purposes, we'll use letters for the original set
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // If n is too large for the alphabet, use numbers instead
  const set = n <= alphabet.length 
    ? alphabet.slice(0, n).split('') 
    : Array.from({ length: n }, (_, i) => (i + 1).toString());
  
  // For very large combination counts, just return a partial list
  const totalCombinations = calculateCombinationEfficient(n, r);
  
  if (totalCombinations <= maxExamples) {
    // For small enough n and r, generate all combinations
    return generateAllCombinations(set, r);
  } else {
    // For large n and r, generate a sample of combinations
    const examples = [];
    
    // Always include the first combination
    examples.push(set.slice(0, r).join(''));
    
    // Add some combinations from the middle (if there are many)
    if (totalCombinations > 2) {
      // Add a few examples with various patterns
      for (let i = 1; i < Math.min(maxExamples - 1, n); i++) {
        const indices = [];
        for (let j = 0; j < r; j++) {
          indices.push((i + j) % n);
        }
        indices.sort((a, b) => a - b);
        examples.push(indices.map(idx => set[idx]).join(''));
        
        // Break if we have enough examples
        if (examples.length >= maxExamples - 1) break;
      }
    }
    
    // Always include the last combination
    if (totalCombinations > 1) {
      examples.push(set.slice(n - r).join(''));
    }
    
    // Add an ellipsis if we couldn't show all combinations
    return examples.length < totalCombinations 
      ? [...examples, '...'] 
      : examples;
  }
};

/**
 * Generate all combinations of r elements from the given set
 * Warning: This is computationally expensive for large n and r
 */
const generateAllCombinations = (set: string[], r: number): string[] => {
  const result: string[] = [];
  
  // Recursive helper function to generate combinations
  const generateHelper = (
    current: string[], 
    start: number, 
    currentLength: number
  ) => {
    // If we've selected r elements, add this combination to the result
    if (currentLength === r) {
      result.push(current.join(''));
      return;
    }
    
    // Try adding each remaining element
    for (let i = start; i < set.length; i++) {
      current.push(set[i]);
      generateHelper(current, i + 1, currentLength + 1);
      current.pop();
    }
  };
  
  generateHelper([], 0, 0);
  return result;
};
