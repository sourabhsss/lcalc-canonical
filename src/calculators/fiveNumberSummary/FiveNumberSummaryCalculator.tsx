
import { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import InputForm from './InputForm';
import SummaryResults from './SummaryResults';
import DistributionBar from './DistributionBar';
import StatisticalSummary from './StatisticalSummary';
import { calculateFiveNumberSummary } from './fiveNumberSummaryUtils';

const FiveNumberSummaryCalculator = () => {
  const [inputNumbers, setInputNumbers] = useState<string>('');
  const [result, setResult] = useState<{
    min: number | null;
    q1: number | null;
    median: number | null;
    q3: number | null;
    max: number | null;
    iqr: number | null;
    outliers: number[] | null;
    sortedData: number[] | null;
  }>({
    min: null,
    q1: null,
    median: null,
    q3: null,
    max: null,
    iqr: null,
    outliers: null,
    sortedData: null
  });
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('standard');
  const { toast } = useToast();

  const handleCalculate = () => {
    try {
      const summaryResult = calculateFiveNumberSummary(inputNumbers, activeTab);
      setResult(summaryResult);
      setError(null);
      
      toast({
        title: "Calculation Complete",
        description: `Five number summary generated successfully.`,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while calculating. Please check your input.');
      console.error(err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCalculate();
  };

  const handleClear = () => {
    setInputNumbers('');
    setResult({
      min: null,
      q1: null,
      median: null,
      q3: null,
      max: null,
      iqr: null,
      outliers: null,
      sortedData: null
    });
    setError(null);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (result.min !== null) {
      // Recalculate if we already have results
      setTimeout(handleCalculate, 0);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="flex items-center gap-2 text-primary">
            <Calculator className="h-5 w-5" />
            Five Number Summary Calculator
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-6">
          <InputForm 
            inputNumbers={inputNumbers}
            setInputNumbers={setInputNumbers}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
            handleSubmit={handleSubmit}
            handleClear={handleClear}
          />
          
          {error && (
            <Alert variant="destructive" className="mt-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <SummaryResults result={result} />
          
          {result.min !== null && (
            <>
              {/* Distribution visualization */}
              <DistributionBar result={result} />
              
              {/* Additional statistics */}
              <h3 className="text-lg font-semibold mt-8 mb-4">Additional Statistics</h3>
              <StatisticalSummary sortedData={result.sortedData} />
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FiveNumberSummaryCalculator;
