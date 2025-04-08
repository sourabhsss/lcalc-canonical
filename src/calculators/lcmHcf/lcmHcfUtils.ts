
/**
 * Utility functions for LCM (Least Common Multiple) and HCF (Highest Common Factor) calculations
 */

/**
 * Find the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm
 * Also known as the Highest Common Factor (HCF)
 * @param a First number
 * @param b Second number
 * @returns The greatest common divisor of a and b
 */
export const calculateGCD = (a: number, b: number): number => {
  // Ensure we're working with positive numbers
  a = Math.abs(a);
  b = Math.abs(b);
  
  // Handle edge cases
  if (a === 0) return b;
  if (b === 0) return a;
  
  // Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
};

/**
 * Find the Least Common Multiple (LCM) of two numbers
 * @param a First number
 * @param b Second number
 * @returns The least common multiple of a and b
 */
export const calculateLCM = (a: number, b: number): number => {
  // Ensure we're working with positive numbers
  a = Math.abs(a);
  b = Math.abs(b);
  
  // Handle edge cases
  if (a === 0 || b === 0) return 0;
  
  // LCM = (a * b) / gcd(a, b)
  return (a * b) / calculateGCD(a, b);
};

/**
 * Calculate the HCF (Highest Common Factor) of multiple numbers
 * @param numbers Array of numbers
 * @returns The HCF of all numbers
 */
export const calculateHCFOfArray = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return Math.abs(numbers[0]);
  
  let result = Math.abs(numbers[0]);
  
  for (let i = 1; i < numbers.length; i++) {
    result = calculateGCD(result, Math.abs(numbers[i]));
    
    // If HCF becomes 1, it can't be reduced further
    if (result === 1) {
      return 1;
    }
  }
  
  return result;
};

/**
 * Calculate the LCM (Least Common Multiple) of multiple numbers
 * @param numbers Array of numbers
 * @returns The LCM of all numbers
 */
export const calculateLCMOfArray = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return Math.abs(numbers[0]);
  
  let result = Math.abs(numbers[0]);
  
  for (let i = 1; i < numbers.length; i++) {
    result = calculateLCM(result, Math.abs(numbers[i]));
  }
  
  return result;
};

/**
 * Find all factors of a number
 * @param num The number to find factors for
 * @returns Array of all factors of the number
 */
export const findFactors = (num: number): number[] => {
  // Ensure we're working with a positive number
  num = Math.abs(num);
  
  // Handle edge case
  if (num === 0) return [];
  if (num === 1) return [1];
  
  const factors: number[] = [];
  
  // Find factors up to the square root of the number
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.push(i);
      
      // Add the corresponding factor (if different)
      if (i !== num / i) {
        factors.push(num / i);
      }
    }
  }
  
  // Sort factors in ascending order
  return factors.sort((a, b) => a - b);
};

/**
 * Find common factors of multiple numbers
 * @param numbers Array of numbers
 * @returns Array of common factors
 */
export const findCommonFactors = (numbers: number[]): number[] => {
  if (numbers.length === 0) return [];
  if (numbers.length === 1) return findFactors(numbers[0]);
  
  // Find factors of the first number
  let commonFactors = findFactors(numbers[0]);
  
  // For each subsequent number, filter the common factors
  for (let i = 1; i < numbers.length; i++) {
    const currentFactors = findFactors(numbers[i]);
    commonFactors = commonFactors.filter(factor => currentFactors.includes(factor));
    
    // If no common factors remain, return early
    if (commonFactors.length === 0) {
      return [];
    }
  }
  
  return commonFactors;
};

/**
 * Format large numbers with commas
 * @param num The number to format
 * @returns Formatted number string with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Check if a number is prime
 * @param num The number to check
 * @returns True if the number is prime, false otherwise
 */
export const isPrime = (num: number): boolean => {
  // Handle edge cases
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  // Check all potential factors up to the square root
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  
  return true;
};

/**
 * Find the prime factorization of a number
 * @param num The number to factorize
 * @returns Object with prime factors as keys and their powers as values
 */
export const findPrimeFactors = (num: number): Record<number, number> => {
  // Ensure we're working with a positive number
  num = Math.abs(num);
  
  // Handle edge cases
  if (num === 0 || num === 1) return {};
  
  const primeFactors: Record<number, number> = {};
  
  // Check for factors of 2
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num /= 2;
  }
  
  // Check for factors of odd numbers starting from 3
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      primeFactors[i] = (primeFactors[i] || 0) + 1;
      num /= i;
    }
  }
  
  // If num is a prime number greater than 2
  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }
  
  return primeFactors;
};

