
import React from 'react';
import { Activity, Dumbbell, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TDEEResultProps {
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
}

const TDEEResult: React.FC<TDEEResultProps> = ({ 
  bmr, 
  tdee, 
  activityLevel, 
  weightGoal,
  macros 
}) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Your TDEE Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Activity className="h-5 w-5 text-primary mr-2" />
              <h4 className="font-medium">Energy Requirements</h4>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Basal Metabolic Rate (BMR)</span>
                <span className="font-semibold">{Math.round(bmr)} Calories/day</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total Daily Energy Expenditure (TDEE)</span>
                <span className="font-semibold">{Math.round(tdee)} Calories/day</span>
              </div>
              
              <div className="flex justify-between items-center text-sm pt-2 border-t">
                <span>Activity Level</span>
                <span className="text-muted-foreground">{activityLevel}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Dumbbell className="h-5 w-5 text-primary mr-2" />
              <h4 className="font-medium">{weightGoal.goal} Plan</h4>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Recommended Daily Calories</span>
              <span className="font-semibold text-lg">{Math.round(weightGoal.calories)} Calories/day</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {weightGoal.goal === 'Weight Loss' && (
                <p>This represents a moderate calorie deficit for sustainable weight loss of about 0.5-1 pound per week.</p>
              )}
              {weightGoal.goal === 'Weight Maintenance' && (
                <p>This is your maintenance level to support your current weight and activity level.</p>
              )}
              {weightGoal.goal === 'Weight Gain' && (
                <p>This represents a moderate calorie surplus for steady muscle gain of about 0.5 pound per week.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <Utensils className="h-5 w-5 text-primary mr-2" />
            <h4 className="font-medium">Recommended Macronutrient Breakdown</h4>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-primary/5 p-3 rounded text-center">
              <div className="text-lg font-semibold">{Math.round(macros.protein)}g</div>
              <div className="text-sm text-muted-foreground">Protein</div>
              <div className="text-xs mt-1 text-muted-foreground">{Math.round(macros.protein * 4)} calories</div>
            </div>
            
            <div className="bg-primary/5 p-3 rounded text-center">
              <div className="text-lg font-semibold">{Math.round(macros.carbs)}g</div>
              <div className="text-sm text-muted-foreground">Carbohydrates</div>
              <div className="text-xs mt-1 text-muted-foreground">{Math.round(macros.carbs * 4)} calories</div>
            </div>
            
            <div className="bg-primary/5 p-3 rounded text-center">
              <div className="text-lg font-semibold">{Math.round(macros.fat)}g</div>
              <div className="text-sm text-muted-foreground">Fat</div>
              <div className="text-xs mt-1 text-muted-foreground">{Math.round(macros.fat * 9)} calories</div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-muted-foreground">
            <p>This macronutrient breakdown is designed to support your {weightGoal.goal.toLowerCase()} goals while ensuring adequate nutrition. Adjust based on personal preferences and specific dietary needs.</p>
          </div>
          
          <div className="relative pt-2 mt-4">
            <div className="flex h-6 overflow-hidden rounded bg-gray-100">
              <div
                className="bg-blue-500"
                style={{ width: `${(macros.protein * 4 / weightGoal.calories) * 100}%` }}
              ></div>
              <div
                className="bg-green-500"
                style={{ width: `${(macros.carbs * 4 / weightGoal.calories) * 100}%` }}
              ></div>
              <div
                className="bg-yellow-500"
                style={{ width: `${(macros.fat * 9 / weightGoal.calories) * 100}%` }}
              ></div>
            </div>
            <div className="flex text-xs justify-between text-muted-foreground mt-1">
              <span>Protein: {Math.round((macros.protein * 4 / weightGoal.calories) * 100)}%</span>
              <span>Carbs: {Math.round((macros.carbs * 4 / weightGoal.calories) * 100)}%</span>
              <span>Fat: {Math.round((macros.fat * 9 / weightGoal.calories) * 100)}%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-primary/5 p-4 rounded-md border border-primary/10">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> These calculations provide estimates based on statistical formulas. Individual metabolic rates and energy needs can vary. For precise guidance, consult with a healthcare professional or registered dietitian.
        </p>
      </div>
    </div>
  );
};

export default TDEEResult;
