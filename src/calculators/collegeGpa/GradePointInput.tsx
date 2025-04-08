
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Course, getGradesList, getGradePointFromLetter } from './collegeGpaUtils';
import { Trash2 } from 'lucide-react';

interface GradePointInputProps {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  gradingScale: string;
}

const GradePointInput: React.FC<GradePointInputProps> = ({ courses, setCourses, gradingScale }) => {
  const handleAddCourse = () => {
    setCourses([...courses, {
      courseName: "",
      creditHours: 3,
      grade: "B",
      gradePoints: getGradePointFromLetter("B", gradingScale)
    }]);
  };

  const handleRemoveCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const handleInputChange = (index: number, field: keyof Course, value: string | number) => {
    const updatedCourses = [...courses];
    
    if (field === 'grade') {
      const letterGrade = value as string;
      updatedCourses[index] = {
        ...updatedCourses[index],
        grade: letterGrade,
        gradePoints: getGradePointFromLetter(letterGrade, gradingScale)
      };
    } else {
      updatedCourses[index] = {
        ...updatedCourses[index],
        [field]: field === 'creditHours' ? Number(value) : value
      };
    }
    
    setCourses(updatedCourses);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border border-border rounded-md bg-card"
          >
            <div>
              <Label htmlFor={`course-name-${index}`}>Course Name</Label>
              <Input
                id={`course-name-${index}`}
                value={course.courseName}
                onChange={(e) => handleInputChange(index, 'courseName', e.target.value)}
                placeholder="e.g., Mathematics 101"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor={`credit-hours-${index}`}>Credit Hours</Label>
              <Input
                id={`credit-hours-${index}`}
                type="number"
                min="0"
                max="12"
                value={course.creditHours}
                onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor={`grade-${index}`}>Grade</Label>
              <Select
                value={course.grade}
                onValueChange={(value) => handleInputChange(index, 'grade', value)}
              >
                <SelectTrigger id={`grade-${index}`} className="mt-1">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {getGradesList(gradingScale).map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end space-x-2">
              <div className="flex-1">
                <Label htmlFor={`grade-points-${index}`}>Grade Points</Label>
                <Input
                  id={`grade-points-${index}`}
                  value={course.gradePoints}
                  readOnly
                  className="mt-1 bg-muted"
                />
              </div>
              <Button
                type="button"
                variant="destructive"
                size="icon"
                onClick={() => handleRemoveCourse(index)}
                className="mb-[1px]"
                title="Remove course"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        type="button"
        variant="outline"
        onClick={handleAddCourse}
        className="w-full"
      >
        Add Course
      </Button>
    </div>
  );
};

export default GradePointInput;
