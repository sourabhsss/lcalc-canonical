
// Types for towing estimate calculations
export type VehicleType = 'sedan' | 'suv' | 'truck' | 'motorcycle' | 'rv' | 'heavy-duty';
export type TowingServiceType = 'standard' | 'flatbed' | 'motorcycle' | 'long-distance' | 'heavy-duty' | 'emergency';
export type TimeOfDay = 'day' | 'night' | 'weekend' | 'holiday';

// Input interface for the calculator
export interface TowingEstimateInputs {
  distance: number;
  vehicleType: VehicleType;
  serviceType: TowingServiceType;
  timeOfDay: TimeOfDay;
  isUrban: boolean;
  includeWinching: boolean;
  includeOffRoad: boolean;
  includeStorageDays: number;
  includeLabor: number;
}

// Result interface for the calculator
export interface TowingEstimateResult {
  baseFee: number;
  distanceFee: number;
  vehicleTypeFee: number;
  serviceTypeFee: number;
  timeOfDayFee: number;
  locationFee: number;
  additionalServicesFees: {
    winching: number;
    offRoad: number;
    storage: number;
    labor: number;
  };
  subtotal: number;
  tax: number;
  totalEstimate: number;
  breakdown: string[];
  estimatedTimeOfArrival: number;
}

// Base rate constants (in USD)
const BASE_TOWING_RATE = 75; // Base hookup fee
const MILEAGE_RATE = 3.5; // Per mile
const TAX_RATE = 0.085; // 8.5% tax rate

// Vehicle type multipliers
const VEHICLE_TYPE_MULTIPLIERS: Record<VehicleType, number> = {
  'sedan': 1.0,
  'suv': 1.2,
  'truck': 1.4,
  'motorcycle': 0.9,
  'rv': 1.8,
  'heavy-duty': 2.5
};

// Service type additional fees
const SERVICE_TYPE_FEES: Record<TowingServiceType, number> = {
  'standard': 0,
  'flatbed': 50,
  'motorcycle': 30,
  'long-distance': 100,
  'heavy-duty': 150,
  'emergency': 75
};

// Time of day surcharges
const TIME_OF_DAY_SURCHARGES: Record<TimeOfDay, number> = {
  'day': 0,
  'night': 25,
  'weekend': 35,
  'holiday': 50
};

// Additional service rates
const WINCHING_FEE = 75;
const OFF_ROAD_FEE = 100;
const STORAGE_FEE_PER_DAY = 45;
const LABOR_FEE_PER_HOUR = 85;

// Calculate towing estimate based on inputs
export const calculateTowingEstimate = (inputs: TowingEstimateInputs): TowingEstimateResult => {
  // Calculate base fees
  const baseFee = BASE_TOWING_RATE;
  const distanceFee = inputs.distance * MILEAGE_RATE;
  const vehicleTypeFee = (baseFee + distanceFee) * (VEHICLE_TYPE_MULTIPLIERS[inputs.vehicleType] - 1);
  const serviceTypeFee = SERVICE_TYPE_FEES[inputs.serviceType];
  const timeOfDayFee = TIME_OF_DAY_SURCHARGES[inputs.timeOfDay];
  const locationFee = inputs.isUrban ? 0 : 35; // Additional fee for rural areas

  // Calculate additional services fees
  const winchingFee = inputs.includeWinching ? WINCHING_FEE : 0;
  const offRoadFee = inputs.includeOffRoad ? OFF_ROAD_FEE : 0;
  const storageFee = inputs.includeStorageDays * STORAGE_FEE_PER_DAY;
  const laborFee = inputs.includeLabor * LABOR_FEE_PER_HOUR;

  // Calculate totals
  const additionalServicesFees = {
    winching: winchingFee,
    offRoad: offRoadFee,
    storage: storageFee,
    labor: laborFee
  };

  const subtotal = 
    baseFee + 
    distanceFee + 
    vehicleTypeFee + 
    serviceTypeFee + 
    timeOfDayFee + 
    locationFee + 
    winchingFee + 
    offRoadFee + 
    storageFee + 
    laborFee;

  const tax = subtotal * TAX_RATE;
  const totalEstimate = subtotal + tax;

  // Generate breakdown for display
  const breakdown = [
    `Base hookup fee: $${baseFee.toFixed(2)}`,
    `Distance fee (${inputs.distance} miles @ $${MILEAGE_RATE}/mile): $${distanceFee.toFixed(2)}`,
    `Vehicle type (${inputs.vehicleType}) adjustment: $${vehicleTypeFee.toFixed(2)}`,
    `Service type (${inputs.serviceType}) fee: $${serviceTypeFee.toFixed(2)}`,
    `Time of service (${inputs.timeOfDay}) surcharge: $${timeOfDayFee.toFixed(2)}`,
    `Location (${inputs.isUrban ? 'urban' : 'rural'}) fee: $${locationFee.toFixed(2)}`
  ];

  // Add conditional breakdown items
  if (winchingFee > 0) breakdown.push(`Winching service: $${winchingFee.toFixed(2)}`);
  if (offRoadFee > 0) breakdown.push(`Off-road recovery: $${offRoadFee.toFixed(2)}`);
  if (storageFee > 0) breakdown.push(`Vehicle storage (${inputs.includeStorageDays} days): $${storageFee.toFixed(2)}`);
  if (laborFee > 0) breakdown.push(`Additional labor (${inputs.includeLabor} hours): $${laborFee.toFixed(2)}`);

  breakdown.push(`Subtotal: $${subtotal.toFixed(2)}`);
  breakdown.push(`Tax (${(TAX_RATE * 100).toFixed(1)}%): $${tax.toFixed(2)}`);
  breakdown.push(`Total estimate: $${totalEstimate.toFixed(2)}`);

  // Calculate estimated time of arrival (in minutes)
  // This is a simple estimation: base time + time based on distance
  const BASE_ARRIVAL_TIME = 20; // minutes
  const TIME_PER_MILE = 1.5; // minutes per mile
  const estimatedTimeOfArrival = BASE_ARRIVAL_TIME + (inputs.distance * TIME_PER_MILE);

  return {
    baseFee,
    distanceFee,
    vehicleTypeFee,
    serviceTypeFee,
    timeOfDayFee,
    locationFee,
    additionalServicesFees,
    subtotal,
    tax,
    totalEstimate,
    breakdown,
    estimatedTimeOfArrival
  };
};

