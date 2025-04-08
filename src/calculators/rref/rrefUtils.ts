
/**
 * Utility functions for the RREF calculator
 */

// Define Matrix type for calculations
export type Matrix = number[][];

/**
 * Creates an empty matrix with specified dimensions
 * @param rows - Number of rows
 * @param cols - Number of columns
 * @returns Empty matrix initialized with zeros
 */
export const createEmptyMatrix = (rows: number, cols: number): Matrix => {
  return Array(rows).fill(0).map(() => Array(cols).fill(0));
};

/**
 * Copies a matrix to a new matrix
 * @param matrix - Source matrix
 * @returns New matrix with same values
 */
export const copyMatrix = (matrix: Matrix): Matrix => {
  return matrix.map(row => [...row]);
};

/**
 * Validates if a string is a valid number
 * @param value - String to validate
 * @returns True if valid number, false otherwise
 */
export const isValidNumber = (value: string): boolean => {
  // Allow empty strings (will be converted to 0)
  if (value === '') return true;
  
  // Check for valid number format, allowing decimal and negative numbers
  return /^-?\d*\.?\d*$/.test(value);
};

/**
 * Swaps two rows in a matrix
 * @param matrix - Matrix to modify
 * @param row1 - First row index
 * @param row2 - Second row index
 */
export const swapRows = (matrix: Matrix, row1: number, row2: number): void => {
  const temp = matrix[row1];
  matrix[row1] = matrix[row2];
  matrix[row2] = temp;
};

/**
 * Multiplies a row by a scalar
 * @param matrix - Matrix to modify
 * @param row - Row index
 * @param scalar - Scalar multiplier
 */
export const multiplyRow = (matrix: Matrix, row: number, scalar: number): void => {
  if (scalar === 0) return; // Avoid multiplication by zero
  
  for (let col = 0; col < matrix[row].length; col++) {
    matrix[row][col] *= scalar;
  }
};

/**
 * Adds a multiple of one row to another
 * @param matrix - Matrix to modify
 * @param destRow - Destination row index
 * @param sourceRow - Source row index
 * @param scalar - Scalar multiplier
 */
export const addMultipleOfRow = (
  matrix: Matrix,
  destRow: number,
  sourceRow: number,
  scalar: number
): void => {
  for (let col = 0; col < matrix[destRow].length; col++) {
    matrix[destRow][col] += scalar * matrix[sourceRow][col];
  }
};

/**
 * Rounds a number to avoid floating point precision issues
 * @param num - Number to round
 * @param precision - Decimal precision
 * @returns Rounded number
 */
export const roundNumber = (num: number, precision: number = 10): number => {
  const factor = Math.pow(10, precision);
  return Math.round(num * factor) / factor;
};

/**
 * Computes the Row Reduced Echelon Form (RREF) of a matrix
 * @param matrix - Input matrix
 * @returns RREF matrix
 */
export const computeRREF = (inputMatrix: Matrix): Matrix => {
  const matrix = copyMatrix(inputMatrix);
  const rows = matrix.length;
  if (rows === 0) return matrix;
  
  const cols = matrix[0].length;
  
  let lead = 0;
  
  for (let r = 0; r < rows; r++) {
    if (lead >= cols) {
      break;
    }
    
    let i = r;
    
    // Find row with non-zero entry in current column
    while (i < rows && roundNumber(matrix[i][lead]) === 0) {
      i++;
    }
    
    if (i === rows) {
      // No non-zero entry found, move to next column
      lead++;
      r--;
      continue;
    }
    
    // Swap rows if needed
    if (i !== r) {
      swapRows(matrix, i, r);
    }
    
    // Scale row to make leading entry 1
    const leadValue = matrix[r][lead];
    if (leadValue !== 0) {
      multiplyRow(matrix, r, 1 / leadValue);
    }
    
    // Eliminate other entries in current column
    for (let j = 0; j < rows; j++) {
      if (j !== r) {
        const factor = -matrix[j][lead];
        addMultipleOfRow(matrix, j, r, factor);
      }
    }
    
    lead++;
  }
  
  // Round numbers to avoid floating point issues
  return matrix.map(row => row.map(val => roundNumber(val)));
};

