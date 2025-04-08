import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px]" />
      </div>
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Powerful Calculators for Every Need
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Your trusted companion for all calculation needs. From finance to education, our precise calculators deliver instant results with a simple, intuitive interface designed for professionals and students alike. No signups required – just accurate calculations at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators">
              <Button size="lg" className="group">
                Browse Calculators
                <Calculator className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about-us">
              <Button variant="outline" size="lg" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
