
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, ListTree, ArrowUp, ArrowDown } from 'lucide-react';

interface PercentageIncreaseResultProps {
  results: {
    oldValue: number;
    newValue: number;
    percentageChange: number;
    absoluteChange: number;
    isIncrease: boolean;
    formula: string;
    steps: Array<{
      description: string;
      calculation: string;
      result: number | string;
    }>;
  };
}

const PercentageIncreaseResult: React.FC<PercentageIncreaseResultProps> = ({ results }) => {
  // Format numbers for display
  const formatNumber = (value: number): string => {
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  };

  // Format percentage for display
  const formatPercentage = (value: number): string => {
    return `${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}%`;
  };

  // Determine sign for display
  const getChangeSign = () => {
    if (results.percentageChange === 0) return '';
    return results.isIncrease ? '+' : '-';
  };

  return (
    <Card className="w-full h-full shadow-sm">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-xl">Percentage Change Results</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="result">
          <TabsList className="mb-4">
            <TabsTrigger value="result" className="flex items-center gap-1">
              <Calculator className="w-4 h-4" />
              <span>Result</span>
            </TabsTrigger>
            <TabsTrigger value="steps" className="flex items-center gap-1">
              <ListTree className="w-4 h-4" />
              <span>Calculation Steps</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="result">
            <div className="space-y-6">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Percentage Change</div>
                <div className="flex items-center justify-center">
                  {results.isIncrease ? (
                    <ArrowUp className="w-6 h-6 text-green-500 mr-2" />
                  ) : results.percentageChange === 0 ? (
                    <span className="w-6 h-6 mr-2"></span>
                  ) : (
                    <ArrowDown className="w-6 h-6 text-red-500 mr-2" />
                  )}
                  <div className={`text-4xl font-bold font-mono ${
                    results.isIncrease 
                      ? 'text-green-600' 
                      : results.percentageChange === 0 
                        ? 'text-gray-600' 
                        : 'text-red-600'
                  }`}>
                    {getChangeSign()}{formatPercentage(Math.abs(results.percentageChange))}
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <span className="inline-block px-3 py-1 rounded bg-background border">
                    {results.formula}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Values</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Original Value:</span>
                      <span className="font-mono">{formatNumber(results.oldValue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>New Value:</span>
                      <span className="font-mono">{formatNumber(results.newValue)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Changes</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Absolute Change:</span>
                      <span className="font-mono">
                        {results.absoluteChange >= 0 ? '+' : ''}
                        {formatNumber(results.absoluteChange)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Relative Change:</span>
                      <span className="font-mono">
                        {results.absoluteChange >= 0 ? '+' : ''}
                        {formatPercentage(Math.abs(results.percentageChange))}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">What This Means</h3>
                <p className="text-muted-foreground">
                  {results.percentageChange === 0 ? (
                    <>There is no change between the original value ({formatNumber(results.oldValue)}) and the new value ({formatNumber(results.newValue)}).</>
                  ) : results.isIncrease ? (
                    <>The value increased from {formatNumber(results.oldValue)} to {formatNumber(results.newValue)}, representing an increase of {formatPercentage(results.percentageChange)}. In absolute terms, this is an increase of {formatNumber(results.absoluteChange)}.</>
                  ) : (
                    <>The value decreased from {formatNumber(results.oldValue)} to {formatNumber(results.newValue)}, representing a decrease of {formatPercentage(Math.abs(results.percentageChange))}. In absolute terms, this is a decrease of {formatNumber(Math.abs(results.absoluteChange))}.</>
                  )}
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="steps">
            <div className="space-y-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Formula Used</h3>
                <div className="p-3 bg-background rounded border font-mono">
                  {results.formula}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  The percentage change formula calculates the relative change between two values, expressed as a percentage of the original value.
                </p>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="font-semibold p-3 bg-muted">Calculation Steps</div>
                <div className="divide-y">
                  {results.steps.map((step, index) => (
                    <div key={index} className="p-3">
                      <div className="font-medium">{step.description}</div>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <div className="font-mono bg-muted/20 px-2 py-1 rounded text-sm">
                          {step.calculation}
                        </div>
                        <div className="text-sm">=</div>
                        <div className="font-mono bg-primary/5 px-2 py-1 rounded text-sm font-semibold">
                          {typeof step.result === 'number' ? (
                            step.description.includes('Percentage') 
                              ? formatPercentage(step.result as number) 
                              : formatNumber(step.result as number)
                          ) : (
                            step.result
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PercentageIncreaseResult;
