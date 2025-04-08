import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, GraduationCap, BarChart, Percent } from 'lucide-react';

const RelatedCalculators: React.FC = () => {
  return (
    <div className="grid gap-4 mt-6">
      <h2 className="text-2xl font-bold">Related Calculators</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4 flex items-center space-x-4">
            <GraduationCap className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">GPA Calculator</h3>
              <p className="text-sm text-gray-600">Calculate your GPA</p>
            </div>
            <BarChart className="h-5 w-5 ml-auto" />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 flex items-center space-x-4">
            <Percent className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Percentage Calculator</h3>
              <p className="text-sm text-gray-600">Calculate percentages</p>
            </div>
            <Calculator className="h-5 w-5 ml-auto" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RelatedCalculators;
