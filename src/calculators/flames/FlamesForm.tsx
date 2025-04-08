
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FlamesFormProps {
  name1: string;
  setName1: (name: string) => void;
  name2: string;
  setName2: (name: string) => void;
  onCalculate: () => void;
  onReset: () => void;
}

const FlamesForm: React.FC<FlamesFormProps> = ({
  name1,
  setName1,
  name2,
  setName2,
  onCalculate,
  onReset
}) => {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name1">First Person's Name</Label>
        <Input
          id="name1"
          type="text"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          placeholder="Enter first name"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="name2">Second Person's Name</Label>
        <Input
          id="name2"
          type="text"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          placeholder="Enter second name"
          className="mt-1"
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <Button onClick={onCalculate} className="px-8">
          Calculate Relationship
        </Button>
        <Button variant="outline" onClick={onReset} className="px-8">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FlamesForm;
