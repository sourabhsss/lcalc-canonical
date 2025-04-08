import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Trophy, AlertTriangle, Info, BarChart2, Dumbbell, Award } from 'lucide-react';

const DunkContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Note</AlertTitle>
        <AlertDescription>
          This calculator provides an estimate based on general athletic metrics. Actual dunking ability depends on various factors including technique, training, and genetics.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Key Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Dumbbell className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Vertical Jump</h4>
                  <p className="text-sm text-muted-foreground">
                    The ability to jump vertically is crucial for dunking. Most successful dunkers have a vertical jump of at least 30 inches.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <BarChart2 className="h-4 w-4 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Height</h4>
                  <p className="text-sm text-muted-foreground">
                    While height is an advantage, players of various heights can dunk with proper training and technique.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Reach</h4>
                  <p className="text-sm text-muted-foreground">
                    Your standing reach plus vertical jump should exceed the rim height (10 feet) for a successful dunk.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Training Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h4 className="font-medium">Strength Training</h4>
                <p className="text-sm text-muted-foreground">
                  Focus on compound exercises like squats, deadlifts, and plyometric training to improve explosive power.
                </p>
              </li>
              <li>
                <h4 className="font-medium">Jump Technique</h4>
                <p className="text-sm text-muted-foreground">
                  Practice proper jumping form, including arm swing and knee drive, to maximize vertical height.
                </p>
              </li>
              <li>
                <h4 className="font-medium">Progressive Training</h4>
                <p className="text-sm text-muted-foreground">
                  Start with rim touches and gradually work your way up to full dunks as you improve your vertical jump.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DunkContent;
