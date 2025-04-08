
interface DistributionBarProps {
  result: {
    min: number | null;
    q1: number | null;
    median: number | null;
    q3: number | null;
    max: number | null;
    iqr: number | null;
    outliers: number[] | null;
    sortedData: number[] | null;
  };
}

const DistributionBar = ({ result }: DistributionBarProps) => {
  if (!result.sortedData) return null;
  
  // Get min and max values for scaling
  const dataMin = result.min || 0;
  const dataMax = result.max || 1;
  const range = dataMax - dataMin;
  
  // Function to calculate the position percentage
  const getPosition = (value: number) => {
    return ((value - dataMin) / range) * 100;
  };
  
  return (
    <div className="mt-6">
      <h4 className="text-md font-medium mb-3">Data Distribution Visualization</h4>
      <div className="relative h-8 w-full bg-muted rounded-md mb-1">
        {/* Min marker */}
        <div 
          className="absolute bottom-0 h-8 w-1 bg-primary/70" 
          style={{ left: `${getPosition(result.min!)}%` }}
        ></div>
        
        {/* Q1 marker */}
        <div 
          className="absolute bottom-0 h-8 w-1 bg-primary/70" 
          style={{ left: `${getPosition(result.q1!)}%` }}
        ></div>
        
        {/* Median marker */}
        <div 
          className="absolute bottom-0 h-8 w-1 bg-primary" 
          style={{ left: `${getPosition(result.median!)}%` }}
        ></div>
        
        {/* Q3 marker */}
        <div 
          className="absolute bottom-0 h-8 w-1 bg-primary/70" 
          style={{ left: `${getPosition(result.q3!)}%` }}
        ></div>
        
        {/* Max marker */}
        <div 
          className="absolute bottom-0 h-8 w-1 bg-primary/70" 
          style={{ left: `${getPosition(result.max!)}%` }}
        ></div>
        
        {/* IQR box (middle 50%) */}
        <div 
          className="absolute bottom-0 h-8 bg-primary/30"
          style={{ 
            left: `${getPosition(result.q1!)}%`,
            width: `${getPosition(result.q3!) - getPosition(result.q1!)}%`
          }}
        ></div>
        
        {/* Outliers */}
        {result.outliers && result.outliers.map((value, index) => (
          <div 
            key={index}
            className="absolute bottom-0 h-8 w-1 bg-destructive" 
            style={{ left: `${getPosition(value)}%` }}
            title={`Outlier: ${value}`}
          ></div>
        ))}
      </div>
      
      {/* Labels */}
      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>{result.min?.toFixed(2)}</span>
        <span>{result.q1?.toFixed(2)}</span>
        <span>{result.median?.toFixed(2)}</span>
        <span>{result.q3?.toFixed(2)}</span>
        <span>{result.max?.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default DistributionBar;
