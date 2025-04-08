/**
 * Snow Day Predictor Utility
 * This is a simplified model for educational purposes.
 * Real snow day predictions would use more complex meteorological data.
 */

export interface WeatherFactors {
  snowfall: number;           // in inches
  temperature: number;        // in °F
  windSpeed: number;          // in mph
  existingSnowpack: number;   // in inches
  timeOfSnowfall: string;     // morning, afternoon, overnight
  dayOfWeek: string;          // weekday name
  schoolDistrict: string;     // rural, suburban, urban
  region: string;             // northeast, midwest, south, west
}

// Calculate a snow day probability based on weather factors
export const calculateSnowDayProbability = (factors: WeatherFactors): number => {
  let probability = 0;
  
  // Base probability from snowfall amount
  if (factors.snowfall < 1) {
    probability = 5;
  } else if (factors.snowfall < 3) {
    probability = 20;
  } else if (factors.snowfall < 6) {
    probability = 40;
  } else if (factors.snowfall < 10) {
    probability = 65;
  } else if (factors.snowfall < 15) {
    probability = 85;
  } else {
    probability = 95;
  }
  
  // Adjust for temperature (colder = more likely)
  if (factors.temperature < 10) {
    probability += 15;
  } else if (factors.temperature < 20) {
    probability += 10;
  } else if (factors.temperature < 25) {
    probability += 5;
  } else if (factors.temperature > 32) {
    probability -= 15; // Above freezing reduces chances
  }
  
  // Adjust for wind speed
  if (factors.windSpeed > 30) {
    probability += 15;
  } else if (factors.windSpeed > 20) {
    probability += 10;
  } else if (factors.windSpeed > 15) {
    probability += 5;
  }
  
  // Existing snow on ground
  if (factors.existingSnowpack > 0) {
    probability += Math.min(factors.existingSnowpack * 2, 15);
  }
  
  // Time of snowfall
  switch (factors.timeOfSnowfall) {
    case 'overnight':
      probability += 10;
      break;
    case 'morning':
      probability += 5;
      break;
    case 'afternoon':
      probability -= 5;
      break;
  }
  
  // Day of week (weekends and Fridays less likely to affect next school day)
  switch (factors.dayOfWeek) {
    case 'Friday':
      probability -= 10;
      break;
    case 'Saturday':
      probability -= 15;
      break;
    case 'Sunday':
      probability += 0; // Neutral
      break;
    default:
      probability += 5; // More likely on weekdays
  }
  
  // School district type
  switch (factors.schoolDistrict) {
    case 'rural':
      probability += 15;
      break;
    case 'suburban':
      probability += 5;
      break;
    case 'urban':
      probability -= 5;
      break;
  }
  
  // Regional differences
  switch (factors.region) {
    case 'northeast':
      probability -= 5; // More prepared for snow
      break;
    case 'midwest':
      probability -= 5; // More prepared for snow
      break;
    case 'south':
      probability += 15; // Less prepared for snow
      break;
    case 'west':
      probability += 0; // Varies widely
      break;
  }
  
  // Ensure probability is between 0 and 100
  return Math.max(0, Math.min(100, probability));
};

// Get prediction message based on probability
export const getPredictionMessage = (probability: number): string => {
  if (probability < 20) {
    return "Very unlikely. Plan on going to school.";
  } else if (probability < 40) {
    return "Unlikely, but there's a small chance. Do your homework just in case.";
  } else if (probability < 60) {
    return "It could go either way. Have your homework ready, but maybe don't finish all of it.";
  } else if (probability < 80) {
    return "Looking promising! A snow day is likely.";
  } else {
    return "Almost certain! Get your sled ready!";
  }
};

// Get factors that are increasing probability
export const getPositiveFactors = (factors: WeatherFactors): string[] => {
  const positives: string[] = [];
  
  if (factors.snowfall >= 6) positives.push(`Heavy snowfall (${factors.snowfall}″)`);
  if (factors.temperature < 20) positives.push(`Very cold temperature (${factors.temperature}°F)`);
  if (factors.windSpeed > 20) positives.push(`Strong winds (${factors.windSpeed} mph)`);
  if (factors.existingSnowpack > 3) positives.push(`Existing snow accumulation (${factors.existingSnowpack}″)`);
  if (factors.timeOfSnowfall === 'overnight') positives.push('Overnight snowfall timing');
  if (factors.schoolDistrict === 'rural') positives.push('Rural school district');
  if (factors.region === 'south') positives.push('Southern region (less prepared for snow)');
  
  return positives;
};

// Get factors that are decreasing probability
export const getNegativeFactors = (factors: WeatherFactors): string[] => {
  const negatives: string[] = [];
  
  if (factors.snowfall < 3) negatives.push(`Light snowfall (${factors.snowfall}″)`);
  if (factors.temperature > 32) negatives.push(`Above freezing temperature (${factors.temperature}°F)`);
  if (factors.windSpeed < 10) negatives.push(`Light winds (${factors.windSpeed} mph)`);
  if (factors.existingSnowpack === 0) negatives.push('No existing snow on ground');
  if (factors.timeOfSnowfall === 'afternoon') negatives.push('Afternoon snowfall timing');
  if (['Friday', 'Saturday'].includes(factors.dayOfWeek)) negatives.push(`${factors.dayOfWeek} snowfall`);
  if (factors.schoolDistrict === 'urban') negatives.push('Urban school district (better snow removal)');
  if (['northeast', 'midwest'].includes(factors.region)) negatives.push(`${factors.region} region (prepared for snow)`);
  
  return negatives;
};
