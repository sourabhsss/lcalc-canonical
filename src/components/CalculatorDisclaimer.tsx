
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const CalculatorDisclaimer = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-8 rounded-md">
      <div className="flex items-start">
        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-medium text-amber-800">Important Disclaimer</h3>
          <p className="text-sm text-amber-700 mt-1">
            This calculator was built using AI technology and, while designed to be accurate, may contain errors. 
            Results should not be considered as the sole source of truth for important calculations. 
            Always verify critical results through multiple sources and consult with qualified professionals when necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalculatorDisclaimer;
