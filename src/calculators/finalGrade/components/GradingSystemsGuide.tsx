import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const GradingSystemsGuide: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Understanding Grading Systems
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-md font-medium mb-3">Common US Grading Scale</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Letter Grade</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>4.0 GPA Scale</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>A+</TableCell>
                  <TableCell>97-100%</TableCell>
                  <TableCell>4.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>A</TableCell>
                  <TableCell>93-96%</TableCell>
                  <TableCell>4.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>A-</TableCell>
                  <TableCell>90-92%</TableCell>
                  <TableCell>3.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>B+</TableCell>
                  <TableCell>87-89%</TableCell>
                  <TableCell>3.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>B</TableCell>
                  <TableCell>83-86%</TableCell>
                  <TableCell>3.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>B-</TableCell>
                  <TableCell>80-82%</TableCell>
                  <TableCell>2.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>C+</TableCell>
                  <TableCell>77-79%</TableCell>
                  <TableCell>2.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>C</TableCell>
                  <TableCell>73-76%</TableCell>
                  <TableCell>2.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>C-</TableCell>
                  <TableCell>70-72%</TableCell>
                  <TableCell>1.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>D+</TableCell>
                  <TableCell>67-69%</TableCell>
                  <TableCell>1.3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>D</TableCell>
                  <TableCell>63-66%</TableCell>
                  <TableCell>1.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>D-</TableCell>
                  <TableCell>60-62%</TableCell>
                  <TableCell>0.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>F</TableCell>
                  <TableCell>0-59%</TableCell>
                  <TableCell>0.0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-3">
              Note: Grading scales may vary by institution. Some schools may use different cutoffs or plus/minus systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-medium mb-3">International Grading Comparisons</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Understanding how grades translate across different educational systems can be valuable, especially 
              for international students or those planning to study abroad.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Country</TableHead>
                  <TableHead>Grading System</TableHead>
                  <TableHead>Excellent</TableHead>
                  <TableHead>Good</TableHead>
                  <TableHead>Satisfactory</TableHead>
                  <TableHead>Pass</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>US</TableCell>
                  <TableCell>Letter (A-F)</TableCell>
                  <TableCell>A+, A</TableCell>
                  <TableCell>A-, B+, B</TableCell>
                  <TableCell>B-, C+, C</TableCell>
                  <TableCell>C-, D+, D, D-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>UK</TableCell>
                  <TableCell>Honours</TableCell>
                  <TableCell>First (70-100%)</TableCell>
                  <TableCell>2:1 (60-69%)</TableCell>
                  <TableCell>2:2 (50-59%)</TableCell>
                  <TableCell>Third (40-49%)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Germany</TableCell>
                  <TableCell>1-5 scale</TableCell>
                  <TableCell>1.0-1.5</TableCell>
                  <TableCell>1.6-2.5</TableCell>
                  <TableCell>2.6-3.5</TableCell>
                  <TableCell>3.6-4.0</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>France</TableCell>
                  <TableCell>0-20 scale</TableCell>
                  <TableCell>16-20</TableCell>
                  <TableCell>14-15</TableCell>
                  <TableCell>12-13</TableCell>
                  <TableCell>10-11</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Australia</TableCell>
                  <TableCell>HD-F scale</TableCell>
                  <TableCell>HD (85-100%)</TableCell>
                  <TableCell>D (75-84%)</TableCell>
                  <TableCell>C (65-74%)</TableCell>
                  <TableCell>P (50-64%)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div>
            <h3 className="text-md font-medium mb-3">Understanding Weighted Grades</h3>
            <p className="text-sm text-muted-foreground">
              Most courses use a weighted grading system, where different components contribute differently to your final grade. 
              Here's a typical weighting scheme for a university course:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
              <li>Homework/Assignments: 20-30%</li>
              <li>Quizzes: 10-15%</li>
              <li>Midterm Exam(s): 20-30%</li>
              <li>Final Exam: 20-40%</li>
              <li>Class Participation: 5-10%</li>
              <li>Labs/Projects: 10-25% (if applicable)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              Understanding your course's specific weighting system is crucial for effective grade planning. This information 
              is typically available in your course syllabus. If you're unsure, ask your instructor for clarification.
            </p>
          </div>
          
          <div className="bg-accent/10 p-4 rounded-md border border-border">
            <h3 className="text-md font-medium mb-3">Grade Point Average (GPA) Impact</h3>
            <p className="text-sm text-muted-foreground">
              Your performance in individual courses affects your overall GPA, which is a key metric for:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
              <li>Academic standing and progression</li>
              <li>Scholarship eligibility and renewal</li>
              <li>Graduate/professional school applications</li>
              <li>Honor society membership</li>
              <li>Internship and job applications</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              For a comprehensive approach to managing your GPA, use our Final Grade Calculator.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradingSystemsGuide;
