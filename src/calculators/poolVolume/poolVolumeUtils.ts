
// Pool Shape Types
export type PoolShape = 'rectangular' | 'circular' | 'oval' | 'irregular';

// Pool Volume Units
export type VolumeUnit = 'gallons' | 'liters' | 'cubicMeters';

// Pool Dimensions Types
export interface PoolDimensions {
  // Rectangular & Oval
  length?: number;
  width?: number;
  // Circular
  diameter?: number;
  // Irregular
  surfaceArea?: number;
  // Common
  depth?: number;
  averageDepth: number;
}

// Pool Volume Result Type
export interface PoolVolumeResult {
  volume: number;
  gallons: number;
  liters: number;
  cubicMeters: number;
  maintenanceTips: string[];
  chemicalNeeds: {
    chlorine: string;
    alkalinity: string;
    phAdjustment: string;
  };
  fillTime: string;
  heatTime: string;
  costEstimates: {
    waterFill: number;
    heating: number;
    chemicals: number;
  };
  environmentalImpact: string;
}

// Conversion factors
const CUBIC_FEET_TO_GALLONS = 7.48052;
const CUBIC_METERS_TO_LITERS = 1000;
const CUBIC_FEET_TO_CUBIC_METERS = 0.0283168;

// Calculate pool volume
export const calculatePoolVolume = (
  shape: PoolShape,
  dimensions: PoolDimensions,
  measurementUnit: 'feet' | 'meters'
): number => {
  let volumeInCubicUnits = 0;
  
  switch (shape) {
    case 'rectangular':
      if (dimensions.length && dimensions.width) {
        volumeInCubicUnits = dimensions.length * dimensions.width * dimensions.averageDepth;
      }
      break;
    case 'circular':
      if (dimensions.diameter) {
        const radius = dimensions.diameter / 2;
        volumeInCubicUnits = Math.PI * radius * radius * dimensions.averageDepth;
      }
      break;
    case 'oval':
      if (dimensions.length && dimensions.width) {
        volumeInCubicUnits = Math.PI * (dimensions.length / 2) * (dimensions.width / 2) * dimensions.averageDepth;
      }
      break;
    case 'irregular':
      if (dimensions.surfaceArea) {
        volumeInCubicUnits = dimensions.surfaceArea * dimensions.averageDepth;
      }
      break;
  }
  
  return volumeInCubicUnits;
};

// Convert volume to specified unit
export const convertVolume = (
  volume: number,
  fromUnit: 'cubicFeet' | 'cubicMeters',
  toUnit: VolumeUnit
): number => {
  let result = volume;
  
  // First convert to cubic meters if needed
  if (fromUnit === 'cubicFeet') {
    result = volume * CUBIC_FEET_TO_CUBIC_METERS;
  }
  
  // Then convert to desired output unit
  switch (toUnit) {
    case 'gallons':
      result = fromUnit === 'cubicFeet' 
        ? volume * CUBIC_FEET_TO_GALLONS
        : result * CUBIC_METERS_TO_LITERS / 3.78541; // Convert liters to gallons
      break;
    case 'liters':
      result = result * CUBIC_METERS_TO_LITERS;
      break;
    case 'cubicMeters':
      // Already in cubic meters if fromUnit was 'cubicMeters' or we converted above
      break;
  }
  
  return result;
};

// Format volume with appropriate units
export const formatVolume = (volume: number, unit: VolumeUnit): string => {
  const formattedNumber = volume.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  });
  
  switch (unit) {
    case 'gallons':
      return `${formattedNumber} gallons`;
    case 'liters':
      return `${formattedNumber} liters`;
    case 'cubicMeters':
      return `${formattedNumber} m³`;
    default:
      return `${formattedNumber}`;
  }
};

// Format currency for cost estimates
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

// Calculate chemical amounts based on pool volume
export const calculateChemicalAmounts = (volumeInGallons: number) => {
  return {
    chlorine: (volumeInGallons / 10000) * 1, // 1 lb per 10,000 gallons
    shockTreatment: (volumeInGallons / 10000) * 2, // 2 lbs per 10,000 gallons
    algaecide: (volumeInGallons / 10000) * 16, // 16 oz per 10,000 gallons
    poolStabilizer: (volumeInGallons / 5000) * 1, // 1 lb per 5,000 gallons
  };
};

