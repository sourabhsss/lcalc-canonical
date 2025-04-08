
import React from 'react';
import SwimPaceForm from './SwimPaceForm';
import SwimPaceResult from './SwimPaceResult';
import { useSwimPaceStore } from './swimPaceStore';

const SwimPaceCalculator: React.FC = () => {
  const { showResults } = useSwimPaceStore();
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Swim Pace Calculator</h2>
        
        {!showResults ? (
          <SwimPaceForm />
        ) : (
          <SwimPaceResult />
        )}
      </div>
    </div>
  );
};

export default SwimPaceCalculator;
