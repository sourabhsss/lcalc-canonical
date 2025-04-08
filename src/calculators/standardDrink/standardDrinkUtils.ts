// Standard drink definitions by country (in grams of pure alcohol)
export const standardDrinksByCountry = {
  'USA': {
    name: 'United States',
    alcoholGrams: 14,
    description: 'In the US, a standard drink contains 14 grams of pure alcohol.',
    examples: [
      '12 fl oz of regular beer (5% ABV)',
      '5 fl oz of wine (12% ABV)',
      '1.5 fl oz of distilled spirits (40% ABV)'
    ]
  },
  'UK': {
    name: 'United Kingdom',
    alcoholGrams: 8,
    description: 'In the UK, a standard drink (unit) contains 8 grams of pure alcohol.',
    examples: [
      '1/2 pint of regular beer (3.5% ABV)',
      '76ml of wine (13% ABV)',
      '25ml of spirits (40% ABV)'
    ]
  },
  'AUS': {
    name: 'Australia',
    alcoholGrams: 10,
    description: 'In Australia, a standard drink contains 10 grams of pure alcohol.',
    examples: [
      '285ml of regular beer (4.9% ABV)',
      '100ml of wine (13% ABV)',
      '30ml of spirits (40% ABV)'
    ]
  },
  'NZ': {
    name: 'New Zealand',
    alcoholGrams: 10,
    description: 'In New Zealand, a standard drink contains 10 grams of pure alcohol.',
    examples: [
      '330ml of regular beer (4% ABV)',
      '100ml of wine (13% ABV)',
      '30ml of spirits (40% ABV)'
    ]
  },
  'CAN': {
    name: 'Canada',
    alcoholGrams: 13.6,
    description: 'In Canada, a standard drink contains 13.6 grams of pure alcohol.',
    examples: [
      '341ml of beer (5% ABV)',
      '142ml of wine (12% ABV)',
      '43ml of spirits (40% ABV)'
    ]
  },
  'EU': {
    name: 'Europe (General)',
    alcoholGrams: 10,
    description: 'In many European countries, a standard drink contains 10 grams of pure alcohol.',
    examples: [
      '250ml of beer (5% ABV)',
      '100ml of wine (12% ABV)',
      '30ml of spirits (40% ABV)'
    ]
  },
  'JPN': {
    name: 'Japan',
    alcoholGrams: 19.75,
    description: 'In Japan, a standard drink (1 gō) contains 19.75 grams of pure alcohol.',
    examples: [
      '500ml of beer (5% ABV)',
      '180ml of sake (15% ABV)',
      '60ml of whisky (40% ABV)'
    ]
  },
  'ZAF': {
    name: 'South Africa',
    alcoholGrams: 12,
    description: 'In South Africa, a standard drink contains 12 grams of pure alcohol.',
    examples: [
      '340ml of beer (5% ABV)',
      '120ml of wine (12% ABV)',
      '35ml of spirits (40% ABV)'
    ]
  }
};

