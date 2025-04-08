
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { getEmptyCourse, Course } from './collegeGpaUtils';
import GradePointInput from './GradePointInput';

interface CollegeGpaFormProps {
  onCalculate: (courses: Course[], gradingScale: string) => void;
  onReset: () => void;
}

const CollegeGpaForm: React.FC<CollegeGpaFormProps> = ({ onCalculate, onReset }) => {
  const [courses, setCourses] = useState<Course[]>([getEmptyCourse(), getEmptyCourse(), getEmptyCourse()]);
  const [gradingScale, setGradingScale] = useState<string>("standardUS");
  const [activeTab, setActiveTab] = useState<string>("semester");

  const handleCalculate = () => {
    onCalculate(courses, gradingScale);
  };

  const handleReset = () => {
    setCourses([getEmptyCourse(), getEmptyCourse(), getEmptyCourse()]);
    onReset();
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">GPA Calculation Type</h3>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="semester">Semester GPA</TabsTrigger>
                <TabsTrigger value="cumulative">Cumulative GPA</TabsTrigger>
              </TabsList>
              <TabsContent value="semester" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Calculate your GPA for a single semester or term. Enter all courses you are taking this term.
                </p>
              </TabsContent>
              <TabsContent value="cumulative" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Calculate your overall GPA across multiple semesters. Add all courses taken throughout your academic career.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Grading Scale</h3>
            <RadioGroup 
              value={gradingScale} 
              onValueChange={setGradingScale}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                <RadioGroupItem value="standardUS" id="standardUS" />
                <Label htmlFor="standardUS" className="font-medium">Standard (4.0 Scale)</Label>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-md border border-border">
                <RadioGroupItem value="plusMinus" id="plusMinus" />
                <Label htmlFor="plusMinus" className="font-medium">Plus/Minus (4.3 Scale)</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Enter Your Courses</h3>
            <GradePointInput 
              courses={courses} 
              setCourses={setCourses} 
              gradingScale={gradingScale} 
            />
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Button 
              onClick={handleCalculate}
              className="flex-1"
              disabled={courses.length === 0}
            >
              Calculate GPA
            </Button>
            <Button 
              onClick={handleReset} 
              variant="outline"
              className="flex-1"
            >
              Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeGpaForm;
