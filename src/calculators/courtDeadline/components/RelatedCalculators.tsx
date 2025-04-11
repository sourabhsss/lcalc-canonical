import React from 'react';
import Link from 'next/link';
import { CalendarClock, Clock, Cake } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const relatedCalculators = [
    {
      title: 'Chronological',
      subtitle: 'Age Calculator',
      description: 'Calculate exact age in years, months, and days between any two dates.',
      href: '/chronological-age-calculator',
      icon: <CalendarClock className="h-6 w-6 text-primary" />
    },
    {
      title: 'Work',
      subtitle: 'Experience Calculator',
      description: 'Calculate your total work experience between jobs with precise years, months, and days.',
      href: '/work-experience-calculator',
      icon: <Clock className="h-6 w-6 text-primary" />
    },
    {
      title: 'Half',
      subtitle: 'Birthday Calculator',
      description: 'Find out when your half birthday falls with our simple calculator.',
      href: '/half-birthday-calculator',
      icon: <Cake className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {relatedCalculators.map((calc, index) => (
        <Link key={index} href={calc.href} className="no-underline">
          <div className="bg-white rounded-lg border p-6 h-full hover:shadow-sm transition-shadow">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                {calc.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-none mb-1">{calc.title}</h3>
                <h4 className="text-xl font-semibold leading-none mb-4">{calc.subtitle}</h4>
                <p className="text-muted-foreground text-sm">{calc.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedCalculators;
