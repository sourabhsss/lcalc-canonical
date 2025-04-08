import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Wine, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { calculateStandardDrinks, calculateAlcoholGrams } from './standardDrinkUtils';
import { 
  standardDrinksByCountry, 
  commonDrinkTypes 
} from './standardDrinkUtils';

type CountryCode = keyof typeof standardDrinksByCountry;
type DrinkType = keyof typeof commonDrinkTypes;

interface StandardDrinkFormProps {
  onCalculate: (
    standardDrinks: number, 
    alcoholGrams: number, 
    volume: number, 
    alcoholPercentage: number,
    drinkType: DrinkType,
    country: CountryCode
  ) => void;
}

const StandardDrinkForm: React.FC<StandardDrinkFormProps> = ({ onCalculate }) => {
  const [volume, setVolume] = useState<number>(355);
  const [volumeUnit, setVolumeUnit] = useState<'ml' | 'oz'>('ml');
  const [alcoholPercentage, setAlcoholPercentage] = useState<number>(5);
  const [country, setCountry] = useState<CountryCode>('USA');
  const [drinkType, setDrinkType] = useState<DrinkType>('beer');
  const [error, setError] = useState<string | null>(null);
  
  const handleQuickSelect = (selectedDrink: {
    name: string;
    abv: number;
    volume: number;
    volumeUnit: 'ml' | 'oz';
  }) => {
    setDrinkType(selectedDrink.name.toLowerCase() as DrinkType);
    setAlcoholPercentage(selectedDrink.abv);
    setVolume(selectedDrink.volume);
    setVolumeUnit(selectedDrink.volumeUnit);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (volume <= 0) {
      setError('Volume must be greater than 0');
      return;
    }
    
    if (alcoholPercentage <= 0 || alcoholPercentage > 100) {
      setError('Alcohol percentage must be between 0 and 100');
      return;
    }
    
    setError(null);
    
    // Convert volume to ml if needed
    const volumeInMl = volumeUnit === 'oz' ? volume * 29.5735 : volume;
    
    // Calculate alcohol grams
    const alcoholGrams = calculateAlcoholGrams(volumeInMl, alcoholPercentage);
    
    // Calculate standard drinks based on country
    const standardDrinks = calculateStandardDrinks(alcoholGrams, country);
    
    onCalculate(
      standardDrinks, 
      alcoholGrams, 
      volumeInMl, 
      alcoholPercentage,
      drinkType,
      country
    );
  };
  
  // Convert preset drink types to dropdown options
  const drinkOptions = Object.entries(commonDrinkTypes).map(([key, drink]) => ({
    value: key,
    label: drink.name,
    abv: drink.abv,
    volume: drink.volume,
    volumeUnit: drink.volumeUnit
  }));
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="drinkType" className="text-base font-medium mb-1 block">
            Quick Select Drink Type
          </Label>
          <Select 
            value={drinkType}
            onValueChange={(value: DrinkType) => {
              setDrinkType(value);
              const selectedDrink = commonDrinkTypes[value];
              if (selectedDrink) {
                handleQuickSelect({
                  name: selectedDrink.name,
                  abv: selectedDrink.abv,
                  volume: selectedDrink.volume,
                  volumeUnit: selectedDrink.volumeUnit
                });
              }
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select drink type" />
            </SelectTrigger>
            <SelectContent>
              {drinkOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-1">
            Select a common drink type or enter custom values below
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="volume" className="text-base font-medium">
              Volume
            </Label>
            <div className="flex">
              <Input
                id="volume"
                type="number"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value) || 0)}
                className="flex-1 rounded-r-none"
                min="0"
                step="any"
              />
              <Select 
                value={volumeUnit}
                onValueChange={(value: 'ml' | 'oz') => setVolumeUnit(value)}
              >
                <SelectTrigger className="w-24 rounded-l-none border-l-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ml">ml</SelectItem>
                  <SelectItem value="oz">oz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="alcoholPercentage" className="text-base font-medium">
              Alcohol Content (ABV)
            </Label>
            <div className="flex">
              <Input
                id="alcoholPercentage"
                type="number"
                value={alcoholPercentage}
                onChange={(e) => setAlcoholPercentage(parseFloat(e.target.value) || 0)}
                className="flex-1 rounded-r-none"
                min="0"
                max="100"
                step="0.1"
              />
              <div className="flex items-center justify-center px-3 bg-muted border border-l-0 border-input rounded-r-md">
                %
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="country" className="text-base font-medium mb-1 block">
            Country Standard
          </Label>
          <Select 
            value={country}
            onValueChange={(value: CountryCode) => setCountry(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(standardDrinksByCountry).map(([key, country]) => (
                <SelectItem key={key} value={key as CountryCode}>
                  {country.name} ({country.alcoholGrams}g)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground mt-1">
            Different countries define standard drinks differently
          </p>
        </div>
      </div>
      
      <div className="pt-4">
        <Button type="submit" className="w-full">
          <Wine className="mr-2 h-4 w-4" />
          Calculate Standard Drinks
        </Button>
      </div>
    </form>
  );
};

export default StandardDrinkForm;
