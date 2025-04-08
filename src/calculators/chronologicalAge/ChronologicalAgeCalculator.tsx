
import React, { useState } from 'react';
import { CalendarClock } from 'lucide-react';
import ChronologicalAgeForm from './ChronologicalAgeForm';
import ChronologicalAgeResult from './ChronologicalAgeResult';
import ChronologicalAgeContent from './components/ChronologicalAgeContent';
import ChronologicalAgeFAQ from './components/ChronologicalAgeFAQ';

const ChronologicalAgeCalculator: React.FC = () => {
  const [calculatingAge, setCalculatingAge] = useState<boolean>(false);
  const [ageResult, setAgeResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    birthDate: Date;
    targetDate: Date;
  } | null>(null);

  const handleCalculate = (result: {
    years: number;
    months: number;
    days: number;
    totalDays: number;
    birthDate: Date;
    targetDate: Date;
  }) => {
    setAgeResult(result);
    setCalculatingAge(true);
  };

  const handleReset = () => {
    setAgeResult(null);
    setCalculatingAge(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <CalendarClock className="text-primary" />
          <h2 className="text-xl font-semibold">Chronological Age Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate exact age in years, months, and days between any two dates. Perfect for determining precise age 
            for medical records, developmental assessments, legal documentation, or just for personal knowledge.
          </p>
          
          <ChronologicalAgeForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculatingAge && ageResult && (
            <ChronologicalAgeResult 
              years={ageResult.years} 
              months={ageResult.months} 
              days={ageResult.days} 
              totalDays={ageResult.totalDays}
              birthDate={ageResult.birthDate}
              targetDate={ageResult.targetDate}
            />
          )}
        </div>
      </div>
      
      {/* Detailed Content */}
      <ChronologicalAgeContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <ChronologicalAgeFAQ />
      </div>
    </div>
  );
};

export default ChronologicalAgeCalculator;
