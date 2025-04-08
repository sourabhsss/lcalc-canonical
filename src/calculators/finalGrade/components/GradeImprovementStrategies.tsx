
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ListChecks, 
  BarChart, 
  Clock, 
  UsersRound, 
  Lightbulb,
  MessageCircle
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const GradeImprovementStrategies: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <ListChecks className="h-5 w-5" />
          Strategies to Improve Your Grade
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-md font-medium flex items-center gap-2 mb-3">
            <BarChart className="h-4 w-4 text-primary" />
            Know Where You Stand
          </h3>
          <p className="text-sm text-muted-foreground">
            Before implementing improvement strategies, it's essential to have a clear understanding of your current 
            standing in the course. Most learning management systems (Canvas, Blackboard, Moodle) provide a grade 
            breakdown showing your performance in different components of the course.
          </p>
          <div className="mt-3 space-y-2">
            <p className="text-sm text-muted-foreground">Take inventory of:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Grades received on each assignment, quiz, and exam</li>
              <li>Missing assignments or make-up opportunities</li>
              <li>Weight of each component toward your final grade</li>
              <li>Remaining assignments and their potential impact</li>
              <li>Your instructor's grading policies (drops, curves, extra credit)</li>
            </ul>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-md font-medium flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-primary" />
            Before the Final Exam
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1">Complete All Remaining Assignments</h4>
              <p className="text-sm text-muted-foreground">
                According to a study by the National Survey of Student Engagement, completing all assigned coursework 
                can raise a student's final grade by up to half a letter grade compared to students who skip assignments, 
                even if they perform similarly on exams.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Prioritize high-value assignments that contribute more to your grade</li>
                <li>Submit all work, even if it's not perfect - partial credit is better than zero</li>
                <li>Check for any make-up or revision opportunities for past assignments</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Request Extra Credit Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                Many instructors offer extra credit options, especially towards the end of the term. These might include 
                additional assignments, attending special lectures, or participating in department research studies.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                When requesting extra credit, be specific about your situation and demonstrate your commitment to learning 
                the material, not just improving your grade. Approach these conversations professionally and with respect 
                for your instructor's policies.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Meet With Your Instructor or TA</h4>
              <p className="text-sm text-muted-foreground">
                Research from the Journal of Political Science Education found that students who attended at least one 
                office hours session scored, on average, 3.5 percentage points higher in the course than those who didn't.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Come prepared with specific questions about course material</li>
                <li>Ask for feedback on your study approaches and exam preparation</li>
                <li>Discuss any concepts you find challenging before the final exam</li>
                <li>Inquire about the format and focus areas of the final exam</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-md font-medium flex items-center gap-2 mb-3">
            <Lightbulb className="h-4 w-4 text-primary" />
            Effective Final Exam Preparation
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-1">Create a Strategic Study Plan</h4>
              <p className="text-sm text-muted-foreground">
                Research on cognitive science and learning shows that distributed practice (studying in shorter sessions 
                over time) is more effective than cramming. Begin studying at least 1-2 weeks before your final exam.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Create a calendar with dedicated study sessions for each subject</li>
                <li>Allocate more time to challenging topics and heavily weighted sections</li>
                <li>Include breaks to prevent burnout and improve retention</li>
                <li>Use active learning techniques (practice problems, self-testing, teaching concepts)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Leverage Practice Exams and Past Materials</h4>
              <p className="text-sm text-muted-foreground">
                A study published in Science magazine found that students who took practice tests retained 50% more 
                information a week later compared to students who used other study methods.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Complete practice exams under timed conditions</li>
                <li>Review past quizzes, midterms, and assignments</li>
                <li>Focus on understanding why answers are correct/incorrect</li>
                <li>Create your own practice questions based on lecture notes and readings</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Optimize Your Testing Environment</h4>
              <p className="text-sm text-muted-foreground">
                Test performance can be significantly affected by physical and mental state. Research in cognitive 
                psychology shows that matching your study environment to your testing environment can improve recall.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Get sufficient sleep the night before (7-9 hours for most adults)</li>
                <li>Eat a balanced meal before the exam to maintain energy</li>
                <li>Arrive early to reduce stress and prepare mentally</li>
                <li>Bring all necessary materials (calculator, pencils, scratch paper)</li>
                <li>Use relaxation techniques if you experience test anxiety</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-md font-medium flex items-center gap-2 mb-3">
            <UsersRound className="h-4 w-4 text-primary" />
            Collaborative Learning Approaches
          </h3>
          <p className="text-sm text-muted-foreground">
            According to research published in the Proceedings of the National Academy of Sciences, students in active 
            learning environments like study groups performed better than those in traditional lecture settings.
          </p>
          <div className="mt-3 space-y-3">
            <div>
              <h4 className="font-medium text-sm mb-1">Form an Effective Study Group</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Keep groups small (3-5 people) and focused</li>
                <li>Set clear goals and agendas for each session</li>
                <li>Assign different topics to each member to teach others</li>
                <li>Create and share practice questions</li>
                <li>Use collaborative online tools for remote studying</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-1">Utilize Tutoring Services</h4>
              <p className="text-sm text-muted-foreground">
                Most educational institutions offer free tutoring services. Studies show that students who use tutoring 
                services average 0.5 to 1.0 grade point improvements in tutored courses.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm text-muted-foreground">
                <li>Schedule sessions early, as slots fill quickly near finals</li>
                <li>Come prepared with specific questions and problem areas</li>
                <li>Consider peer tutoring, which can be equally effective</li>
                <li>For more personalized help, explore departmental tutoring options</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-md font-medium flex items-center gap-2 mb-3">
            <MessageCircle className="h-4 w-4 text-primary" />
            When to Consider Other Options
          </h3>
          <p className="text-sm text-muted-foreground">
            Sometimes, despite your best efforts, achieving your desired grade may not be mathematically possible. In these situations, 
            it's important to explore other academic options.
          </p>
          <div className="mt-3 space-y-2">
            <h4 className="font-medium text-sm mb-1">Alternative Academic Paths:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li><span className="font-medium">Course Withdrawal:</span> If your institution's deadline hasn't passed, withdrawing may prevent a low grade from affecting your GPA</li>
              <li><span className="font-medium">Pass/Fail Option:</span> Some schools allow changing grade basis to pass/fail, which protects your GPA while still earning credit</li>
              <li><span className="font-medium">Grade Forgiveness:</span> Many institutions allow retaking courses to replace poor grades</li>
              <li><span className="font-medium">Incomplete Grade:</span> If circumstances warrant it, you might arrange to complete coursework after the term ends</li>
              <li><span className="font-medium">Academic Advising:</span> Schedule an appointment to discuss how one course affects your overall academic plan</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              Remember that one course grade rarely defines your academic career. According to the National Center for Education Statistics, 
              nearly 40% of college students change their major at least once, and many successful students experience occasional academic setbacks.
            </p>
          </div>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg border border-border">
          <h3 className="font-medium mb-2">Key Takeaway</h3>
          <p className="text-sm text-muted-foreground">
            Grade improvement is most effective when approached systematically. By understanding exactly what grade you need on your 
            final exam, you can develop targeted strategies that maximize your chances of success. Remember that learning is a process, 
            and temporary setbacks can provide valuable opportunities for growth and improvement.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeImprovementStrategies;
