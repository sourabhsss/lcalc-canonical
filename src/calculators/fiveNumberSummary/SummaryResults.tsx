
import { Info } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface SummaryResultsProps {
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

const SummaryResults = ({ result }: SummaryResultsProps) => {
  if (result.min === null) return null;
  
  return (
    <div className="mt-6 animate-in fade-in-50 duration-300">
      <h3 className="text-lg font-semibold mb-4">Five Number Summary Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="border border-border rounded-md p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Minimum</p>
          <p className="text-xl font-medium">{result.min.toFixed(2)}</p>
        </div>
        <div className="border border-border rounded-md p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">First Quartile (Q1)</p>
          <p className="text-xl font-medium">{result.q1?.toFixed(2)}</p>
        </div>
        <div className="border border-primary/50 bg-primary/5 rounded-md p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Median</p>
          <p className="text-xl font-medium">{result.median?.toFixed(2)}</p>
        </div>
        <div className="border border-border rounded-md p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Third Quartile (Q3)</p>
          <p className="text-xl font-medium">{result.q3?.toFixed(2)}</p>
        </div>
        <div className="border border-border rounded-md p-4 text-center">
          <p className="text-sm text-muted-foreground mb-1">Maximum</p>
          <p className="text-xl font-medium">{result.max?.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="mt-4 p-4 border border-primary/20 bg-primary/5 rounded-md">
        <div className="flex items-start gap-2">
          <Info className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
          <div>
            <p className="font-medium">Interquartile Range (IQR)</p>
            <p className="text-muted-foreground">
              IQR = Q3 - Q1 = {result.iqr?.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      
      {/* Outliers section */}
      {result.outliers && result.outliers.length > 0 && (
        <div className="mt-4 p-4 border border-destructive/20 bg-destructive/5 rounded-md">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 mt-1 flex-shrink-0 text-destructive" />
            <div>
              <p className="font-medium">Potential Outliers Detected</p>
              <p className="text-muted-foreground">
                Values: {result.outliers.map(v => v.toFixed(2)).join(', ')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Outliers are values below {(result.q1! - 1.5 * result.iqr!).toFixed(2)} or 
                above {(result.q3! + 1.5 * result.iqr!).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Separator className="my-6" />
      
      <div className="mt-6">
        <h4 className="text-md font-medium mb-2">Interpretation</h4>
        <p className="text-sm text-muted-foreground">
          The five-number summary provides a concise description of your data distribution. 
          The minimum ({result.min?.toFixed(2)}) and maximum ({result.max?.toFixed(2)}) show the range of your data.
          The median ({result.median?.toFixed(2)}) represents the middle value, with 50% of the data below it.
          Q1 ({result.q1?.toFixed(2)}) is the first quartile, with 25% of the data below it.
          Q3 ({result.q3?.toFixed(2)}) is the third quartile, with 75% of the data below it.
          The IQR ({result.iqr?.toFixed(2)}) represents the middle 50% of your data and helps identify potential outliers.
        </p>
        
        {result.iqr && (
          <div className="mt-4 p-4 bg-secondary/20 rounded-md">
            <h5 className="font-medium mb-1">Data Analysis Insights</h5>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>
                <strong>Spread:</strong> The data has a range of {(result.max! - result.min!).toFixed(2)} units 
                and an IQR of {result.iqr.toFixed(2)} units.
              </li>
              <li>
                <strong>Central Tendency:</strong> The median is {result.median?.toFixed(2)}, 
                representing the central value.
              </li>
              <li>
                <strong>Distribution:</strong> {
                  result.outliers && result.outliers.length > 0 
                    ? `Your data contains ${result.outliers.length} potential outlier(s), which may skew statistical analyses.`
                    : `Your data appears to be free of outliers based on the 1.5 × IQR rule.`
                }
              </li>
              <li>
                <strong>Middle 50%:</strong> The middle 50% of your data falls between {result.q1?.toFixed(2)} and {result.q3?.toFixed(2)}.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryResults;
