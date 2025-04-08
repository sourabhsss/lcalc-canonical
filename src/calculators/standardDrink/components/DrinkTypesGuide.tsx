
import React from 'react';
import { Wine, Beer, Coffee } from 'lucide-react';

const DrinkTypesGuide: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Common Alcoholic Beverage Types</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-2">
            <Beer className="h-5 w-5 text-amber-500 mr-2" />
            <h4 className="font-medium">Beer</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Typically 4-6% ABV for regular beers, 3.5-4.5% for light beers, and 6-10% for craft/strong beers.
          </p>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-2">
            <Wine className="h-5 w-5 text-rose-500 mr-2" />
            <h4 className="font-medium">Wine</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Typically 11-14% ABV for table wines, with some dessert and fortified wines reaching 15-20%.
          </p>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-2">
            <Wine className="h-5 w-5 text-blue-500 mr-2" />
            <h4 className="font-medium">Spirits/Liquor</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Typically 35-50% ABV (70-100 proof), including whiskey, vodka, rum, gin, and tequila.
          </p>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-2">
            <Coffee className="h-5 w-5 text-yellow-500 mr-2" />
            <h4 className="font-medium">Liqueurs</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Typically 15-30% ABV, sweetened and flavored spirits like amaretto, baileys, and schnapps.
          </p>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-2">
            <Wine className="h-5 w-5 text-pink-500 mr-2" />
            <h4 className="font-medium">Ready-to-Drink (RTD)</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Pre-mixed cocktails and hard seltzers typically range from 4-8% ABV.
          </p>
        </div>
        
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-2">
            <Beer className="h-5 w-5 text-green-500 mr-2" />
            <h4 className="font-medium">Cider</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Typically 4-6% ABV for most commercial ciders, with some craft varieties reaching 7-10%.
          </p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mt-2">
        Remember that these are general ranges, and specific products may vary. Always check the label for the exact ABV percentage.
      </p>
    </div>
  );
};

export default DrinkTypesGuide;
