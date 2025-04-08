
import { 
  VolumeUnit, 
  TimeUnitShort, 
  DiameterUnit,
  VelocityUnit,
  TimeUnitLong,
  FlowConversions
} from './gpmStore';

// Constants for unit conversion
const CONVERSIONS = {
  // Volume conversions to gallons
  gallonsToGallons: 1,
  litersToGallons: 0.264172,
  cubicFeetToGallons: 7.48052,
  
  // Time conversions to minutes
  secondsToMinutes: 1/60,
  minutesToMinutes: 1,
  hoursToMinutes: 60,
  
  // Diameter conversions to inches
  inchesToInches: 1,
  millimetersToInches: 0.0393701,
  centimetersToInches: 0.393701,
  
  // Velocity conversions to feet per second
  feetPerSecondToFeetPerSecond: 1,
  metersPerSecondToFeetPerSecond: 3.28084,
  
  // Constants for flow rate calculations (π)
  PI: Math.PI
};

// Helper function to calculate flow rate conversions from GPM
const calculateFlowConversions = (gpm: number): FlowConversions => {
  return {
    litersPerMinute: gpm / CONVERSIONS.litersToGallons,
    cubicFeetPerMinute: gpm / CONVERSIONS.cubicFeetToGallons,
    cubicMetersPerHour: (gpm / CONVERSIONS.litersToGallons) * 0.06 // L/min to m³/h
  };
};

// Container method - calculate GPM from container volume and fill time
const fromContainerMethod = (
  containerVolume: number,
  fillTime: number,
  volumeUnit: VolumeUnit,
  timeUnit: TimeUnitShort
): { gpm: number } & FlowConversions => {
  // Convert volume to gallons
  let volumeInGallons: number;
  switch (volumeUnit) {
    case 'gallons':
      volumeInGallons = containerVolume * CONVERSIONS.gallonsToGallons;
      break;
    case 'liters':
      volumeInGallons = containerVolume * CONVERSIONS.litersToGallons;
      break;
    case 'cubicFeet':
      volumeInGallons = containerVolume * CONVERSIONS.cubicFeetToGallons;
      break;
  }
  
  // Convert time to minutes
  let timeInMinutes: number;
  switch (timeUnit) {
    case 'seconds':
      timeInMinutes = fillTime * CONVERSIONS.secondsToMinutes;
      break;
    case 'minutes':
      timeInMinutes = fillTime * CONVERSIONS.minutesToMinutes;
      break;
  }
  
  // Calculate GPM
  const gpm = volumeInGallons / timeInMinutes;
  
  // Calculate conversions
  return {
    gpm,
    ...calculateFlowConversions(gpm)
  };
};

// Flow rate method - calculate GPM from pipe diameter and water velocity
const fromFlowRate = (
  diameter: number,
  velocity: number,
  diameterUnit: DiameterUnit,
  velocityUnit: VelocityUnit
): { gpm: number } & FlowConversions => {
  // Convert diameter to inches
  let diameterInInches: number;
  switch (diameterUnit) {
    case 'inches':
      diameterInInches = diameter * CONVERSIONS.inchesToInches;
      break;
    case 'millimeters':
      diameterInInches = diameter * CONVERSIONS.millimetersToInches;
      break;
    case 'centimeters':
      diameterInInches = diameter * CONVERSIONS.centimetersToInches;
      break;
  }
  
  // Convert velocity to feet per second
  let velocityInFPS: number;
  switch (velocityUnit) {
    case 'feetPerSecond':
      velocityInFPS = velocity * CONVERSIONS.feetPerSecondToFeetPerSecond;
      break;
    case 'metersPerSecond':
      velocityInFPS = velocity * CONVERSIONS.metersPerSecondToFeetPerSecond;
      break;
  }
  
  // Calculate flow rate in cubic feet per second
  // Q = A × v = π × (d/2)² × v
  const area = CONVERSIONS.PI * Math.pow(diameterInInches / 2, 2); // Area in square inches
  const flowInCubicInchesPerSecond = area * velocityInFPS * 12; // Convert ft/s to in/s
  const flowInCubicFeetPerSecond = flowInCubicInchesPerSecond / 1728; // Convert cubic inches to cubic feet (12³ = 1728)
  
  // Convert to GPM
  const gpm = flowInCubicFeetPerSecond * 60 * CONVERSIONS.cubicFeetToGallons;
  
  // Calculate conversions
  return {
    gpm,
    ...calculateFlowConversions(gpm)
  };
};

// Volume/time method - calculate GPM from total volume and total time
const fromVolumeTime = (
  volume: number,
  time: number,
  volumeUnit: VolumeUnit,
  timeUnit: TimeUnitLong
): { gpm: number } & FlowConversions => {
  // Convert volume to gallons
  let volumeInGallons: number;
  switch (volumeUnit) {
    case 'gallons':
      volumeInGallons = volume * CONVERSIONS.gallonsToGallons;
      break;
    case 'liters':
      volumeInGallons = volume * CONVERSIONS.litersToGallons;
      break;
    case 'cubicFeet':
      volumeInGallons = volume * CONVERSIONS.cubicFeetToGallons;
      break;
  }
  
  // Convert time to minutes
  let timeInMinutes: number;
  switch (timeUnit) {
    case 'minutes':
      timeInMinutes = time * CONVERSIONS.minutesToMinutes;
      break;
    case 'hours':
      timeInMinutes = time * CONVERSIONS.hoursToMinutes;
      break;
  }
  
  // Calculate GPM
  const gpm = volumeInGallons / timeInMinutes;
  
  // Calculate conversions
  return {
    gpm,
    ...calculateFlowConversions(gpm)
  };
};

export const calculateGPM = {
  fromContainerMethod,
  fromFlowRate,
  fromVolumeTime
};
