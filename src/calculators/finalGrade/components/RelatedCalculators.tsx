import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calculator, GraduationCap, Calculator as CalcIcon, FileText, PenTool } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Related Calculators
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">
            Explore these other educational calculators to help you with your academic planning:
          </p>
          
          <ul className="space-y-3">
            <li>
              <Link 
                href="/five-number-summary-calculator" 
                className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded-md transition-colors"
              >
                <FileText className="h-4 w-4 text-primary" />
                <span className="font-medium">Five Number Summary Calculator</span>
              </Link>
            </li>
          </ul>
          
          <div className="mt-6 p-4 bg-accent/10 rounded-md border border-border">
            <h3 className="font-medium mb-2">Why Use Our Educational Calculators?</h3>
            <p className="text-sm text-muted-foreground">
              Our suite of educational calculators is designed to help students track progress, set goals, and plan their academic journey. 
              Whether you're calculating your current GPA, estimating what you need for a final exam, or converting between grading systems, 
              our tools provide accurate results with helpful context and guidance.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedCalculators;
