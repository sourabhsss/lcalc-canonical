
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import FinalGrade from '@/calculators/FinalGrade';

const FinalGradeCalculator: React.FC = () => {
  return (
    <CalculatorLayout
      title="Final Grade Calculator"
      description="Calculate the grade you need on your final exam to achieve your desired course grade."
      category="Calculators"
      categoryUrl="/calculators"
      metaDescription="Use our free Final Grade Calculator to determine what score you need on your final exam to reach your target grade. Set realistic goals for exam preparation."
    >
      <div className="py-12">
        <FinalGrade />
      </div>
    </CalculatorLayout>
  );
};

export default FinalGradeCalculator;
