import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Heart, Users, Calendar, Moon, Zap } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  const calculators = [
    {
      title: 'Chronological Age Calculator',
      description: 'Calculate your exact age in years, months, and days.',
      icon: <Clock className="h-5 w-5 text-primary" />,
      href: '/chronological-age-calculator'
    },
    {
      title: 'Twin Flame Calculator',
      description: 'Discover your twin flame connection with numerology.',
      icon: <Heart className="h-5 w-5 text-primary" />,
      href: '/twin-flame-calculator'
    },
    {
      title: 'Male Delusion Calculator',
      description: 'Assess realistic dating expectations and improve relationships.',
      icon: <Users className="h-5 w-5 text-primary" />,
      href: '/male-delusion-calculator'
    },
    {
      title: 'Half Birthday Calculator',
      description: 'Find out when your half birthday falls.',
      icon: <Calendar className="h-5 w-5 text-primary" />,
      href: '/half-birthday-calculator'
    }
  ];

  return (
    <>
      <Card className="mb-6">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Related Calculators</h3>
          
          <div className="space-y-4">
            {calculators.map((calc, index) => (
              <Link href={calc.href} key={index} className="flex items-start gap-3 group">
                <div className="mt-0.5">{calc.icon}</div>
                <div>
                  <h4 className="font-medium group-hover:text-primary transition-colors">
                    {calc.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{calc.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-4">Sleep Resources</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Moon className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <h4 className="font-medium">National Sleep Foundation</h4>
                <p className="text-sm text-muted-foreground">
                  Access research, sleep tips, and expert recommendations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Zap className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h4 className="font-medium">Sleep Education</h4>
                <p className="text-sm text-muted-foreground">
                  Learn about sleep disorders and find accredited sleep centers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <Heart className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h4 className="font-medium">CDC Sleep Resources</h4>
                <p className="text-sm text-muted-foreground">
                  Get recommendations and statistics about sleep health.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RelatedCalculators;