/**
 * Formats a matrix as a string
 * @param matrix - Matrix to format
 * @returns Formatted string representation
 */
export const formatMatrix = (matrix: Matrix): string => {
  return matrix.map(row => row.join(' ')).join('\n');
};

/**
 * Parses a string representation of a matrix
 * @param input - String input
 * @returns Parsed matrix
 */
export const parseMatrixString = (input: string): Matrix => {
  const rows = input.trim().split('\n');
  return rows.map(row => 
    row.trim().split(/\s+/).map(val => parseFloat(val) || 0)
  );
};

/**
 * Validates if the matrix has consistent dimensions
 * @param matrix - Matrix to validate
 * @returns True if valid, false otherwise
 */
export const isValidMatrix = (matrix: Matrix): boolean => {
  if (matrix.length === 0) return false;
  
  const firstRowLength = matrix[0].length;
  
  // Check if all rows have the same length
  return matrix.every(row => row.length === firstRowLength);
};

/**
 * Gets the rank of a matrix (number of non-zero rows in RREF)
 * @param matrix - RREF matrix
 * @returns Rank of the matrix
 */
export const getMatrixRank = (matrix: Matrix): number => {
  let rank = 0;
  
  for (const row of matrix) {
    // If any element in the row is non-zero, increment rank
    if (row.some(val => val !== 0)) {
      rank++;
    }
  }
  
  return rank;
};

/**
 * Determines if a system of equations has a unique solution
 * @param matrix - Augmented matrix in RREF
 * @returns True if unique solution, false otherwise
 */
export const hasUniqueSolution = (matrix: Matrix): boolean => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // For a unique solution, rank should equal number of variables (cols - 1)
  const rank = getMatrixRank(matrix);
  
  return rank === cols - 1;
};

/**
 * Determines if a system of equations has no solution
 * @param matrix - Augmented matrix in RREF
 * @returns True if no solution, false otherwise
 */
export const hasNoSolution = (matrix: Matrix): boolean => {
  for (const row of matrix) {
    // Check for rows where all coefficients are 0 but the constant is not
    // (0 = non-zero, which is impossible)
    const allCoeffsZero = row.slice(0, -1).every(val => val === 0);
    const constantNonZero = row[row.length - 1] !== 0;
    
    if (allCoeffsZero && constantNonZero) {
      return true;
    }
  }
  
  return false;
};

/**
 * Determines if a system of equations has infinite solutions
 * @param matrix - Augmented matrix in RREF
 * @returns True if infinite solutions, false otherwise
 */
export const hasInfiniteSolutions = (matrix: Matrix): boolean => {
  // If the system has neither a unique solution nor no solution,
  // it must have infinite solutions
  return !hasUniqueSolution(matrix) && !hasNoSolution(matrix);
};

/**
 * Extracts the solution from an RREF matrix (if unique)
 * @param matrix - RREF matrix
 * @returns Array of solution values or null if not unique
 */
export const extractSolution = (matrix: Matrix): number[] | null => {
  if (!hasUniqueSolution(matrix)) {
    return null;
  }
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const variables = cols - 1;
  
  const solution = Array(variables).fill(0);
  
  for (let i = 0; i < rows; i++) {
    // Find the leading 1 in this row
    for (let j = 0; j < variables; j++) {
      if (matrix[i][j] === 1) {
        // This row corresponds to variable j
        solution[j] = matrix[i][cols - 1];
        break;
      }
    }
  }
  
  return solution;
};

/**
 * Counts the number of free variables in an RREF matrix
 * @param matrix - RREF matrix
 * @returns Number of free variables
 */
export const countFreeVariables = (matrix: Matrix): number => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const variables = cols - 1;
  
  const rank = getMatrixRank(matrix);
  
  return variables - rank;
};
