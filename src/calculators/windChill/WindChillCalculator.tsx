import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wind, Thermometer } from 'lucide-react';

const WindChillCalculator: React.FC = () => {
  const [temperature, setTemperature] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateWindChill = (temp: number, speed: number): number => {
    // Wind chill formula from National Weather Service
    // Valid for temperatures at or below 50°F and wind speeds above 3 mph
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const temp = parseFloat(temperature);
    const speed = parseFloat(windSpeed);

    if (isNaN(temp) || isNaN(speed)) {
      setError('Please enter valid numbers for temperature and wind speed.');
      return;
    }

    if (temp > 50) {
      setError('Wind chill is only calculated for temperatures at or below 50°F.');
      return;
    }

    if (speed < 3) {
      setError('Wind chill is only calculated for wind speeds above 3 mph.');
      return;
    }

    const windChillTemp = calculateWindChill(temp, speed);
    setResult(Math.round(windChillTemp * 10) / 10);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Wind className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Wind Chill Calculator</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="temperature" className="block text-sm font-medium mb-2">
                Temperature (°F)
              </label>
              <Input
                id="temperature"
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Enter temperature"
                step="0.1"
              />
            </div>

            <div>
              <label htmlFor="windSpeed" className="block text-sm font-medium mb-2">
                Wind Speed (mph)
              </label>
              <Input
                id="windSpeed"
                type="number"
                value={windSpeed}
                onChange={(e) => setWindSpeed(e.target.value)}
                placeholder="Enter wind speed"
                step="0.1"
                min="0"
              />
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full md:w-auto">
            Calculate Wind Chill
          </Button>
        </form>

        {result !== null && (
          <div className="mt-8 p-6 bg-primary/5 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Thermometer className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Results</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">Wind Chill Temperature</div>
                <div className="text-3xl font-bold text-primary">{result}°F</div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>
                  The wind chill temperature is what it "feels like" outside based on the actual temperature 
                  and wind speed. This calculation uses the formula from the National Weather Service.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Note:</strong> This calculator is valid for:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Temperatures at or below 50°F (10°C)</li>
            <li>Wind speeds above 3 mph (4.8 km/h)</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default WindChillCalculator; 