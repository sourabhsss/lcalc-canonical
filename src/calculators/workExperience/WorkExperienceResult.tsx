
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

interface WorkExperienceResultProps {
  startDate: Date;
  endDate: Date;
}

const WorkExperienceResult: React.FC<WorkExperienceResultProps> = ({ startDate, endDate }) => {
  // Calculate total days
  const totalDays = differenceInDays(endDate, startDate);
  
  // Calculate years, months, and remaining days
  const years = differenceInYears(endDate, startDate);
  
  // Calculate months after subtracting years
  const startDatePlusYears = new Date(startDate);
  startDatePlusYears.setFullYear(startDate.getFullYear() + years);
  const months = differenceInMonths(endDate, startDatePlusYears);
  
  // Calculate remaining days after subtracting years and months
  const startDatePlusYearsAndMonths = new Date(startDatePlusYears);
  startDatePlusYearsAndMonths.setMonth(startDatePlusYears.getMonth() + months);
  const days = differenceInDays(endDate, startDatePlusYearsAndMonths);

  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-center">Work Experience Duration</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary">{years}</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary">{months}</div>
              <div className="text-sm text-muted-foreground">Months</div>
            </div>
            <div className="p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-bold text-primary">{days}</div>
              <div className="text-sm text-muted-foreground">Days</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg">
              <span className="font-medium">Total experience:</span> {years} years, {months} months, and {days} days
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              ({totalDays} total days from {format(startDate, "MMMM d, yyyy")} to {format(endDate, "MMMM d, yyyy")})
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-4 bg-secondary/10 rounded-lg">
        <h3 className="font-medium mb-2">How to Use This Result:</h3>
        <ul className="text-sm space-y-2">
          <li>• For your resume: "{years} years and {months} months of experience"</li>
          <li>• For job applications: "Over {totalDays > 365 ? `${years}+ years` : `${Math.floor(totalDays/30)}+ months`} of professional experience"</li>
          <li>• For LinkedIn: "{years}.{months} years"</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperienceResult;
