import React from 'react';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { useStandardDeviationStore } from '@/calculators/standardDeviation/standardDeviationStore';

const StandardDeviationResult: React.FC = () => {
  const { results } = useStandardDeviationStore();

  if (!results) return null;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mean</h3>
            <p className="text-2xl font-bold">{results.mean.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Standard Deviation</h3>
            <p className="text-2xl font-bold">{results.standardDeviation.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Summary Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Variance</p>
            <p className="text-xl font-bold">{results.variance.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Range</p>
            <p className="text-xl font-bold">{results.range.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Count</p>
            <p className="text-xl font-bold">{results.count}</p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Data Range</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Minimum</p>
            <p className="text-xl font-bold">{results.min.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Maximum</p>
            <p className="text-xl font-bold">{results.max.toFixed(2)}</p>
          </div>
        </div>
      </Card>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          The standard deviation indicates how spread out the values are from the mean. A larger standard deviation means the data is more spread out.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default StandardDeviationResult;
