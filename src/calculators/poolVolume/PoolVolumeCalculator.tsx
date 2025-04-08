
import React, { useState } from 'react';
import { Calculator, Droplet } from 'lucide-react';
import PoolVolumeForm from './PoolVolumeForm';
import PoolVolumeResult from './PoolVolumeResult';
import { 
  PoolDimensions, 
  VolumeUnit, 
  PoolShape,
  PoolVolumeResult as PoolVolumeResultType,
  calculatePoolVolume,
  generatePoolVolumeResult,
  poolFaqs
} from './poolVolumeUtils';
import FAQSection from '@/components/FAQSection';
import PoolTypesGuide from './components/PoolTypesGuide';
import PoolSafetyGuide from './components/PoolSafetyGuide';
import RelatedCalculators from './components/RelatedCalculators';

const PoolVolumeCalculator: React.FC = () => {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<PoolVolumeResultType | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<VolumeUnit>('gallons');

  const handleCalculate = (volume: number, dimensions: PoolDimensions, unit: VolumeUnit) => {
    const calculationResult = generatePoolVolumeResult(volume, dimensions.averageDepth > 10 ? 'meters' : 'feet', unit);
    setResult(calculationResult);
    setIsCalculated(true);
    setSelectedUnit(unit);
    
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
          <Droplet className="text-primary" />
          <h2 className="text-xl font-semibold">Pool Volume Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate the exact volume of your swimming pool in gallons, liters, or cubic meters. 
            This calculator provides precise measurements for different pool shapes, helping you 
            determine water requirements, chemical dosages, heating costs, and more.
          </p>
          
          <PoolVolumeForm 
            onCalculate={handleCalculate} 
            onReset={handleReset} 
          />
          
          {isCalculated && result && (
            <PoolVolumeResult result={result} unit={selectedUnit} />
          )}
          
          {/* Educational content about pool types and volumes */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Why Pool Volume Matters</h3>
                <p className="text-blue-700">
                  Knowing your pool's exact volume is critical for proper pool maintenance and operation.
                  It allows you to determine precise chemical dosages, filter run times, heating requirements,
                  and water costs. Incorrect volume calculations can lead to water chemistry imbalances,
                  wasted chemicals, inefficient heating, and potential equipment damage.
                </p>
              </div>
            </div>
          </div>
          
          <PoolTypesGuide />
          <PoolSafetyGuide />
        </div>
      </div>
      
      <FAQSection faqs={poolFaqs} />
      
      <RelatedCalculators />
    </div>
  );
};

export default PoolVolumeCalculator;
