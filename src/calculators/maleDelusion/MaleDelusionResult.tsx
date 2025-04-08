
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle, Users, LineChart, FileWarning, Brain, HelpCircle } from 'lucide-react';

interface MaleDelusionResultProps {
  score: number;
  answers: Record<string, number>;
}

const MaleDelusionResult: React.FC<MaleDelusionResultProps> = ({ score, answers }) => {
  // Determine result category based on score
  const getCategory = (score: number) => {
    if (score < 20) return "Highly Realistic";
    if (score < 40) return "Mostly Realistic";
    if (score < 60) return "Moderate Delusion";
    if (score < 80) return "Significant Delusion";
    return "Severe Delusion";
  };
  
  const getDescription = (score: number) => {
    if (score < 20) {
      return "Your expectations in relationships are well-grounded in reality. You understand what you bring to the table and what you're looking for in a partner. This realistic outlook significantly increases your chances of finding fulfilling relationships.";
    } else if (score < 40) {
      return "You have a generally realistic view of relationships with a few areas that might benefit from reflection. Your expectations are mostly aligned with reality, though there are some minor misalignments between what you expect and what's realistic.";
    } else if (score < 60) {
      return "You show a mix of realistic and unrealistic expectations in relationships. While you have a solid foundation in some areas, there are notable gaps between your expectations and reality in others. Working on these areas could improve your relationship outcomes.";
    } else if (score < 80) {
      return "Your expectations show significant misalignment with reality in several key areas. This disconnect may be causing frustration in your dating life or relationships. Addressing these areas could lead to more fulfilling connections.";
    } else {
      return "Your expectations show major disconnects from reality across multiple dimensions. These expectations are likely causing significant challenges in forming and maintaining relationships. Working with a professional may help align your expectations with reality.";
    }
  };
  
  const getAreaFeedback = () => {
    // Find strongest areas (lowest scores are better for these)
    const strengths = [
      { area: "Personal Effort", value: answers.personalEffort },
      { area: "Self-Improvement", value: answers.selfImprovement },
      { area: "Rejection Handling", value: answers.rejectionHandling },
      { area: "Communication", value: answers.communicationExpectations }
    ].sort((a, b) => b.value - a.value).slice(0, 2);
    
    // Find areas for improvement (highest scores need the most work)
    const improvements = [
      { area: "Dating Standards", value: answers.standards },
      { area: "Income Expectations", value: answers.incomeExpectations },
      { area: "Appearance Standards", value: answers.appearanceStandards },
      { area: "Relationship Roles", value: answers.relationshipDynamics },
      { area: "Age Preferences", value: answers.agePreference },
      { area: "Compatibility Beliefs", value: answers.compatibilityBeliefs }
    ].sort((a, b) => b.value - a.value).slice(0, 2);
    
    return { strengths, improvements };
  };
  
  const { strengths, improvements } = getAreaFeedback();
  const category = getCategory(score);
  const description = getDescription(score);
  
  // Determine color based on score
  const getProgressColor = (score: number) => {
    if (score < 20) return "bg-green-500";
    if (score < 40) return "bg-emerald-500";
    if (score < 60) return "bg-yellow-500";
    if (score < 80) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Users className="text-primary h-5 w-5" />
        Your Delusion Score Results
      </h3>
      
      <div className="bg-primary/5 rounded-lg p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Delusion Score</span>
            <span className="text-sm font-bold">{score}/100</span>
          </div>
          <Progress 
            value={score} 
            className="h-3 rounded-full" 
            indicatorClassName={`rounded-full ${getProgressColor(score)}`}
          />
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-lg">{category}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-md p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="text-green-500 h-5 w-5" />
              <h5 className="font-medium">Strongest Areas</h5>
            </div>
            <ul className="space-y-2">
              {strengths.map((strength, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-sm">{strength.area}</span>
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                    {strength.value}/10
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-md p-4 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="text-amber-500 h-5 w-5" />
              <h5 className="font-medium">Areas for Improvement</h5>
            </div>
            <ul className="space-y-2">
              {improvements.map((improvement, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-sm">{improvement.area}</span>
                  <span className="text-sm font-medium bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    {improvement.value}/10
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="text-primary h-5 w-5" />
          <h4 className="font-semibold">What This Means</h4>
        </div>
        
        <p className="text-muted-foreground mb-4">
          This assessment helps identify areas where expectations may not align with reality in relationship contexts. 
          The score reflects the gap between expectations and realistic outcomes based on your responses.
        </p>
        
        <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
          <div className="flex items-start gap-2">
            <HelpCircle className="text-blue-500 h-5 w-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-800 mb-1">Perspective is Key</p>
              <p className="text-sm text-blue-700">
                Remember that this is just one assessment based on general patterns. Individual circumstances 
                vary, and self-awareness is the first step toward personal growth and relationship success.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-primary/5 rounded-md">
        <div className="flex items-center gap-2 mb-2">
          <LineChart className="text-primary h-5 w-5" />
          <h5 className="font-medium">Next Steps</h5>
        </div>
        <p className="text-sm text-muted-foreground">
          Consider examining the areas for improvement identified in your results. Self-reflection, getting feedback 
          from trusted friends, or working with a relationship coach can help develop more realistic expectations 
          that lead to healthier and more fulfilling relationships.
        </p>
      </div>
    </div>
  );
};

export default MaleDelusionResult;
