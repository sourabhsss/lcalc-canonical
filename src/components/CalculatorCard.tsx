import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  category?: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  title,
  description,
  icon,
  href,
  category
}) => {
  return (
    <Link href={href} className="no-underline">
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center">
            <span className="text-primary mr-2">{icon}</span>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
          {category && (
            <span className="inline-block mt-2 text-xs text-primary bg-primary/10 px-2 py-1 rounded">
              {category}
            </span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CalculatorCard;
