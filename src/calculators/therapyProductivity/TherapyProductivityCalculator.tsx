import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TherapyProductivityForm from './TherapyProductivityForm';
import TherapyProductivityResult from './TherapyProductivityResult';
import TherapyProductivityContent from './components/TherapyProductivityContent';
import TherapyProductivityFAQ from './components/TherapyProductivityFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { useTherapyProductivityStore } from './therapyProductivityStore';
import { Card, CardContent } from '@/components/ui/card';

const TherapyProductivityCalculator: React.FC = () => {
  const { results } = useTherapyProductivityStore();

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Therapy Productivity Calculator</h2>
          <p className="text-muted-foreground mb-6">
            Use this calculator to analyze your therapy practice productivity metrics, including billable hours, revenue generation, and efficiency rates. Enter your current practice data below to receive personalized insights and recommendations.
          </p>
          <TherapyProductivityForm />
          {results && <TherapyProductivityResult results={results} />}
        </CardContent>
      </Card>

      <Tabs defaultValue="guide" className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px] mb-6">
          <TabsTrigger value="guide">Productivity Guide</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="related">Related Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="guide">
          <TherapyProductivityContent />
        </TabsContent>
        
        <TabsContent value="faqs">
          <TherapyProductivityFAQ />
        </TabsContent>
        
        <TabsContent value="related">
          <RelatedCalculators />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TherapyProductivityCalculator;
