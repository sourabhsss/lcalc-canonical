
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { DunkFormData } from './DunkForm';
import {
  RIM_HEIGHT_IN,
  RIM_HEIGHT_CM,
  DUNK_TYPES,
  calculateVerticalLeapNeeded,
  evaluateDunkability,
  suggestTrainingRegimen,
  compareWithNBAPlayers
} from './dunkUtils';

interface DunkResultProps {
  formData: DunkFormData;
}

const DunkResult: React.FC<DunkResultProps> = ({ formData }) => {
  const { height, standingReach, currentVertical, dunkType, unit } = formData;
  
  // Calculate vertical leap needed
  const verticalNeeded = calculateVerticalLeapNeeded(
    height,
    standingReach,
    dunkType,
    unit
  );
  
  // Evaluate if the person can dunk
  const dunkAssessment = evaluateDunkability(currentVertical, verticalNeeded);
  
  // Get training recommendations
  const trainingRegimen = suggestTrainingRegimen(dunkAssessment.improvementNeeded);
  
  // Compare with NBA players
  const nbaComparison = compareWithNBAPlayers(
    height,
    standingReach,
    currentVertical,
    unit
  );

  // Format comparison text
  const formatComparison = () => {
    const { closestPlayer, rankPercentile } = nbaComparison;
    
    return (
      <div>
        <p className="mb-2">
          Your measurements are most similar to <span className="font-semibold">{closestPlayer.name}</span>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div>
            <span className="text-sm text-muted-foreground">Height comparison: </span>
            <span className="font-medium">
              {closestPlayer.heightDifference > 0 
                ? `${closestPlayer.heightDifference} ${unit} shorter than ${closestPlayer.name}`
                : closestPlayer.heightDifference < 0
                  ? `${Math.abs(closestPlayer.heightDifference)} ${unit} taller than ${closestPlayer.name}`
                  : `Same height as ${closestPlayer.name}`
              }
            </span>
          </div>
          <div>
            <span className="text-sm text-muted-foreground">Vertical comparison: </span>
            <span className="font-medium">
              {closestPlayer.verticalDifference > 0 
                ? `${closestPlayer.verticalDifference} ${unit} less than ${closestPlayer.name}`
                : closestPlayer.verticalDifference < 0
                  ? `${Math.abs(closestPlayer.verticalDifference)} ${unit} more than ${closestPlayer.name}`
                  : `Same vertical as ${closestPlayer.name}`
              }
            </span>
          </div>
        </div>
        <p>
          <span className="text-sm text-muted-foreground">NBA percentile: </span>
          <span className="font-medium">
            Your vertical jump is better than {rankPercentile}% of the sampled NBA players.
          </span>
        </p>
      </div>
    );
  };

  // Helper function to determine progress color based on rating
  const getProgressColor = (rating: string): string => {
    switch (rating) {
      case 'Easy': return 'bg-green-500';
      case 'Achievable': return 'bg-blue-500';
      case 'Challenging': return 'bg-yellow-500';
      case 'Difficult': return 'bg-orange-500';
      case 'Impossible': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  // Helper function to calculate progress percentage
  const calculateProgressPercentage = (): number => {
    if (dunkAssessment.canDunk) {
      // If can dunk, calculate how much extra vertical they have (up to 10 inches extra = 100%)
      return Math.min(100, ((currentVertical - verticalNeeded) / 10) * 100 + 50);
    } else {
      // If cannot dunk, calculate progress toward required vertical (up to 50%)
      return Math.min(50, (currentVertical / verticalNeeded) * 50);
    }
  };

  return (
    <Card className="mt-6">
      <CardContent className="pt-6 space-y-6">
        <section>
          <h3 className="text-xl font-bold mb-4">Your Dunk Assessment</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Your Measurements</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Height:</span>
                  <span className="font-medium">{height} {unit}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Standing Reach:</span>
                  <span className="font-medium">{standingReach} {unit}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Current Vertical:</span>
                  <span className="font-medium">{currentVertical} {unit}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Desired Dunk Type:</span>
                  <span className="font-medium">{dunkType}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Rim Height:</span>
                  <span className="font-medium">{unit === 'in' ? RIM_HEIGHT_IN : RIM_HEIGHT_CM} {unit}</span>
                </li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2">Dunk Requirements</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Vertical Needed:</span>
                  <span className="font-medium">{verticalNeeded} {unit}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Can You Dunk:</span>
                  <span className={`font-medium ${dunkAssessment.canDunk ? 'text-green-600' : 'text-red-600'}`}>
                    {dunkAssessment.canDunk ? 'Yes' : 'Not Yet'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty Rating:</span>
                  <span className="font-medium">{dunkAssessment.rating}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Improvement Needed:</span>
                  <span className="font-medium">
                    {dunkAssessment.improvementNeeded > 0 
                      ? `${dunkAssessment.improvementNeeded} ${unit}` 
                      : 'None needed'}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Est. Training Time:</span>
                  <span className="font-medium">{dunkAssessment.trainingTimeEstimate}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Dunk Potential</h4>
            <div className="relative pt-1">
              <Progress value={calculateProgressPercentage()} className={getProgressColor(dunkAssessment.rating)} />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Impossible</span>
                <span>Challenging</span>
                <span>Achievable</span>
                <span>Easy</span>
              </div>
            </div>
          </div>
          
          <Alert variant={dunkAssessment.canDunk ? "default" : "destructive"} className="mb-4">
            <AlertDescription>
              {dunkAssessment.canDunk
                ? `Based on your measurements, you should be able to perform a ${dunkType} with your current vertical leap. Focus on technique and timing!`
                : `You need to increase your vertical leap by ${dunkAssessment.improvementNeeded} ${unit} to successfully perform a ${dunkType}.`
              }
            </AlertDescription>
          </Alert>
        </section>
        
        <section>
          <h3 className="text-xl font-bold mb-4">NBA Player Comparison</h3>
          {formatComparison()}
        </section>
        
        {!dunkAssessment.canDunk && (
          <section>
            <h3 className="text-xl font-bold mb-4">Recommended Training Regimen</h3>
            <div className="border rounded-lg p-4">
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Training Plan</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Training Frequency:</span>
                    <span className="font-medium">{trainingRegimen.frequency}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Program Duration:</span>
                    <span className="font-medium">{trainingRegimen.duration}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Training Intensity:</span>
                    <span className="font-medium">{trainingRegimen.intensity}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Recommended Exercises</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {trainingRegimen.exercises.map((exercise, index) => (
                    <div key={index} className="p-2 bg-primary/5 rounded">
                      {exercise}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        <section>
          <h3 className="text-xl font-bold mb-4">Dunk Type Details</h3>
          <div className="border rounded-lg p-4">
            {dunkType in DUNK_TYPES && (
              <>
                <h4 className="text-lg font-semibold mb-2">{DUNK_TYPES[dunkType as keyof typeof DUNK_TYPES].name}</h4>
                <p className="mb-4">{DUNK_TYPES[dunkType as keyof typeof DUNK_TYPES].description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Difficulty Level:</span>
                  <span className="font-medium">{DUNK_TYPES[dunkType as keyof typeof DUNK_TYPES].difficulty}</span>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2">Famous Players Known For This Dunk:</h5>
                  <div className="flex flex-wrap gap-2">
                    {DUNK_TYPES[dunkType as keyof typeof DUNK_TYPES].famousDunkers.map((player, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                        {player}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default DunkResult;
