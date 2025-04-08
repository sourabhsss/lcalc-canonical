
/**
 * Utility functions for the Standard Deviation Calculator
 */

/**
 * Calculate mean (average) of a dataset
 */
export const calculateMean = (data: number[]): number => {
  const sum = data.reduce((acc, val) => acc + val, 0);
  return sum / data.length;
};

/**
 * Calculate variance of a dataset
 * @param data - Array of numbers
 * @param isPopulation - Whether to calculate population variance (divisor n) or sample variance (divisor n-1)
 */
export const calculateVariance = (data: number[], isPopulation: boolean = false): number => {
  const mean = calculateMean(data);
  const squaredDifferences = data.map(value => Math.pow(value - mean, 2));
  const sumOfSquaredDifferences = squaredDifferences.reduce((acc, val) => acc + val, 0);
  
  return isPopulation
    ? sumOfSquaredDifferences / data.length  // Population variance
    : sumOfSquaredDifferences / (data.length - 1);  // Sample variance
};

/**
 * Calculate standard deviation of a dataset
 * @param data - Array of numbers
 * @param isPopulation - Whether to calculate population standard deviation or sample standard deviation
 */
export const calculateStandardDeviation = (data: number[], isPopulation: boolean = false): number => {
  return Math.sqrt(calculateVariance(data, isPopulation));
};

/**
 * Calculate median of a dataset
 */
export const calculateMedian = (data: number[]): number => {
  const sortedData = [...data].sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  
  if (sortedData.length % 2 === 0) {
    // Even number of elements, average the two middle values
    return (sortedData[middle - 1] + sortedData[middle]) / 2;
  } else {
    // Odd number of elements, return the middle value
    return sortedData[middle];
  }
};

/**
 * Calculate mode (most frequent values) of a dataset
 */
export const calculateMode = (data: number[]): number[] => {
  // Count frequency of each value
  const frequency: {[key: number]: number} = {};
  data.forEach(value => {
    frequency[value] = (frequency[value] || 0) + 1;
  });
  
  // Find the highest frequency
  let maxFrequency = 0;
  Object.values(frequency).forEach(count => {
    if (count > maxFrequency) {
      maxFrequency = count;
    }
  });
  
  // If max frequency is 1, there is no mode (all values appear only once)
  if (maxFrequency === 1) {
    return [];
  }
  
  // Find all values that appear with the highest frequency
  const modes: number[] = [];
  Object.entries(frequency).forEach(([value, count]) => {
    if (count === maxFrequency) {
      modes.push(parseFloat(value));
    }
  });
  
  return modes;
};

/**
 * Calculate range (difference between max and min) of a dataset
 */
export const calculateRange = (data: number[]): number => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  return max - min;
};

/**
 * Calculate coefficient of variation (ratio of std dev to mean)
 */
export const calculateCoeffOfVariation = (data: number[]): number => {
  const mean = calculateMean(data);
  const stdDev = calculateStandardDeviation(data, true); // Using population std dev
  
  // Avoid division by zero
  if (mean === 0) {
    return 0;
  }
  
  return stdDev / Math.abs(mean);
};

/**
 * Calculate all statistics for a dataset
 */
export const calculateStatistics = (data: number[]) => {
  const mean = calculateMean(data);
  const sampleStdDev = calculateStandardDeviation(data, false);
  const populationStdDev = calculateStandardDeviation(data, true);
  const variance = calculateVariance(data, false);
  const min = Math.min(...data);
  const max = Math.max(...data);
  const sum = data.reduce((acc, val) => acc + val, 0);
  const median = calculateMedian(data);
  const mode = calculateMode(data);
  const range = calculateRange(data);
  const coefficientOfVariation = calculateCoeffOfVariation(data);
  
  return {
    mean,
    standardDeviation: sampleStdDev, // Default to sample std dev
    variance,
    min,
    max,
    count: data.length,
    sum,
    populationStdDev,
    sampleStdDev,
    median,
    mode,
    range,
    coefficientOfVariation
  };
};
