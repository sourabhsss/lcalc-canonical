import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Heart, BarChart4, Calendar, DollarSign, Building, Brain, Trophy } from 'lucide-react';

const CalculatorCategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'Mathematics',
      description: 'Calculators for math problems and statistical analysis',
      icon: <Calculator className="h-5 w-5" />,
      href: '/calculators?category=mathematics'
    },
    {
      title: 'Finance',
      description: 'Tools for financial planning and calculations',
      icon: <DollarSign className="h-5 w-5" />,
      href: '/calculators?category=finance'
    },
    {
      title: 'Health & Fitness',
      description: 'Calculators for health, fitness, and wellness',
      icon: <Heart className="h-5 w-5" />,
      href: '/calculators?category=health'
    },
    {
      title: 'Statistics',
      description: 'Statistical analysis and data interpretation tools',
      icon: <BarChart4 className="h-5 w-5" />,
      href: '/calculators?category=statistics'
    },
    {
      title: 'Time & Date',
      description: 'Calculators for time and date-related calculations',
      icon: <Calendar className="h-5 w-5" />,
      href: '/calculators?category=time'
    },
    {
      title: 'Construction',
      description: 'Tools for construction and home improvement projects',
      icon: <Building className="h-5 w-5" />,
      href: '/calculators?category=construction'
    },
    {
      title: 'Education',
      description: 'Calculators for students and educational purposes',
      icon: <Brain className="h-5 w-5" />,
      href: '/calculators?category=education'
    },
    {
      title: 'Sports',
      description: 'Calculators for sports and athletic performance',
      icon: <Trophy className="h-5 w-5" />,
      href: '/calculators?category=sports'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Calculator Categories</h2>
          <p className="text-muted-foreground">
            Browse our calculators by category
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="no-underline">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    {category.icon}
                    <span className="ml-2">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalculatorCategoriesSection;
