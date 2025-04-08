
import React from 'react';
import { Card } from '@/components/ui/card';
import { flamesRelationships } from './flamesUtils';

interface FlamesResultProps {
  result: {
    relationship: string;
    description: string;
    percentage: number;
  } | null;
}

const FlamesResult: React.FC<FlamesResultProps> = ({ result }) => {
  if (!result) return null;

  return (
    <Card className="mt-8 p-6 bg-primary/5 shadow-md">
      <h3 className="text-xl font-bold mb-6 text-center">Your FLAMES Result</h3>
      
      <div className="text-center mb-8">
        <div className="inline-block rounded-full bg-primary/20 p-6">
          <span className="text-5xl mb-4">
            {flamesRelationships.find(r => r.name === result.relationship)?.emoji}
          </span>
        </div>
        <h4 className="text-2xl font-bold mt-4 text-primary">{result.relationship}</h4>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="mb-2 font-semibold">Relationship Type:</p>
          <p className="text-muted-foreground">{result.description}</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="mb-2 font-semibold">Compatibility Score:</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-primary rounded-full h-4" 
              style={{ width: `${result.percentage}%` }}
            ></div>
          </div>
          <p className="text-right mt-1 text-muted-foreground">{result.percentage}%</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold mb-2">What does this mean?</p>
          <p className="text-muted-foreground">
            The FLAMES calculation is based on a classic game that predicts the relationship between two people.
            While it's meant to be entertaining, remember that real relationships are built on communication,
            trust, and mutual respect, not predictions from a game.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FlamesResult;
