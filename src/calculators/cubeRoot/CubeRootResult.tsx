
import React from 'react';

interface CubeRootResultProps {
  input: number;
  result: number;
}

const CubeRootResult: React.FC<CubeRootResultProps> = ({ input, result }) => {
  // Format the result to a reasonable number of decimal places
  const formatResult = (num: number): string => {
    // For whole numbers or numbers with few decimals, show fewer decimal places
    if (Number.isInteger(num) || (num.toString().split('.')[1]?.length || 0) <= 5) {
      return num.toString();
    }
    return num.toFixed(8);
  };

  // Check if the result is a rational number with a simple representation
  const isPerfectCube = Number.isInteger(result);

  return (
    <div className="mt-8 bg-primary/5 rounded-lg p-6 animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Result</h3>
      
      <div className="grid grid-cols-1 gap-4 mb-6">
        <div className="bg-background rounded border border-border p-4">
          <div className="text-sm text-muted-foreground mb-1">Input Number</div>
          <div className="text-xl font-semibold">{input}</div>
        </div>
        
        <div className="bg-background rounded border border-primary/20 p-4">
          <div className="text-sm text-muted-foreground mb-1">Cube Root</div>
          <div className="text-2xl font-bold text-primary">{formatResult(result)}</div>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        <p className="mb-2">
          <span className="font-medium">Mathematical Expression:</span> ∛{input} = {formatResult(result)}
        </p>
        
        {isPerfectCube && (
          <p className="mb-2">
            <span className="font-medium">Perfect Cube:</span> Yes! {input} is a perfect cube of {formatResult(result)}.
          </p>
        )}
        
        <p>
          <span className="font-medium">Verification:</span> {formatResult(result)} × {formatResult(result)} × {formatResult(result)} = {(result * result * result).toFixed(10)}
        </p>
      </div>
    </div>
  );
};

export default CubeRootResult;