/**
 * Format prime factorization as a readable string
 * @param primeFactors Object with prime factors and their powers
 * @returns Formatted string representation
 */
export const formatPrimeFactorization = (primeFactors: Record<number, number>): string => {
  if (Object.keys(primeFactors).length === 0) return "1";
  
  return Object.entries(primeFactors)
    .map(([factor, power]) => power === 1 ? factor : `${factor}^${power}`)
    .join(" × ");
};

/**
 * Generate step-by-step workings for HCF/GCD calculation
 * @param numbers Array of numbers
 * @returns Array of steps as strings
 */
export const generateHCFSteps = (numbers: number[]): string[] => {
  if (numbers.length === 0) return ["No numbers provided"];
  if (numbers.length === 1) return [`HCF of ${numbers[0]} is ${Math.abs(numbers[0])}`];
  
  const steps: string[] = [];
  
  // Find prime factorization of each number
  const primeFactorizations: Record<number, Record<number, number>> = {};
  
  numbers.forEach(num => {
    primeFactorizations[num] = findPrimeFactors(num);
    steps.push(`Prime factorization of ${num}: ${formatPrimeFactorization(primeFactorizations[num])}`);
  });
  
  // Find common prime factors with minimum powers
  const commonFactors: Record<number, number> = {};
  
  Object.values(primeFactorizations).forEach((factorization, index) => {
    if (index === 0) {
      // Initialize with the first number's factorization
      Object.entries(factorization).forEach(([factor, power]) => {
        commonFactors[Number(factor)] = power;
      });
    } else {
      // For subsequent numbers, update common factors
      Object.keys(commonFactors).forEach(factorStr => {
        const factor = Number(factorStr);
        
        if (factorization[factor]) {
          // Take the minimum power
          commonFactors[factor] = Math.min(commonFactors[factor], factorization[factor]);
        } else {
          // If a factor is not present in all numbers, remove it
          delete commonFactors[factor];
        }
      });
    }
  });
  
  steps.push("For HCF, take the common prime factors with their minimum powers:");
  
  if (Object.keys(commonFactors).length === 0) {
    steps.push("There are no common prime factors, so HCF = 1");
    return steps;
  }
  
  steps.push(`Common prime factors: ${formatPrimeFactorization(commonFactors)}`);
  
  // Calculate the HCF
  const hcf = Object.entries(commonFactors).reduce(
    (product, [factor, power]) => product * Math.pow(Number(factor), power),
    1
  );
  
  steps.push(`HCF = ${formatNumber(hcf)}`);
  
  return steps;
};

/**
 * Generate step-by-step workings for LCM calculation
 * @param numbers Array of numbers
 * @returns Array of steps as strings
 */
export const generateLCMSteps = (numbers: number[]): string[] => {
  if (numbers.length === 0) return ["No numbers provided"];
  if (numbers.length === 1) return [`LCM of ${numbers[0]} is ${Math.abs(numbers[0])}`];
  
  const steps: string[] = [];
  
  // Find prime factorization of each number
  const primeFactorizations: Record<number, Record<number, number>> = {};
  
  numbers.forEach(num => {
    primeFactorizations[num] = findPrimeFactors(num);
    steps.push(`Prime factorization of ${num}: ${formatPrimeFactorization(primeFactorizations[num])}`);
  });
  
  // Find all prime factors with maximum powers
  const allFactors: Record<number, number> = {};
  
  Object.values(primeFactorizations).forEach(factorization => {
    Object.entries(factorization).forEach(([factor, power]) => {
      const factorNum = Number(factor);
      // Take the maximum power for each factor
      allFactors[factorNum] = Math.max(allFactors[factorNum] || 0, power);
    });
  });
  
  steps.push("For LCM, take all prime factors with their maximum powers:");
  steps.push(`All prime factors: ${formatPrimeFactorization(allFactors)}`);
  
  // Calculate the LCM
  const lcm = Object.entries(allFactors).reduce(
    (product, [factor, power]) => product * Math.pow(Number(factor), power),
    1
  );
  
  steps.push(`LCM = ${formatNumber(lcm)}`);
  
  return steps;
};
