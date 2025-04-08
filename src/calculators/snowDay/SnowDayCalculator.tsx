
import React, { useState } from 'react';
import { Snowflake } from 'lucide-react';
import SnowDayForm from './SnowDayForm';
import SnowDayResult from './SnowDayResult';
import type { WeatherFactors } from './snowDayUtils';

const SnowDayCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [weatherFactors, setWeatherFactors] = useState<WeatherFactors | null>(null);

  const handleCalculate = (
    snowfall: number,
    temperature: number,
    windSpeed: number,
    existingSnowpack: number,
    timeOfSnowfall: string,
    dayOfWeek: string,
    schoolDistrict: string,
    region: string
  ) => {
    setWeatherFactors({
      snowfall,
      temperature,
      windSpeed,
      existingSnowpack,
      timeOfSnowfall,
      dayOfWeek,
      schoolDistrict,
      region
    });
    setCalculating(true);
  };

  const handleReset = () => {
    setWeatherFactors(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Snowflake className="text-primary" />
          <h2 className="text-xl font-semibold">Snow Day Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Enter weather and location information to predict the chance of a snow day.
            This fun calculator considers snowfall, temperature, wind, and other factors 
            that typically influence school closing decisions.
          </p>
          
          <SnowDayForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && weatherFactors && (
            <SnowDayResult {...weatherFactors} />
          )}
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-medium text-lg mb-2">About the Snow Day Calculator</h3>
            <p className="text-muted-foreground text-sm">
              This calculator uses a model based on common factors that influence school administrators' 
              decisions about school closings. It considers weather conditions like snowfall amount, 
              temperature, and wind speed, as well as contextual factors like your location and 
              school district type.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              While this calculator provides a fun estimate, remember that actual school closing 
              decisions are made by local officials based on specific conditions in your area. 
              Always check official school communications for definitive information about closings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnowDayCalculator;
