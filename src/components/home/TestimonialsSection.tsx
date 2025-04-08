
import { Sparkles } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-secondary/5 p-6 rounded-lg">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Sparkles key={star} size={16} className="text-amber-500" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">"The Five Number Summary Calculator saved me hours of work for my statistics assignment. The interface is intuitive and the results are presented clearly."</p>
            <div className="font-medium">Sarah T.</div>
            <div className="text-sm text-muted-foreground">Statistics Student</div>
          </div>
          
          <div className="bg-secondary/5 p-6 rounded-lg">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Sparkles key={star} size={16} className="text-amber-500" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">"As a contractor, I use the Board Foot Calculator daily. It's accurate, reliable, and helps me provide precise estimates to my clients."</p>
            <div className="font-medium">Michael R.</div>
            <div className="text-sm text-muted-foreground">Construction Manager</div>
          </div>
          
          <div className="bg-secondary/5 p-6 rounded-lg">
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Sparkles key={star} size={16} className="text-amber-500" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4">"The Half Birthday Calculator helped me plan a surprise celebration for my partner. It's a simple tool but made planning a unique event so much easier!"</p>
            <div className="font-medium">Jessica L.</div>
            <div className="text-sm text-muted-foreground">Event Planner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
