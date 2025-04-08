
import React from 'react';

const GpaImprovementContent: React.FC = () => {
  return (
    <>
      <div className="mt-12">
        <h3 className="font-medium text-xl mb-4">Strategies to Improve Your GPA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border h-full">
            <h4 className="font-medium mb-3">Academic Strategies</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Prioritize challenging courses:</strong> Take more challenging courses in subjects you excel at to maximize your grade potential.</li>
              <li><strong>Balance your course load:</strong> Avoid taking too many difficult courses in a single semester.</li>
              <li><strong>Utilize academic resources:</strong> Take advantage of tutoring centers, professor office hours, and study groups.</li>
              <li><strong>Develop effective study habits:</strong> Create a consistent study schedule and find a study environment that works for you.</li>
              <li><strong>Strengthen your time management:</strong> Use planners or digital tools to keep track of assignments and exams.</li>
              <li><strong>Consider course retakes:</strong> If your institution allows it, retaking courses where you received low grades can help improve your GPA.</li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border h-full">
            <h4 className="font-medium mb-3">Additional Considerations</h4>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Focus on recent performance:</strong> Graduate schools and employers often place more emphasis on your performance in upper-level courses.</li>
              <li><strong>Explain grade issues:</strong> If you had a semester with poor grades due to extenuating circumstances, be prepared to explain this in applications.</li>
              <li><strong>Balance GPA with experience:</strong> Work experience, internships, and extracurricular leadership can sometimes compensate for a lower GPA.</li>
              <li><strong>Set realistic goals:</strong> If you're currently at a 2.5 GPA, aiming for a 4.0 by graduation might not be realistic, but reaching a 3.0 might be.</li>
              <li><strong>Celebrate improvements:</strong> Recognize and reward yourself for GPA improvements, even small ones.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GpaImprovementContent;
