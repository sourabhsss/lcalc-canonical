
/**
 * Gravel calculation utilities
 */

// Typical gravel densities for different types (in pounds per cubic foot)
export const GRAVEL_DENSITY = {
  standard: 105, // Standard gravel/crushed stone
  pea: 100,      // Pea gravel
  limestone: 95, // Crushed limestone
  slate: 80,     // Slate chips
  river: 110     // River rock
};

// Convert to metric density (kg/m³)
export const GRAVEL_DENSITY_METRIC = Object.entries(GRAVEL_DENSITY).reduce((acc, [key, value]) => {
  return { ...acc, [key]: value * 16.0185 }; // Convert lb/ft³ to kg/m³
}, {} as Record<string, number>);

// Calculate area
export const calculateArea = (
  length: number,
  width: number,
  unit: 'ft' | 'm' | 'yd'
): number => {
  return length * width;
};

// Calculate volume
export const calculateVolume = (
  area: number,
  depth: number,
  depthUnit: 'in' | 'cm' | 'mm',
  areaUnit: 'ft' | 'm' | 'yd'
): number => {
  // Convert depth to the same unit system as area
  let depthConverted: number;
  
  if (areaUnit === 'ft') {
    // Convert to feet
    if (depthUnit === 'in') depthConverted = depth / 12; // inches to feet
    else if (depthUnit === 'cm') depthConverted = depth / 30.48; // cm to feet
    else depthConverted = depth / 304.8; // mm to feet
  } else if (areaUnit === 'm') {
    // Convert to meters
    if (depthUnit === 'in') depthConverted = depth / 39.37; // inches to meters
    else if (depthUnit === 'cm') depthConverted = depth / 100; // cm to meters
    else depthConverted = depth / 1000; // mm to meters
  } else {
    // Convert to yards
    if (depthUnit === 'in') depthConverted = depth / 36; // inches to yards
    else if (depthUnit === 'cm') depthConverted = depth / 91.44; // cm to yards
    else depthConverted = depth / 914.4; // mm to yards
  }
  
  return area * depthConverted;
};

// Convert volume between units
export const convertVolume = (
  volume: number,
  fromUnit: 'ft' | 'm' | 'yd',
  toUnit: 'ft' | 'm' | 'yd'
): number => {
  if (fromUnit === toUnit) return volume;
  
  // Convert to cubic feet first
  let cubicFeet: number;
  if (fromUnit === 'm') cubicFeet = volume * 35.3147;
  else if (fromUnit === 'yd') cubicFeet = volume * 27;
  else cubicFeet = volume;
  
  // Then convert to target unit
  if (toUnit === 'm') return cubicFeet / 35.3147;
  if (toUnit === 'yd') return cubicFeet / 27;
  return cubicFeet;
};

// Calculate weight
export const calculateWeight = (
  volume: number,
  volumeUnit: 'ft' | 'm' | 'yd',
  gravelType: keyof typeof GRAVEL_DENSITY
): { tons: number; metricTonnes: number } => {
  // Convert volume to cubic feet or cubic meters for density calculation
  let volumeInCubicFeet: number;
  let volumeInCubicMeters: number;
  
  if (volumeUnit === 'ft') {
    volumeInCubicFeet = volume;
    volumeInCubicMeters = volume / 35.3147;
  } else if (volumeUnit === 'm') {
    volumeInCubicFeet = volume * 35.3147;
    volumeInCubicMeters = volume;
  } else { // yards
    volumeInCubicFeet = volume * 27;
    volumeInCubicMeters = volume * 0.764555;
  }
  
  // Calculate weight in pounds and kilograms
  const weightInPounds = volumeInCubicFeet * GRAVEL_DENSITY[gravelType];
  const weightInKilograms = volumeInCubicMeters * GRAVEL_DENSITY_METRIC[gravelType];
  
  // Convert to tons and metric tonnes
  const tons = weightInPounds / 2000;
  const metricTonnes = weightInKilograms / 1000;
  
  return { tons, metricTonnes };
};

// Calculate bags needed (standard 50lb bag = 0.5 cubic feet)
export const calculateBags = (volumeCubicFeet: number): number => {
  const cubicFeetPerBag = 0.5; // 50lb bag is approximately 0.5 cubic feet
  return Math.ceil(volumeCubicFeet / cubicFeetPerBag);
};

// Calculate cost
export const calculateCost = (
  quantity: number,
  pricePerUnit: number
): number => {
  return quantity * pricePerUnit;
};
