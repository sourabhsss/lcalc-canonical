
import { ArrowDown, ArrowUp } from 'lucide-react';
import { calculateAdditionalStatistics } from './fiveNumberSummaryUtils';

interface StatisticalSummaryProps {
  sortedData: number[] | null;
}

const StatisticalSummary = ({ sortedData }: StatisticalSummaryProps) => {
  if (!sortedData) return null;
  
  // Calculate additional statistics
  const stats = calculateAdditionalStatistics(sortedData);
  
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground mb-1">Mean</p>
        <p className="text-xl font-medium">{stats.mean.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground mt-2">Average of all values</p>
      </div>
      
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground mb-1">Standard Deviation</p>
        <p className="text-xl font-medium">{stats.stdDev.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground mt-2">Measure of dispersion</p>
      </div>
      
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground mb-1">Range</p>
        <p className="text-xl font-medium">{stats.range.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground mt-2">Max - Min</p>
      </div>
      
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground mb-1">Coefficient of Variation</p>
        <p className="text-xl font-medium">{stats.coefficientOfVariation.toFixed(2)}%</p>
        <p className="text-xs text-muted-foreground mt-2">Relative standard deviation</p>
      </div>
      
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground mb-1">Skewness</p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-medium">{stats.skewness.toFixed(2)}</p>
          {stats.skewness < -0.5 ? (
            <ArrowDown className="h-5 w-5 text-blue-500" />
          ) : stats.skewness > 0.5 ? (
            <ArrowUp className="h-5 w-5 text-red-500" />
          ) : null}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {stats.skewness < -0.5 ? "Negatively skewed" : 
            stats.skewness > 0.5 ? "Positively skewed" : 
            "Approximately symmetric"}
        </p>
      </div>
      
      <div className="border border-border rounded-md p-4">
        <p className="text-sm text-muted-foreground mb-1">Kurtosis</p>
        <p className="text-xl font-medium">{stats.kurtosis.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground mt-2">
          {stats.kurtosis < -0.5 ? "Platykurtic (flat)" : 
            stats.kurtosis > 0.5 ? "Leptokurtic (peaked)" : 
            "Mesokurtic (normal)"}
        </p>
      </div>
    </div>
  );
};

export default StatisticalSummary;
