
import { PenTool, Settings, Globe, Calendar, Lightbulb, Award } from 'lucide-react';

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Real-World Applications</h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Discover how our calculators can help in various real-life scenarios and professional contexts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <PenTool size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Students & Educators</h3>
                <p className="text-muted-foreground">
                  Our statistical calculators like the Five Number Summary Calculator help students analyze data sets quickly for academic projects. Teachers can use these tools to demonstrate mathematical concepts in a practical way.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <Settings size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Construction Professionals</h3>
                <p className="text-muted-foreground">
                  Contractors and DIY enthusiasts can use our Board Foot, Asphalt, and Gravel calculators to precisely determine material quantities needed for projects, saving time and reducing waste.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Financial Planning</h3>
                <p className="text-muted-foreground">
                  Investors can track performance with our Stock Average Calculator, while property managers and tenants benefit from the Prorated Rent Calculator for accurate partial-month rent calculations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <Calendar size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Event Planning</h3>
                <p className="text-muted-foreground">
                  Planning unique celebrations is easier with our Half Birthday Calculator and other date-related tools that help schedule special events and milestones throughout the year.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <Lightbulb size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Personal Development</h3>
                <p className="text-muted-foreground">
                  Track your professional growth with our Work Experience Calculator, or explore relationship dynamics with our Twin Flame and FLAMES Calculators for a fun perspective on compatibility.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 mt-1 flex-shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Students can convert between different grading systems with our Percentage to CGPA Calculator, helping them understand their academic standing across different educational standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
