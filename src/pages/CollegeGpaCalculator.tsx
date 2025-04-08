import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import CollegeGpaCalculator from '@/calculators/collegeGpa/CollegeGpaCalculator';

const CollegeGpaCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="College GPA Calculator"
      description="Calculate your college Grade Point Average (GPA) for a single semester or your cumulative GPA across multiple terms."
      category="Academic"
      metaDescription="Use our free College GPA Calculator to compute your semester or cumulative GPA. Supports 4.0, 5.0, and percentage-based grading scales."
      canonicalUrl="https://lcalculator.com/college-gpa-calculator"
    >
      <div className="py-12">
        <CollegeGpaCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default CollegeGpaCalculatorPage;
