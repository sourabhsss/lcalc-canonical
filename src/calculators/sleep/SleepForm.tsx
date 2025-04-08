
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Moon, Sun } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface SleepFormProps {
  calculationType: 'wakeup' | 'bedtime';
  onCalculate: (time: Date, cycles: number) => void;
  onReset: () => void;
}

const SleepForm: React.FC<SleepFormProps> = ({ calculationType, onCalculate, onReset }) => {
  const [time, setTime] = useState<string>(
    calculationType === 'wakeup' 
      ? new Date().toTimeString().slice(0, 5) 
      : '07:00'
  );
  const [cycleCount, setCycleCount] = useState<number>(6);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    
    const targetDate = new Date(now);
    targetDate.setHours(hours, minutes, 0, 0);
    
    // For "wakeup" type, if the time is in the past, use tomorrow
    if (calculationType === 'wakeup' && targetDate < now) {
      targetDate.setDate(targetDate.getDate() + 1);
    }
    
    onCalculate(targetDate, cycleCount);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="time" className="text-base font-medium">
          {calculationType === 'wakeup' 
            ? 'What time are you going to bed?' 
            : 'What time do you need to wake up?'}
        </Label>
        <div className="flex items-center space-x-2">
          {calculationType === 'wakeup' ? (
            <Moon className="h-5 w-5 text-primary" />
          ) : (
            <Sun className="h-5 w-5 text-primary" />
          )}
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-40"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="cycles" className="text-base font-medium">
            Sleep Cycles (90 min each)
          </Label>
          <span className="text-sm text-muted-foreground">
            {cycleCount} cycles ≈ {Math.floor(cycleCount * 1.5)} hours of sleep
          </span>
        </div>
        <Slider
          id="cycles"
          min={3}
          max={8}
          step={1}
          value={[cycleCount]}
          onValueChange={(value) => setCycleCount(value[0])}
          className="py-4"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>4.5 hrs</span>
          <span>6 hrs</span>
          <span>7.5 hrs</span>
          <span>9 hrs</span>
          <span>10.5 hrs</span>
          <span>12 hrs</span>
        </div>
      </div>
      
      <div className="pt-4">
        <Button type="submit" className="w-full">
          Calculate {calculationType === 'wakeup' ? 'Wake-up Times' : 'Bedtimes'}
        </Button>
      </div>
    </form>
  );
};

export default SleepForm;
