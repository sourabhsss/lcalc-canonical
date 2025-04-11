import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import InterpolationForm from './InterpolationForm';
import InterpolationResult from './InterpolationResult';
import InterpolationContent from './components/InterpolationContent';
import InterpolationFAQ from './components/InterpolationFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import { interpolateValue, InterpolationData, InterpolationMethod } from './interpolationUtils';

const InterpolationCalculator: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [inputData, setInputData] = useState<InterpolationData | null>(null);
  const [method, setMethod] = useState<InterpolationMethod>('linear');

  const handleCalculate = (data: InterpolationData, interpolationMethod: InterpolationMethod) => {
    try {
      const interpolatedValue = interpolateValue(data, interpolationMethod);
      setResult(interpolatedValue);
      setInputData(data);
      setMethod(interpolationMethod);
    } catch (error) {
      console.error('Interpolation error:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="space-y-8">
        {/* Calculator Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="text-primary h-6 w-6" />
              <h2 className="text-xl font-semibold">Interpolation Calculator</h2>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Calculate unknown values between data points using various interpolation methods.
              Enter your data points and the x-value you want to interpolate to find its corresponding y-value.
            </p>
            
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
              </TabsList>
              
              <TabsContent value="calculator" className="space-y-6">
                <InterpolationForm onCalculate={handleCalculate} />
                
                {result !== null && inputData && (
                  <InterpolationResult 
                    result={result} 
                    data={inputData} 
                    method={method} 
                  />
                )}
              </TabsContent>
              
              <TabsContent value="how-to-use" className="space-y-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">How to Use This Calculator</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Enter at least two data points (x, y) pairs.</li>
                    <li>Add more data points as needed using the "Add Data Point" button.</li>
                    <li>Enter the x-value you want to find the corresponding y-value for.</li>
                    <li>Select the interpolation method (linear, polynomial, or cubic spline).</li>
                    <li>Click "Calculate" to get the interpolated value.</li>
                  </ol>
                </div>
                
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Tips for Accurate Results</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ensure your data points are arranged in ascending order of x-values.</li>
                    <li>Linear interpolation works well for approximately linear relationships.</li>
                    <li>Polynomial interpolation is suitable for curved relationships but may oscillate with too many points.</li>
                    <li>Cubic spline interpolation provides smooth curves through all data points.</li>
                    <li>For extrapolation (estimating beyond your data range), be cautious as accuracy decreases.</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Calculators Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <RelatedCalculators />
        </div>

        {/* Content and FAQ Sections */}
        <InterpolationContent />
        <InterpolationFAQ />
      </div>
    </div>
  );
};

export default InterpolationCalculator;
