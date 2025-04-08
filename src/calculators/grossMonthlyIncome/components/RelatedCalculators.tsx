import React from 'react';
import Link from 'next/link';
import { Calculator, DollarSign, Percent, CreditCard, PiggyBank } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const relatedCalculators = [
    {
      title: 'GST Calculator',
      description: 'Calculate GST and tax amounts',
      href: '/gst-calculator',
      icon: <Percent className="h-5 w-5" />
    },
    {
      title: 'APY Calculator',
      description: 'Calculate annual percentage yield',
      href: '/apy-calculator',
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: 'Pay Raise Calculator',
      description: 'Calculate salary increases',
      href: '/pay-raise-calculator',
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: 'Gross Monthly Income Calculator',
      description: 'Calculate your monthly income',
      href: '/gross-monthly-income-calculator',
      icon: <PiggyBank className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Related Calculators</h2>
          <p className="text-muted-foreground">
            Explore other financial calculators that might be helpful
          </p>
        </div>
        
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
      </div>
    </section>
  );
};

export default RelatedCalculators;
