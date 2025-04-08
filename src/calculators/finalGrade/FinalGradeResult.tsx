
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap,
  AlertTriangle 
} from 'lucide-react';
import { getLetterGrade, getGradeFeedback, getStudyRecommendations } from './finalGradeUtils';

interface FinalGradeResultProps {
  currentGrade: number;
  desiredGrade: number;
  finalWeight: number;
  requiredGrade: number;
  isAchievable: boolean;
}

const FinalGradeResult: React.FC<FinalGradeResultProps> = ({
  currentGrade,
  desiredGrade,
  finalWeight,
  requiredGrade,
  isAchievable
}) => {
  const formattedRequiredGrade = isAchievable ? requiredGrade.toFixed(2) : '100+';
  const letterGrade = isAchievable ? getLetterGrade(requiredGrade) : 'N/A';
  const feedback = getGradeFeedback(requiredGrade, isAchievable);
  const studyRecommendations = getStudyRecommendations(requiredGrade);
  
  // Calculate progress percentage for the progress bar
  // Cap at 100% if it's not achievable
  const progressPercentage = isAchievable ? Math.min(requiredGrade, 100) : 100;
  
  // Determine color based on required grade difficulty
  const getDifficultyColor = () => {
    if (!isAchievable) return 'text-destructive';
    if (requiredGrade > 90) return 'text-amber-500';
    if (requiredGrade > 70) return 'text-emerald-500';
    return 'text-cyan-500';
  };
  
  const difficultyColor = getDifficultyColor();
  const progressColor = isAchievable ? 'bg-primary' : 'bg-destructive';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">Final Exam Grade Needed</h3>
        <div className={`text-5xl font-bold mb-2 ${difficultyColor}`}>
          {formattedRequiredGrade}%
        </div>
        <div className="text-lg font-medium mb-4">
          Letter Grade: {letterGrade}
        </div>
        
        <Progress 
          value={progressPercentage}
          className={`h-3 ${progressColor}`} 
        />
        
        <div className="mt-2 text-sm text-muted-foreground">
          {isAchievable ? (
            <div className="flex items-center justify-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>This grade is achievable</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="h-4 w-4 text-destructive" />
              <span>This grade exceeds 100% and is not mathematically possible</span>
            </div>
          )}
        </div>
      </div>
      
      <Separator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Your Current Status</h4>
                <p className="text-sm text-muted-foreground">
                  Your current grade is <span className="font-medium">{currentGrade}%</span> ({getLetterGrade(currentGrade)})
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your desired grade is <span className="font-medium">{desiredGrade}%</span> ({getLetterGrade(desiredGrade)})
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your final exam is worth <span className="font-medium">{finalWeight}%</span> of your total grade
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-2">Grade Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  {finalWeight < 30 ? (
                    <>Your final exam has a <span className="font-medium">lower weight</span> in your course grade.</>
                  ) : finalWeight > 50 ? (
                    <>Your final exam has a <span className="font-medium">very high weight</span> in your course grade.</>
                  ) : (
                    <>Your final exam has a <span className="font-medium">standard weight</span> in your course grade.</>
                  )}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {desiredGrade > currentGrade ? (
                    <>You're aiming to <span className="font-medium">increase</span> your current grade.</>
                  ) : desiredGrade < currentGrade ? (
                    <>You can afford to <span className="font-medium">decrease</span> your current grade slightly.</>
                  ) : (
                    <>You're aiming to <span className="font-medium">maintain</span> your current grade.</>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-accent/10 rounded-lg p-6 border border-border">
        <div className="flex items-start gap-2 mb-4">
          {isAchievable ? (
            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <h4 className="font-medium mb-1">Feedback & Recommendations</h4>
            <p className="text-sm text-muted-foreground">{feedback}</p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <h5 className="font-medium mb-2">Study Recommendations:</h5>
        <ul className="space-y-2 ml-6 list-disc">
          {studyRecommendations.map((recommendation, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {recommendation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinalGradeResult;
