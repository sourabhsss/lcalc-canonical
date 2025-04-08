
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getGradeLetter, getConversions } from './percentageToCgpaUtils';

interface PercentageToCgpaResultProps {
  percentage: number;
  scale: 4 | 7 | 10;
}

const PercentageToCgpaResult: React.FC<PercentageToCgpaResultProps> = ({ percentage, scale }) => {
  const conversions = getConversions(percentage);
  const gradeLetter = getGradeLetter(percentage);
  
  // Get CGPA based on selected scale
  const getCgpaForScale = (): number => {
    switch (scale) {
      case 4: return conversions.scale4;
      case 7: return conversions.scale7;
      case 10: default: return conversions.scale10;
    }
  };
  
  const cgpa = getCgpaForScale();

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Conversion Result</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="text-sm text-muted-foreground">Percentage</div>
              <div className="text-3xl font-bold text-primary">{percentage.toFixed(2)}%</div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="text-sm text-muted-foreground">CGPA ({scale}-point scale)</div>
              <div className="text-3xl font-bold text-primary">{cgpa.toFixed(2)}</div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="text-sm text-muted-foreground">Grade Letter</div>
              <div className="text-3xl font-bold text-primary">{gradeLetter}</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 border rounded-lg bg-secondary/5">
            <h3 className="font-medium mb-2 text-center">Conversion on Different Scales</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm font-medium">10-point scale</div>
                <div className="text-lg">{conversions.scale10.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-sm font-medium">7-point scale</div>
                <div className="text-lg">{conversions.scale7.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-sm font-medium">4-point scale</div>
                <div className="text-lg">{conversions.scale4.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-4 bg-secondary/10 rounded-lg">
        <h3 className="font-medium mb-2">Understanding Your Result:</h3>
        <p className="text-sm">
          With a percentage of {percentage.toFixed(2)}%, your CGPA on a {scale}-point scale is {cgpa.toFixed(2)}, 
          which corresponds to a grade letter of {gradeLetter}. Different universities might use different conversion 
          methods, so it's always good to check your institution's specific conversion policy.
        </p>
      </div>
    </div>
  );
};

export default PercentageToCgpaResult;
