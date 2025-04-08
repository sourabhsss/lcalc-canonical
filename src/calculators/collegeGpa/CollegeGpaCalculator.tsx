
import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import CollegeGpaForm from './CollegeGpaForm';
import CollegeGpaResult from './CollegeGpaResult';
import { Course, calculateGPA, GpaResult, collegeGpaFaqs } from './collegeGpaUtils';
import FAQSection from '@/components/FAQSection';
import GpaExplanationContent from './components/GpaExplanationContent';
import GpaStatisticsContent from './components/GpaStatisticsContent';
import GpaImprovementContent from './components/GpaImprovementContent';
import GpaInternationalContent from './components/GpaInternationalContent';
import RelatedCalculators from './components/RelatedCalculators';

const CollegeGpaCalculator: React.FC = () => {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<GpaResult | null>(null);
  const [gradingScale, setGradingScale] = useState<string>("standardUS");

  const handleCalculate = (courses: Course[], scale: string) => {
    const calculationResult = calculateGPA(courses);
    setResult(calculationResult);
    setGradingScale(scale);
    setIsCalculated(true);
  };

  const handleReset = () => {
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <GraduationCap className="text-primary" />
          <h2 className="text-xl font-semibold">College GPA Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate your college GPA (Grade Point Average) for a single semester or your cumulative GPA across multiple terms.
            Enter your courses, credit hours, and grades to get your GPA and academic standing.
          </p>
          
          <CollegeGpaForm 
            onCalculate={handleCalculate} 
            onReset={handleReset} 
          />
          
          {isCalculated && result && (
            <CollegeGpaResult result={result} />
          )}
          
          {/* Educational content about GPA, now broken into smaller components */}
          <GpaExplanationContent />
          <GpaStatisticsContent />
          <GpaImprovementContent />
          <GpaInternationalContent />
        </div>
      </div>
      
      <FAQSection faqs={collegeGpaFaqs} />
      
      <RelatedCalculators />
    </div>
  );
};

export default CollegeGpaCalculator;
