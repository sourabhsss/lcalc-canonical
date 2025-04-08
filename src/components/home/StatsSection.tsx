
import { Container } from '@/components/ui/container';
import { Calculator, Users, BarChart, Award, CheckCircle } from 'lucide-react';

interface StatProps {
  number: string;
  text: string;
  icon: React.ReactNode;
}

const StatItem = ({ number, text, icon }: StatProps) => (
  <div className="flex flex-col items-center text-center py-6 px-4">
    <div className="mb-3 text-primary">
      {icon}
    </div>
    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{number}</div>
    <div className="text-muted-foreground text-sm md:text-base">{text}</div>
  </div>
);

interface StatsSectionProps {
  stats?: StatProps[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  const defaultStats: StatProps[] = [
    { 
      number: '35+', 
      text: 'Unique Calculators', 
      icon: <Calculator className="h-8 w-8" />
    },
    { 
      number: '2.5M+', 
      text: 'Calculations Performed', 
      icon: <BarChart className="h-8 w-8" />
    },
    { 
      number: '150K+', 
      text: 'Monthly Users', 
      icon: <Users className="h-8 w-8" />
    },
    { 
      number: '98%', 
      text: 'User Satisfaction', 
      icon: <Award className="h-8 w-8" />
    }
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="py-12 border-y border-border/50 bg-gradient-to-r from-primary/5 to-background">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Impact by the Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Trusted by students, professionals, and everyone in between for quick and accurate calculations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, index) => (
            <StatItem key={index} number={stat.number} text={stat.text} icon={stat.icon} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
