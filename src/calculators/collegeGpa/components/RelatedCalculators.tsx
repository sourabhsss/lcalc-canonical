
import React from 'react';

const RelatedCalculators: React.FC = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">Related Calculators</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg border">
          <h4 className="font-semibold text-lg mb-2">Percentage To CGPA Calculator</h4>
          <p className="mb-4">
            Convert percentage marks to CGPA and vice versa using different grading scales commonly used by educational institutions.
          </p>
          <a href="/percentage-to-cgpa-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <h4 className="font-semibold text-lg mb-2">Work Experience Calculator</h4>
          <p className="mb-4">
            Calculate your total work experience across different jobs and positions, perfect for resume preparation.
          </p>
          <a href="/work-experience-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <h4 className="font-semibold text-lg mb-2">Five Number Summary Calculator</h4>
          <p className="mb-4">
            Calculate the minimum, Q1, median, Q3, and maximum values from a dataset for statistical analysis.
          </p>
          <a href="/five-number-summary-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <h4 className="font-semibold text-lg mb-2">APY Calculator</h4>
          <p className="mb-4">
            Calculate Annual Percentage Yield (APY) to see how compound interest affects your investment returns over time.
          </p>
          <a href="/apy-calculator" className="text-primary hover:underline">Try Calculator →</a>
        </div>
      </div>
    </div>
  );
};

export default RelatedCalculators;
