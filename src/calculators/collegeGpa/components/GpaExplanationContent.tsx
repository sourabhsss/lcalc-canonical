
import React from 'react';

const GpaExplanationContent: React.FC = () => {
  return (
    <>
      <div className="mt-12 space-y-6">
        <h3 className="font-medium text-xl">Understanding College GPA</h3>
        <p className="text-muted-foreground">
          Grade Point Average (GPA) is a standardized method used by educational institutions to assess 
          academic performance. It's calculated by assigning numerical values to letter grades, 
          multiplying these values by the credit hours for each course, and then dividing the total 
          by the sum of all credit hours attempted.
        </p>
        
        <h4 className="font-medium text-lg">The Importance of GPA in College</h4>
        <p className="text-muted-foreground">
          Your college GPA serves as a numerical representation of your academic achievements and is used 
          for various important purposes:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong>Academic Standing:</strong> Most colleges require students to maintain a minimum GPA 
          (typically 2.0) to remain in good academic standing and avoid academic probation or dismissal.</li>
          
          <li><strong>Scholarships and Financial Aid:</strong> Many scholarships and financial aid packages 
          require recipients to maintain a certain GPA (often 3.0 or higher) to continue receiving funds.</li>
          
          <li><strong>Honors and Recognition:</strong> Latin honors (Cum Laude, Magna Cum Laude, Summa Cum Laude) 
          and Dean's List distinctions are typically awarded based on GPA thresholds.</li>
          
          <li><strong>Graduate School Admissions:</strong> Graduate programs often have minimum GPA requirements 
          for applicants, with competitive programs looking for GPAs of 3.5 or higher.</li>
          
          <li><strong>Internships and Job Opportunities:</strong> Many employers, particularly for entry-level positions, 
          use GPA as a screening tool, with 3.0 often serving as a common threshold.</li>
          
          <li><strong>Professional School Admissions:</strong> Medical, law, and other professional schools place 
          significant emphasis on undergraduate GPA in their admissions decisions.</li>
        </ul>
        
        <h4 className="font-medium text-lg">Types of GPAs</h4>
        <p className="text-muted-foreground">
          When discussing GPA, it's important to understand the different types that may be relevant to your academic journey:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="font-medium mb-2">Term GPA</h5>
            <p className="text-sm">
              Term GPA only includes courses taken during a specific academic period (semester, quarter, or trimester). 
              It provides a snapshot of your performance during that particular term.
            </p>
          </div>
          
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="font-medium mb-2">Cumulative GPA</h5>
            <p className="text-sm">
              Cumulative GPA includes all courses taken throughout your college career. This is the GPA most commonly 
              referenced by employers and graduate schools.
            </p>
          </div>
          
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="font-medium mb-2">Major GPA</h5>
            <p className="text-sm">
              Major GPA only includes courses that count toward your major requirements. Some departments require 
              students to maintain a certain GPA within their major courses.
            </p>
          </div>
          
          <div className="bg-card p-4 rounded-lg border">
            <h5 className="font-medium mb-2">Weighted vs. Unweighted GPA</h5>
            <p className="text-sm">
              Some institutions may weight GPAs based on course difficulty (e.g., honors or advanced courses may 
              carry more weight than standard courses).
            </p>
          </div>
        </div>
        
        <h4 className="font-medium text-lg mt-6">Common GPA Scales</h4>
        <p className="text-muted-foreground mb-4">
          While the 4.0 scale is standard in the United States, there are variations in how institutions assign 
          grade points:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2">Letter Grade</th>
                <th className="border border-border px-4 py-2">Standard 4.0 Scale</th>
                <th className="border border-border px-4 py-2">Plus/Minus 4.3 Scale</th>
                <th className="border border-border px-4 py-2">Percentage Range (Typical)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2">A+</td>
                <td className="border border-border px-4 py-2">4.0</td>
                <td className="border border-border px-4 py-2">4.3</td>
                <td className="border border-border px-4 py-2">97-100%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">A</td>
                <td className="border border-border px-4 py-2">4.0</td>
                <td className="border border-border px-4 py-2">4.0</td>
                <td className="border border-border px-4 py-2">93-96%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">A-</td>
                <td className="border border-border px-4 py-2">3.7</td>
                <td className="border border-border px-4 py-2">3.7</td>
                <td className="border border-border px-4 py-2">90-92%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">B+</td>
                <td className="border border-border px-4 py-2">3.3</td>
                <td className="border border-border px-4 py-2">3.3</td>
                <td className="border border-border px-4 py-2">87-89%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">B</td>
                <td className="border border-border px-4 py-2">3.0</td>
                <td className="border border-border px-4 py-2">3.0</td>
                <td className="border border-border px-4 py-2">83-86%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">B-</td>
                <td className="border border-border px-4 py-2">2.7</td>
                <td className="border border-border px-4 py-2">2.7</td>
                <td className="border border-border px-4 py-2">80-82%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">C+</td>
                <td className="border border-border px-4 py-2">2.3</td>
                <td className="border border-border px-4 py-2">2.3</td>
                <td className="border border-border px-4 py-2">77-79%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">C</td>
                <td className="border border-border px-4 py-2">2.0</td>
                <td className="border border-border px-4 py-2">2.0</td>
                <td className="border border-border px-4 py-2">73-76%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">C-</td>
                <td className="border border-border px-4 py-2">1.7</td>
                <td className="border border-border px-4 py-2">1.7</td>
                <td className="border border-border px-4 py-2">70-72%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">D+</td>
                <td className="border border-border px-4 py-2">1.3</td>
                <td className="border border-border px-4 py-2">1.3</td>
                <td className="border border-border px-4 py-2">67-69%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">D</td>
                <td className="border border-border px-4 py-2">1.0</td>
                <td className="border border-border px-4 py-2">1.0</td>
                <td className="border border-border px-4 py-2">63-66%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">D-</td>
                <td className="border border-border px-4 py-2">0.7</td>
                <td className="border border-border px-4 py-2">0.7</td>
                <td className="border border-border px-4 py-2">60-62%</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2">F</td>
                <td className="border border-border px-4 py-2">0.0</td>
                <td className="border border-border px-4 py-2">0.0</td>
                <td className="border border-border px-4 py-2">Below 60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GpaExplanationContent;
