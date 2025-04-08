
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const APLangFAQ: React.FC = () => {
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
              What's the difference between AP Lang and AP Lit?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                AP English Language and Composition (AP Lang) focuses on rhetoric, argumentative writing, and 
                analysis of non-fiction texts. It emphasizes persuasive writing and understanding how authors 
                construct arguments.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                AP English Literature and Composition (AP Lit) centers on literary analysis of fiction, poetry, 
                and drama. It emphasizes critical reading, literary techniques, and analysis of themes and characters 
                in literary works.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                While both courses develop critical reading and writing skills, AP Lang is more practical and 
                focused on argumentation, while AP Lit is more focused on literary interpretation.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is AP Lang harder than AP Lit?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Neither course is inherently "harder" than the other; they simply focus on different skills 
                and types of texts. Some students find AP Lang more accessible because it deals with non-fiction 
                texts and practical argumentation. Others prefer AP Lit because they enjoy analyzing literature.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Looking at score distributions, AP Lang typically has slightly higher pass rates (scores of 3+) 
                than AP Lit, but this doesn't necessarily mean it's easier—it could reflect student preparation, 
                interest, or other factors.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                The best choice depends on your personal strengths and interests. Many students take both courses, 
                often AP Lang in junior year and AP Lit in senior year.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What score do I need to get college credit?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                College credit policies vary by institution. Most selective colleges require a score of 4 or 5 
                to grant credit, while some may accept a 3. Some highly selective institutions (like Ivy League 
                schools) may not offer credit for AP scores at all but may use them for placement purposes.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Here are some examples of AP Lang credit policies:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-muted-foreground">
                <li>University of California system: Score of 3, 4, or 5 earns credit</li>
                <li>University of Michigan: Score of 4 or 5 earns credit</li>
                <li>Ohio State University: Score of 3, 4, or 5 earns credit</li>
                <li>Boston University: Score of 4 or 5 earns credit</li>
                <li>Georgetown University: No credit, but scores may be used for placement</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Always check the specific policies at your target colleges, as they can change and vary widely.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How should I prepare for the AP Lang exam?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                Effective preparation for the AP Lang exam involves:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-muted-foreground">
                <li><strong>Regular Reading:</strong> Read high-quality non-fiction from sources like The New York Times, The Atlantic, or The New Yorker to expose yourself to sophisticated argumentation and rhetoric.</li>
                <li><strong>Practice Analytical Writing:</strong> Regularly write analyses of the rhetorical strategies in the texts you read.</li>
                <li><strong>Learn Rhetorical Terms and Strategies:</strong> Familiarize yourself with ethos, pathos, logos, and various rhetorical devices.</li>
                <li><strong>Take Practice Tests:</strong> Complete full-length practice exams under timed conditions.</li>
                <li><strong>Study Released FRQs:</strong> Review past free-response questions and sample responses from the College Board.</li>
                <li><strong>Join Study Groups:</strong> Collaborate with peers to discuss texts and practice analysis.</li>
                <li><strong>Use AP Classroom:</strong> Utilize the resources provided by the College Board's AP Classroom.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Start preparing early (at least 3-4 months before the exam) and maintain a regular study schedule.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What are readers looking for in AP Lang essays?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                AP Lang essay readers evaluate:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-muted-foreground">
                <li><strong>Thesis/Claim:</strong> A clear, defensible position that addresses the prompt</li>
                <li><strong>Evidence and Commentary:</strong> Specific, relevant evidence and thoughtful analysis connecting evidence to claims</li>
                <li><strong>Sophistication:</strong> Complex thinking, effective rhetorical choices, and stylistic maturity</li>
                <li><strong>Organization:</strong> Logical structure with clear transitions</li>
                <li><strong>Writing Mechanics:</strong> Command of standard written English (though minor errors won't significantly impact scores)</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                For specific essays:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-muted-foreground">
                <li><strong>Synthesis:</strong> Ability to integrate multiple sources meaningfully</li>
                <li><strong>Rhetorical Analysis:</strong> Identification and analysis of rhetorical strategies</li>
                <li><strong>Argument:</strong> Development of a persuasive position with compelling support</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger>
              How accurate is this AP Lang Score Calculator?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                This calculator provides an estimate based on typical scoring patterns, but it's important to 
                understand some limitations:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-muted-foreground">
                <li>The College Board does not publish the exact conversion formulas they use each year</li>
                <li>Scoring scales can vary slightly from year to year based on exam difficulty</li>
                <li>Essay scores in this calculator are self-reported estimates and may differ from how AP readers would score your actual essays</li>
                <li>The calculator uses approximations of the weighting between multiple-choice and free-response sections</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                For the most accurate assessment, take official practice tests and have your essays evaluated 
                by an AP Lang teacher familiar with the scoring rubrics. This calculator should be used as a 
                general guide rather than a definitive prediction.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger>
              What resources does the College Board provide for AP Lang?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-muted-foreground">
                The College Board offers several official resources for AP Lang preparation:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-muted-foreground">
                <li><strong>AP Classroom:</strong> An online platform with progress checks, personal progress feedback, and a question bank</li>
                <li><strong>Course and Exam Description:</strong> Detailed information about course content, exam format, and sample questions</li>
                <li><strong>Past Free-Response Questions:</strong> Released FRQs from previous years with scoring guidelines and sample responses</li>
                <li><strong>AP Daily Videos:</strong> Short instructional videos covering key concepts</li>
                <li><strong>Scoring Commentaries:</strong> Explanations of how essays are scored with examples</li>
                <li><strong>AP Lang Community:</strong> Forums and resources for students and teachers</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Most of these resources are available through your AP teacher or on the College Board website.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default APLangFAQ;
