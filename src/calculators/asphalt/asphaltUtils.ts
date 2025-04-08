
/**
 * Asphalt calculation utilities
 */

// Typical asphalt density in different units
export const ASPHALT_DENSITY = {
  metricTonnes: 2.4, // tonnes per cubic meter
  usTons: 145,       // pounds per cubic foot
};

// Convert area to square feet or square meters
export const convertArea = (
  length: number,
  width: number,
  unit: 'ft' | 'm'
): number => {
  return length * width;
};

// Calculate asphalt volume
export const calculateVolume = (
  area: number,
  depth: number,
  depthUnit: 'in' | 'cm' | 'mm',
  areaUnit: 'ft' | 'm'
): number => {
  // Convert depth to the same unit system as area (feet or meters)
  let depthConverted: number;
  
  if (areaUnit === 'ft') {
    // Convert to feet
    if (depthUnit === 'in') depthConverted = depth / 12; // inches to feet
    else if (depthUnit === 'cm') depthConverted = depth / 30.48; // cm to feet
    else depthConverted = depth / 304.8; // mm to feet
  } else {
    // Convert to meters
    if (depthUnit === 'in') depthConverted = depth / 39.37; // inches to meters
    else if (depthUnit === 'cm') depthConverted = depth / 100; // cm to meters
    else depthConverted = depth / 1000; // mm to meters
  }
  
  return area * depthConverted;
};

// Calculate weight of asphalt
export const calculateWeight = (
  volume: number,
  unit: 'ft' | 'm'
): { metricTonnes: number; usTons: number } => {
  if (unit === 'm') {
    // Volume in cubic meters
    const metricTonnes = volume * ASPHALT_DENSITY.metricTonnes;
    const usTons = metricTonnes * 1.10231; // Convert metric tonnes to US tons
    return { metricTonnes, usTons };
  } else {
    // Volume in cubic feet
    const weightInPounds = volume * ASPHALT_DENSITY.usTons;
    const usTons = weightInPounds / 2000; // Convert pounds to US tons
    const metricTonnes = usTons / 1.10231; // Convert US tons to metric tonnes
    return { metricTonnes, usTons };
  }
};

// Calculate cost
export const calculateCost = (weight: number, pricePerUnit: number): number => {
  return weight * pricePerUnit;
};
