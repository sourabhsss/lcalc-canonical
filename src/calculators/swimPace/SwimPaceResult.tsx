
import React from 'react';
import { useSwimPaceStore } from './swimPaceStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Waves, Activity, Flame, Award, RotateCcw } from 'lucide-react';

const SwimPaceResult: React.FC = () => {
  const { formData, results, resetCalculator } = useSwimPaceStore();
  
  if (!results) {
    return null;
  }
  
  const getPaceUnitLabel = (unit: string): string => {
    switch (unit) {
      case '100m': return '100 meters';
      case '100y': return '100 yards';
      case '50m': return '50 meters';
      case '50y': return '50 yards';
      case '25m': return '25 meters';
      case '25y': return '25 yards';
      case 'mile': return 'mile';
      case 'km': return 'kilometer';
      default: return unit;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Your Swim Pace Results</h3>
        <p className="text-muted-foreground mb-6">
          Based on swimming {formData.distance} {formData.unit} in {results.formattedTotalTime}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Pace
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{results.formattedPaceTime}</div>
            <p className="text-muted-foreground">per {getPaceUnitLabel(formData.paceUnit)}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              Swimming Speed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="text-xl font-semibold">{results.speedMetersPerSecond.toFixed(2)}</span>
              <span className="text-muted-foreground"> m/s</span>
            </div>
            <div>
              <span className="text-xl font-semibold">{results.speedKmPerHour.toFixed(2)}</span>
              <span className="text-muted-foreground"> km/h</span>
            </div>
            <div>
              <span className="text-xl font-semibold">{results.speedMilesPerHour.toFixed(2)}</span>
              <span className="text-muted-foreground"> mph</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              Estimated Calories Burned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{results.caloriesBurned}</div>
            <p className="text-muted-foreground">calories</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Swim Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{results.swimLevel}</div>
            <p className="text-muted-foreground">Based on your 100m pace</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button 
          onClick={resetCalculator}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Calculate Again
        </Button>
      </div>
    </div>
  );
};

export default SwimPaceResult;