// Generate comprehensive result object
export const generatePoolVolumeResult = (volumeInCubicUnits: number, measurementUnit: 'feet' | 'meters', unit: VolumeUnit): PoolVolumeResult => {
  // Convert to all formats based on measurement unit
  const volumeFromUnit = measurementUnit === 'feet' ? 'cubicFeet' : 'cubicMeters';
  
  const gallons = convertVolume(volumeInCubicUnits, volumeFromUnit, 'gallons');
  const liters = convertVolume(volumeInCubicUnits, volumeFromUnit, 'liters');
  const cubicMeters = measurementUnit === 'feet' 
    ? volumeInCubicUnits * CUBIC_FEET_TO_CUBIC_METERS 
    : volumeInCubicUnits;
  
  // Calculate fill time (1 hose at 10 gallons per minute)
  const fillMinutes = gallons / 10;
  const fillHours = Math.floor(fillMinutes / 60);
  const fillRemainingMinutes = Math.round(fillMinutes % 60);
  const fillTime = `${fillHours} hours, ${fillRemainingMinutes} minutes`;
  
  // Calculate heating time (approximately 1 hour per 10,000 gallons to raise temp 20°F)
  const heatHours = Math.round((gallons / 10000) * 20);
  const heatTime = `${heatHours} hours`;
  
  // Cost estimates
  const waterCostPerGallon = 0.0015; // Average cost per gallon
  const waterFill = gallons * waterCostPerGallon;
  const heatingCostPerGallon = 0.02; // Average cost to heat per gallon per month
  const heating = gallons * heatingCostPerGallon;
  const chemicalCostPerGallon = 0.01; // Average cost for chemicals per gallon per month
  const chemicals = gallons * chemicalCostPerGallon;
  
  const maintenanceTips = [
    "Test your pool water chemistry 2-3 times per week during swimming season",
    "Keep your chlorine level between 1-3 ppm for optimal sanitization",
    "Maintain pH between 7.2 and 7.8 for best swimmer comfort and chlorine effectiveness",
    "Shock your pool weekly or after heavy use or rainstorms",
    "Clean your filter regularly according to manufacturer recommendations",
  ];
  
  // Environmental impact message
  const waterUsageInHouseholds = Math.round(gallons / 88000); // Average household uses 88,000 gallons per year
  const environmentalImpact = `This pool contains the equivalent of ${waterUsageInHouseholds} month${waterUsageInHouseholds !== 1 ? 's' : ''} of water usage for a typical family. Using a pool cover can reduce evaporation by up to 95%, saving water and reducing chemical and heating costs.`;
  
  return {
    volume: volumeInCubicUnits,
    gallons,
    liters,
    cubicMeters,
    maintenanceTips,
    chemicalNeeds: {
      chlorine: `${(gallons / 10000).toFixed(1)} pounds`,
      alkalinity: `${(gallons / 10000 * 1.5).toFixed(1)} pounds`,
      phAdjustment: `${(gallons / 10000 * 0.5).toFixed(1)} pounds`,
    },
    fillTime,
    heatTime,
    costEstimates: {
      waterFill,
      heating,
      chemicals
    },
    environmentalImpact
  };
};

// Export pool FAQs 
export const poolFaqs = [
  {
    question: "Why is pool volume calculation important?",
    answer: "Knowing your pool's exact volume is essential for proper water chemistry management, determining chemical dosages, calculating heating costs, and estimating water usage. Inaccurate volume measurements can lead to improper chemical balance, equipment damage, and unnecessary expenses."
  },
  {
    question: "How do I measure my pool's average depth?",
    answer: "For rectangular pools with a gradual slope, measure the depth at the shallow end, at the middle, and at the deep end. Add these measurements together and divide by 3. For pools with a sudden drop-off, divide the pool into sections, calculate the average depth of each section, and determine a weighted average based on the surface area of each section."
  },
  {
    question: "What's the difference between gallons and cubic feet when measuring pool volume?",
    answer: "Cubic feet measures the physical space your pool occupies, while gallons measures the amount of water it contains. One cubic foot of water equals approximately 7.48 gallons. Pool chemicals are typically dosed based on gallons, making this the most common unit for pool owners in the United States."
  },
  {
    question: "How can I reduce my pool maintenance costs?",
    answer: "Use a pool cover to reduce evaporation, heat loss, and debris. Maintain proper chemical balance to prevent the need for shock treatments. Run your filter during off-peak electricity hours. Consider a variable-speed pump that uses less energy. Regularly clean skimmer and pump baskets to improve efficiency."
  },
  {
    question: "How much does it cost to fill a pool?",
    answer: "The cost to fill a pool depends on your local water rates, pool size, and whether you're using municipal water or a water delivery service. On average, municipal water costs about $0.0015 per gallon, meaning a 15,000-gallon pool would cost approximately $22.50 to fill. Water delivery services typically charge more but may be faster."
  }
];
