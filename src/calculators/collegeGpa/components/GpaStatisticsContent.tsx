
import React from 'react';

const GpaStatisticsContent: React.FC = () => {
  return (
    <>
      <div className="mt-12">
        <h3 className="font-medium text-xl mb-4">GPA Statistics and Trends</h3>
        <p className="text-muted-foreground mb-4">
          Understanding how your GPA compares to national averages can provide valuable context:
        </p>
        
        <div className="bg-card p-6 rounded-lg border mb-6">
          <h4 className="font-medium mb-3">National GPA Averages</h4>
          <p className="text-muted-foreground mb-4">
            According to recent studies, the average college GPA in the United States has been steadily 
            increasing over the past few decades, a phenomenon often referred to as "grade inflation."
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>The average GPA at public colleges and universities is approximately 3.1</li>
            <li>The average GPA at private colleges and universities is around 3.3</li>
            <li>Average GPAs in STEM fields tend to be lower (around 3.0) than in humanities and social sciences (around 3.4)</li>
            <li>Research suggests that average GPAs have increased by about 0.1 points per decade since the 1980s</li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border">
          <h4 className="font-medium mb-3">GPA Requirements by Field</h4>
          <p className="text-muted-foreground mb-4">
            Different fields and post-graduate opportunities often have different GPA expectations:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2">Field/Opportunity</th>
                  <th className="border border-border px-4 py-2">Typical Minimum GPA</th>
                  <th className="border border-border px-4 py-2">Competitive GPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Medical School</td>
                  <td className="border border-border px-4 py-2">3.5</td>
                  <td className="border border-border px-4 py-2">3.7+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Law School</td>
                  <td className="border border-border px-4 py-2">3.3</td>
                  <td className="border border-border px-4 py-2">3.7+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Business School (MBA)</td>
                  <td className="border border-border px-4 py-2">3.0</td>
                  <td className="border border-border px-4 py-2">3.5+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">PhD Programs</td>
                  <td className="border border-border px-4 py-2">3.3</td>
                  <td className="border border-border px-4 py-2">3.7+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Engineering Jobs</td>
                  <td className="border border-border px-4 py-2">3.0</td>
                  <td className="border border-border px-4 py-2">3.5+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Accounting Firms</td>
                  <td className="border border-border px-4 py-2">3.0</td>
                  <td className="border border-border px-4 py-2">3.5+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Management Consulting</td>
                  <td className="border border-border px-4 py-2">3.5</td>
                  <td className="border border-border px-4 py-2">3.7+</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Federal Government Jobs</td>
                  <td className="border border-border px-4 py-2">3.0</td>
                  <td className="border border-border px-4 py-2">3.5+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GpaStatisticsContent;
