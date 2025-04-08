import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, ArrowRight } from 'lucide-react';

const PopularCalculators: React.FC = () => {
  const popularCalculators = [
    {
      title: 'AP Lang Calculator',
      description: 'Calculate your AP Language and Composition score',
      href: '/ap-lang-calculator',
      icon: <Calculator className="h-5 w-5" />
    },
    {
      title: 'Asphalt Calculator',
      description: 'Calculate asphalt needed for your project',
      href: '/asphalt-calculator',
      icon: <Calculator className="h-5 w-5" />
    },
    {
      title: 'Half Birthday Calculator',
      description: 'Find your half birthday date',
      href: '/half-birthday-calculator',
      icon: <Calculator className="h-5 w-5" />
    },
    {
      title: 'Angel Number Calculator',
      description: 'Discover your angel number',
      href: '/angel-number-calculator',
      icon: <Calculator className="h-5 w-5" />
    },
    {
      title: 'Stock Average Calculator',
      description: 'Calculate your stock average price',
      href: '/stock-average-calculator',
      icon: <Calculator className="h-5 w-5" />
    },
    {
      title: 'Male Delusion Calculator',
      description: 'Calculate male delusion percentage',
      href: '/male-delusion-calculator',
      icon: <Calculator className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Calculators</h2>
          <p className="text-muted-foreground">
            Our most frequently used calculation tools
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularCalculators.map((calc, index) => (
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
        
        <div className="text-center mt-8">
          <Link href="/calculators">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              View All Calculators
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularCalculators;
