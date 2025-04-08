
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChefHat, RotateCcw } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { AlertCircle } from 'lucide-react';
import { AirFryerInputs, FoodType, AirFryerSize, MeatDoneness, foodExamples } from './airFryerUtils';

interface AirFryerFormProps {
  onCalculate: (inputs: AirFryerInputs) => void;
  onReset: () => void;
}

const AirFryerForm: React.FC<AirFryerFormProps> = ({ onCalculate, onReset }) => {
  const [foodType, setFoodType] = useState<FoodType>('meat');
  const [foodWeight, setFoodWeight] = useState<number>(6);
  const [thickness, setThickness] = useState<number>(1);
  const [airFryerSize, setAirFryerSize] = useState<AirFryerSize>('medium');
  const [preheated, setPreheated] = useState<boolean>(true);
  const [doneness, setDoneness] = useState<MeatDoneness>('medium');
  const [frozen, setFrozen] = useState<boolean>(false);
  const [showExamples, setShowExamples] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (isNaN(foodWeight) || foodWeight <= 0) {
      errors.foodWeight = "Please enter a valid weight greater than 0";
    } else if (foodWeight > 80) {
      errors.foodWeight = "Weight should not exceed 80 ounces (5 pounds)";
    }
    
    if (isNaN(thickness) || thickness <= 0) {
      errors.thickness = "Please enter a valid thickness greater than 0";
    } else if (thickness > 6) {
      errors.thickness = "Thickness should not exceed 6 inches";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const inputs: AirFryerInputs = {
      foodType,
      foodWeight,
      thickness,
      airFryerSize,
      preheated,
      frozen,
      doneness: foodType === 'meat' ? doneness : undefined
    };
    
    onCalculate(inputs);
  };

  const handleReset = () => {
    setFoodType('meat');
    setFoodWeight(6);
    setThickness(1);
    setAirFryerSize('medium');
    setPreheated(true);
    setDoneness('medium');
    setFrozen(false);
    setShowExamples(false);
    setFormErrors({});
    onReset();
  };

  // Load example food settings
  const loadExample = (example: {name: string, thickness: number, weight: number}) => {
    setThickness(example.thickness);
    setFoodWeight(example.weight);
  };

  return (
    <Card className="p-6 bg-white border rounded-lg shadow-sm">
      <form onSubmit={handleCalculate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Type */}
          <div className="space-y-2">
            <Label htmlFor="foodType">Food Type</Label>
            <Select
              value={foodType}
              onValueChange={(value) => setFoodType(value as FoodType)}
            >
              <SelectTrigger id="foodType">
                <SelectValue placeholder="Select food type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meat">Meat (Beef, Pork, Lamb)</SelectItem>
                <SelectItem value="poultry">Poultry (Chicken, Turkey)</SelectItem>
                <SelectItem value="fish">Fish & Seafood</SelectItem>
                <SelectItem value="vegetables">Vegetables & Sides</SelectItem>
                <SelectItem value="frozen">Frozen Foods</SelectItem>
                <SelectItem value="baked">Baked Goods</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Air Fryer Size */}
          <div className="space-y-2">
            <Label htmlFor="airFryerSize">Air Fryer Size</Label>
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-1">
                  <Select
                    value={airFryerSize}
                    onValueChange={(value) => setAirFryerSize(value as AirFryerSize)}
                  >
                    <SelectTrigger id="airFryerSize">
                      <SelectValue placeholder="Select air fryer size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (1-2 quarts)</SelectItem>
                      <SelectItem value="medium">Medium (3-5 quarts)</SelectItem>
                      <SelectItem value="large">Large (6+ quarts)</SelectItem>
                    </SelectContent>
                  </Select>
                  <AlertCircle size={16} className="text-muted-foreground cursor-help" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-medium">Air Fryer Sizes</h4>
                  <p className="text-sm">
                    <strong>Small (1-2 quarts):</strong> Perfect for 1-2 people, snacks, sides
                  </p>
                  <p className="text-sm">
                    <strong>Medium (3-5 quarts):</strong> Good for 2-4 people, most common size
                  </p>
                  <p className="text-sm">
                    <strong>Large (6+ quarts):</strong> Family size, can cook whole chickens
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          {/* Food Weight */}
          <div className="space-y-2">
            <Label htmlFor="foodWeight">Food Weight (oz)</Label>
            <Input
              id="foodWeight"
              type="number"
              min="0.1"
              step="0.1"
              value={foodWeight}
              onChange={(e) => setFoodWeight(parseFloat(e.target.value))}
              className={formErrors.foodWeight ? "border-red-500" : ""}
            />
            {formErrors.foodWeight && <p className="text-red-500 text-sm">{formErrors.foodWeight}</p>}
          </div>

          {/* Food Thickness */}
          <div className="space-y-2">
            <Label htmlFor="thickness">Thickness (inches)</Label>
            <Input
              id="thickness"
              type="number"
              min="0.1"
              step="0.1"
              value={thickness}
              onChange={(e) => setThickness(parseFloat(e.target.value))}
              className={formErrors.thickness ? "border-red-500" : ""}
            />
            {formErrors.thickness && <p className="text-red-500 text-sm">{formErrors.thickness}</p>}
          </div>

          {/* Preheated */}
          <div className="space-y-2">
            <Label>Preheated?</Label>
            <div className="flex items-center space-x-2">
              <Switch 
                id="preheated" 
                checked={preheated}
                onCheckedChange={setPreheated}
              />
              <Label htmlFor="preheated" className="cursor-pointer">
                {preheated ? "Yes, air fryer is preheated" : "No, starting with cold air fryer"}
              </Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Preheating usually takes 2-3 minutes and helps achieve better results
            </p>
          </div>

          {/* Frozen */}
          <div className="space-y-2">
            <Label>Frozen?</Label>
            <div className="flex items-center space-x-2">
              <Switch 
                id="frozen" 
                checked={frozen}
                onCheckedChange={setFrozen}
              />
              <Label htmlFor="frozen" className="cursor-pointer">
                {frozen ? "Yes, cooking from frozen" : "No, cooking fresh/thawed food"}
              </Label>
            </div>
          </div>

          {/* Meat Doneness - Only show for meat type */}
          {foodType === 'meat' && (
            <div className="space-y-2 md:col-span-2">
              <Label>Desired Doneness (for meat)</Label>
              <RadioGroup 
                value={doneness} 
                onValueChange={(value) => setDoneness(value as MeatDoneness)}
                className="flex flex-wrap gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="rare" id="rare" />
                  <Label htmlFor="rare" className="cursor-pointer">Rare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium-rare" id="medium-rare" />
                  <Label htmlFor="medium-rare" className="cursor-pointer">Medium Rare</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium-well" id="medium-well" />
                  <Label htmlFor="medium-well" className="cursor-pointer">Medium Well</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="well-done" id="well-done" />
                  <Label htmlFor="well-done" className="cursor-pointer">Well Done</Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        {/* Examples Section */}
        <div className="mt-6">
          <Collapsible
            open={showExamples}
            onOpenChange={setShowExamples}
            className="w-full"
          >
            <CollapsibleTrigger asChild>
              <Button type="button" variant="outline" size="sm" className="w-full">
                {showExamples ? "Hide Food Examples" : "Show Food Examples"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="text-sm font-medium mb-2">Common {foodType.charAt(0).toUpperCase() + foodType.slice(1)} Examples:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {foodExamples[foodType].map((example, index) => (
                    <Button 
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => loadExample(example)}
                      className="justify-start h-auto py-2 text-left"
                    >
                      <div>
                        <div className="font-medium">{example.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {example.weight}oz, {example.thickness}" thick
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Click an example to load its weight and thickness
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button type="submit" className="flex-1" size="lg">
            <ChefHat className="mr-2 h-4 w-4" />
            Calculate Cooking Time
          </Button>
          <Button type="button" variant="outline" onClick={handleReset} size="lg">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AirFryerForm;
