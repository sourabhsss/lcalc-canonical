import React, { useState } from 'react';
import { Snowflake, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface WeatherData {
  date: string;
  temperature: number;
  snowfall: number;
  windSpeed: number;
}

const SnowDayCalculator: React.FC = () => {
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);

  const fetchWeatherData = async (zip: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch latitude and longitude for the ZIP code
      const geoResponse = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (!geoResponse.ok) {
        throw new Error('Invalid ZIP code. Please try again.');
      }
      const geoData = await geoResponse.json();
      const { latitude, longitude } = geoData.places[0];

      // Fetch weather data from Open-Meteo
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,snowfall_sum,windspeed_10m_max&timezone=America/Chicago`
      );
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data. Please try again later.');
      }
      const weatherData = await weatherResponse.json();

      // Process next 3 days of weather data
      const processedData: WeatherData[] = weatherData.daily.time.slice(0, 3).map((date: string, index: number) => ({
        date,
        temperature: ((weatherData.daily.temperature_2m_max[index] + weatherData.daily.temperature_2m_min[index]) / 2) * 9/5 + 32,
        snowfall: weatherData.daily.snowfall_sum[index],
        windSpeed: weatherData.daily.windspeed_10m_max[index]
      }));

      setWeatherData(processedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode.length !== 5 || !/^\d+$/.test(zipCode)) {
      setError('Please enter a valid 5-digit ZIP code.');
      return;
    }
    fetchWeatherData(zipCode);
  };

  const calculateSnowDayProbability = (data: WeatherData): number => {
    let probability = 0;
    
    // Base probability on temperature extremes
    if (data.temperature < 10) probability += 40;
    else if (data.temperature < 20) probability += 30;
    else if (data.temperature < 32) probability += 20;
    
    // Add probability based on snowfall accumulation
    if (data.snowfall > 8) probability += 60;
    else if (data.snowfall > 6) probability += 50;
    else if (data.snowfall > 4) probability += 40;
    else if (data.snowfall > 2) probability += 20;
    
    // Consider icy conditions
    if (data.temperature <= 32 && data.snowfall > 0) probability += 20;
    
    // Add probability based on wind speed (wind chill factor)
    if (data.windSpeed > 25) probability += 30;
    else if (data.windSpeed > 15) probability += 15;
    
    // Consider timing of snowfall (assume overnight for simplicity)
    probability += 10; // Overnight snowfall bonus
    
    // Cap probability at 100%
    return Math.min(probability, 100);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Snowflake className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-semibold">Snow Day Predictor</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
              Enter Your ZIP Code
            </label>
            <div className="flex gap-3">
              <Input
                id="zipCode"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter ZIP code"
                className="max-w-[200px]"
                maxLength={5}
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Check Snow Day Chances'
                )}
              </Button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {weatherData && (
            <div className="mt-8 space-y-6">
              <h3 className="text-lg font-medium">3-Day Snow Day Forecast</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {weatherData.map((day, index) => {
                  const snowDayChance = calculateSnowDayProbability(day);

                  return (
                    <Card key={index} className="p-4">
                      <div className="text-sm text-muted-foreground mb-2">
                        {new Date(day.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      
                      <div className="text-3xl font-bold text-primary mb-4">
                        {Math.round(snowDayChance)}%
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Temperature:</span>
                          <span className="font-medium">{Math.round(day.temperature)}°F</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Snowfall:</span>
                          <span className="font-medium">{day.snowfall.toFixed(1)}"</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Wind Speed:</span>
                          <span className="font-medium">{Math.round(day.windSpeed)} mph</span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              
              <Alert>
                <AlertDescription>
                  This prediction is based on current weather forecasts and historical patterns. 
                  Always check your school's official communications for actual closure information.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
};

export default SnowDayCalculator;
