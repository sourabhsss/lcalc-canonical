
import React, { useState } from 'react';
import { Calculator, ChefHat } from 'lucide-react';
import AirFryerForm from './AirFryerForm';
import AirFryerResult from './AirFryerResult';
import { AirFryerInputs, AirFryerResult as AirFryerResultType, calculateAirFryerTime, airFryerFaqs } from './airFryerUtils';
import FAQSection from '@/components/FAQSection';
import FoodTypeGuide from './components/FoodTypeGuide';
import AirFryerBenefits from './components/AirFryerBenefits';
import CookingTips from './components/CookingTips';
import RelatedCalculators from './components/RelatedCalculators';

const AirFryerCalculator: React.FC = () => {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<AirFryerResultType | null>(null);

  const handleCalculate = (inputs: AirFryerInputs) => {
    const calculationResult = calculateAirFryerTime(inputs);
    setResult(calculationResult);
    setIsCalculated(true);
    
    // Scroll to results if already calculated once
    setTimeout(() => {
      if (isCalculated) {
        window.scrollBy({
          top: 200,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleReset = () => {
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <ChefHat className="text-primary" />
          <h2 className="text-xl font-semibold">Air Fryer Time & Temperature Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the optimal cooking time and temperature for your air fryer based on food type, 
            weight, thickness, and specific air fryer characteristics. Get precise results, energy 
            savings estimates, and helpful cooking tips.
          </p>
          
          <AirFryerForm 
            onCalculate={handleCalculate} 
            onReset={handleReset} 
          />
          
          {isCalculated && result && (
            <AirFryerResult result={result} />
          )}
          
          {/* Educational content about air frying */}
          <FoodTypeGuide />
          <AirFryerBenefits />
          <CookingTips />
        </div>
      </div>
      
      <FAQSection faqs={airFryerFaqs} />
      
      <RelatedCalculators />
    </div>
  );
};

export default AirFryerCalculator;
