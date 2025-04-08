import React from 'react';
import Link from 'next/link';
import { Calculator, Calendar, Clock, Timer, CalendarDays } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RelatedCalculators: React.FC = () => {
  const relatedCalculators = [
    {
      title: 'Date Calculator',
      description: 'Add or subtract days from a date',
      href: '/date-calculator',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: 'Time Calculator',
      description: 'Calculate time differences and durations',
      href: '/time-calculator',
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: 'Countdown Timer',
      description: 'Create countdowns to important dates',
      href: '/countdown-timer',
      icon: <Timer className="h-5 w-5" />
    },
    {
      title: 'Date Range Calculator',
      description: 'Calculate the number of days between dates',
      href: '/date-range-calculator',
      icon: <CalendarDays className="h-5 w-5" />
    }
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
        
        <p className="mb-6 text-muted-foreground">
          Explore these additional calculators that might be helpful for your legal and time management needs.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedCalculators.map((calc, index) => (
            <Link key={index} href={calc.href} className="no-underline">
              <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                    {calc.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{calc.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{calc.description}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-primary/5 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Calculator className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-base">Looking for Legal Assistance?</h4>
              <p className="text-sm text-muted-foreground mt-1">
                While our calculators can help with deadline planning, they are not a substitute for legal advice. 
                Consult with a qualified attorney for specific legal matters.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCalculators;
