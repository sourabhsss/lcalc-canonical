import { Container } from '@/components/ui/container';
import { Shield, Zap, Search } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast & Accurate",
      description: "Get instant results with precise calculations, optimized for speed and accuracy."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Free",
      description: "All calculators are completely free to use with no hidden costs or premium features."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Comprehensive",
      description: "Find calculators for every need across mathematics, finance, lifestyle, and more."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Calculators?</h2>
          <p className="text-muted-foreground">
            Designed with simplicity and efficiency in mind, our calculators help you solve problems quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
