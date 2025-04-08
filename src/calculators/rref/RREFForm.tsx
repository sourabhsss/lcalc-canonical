
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  createEmptyMatrix, 
  Matrix, 
  isValidNumber, 
  computeRREF,
  hasUniqueSolution,
  hasNoSolution,
  hasInfiniteSolutions,
  countFreeVariables
} from './rrefUtils';
import { Plus, Minus, RefreshCw, Calculator, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface RREFFormProps {
  onCalculate: (original: Matrix, rref: Matrix) => void;
}

const RREFForm: React.FC<RREFFormProps> = ({ onCalculate }) => {
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(4); // Default to augmented matrix (3x3 + constants)
  const [matrix, setMatrix] = useState<Matrix>(() => createEmptyMatrix(rows, cols));
  const [isAugmented, setIsAugmented] = useState<boolean>(true);

  // Reset matrix when dimensions change
  useEffect(() => {
    setMatrix(createEmptyMatrix(rows, cols));
  }, [rows, cols]);

  // Update columns when toggling augmented matrix
  useEffect(() => {
    if (isAugmented) {
      // Add one column for constants
      const newCols = Math.max(rows + 1, cols);
      setCols(newCols);
    } else {
      // Regular matrix
      setCols(rows);
    }
  }, [isAugmented, rows]);

  const handleMatrixChange = (rowIndex: number, colIndex: number, value: string) => {
    if (isValidNumber(value)) {
      const updatedMatrix = [...matrix];
      updatedMatrix[rowIndex] = [...updatedMatrix[rowIndex]];
      updatedMatrix[rowIndex][colIndex] = value === '' ? 0 : parseFloat(value);
      setMatrix(updatedMatrix);
    }
  };

  const handleAddRow = () => {
    if (rows < 10) {
      setRows(rows + 1);
      const newMatrix = [...matrix, Array(cols).fill(0)];
      setMatrix(newMatrix);
    } else {
      toast.warning("Maximum matrix size is 10x10");
    }
  };

  const handleRemoveRow = () => {
    if (rows > 1) {
      setRows(rows - 1);
      const newMatrix = matrix.slice(0, -1);
      setMatrix(newMatrix);
    }
  };

  const handleAddColumn = () => {
    if (cols < 10) {
      setCols(cols + 1);
      const newMatrix = matrix.map(row => [...row, 0]);
      setMatrix(newMatrix);
    } else {
      toast.warning("Maximum matrix size is 10x10");
    }
  };

  const handleRemoveColumn = () => {
    if (cols > (isAugmented ? 2 : 1)) {
      setCols(cols - 1);
      const newMatrix = matrix.map(row => row.slice(0, -1));
      setMatrix(newMatrix);
    }
  };

  const handleReset = () => {
    setMatrix(createEmptyMatrix(rows, cols));
  };

  const handleCalculate = () => {
    try {
      const rrefMatrix = computeRREF(matrix);
      onCalculate(matrix, rrefMatrix);
      
      // Analyze solution characteristics for augmented matrices
      if (isAugmented) {
        if (hasNoSolution(rrefMatrix)) {
          toast.info("The system of equations has no solution");
        } else if (hasUniqueSolution(rrefMatrix)) {
          toast.success("The system of equations has a unique solution");
        } else if (hasInfiniteSolutions(rrefMatrix)) {
          const freeVars = countFreeVariables(rrefMatrix);
          toast.info(`The system of equations has infinite solutions with ${freeVars} free variable${freeVars !== 1 ? 's' : ''}`);
        }
      } else {
        toast.success("Matrix reduced to RREF successfully");
      }
    } catch (error) {
      toast.error("Error performing calculation. Please check your inputs.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Label htmlFor="matrix-type">Matrix Type:</Label>
            <div className="flex items-center space-x-2">
              <Button 
                variant={isAugmented ? "default" : "outline"}
                onClick={() => setIsAugmented(true)}
                size="sm"
              >
                Augmented
              </Button>
              <Button 
                variant={!isAugmented ? "default" : "outline"}
                onClick={() => setIsAugmented(false)}
                size="sm"
              >
                Regular
              </Button>
            </div>
          </div>
          
          <div className="ml-auto flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleAddRow}
              disabled={rows >= 10}
            >
              <Plus size={16} className="mr-1" /> Row
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRemoveRow}
              disabled={rows <= 1}
            >
              <Minus size={16} className="mr-1" /> Row
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleAddColumn}
              disabled={cols >= 10}
            >
              <Plus size={16} className="mr-1" /> Column
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRemoveColumn}
              disabled={cols <= (isAugmented ? 2 : 1)}
            >
              <Minus size={16} className="mr-1" /> Column
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleReset}
            >
              <RefreshCw size={16} className="mr-1" /> Reset
            </Button>
          </div>
        </div>
        
        <div className="mt-4 overflow-x-auto pb-4">
          <div className="inline-block min-w-min">
            {matrix.map((row, rowIndex) => (
              <div key={rowIndex} className="flex mb-2">
                {row.map((cell, colIndex) => (
                  <div 
                    key={colIndex} 
                    className={`mr-2 ${isAugmented && colIndex === cols - 1 ? 'ml-4 relative' : ''}`}
                  >
                    {isAugmented && colIndex === cols - 1 && (
                      <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                        <ArrowRight size={16} />
                      </div>
                    )}
                    <Input
                      className="w-16 text-center"
                      value={cell || ''}
                      onChange={e => handleMatrixChange(rowIndex, colIndex, e.target.value)}
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={handleCalculate} 
          size="lg"
          className="w-full max-w-xs"
        >
          <Calculator className="mr-2" />
          Calculate RREF
        </Button>
      </div>
      
      <div className="bg-muted/30 p-4 rounded-md">
        <h3 className="text-sm font-medium mb-2">Instructions:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Enter the matrix elements in the fields above.</li>
          <li>• For augmented matrices, the last column represents the constants (b in Ax = b).</li>
          <li>• Use the buttons to adjust matrix dimensions or reset values.</li>
          <li>• Click "Calculate RREF" to perform row reduction.</li>
        </ul>
      </div>
    </div>
  );
};

export default RREFForm;
