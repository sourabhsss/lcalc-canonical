
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Moon, Sun, RotateCcw, ThumbsUp, AlertCircle } from 'lucide-react';
import { formatTime, formatCycleQuality } from './sleepUtils';

interface SleepResultProps {
  wakeUpTimes: Date[];
  bedtimes: Date[];
  calculationMethod: 'wakeup' | 'bedtime';
  onReset: () => void;
}

const SleepResult: React.FC<SleepResultProps> = ({ 
  wakeUpTimes, 
  bedtimes, 
  calculationMethod,
  onReset
}) => {
  const times = calculationMethod === 'wakeup' ? wakeUpTimes : bedtimes;
  
  return (
    <div className="mt-6 p-6 bg-primary/5 rounded-lg border border-primary/20">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">
          {calculationMethod === 'wakeup' 
            ? 'Recommended Wake-up Times' 
            : 'Recommended Bedtimes'}
        </h3>
        <Button variant="outline" size="sm" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
      
      <p className="text-muted-foreground mb-6">
        {calculationMethod === 'wakeup'
          ? 'For the best sleep, wake up at the end of a sleep cycle. These times represent optimal moments to wake up refreshed.'
          : 'For the best sleep, go to bed at these times to complete full sleep cycles before your alarm rings.'}
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {times.map((time, index) => {
          const cycles = index + 3;
          const hours = (cycles * 1.5).toFixed(1);
          const quality = formatCycleQuality(cycles);
          
          return (
            <Card 
              key={index}
              className={`border-2 ${quality.color} hover:shadow-md transition-shadow`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    {calculationMethod === 'wakeup' ? (
                      <Sun className="h-5 w-5 text-amber-500 mr-2" />
                    ) : (
                      <Moon className="h-5 w-5 text-indigo-500 mr-2" />
                    )}
                    <span className="text-xl font-bold">{formatTime(time)}</span>
                  </div>
                  {quality.recommended ? (
                    <ThumbsUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  {cycles} cycles ≈ {hours} hours
                </div>
                <div className="mt-2 text-sm font-medium" style={{ color: quality.textColor }}>
                  {quality.label}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          <strong>Note:</strong> These calculations include an average of 14 minutes to fall asleep. 
          Your actual experience may vary. For best results, maintain a consistent sleep schedule.
        </p>
      </div>
    </div>
  );
};

export default SleepResult;
