import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets, Ruler, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: 'Pool Volume Calculator',
      description: 'Calculate water volume for swimming pools and plan filling time based on your flow rate.',
      icon: <Droplets className="h-5 w-5" />,
      href: '/pool-volume-calculator'
    },
    {
      title: 'Gravel Calculator',
      description: 'Calculate materials needed for drainage projects that complement water management systems.',
      icon: <Ruler className="h-5 w-5" />,
      href: '/gravel-calculator'
    },
    {
      title: 'Asphalt Calculator',
      description: 'Plan your construction projects with accurate material calculations for drainage and runoff.',
      icon: <Calculator className="h-5 w-5" />,
      href: '/asphalt-calculator'
    }
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold mb-6">Related Calculators</h2>
        
        <div className="grid grid-cols-1 gap-4">
          {calculators.map((calc, index) => (
            <div key={index} className="border rounded-lg p-4 transition-all hover:shadow-md hover:border-primary">
              <div className="flex items-center mb-3 text-primary">
                {calc.icon}
                <h3 className="font-semibold ml-2">{calc.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {calc.description}
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={calc.href}>Try Calculator</Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCalculators;
