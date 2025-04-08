
import React, { useState } from 'react';
import APLangForm from './APLangForm';
import APLangResult from './APLangResult';
import ExamStructureGuide from './components/ExamStructureGuide';
import ScoringGuide from './components/ScoringGuide';
import PrepStrategies from './components/PrepStrategies';
import APLangFAQ from './components/APLangFAQ';
import RelatedCalculators from './components/RelatedCalculators';

const APLangCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    mcScore: number;
    synthesisScore: number;
    rhetoricalScore: number;
    argumentScore: number;
    compositeScore: number;
    apScore: number;
  } | null>(null);

  const handleCalculate = (calculatedResults: {
    mcScore: number;
    synthesisScore: number;
    rhetoricalScore: number;
    argumentScore: number;
    compositeScore: number;
    apScore: number;
  }) => {
    setResults(calculatedResults);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">AP Lang Score Calculator</h2>
            <APLangForm onCalculate={handleCalculate} />
          </div>
          
          {results && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <APLangResult 
                mcScore={results.mcScore}
                synthesisScore={results.synthesisScore}
                rhetoricalScore={results.rhetoricalScore}
                argumentScore={results.argumentScore}
                compositeScore={results.compositeScore}
                apScore={results.apScore}
              />
            </div>
          )}
          
          <div className="space-y-8">
            <ExamStructureGuide />
            <ScoringGuide />
            <PrepStrategies />
            <APLangFAQ />
          </div>
        </div>
        
        <div className="space-y-8">
          <RelatedCalculators />
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">About AP English Language</h3>
            <div className="prose max-w-none text-sm text-muted-foreground">
              <p>
                The AP English Language and Composition course focuses on the development of critical reading and 
                writing skills. Students cultivate their understanding of rhetoric through analyzing and composing 
                various texts as they explore concepts like tone, purpose, syntax, rhetorical strategies, and audience.
              </p>
              <p className="mt-4">
                This college-level course emphasizes non-fiction texts, though some fiction may be included. Students 
                develop skills in close reading, rhetorical analysis, synthesizing information from multiple sources, 
                and crafting evidence-based arguments.
              </p>
              <p className="mt-4">
                According to College Board data, over 500,000 students take the AP Lang exam annually, making it one 
                of the most popular AP exams. The knowledge and skills developed in this course are valuable not only 
                for the exam but also for college writing courses and professional communication.
              </p>
              <div className="mt-4 p-4 bg-accent/10 rounded-md border border-border">
                <h4 className="font-medium mb-2">Key Dates & Information</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Exam Date: Usually in early-mid May</li>
                  <li>Late Testing Date: Usually in late May</li>
                  <li>Score Release: Usually in early July</li>
                  <li>Exam Duration: 3 hours, 15 minutes</li>
                  <li>Exam Fee: ~$97 (fee reductions available for eligible students)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APLangCalculator;
