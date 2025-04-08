
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LoveCalculatorForm from './LoveCalculatorForm';
import LoveCalculatorResult from './LoveCalculatorResult';

const LoveCalculator: React.FC = () => {
  const [calculationResult, setCalculationResult] = useState<{
    name1: string;
    name2: string;
    percentage: number;
  } | null>(null);
  
  const handleCalculate = (name1: string, name2: string, percentage: number) => {
    setCalculationResult({ name1, name2, percentage });
  };
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Column */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="pt-6">
              {!calculationResult ? (
                <LoveCalculatorForm onCalculate={handleCalculate} />
              ) : (
                <LoveCalculatorResult 
                  name1={calculationResult.name1}
                  name2={calculationResult.name2}
                  percentage={calculationResult.percentage}
                />
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Instructions Column */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">How to Use</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our Love Calculator helps you explore the potential compatibility between two people based on their names. While just for fun, it can spark interesting conversations!
                </p>
                
                <ol className="list-decimal list-inside space-y-2">
                  <li>Enter your name in the first field</li>
                  <li>Enter your partner's or crush's name in the second field</li>
                  <li>Click "Calculate Compatibility" to see your result</li>
                  <li>Review your compatibility percentage and personalized insights</li>
                </ol>
                
                <p className="text-sm italic">
                  Remember, real compatibility depends on communication, shared values, and mutual respect - not just names!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoveCalculator;
