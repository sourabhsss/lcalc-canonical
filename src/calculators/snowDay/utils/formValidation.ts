
export interface FormValidationResult {
  isValid: boolean;
  errorMessage: string | null;
}

export const validateSnowDayForm = (
  snowfall: string,
  temperature: string,
  windSpeed: string,
  existingSnowpack: string
): FormValidationResult => {
  const snowfallValue = parseFloat(snowfall);
  const temperatureValue = parseFloat(temperature);
  const windSpeedValue = parseFloat(windSpeed);
  const existingSnowpackValue = parseFloat(existingSnowpack) || 0;
  
  if (isNaN(snowfallValue) || isNaN(temperatureValue) || isNaN(windSpeedValue)) {
    return {
      isValid: false,
      errorMessage: 'Please enter valid numbers for snowfall, temperature, and wind speed.'
    };
  }
  
  if (snowfallValue < 0 || windSpeedValue < 0) {
    return {
      isValid: false,
      errorMessage: 'Snowfall and wind speed cannot be negative.'
    };
  }
  
  if (existingSnowpackValue < 0) {
    return {
      isValid: false,
      errorMessage: 'Existing snowpack cannot be negative.'
    };
  }
  
  return {
    isValid: true,
    errorMessage: null
  };
};
