import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import { Calculator, ChefHat, Circle, RectangleHorizontal, Ruler } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/gravel-calculator">
          <Card className="hover:shadow-md transition-all h-full">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Gravel Calculator</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate the amount of gravel needed for landscaping around your pool or garden projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Link href="/board-foot-calculator">
          <Card className="hover:shadow-md transition-all h-full">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <RectangleHorizontal className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Board Foot Calculator</h3>
                  <p className="text-sm text-muted-foreground">
                    Plan your pool deck or surrounding structures with our board foot calculator for lumber estimation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        
        <Link href="/air-fryer-calculator">
          <Card className="hover:shadow-md transition-all h-full">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ChefHat className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Air Fryer Calculator</h3>
                  <p className="text-sm text-muted-foreground">
                    Prepare delicious poolside snacks with perfectly calculated air fryer cooking times and temperatures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default RelatedCalculators;
