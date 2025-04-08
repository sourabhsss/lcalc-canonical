
import React, { useState } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { calculateLovePercentage } from './loveCalculatorUtils';

interface LoveCalculatorFormProps {
  onCalculate: (name1: string, name2: string, percentage: number) => void;
}

const LoveCalculatorForm: React.FC<LoveCalculatorFormProps> = ({ onCalculate }) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!name1.trim() || !name2.trim()) {
      setError('Please enter both names to calculate compatibility.');
      return;
    }
    
    setError('');
    const percentage = calculateLovePercentage(name1, name2);
    onCalculate(name1, name2, percentage);
  };

  const handleReset = () => {
    setName1('');
    setName2('');
    setError('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name1" className="text-base">Your Name</Label>
          <Input
            id="name1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter your name"
            className="mt-1"
          />
        </div>
        
        <div className="flex justify-center my-2">
          <Heart className="text-primary w-8 h-8" />
        </div>
        
        <div>
          <Label htmlFor="name2" className="text-base">Your Partner's Name</Label>
          <Input
            id="name2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter your partner's name"
            className="mt-1"
          />
        </div>
      </div>
      
      {error && (
        <div className="text-destructive text-sm">{error}</div>
      )}
      
      <div className="flex gap-4">
        <Button type="submit" className="flex-1">
          Calculate Compatibility
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          onClick={handleReset}
          className="flex items-center gap-1"
        >
          <RefreshCw className="h-4 w-4" /> Reset
        </Button>
      </div>
    </form>
  );
};

export default LoveCalculatorForm;
