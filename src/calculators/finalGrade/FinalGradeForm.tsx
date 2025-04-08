
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  calculateRequiredGrade,
  isRequiredGradeAchievable
} from './finalGradeUtils';
import { useToast } from '@/hooks/use-toast';

interface FinalGradeFormProps {
  onCalculate: (results: {
    currentGrade: number;
    desiredGrade: number;
    finalWeight: number;
    requiredGrade: number;
    isAchievable: boolean;
  }) => void;
}

const FinalGradeForm: React.FC<FinalGradeFormProps> = ({ onCalculate }) => {
  const [currentGrade, setCurrentGrade] = useState<number>(85);
  const [desiredGrade, setDesiredGrade] = useState<number>(90);
  const [finalWeight, setFinalWeight] = useState<number>(30);
  const { toast } = useToast();

  const handleCurrentGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setCurrentGrade(0);
    } else if (value > 100) {
      setCurrentGrade(100);
    } else if (value < 0) {
      setCurrentGrade(0);
    } else {
      setCurrentGrade(value);
    }
  };

  const handleDesiredGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setDesiredGrade(0);
    } else if (value > 100) {
      setDesiredGrade(100);
    } else if (value < 0) {
      setDesiredGrade(0);
    } else {
      setDesiredGrade(value);
    }
  };

  const handleFinalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) {
      setFinalWeight(0);
    } else if (value > 100) {
      setFinalWeight(100);
    } else if (value < 0) {
      setFinalWeight(0);
    } else {
      setFinalWeight(value);
    }
  };

  const handleCalculate = () => {
    try {
      if (finalWeight === 0) {
        toast({
          title: "Invalid input",
          description: "Final exam weight cannot be 0%",
          variant: "destructive"
        });
        return;
      }
      
      if (finalWeight === 100 && currentGrade !== 0) {
        toast({
          title: "Invalid input",
          description: "If final exam is 100% of your grade, current grade should be 0",
          variant: "destructive"
        });
        return;
      }
      
      const requiredGrade = calculateRequiredGrade(
        currentGrade,
        desiredGrade,
        finalWeight
      );
      
      const achievable = isRequiredGradeAchievable(requiredGrade);
      
      onCalculate({
        currentGrade,
        desiredGrade,
        finalWeight,
        requiredGrade,
        isAchievable: achievable
      });
      
      toast({
        title: "Calculation complete",
        description: achievable 
          ? `You need ${requiredGrade.toFixed(2)}% on your final exam`
          : "The required grade exceeds 100%, which isn't achievable",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive"
        });
      }
    }
  };

  const handleReset = () => {
    setCurrentGrade(85);
    setDesiredGrade(90);
    setFinalWeight(30);
    
    toast({
      title: "Form reset",
      description: "All fields have been reset to default values",
    });
  };

  return (
    <div className="space-y-6">
      <div className="border rounded-lg p-6 bg-card">
        <h3 className="text-lg font-medium mb-4">Enter Your Grade Information</h3>
        <div className="space-y-6">
          <div>
            <Label htmlFor="currentGrade">
              Current Grade (%)
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="currentGrade"
                type="number"
                min={0}
                max={100}
                value={currentGrade}
                onChange={handleCurrentGradeChange}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[currentGrade]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setCurrentGrade(value[0])}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {currentGrade}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Your current grade in the course, before taking the final exam.
            </p>
          </div>

          <div>
            <Label htmlFor="desiredGrade">
              Desired Final Grade (%)
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="desiredGrade"
                type="number"
                min={0}
                max={100}
                value={desiredGrade}
                onChange={handleDesiredGradeChange}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[desiredGrade]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setDesiredGrade(value[0])}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {desiredGrade}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              The overall grade you want to achieve in the course.
            </p>
          </div>

          <div>
            <Label htmlFor="finalWeight">
              Final Exam Weight (%)
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="finalWeight"
                type="number"
                min={1}
                max={100}
                value={finalWeight}
                onChange={handleFinalWeightChange}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[finalWeight]}
                  min={1}
                  max={100}
                  step={1}
                  onValueChange={(value) => setFinalWeight(value[0])}
                />
              </div>
              <span className="w-12 text-right text-muted-foreground">
                {finalWeight}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Percentage of your total grade that the final exam is worth.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={handleCalculate}
          size="lg"
          className="flex-1"
        >
          Calculate Required Grade
        </Button>
        <Button 
          onClick={handleReset}
          variant="outline"
          size="lg"
          className="flex-1"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FinalGradeForm;
