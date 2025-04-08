
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookMarked, Target, Clock, Scale, CheckSquare } from 'lucide-react';

const PrepStrategies: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Target className="h-5 w-5" />
          AP Lang Preparation Strategies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 text-sm">
          <p className="text-muted-foreground">
            Effective preparation for the AP English Language and Composition exam requires a strategic approach 
            to develop your rhetorical analysis skills, argumentative writing abilities, and critical thinking.
            Here are comprehensive strategies to help you excel on exam day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <BookMarked className="h-4 w-4 text-primary" />
                Reading Strategies
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="font-medium">Develop a Reading Routine:</strong> Read high-quality non-fiction 
                  regularly from sources like The New York Times, The Atlantic, The New Yorker, or scholarly journals.
                </li>
                <li>
                  <strong className="font-medium">Annotate Actively:</strong> As you read, mark rhetorical devices, 
                  highlight thesis statements, circle transitions, and note tone shifts or evidence types.
                </li>
                <li>
                  <strong className="font-medium">Study Rhetorical Models:</strong> Analyze famous speeches, essays, 
                  and arguments to understand effective rhetoric (e.g., Martin Luther King's "Letter from Birmingham Jail" 
                  or presidential inaugural addresses).
                </li>
                <li>
                  <strong className="font-medium">Track Arguments:</strong> Practice identifying claims, evidence, 
                  counterarguments, and refutations in complex texts.
                </li>
                <li>
                  <strong className="font-medium">Recognize Patterns:</strong> Identify common organizational structures 
                  (chronological, problem-solution, comparison-contrast) in the texts you read.
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                Multiple-Choice Strategies
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="font-medium">Skim First:</strong> Quickly preview the passage to understand the main 
                  topic and structure before diving into questions.
                </li>
                <li>
                  <strong className="font-medium">Read Questions Before Details:</strong> Read questions before analyzing the 
                  passage in detail to know what to look for.
                </li>
                <li>
                  <strong className="font-medium">Use Process of Elimination:</strong> Cross out obviously incorrect answers 
                  to improve your odds of selecting the correct answer.
                </li>
                <li>
                  <strong className="font-medium">Watch for Qualifiers:</strong> Pay attention to words like "always," "never," 
                  "most," and "some" that affect the accuracy of answer choices.
                </li>
                <li>
                  <strong className="font-medium">Check Line References:</strong> When a question refers to specific lines, 
                  always reread the context surrounding those lines.
                </li>
                <li>
                  <strong className="font-medium">Practice With Official Materials:</strong> Use released College Board 
                  questions to familiarize yourself with the question types and patterns.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Scale className="h-4 w-4 text-primary" />
                Essay Writing Strategies
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="font-medium">Plan Before Writing:</strong> Spend 5-10 minutes outlining your essay 
                  to create a coherent structure.
                </li>
                <li>
                  <strong className="font-medium">Craft Strong Thesis Statements:</strong> Create specific, defensible theses 
                  that directly address the prompt and preview your main points.
                </li>
                <li>
                  <strong className="font-medium">Use Sophisticated Transitions:</strong> Go beyond basic transitions to create 
                  logical connections between ideas.
                </li>
                <li>
                  <strong className="font-medium">Incorporate Rhetorical Terminology:</strong> Demonstrate your understanding 
                  by accurately using terms like ethos, pathos, logos, anaphora, juxtaposition, etc.
                </li>
                <li>
                  <strong className="font-medium">Vary Sentence Structure:</strong> Mix simple, compound, and complex sentences 
                  to create rhythm and demonstrate syntactical maturity.
                </li>
                <li>
                  <strong className="font-medium">Address Counterarguments:</strong> For argumentative essays, acknowledge and 
                  refute opposing viewpoints to strengthen your position.
                </li>
                <li>
                  <strong className="font-medium">Write Purposeful Conclusions:</strong> Rather than simply restating your thesis, 
                  extend your analysis to broader implications or significance.
                </li>
              </ul>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Time Management Strategies
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="font-medium">Practice Timed Writing:</strong> Regularly write essays under the same time 
                  constraints as the actual exam (40 minutes per essay).
                </li>
                <li>
                  <strong className="font-medium">Establish a Multiple-Choice Pace:</strong> Aim to spend about 1 minute per question, 
                  allowing yourself time to reread difficult passages.
                </li>
                <li>
                  <strong className="font-medium">Set Essay Milestones:</strong> For each essay, allocate time for planning (5-7 min), 
                  writing (25-30 min), and revising (3-5 min).
                </li>
                <li>
                  <strong className="font-medium">Prioritize Points:</strong> If running out of time on essays, focus on completing 
                  your analysis rather than adding unnecessary examples.
                </li>
                <li>
                  <strong className="font-medium">Skip and Return:</strong> For difficult multiple-choice questions, mark and skip 
                  rather than spending too much time initially.
                </li>
                <li>
                  <strong className="font-medium">Practice Full-Length Exams:</strong> Take at least 2-3 complete practice exams 
                  under realistic conditions to build stamina.
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-accent/10 p-4 rounded-md border mt-4">
            <h3 className="font-medium mb-3">One Month Study Plan</h3>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <strong className="font-medium">Weeks 1-2:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Review rhetorical terms and devices (spend 20-30 minutes daily)</li>
                  <li>Complete 2-3 multiple-choice practice sets</li>
                  <li>Write 1 practice essay of each type (synthesis, rhetorical analysis, argument)</li>
                  <li>Review College Board scoring guidelines and sample essays</li>
                </ul>
              </div>
              <div>
                <strong className="font-medium">Weeks 3-4:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Take 2 full-length practice exams</li>
                  <li>Focus on your weakest essay type with additional practice</li>
                  <li>Review common mistakes from your practice tests</li>
                  <li>Create study sheets for frequently tested concepts</li>
                  <li>Practice active reading with complex non-fiction texts</li>
                </ul>
              </div>
              <div>
                <strong className="font-medium">Final Days:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Review your notes and strategies rather than learning new material</li>
                  <li>Get plenty of rest and prepare materials (pens, pencils, watch)</li>
                  <li>Eat a good breakfast and arrive early on exam day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrepStrategies;
