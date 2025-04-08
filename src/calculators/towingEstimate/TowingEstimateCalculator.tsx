
import React, { useState } from 'react';
import { Calculator, Car } from 'lucide-react';
import TowingEstimateForm from './TowingEstimateForm';
import TowingEstimateResult from './TowingEstimateResult';
import { TowingEstimateInputs, TowingEstimateResult as TowingEstimateResultType, calculateTowingEstimate, towingFaqs } from './towingEstimateUtils';
import FAQSection from '@/components/FAQSection';
import RelatedCalculators from './components/RelatedCalculators';
import TowingCostsInfo from './components/TowingCostsInfo';
import EmergencyPreparedness from './components/EmergencyPreparedness';
import TowingTypeGuide from './components/TowingTypeGuide';

const TowingEstimateCalculator: React.FC = () => {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<TowingEstimateResultType | null>(null);

  const handleCalculate = (inputs: TowingEstimateInputs) => {
    const calculationResult = calculateTowingEstimate(inputs);
    setResult(calculationResult);
    setIsCalculated(true);
    
    // Scroll to results
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
          <Car className="text-primary" />
          <h2 className="text-xl font-semibold">Towing Estimate Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the estimated cost of towing your vehicle based on distance, vehicle type, time of day, and additional services. 
            This calculator helps you prepare for potential towing expenses and understand the factors that affect towing costs.
          </p>
          
          <TowingEstimateForm 
            onCalculate={handleCalculate} 
            onReset={handleReset} 
          />
          
          {isCalculated && result && (
            <TowingEstimateResult result={result} />
          )}
          
          {/* Educational content about towing */}
          <TowingCostsInfo />
          <TowingTypeGuide />
          <EmergencyPreparedness />
        </div>
      </div>
      
      <FAQSection faqs={towingFaqs} />
      
      <RelatedCalculators />
    </div>
  );
};

export default TowingEstimateCalculator;
