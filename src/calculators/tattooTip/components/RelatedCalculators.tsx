import React from 'react';
import Link from 'next/link';
import { Calculator, Percent, DollarSign, ArrowRight } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: "Percentage Increase Calculator",
      description: "Calculate percentage increases to understand how different tip percentages affect your total cost.",
      icon: <Percent size={20} />,
      href: "/percentage-increase-calculator",
    },
    {
      title: "Cash Back Calculator",
      description: "If you're paying for your tattoo with a rewards credit card, calculate your potential cash back.",
      icon: <DollarSign size={20} />,
      href: "/cash-back-calculator",
    },
    {
      title: "Pay Raise Calculator",
      description: "Calculate how much extra you can save for your dream tattoo after receiving a pay raise.",
      icon: <Calculator size={20} />,
      href: "/pay-raise-calculator",
    },
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-4">Related Calculators</h3>
      
      <div className="grid gap-4 md:grid-cols-3">
        {calculators.map((calc, index) => (
          <Link 
            key={index} 
            href={calc.href}
            className="block p-4 border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="text-primary">{calc.icon}</div>
              <h4 className="font-medium">{calc.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{calc.description}</p>
          </Link>
        ))}
      </div>
      
      <div className="text-center mt-4">
        <Link href="/calculators" className="inline-flex items-center text-primary hover:underline">
          View all calculators
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default RelatedCalculators;
