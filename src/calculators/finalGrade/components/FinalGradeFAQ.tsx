import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FinalGradeFAQ: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I calculate what grade I need on my final exam?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                To calculate the grade you need on your final exam, you need three pieces of information:
              </p>
              <ol className="list-decimal list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Your current grade in the course (before the final)</li>
                <li>The weight of the final exam as a percentage of your overall grade</li>
                <li>Your desired final grade for the course</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                The formula used is:
              </p>
              <p className="bg-accent/10 p-2 rounded-md font-mono text-sm mt-1">
                Required Final Grade = (Desired Overall Grade - Current Grade × (1 - Final Weight)) ÷ Final Weight
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Our calculator does this math for you automatically. Simply input your current grade, desired grade, and final exam weight to get the required score.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What if the calculator shows I need more than 100% on my final?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                If the calculator shows you need more than 100% on your final exam, unfortunately, it means that your desired grade is mathematically impossible to achieve, even with a perfect score on the final.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                In this case, you have a few options:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Adjust your desired grade to a more achievable target</li>
                <li>Check if your instructor offers extra credit opportunities</li>
                <li>Speak with your instructor about your situation to explore possible options</li>
                <li>If your school has grade replacement policies, consider if retaking the course in a future term would be beneficial</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Remember that one course grade doesn't define your academic journey. Focus on doing your best on the final and learning from the experience.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How do I find my current grade and final exam weight?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Finding your current grade and the weight of your final exam typically involves:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li><span className="font-medium">Course Syllabus:</span> The most reliable source for grading policies. Look for a section that breaks down how your course grade is calculated, including the weight of each component (assignments, quizzes, midterms, final exam, etc.)</li>
                <li><span className="font-medium">Learning Management System (LMS):</span> Platforms like Canvas, Blackboard, or Moodle usually show your current grade. Some instructors set these up to also show your grade without the final exam.</li>
                <li><span className="font-medium">Ask Your Instructor:</span> If the information isn't clear from other sources, email your instructor or visit during office hours to ask about your current standing and final exam weight.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                For your current grade, you can also calculate it manually by:
              </p>
              <ol className="list-decimal list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Multiplying each assignment grade by its weight</li>
                <li>Adding these weighted scores together</li>
                <li>Dividing by the sum of the weights of all completed assignments</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                Remember that the current grade should be your grade before the final exam, not including any final exam points.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How accurate is this Final Grade Calculator?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This calculator provides a mathematically accurate calculation based on the standard weighted average formula used by most educational institutions. However, its accuracy depends on several factors:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li><span className="font-medium">Input Accuracy:</span> The calculation is only as accurate as the data you enter. Make sure your current grade and final exam weight are correct.</li>
                <li><span className="font-medium">Grading System Variations:</span> Some courses might use non-standard grading schemes, such as curves, dropped assignments, or extra credit opportunities that aren't factored into this calculation.</li>
                <li><span className="font-medium">Rounding Policies:</span> Instructors may have different rounding policies for final grades that could affect the outcome.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                For the most accurate assessment, we recommend:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Double-checking your inputs against your course syllabus and gradebook</li>
                <li>Consulting with your instructor if you have questions about your specific course's grading policy</li>
                <li>Using the calculator as a planning tool rather than a definitive prediction</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do professors curve final exams?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Whether final exams are curved varies widely depending on the instructor, department, institution, and circumstances. Here's what you should know about curves:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li><span className="font-medium">Types of Curves:</span> Curves can take many forms, from adding points to everyone's score, to adjusting the grading scale, to fitting scores to a predetermined distribution.</li>
                <li><span className="font-medium">Prevalence:</span> According to surveys of faculty teaching practices, curves are more common in STEM fields and large introductory courses than in humanities or advanced courses.</li>
                <li><span className="font-medium">Transparency:</span> Some instructors announce their curving policies in advance, while others decide after seeing the grade distribution.</li>
                <li><span className="font-medium">Purpose:</span> Curves typically aim to account for exam difficulty or to achieve a target grade distribution, not simply to boost everyone's grades.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                When planning for your final exam:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Never count on a curve – aim to achieve the grade you need without one</li>
                <li>Check your syllabus or ask your instructor about curving policies</li>
                <li>Remember that curves may help or hurt you depending on your performance relative to classmates</li>
                <li>If a curve is applied, it often happens after all exams are graded, so final grades may differ from raw scores</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                For this calculator, we recommend using uncurved values in your calculations and treating any curve as a potential bonus.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What are the passing grades in college?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Passing grades in college vary by institution, program, and course level. Here's a general overview:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li><span className="font-medium">General Undergraduate Passing Grade:</span> Usually D- or D (60-63%), but may not count for major requirements</li>
                <li><span className="font-medium">Major-Required Courses:</span> Often require C or higher (73%+)</li>
                <li><span className="font-medium">Graduate Courses:</span> Typically require B- or higher (80%+)</li>
                <li><span className="font-medium">Prerequisites:</span> Often require C or higher to move to advanced courses</li>
                <li><span className="font-medium">Financial Aid/Scholarship Requirements:</span> May require maintaining a certain GPA (often 2.0 or higher)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Statistics from the National Center for Education Statistics show that:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Academic probation typically begins when GPA falls below 2.0 (equivalent to a C average)</li>
                <li>Approximately 25-30% of college students are placed on academic probation at some point</li>
                <li>Most honor societies require a minimum GPA of 3.0-3.5 (B to B+ average)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                It's important to check your specific institution's academic policies and your program's requirements to understand what constitutes a passing grade for your particular situation.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Can I still pass my class if I fail the final exam?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Whether you can pass a class despite failing the final exam depends on several factors:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li><span className="font-medium">Your Current Grade:</span> If your pre-final grade is strong enough, you might still pass despite a poor final exam performance</li>
                <li><span className="font-medium">Final Exam Weight:</span> The lower the weight of the final exam, the less impact it will have on your overall grade</li>
                <li><span className="font-medium">Minimum Final Exam Requirements:</span> Some courses require a minimum score on the final exam regardless of your overall average</li>
                <li><span className="font-medium">Definition of "Failing" the Final:</span> There's a difference between getting a D (passing but poor) and getting an F (failing) on the final</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                You can use this calculator to determine the minimum grade you need on the final exam to pass the course:
              </p>
              <ol className="list-decimal list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Enter your current grade</li>
                <li>Set your desired grade to the minimum passing grade (usually 60-70%, depending on your institution)</li>
                <li>Enter the weight of your final exam</li>
                <li>Calculate to see if a passing grade is achievable even with a poor final performance</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-2">
                Remember to check your syllabus for any special requirements about passing the final exam. Some courses explicitly state that you must pass the final to pass the course, regardless of your overall average.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger>
              How do I convert between different grading systems?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Converting between different grading systems can be helpful for understanding academic performance across institutions or countries. Here are some common conversions:
              </p>
              <div className="mt-3 space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Percentage to Letter Grade (US System)</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>90-100%: A range (A-, A, A+)</li>
                    <li>80-89%: B range (B-, B, B+)</li>
                    <li>70-79%: C range (C-, C, C+)</li>
                    <li>60-69%: D range (D-, D, D+)</li>
                    <li>Below 60%: F</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-1">
                    These ranges may vary by institution. Some use A: 93-100%, A-: 90-92%, etc.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Letter Grade to GPA (4.0 Scale)</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>A+: 4.0, A: 4.0, A-: 3.7</li>
                    <li>B+: 3.3, B: 3.0, B-: 2.7</li>
                    <li>C+: 2.3, C: 2.0, C-: 1.7</li>
                    <li>D+: 1.3, D: 1.0, D-: 0.7</li>
                    <li>F: 0.0</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">International Equivalents (Approximate)</h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    For students needing to understand grade equivalencies across borders:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>US A ≈ UK First Class Honours (70%+) ≈ German 1.0-1.5 ≈ French 16-20</li>
                    <li>US B ≈ UK Upper Second Class (60-69%) ≈ German 1.6-2.5 ≈ French 14-15</li>
                    <li>US C ≈ UK Lower Second Class (50-59%) ≈ German 2.6-3.5 ≈ French 12-13</li>
                    <li>US D ≈ UK Third Class (40-49%) ≈ German 3.6-4.0 ≈ French 10-11</li>
                    <li>US F ≈ UK Fail (below 40%) ≈ German 5.0 ≈ French below 10</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                For more precise conversions, particularly for international students or those applying to programs abroad, we recommend:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-muted-foreground">
                <li>Consulting your institution's international office for official conversion policies</li>
                <li>Checking with destination institutions about their specific requirements and conversion methods</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-9">
            <AccordionTrigger>
              What if I need to raise my grade substantially?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                If you find you need a very high score on your final exam to achieve your desired grade, consider these strategies:
              </p>
              <div className="mt-3 space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Before the Final Exam</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Complete Missing Assignments:</span> Check if you can still submit any late work for partial credit</li>
                    <li><span className="font-medium">Request Extra Credit:</span> Ask your instructor if there are extra credit opportunities available</li>
                    <li><span className="font-medium">Grade Revisions:</span> Some instructors allow assignment or test revisions for additional points</li>
                    <li><span className="font-medium">Verify Your Current Grade:</span> Make sure your calculated current grade is accurate and includes all assignments</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Final Exam Preparation</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Intensive Study Plan:</span> Create a detailed study schedule starting at least 1-2 weeks before the exam</li>
                    <li><span className="font-medium">Office Hours:</span> Attend all available office hours and review sessions</li>
                    <li><span className="font-medium">Tutoring:</span> Seek one-on-one tutoring for challenging concepts</li>
                    <li><span className="font-medium">Study Groups:</span> Form or join a study group with motivated classmates</li>
                    <li><span className="font-medium">Practice Tests:</span> Complete as many practice exams as possible under timed conditions</li>
                    <li><span className="font-medium">Focus on High-Value Topics:</span> If you know which topics are most heavily weighted, prioritize those</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Alternative Options</h4>
                  <p className="text-xs text-muted-foreground">
                    If a substantial grade improvement seems unlikely, consider these alternatives:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Course Withdrawal:</span> If your institution's deadline hasn't passed, withdrawing may be preferable to a poor grade</li>
                    <li><span className="font-medium">Pass/Fail Option:</span> Some schools allow switching to pass/fail grading late in the term</li>
                    <li><span className="font-medium">Incomplete Grade:</span> In cases of extenuating circumstances, an incomplete grade might be an option</li>
                    <li><span className="font-medium">Grade Forgiveness:</span> Research if your institution offers grade replacement policies for future terms</li>
                    <li><span className="font-medium">Academic Advising:</span> Speak with an academic advisor about implications for your degree progress</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                According to educational research, a focused effort in the final weeks of a course can significantly impact performance. Studies show students who engage in intensive review sessions and practice testing in the weeks before finals typically improve their performance by 5-15 percentage points compared to their previous course performance.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-10">
            <AccordionTrigger>
              How can I monitor my grades throughout the semester?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Proactively monitoring your grades throughout the semester prevents end-of-term surprises and allows you to make adjustments before it's too late. Here are effective strategies:
              </p>
              <div className="mt-3 space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Digital Grade Tracking</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Learning Management Systems:</span> Most schools use Canvas, Blackboard, or Moodle where instructors post grades</li>
                    <li><span className="font-medium">Spreadsheet Tracking:</span> Create your own Excel or Google Sheets document to calculate weighted grades</li>
                    <li><span className="font-medium">Grade Calculator Apps:</span> Apps like "My GPA Calculator" or "Grades Tracker" can help track course progress</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Best Practices for Grade Monitoring</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Weekly Check-ins:</span> Review your grades in each course once a week</li>
                    <li><span className="font-medium">Assignment Planning:</span> Calculate the impact of upcoming assignments on your grade</li>
                    <li><span className="font-medium">Grade Projections:</span> Regularly estimate your final grade based on current performance</li>
                    <li><span className="font-medium">Record Keeping:</span> Save all graded materials until final grades are posted</li>
                    <li><span className="font-medium">Grade Verification:</span> Cross-check posted grades against your returned assignments for errors</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-1">Communication with Instructors</h4>
                  <p className="text-xs text-muted-foreground">
                    According to a study in the Journal of College Student Retention, students who regularly communicate with instructors about their grades are more likely to improve their performance.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground mt-1">
                    <li>Schedule a meeting if you notice your grade dropping below your target</li>
                    <li>Ask for clarification on grading criteria if you don't understand an assessment</li>
                    <li>Request feedback on how to improve future assignments</li>
                    <li>Inquire about extra credit or revision opportunities if available</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                By consistently monitoring your progress, you can:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1 text-sm text-muted-foreground">
                <li>Identify and address performance issues early</li>
                <li>Make informed decisions about where to focus your efforts</li>
                <li>Set realistic goals for remaining assessments</li>
                <li>Reduce end-of-term stress by eliminating grade uncertainty</li>
                <li>Take control of your academic success</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Remember that grade monitoring is most effective when combined with action—use what you learn to adjust your study strategies and seek help when needed.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FinalGradeFAQ;
