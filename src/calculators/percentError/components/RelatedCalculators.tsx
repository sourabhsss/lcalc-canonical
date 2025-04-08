import React from 'react';
import Link from 'next/link';
import { Calculator, BarChart, Percent, Divide } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: "Standard Deviation Calculator",
      description: "Analyze statistical dispersion in your dataset",
      icon: <BarChart className="h-6 w-6" />,
      href: "/standard-deviation-calculator"
    },
    {
      title: "Percentage Increase Calculator",
      description: "Calculate percentage changes between values",
      icon: <Percent className="h-6 w-6" />,
      href: "/percentage-increase-calculator"
    },
    {
      title: "Combinations Calculator",
      description: "Calculate possible combinations from a set",
      icon: <Calculator className="h-6 w-6" />,
      href: "/combinations-calculator"
    },
    {
      title: "Cube Root Calculator",
      description: "Calculate cube roots with precision",
      icon: <Calculator className="h-6 w-6" />,
      href: "/cube-root-calculator"
    }
  ];

  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {calculators.map((calc, index) => (
          <Link 
            key={index} 
            href={calc.href}
            className="flex items-center p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <div className="mr-4 text-primary">
              {calc.icon}
            </div>
            <div>
              <h3 className="font-medium">{calc.title}</h3>
              <p className="text-sm text-muted-foreground">{calc.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedCalculators;
