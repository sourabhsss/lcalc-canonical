
import React from 'react';
import { Card } from '@/components/ui/card';
import GpmForm from './GpmForm';
import GpmResult from './GpmResult';
import { useGpmStore } from './gpmStore';
import GpmContent from './components/GpmContent';
import GpmFAQ from './components/GpmFAQ';
import RelatedCalculators from './components/RelatedCalculators';

const GpmCalculator: React.FC = () => {
  const { flowData } = useGpmStore();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">GPM - Gallons Per Minute Calculator</h2>
            <GpmForm />
            {flowData && <GpmResult />}
          </Card>
          
          <GpmContent />
        </div>
        
        <div className="lg:col-span-1 space-y-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">How to Calculate GPM</h3>
            <p className="mb-4">
              To calculate Gallons Per Minute (GPM), you need to measure the volume of water that flows 
              through a system in a given time period. There are three main methods:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Container method: Measure how long it takes to fill a container of known volume</li>
              <li>Volume per time: Divide the total volume by the time taken in minutes</li>
              <li>Flow formula: Calculate using pipe diameter and water velocity</li>
            </ol>
            <p>
              Our calculator supports all three methods to give you accurate GPM measurements for your 
              plumbing, irrigation, or water system project.
            </p>
          </Card>
          
          <RelatedCalculators />
        </div>
      </div>
      
      <div className="mt-10">
        <GpmFAQ />
      </div>
    </div>
  );
};

export default GpmCalculator;
