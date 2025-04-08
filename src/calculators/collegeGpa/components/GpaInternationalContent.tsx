
import React from 'react';

const GpaInternationalContent: React.FC = () => {
  return (
    <>
      <div className="mt-12">
        <h3 className="font-medium text-xl mb-4">GPA Across Different Countries</h3>
        <p className="text-muted-foreground mb-4">
          Educational systems around the world use different grading scales. Here's how some common international 
          grading systems compare to the US 4.0 GPA scale:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2">Country/Region</th>
                <th className="border border-border px-4 py-2">Grading System</th>
                <th className="border border-border px-4 py-2">Excellent</th>
                <th className="border border-border px-4 py-2">Good</th>
                <th className="border border-border px-4 py-2">Satisfactory</th>
                <th className="border border-border px-4 py-2">Passing</th>
                <th className="border border-border px-4 py-2">US GPA Equivalent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">United Kingdom</td>
                <td className="border border-border px-4 py-2">First/2:1/2:2/Third</td>
                <td className="border border-border px-4 py-2">First (70%+)</td>
                <td className="border border-border px-4 py-2">2:1 (60-69%)</td>
                <td className="border border-border px-4 py-2">2:2 (50-59%)</td>
                <td className="border border-border px-4 py-2">Third (40-49%)</td>
                <td className="border border-border px-4 py-2">First ≈ 4.0, 2:1 ≈ 3.3-3.7</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Germany</td>
                <td className="border border-border px-4 py-2">1-6 Scale</td>
                <td className="border border-border px-4 py-2">1.0-1.5</td>
                <td className="border border-border px-4 py-2">1.6-2.5</td>
                <td className="border border-border px-4 py-2">2.6-3.5</td>
                <td className="border border-border px-4 py-2">3.6-4.0</td>
                <td className="border border-border px-4 py-2">1.0 ≈ 4.0, 2.0 ≈ 3.3</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">France</td>
                <td className="border border-border px-4 py-2">0-20 Scale</td>
                <td className="border border-border px-4 py-2">16-20</td>
                <td className="border border-border px-4 py-2">14-15</td>
                <td className="border border-border px-4 py-2">12-13</td>
                <td className="border border-border px-4 py-2">10-11</td>
                <td className="border border-border px-4 py-2">16+ ≈ 4.0, 14 ≈ 3.3</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">India</td>
                <td className="border border-border px-4 py-2">Percentage/Division</td>
                <td className="border border-border px-4 py-2">75%+ (Distinction)</td>
                <td className="border border-border px-4 py-2">60-74% (First)</td>
                <td className="border border-border px-4 py-2">50-59% (Second)</td>
                <td className="border border-border px-4 py-2">40-49% (Third)</td>
                <td className="border border-border px-4 py-2">75%+ ≈ 4.0, 65% ≈ 3.3</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">Australia</td>
                <td className="border border-border px-4 py-2">HD/D/C/P/F</td>
                <td className="border border-border px-4 py-2">HD (85%+)</td>
                <td className="border border-border px-4 py-2">D (75-84%)</td>
                <td className="border border-border px-4 py-2">C (65-74%)</td>
                <td className="border border-border px-4 py-2">P (50-64%)</td>
                <td className="border border-border px-4 py-2">HD ≈ 4.0, D ≈ 3.7</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-sm text-muted-foreground mt-4">
          Note: These are approximate conversions and may vary by institution. If you're applying to international 
          programs or transferring credits, check with the specific institution for their conversion policies.
        </p>
      </div>
    </>
  );
};

export default GpaInternationalContent;
