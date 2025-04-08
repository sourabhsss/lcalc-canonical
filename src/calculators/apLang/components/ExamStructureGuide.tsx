
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ListChecks, FileText, Layers } from 'lucide-react';

const ExamStructureGuide: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Layers className="h-5 w-5" />
          AP Lang Exam Structure
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5 text-sm">
          <p className="text-muted-foreground">
            The AP English Language and Composition exam is designed to test your ability to analyze rhetoric, 
            develop arguments, and synthesize information from various sources. Understanding the exam structure 
            is crucial for effective preparation.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-primary" />
                Section I: Multiple Choice
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">1 hour (45 questions)</span>
              </div>
              <p className="text-muted-foreground">
                This section consists of 45 multiple-choice questions that test your ability to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Read and analyze non-fiction texts</li>
                <li>Identify rhetorical strategies and techniques</li>
                <li>Understand how authors craft arguments</li>
                <li>Recognize stylistic elements and their effects</li>
                <li>Follow the logic and organization of passages</li>
              </ul>
              <div className="mt-3 text-muted-foreground">
                <span className="font-medium">Weight:</span> 45% of total score
              </div>
            </div>
            
            <div className="border rounded-md p-4">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                Section II: Free Response
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">2 hours, 15 minutes (3 essays)</span>
              </div>
              <p className="text-muted-foreground">
                This section includes three essay prompts that assess different writing skills:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li><span className="font-medium">Synthesis:</span> Create an argument using at least 3 provided sources</li>
                <li><span className="font-medium">Rhetorical Analysis:</span> Analyze how an author builds an argument</li>
                <li><span className="font-medium">Argument:</span> Develop a position on an issue using evidence</li>
              </ul>
              <div className="mt-3 text-muted-foreground">
                <span className="font-medium">Weight:</span> 55% of total score
              </div>
            </div>
          </div>
          
          <div className="bg-accent/10 p-4 rounded-md border mt-4">
            <h3 className="font-medium mb-2">Exam Day Tips</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Read each passage carefully, paying attention to tone, purpose, and audience</li>
              <li>Manage your time wisely, especially during the essay section</li>
              <li>For essays, take 5-10 minutes to plan before writing</li>
              <li>Use specific evidence and examples in your essays</li>
              <li>Proofread your essays if time allows</li>
              <li>For multiple choice, eliminate obviously wrong answers to improve your odds</li>
              <li>Don't leave any questions blank—there's no penalty for guessing</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamStructureGuide;
