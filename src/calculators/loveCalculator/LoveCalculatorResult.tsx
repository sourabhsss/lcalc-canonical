
import React from 'react';
import { RefreshCw, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface LoveCalculatorResultProps {
  name1: string;
  name2: string;
  percentage: number;
}

const LoveCalculatorResult: React.FC<LoveCalculatorResultProps> = ({
  name1,
  name2,
  percentage
}) => {
  // Generate a message based on percentage
  const getMessage = () => {
    if (percentage >= 80) {
      return "Extraordinary Connection! There's a remarkable harmony between you two that doesn't come along often. You complement each other beautifully and have the potential for a deeply fulfilling relationship.";
    } else if (percentage >= 60) {
      return "Strong Compatibility! You have a solid foundation for a great relationship. With good communication and mutual respect, you could build something wonderful together.";
    } else if (percentage >= 40) {
      return "Moderate Potential! While there are some differences to navigate, you have enough in common to develop a meaningful connection if you're both willing to put in the effort.";
    } else {
      return "Challenging Match! Your relationship may require more work and compromise than most. Focus on celebrating your differences and finding common ground if you want to pursue this connection.";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Heart className="h-12 w-12 text-primary mx-auto mb-2" />
        <h3 className="text-2xl font-semibold mb-1">Love Compatibility Result</h3>
        <p className="text-muted-foreground">
          {name1} & {name2}
        </p>
      </div>

      <div className="p-6 bg-primary/5 rounded-lg mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Compatibility Score</span>
          <span className="text-lg font-bold text-primary">{percentage}%</span>
        </div>
        
        <Progress 
          value={percentage} 
          className="h-3 mt-1"
        />
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">What This Means</h4>
          <p className="text-muted-foreground text-sm">{getMessage()}</p>
        </div>
      </div>
      
      <div className="border-t pt-6 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Remember, this is just for fun! Real compatibility depends on communication,
          shared values, and mutual respect.
        </p>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-1"
          onClick={() => window.location.reload()}
        >
          <RefreshCw className="h-4 w-4" /> Try With Different Names
        </Button>
      </div>
    </div>
  );
};

export default LoveCalculatorResult;
