
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Beef, Drumstick, Fish, Carrot, Snowflake, Cake } from 'lucide-react';

const FoodTypeGuide: React.FC = () => {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <span>Air Fryer Food Type Guide</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <p className="lead">
            Different food types require specific approaches when air frying for the best results. 
            Here's a comprehensive guide to help you master each category.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Beef className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium m-0">Meat (Beef, Pork, Lamb)</h3>
              </div>
              <p className="text-muted-foreground mt-1">
                Red meats cook beautifully in an air fryer, developing a nice crust while staying juicy inside. 
                For steaks, chops, and roasts:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pat meat dry before cooking for better browning</li>
                <li>Season generously with salt and aromatics</li>
                <li>Use the meat doneness setting based on preference</li>
                <li>Allow meat to rest after cooking (about 5 minutes for steaks)</li>
                <li>For even cooking, bring meat to room temperature before air frying</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Drumstick className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium m-0">Poultry (Chicken, Turkey)</h3>
              </div>
              <p className="text-muted-foreground mt-1">
                Air fryers excel at creating crispy chicken skin while keeping meat moist:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>For skin-on pieces, spray lightly with oil</li>
                <li>Check internal temperature to ensure doneness (165°F)</li>
                <li>Chicken wings and thighs are particularly successful in air fryers</li>
                <li>For breaded chicken, spray both sides with oil before cooking</li>
                <li>Boneless cuts cook faster than bone-in pieces</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Fish className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium m-0">Fish & Seafood</h3>
              </div>
              <p className="text-muted-foreground mt-1">
                Fish cooks quickly and delicately in air fryers, providing great results:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>For fillets, cook skin-side down first</li>
                <li>Spray basket to prevent sticking</li>
                <li>Fish is done when it flakes easily with a fork</li>
                <li>Breaded fish fillets turn out exceptionally crispy</li>
                <li>Shrimp cook very quickly - watch them carefully</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Carrot className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium m-0">Vegetables & Sides</h3>
              </div>
              <p className="text-muted-foreground mt-1">
                Vegetables develop wonderful caramelization in air fryers:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cut to uniform sizes for even cooking</li>
                <li>Toss with 1-2 teaspoons of oil and seasonings</li>
                <li>Shake basket halfway through for even browning</li>
                <li>Root vegetables like potatoes and carrots work particularly well</li>
                <li>For best results, don't overcrowd the basket</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Snowflake className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium m-0">Frozen Foods</h3>
              </div>
              <p className="text-muted-foreground mt-1">
                Air fryers are perfect for cooking frozen foods:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>No thawing required - cook directly from frozen</li>
                <li>Shake basket halfway through cooking</li>
                <li>Pre-fried frozen foods develop better crispness</li>
                <li>Add 25°F to temperature when cooking frozen vs. fresh</li>
                <li>Expect cooking to take about 50% longer than fresh foods</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Cake className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium m-0">Baked Goods</h3>
              </div>
              <p className="text-muted-foreground mt-1">
                Yes, you can bake in an air fryer! Keep these tips in mind:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use baking-safe containers that fit in your air fryer</li>
                <li>Line basket with parchment for easy removal</li>
                <li>Reduce conventional oven temperature by 25-30°F</li>
                <li>Check doneness a few minutes early</li>
                <li>Small cakes, muffins, and cookies work best</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-muted-foreground">
            <p>
              Remember that air fryers vary in power and efficiency. The first time you cook a particular 
              food, check it a few minutes before the calculated time to ensure it doesn't overcook.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodTypeGuide;
