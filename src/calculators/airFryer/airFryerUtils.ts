
import { z } from 'zod';

// Types for the calculator
export type FoodType = 
  | 'meat' 
  | 'poultry' 
  | 'fish' 
  | 'vegetables' 
  | 'frozen' 
  | 'baked';

export type MeatDoneness = 
  | 'rare' 
  | 'medium-rare' 
  | 'medium' 
  | 'medium-well' 
  | 'well-done';

export type AirFryerSize = 
  | 'small' 
  | 'medium' 
  | 'large';

export interface AirFryerInputs {
  foodType: FoodType;
  foodWeight: number; // in ounces
  thickness: number; // in inches
  airFryerSize: AirFryerSize;
  preheated: boolean;
  doneness?: MeatDoneness; // Only applicable for meat
  frozen: boolean;
}

export interface AirFryerResult {
  cookingTime: number; // in minutes
  temperature: number; // in Fahrenheit
  flipTime?: number; // when to flip food, in minutes from start
  tips: string[];
  internalTemperature?: number; // for meats, in Fahrenheit
  nutritionImpact: string;
  energyUsage: number; // in kWh
  costSavings: number; // compared to conventional oven
  breakdown: string[];
}

// Schema for validation
export const airFryerSchema = z.object({
  foodType: z.enum(['meat', 'poultry', 'fish', 'vegetables', 'frozen', 'baked']),
  foodWeight: z.number().min(0.1).max(80),
  thickness: z.number().min(0.1).max(6),
  airFryerSize: z.enum(['small', 'medium', 'large']),
  preheated: z.boolean(),
  doneness: z.enum(['rare', 'medium-rare', 'medium', 'medium-well', 'well-done']).optional(),
  frozen: z.boolean()
});

// Base cooking times per food type (minutes per ounce at 1 inch thickness)
const baseCookingTimes: Record<FoodType, number> = {
  meat: 2.5,
  poultry: 3,
  fish: 2,
  vegetables: 1.5,
  frozen: 4,
  baked: 3.5
};

// Base temperatures per food type (in Fahrenheit)
const baseTemperatures: Record<FoodType, number> = {
  meat: 375,
  poultry: 380,
  fish: 350,
  vegetables: 375,
  frozen: 400,
  baked: 350
};

// Size multipliers - how air fryer size affects cooking time
const sizeMultipliers: Record<AirFryerSize, number> = {
  small: 0.9, // Smaller air fryers cook faster due to less air volume
  medium: 1,
  large: 1.1
};

// Doneness modifiers for meat (adds or subtracts time)
const donenessModifiers: Record<MeatDoneness, number> = {
  'rare': 0.7,
  'medium-rare': 0.85,
  'medium': 1,
  'medium-well': 1.15,
  'well-done': 1.3
};

// Recommended internal temperatures (in Fahrenheit)
const internalTemperatures: Record<string, number> = {
  'meat-rare': 125,
  'meat-medium-rare': 135,
  'meat-medium': 145,
  'meat-medium-well': 150,
  'meat-well-done': 160,
  'poultry': 165,
  'fish': 145
};

// Base power usage by size (kWh for 30 minutes)
const basePowerUsage: Record<AirFryerSize, number> = {
  small: 0.35,
  medium: 0.5,
  large: 0.7
};

