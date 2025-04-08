
import { useState } from 'react';
import { Dog, Cat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PetFormData } from './petsLapDayTypes';

interface PetsLapDayFormProps {
  onCalculate: (formData: PetFormData) => void;
  onReset: () => void;
}

const PetsLapDayForm = ({ onCalculate, onReset }: PetsLapDayFormProps) => {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [petAge, setPetAge] = useState<number>(0);
  const [ownerAge, setOwnerAge] = useState<number>(30);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (petAge < 0) {
      toast({
        title: "Invalid pet age",
        description: "Pet age must be a positive number.",
        variant: "destructive"
      });
      return;
    }

    if (ownerAge <= 0) {
      toast({
        title: "Invalid owner age",
        description: "Owner age must be greater than zero.",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form data
    onCalculate({
      petType,
      petAge,
      ownerAge
    });
  };

  const handleReset = () => {
    setPetType('dog');
    setPetAge(0);
    setOwnerAge(30);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="pet-type">Pet Type</Label>
          <Select
            value={petType}
            onValueChange={(value: 'dog' | 'cat') => setPetType(value)}
          >
            <SelectTrigger id="pet-type" className="w-full">
              <SelectValue placeholder="Select pet type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="pet-age">Pet's Current Age (years)</Label>
          <Input
            id="pet-age"
            type="number"
            min="0"
            step="0.1"
            value={petAge || ''}
            onChange={(e) => setPetAge(parseFloat(e.target.value) || 0)}
            placeholder="Enter pet's current age"
          />
        </div>

        <div>
          <Label htmlFor="owner-age">Your Age (years)</Label>
          <Input
            id="owner-age"
            type="number"
            min="1"
            step="1"
            value={ownerAge || ''}
            onChange={(e) => setOwnerAge(parseFloat(e.target.value) || 0)}
            placeholder="Enter your age"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <Button type="submit" className="px-8">
          Calculate
        </Button>
        <Button variant="outline" onClick={handleReset} className="px-8">
          Reset
        </Button>
      </div>
    </form>
  );
};

export default PetsLapDayForm;
