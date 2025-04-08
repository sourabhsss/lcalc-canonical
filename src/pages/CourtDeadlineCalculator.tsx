
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import CourtDeadlineCalculator from '@/calculators/courtDeadline/CourtDeadlineCalculator';
import CourtDeadlineFAQ from '@/calculators/courtDeadline/components/CourtDeadlineFAQ';

const CourtDeadlineCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Court Deadline Calculator"
      description="Calculate legal deadlines for court filings based on jurisdiction rules, filing method, and deadline types."
      category="Date & Time"
      categoryUrl="/calculators"
      metaDescription="Use our free Court Deadline Calculator to determine accurate legal filing deadlines. Account for jurisdiction-specific rules, filing methods, and deadline types for federal, state, and local courts."
    >
      <div className="container mx-auto py-12">
        <CourtDeadlineCalculator />
        <CourtDeadlineFAQ />
      </div>
    </CalculatorLayout>
  );
};

export default CourtDeadlineCalculatorPage;
