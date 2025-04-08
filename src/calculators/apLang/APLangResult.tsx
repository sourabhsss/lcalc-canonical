
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  apScores, 
  getScoreFeedback, 
  getCollegeCreditInfo, 
  getStudyRecommendations,
  AP_LANG_CONSTANTS
} from './apLangUtils';
import { BookOpen, Sparkles, School, BookMarked } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface APLangResultProps {
  mcScore: number;
  synthesisScore: number;
  rhetoricalScore: number;
  argumentScore: number;
  compositeScore: number;
  apScore: number;
}

const APLangResult: React.FC<APLangResultProps> = ({
  mcScore,
  synthesisScore,
  rhetoricalScore,
  argumentScore,
  compositeScore,
  apScore
}) => {
  const mcPercentage = (mcScore / AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS) * 100;
  const frqMaxTotal = AP_LANG_CONSTANTS.SYNTHESIS_ESSAY_MAX + 
                      AP_LANG_CONSTANTS.RHETORICAL_ANALYSIS_MAX + 
                      AP_LANG_CONSTANTS.ARGUMENT_ESSAY_MAX;
  const frqTotal = synthesisScore + rhetoricalScore + argumentScore;
  const frqPercentage = (frqTotal / frqMaxTotal) * 100;
  
  const recommendations = getStudyRecommendations(
    mcScore,
    synthesisScore,
    rhetoricalScore,
    argumentScore
  );

  return (
    <div className="space-y-8">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-2xl text-center">Your AP Lang Score</CardTitle>
          <CardDescription className="text-center">
            Based on your performance in the multiple-choice and free-response sections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary">{apScore}</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    ({apScores[apScore as keyof typeof apScores]})
                  </div>
                </div>
              </div>
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 40 * (apScore / 5)} ${2 * Math.PI * 40}`}
                  strokeDashoffset={2 * Math.PI * 40 * 0.25}
                  transform="rotate(-90 50 50)"
                />
              </svg>
            </div>

            <div className="w-full max-w-md">
              <div className="text-sm font-medium mb-1 flex justify-between">
                <span>Composite Score</span>
                <span>{compositeScore}/100</span>
              </div>
              <Progress value={compositeScore} className="h-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <div className="text-sm font-medium">Multiple Choice Performance</div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span>Correct Answers</span>
                  <span>{mcScore}/{AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS}</span>
                </div>
                <Progress value={mcPercentage} className="h-2" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-sm font-medium">Free Response Performance</div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-xs">
                  <span>Total Points</span>
                  <span>{frqTotal}/{frqMaxTotal}</span>
                </div>
                <Progress value={frqPercentage} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="feedback" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feedback" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Score Feedback</span>
          </TabsTrigger>
          <TabsTrigger value="college" className="flex items-center gap-2">
            <School className="h-4 w-4" />
            <span className="hidden sm:inline">College Credit</span>
          </TabsTrigger>
          <TabsTrigger value="study" className="flex items-center gap-2">
            <BookMarked className="h-4 w-4" />
            <span className="hidden sm:inline">Study Plan</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feedback">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Score Feedback
              </CardTitle>
              <CardDescription>
                Understanding what your AP Lang score means
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{getScoreFeedback(apScore)}</p>
              
              <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-border">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Score Distribution Context
                </h4>
                <p className="text-sm text-muted-foreground">
                  In recent years, approximately 10% of students receive a 5, 18% receive a 4, 
                  25% receive a 3, 29% receive a 2, and 18% receive a 1 on the AP English Language 
                  and Composition exam. Your score of {apScore} places you among 
                  {apScore === 5 ? ' the top 10% of ' : 
                   apScore === 4 ? ' the top 28% of ' : 
                   apScore === 3 ? ' the top 53% of ' : 
                   apScore === 2 ? ' the top 82% of ' : ' '} 
                  all test takers.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="college">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="h-5 w-5 text-primary" />
                College Credit Information
              </CardTitle>
              <CardDescription>
                How your AP Lang score may translate to college credit
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{getCollegeCreditInfo(apScore)}</p>
              
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-accent/10 rounded-lg border border-border">
                  <h4 className="font-medium mb-2">Top College Policies</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><span className="font-medium">Harvard University:</span> No credit, but potential placement</li>
                    <li><span className="font-medium">Stanford University:</span> Score of 4 or 5 earns 3-4 credits</li>
                    <li><span className="font-medium">MIT:</span> Score of 5 may earn placement</li>
                    <li><span className="font-medium">UC Berkeley:</span> Score of 3, 4, or 5 earns 4 credits</li>
                    <li><span className="font-medium">University of Michigan:</span> Score of 4 or 5 earns 3 credits</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-border">
                  <h4 className="font-medium mb-2">Tips for Credit Transfer</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>Always check the specific AP credit policy at your target colleges</li>
                    <li>Request your official AP score report be sent to colleges</li>
                    <li>Meet with academic advisors to discuss how AP credits apply to your degree</li>
                    <li>Some colleges cap the total AP credits they accept</li>
                    <li>Credit policies may change, so verify information on college websites</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="study">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-primary" />
                Personalized Study Recommendations
              </CardTitle>
              <CardDescription>
                Based on your section scores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Multiple Choice ({mcScore}/{AP_LANG_CONSTANTS.TOTAL_MC_QUESTIONS})</h4>
                  <p className="text-sm text-muted-foreground">{recommendations.multipleChoice}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Synthesis Essay ({synthesisScore}/6)</h4>
                    <p className="text-sm text-muted-foreground">{recommendations.synthesis}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Rhetorical Analysis ({rhetoricalScore}/6)</h4>
                    <p className="text-sm text-muted-foreground">{recommendations.rhetorical}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Argument Essay ({argumentScore}/6)</h4>
                    <p className="text-sm text-muted-foreground">{recommendations.argument}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-border mt-4">
                  <h4 className="font-medium mb-2">Recommended Resources</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li><span className="font-medium">AP Classroom:</span> Official College Board platform with practice questions and resources</li>
                    <li><span className="font-medium">College Board resources:</span> Past free-response questions with scoring guidelines</li>
                    <li><span className="font-medium">Princeton Review or Barron's prep books:</span> Comprehensive review and practice tests</li>
                    <li><span className="font-medium">Khan Academy:</span> Free AP Lang preparation resources</li>
                    <li><span className="font-medium">Albert.io:</span> Practice questions and detailed explanations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default APLangResult;
