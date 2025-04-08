
import React from 'react';
import { NumericFieldWithUnit } from './FormFields';

interface WeatherInputsProps {
  snowfall: string;
  temperature: string;
  windSpeed: string;
  existingSnowpack: string;
  setSnowfall: (value: string) => void;
  setTemperature: (value: string) => void;
  setWindSpeed: (value: string) => void;
  setExistingSnowpack: (value: string) => void;
}

const WeatherInputs: React.FC<WeatherInputsProps> = ({
  snowfall,
  temperature,
  windSpeed,
  existingSnowpack,
  setSnowfall,
  setTemperature,
  setWindSpeed,
  setExistingSnowpack
}) => {
  return (
    <>
      <NumericFieldWithUnit
        id="snowfall"
        label="Expected Snowfall"
        value={snowfall}
        onChange={setSnowfall}
        placeholder="Snowfall amount"
        unit="inches"
        step="0.1"
        min="0"
      />
      
      <NumericFieldWithUnit
        id="temperature"
        label="Temperature"
        value={temperature}
        onChange={setTemperature}
        placeholder="Temperature"
        unit="°F"
        step="1"
      />
      
      <NumericFieldWithUnit
        id="windSpeed"
        label="Wind Speed"
        value={windSpeed}
        onChange={setWindSpeed}
        placeholder="Wind speed"
        unit="mph"
        step="1"
        min="0"
      />
      
      <NumericFieldWithUnit
        id="existingSnowpack"
        label="Existing Snow on Ground"
        value={existingSnowpack}
        onChange={setExistingSnowpack}
        placeholder="Existing snow"
        unit="inches"
        step="0.1"
        min="0"
      />
    </>
  );
};

export default WeatherInputs;
