import React, { useState } from 'react';
import StandardDrinkForm from './StandardDrinkForm';
import StandardDrinkResult from './StandardDrinkResult';
import StandardDrinkContent from './components/StandardDrinkContent';
import StandardDrinkFAQ from './components/StandardDrinkFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import DrinkTypesGuide from './components/DrinkTypesGuide';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { standardDrinksByCountry, commonDrinkTypes } from './standardDrinkUtils';

type CountryCode = keyof typeof standardDrinksByCountry;
type DrinkType = keyof typeof commonDrinkTypes;

const StandardDrinkCalculator: React.FC = () => {
  const [standardDrinks, setStandardDrinks] = useState<number | null>(null);
  const [alcoholGrams, setAlcoholGrams] = useState<number | null>(null);
  const [drinkDetails, setDrinkDetails] = useState<{
    volume: number;
    alcoholPercentage: number;
    drinkType: DrinkType;
    country: CountryCode;
  } | null>(null);
  
  const handleCalculate = (
    standardDrinks: number, 
    alcoholGrams: number, 
    volume: number, 
    alcoholPercentage: number,
    drinkType: DrinkType,
    country: CountryCode
  ) => {
    setStandardDrinks(standardDrinks);
    setAlcoholGrams(alcoholGrams);
    setDrinkDetails({
      volume,
      alcoholPercentage,
      drinkType,
      country
    });
  };
  
  const handleReset = () => {
    setStandardDrinks(null);
    setAlcoholGrams(null);
    setDrinkDetails(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="calculator" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calculator">Calculator</TabsTrigger>
                  <TabsTrigger value="information">Information</TabsTrigger>
                </TabsList>
                <TabsContent value="calculator" className="pt-4">
                  <h2 className="text-2xl font-bold mb-6">Standard Drink Calculator</h2>
                  
                  {standardDrinks === null ? (
                    <StandardDrinkForm onCalculate={handleCalculate} />
                  ) : (
                    <StandardDrinkResult 
                      standardDrinks={standardDrinks}
                      alcoholGrams={alcoholGrams}
                      drinkDetails={drinkDetails}
                      onReset={handleReset}
                    />
                  )}
                </TabsContent>
                <TabsContent value="information" className="pt-4 space-y-4">
                  <h2 className="text-2xl font-bold mb-2">About Standard Drinks</h2>
                  <p className="text-muted-foreground">
                    A standard drink contains a specific amount of pure alcohol (ethanol), which varies by country. 
                    This calculator helps you determine how many standard drinks are in your alcoholic beverage 
                    based on its volume and alcohol percentage.
                  </p>
                  <DrinkTypesGuide />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <StandardDrinkContent />
          <StandardDrinkFAQ />
        </div>
        
        <div className="space-y-8">
          <RelatedCalculators />
        </div>
      </div>
    </div>
  );
};

export default StandardDrinkCalculator;
