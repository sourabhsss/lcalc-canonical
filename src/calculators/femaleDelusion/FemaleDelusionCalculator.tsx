
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import FemaleDelusionForm from './FemaleDelusionForm';
import FemaleDelusionResult from './FemaleDelusionResult';
import FemaleDelusionContent from './components/FemaleDelusionContent';
import FemaleDelusionFAQ from './components/FemaleDelusionFAQ';

const FemaleDelusionCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const handleCalculate = (results: { score: number, answers: Record<string, number> }) => {
    setScore(results.score);
    setAnswers(results.answers);
    setCalculating(true);
  };

  const handleReset = () => {
    setScore(null);
    setAnswers({});
    setCalculating(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Users className="text-primary" />
          <h2 className="text-xl font-semibold">Female Delusion Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            This calculator helps assess realistic expectations in dating and relationships by analyzing preferences, 
            attitudes, and beliefs. Understanding potential misconceptions can lead to healthier relationship dynamics and 
            more successful connections.
          </p>
          
          <FemaleDelusionForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && score !== null && (
            <FemaleDelusionResult score={score} answers={answers} />
          )}
        </div>
      </div>
      
      {/* Detailed Content */}
      <FemaleDelusionContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <FemaleDelusionFAQ />
      </div>
    </div>
  );
};

export default FemaleDelusionCalculator;
