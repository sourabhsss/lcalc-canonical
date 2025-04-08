import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Activity, Brain, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: 'Sleep Calculator',
      description: 'Optimize your sleep schedule for better athletic recovery and performance.',
      icon: <Brain className="h-5 w-5" />,
      href: '/sleep-calculator'
    },
    {
      title: 'Standard Drink Calculator',
      description: 'Track alcohol consumption, important for maintaining athletic performance.',
      icon: <Activity className="h-5 w-5" />,
      href: '/standard-drink-calculator'
    },
    {
      title: 'College GPA Calculator',
      description: 'Student athletes can track academic performance alongside athletic training.',
      icon: <Calculator className="h-5 w-5" />,
      href: '/college-gpa-calculator'
    }
  ];

  return (
    <Card className="mt-8">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