// Calculation function
export function calculateAirFryerTime(inputs: AirFryerInputs): AirFryerResult {
  const { foodType, foodWeight, thickness, airFryerSize, preheated, doneness, frozen } = inputs;
  
  // Start with base cooking time, adjusted for weight and thickness
  let cookingTime = baseCookingTimes[foodType] * foodWeight * (thickness * 0.8);
  
  // Apply size multiplier
  cookingTime *= sizeMultipliers[airFryerSize];
  
  // Apply preheating adjustment
  if (!preheated) {
    cookingTime += 3; // Add 3 minutes if not preheated
  }
  
  // Apply frozen modifier
  if (frozen) {
    cookingTime *= 1.5; // Frozen food takes 50% longer
  }
  
  // Apply doneness modifier if it's meat
  if (foodType === 'meat' && doneness) {
    cookingTime *= donenessModifiers[doneness];
  }
  
  // Determine temperature
  let temperature = baseTemperatures[foodType];
  if (frozen) {
    temperature += 25; // Add 25°F for frozen foods
  }
  
  // Round to nearest minute
  cookingTime = Math.round(cookingTime);
  
  // Determine flip time (roughly halfway, but at least 5 minutes in)
  const flipTime = Math.max(5, Math.round(cookingTime / 2));
  
  // Determine internal temperature for meats and poultry
  let internalTemperature: number | undefined;
  if (foodType === 'meat' && doneness) {
    internalTemperature = internalTemperatures[`meat-${doneness}`];
  } else if (foodType === 'poultry') {
    internalTemperature = internalTemperatures.poultry;
  } else if (foodType === 'fish') {
    internalTemperature = internalTemperatures.fish;
  }
  
  // Calculate energy usage - based on cooking time and air fryer size
  const energyUsage = basePowerUsage[airFryerSize] * (cookingTime / 30);
  
  // Estimate cost savings (conventional oven uses roughly 2.3 kWh for 30 minutes)
  const conventionalOvenEnergy = 2.3 * (cookingTime / 30);
  const costSavings = (conventionalOvenEnergy - energyUsage) * 0.15; // Assuming $0.15 per kWh
  
  // Generate tips based on food type
  const tips = generateTips(foodType, frozen, cookingTime);
  
  // Generate nutritional impact information
  const nutritionImpact = generateNutritionImpact(foodType);
  
  // Generate breakdown steps
  const breakdown = generateBreakdown(inputs, cookingTime, temperature);
  
  return {
    cookingTime,
    temperature,
    flipTime,
    tips,
    internalTemperature,
    nutritionImpact,
    energyUsage: parseFloat(energyUsage.toFixed(2)),
    costSavings: parseFloat(costSavings.toFixed(2)),
    breakdown
  };
}

// Helper function to generate tips
function generateTips(foodType: FoodType, frozen: boolean, cookingTime: number): string[] {
  const tips: string[] = [];
  
  // Common tip for all food types
  tips.push("Shake the basket or turn food halfway through cooking for even results.");
  
  // Food-specific tips
  switch (foodType) {
    case 'meat':
      tips.push("Let meat rest for 3-5 minutes after cooking to allow juices to redistribute.");
      tips.push("For steaks and chops, pat dry before cooking for better browning.");
      break;
    case 'poultry':
      tips.push("Spray chicken skin lightly with oil for extra crispiness.");
      tips.push("Check for doneness with a meat thermometer - internal temperature should reach 165°F.");
      break;
    case 'fish':
      tips.push("Fish is done when it flakes easily with a fork.");
      tips.push("Spray the basket with oil to prevent fish from sticking.");
      break;
    case 'vegetables':
      tips.push("Toss vegetables in 1-2 teaspoons of oil before air frying for better texture.");
      tips.push("Don't overcrowd the basket - cook in batches if needed for better air circulation.");
      break;
    case 'frozen':
      tips.push("No need to thaw frozen foods before air frying.");
      tips.push("Spray frozen foods with a light coating of oil for better crispness.");
      break;
    case 'baked':
      tips.push("Line the basket with parchment paper for easier cleanup with baked goods.");
      tips.push("Check doneness a few minutes early, as baked goods can cook faster in an air fryer.");
      break;
  }
  
  // Timing tips
  if (cookingTime > 15) {
    tips.push("For longer cooking times, check food periodically to avoid overcooking.");
  }
  
  // Frozen tips
  if (frozen) {
    tips.push("Separate frozen items that might be stuck together before cooking.");
  }
  
  return tips;
}

