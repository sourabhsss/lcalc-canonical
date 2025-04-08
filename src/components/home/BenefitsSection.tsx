
import { BookOpen, Shield, Target } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Choose Our Calculators?</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10">
          We've designed our calculators with simplicity and usability in mind. Here's what makes them special:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple & Easy to Use</h3>
            <p className="text-muted-foreground">
              Our calculators feature clean, intuitive interfaces designed for ease of use, with clear instructions for every step.
            </p>
          </div>
          
          <div className="bg-background p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Free</h3>
            <p className="text-muted-foreground">
              All our calculators are completely free to use, with no hidden costs, subscriptions, or annoying advertisements.
            </p>
          </div>
          
          <div className="bg-background p-6 rounded-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Accurate Results</h3>
            <p className="text-muted-foreground">
              We use industry-standard formulas and algorithms to ensure the accuracy of all our calculator results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
