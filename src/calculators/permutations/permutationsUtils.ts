/**
 * Utility functions for the Permutations Calculator
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
 * More efficient calculation of permutations using the multiplicative formula
 * Avoids calculating large factorials separately
 * @param n - The total number of items
 * @param r - The number of items to arrange
 */
export const calculatePermutationEfficient = (n: number, r: number): number => {
  if (r === 0) return 1;
  if (r < 0 || n < 0) return 0;
  
  let result = 1;
  
  // Calculate using the multiplicative formula
  for (let i = 0; i < r; i++) {
    result *= (n - i);
  }
  
  return result;
};

/**
 * Calculate permutations and return detailed steps
 * @param n - The total number of items
 * @param r - The number of items to arrange
 */
export const calculatePermutation = (n: number, r: number) => {
  const permutations = calculatePermutationEfficient(n, r);
  
  // Generate the formula representation
  const formula = `P(${n},${r}) = ${n}! / (${n}-${r})!`;
  
  // Create detailed steps for calculation
  const steps = [];
  
  // Step 1: Calculate n!
  const nFactorial = factorial(n);
  steps.push({
    description: `Calculate ${n}!`,
    calculation: `${n}! = ${n} × ${n-1} × ... × 2 × 1`,
    result: nFactorial
  });
  
  // Step 2: Calculate (n-r)!
  const nMinusR = n - r;
  const nMinusRFactorial = factorial(nMinusR);
  steps.push({
    description: `Calculate (${n} - ${r})!`,
    calculation: `${nMinusR}! = ${nMinusR} × ${nMinusR-1} × ... × 2 × 1`,
    result: nMinusRFactorial
  });
  
  // Step 3: Calculate final result
  steps.push({
    description: `Divide ${n}! by (${n} - ${r})!`,
    calculation: `${nFactorial} ÷ ${nMinusRFactorial}`,
    result: permutations
  });
  
  // Step 4: Alternative calculation method
  steps.push({
    description: "Alternative calculation method",
    calculation: `${n} × ${n-1} × ... × ${n-r+1}`,
    result: `Multiply ${r} consecutive integers starting from ${n} down to ${n-r+1}`
  });
  
  // For large numbers, provide alternative calculation method
  if (n > 20) {
    steps.push({
      description: "Note: For large numbers, we use a more efficient calculation method to avoid overflow.",
      calculation: "Multiplicative formula: P(n,r) = n × (n-1) × ... × (n-r+1)",
      result: "Same result with higher precision"
    });
  }
  
  return {
    n,
    r,
    permutations,
    formula,
    steps
  };
};

/**
 * Generate examples of permutations for the given n and r values
 * @param n - The total number of items
 * @param r - The number of items to arrange
 * @param maxExamples - Maximum number of examples to generate
 */
export const generatePermutationExamples = (
  n: number, 
  r: number, 
  maxExamples: number = 5
): string[] => {
  // For display purposes, we'll use letters for the original set
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // If n is too large for the alphabet, use numbers instead
  const set = n <= alphabet.length 
    ? alphabet.slice(0, n).split('') 
    : Array.from({ length: n }, (_, i) => (i + 1).toString());
  
  // Calculate total number of permutations
  const totalPermutations = calculatePermutationEfficient(n, r);
  
  // For very large permutation counts, just return a partial list
  if (totalPermutations <= maxExamples) {
    // For small enough n and r, generate all permutations
    return generateAllPermutations(set, r);
  } else {
    // For large n and r, generate a sample of permutations
    const examples = [];
    
    // Generate some example permutations
    for (let i = 0; i < Math.min(maxExamples - 1, totalPermutations); i++) {
      const indices: number[] = [];
      for (let j = 0; j < r; j++) {
        let index = (i + j) % n;
        // Ensure we don't repeat indices in a single permutation
        while (indices.includes(index)) {
          index = (index + 1) % n;
        }
        indices.push(index);
      }
      examples.push(indices.map(idx => set[idx]).join(''));
    }
    
    // Add an ellipsis if we couldn't show all permutations
    return examples.length < totalPermutations 
      ? [...examples, '...'] 
      : examples;
  }
};

/**
 * Generate all permutations of r elements from the given set
 * Warning: This is computationally expensive for large n and r
 */
const generateAllPermutations = (set: string[], r: number): string[] => {
  const result: string[] = [];
  
  // For r=1, return all elements individually
  if (r === 1) {
    return set.map(item => item);
  }
  
  // Recursive algorithm to generate all permutations
  const generateHelper = (arr: string[], prefix: string) => {
    // If we've built a permutation of length r, add it to results
    if (prefix.length === r) {
      result.push(prefix);
      return;
    }
    
    // Try adding each remaining element
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      // Create a new array without the current element
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      generateHelper(remaining, prefix + current);
    }
  };
  
  generateHelper(set, '');
  return result;
};
