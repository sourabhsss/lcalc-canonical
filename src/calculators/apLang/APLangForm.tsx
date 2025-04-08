
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { 
  AP_LANG_CONSTANTS,
  calculateMCScore,
  calculateCompositeScore,
  compositeToAPScore
} from './apLangUtils';
import { useToast } from '@/hooks/use-toast';

interface APLangFormProps {
  onCalculate: (results: {
    mcScore: number;
    synthesisScore: number;
    rhetoricalScore: number;
    argumentScore: number;
    compositeScore: number;
    apScore: number;
  }) => void;
}

const APLangForm: React.FC<APLangFormProps> = ({ onCalculate }) => {
  const [mcAnswers, setMcAnswers] = useState<number>(0);
  const [synthesisScore, setSynthesisScore] = useState<number>(0);
  const [rhetoricalScore, setRhetoricalScore] = useState<number>(0);
  const [argumentScore, setArgumentScore] = useState<number>(0);
  const { toast } = useToast();

  const handleMcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) {
      setMcAnswers(0);
    } else if (value > AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS) {
      setMcAnswers(AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS);
    } else if (value < 0) {
      setMcAnswers(0);
    } else {
      setMcAnswers(value);
    }
  };

  const handleCalculate = () => {
    try {
      const mcScore = calculateMCScore(mcAnswers);
      const compositeScore = calculateCompositeScore(
        mcScore,
        synthesisScore,
        rhetoricalScore,
        argumentScore
      );
      const apScore = compositeToAPScore(compositeScore);
      
      onCalculate({
        mcScore,
        synthesisScore,
        rhetoricalScore,
        argumentScore,
        compositeScore,
        apScore
      });
      
      toast({
        title: "Score calculated",
        description: `Your estimated AP Lang score is ${apScore}`,
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
    setMcAnswers(0);
    setSynthesisScore(0);
    setRhetoricalScore(0);
    setArgumentScore(0);
    
    toast({
      title: "Form reset",
      description: "All fields have been cleared",
    });
  };

  return (
    <div className="space-y-6">
      <div className="border rounded-lg p-6 bg-card">
        <h3 className="text-lg font-medium mb-4">Multiple Choice Section</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="mcAnswers">
              Correct Answers (out of {AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS})
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="mcAnswers"
                type="number"
                min={0}
                max={AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS}
                value={mcAnswers}
                onChange={handleMcChange}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[mcAnswers]}
                  min={0}
                  max={AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS}
                  step={1}
                  onValueChange={(value) => setMcAnswers(value[0])}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {mcAnswers}/{AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-card">
        <h3 className="text-lg font-medium mb-4">Free Response Section</h3>
        <div className="space-y-6">
          <div>
            <Label htmlFor="synthesisScore">
              Synthesis Essay Score (0-{AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX})
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="synthesisScore"
                type="number"
                min={0}
                max={AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX}
                value={synthesisScore}
                onChange={(e) => setSynthesisScore(
                  Math.min(
                    Math.max(0, parseInt(e.target.value) || 0),
                    AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX
                  )
                )}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[synthesisScore]}
                  min={0}
                  max={AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX}
                  step={1}
                  onValueChange={(value) => setSynthesisScore(value[0])}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {synthesisScore}/{AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              The synthesis essay asks you to develop an argument using at least 3 of the provided sources.
            </p>
          </div>

          <div>
            <Label htmlFor="rhetoricalScore">
              Rhetorical Analysis Essay Score (0-{AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX})
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="rhetoricalScore"
                type="number"
                min={0}
                max={AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX}
                value={rhetoricalScore}
                onChange={(e) => setRhetoricalScore(
                  Math.min(
                    Math.max(0, parseInt(e.target.value) || 0),
                    AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX
                  )
                )}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[rhetoricalScore]}
                  min={0}
                  max={AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX}
                  step={1}
                  onValueChange={(value) => setRhetoricalScore(value[0])}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {rhetoricalScore}/{AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              The rhetorical analysis essay asks you to analyze how an author builds an argument.
            </p>
          </div>

          <div>
            <Label htmlFor="argumentScore">
              Argument Essay Score (0-{AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX})
            </Label>
            <div className="flex items-center gap-4 mt-2">
              <Input
                id="argumentScore"
                type="number"
                min={0}
                max={AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX}
                value={argumentScore}
                onChange={(e) => setArgumentScore(
                  Math.min(
                    Math.max(0, parseInt(e.target.value) || 0),
                    AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX
                  )
                )}
                className="w-24"
              />
              <div className="flex-1">
                <Slider
                  value={[argumentScore]}
                  min={0}
                  max={AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX}
                  step={1}
                  onValueChange={(value) => setArgumentScore(value[0])}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">
                {argumentScore}/{AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              The argument essay asks you to create an evidence-based argument that defends, challenges, or qualifies a claim.
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
          Calculate AP Score
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

export default APLangForm;
