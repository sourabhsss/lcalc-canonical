import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Start Calculating?",
  description = "Explore our wide range of calculators and find the perfect tool for your needs.",
  buttonText = "Browse All Calculators",
  buttonLink = "/calculators"
}) => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-foreground">{title}</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link href={buttonLink}>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
