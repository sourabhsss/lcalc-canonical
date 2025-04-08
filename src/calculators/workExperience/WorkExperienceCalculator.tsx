
import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import WorkExperienceForm from './WorkExperienceForm';
import WorkExperienceResult from './WorkExperienceResult';
import { Card, CardContent } from '@/components/ui/card';

const WorkExperienceCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleCalculate = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
    setCalculating(true);
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="border border-border shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-primary h-6 w-6" />
            <h2 className="text-xl font-semibold">Work Experience Calculator</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            This calculator helps you determine your exact work experience duration between two dates.
            Perfect for updating your resume, filling job applications, or tracking your professional growth.
          </p>
          
          <WorkExperienceForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && startDate && endDate && (
            <WorkExperienceResult startDate={startDate} endDate={endDate} />
          )}
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-medium text-lg mb-2">About Work Experience Calculation</h3>
            <p className="text-muted-foreground text-sm">
              Accurately calculating your work experience is important for job applications and career planning.
              This calculator provides your experience in years, months, and days, making it easy to represent
              your experience in the most appropriate format for different contexts, such as resumes, 
              job applications, or professional profiles.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Many job postings and professional certifications require specific amounts of experience,
              and this calculator ensures you have the precise figures to meet those requirements.
              Remember to be consistent in how you represent your experience across all professional documents.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkExperienceCalculator;