// Helper function to generate nutrition impact
function generateNutritionImpact(foodType: FoodType): string {
  switch (foodType) {
    case 'meat':
      return "Air frying meat can reduce fat content by up to 75% compared to deep frying, while maintaining juiciness.";
    case 'poultry':
      return "Air-fried chicken contains up to 70% fewer calories than fried chicken, with significantly less fat.";
    case 'fish':
      return "Air frying preserves omega-3 fatty acids in fish while reducing additional fats typically used in other cooking methods.";
    case 'vegetables':
      return "Air-fried vegetables retain more nutrients than boiled vegetables and develop delicious caramelization similar to roasting.";
    case 'frozen':
      return "Air frying frozen foods typically reduces fat content by 65-80% compared to conventional frying methods.";
    case 'baked':
      return "Air-fried baked goods often require less butter or oil, resulting in lower calorie and fat content.";
    default:
      return "Air frying generally reduces fat content by 70-80% compared to traditional frying methods.";
  }
}

// Helper function to generate detailed breakdown
function generateBreakdown(inputs: AirFryerInputs, cookingTime: number, temperature: number): string[] {
  const { foodType, foodWeight, thickness, airFryerSize, preheated, doneness, frozen } = inputs;
  
  const breakdown: string[] = [];
  
  breakdown.push(`Base cooking time for ${foodType}: ${baseCookingTimes[foodType].toFixed(1)} min/oz`);
  breakdown.push(`Adjusted for weight (${foodWeight} oz): ${(baseCookingTimes[foodType] * foodWeight).toFixed(1)} min`);
  breakdown.push(`Thickness adjustment (${thickness} inch): ${(baseCookingTimes[foodType] * foodWeight * thickness * 0.8).toFixed(1)} min`);
  breakdown.push(`Air fryer size adjustment (${airFryerSize}): ${sizeMultipliers[airFryerSize]}x multiplier`);
  
  if (!preheated) {
    breakdown.push("Not preheated: +3 minutes");
  }
  
  if (frozen) {
    breakdown.push("Frozen food: 1.5x cooking time");
  }
  
  if (foodType === 'meat' && doneness) {
    breakdown.push(`Doneness (${doneness}): ${donenessModifiers[doneness]}x multiplier`);
  }
  
  breakdown.push(`Final cooking time: ${cookingTime} minutes at ${temperature}°F`);
  
  return breakdown;
}

// Example foods for each category with recommended settings
export const foodExamples: Record<FoodType, {name: string, thickness: number, weight: number, notes: string}[]> = {
  meat: [
    { name: "Steak (1-inch ribeye)", thickness: 1, weight: 8, notes: "Flip halfway through; rest 5 minutes after cooking" },
    { name: "Burger patty", thickness: 0.75, weight: 4, notes: "Flatten patty evenly; press center slightly to prevent bulging" },
    { name: "Pork chop", thickness: 1, weight: 6, notes: "Pat dry before cooking; check internal temperature" }
  ],
  poultry: [
    { name: "Chicken breast", thickness: 1, weight: 6, notes: "Pound to even thickness for more consistent cooking" },
    { name: "Chicken wings", thickness: 0.75, weight: 1.5, notes: "Per wing; cook in single layer" },
    { name: "Turkey burger", thickness: 0.75, weight: 4, notes: "Add a bit of oil to prevent dryness" }
  ],
  fish: [
    { name: "Salmon fillet", thickness: 1, weight: 6, notes: "Skin side down first; no need to flip thin fillets" },
    { name: "Fish sticks", thickness: 0.5, weight: 1, notes: "Per stick; arrange in single layer" },
    { name: "Shrimp", thickness: 0.5, weight: 0.5, notes: "Per large shrimp; don't overcrowd" }
  ],
  vegetables: [
    { name: "French fries (fresh cut)", thickness: 0.5, weight: 4, notes: "Per serving; shake basket several times" },
    { name: "Broccoli florets", thickness: 1, weight: 4, notes: "Toss with 1 tsp oil; great with parmesan" },
    { name: "Zucchini slices", thickness: 0.25, weight: 4, notes: "Cut evenly; don't overlap too much" }
  ],
  frozen: [
    { name: "Frozen french fries", thickness: 0.5, weight: 4, notes: "Per serving; shake basket twice during cooking" },
    { name: "Frozen chicken nuggets", thickness: 0.75, weight: 1, notes: "Per nugget; arrange in single layer" },
    { name: "Frozen mozzarella sticks", thickness: 1, weight: 1, notes: "Per stick; no need to thaw" }
  ],
  baked: [
    { name: "Cinnamon rolls", thickness: 1, weight: 2, notes: "Per roll; line basket with parchment" },
    { name: "Cookies", thickness: 0.5, weight: 1, notes: "Per cookie; leave space between" },
    { name: "Banana bread", thickness: 3, weight: 16, notes: "Use cake pan that fits in air fryer; check with toothpick" }
  ]
};

