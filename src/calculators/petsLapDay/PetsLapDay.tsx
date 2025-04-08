
import { useState } from 'react';
import { Dog, Cat } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

import PetsLapDayForm from './PetsLapDayForm';
import PetsLapDayResults from './PetsLapDayResults';
import { calculatePetLapResults } from './petsLapDayUtils';
import { PetFormData, PetResultData, PetType } from './petsLapDayTypes';

const PetsLapDay = () => {
  const [petType, setPetType] = useState<PetType>('dog');
  const [results, setResults] = useState<PetResultData | null>(null);
  const { toast } = useToast();

  const handleCalculate = (formData: PetFormData) => {
    setPetType(formData.petType);
    const calculatedResults = calculatePetLapResults(formData);
    setResults(calculatedResults);
    
    toast({
      title: "Calculation complete",
      description: `Your pet's "Lap Day" will occur when they're approximately ${calculatedResults.petAgeLapDay.toFixed(1)} years old.`
    });
  };

  const handleReset = () => {
    setResults(null);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6 shadow-lg bg-white">
        <div className="flex items-center justify-center mb-6">
          {petType === 'dog' ? (
            <Dog className="mr-2 text-primary h-6 w-6" />
          ) : (
            <Cat className="mr-2 text-primary h-6 w-6" />
          )}
          <h2 className="text-2xl font-bold">Pets Lap Day Calculator</h2>
        </div>
        
        <div className="mb-6 px-4 py-3 bg-accent/10 rounded-lg text-sm">
          <p>A "Lap Day" is when your pet's age in pet years catches up to your age in human years. Find out when this special day will occur!</p>
        </div>

        <PetsLapDayForm onCalculate={handleCalculate} onReset={handleReset} />
      </Card>

      {results && (
        <PetsLapDayResults results={results} petType={petType} />
      )}
    </div>
  );
};

export default PetsLapDay;
