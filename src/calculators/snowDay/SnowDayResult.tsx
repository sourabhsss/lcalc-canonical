
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  calculateSnowDayProbability, 
  getPredictionMessage, 
  getPositiveFactors, 
  getNegativeFactors,
  type WeatherFactors 
} from './snowDayUtils';

interface SnowDayResultProps extends WeatherFactors {}

const SnowDayResult: React.FC<SnowDayResultProps> = (props) => {
  // Calculate the snow day probability
  const probability = calculateSnowDayProbability(props);
  
  // Get prediction message
  const predictionMessage = getPredictionMessage(probability);
  
  // Get factors affecting the prediction
  const positiveFactors = getPositiveFactors(props);
  const negativeFactors = getNegativeFactors(props);
  
  // Determine progress bar color based on probability
  const getProgressColor = () => {
    if (probability < 30) return 'bg-red-500';
    if (probability < 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Snow Day Prediction</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-primary">{Math.round(probability)}%</div>
            <div className="text-lg font-medium mt-2">Chance of a Snow Day</div>
            <Progress 
              value={probability} 
              className={`h-3 mt-4 ${getProgressColor()}`}
            />
            <p className="mt-4 text-lg">{predictionMessage}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-medium mb-3 text-green-600 flex items-center">
                <span className="bg-green-100 text-green-600 p-1 rounded-full text-xs mr-2">+</span>
                Factors Increasing Chances
              </h3>
              <ul className="space-y-2">
                {positiveFactors.length > 0 ? (
                  positiveFactors.map((factor, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {factor}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-muted-foreground italic">No major positive factors</li>
                )}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3 text-red-600 flex items-center">
                <span className="bg-red-100 text-red-600 p-1 rounded-full text-xs mr-2">-</span>
                Factors Decreasing Chances
              </h3>
              <ul className="space-y-2">
                {negativeFactors.length > 0 ? (
                  negativeFactors.map((factor, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      {factor}
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-muted-foreground italic">No major negative factors</li>
                )}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 border rounded-lg bg-secondary/5">
            <h3 className="font-medium mb-2">Weather Conditions Summary</h3>
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Snowfall:</td>
                  <td className="py-1 font-medium">{props.snowfall} inches</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Temperature:</td>
                  <td className="py-1 font-medium">{props.temperature}°F</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Wind Speed:</td>
                  <td className="py-1 font-medium">{props.windSpeed} mph</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Existing Snow:</td>
                  <td className="py-1 font-medium">{props.existingSnowpack} inches</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Timing:</td>
                  <td className="py-1 font-medium capitalize">{props.timeOfSnowfall}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">Day of Week:</td>
                  <td className="py-1 font-medium">{props.dayOfWeek}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-1 text-muted-foreground">District Type:</td>
                  <td className="py-1 font-medium capitalize">{props.schoolDistrict}</td>
                </tr>
                <tr>
                  <td className="py-1 text-muted-foreground">Region:</td>
                  <td className="py-1 font-medium capitalize">{props.region}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-medium mb-2 text-blue-700">Remember:</h3>
        <p className="text-sm text-blue-600">
          This calculator is just for fun and provides an estimate based on common factors that affect 
          school closing decisions. The actual decision depends on many variables including specific 
          school policies, local road conditions, and forecasting accuracy.
        </p>
      </div>
    </div>
  );
};

export default SnowDayResult;
