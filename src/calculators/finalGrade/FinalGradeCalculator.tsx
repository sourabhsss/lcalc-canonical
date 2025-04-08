
import React, { useState } from 'react';
import FinalGradeForm from './FinalGradeForm';
import FinalGradeResult from './FinalGradeResult';
import GradingSystemsGuide from './components/GradingSystemsGuide';
import GradeImprovementStrategies from './components/GradeImprovementStrategies';
import FinalGradeFAQ from './components/FinalGradeFAQ';
import RelatedCalculators from './components/RelatedCalculators';
import StudyResourcesGuide from './components/StudyResourcesGuide';

const FinalGradeCalculator: React.FC = () => {
  const [results, setResults] = useState<{
    currentGrade: number;
    desiredGrade: number;
    finalWeight: number;
    requiredGrade: number;
    isAchievable: boolean;
  } | null>(null);

  const handleCalculate = (calculatedResults: {
    currentGrade: number;
    desiredGrade: number;
    finalWeight: number;
    requiredGrade: number;
    isAchievable: boolean;
  }) => {
    setResults(calculatedResults);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Final Grade Calculator</h2>
            <FinalGradeForm onCalculate={handleCalculate} />
          </div>
          
          {results && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <FinalGradeResult
                currentGrade={results.currentGrade}
                desiredGrade={results.desiredGrade}
                finalWeight={results.finalWeight}
                requiredGrade={results.requiredGrade}
                isAchievable={results.isAchievable}
              />
            </div>
          )}
          
          <div className="space-y-8">
            <GradingSystemsGuide />
            <GradeImprovementStrategies />
            <StudyResourcesGuide />
            <FinalGradeFAQ />
          </div>
        </div>
        
        <div className="space-y-8">
          <RelatedCalculators />
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">About Final Grade Calculations</h3>
            <div className="prose max-w-none text-sm text-muted-foreground">
              <p>
                Understanding how final exams impact your overall course grade is crucial for academic planning.
                Most courses have a weighted grading system where assignments, quizzes, midterms, and final exams
                each contribute a percentage to your final grade.
              </p>
              <p className="mt-4">
                According to the National Center for Education Statistics, approximately 76% of colleges and universities
                use a traditional grading system where the final exam typically accounts for 20-40% of a student's
                overall grade. Knowing exactly what score you need can help reduce test anxiety and provide clear targets.
              </p>
              <p className="mt-4">
                Research from the Journal of Educational Psychology suggests that students who set specific, attainable
                grade goals and calculate what they need on finals tend to perform better than those who don't track their
                progress. This calculator helps you determine exactly what grade you need on your final exam to achieve
                your desired course grade.
              </p>
              <div className="mt-4 p-4 bg-accent/10 rounded-md border border-border">
                <h4 className="font-medium mb-2">Key Things to Remember</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Final exam weights typically range from 20-40% of your course grade</li>
                  <li>Many instructors provide a course syllabus outlining exact grading schemes</li>
                  <li>Some courses offer extra credit opportunities to boost grades</li>
                  <li>Grade cutoffs can vary between institutions (e.g., an A might be 90% or 93%)</li>
                  <li>Many universities allow grade replacement/forgiveness for repeated courses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalGradeCalculator;
