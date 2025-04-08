
// Utility functions for the Five Number Summary calculator

/**
 * Calculate five-number summary statistics from a given dataset
 */
export const calculateFiveNumberSummary = (
  inputNumbers: string,
  activeTab: string
): {
  min: number | null;
  q1: number | null;
  median: number | null;
  q3: number | null;
  max: number | null;
  iqr: number | null;
  outliers: number[] | null;
  sortedData: number[] | null;
} => {
  // Parse input string to array of numbers
  const numbers = inputNumbers
    .split(/[\s,]+/)
    .map(num => parseFloat(num.trim()))
    .filter(num => !isNaN(num));

  if (numbers.length < 4) {
    throw new Error('Please enter at least 4 numbers to calculate a meaningful five-number summary.');
  }

  // Sort the array
  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const n = sortedNumbers.length;

  // Calculate the five-number summary
  const min = sortedNumbers[0];
  const max = sortedNumbers[n - 1];
  
  // Calculate median
  let median: number;
  if (n % 2 === 0) {
    median = (sortedNumbers[n / 2 - 1] + sortedNumbers[n / 2]) / 2;
  } else {
    median = sortedNumbers[Math.floor(n / 2)];
  }
  
  // Calculate quartiles based on the active tab method
  let q1: number;
  let q3: number;
  
  if (activeTab === 'standard') {
    // Standard method (method that excludes median for odd-length arrays)
    const lowerHalf = sortedNumbers.slice(0, Math.floor(n / 2));
    if (lowerHalf.length % 2 === 0) {
      q1 = (lowerHalf[lowerHalf.length / 2 - 1] + lowerHalf[lowerHalf.length / 2]) / 2;
    } else {
      q1 = lowerHalf[Math.floor(lowerHalf.length / 2)];
    }
    
    const upperHalf = n % 2 === 0 
      ? sortedNumbers.slice(n / 2) 
      : sortedNumbers.slice(Math.floor(n / 2) + 1);
    
    if (upperHalf.length % 2 === 0) {
      q3 = (upperHalf[upperHalf.length / 2 - 1] + upperHalf[upperHalf.length / 2]) / 2;
    } else {
      q3 = upperHalf[Math.floor(upperHalf.length / 2)];
    }
  } else if (activeTab === 'inclusive') {
    // Inclusive method (includes all data points including median)
    const position_q1 = (n + 1) / 4;
    const position_q3 = 3 * (n + 1) / 4;
    
    // Handle fractional positions
    const pos_q1_floor = Math.floor(position_q1);
    const pos_q3_floor = Math.floor(position_q3);
    
    q1 = sortedNumbers[pos_q1_floor - 1] + 
         (position_q1 - pos_q1_floor) * 
         (sortedNumbers[pos_q1_floor] - sortedNumbers[pos_q1_floor - 1]);
         
    q3 = sortedNumbers[pos_q3_floor - 1] + 
         (position_q3 - pos_q3_floor) * 
         (sortedNumbers[pos_q3_floor] - sortedNumbers[pos_q3_floor - 1]);
  } else {
    // Nearest rank method
    const pos_q1 = Math.ceil(n / 4);
    const pos_q3 = Math.ceil(3 * n / 4);
    
    q1 = sortedNumbers[pos_q1 - 1];
    q3 = sortedNumbers[pos_q3 - 1];
  }

  // Calculate IQR
  const iqr = q3 - q1;
  
  // Find outliers (using 1.5 × IQR rule)
  const lowerBound = q1 - 1.5 * iqr;
  const upperBound = q3 + 1.5 * iqr;
  const outliers = sortedNumbers.filter(
    num => num < lowerBound || num > upperBound
  );

  return { 
    min, 
    q1, 
    median, 
    q3, 
    max, 
    iqr, 
    outliers,
    sortedData: sortedNumbers 
  };
};

/**
 * Calculate additional statistical measures
 */
export const calculateAdditionalStatistics = (data: number[]) => {
  const n = data.length;
  
  // Mean
  const sum = data.reduce((acc, val) => acc + val, 0);
  const mean = sum / n;
  
  // Variance and Standard Deviation
  const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
  const stdDev = Math.sqrt(variance);
  
  // Range
  const range = data[n - 1] - data[0];
  
  // Skewness (Pearson's coefficient)
  const median = n % 2 === 0
    ? (data[n / 2 - 1] + data[n / 2]) / 2
    : data[Math.floor(n / 2)];
  const skewness = 3 * (mean - median) / stdDev;
  
  // Kurtosis
  const kurtosis = data.reduce((acc, val) => acc + Math.pow((val - mean) / stdDev, 4), 0) / n - 3;
  
  return {
    mean,
    stdDev,
    variance,
    range,
    coefficientOfVariation: (stdDev / mean) * 100,
    skewness,
    kurtosis
  };
};

// Example datasets for the calculator
export const exampleDatasets = [
  { name: "Test Scores", data: "65, 78, 88, 82, 69, 95, 72, 79, 84, 90" },
  { name: "Stock Prices", data: "145.2, 146.8, 143.5, 142.9, 145.0, 147.2, 148.5, 143.8, 144.2" },
  { name: "Heights (cm)", data: "165, 178, 172, 185, 169, 182, 175, 171, 179, 168, 173" },
  { name: "Outlier Example", data: "12, 15, 18, 20, 21, 22, 24, 27, 150" }
];
