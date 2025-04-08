import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calculator, DollarSign, Percent, BarChart } from 'lucide-react';

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
            Explore these other helpful calculators for your financial and mathematical needs:
          </p>
          
          <ul className="space-y-3">
            <li>
              <Link 
                href="/apy-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-medium">APY Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/gst-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <Percent className="h-4 w-4 text-primary" />
                <span className="font-medium">GST Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/stock-average-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <BarChart className="h-4 w-4 text-primary" />
                <span className="font-medium">Stock Average Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/five-number-summary-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <Calculator className="h-4 w-4 text-primary" />
                <span className="font-medium">Five Number Summary Calculator</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/pay-raise-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-medium">Pay Raise Calculator</span>
              </Link>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCalculators;
