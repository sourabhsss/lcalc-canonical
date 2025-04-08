
// BMR Calculation using Mifflin-St Jeor equation
export const calculateBMR = (
  gender: 'male' | 'female',
  age: number,
  heightCm: number,
  weightKg: number
): number => {
  // Mifflin-St Jeor Equation
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
};

// TDEE Calculation
export const calculateTDEE = (bmr: number, activityLevel: string): number => {
  const activityMultipliers = {
    sedentary: 1.2, // Little or no exercise
    light: 1.375, // Light exercise 1-3 days/week
    moderate: 1.55, // Moderate exercise 3-5 days/week
    active: 1.725, // Hard exercise 6-7 days/week
    extreme: 1.9 // Very hard exercise, physical job or training twice a day
  };

  return bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers];
};

// Macronutrient calculation
export const calculateMacros = (
  weightKg: number, 
  totalCalories: number, 
  goal: string
): { protein: number; carbs: number; fat: number } => {
  let proteinPercentage: number;
  let fatPercentage: number;
  let carbPercentage: number;

  switch (goal) {
    case 'lose':
      // Higher protein for satiety and muscle preservation during weight loss
      proteinPercentage = 0.35; // 35% of calories from protein
      fatPercentage = 0.3; // 30% of calories from fat
      carbPercentage = 0.35; // 35% of calories from carbs
      break;
    case 'gain':
      // Higher carbs to support training and muscle growth
      proteinPercentage = 0.3; // 30% of calories from protein
      fatPercentage = 0.25; // 25% of calories from fat
      carbPercentage = 0.45; // 45% of calories from carbs
      break;
    case 'maintain':
    default:
      // Balanced macros for maintenance
      proteinPercentage = 0.3; // 30% of calories from protein
      fatPercentage = 0.3; // 30% of calories from fat
      carbPercentage = 0.4; // 40% of calories from carbs
  }

  // Calculate grams of each macronutrient
  // Protein and carbs have 4 calories per gram, fat has 9 calories per gram
  const proteinGrams = (proteinPercentage * totalCalories) / 4;
  const fatGrams = (fatPercentage * totalCalories) / 9;
  const carbGrams = (carbPercentage * totalCalories) / 4;

  return {
    protein: proteinGrams,
    carbs: carbGrams,
    fat: fatGrams
  };
};

// Function to get activity level factor (for display purposes)
export const getActivityFactor = (activityLevel: string): number => {
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    extreme: 1.9
  };

  return activityFactors[activityLevel as keyof typeof activityFactors];
};

// Function to determine caloric adjustment based on weight goal
export const getCalorieAdjustment = (goal: string): number => {
  switch (goal) {
    case 'lose':
      return -500; // 500 calorie deficit for weight loss
    case 'gain':
      return 500; // 500 calorie surplus for weight gain
    case 'maintain':
    default:
      return 0; // No adjustment for maintenance
  }
};

// Function to estimate weight change over time
export const estimateWeightChange = (
  calorieAdjustment: number,
  timeInWeeks: number
): number => {
  // 1 pound of fat is approximately 3,500 calories
  const weeklyWeightChange = calorieAdjustment * 7 / 3500;
  return weeklyWeightChange * timeInWeeks;
};
