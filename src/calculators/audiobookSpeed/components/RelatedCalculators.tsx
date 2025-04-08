import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookOpen, Headphones, Calculator, Heart, Droplet, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RelatedCalculators: React.FC = () => {
  const relatedCalculators = [
    {
      title: 'Sleep Calculator',
      description: 'Calculate sleep cycles',
      href: '/sleep-calculator',
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: 'Air Fryer Calculator',
      description: 'Calculate cooking times',
      href: '/air-fryer-calculator',
      icon: <Droplet className="h-5 w-5" />
    },
    {
      title: 'Peptide Calculator',
      description: 'Calculate peptide dosages',
      href: '/peptide-calculator',
      icon: <Apple className="h-5 w-5" />
    },
    {
      title: 'TDEE Calculator',
      description: 'Calculate total daily energy expenditure',
      href: '/tdee-calculator',
      icon: <Calculator className="h-5 w-5" />
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Calculators</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {relatedCalculators.map((calc, index) => (
          <Link key={index} href={calc.href} className="no-underline">
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  {calc.icon}
                  <span className="ml-2">{calc.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{calc.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedCalculators;