// FAQ content for the towing calculator
export const towingFaqs = [
  {
    question: "What factors affect the cost of towing?",
    answer: "The cost of towing is influenced by multiple factors including distance, vehicle type and weight, time of day, location, type of towing service needed, and any additional services required (such as winching, off-road recovery, or labor costs). More specialized services like flatbed towing or heavy-duty towing will generally cost more than standard towing services."
  },
  {
    question: "Is there a minimum fee for towing services?",
    answer: "Yes, most towing companies charge a base hookup fee (sometimes called a call-out fee) just to send a truck to your location. This fee typically ranges from $50 to $150 depending on your location and the company, and it's charged regardless of how far your vehicle needs to be towed."
  },
  {
    question: "Why does towing cost more at night or on weekends?",
    answer: "Towing services often charge higher rates during nights, weekends, and holidays due to increased labor costs and lower availability of staff during these times. Additionally, operating tow trucks in darkness can be more challenging and time-consuming, which may result in surcharges of 25-50% above standard daytime rates."
  },
  {
    question: "How accurate are towing cost estimators?",
    answer: "Online towing cost estimators provide a reasonable approximation but can't account for all variables. Local market conditions, company policies, and unforeseen circumstances can all affect the final price. It's always best to confirm the estimate directly with the towing company before agreeing to service, and ask if there might be any additional charges that could apply to your specific situation."
  },
  {
    question: "Can I negotiate the price of towing?",
    answer: "While some aspects of towing costs are fixed (like base rates), there may be room for negotiation in certain circumstances, especially for longer distance tows. It's better to discuss pricing before the tow begins. Some companies might offer discounts for AAA members, military personnel, seniors, or if you're willing to pay in cash rather than by credit card."
  },
  {
    question: "Does car insurance cover towing expenses?",
    answer: "Many comprehensive auto insurance policies and roadside assistance plans cover towing costs up to certain limits. Check your policy details or contact your insurance provider to verify coverage before paying out of pocket. Keep in mind that even if towing is covered, you might need to pay upfront and get reimbursed later, so save all receipts and documentation."
  },
  {
    question: "How is the towing distance calculated?",
    answer: "Towing distance is typically calculated as the distance between the pickup location and the destination. Some companies charge based on the total round-trip mileage of the tow truck (including the distance to reach you), while others only charge for the actual towing distance. This calculator uses the direct towing distance for its estimates."
  },
  {
    question: "What's the difference between flatbed and standard towing?",
    answer: "Standard towing (hook and chain or wheel-lift) lifts only one end of the vehicle while the other wheels remain on the road. Flatbed towing loads the entire vehicle onto the truck bed, keeping all wheels off the ground. Flatbed towing is generally safer for the vehicle and required for all-wheel drive vehicles, low-clearance vehicles, and many modern cars, but it typically costs 20-50% more than standard towing."
  }
];

// National average towing costs by distance
export const nationalTowingCostData = [
  { distance: "5 miles", avgCost: "$60 - $125" },
  { distance: "10 miles", avgCost: "$75 - $175" },
  { distance: "20 miles", avgCost: "$105 - $250" },
  { distance: "50 miles", avgCost: "$165 - $450" },
  { distance: "100 miles", avgCost: "$275 - $675" },
  { distance: "Long distance (100+ miles)", avgCost: "$2 - $4 per mile" }
];

// Towing costs by vehicle type
export const vehicleTowingCostData = [
  { vehicleType: "Motorcycle", avgCost: "$75 - $150" },
  { vehicleType: "Sedan/Small Car", avgCost: "$80 - $200" },
  { vehicleType: "SUV/Crossover", avgCost: "$100 - $250" },
  { vehicleType: "Pickup Truck", avgCost: "$110 - $275" },
  { vehicleType: "Large SUV/Van", avgCost: "$125 - $300" },
  { vehicleType: "RV/Motorhome", avgCost: "$200 - $500" },
  { vehicleType: "Heavy Duty Truck", avgCost: "$300 - $750+" }
];

// Additional services average costs
export const additionalServicesCostData = [
  { service: "Winching", avgCost: "$50 - $250" },
  { service: "Off-road recovery", avgCost: "$75 - $300" },
  { service: "Lockout service", avgCost: "$50 - $150" },
  { service: "Jump start", avgCost: "$50 - $120" },
  { service: "Tire change", avgCost: "$50 - $150" },
  { service: "Fuel delivery", avgCost: "$50 - $125" },
  { service: "Vehicle storage (per day)", avgCost: "$30 - $80" }
];
