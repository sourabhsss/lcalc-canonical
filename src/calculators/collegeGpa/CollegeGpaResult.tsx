
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GpaResult, getHonorStatus } from './collegeGpaUtils';
import { Progress } from "@/components/ui/progress";

interface CollegeGpaResultProps {
  result: GpaResult;
}

const CollegeGpaResult: React.FC<CollegeGpaResultProps> = ({ result }) => {
  const { totalCreditHours, totalGradePoints, gpa, letterGrade } = result;
  const honorStatus = getHonorStatus(gpa);
  
  // Calculate progress percentage (max GPA is 4.0 or 4.3 depending on scale, but we'll use 4.0 for simplicity)
  const progressPercentage = Math.min((gpa / 4.0) * 100, 100);
  
  // Determine progress color based on GPA
  const getProgressColor = (gpa: number): string => {
    if (gpa >= 3.5) return "bg-green-500";
    if (gpa >= 3.0) return "bg-green-400";
    if (gpa >= 2.5) return "bg-yellow-500";
    if (gpa >= 2.0) return "bg-orange-500";
    return "bg-red-500";
  };
  
  const progressColor = getProgressColor(gpa);

  return (
    <div className="mt-8 space-y-6">
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary/10 py-6">
          <CardTitle className="text-center">GPA Result</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{gpa.toFixed(2)}</div>
            <div className="text-xl text-muted-foreground mb-4">
              {letterGrade} • {honorStatus}
            </div>
            
            <div className="w-full mb-6">
              <Progress 
                value={progressPercentage} 
                className={`h-3 ${progressColor}`} 
              />
              <div className="flex justify-between text-xs mt-1">
                <span>0.0</span>
                <span>1.0</span>
                <span>2.0</span>
                <span>3.0</span>
                <span>4.0</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-secondary/10 rounded-md">
                <div className="text-sm text-muted-foreground mb-1">Total Credit Hours</div>
                <div className="text-xl font-semibold">{totalCreditHours}</div>
              </div>
              <div className="p-4 bg-secondary/10 rounded-md">
                <div className="text-sm text-muted-foreground mb-1">Total Grade Points</div>
                <div className="text-xl font-semibold">{totalGradePoints.toFixed(1)}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">What Your GPA Means</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Honor Status: {honorStatus}</h4>
              <p className="text-muted-foreground">
                {honorStatus === "Summa Cum Laude" && "This is the highest Latin honor distinction, representing outstanding academic achievement."}
                {honorStatus === "Magna Cum Laude" && "This is the second highest Latin honor, representing excellent academic achievement."}
                {honorStatus === "Cum Laude" && "This Latin honor represents very good academic achievement."}
                {honorStatus === "Dean's List" && "This distinction is often awarded each semester to students with high academic performance."}
                {honorStatus === "Good Standing" && "You're maintaining satisfactory academic progress."}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium">GPA Interpretation</h4>
              <p className="text-muted-foreground">
                {gpa >= 3.8 && "Your GPA indicates exceptional academic achievement. This level of performance is highly competitive for graduate schools, scholarships, and employment opportunities."}
                {gpa >= 3.5 && gpa < 3.8 && "Your GPA indicates excellent academic achievement. This level of performance is competitive for most graduate programs and scholarships."}
                {gpa >= 3.0 && gpa < 3.5 && "Your GPA indicates good academic achievement. This is typically sufficient for many graduate programs and meets the minimum for most academic scholarships."}
                {gpa >= 2.5 && gpa < 3.0 && "Your GPA indicates satisfactory academic progress. While above the minimum requirements, you may want to focus on improving your grades for more competitive opportunities."}
                {gpa >= 2.0 && gpa < 2.5 && "Your GPA meets minimum requirements for good academic standing and graduation at most institutions, but may limit some opportunities."}
                {gpa < 2.0 && "Your GPA is below what most institutions require for good academic standing. You should consider speaking with an academic advisor about strategies for improvement."}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CollegeGpaResult;
