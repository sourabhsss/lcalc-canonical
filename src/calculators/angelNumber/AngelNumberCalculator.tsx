
import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Card } from '@/components/ui/card';
import AngelNumberForm from './AngelNumberForm';
import AngelNumberResult from './AngelNumberResult';
import { getAngelNumberMeaning, getSingleDigitMeaning } from './angelNumberUtils';

const AngelNumberCalculator = () => {
  const [result, setResult] = useState<{
    number: string;
    type: 'angel' | 'lifePath' | 'name';
    title: string;
    meaning: string;
    guidance: string;
    lifeAreas: string[];
  } | null>(null);
  
  const handleCalculate = (angelNumber: string) => {
    const meaning = getAngelNumberMeaning(angelNumber);
    
    if (meaning) {
      setResult({
        number: angelNumber,
        type: 'angel',
        title: meaning.title,
        meaning: meaning.meaning,
        guidance: meaning.guidance,
        lifeAreas: meaning.lifeAreas
      });
    }
  };
  
  const handleCalculateLifePath = (lifePathNumber: string) => {
    // Use existing function to get meaning for life path number
    const meaning = getSingleDigitMeaning(lifePathNumber);
    
    if (meaning) {
      setResult({
        number: lifePathNumber,
        type: 'lifePath',
        title: `Life Path ${lifePathNumber}: ${meaning.title}`,
        meaning: `As a Life Path ${lifePathNumber}, your core essence embodies: ${meaning.meaning}`,
        guidance: `Your life's journey suggests: ${meaning.guidance}`,
        lifeAreas: meaning.lifeAreas
      });
    }
  };
  
  const handleCalculateNameNumber = (nameNumber: string) => {
    // Use existing function to get meaning for name number
    const meaning = getSingleDigitMeaning(nameNumber);
    
    if (meaning) {
      setResult({
        number: nameNumber,
        type: 'name',
        title: `Name Number ${nameNumber}: ${meaning.title}`,
        meaning: `Your name number ${nameNumber} indicates: ${meaning.meaning}`,
        guidance: `This suggests that: ${meaning.guidance}`,
        lifeAreas: meaning.lifeAreas
      });
    }
  };
  
  const resetCalculator = () => {
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6 shadow-lg bg-white">
        <div className="flex items-center justify-center mb-6">
          <Calculator className="mr-2 text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold">Angel Number Calculator</h2>
        </div>
        
        <AngelNumberForm
          onCalculate={handleCalculate}
          onCalculateLifePath={handleCalculateLifePath}
          onCalculateNameNumber={handleCalculateNameNumber}
          onReset={resetCalculator}
        />
      </Card>
      
      <AngelNumberResult result={result} />
    </div>
  );
};

export default AngelNumberCalculator;
