
import { Container } from '@/components/ui/container';
import { CheckCircle } from 'lucide-react';

const TrustedBySection = () => {
  const trustedGroups = [
    {
      title: "Students",
      description: "From high school to university, students rely on our calculators for math, science, and more."
    },
    {
      title: "Professionals",
      description: "Engineers, accountants, and finance professionals use our tools for quick, accurate calculations."
    },
    {
      title: "Homeowners",
      description: "For mortgage calculations, home improvement projects, and everyday problem-solving."
    },
    {
      title: "Small Businesses",
      description: "Business owners trust our financial and planning calculators to make informed decisions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Trusted By People Like You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our calculators are designed for everyone, from students to professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustedGroups.map((group, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-border/20 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {group.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/calculators" className="inline-flex items-center text-primary hover:text-primary/80">
            Find the right calculator for your needs
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default TrustedBySection;
