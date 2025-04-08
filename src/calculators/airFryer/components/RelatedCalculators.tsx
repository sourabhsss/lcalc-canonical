import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Calculator, Timer, DollarSign, Heart, ArrowRight, Clock, Apple } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const relatedCalculators = [
    {
      title: 'Sleep Calculator',
      description: 'Calculate sleep cycles',
      href: '/sleep-calculator',
      icon: <Clock className="h-5 w-5" />
    },
    {
      title: 'GST Calculator',
      description: 'Calculate GST and tax amounts',
      href: '/gst-calculator',
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: 'Peptide Calculator',
      description: 'Calculate peptide dosages',
      href: '/peptide-calculator',
      icon: <Apple className="h-5 w-5" />
    },
    {
      title: 'Standard Drink Calculator',
      description: 'Calculate standard drinks',
      href: '/standard-drink-calculator',
      icon: <Calculator className="h-5 w-5" />
    }
  ];

  return (
    <div className="grid gap-4 mt-6">
      <h2 className="text-2xl font-bold">Related Calculators</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {relatedCalculators.map((calculator) => (
          <Link key={calculator.href} href={calculator.href} className="no-underline">
            <Card>
              <CardContent className="p-4 flex items-center space-x-4">
                {calculator.icon}
                <div>
                  <h3 className="font-semibold">{calculator.title}</h3>
                  <p className="text-sm text-gray-600">{calculator.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedCalculators;
