import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { calculateTDEE, calculateBMR, calculateMacros } from './tdeeUtils';

interface TDEEFormProps {
  onCalculate: (result: {
    bmr: number;
    tdee: number;
    activityLevel: string;
    weightGoal: {
      goal: string;
      calories: number;
    };
    macros: {
      protein: number;
      carbs: number;
      fat: number;
    };
  }) => void;
}

const TDEEForm: React.FC<TDEEFormProps> = ({ onCalculate }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('30');
  const [height, setHeight] = useState<string>('170');
  const [weight, setWeight] = useState<string>('70');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'in'>('cm');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [weightGoal, setWeightGoal] = useState<string>('maintain');
  const [errors, setErrors] = useState<{
    age?: string;
    height?: string;
    weight?: string;
  }>({});

  const validateInputs = (): boolean => {
    const newErrors: {
      age?: string;
      height?: string;
      weight?: string;
    } = {};

    if (!age || isNaN(Number(age)) || Number(age) < 15 || Number(age) > 100) {
      newErrors.age = 'Please enter a valid age between 15 and 100';
    }

    if (!height || isNaN(Number(height)) || Number(height) <= 0) {
      newErrors.height = 'Please enter a valid height';
    } else if (heightUnit === 'cm' && (Number(height) < 100 || Number(height) > 250)) {
      newErrors.height = 'Height should be between 100 and 250 cm';
    } else if (heightUnit === 'in' && (Number(height) < 39 || Number(height) > 98)) {
      newErrors.height = 'Height should be between 39 and 98 inches';
    }

    if (!weight || isNaN(Number(weight)) || Number(weight) <= 0) {
      newErrors.weight = 'Please enter a valid weight';
    } else if (weightUnit === 'kg' && (Number(weight) < 30 || Number(weight) > 300)) {
      newErrors.weight = 'Weight should be between 30 and 300 kg';
    } else if (weightUnit === 'lb' && (Number(weight) < 66 || Number(weight) > 661)) {
      newErrors.weight = 'Weight should be between 66 and 661 lbs';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateInputs()) {
      return;
    }

    // Convert units if needed
    const weightInKg = weightUnit === 'kg' ? Number(weight) : Number(weight) * 0.453592;
    const heightInCm = heightUnit === 'cm' ? Number(height) : Number(height) * 2.54;
    
    // Calculate BMR
    const bmr = calculateBMR(gender, Number(age), heightInCm, weightInKg);
    
    // Calculate TDEE
    const tdee = calculateTDEE(bmr, activityLevel);
    
    // Calculate weight goal calories
    let goalCalories = tdee;
    if (weightGoal === 'lose') {
      goalCalories = tdee - 500; // 500 calorie deficit for moderate weight loss
    } else if (weightGoal === 'gain') {
      goalCalories = tdee + 500; // 500 calorie surplus for moderate weight gain
    }
    
    // Calculate macros based on goal
    const macros = calculateMacros(weightInKg, goalCalories, weightGoal);
    
    // Get activity level display name
    const activityLevelMap = {
      sedentary: 'Sedentary (little or no exercise)',
      light: 'Lightly Active (light exercise 1-3 days/week)',
      moderate: 'Moderately Active (moderate exercise 3-5 days/week)',
      active: 'Very Active (hard exercise 6-7 days/week)',
      extreme: 'Extremely Active (very hard exercise, physical job or training twice a day)'
    } as const;
    
    const activityLevelName = activityLevelMap[activityLevel as keyof typeof activityLevelMap];
    
    // Get weight goal display name
    const weightGoalMap = {
      lose: 'Weight Loss',
      maintain: 'Weight Maintenance',
      gain: 'Weight Gain'
    } as const;
    
    const weightGoalName = weightGoalMap[weightGoal as keyof typeof weightGoalMap];
    
    onCalculate({
      bmr,
      tdee,
      activityLevel: activityLevelName,
      weightGoal: {
        goal: weightGoalName,
        calories: goalCalories
      },
      macros
    });
  };

  return (
    <form onSubmit={handleCalculate} className="space-y-6">
      {/* Gender Selection */}
      <div>
        <Label htmlFor="gender">Gender</Label>
        <div className="mt-2 flex">
          <button
            type="button"
            className={`flex-1 py-2 rounded-l-md border border-r-0 ${
              gender === 'male' ? 'bg-primary text-white' : 'bg-background'
            }`}
            onClick={() => setGender('male')}
          >
            Male
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-r-md border ${
              gender === 'female' ? 'bg-primary text-white' : 'bg-background'
            }`}
            onClick={() => setGender('female')}
          >
            Female
          </button>
        </div>
      </div>

      {/* Age Input */}
      <div>
        <Label htmlFor="age">Age (years)</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-2"
          placeholder="Enter your age"
          min="15"
          max="100"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>

      {/* Height Input */}
      <div>
        <Label htmlFor="height">Height</Label>
        <div className="flex mt-2">
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="rounded-r-none flex-1"
            placeholder={`Enter your height in ${heightUnit}`}
          />
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value as 'cm' | 'in')}
            className="px-3 py-2 border rounded-l-none rounded-r-md bg-accent/10"
          >
            <option value="cm">cm</option>
            <option value="in">in</option>
          </select>
        </div>
        {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
      </div>

      {/* Weight Input */}
      <div>
        <Label htmlFor="weight">Weight</Label>
        <div className="flex mt-2">
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="rounded-r-none flex-1"
            placeholder={`Enter your weight in ${weightUnit}`}
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'lb')}
            className="px-3 py-2 border rounded-l-none rounded-r-md bg-accent/10"
          >
            <option value="kg">kg</option>
            <option value="lb">lb</option>
          </select>
        </div>
        {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
      </div>

      {/* Activity Level Selection */}
      <div>
        <Label htmlFor="activityLevel">Activity Level</Label>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="w-full mt-2 px-3 py-2 border rounded-md"
        >
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Lightly Active (light exercise 1-3 days/week)</option>
          <option value="moderate">Moderately Active (moderate exercise 3-5 days/week)</option>
          <option value="active">Very Active (hard exercise 6-7 days/week)</option>
          <option value="extreme">Extremely Active (very hard exercise, physical job or training twice a day)</option>
        </select>
      </div>

      {/* Weight Goal Selection */}
      <div>
        <Label htmlFor="weightGoal">Weight Goal</Label>
        <select
          id="weightGoal"
          value={weightGoal}
          onChange={(e) => setWeightGoal(e.target.value)}
          className="w-full mt-2 px-3 py-2 border rounded-md"
        >
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight</option>
        </select>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full">Calculate TDEE</Button>
    </form>
  );
};

export default TDEEForm;
