
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Matrix, extractSolution, hasUniqueSolution, hasInfiniteSolutions, countFreeVariables } from './rrefUtils';
import { Clipboard } from 'lucide-react';
import { toast } from 'sonner';

interface RREFResultProps {
  originalMatrix: Matrix;
  rrefMatrix: Matrix | null;
}

const RREFResult: React.FC<RREFResultProps> = ({ originalMatrix, rrefMatrix }) => {
  if (!rrefMatrix) return null;
  
  const isAugmented = originalMatrix[0].length !== originalMatrix.length;
  const variables = isAugmented ? originalMatrix[0].length - 1 : originalMatrix[0].length;
  
  const copyToClipboard = (matrix: Matrix) => {
    const matrixText = matrix.map(row => row.join('\t')).join('\n');
    navigator.clipboard.writeText(matrixText);
    toast.success('Matrix copied to clipboard');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Original Matrix</span>
            <button 
              onClick={() => copyToClipboard(originalMatrix)}
              className="hover:text-primary text-muted-foreground"
              title="Copy to clipboard"
            >
              <Clipboard size={16} />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                {originalMatrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td 
                        key={colIndex} 
                        className={`px-3 py-2 text-center ${
                          isAugmented && colIndex === row.length - 1 
                            ? 'border-l-2 border-border' 
                            : ''
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-between">
            <span>Row Reduced Echelon Form (RREF)</span>
            <button 
              onClick={() => copyToClipboard(rrefMatrix)}
              className="hover:text-primary text-muted-foreground"
              title="Copy to clipboard"
            >
              <Clipboard size={16} />
            </button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <tbody>
                {rrefMatrix.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td 
                        key={colIndex} 
                        className={`px-3 py-2 text-center ${
                          cell === 1 || cell === -1 ? 'font-medium' : ''
                        } ${
                          isAugmented && colIndex === row.length - 1 
                            ? 'border-l-2 border-border' 
                            : ''
                        }`}
                      >
                        {cell === 0 ? 0 : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {isAugmented && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Solution Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            {hasUniqueSolution(rrefMatrix) ? (
              <div>
                <p className="mb-2 text-green-600 font-medium">
                  The system has a unique solution.
                </p>
                <div className="mt-3 space-y-1">
                  {extractSolution(rrefMatrix)?.map((value, index) => (
                    <p key={index}>
                      {index < variables && (
                        <span>
                          <span className="font-medium">x<sub>{index + 1}</sub></span> = {value}
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ) : hasInfiniteSolutions(rrefMatrix) ? (
              <div>
                <p className="mb-2 text-blue-600 font-medium">
                  The system has infinitely many solutions.
                </p>
                <p className="text-muted-foreground">
                  Number of free variables: {countFreeVariables(rrefMatrix)}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The solution can be expressed in terms of free variables. Each free variable can be assigned any value.
                </p>
              </div>
            ) : (
              <p className="text-red-600 font-medium">
                The system has no solution.
              </p>
            )}
          </CardContent>
        </Card>
      )}
      
      <div className="bg-muted/30 p-4 rounded-md">
        <h3 className="text-sm font-medium mb-2">About RREF:</h3>
        <p className="text-sm text-muted-foreground">
          A matrix is in Row Reduced Echelon Form (RREF) when:
        </p>
        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
          <li>• All rows with only zeros are at the bottom.</li>
          <li>• The leading entry (first non-zero) in each non-zero row is 1.</li>
          <li>• The leading entry of each row is in a column to the right of the leading entry of the row above it.</li>
          <li>• All entries in a column above and below a leading 1 are zeros.</li>
        </ul>
      </div>
    </div>
  );
};

export default RREFResult;
