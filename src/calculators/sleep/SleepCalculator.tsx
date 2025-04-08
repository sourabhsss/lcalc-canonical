
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SleepForm from './SleepForm';
import SleepResult from './SleepResult';
import SleepContent from './components/SleepContent';
import SleepFAQ from './components/SleepFAQ';
import RelatedCalculators from './components/RelatedCalculators';

const SleepCalculator: React.FC = () => {
  const [wakeUpTimes, setWakeUpTimes] = React.useState<Date[]>([]);
  const [bedtimes, setBedtimes] = React.useState<Date[]>([]);
  const [calculationMethod, setCalculationMethod] = React.useState<'wakeup' | 'bedtime'>('wakeup');
  const [showResults, setShowResults] = React.useState(false);

  const handleCalculateWakeUp = (sleepTime: Date, cycles: number) => {
    const results: Date[] = [];
    
    // Sleep cycle is approximately 90 minutes (1.5 hours)
    // First allow 14 minutes to fall asleep
    const fallAsleepTime = new Date(sleepTime.getTime() + 14 * 60 * 1000);
    
    // Calculate wake times for the specified number of cycles
    for (let i = 3; i <= cycles; i++) {
      const wakeTime = new Date(fallAsleepTime.getTime() + i * 90 * 60 * 1000);
      results.push(wakeTime);
    }
    
    setWakeUpTimes(results);
    setBedtimes([]);
    setCalculationMethod('wakeup');
    setShowResults(true);
  };

  const handleCalculateBedtime = (wakeUpTime: Date, cycles: number) => {
    const results: Date[] = [];
    
    // Sleep cycle is approximately 90 minutes (1.5 hours)
    // Include 14 minutes to fall asleep in the calculation
    
    // Calculate bedtimes for the specified number of cycles
    for (let i = 3; i <= cycles; i++) {
      // Subtract cycles plus 14 min to fall asleep
      const bedTime = new Date(wakeUpTime.getTime() - (i * 90 * 60 * 1000 + 14 * 60 * 1000));
      results.push(bedTime);
    }
    
    setBedtimes(results);
    setWakeUpTimes([]);
    setCalculationMethod('bedtime');
    setShowResults(true);
  };

  const resetResults = () => {
    setWakeUpTimes([]);
    setBedtimes([]);
    setShowResults(false);
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-border shadow-sm p-6 mb-8">
            <Tabs defaultValue="wakeup" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="wakeup">I want to go to bed now</TabsTrigger>
                <TabsTrigger value="bedtime">I need to wake up at...</TabsTrigger>
              </TabsList>
              
              <TabsContent value="wakeup">
                <SleepForm 
                  calculationType="wakeup"
                  onCalculate={handleCalculateWakeUp}
                  onReset={resetResults}
                />
              </TabsContent>
              
              <TabsContent value="bedtime">
                <SleepForm 
                  calculationType="bedtime"
                  onCalculate={handleCalculateBedtime}
                  onReset={resetResults}
                />
              </TabsContent>
            </Tabs>
            
            {showResults && (
              <SleepResult 
                wakeUpTimes={wakeUpTimes}
                bedtimes={bedtimes}
                calculationMethod={calculationMethod}
                onReset={resetResults}
              />
            )}
          </div>
          
          <SleepContent />
          <SleepFAQ />
        </div>
        
        <div className="space-y-6">
          <RelatedCalculators />
        </div>
      </div>
    </div>
  );
};

export default SleepCalculator;
