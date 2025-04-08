import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calculator, Calculator as CalculatorIcon, Hash, Percent, Sigma, BarChart } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Related Calculators
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Explore these other helpful calculators for your mathematical needs:
          </p>
          
          <ul className="space-y-3">
            <li>
              <Link 
                href="/five-number-summary-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <BarChart className="h-4 w-4 text-primary" />
                <span className="font-medium">Five Number Summary Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/standard-deviation-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <Sigma className="h-4 w-4 text-primary" />
                <span className="font-medium">Standard Deviation Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/combinations-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <Hash className="h-4 w-4 text-primary" />
                <span className="font-medium">Combinations Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/permutations-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <Hash className="h-4 w-4 text-primary" />
                <span className="font-medium">Permutations Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/ten-key-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <CalculatorIcon className="h-4 w-4 text-primary" />
                <span className="font-medium">10 Key Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/percentage-increase-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <Percent className="h-4 w-4 text-primary" />
                <span className="font-medium">Percentage Increase Calculator</span>
              </Link>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCalculators;
