
import React, { useState } from 'react';
import { validateSnowDayForm } from './utils/formValidation';
import WeatherInputs from './components/WeatherInputs';
import ContextInputs from './components/ContextInputs';
import FormActions from './components/FormActions';

interface SnowDayFormProps {
  onCalculate: (
    snowfall: number,
    temperature: number,
    windSpeed: number,
    existingSnowpack: number,
    timeOfSnowfall: string,
    dayOfWeek: string,
    schoolDistrict: string,
    region: string
  ) => void;
  onReset: () => void;
}

const SnowDayForm: React.FC<SnowDayFormProps> = ({
  onCalculate,
  onReset
}) => {
  const [snowfall, setSnowfall] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [windSpeed, setWindSpeed] = useState<string>('');
  const [existingSnowpack, setExistingSnowpack] = useState<string>('0');
  const [timeOfSnowfall, setTimeOfSnowfall] = useState<string>('overnight');
  const [dayOfWeek, setDayOfWeek] = useState<string>('Monday');
  const [schoolDistrict, setSchoolDistrict] = useState<string>('suburban');
  const [region, setRegion] = useState<string>('northeast');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationResult = validateSnowDayForm(
      snowfall,
      temperature,
      windSpeed,
      existingSnowpack
    );
    
    if (!validationResult.isValid) {
      setError(validationResult.errorMessage);
      return;
    }
    
    setError(null);
    onCalculate(
      parseFloat(snowfall),
      parseFloat(temperature),
      parseFloat(windSpeed),
      parseFloat(existingSnowpack) || 0,
      timeOfSnowfall,
      dayOfWeek,
      schoolDistrict,
      region
    );
  };

  const handleReset = () => {
    setSnowfall('');
    setTemperature('');
    setWindSpeed('');
    setExistingSnowpack('0');
    setTimeOfSnowfall('overnight');
    setDayOfWeek('Monday');
    setSchoolDistrict('suburban');
    setRegion('northeast');
    setError(null);
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherInputs
          snowfall={snowfall}
          temperature={temperature}
          windSpeed={windSpeed}
          existingSnowpack={existingSnowpack}
          setSnowfall={setSnowfall}
          setTemperature={setTemperature}
          setWindSpeed={setWindSpeed}
          setExistingSnowpack={setExistingSnowpack}
        />
        
        <ContextInputs
          timeOfSnowfall={timeOfSnowfall}
          dayOfWeek={dayOfWeek}
          schoolDistrict={schoolDistrict}
          region={region}
          setTimeOfSnowfall={setTimeOfSnowfall}
          setDayOfWeek={setDayOfWeek}
          setSchoolDistrict={setSchoolDistrict}
          setRegion={setRegion}
        />
      </div>

      {error && (
        <div className="text-sm text-destructive mt-2">
          {error}
        </div>
      )}

      <FormActions onReset={handleReset} />
    </form>
  );
};

export default SnowDayForm;
