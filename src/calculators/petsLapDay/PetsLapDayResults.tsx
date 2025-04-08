
import { Card } from '@/components/ui/card';
import { PetResultData } from './petsLapDayTypes';

interface PetsLapDayResultsProps {
  results: PetResultData;
  petType: 'dog' | 'cat';
}

const PetsLapDayResults = ({ results, petType }: PetsLapDayResultsProps) => {
  return (
    <Card className="mt-8 p-6 bg-primary/5 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center">Lap Day Results</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-muted-foreground mb-2">Your Pet's Age in Human Years</p>
          <p className="text-2xl font-bold text-primary">{results.petAgeInHumanYears} years</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-muted-foreground mb-2">Lap Day Will Occur When Pet is</p>
          <p className="text-2xl font-bold">{results.petAgeLapDay.toFixed(1)} years old</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-muted-foreground mb-2">Your Age at Pet's Lap Day</p>
          <p className="text-2xl font-bold">{results.ownerAgeLapDay} years old</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <p className="text-muted-foreground mb-2">Years Until Lap Day</p>
          <p className="text-2xl font-bold">{results.yearsUntilLapDay.toFixed(1)} years</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h4 className="font-semibold mb-2 text-primary">About Pet Age Calculation</h4>
        <p className="text-muted-foreground">
          {petType === 'dog' && "Dog aging is not linear compared to humans. The first year of a dog's life is equivalent to about 15 human years, the second year adds about 9 more human years, and each year after that adds roughly 4-5 human years depending on the dog's size."}
          {petType === 'cat' && "Cats age more quickly than humans in their early years. The first year of a cat's life is equivalent to about 15 human years, the second year adds about 9 more human years, and each year after that adds roughly 4 human years."}
        </p>
      </div>
    </Card>
  );
};

export default PetsLapDayResults;
