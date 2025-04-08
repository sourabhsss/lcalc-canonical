
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { AirFryerResult as AirFryerResultType } from './airFryerUtils';
import { Timer, ThermometerSnowflake, UtensilsCrossed, ChefHat, Clock, AlertCircle, Zap } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

interface AirFryerResultProps {
  result: AirFryerResultType;
}

// Helper function to format time in minutes or minutes and seconds
const formatTime = (minutes: number): string => {
  if (minutes < 1) {
    return `${Math.round(minutes * 60)} seconds`;
  }
  
  const wholeMinutes = Math.floor(minutes);
  const seconds = Math.round((minutes - wholeMinutes) * 60);
  
  if (seconds === 0) {
    return `${wholeMinutes} minute${wholeMinutes !== 1 ? 's' : ''}`;
  }
  
  return `${wholeMinutes} minute${wholeMinutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
};

// Helper function to format currency
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const AirFryerResult: React.FC<AirFryerResultProps> = ({ result }) => {
  const {
    cookingTime,
    temperature,
    flipTime,
    tips,
    internalTemperature,
    nutritionImpact,
    energyUsage,
    costSavings,
    breakdown
  } = result;

  return (
    <div className="space-y-6 mt-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center space-x-2">
            <ChefHat className="h-5 w-5 text-primary" />
            <span>Air Fryer Cooking Results</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Cooking Time:</p>
              <p className="text-2xl font-bold flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                {formatTime(cookingTime)}
              </p>
              {flipTime && (
                <p className="text-sm text-muted-foreground">
                  Flip/shake at: {formatTime(flipTime)}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Temperature:</p>
              <p className="text-2xl font-bold flex items-center">
                <ThermometerSnowflake className="mr-2 h-5 w-5 text-primary" />
                {temperature}°F
              </p>
              {internalTemperature && (
                <p className="text-sm text-muted-foreground">
                  Target internal temp: {internalTemperature}°F
                </p>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Energy Savings:</p>
              <p className="text-lg font-semibold flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                {formatCurrency(costSavings)}
              </p>
              <p className="text-sm text-muted-foreground">
                {energyUsage} kWh vs. conventional oven
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Cooking Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <UtensilsCrossed className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Time Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {breakdown.map((step, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{step.split(':')[0]}:</span>
                    <span className="font-medium">{step.split(':')[1]}</span>
                  </div>
                  {index < breakdown.length - 1 && (
                    <Progress value={(index + 1) * (100 / breakdown.length)} className="h-1" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Nutritional Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{nutritionImpact}</p>
        </CardContent>
      </Card>
      
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          These are estimated cooking times and temperatures. Air fryer models vary, so always check food for doneness.
          For meat, poultry, and fish, using a food thermometer is recommended to ensure food safety.
        </AlertDescription>
      </Alert>
      
      <div className="rounded-lg border p-4 bg-amber-50 border-amber-200">
        <div className="flex items-start space-x-2">
          <Timer className="h-5 w-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-amber-800">Pro Cooking Tip</h4>
            <p className="text-sm text-amber-700">
              Air fryers cook food faster than conventional methods. Check your food a few minutes before the 
              recommended time, especially if this is your first time cooking this particular item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirFryerResult;