// Common alcoholic beverages with typical ABV and volume
export const commonDrinkTypes = {
  'beer': {
    name: 'Regular Beer',
    abv: 5,
    volume: 355, // 12oz in ml
    volumeUnit: 'ml' as const
  },
  'light-beer': {
    name: 'Light Beer',
    abv: 4.2,
    volume: 355, // 12oz in ml
    volumeUnit: 'ml' as const
  },
  'craft-beer': {
    name: 'Craft Beer/IPA',
    abv: 6.5,
    volume: 355, // 12oz in ml
    volumeUnit: 'ml' as const
  },
  'wine': {
    name: 'Wine (Glass)',
    abv: 12,
    volume: 150, // 5oz in ml
    volumeUnit: 'ml' as const
  },
  'wine-bottle': {
    name: 'Wine (Bottle)',
    abv: 12,
    volume: 750,
    volumeUnit: 'ml' as const
  },
  'champagne': {
    name: 'Champagne/Sparkling',
    abv: 12,
    volume: 150,
    volumeUnit: 'ml' as const
  },
  'spirits': {
    name: 'Spirits/Liquor (Shot)',
    abv: 40,
    volume: 44, // 1.5oz in ml
    volumeUnit: 'ml' as const
  },
  'mixed-drink': {
    name: 'Mixed Drink/Cocktail',
    abv: 15,
    volume: 240,
    volumeUnit: 'ml' as const
  },
  'cider': {
    name: 'Hard Cider',
    abv: 4.5,
    volume: 355,
    volumeUnit: 'ml' as const
  },
  'malt-beverage': {
    name: 'Malt Beverage',
    abv: 8,
    volume: 355,
    volumeUnit: 'ml' as const
  },
  'liqueur': {
    name: 'Liqueur',
    abv: 25,
    volume: 44,
    volumeUnit: 'ml' as const
  },
  'sake': {
    name: 'Sake',
    abv: 15,
    volume: 180,
    volumeUnit: 'ml' as const
  }
};

type CountryCode = keyof typeof standardDrinksByCountry;

// Calculate alcohol content in grams
export const calculateAlcoholGrams = (volumeInMl: number, alcoholPercentage: number): number => {
  const alcoholVolume = volumeInMl * (alcoholPercentage / 100);
  // Density of ethanol is 0.789 g/ml
  return alcoholVolume * 0.789;
};

// Calculate standard drinks based on country
export const calculateStandardDrinks = (alcoholGrams: number, country: CountryCode): number => {
  const countryStandard = standardDrinksByCountry[country] || standardDrinksByCountry['USA'];
  return alcoholGrams / countryStandard.alcoholGrams;
};

// Define types for drinking guidelines
type DailyLimit = {
  men: number;
  women: number;
};

type WeeklyLimit = {
  men: number;
  women: number;
};

type DrinkingGuideline = {
  name: string;
  daily?: DailyLimit;
  weekly: WeeklyLimit;
  source: string;
};

// Low-risk drinking guidelines by country (per day and week)
export const drinkingGuidelines: Record<string, DrinkingGuideline> = {
  'USA': {
    name: 'United States',
    daily: {
      men: 2,
      women: 1
    },
    weekly: {
      men: 14,
      women: 7
    },
    source: 'Centers for Disease Control and Prevention (CDC)'
  },
  'UK': {
    name: 'United Kingdom',
    weekly: {
      men: 14,
      women: 14
    },
    source: 'UK Chief Medical Officers'
  },
  'AUS': {
    name: 'Australia',
    daily: {
      men: 2,
      women: 2
    },
    weekly: {
      men: 10,
      women: 10
    },
    source: 'National Health and Medical Research Council'
  },
  'CAN': {
    name: 'Canada',
    weekly: {
      men: 15,
      women: 10
    },
    source: 'Canadian Centre on Substance Use and Addiction'
  }
};

// Blood Alcohol Content calculation (Widmark formula)
export const calculateBAC = (
  alcoholGrams: number, 
  weightKg: number, 
  gender: 'male' | 'female', 
  hoursElapsed: number
): number => {
  // Widmark factors: 0.68 for men, 0.55 for women
  const widmarkFactor = gender === 'male' ? 0.68 : 0.55;
  
  // BAC = (alcohol in grams / (weight in kg * Widmark factor)) * 100 - (hours * 0.015)
  let bac = (alcoholGrams / (weightKg * widmarkFactor)) * 100;
  
  // Subtract alcohol metabolized (average of 0.015% per hour)
  bac = Math.max(0, bac - (hoursElapsed * 0.015));
  
  return bac;
};

// Calories in alcoholic beverages
export const calculateCalories = (alcoholGrams: number): number => {
  // Alcohol contains approximately 7 calories per gram
  return alcoholGrams * 7;
};
