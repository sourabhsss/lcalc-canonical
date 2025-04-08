
import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import TDEEForm from './TDEEForm';
import TDEEResult from './TDEEResult';
import TDEEContent from './components/TDEEContent';
import TDEEFAQ from './components/TDEEFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { Container } from '@/components/ui/container';

const TDEECalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    activityLevel: string;
    weightGoal: {
      goal: string;
      calories: number;
    };
    macros: {
      protein: number;
      carbs: number;
      fat: number;
    };
  } | null>(null);

  const handleCalculate = (calculatedResult: {
    bmr: number;
    tdee: number;
    activityLevel: string;
    weightGoal: {
      goal: string;
      calories: number;
    };
    macros: {
      protein: number;
      carbs: number;
      fat: number;
    };
  }) => {
    setResult(calculatedResult);
    setCalculating(true);
  };

  const handleReset = () => {
    setResult(null);
    setCalculating(false);
  };

  return (
    <Container className="max-w-4xl">
      <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-semibold">TDEE Calculator</h2>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Calculate your Total Daily Energy Expenditure (TDEE) to understand how many calories your body needs each day.
          This calculator helps estimate your maintenance calories based on your activity level and provides customized
          recommendations for weight loss, maintenance, or gain.
        </p>
        
        {!calculating ? (
          <TDEEForm onCalculate={handleCalculate} />
        ) : (
          <>
            <TDEEResult 
              bmr={result!.bmr}
              tdee={result!.tdee}
              activityLevel={result!.activityLevel}
              weightGoal={result!.weightGoal}
              macros={result!.macros}
            />
            <div className="mt-6">
              <button 
                onClick={handleReset}
                className="bg-primary/10 text-primary px-4 py-2 rounded hover:bg-primary/20 transition-colors font-medium"
              >
                Calculate Again
              </button>
            </div>
          </>
        )}
      </div>
      
      <TDEEContent />
      <RelatedCalculators />
      <TDEEFAQ />
    </Container>
  );
};

export default TDEECalculator;
