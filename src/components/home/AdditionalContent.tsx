import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AdditionalContent: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">About Our Calculators</h2>
            <p className="text-muted-foreground mb-6">
              Our calculators are designed to be easy to use and provide accurate results. Whether you're calculating your GPA, planning a construction project, or exploring spiritual numbers, we have the right tool for you.
            </p>
            <Link href="/about-us">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about our calculators or need assistance? Our support team is here to help you get the most out of our tools.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="group">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalContent; 