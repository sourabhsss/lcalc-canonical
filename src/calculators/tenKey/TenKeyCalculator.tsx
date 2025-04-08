
import React from 'react';
import TenKeyForm from './TenKeyForm';
import TenKeyGuide from './components/TenKeyGuide';
import EfficiencyTips from './components/EfficiencyTips';
import ShortcutGuide from './components/ShortcutGuide';
import RelatedCalculators from './components/RelatedCalculators';

const TenKeyCalculator: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">10 Key Calculator</h2>
            <TenKeyForm />
          </div>
          
          <TenKeyGuide />
          <EfficiencyTips />
        </div>
        
        <div className="space-y-8">
          <ShortcutGuide />
          <RelatedCalculators />
        </div>
      </div>
    </div>
  );
};

export default TenKeyCalculator;
