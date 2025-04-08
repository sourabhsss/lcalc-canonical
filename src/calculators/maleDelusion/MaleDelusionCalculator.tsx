
import React, { useState } from 'react';
import { Users } from 'lucide-react';
import MaleDelusionForm from './MaleDelusionForm';
import MaleDelusionResult from './MaleDelusionResult';
import MaleDelusionContent from './components/MaleDelusionContent';
import MaleDelusionFAQ from './components/MaleDelusionFAQ';

const MaleDelusionCalculator: React.FC = () => {
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
          <h2 className="text-xl font-semibold">Male Delusion Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            This calculator helps assess realistic expectations in dating and relationships by analyzing your preferences, 
            attitudes, and beliefs. Understanding potential delusions can lead to healthier relationship dynamics and 
            more successful connections.
          </p>
          
          <MaleDelusionForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && score !== null && (
            <MaleDelusionResult score={score} answers={answers} />
          )}
        </div>
      </div>
      
      {/* Detailed Content */}
      <MaleDelusionContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <MaleDelusionFAQ />
      </div>
    </div>
  );
};

export default MaleDelusionCalculator;
