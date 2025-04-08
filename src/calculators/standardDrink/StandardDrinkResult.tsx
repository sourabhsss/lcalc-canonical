import React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, Wine, AlertTriangle, Info } from 'lucide-react';
import { standardDrinksByCountry } from './standardDrinkUtils';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type CountryCode = keyof typeof standardDrinksByCountry;

interface StandardDrinkResultProps {
  standardDrinks: number | null;
  alcoholGrams: number | null;
  drinkDetails: {
    volume: number;
    alcoholPercentage: number;
    drinkType: string;
    country: CountryCode;
  } | null;
  onReset: () => void;
}

const StandardDrinkResult: React.FC<StandardDrinkResultProps> = ({
  standardDrinks,
  alcoholGrams,
  drinkDetails,
  onReset
}) => {
  if (!standardDrinks || !alcoholGrams || !drinkDetails) {
    return null;
  }

  const country = standardDrinksByCountry[drinkDetails.country];
  const drinkVolume = drinkDetails.volume;
  const abv = drinkDetails.alcoholPercentage;
  
  const getDrinkSafetyMessage = (drinks: number) => {
    if (drinks > 4) {
      return {
        message: "High alcohol content detected. Consider consuming less or sharing with others for responsible drinking.",
        severity: "destructive" as const,
        icon: <AlertTriangle className="h-4 w-4" />
      };
    } else if (drinks > 2) {
      return {
        message: "This drink contains more than 2 standard drinks. Remember to pace yourself and drink water alongside.",
        severity: "default" as const, // Changed from "warning" to "default"
        icon: <Info className="h-4 w-4" />
      };
    }
    return null;
  };
  
  const safetyMessage = getDrinkSafetyMessage(standardDrinks);

  return (
    <div className="space-y-6">
      <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Calculation Results</h3>
          <Button variant="outline" size="sm" onClick={onReset}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Calculate Again
          </Button>
        </div>
        
        <div className="bg-background rounded-lg p-4 shadow-sm border mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Your beverage contains:</span>
            <div className="flex items-center">
              <Wine className="h-5 w-5 text-primary mr-2" />
              <span className="text-2xl font-bold">{standardDrinks.toFixed(2)}</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-lg font-medium">Standard Drinks</span>
            <p className="text-sm text-muted-foreground mt-1">
              Based on {country.name} standard ({country.alcoholGrams}g of pure alcohol)
            </p>
          </div>
        </div>
        
        {safetyMessage && (
          <Alert variant={safetyMessage.severity} className="mb-4">
            {safetyMessage.icon}
            <AlertDescription>{safetyMessage.message}</AlertDescription>
          </Alert>
        )}
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Pure Alcohol</div>
              <div className="text-lg font-semibold">{alcoholGrams.toFixed(1)}g</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Volume</div>
              <div className="text-lg font-semibold">{drinkVolume.toFixed(0)}ml</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Alcohol (ABV)</div>
              <div className="text-lg font-semibold">{abv.toFixed(1)}%</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground">Country Standard</div>
              <div className="text-lg font-semibold">{country.name}</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>
            <strong>Note:</strong> The calculation is based on the formula: 
            <span className="px-1 py-0.5 bg-muted rounded mx-1 font-mono text-xs">
              Standard Drinks = (Volume (ml) × ABV (%) × 0.789) ÷ Standard Drink Size (g)
            </span>
            where 0.789 is the density of ethanol.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandardDrinkResult;
