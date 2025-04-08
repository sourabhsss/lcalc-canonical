
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InterpolationData, InterpolationMethod, formatResult, getMethodDescription } from './interpolationUtils';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

interface InterpolationResultProps {
  result: number;
  data: InterpolationData;
  method: InterpolationMethod;
}

const InterpolationResult: React.FC<InterpolationResultProps> = ({
  result,
  data,
  method
}) => {
  // Check if target X is within the data range or if we're extrapolating
  const sortedPoints = [...data.points].sort((a, b) => a.x - b.x);
  const minX = sortedPoints[0].x;
  const maxX = sortedPoints[sortedPoints.length - 1].x;
  const isExtrapolating = data.xValue < minX || data.xValue > maxX;
  
  return (
    <div className="mt-6 space-y-4">
      <Card className="border-primary/40">
        <CardHeader className="bg-primary/10 py-4">
          <CardTitle className="text-center text-lg">Interpolation Result</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center p-4 bg-secondary/10 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">For X =</div>
              <div className="text-2xl font-bold text-primary">{data.xValue}</div>
            </div>
            
            <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Interpolated Y =</div>
              <div className="text-2xl font-bold text-primary">{formatResult(result)}</div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-background rounded-lg border">
            <div className="font-medium mb-2">Method: {method.charAt(0).toUpperCase() + method.slice(1)} Interpolation</div>
            <p className="text-sm text-muted-foreground">{getMethodDescription(method)}</p>
          </div>
          
          {isExtrapolating && (
            <Alert variant="destructive" className="mt-4">
              <InfoIcon className="h-4 w-4 mr-2" />
              <AlertDescription>
                Warning: You are extrapolating outside the range of your data points ({minX} to {maxX}). 
                Extrapolated values may be less reliable than interpolated ones.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-4">
          <h3 className="font-medium mb-2">Data Points Used</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[300px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-2 bg-secondary/10">Point</th>
                  <th className="text-left p-2 bg-secondary/10">X Value</th>
                  <th className="text-left p-2 bg-secondary/10">Y Value</th>
                </tr>
              </thead>
              <tbody>
                {sortedPoints.map((point, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-2">Point {index + 1}</td>
                    <td className="p-2">{point.x}</td>
                    <td className="p-2">{point.y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-sm space-y-2">
            <div>
              <span className="font-medium">Technical Details:</span> 
              {method === 'linear' && (
                <span> Linear interpolation performed using the formula y = y₁ + (x - x₁) × (y₂ - y₁) / (x₂ - x₁) between the closest data points.</span>
              )}
              {method === 'polynomial' && (
                <span> Polynomial interpolation performed using the Lagrange method, creating a polynomial of degree {sortedPoints.length - 1} that passes through all data points.</span>
              )}
              {method === 'cubic' && (
                <span> Cubic spline interpolation creates a piecewise cubic function that passes through all data points with continuous first and second derivatives.</span>
              )}
            </div>
            <div>
              <span className="font-medium">Note:</span> Results are rounded to 4 decimal places for display.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterpolationResult;
