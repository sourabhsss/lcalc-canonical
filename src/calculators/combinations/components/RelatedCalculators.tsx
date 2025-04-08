import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, ArrowRightLeft, Percent, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: "Permutations Calculator",
      description: "Calculate the number of ways to arrange items in specific orders.",
      icon: <ArrowRightLeft size={24} />,
      href: "/permutations-calculator"
    },
    {
      title: "Percentage Increase Calculator",
      description: "Calculate the percentage change between two values.",
      icon: <Percent size={24} />,
      href: "/percentage-increase-calculator"
    },
    {
      title: "Standard Deviation Calculator",
      description: "Measure the dispersion and variability in a dataset.",
      icon: <BarChart2 size={24} />,
      href: "/standard-deviation-calculator"
    },
    {
      title: "Five Number Summary Calculator",
      description: "Calculate key statistical measures for data analysis.",
      icon: <BarChart2 size={24} />,
      href: "/five-number-summary-calculator"
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Related Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {calculators.map((calc, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader className="pb-2">
              <div className="text-primary mb-2">{calc.icon}</div>
              <CardTitle className="text-lg">{calc.title}</CardTitle>
              <CardDescription className="text-sm">{calc.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link href={calc.href} className="flex items-center justify-between">
                  <span>Open Calculator</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedCalculators;
