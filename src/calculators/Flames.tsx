
import { useState } from 'react';
import { Flame } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import FlamesForm from './flames/FlamesForm';
import FlamesResult from './flames/FlamesResult';
import { calculateFLAMES, flamesRelationships } from './flames/flamesUtils';

const FlamesCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<{
    relationship: string;
    description: string;
    percentage: number;
  } | null>(null);
  
  const { toast } = useToast();
  
  const handleCalculate = () => {
    // Validate inputs
    if (!name1.trim() || !name2.trim()) {
      toast({
        title: "Missing information",
        description: "Please enter both names to calculate.",
        variant: "destructive"
      });
      return;
    }
    
    const calculationResult = calculateFLAMES(name1, name2);
    
    if (calculationResult) {
      setResult({
        relationship: calculationResult.relationship,
        description: calculationResult.description,
        percentage: calculationResult.percentage
      });
      
      toast({
        title: "Results calculated!",
        description: `Your FLAMES result is: ${calculationResult.relationship} ${calculationResult.emoji}`
      });
    }
  };

  const resetCalculator = () => {
    setName1('');
    setName2('');
    setResult(null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6 shadow-lg bg-white">
        <div className="flex items-center justify-center mb-6">
          <Flame className="mr-2 text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold">FLAMES Calculator</h2>
        </div>
        
        <FlamesForm
          name1={name1}
          setName1={setName1}
          name2={name2}
          setName2={setName2}
          onCalculate={handleCalculate}
          onReset={resetCalculator}
        />
      </Card>
      
      {result ? (
        <FlamesResult result={result} />
      ) : (
        <Card className="mt-8 p-6 bg-primary/5 shadow-md text-center">
          <div className="py-8">
            <Flame className="mx-auto text-primary/30 h-16 w-16 mb-4" />
            <h3 className="text-xl font-bold text-primary/70">Enter two names above to discover your relationship compatibility</h3>
            <p className="text-muted-foreground mt-2">
              Our FLAMES calculator will analyze the names and predict your relationship type
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FlamesCalculator;
