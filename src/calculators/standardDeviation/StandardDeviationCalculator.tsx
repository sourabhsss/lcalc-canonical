import React from 'react';
import { Container } from '@/components/ui/container';
import StandardDeviationForm from './StandardDeviationForm';
import StandardDeviationResult from './StandardDeviationResult';
import StandardDeviationContent from './components/StandardDeviationContent';
import StandardDeviationFAQ from './components/StandardDeviationFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { calculateStatistics } from './standardDeviationUtils';
import { useStandardDeviationStore } from './standardDeviationStore';

const StandardDeviationCalculator: React.FC = () => {
  const { setData, setResults, clearResults } = useStandardDeviationStore();

  const handleCalculate = (inputData: number[]) => {
    if (inputData.length > 0) {
      setData({ dataPoints: inputData, isPopulation: false });
      const stats = calculateStatistics(inputData);
      setResults({
        mean: stats.mean,
        standardDeviation: stats.standardDeviation,
        variance: stats.variance,
        min: stats.min,
        max: stats.max,
        range: stats.range,
        sum: stats.sum,
        count: stats.count,
        dataPoints: inputData
      });
    } else {
      clearResults();
    }
  };

  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <StandardDeviationForm onCalculate={handleCalculate} />
        </div>
        
        <div className="lg:col-span-2">
          <StandardDeviationResult />
        </div>
      </div>
      
      <div className="mt-16">
        <StandardDeviationContent />
        <StandardDeviationFAQ />
        <RelatedCalculators />
      </div>
    </Container>
  );
};

export default StandardDeviationCalculator;
