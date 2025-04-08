
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calculator, ListTree } from 'lucide-react';

interface CombinationsResultProps {
  results: {
    n: number;
    r: number;
    combinations: number;
    formula: string;
    steps: Array<{
      description: string;
      calculation: string;
      result: number | string;
    }>;
  };
}

const CombinationsResult: React.FC<CombinationsResultProps> = ({ results }) => {
  // Format large numbers with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <Card className="w-full h-full shadow-sm">
      <CardHeader className="bg-primary/5">
        <CardTitle className="text-xl">Combinations Result</CardTitle>
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
                <div className="text-sm text-muted-foreground mb-1">Number of ways to choose {results.r} items from {results.n} items</div>
                <div className="text-4xl font-bold font-mono">{formatNumber(results.combinations)}</div>
                <div className="mt-4 text-sm">
                  <span className="inline-block px-3 py-1 rounded bg-background border">
                    {results.formula}
                  </span>
                </div>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">What This Means</h3>
                <p className="text-muted-foreground">
                  There are <strong>{formatNumber(results.combinations)}</strong> different ways to select {results.r} items from a set of {results.n} items, where the order does not matter.
                </p>
                <p className="text-muted-foreground mt-2">
                  This is equivalent to the binomial coefficient <span className="font-serif">({results.n} choose {results.r})</span>.
                </p>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Notation</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px]">
                    <div className="font-semibold text-sm mb-1">Standard Notation</div>
                    <div className="p-2 bg-background rounded border font-mono">
                      C({results.n}, {results.r}) = {formatNumber(results.combinations)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="font-semibold text-sm mb-1">Binomial Coefficient</div>
                    <div className="p-2 bg-background rounded border font-mono">
                      ({results.n} choose {results.r}) = {formatNumber(results.combinations)}
                    </div>
                  </div>
                </div>
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
                  The combination formula calculates the number of ways to select r items from a set of n items, where order doesn't matter.
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
                          {typeof step.result === 'number' ? formatNumber(step.result) : step.result}
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

export default CombinationsResult;
