import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Calculator, Clock, DollarSign, Percent } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: "Gross Monthly Income Calculator",
      description: "Calculate your expected monthly income based on hourly rates, fees, and client load.",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      href: "/gross-monthly-income-calculator"
    },
    {
      title: "Work Experience Calculator",
      description: "Track your professional experience for licensure requirements or professional profiles.",
      icon: <Clock className="h-5 w-5 text-primary" />,
      href: "/work-experience-calculator"
    },
    {
      title: "Percentage Increase Calculator",
      description: "Calculate growth in client base, revenue, or other practice metrics over time.",
      icon: <Percent className="h-5 w-5 text-primary" />,
      href: "/percentage-increase-calculator"
    },
    {
      title: "Standard Deviation Calculator",
      description: "Analyze variability in productivity or client outcomes for practice improvement.",
      icon: <Calculator className="h-5 w-5 text-primary" />,
      href: "/standard-deviation-calculator"
    },
  ];

  return (
    <section className="py-8 border-t">
      <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {calculators.map((calc, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <Link href={calc.href} className="flex gap-4 items-start">
                <div className="mt-1">{calc.icon}</div>
                <div>
                  <h3 className="font-semibold text-primary">{calc.title}</h3>
                  <p className="text-sm text-muted-foreground">{calc.description}</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedCalculators;
