
import React from 'react';
import { PercentErrorData } from './percentErrorTypes';

interface PercentErrorResultProps {
  data: PercentErrorData;
  result: number;
}

const PercentErrorResult: React.FC<PercentErrorResultProps> = ({ data, result }) => {
  // Function to determine the accuracy rating based on the percent error
  const getAccuracyRating = (error: number): string => {
    if (error < 1) return "Excellent";
    if (error < 5) return "Very Good";
    if (error < 10) return "Good";
    if (error < 20) return "Fair";
    return "Poor";
  };
  
  // Function to get a description about the accuracy
  const getAccuracyDescription = (error: number): string => {
    if (error < 1) return "This measurement has exceptional accuracy, suitable for high-precision scientific work.";
    if (error < 5) return "This measurement has very good accuracy, appropriate for most scientific applications.";
    if (error < 10) return "This measurement has good accuracy, acceptable for many general applications.";
    if (error < 20) return "This measurement has fair accuracy, which may be sufficient for rough estimations.";
    return "This measurement has poor accuracy and may need to be recalibrated or retaken.";
  };
  
  const accuracyRating = getAccuracyRating(result);
  const accuracyDescription = getAccuracyDescription(result);
  
  const unitsDisplay = data.units ? ` ${data.units}` : '';
  
  return (
    <div className="mt-8 pt-8 border-t">
      <h3 className="text-xl font-bold mb-4">Calculation Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary/5 p-4 rounded-lg">
          <h4 className="font-medium text-gray-700 mb-2">Input Values</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Measured Value:</span>
              <span className="font-medium">{data.measuredValue}{unitsDisplay}</span>
            </div>
            <div className="flex justify-between">
              <span>Actual Value:</span>
              <span className="font-medium">{data.actualValue}{unitsDisplay}</span>
            </div>
            <div className="flex justify-between">
              <span>Absolute Difference:</span>
              <span className="font-medium">
                {Math.abs(data.measuredValue - data.actualValue).toFixed(4)}{unitsDisplay}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/10 p-4 rounded-lg">
          <h4 className="font-medium text-gray-700 mb-2">Percent Error</h4>
          <div className="text-3xl font-bold text-center my-2">
            {result.toFixed(2)}%
          </div>
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-primary/20 rounded-full text-sm font-medium">
              Accuracy Rating: {accuracyRating}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium mb-2">Interpretation</h4>
        <p>{accuracyDescription}</p>
        <p className="mt-2">
          Percent error is calculated using the formula: 
          <span className="font-medium"> |Measured Value - Actual Value| ÷ |Actual Value| × 100%</span>
        </p>
      </div>
    </div>
  );
};

export default PercentErrorResult;