// FAQs for the air fryer calculator
export const airFryerFaqs = [
  {
    question: "How accurate is this air fryer calculator?",
    answer: "This calculator provides estimates based on average air fryer performance and standard food characteristics. Actual cooking times may vary based on your specific air fryer model, food quality, and quantity. It's always best to check your food periodically, especially the first time you cook a specific item."
  },
  {
    question: "Do I need to preheat my air fryer?",
    answer: "Preheating is recommended for most foods to ensure even cooking and better crisp results. Our calculator adds time if you select 'not preheated.' However, some air fryer models don't require preheating. Check your manufacturer's instructions for recommendations specific to your model."
  },
  {
    question: "Why do I need to shake or flip food when air frying?",
    answer: "Air fryers cook by circulating hot air around food. Shaking or flipping ensures all sides get exposed to the hot air, resulting in even cooking and consistent browning. Some foods like french fries, vegetables, and chicken wings particularly benefit from being shaken or flipped halfway through cooking."
  },
  {
    question: "How does food thickness affect cooking time?",
    answer: "Thickness significantly impacts cooking time because heat needs to penetrate to the center of the food. Our calculator adjusts for thickness - thicker items require more time to cook all the way through. For best results, try to use food pieces of consistent thickness in a single batch."
  },
  {
    question: "What internal temperature should meat reach when cooking in an air fryer?",
    answer: "Safe internal temperatures are: 145°F for whole cuts of beef, pork, lamb, and veal (with a 3-minute rest time); 160°F for ground meats; and 165°F for all poultry. Our calculator provides recommended internal temperatures based on your selected food type and doneness level."
  },
  {
    question: "Can I cook frozen food directly in the air fryer?",
    answer: "Yes, air fryers are excellent for cooking frozen foods without thawing first. The calculator adjusts cooking times and temperatures for frozen items. Simply select 'frozen' when calculating your cooking time. Frozen foods typically turn out crispy and well-cooked in an air fryer."
  },
  {
    question: "How much energy does an air fryer save compared to a conventional oven?",
    answer: "Air fryers typically use 70-80% less energy than conventional ovens for similar cooking tasks. Our calculator estimates energy usage and cost savings based on your inputs. The smaller cooking chamber and more efficient heating element contribute to these savings."
  },
  {
    question: "Do I need to use oil in an air fryer?",
    answer: "While air fryers require significantly less oil than deep fryers, a light spray or coating of oil (1-2 teaspoons) on foods like fresh vegetables, meats, and homemade fries can improve browning and crispness. Many frozen pre-fried foods already contain oil and don't need additional oil."
  },
  {
    question: "Why might my cooking results differ from the calculator's estimates?",
    answer: "Variations can occur due to differences in air fryer models (cooking technology, power, size), starting food temperature, how crowded the basket is, and food preparation methods. Use our calculator as a starting point and adjust based on your experience with your specific air fryer."
  },
  {
    question: "What's the difference between cooking in small, medium, and large air fryers?",
    answer: "Smaller air fryers heat up faster and often cook food more quickly because they have less air volume to heat. Larger air fryers may take longer to heat up and cook food, but offer more capacity. Our calculator adjusts cooking times based on size to account for these differences."
  }
];

