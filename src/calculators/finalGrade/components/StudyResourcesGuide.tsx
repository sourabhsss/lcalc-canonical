import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Library, Globe, Laptop, FileText, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StudyResourcesGuide: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Library className="h-5 w-5" />
          Study Resources Guide
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="online">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="online">Online Resources</TabsTrigger>
            <TabsTrigger value="campus">Campus Resources</TabsTrigger>
            <TabsTrigger value="study">Study Methods</TabsTrigger>
            <TabsTrigger value="tools">Digital Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="online" className="space-y-4 mt-4">
            <div>
              <h3 className="text-md font-medium flex items-center gap-2 mb-3">
                <Globe className="h-4 w-4 text-primary" />
                Free Online Learning Platforms
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                These platforms offer courses, tutorials, and practice exercises across a wide range of subjects:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">Khan Academy</span>
                    <p className="text-xs text-muted-foreground">
                      Comprehensive, free lessons in math, science, economics, humanities, and test prep. 
                      Particularly strong for math and science subjects.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">Coursera</span>
                    <p className="text-xs text-muted-foreground">
                      University-level courses from top institutions. Many courses can be audited for free, 
                      with certificates available for a fee.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">edX</span>
                    <p className="text-xs text-muted-foreground">
                      Similar to Coursera, offering courses from universities like Harvard, MIT, and Berkeley. 
                      Strong in computer science, engineering, and humanities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">YouTube Educational Channels</span>
                    <p className="text-xs text-muted-foreground">
                      Channels like Crash Course, MinutePhysics, and Professor Leonard offer high-quality 
                      educational content across many subjects.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Subject-Specific Resources</h3>
              <div className="space-y-3">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Mathematics</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>Paul's Online Math Notes - Comprehensive notes for calculus and differential equations</li>
                    <li>Desmos - Interactive graphing calculator</li>
                    <li>Wolfram Alpha - Computational engine for solving math problems</li>
                    <li>3Blue1Brown - Video channel with intuitive explanations of mathematical concepts</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Sciences</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>PhET Interactive Simulations - Physics, chemistry, and biology simulations</li>
                    <li>OpenStax - Free, peer-reviewed textbooks for science subjects</li>
                    <li>AK Lectures - Comprehensive videos on biology and chemistry topics</li>
                    <li>ChemCollective - Virtual lab simulations for chemistry</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Humanities & Social Sciences</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>Project Gutenberg - Free classic literature texts</li>
                    <li>Stanford Encyclopedia of Philosophy - Comprehensive philosophy resource</li>
                    <li>Purdue OWL - Writing guides and citation resources</li>
                    <li>JSTOR - Academic articles (limited free access)</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Computer Science & Programming</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>freeCodeCamp - Interactive coding lessons and projects</li>
                    <li>Codecademy - Interactive programming tutorials</li>
                    <li>GeeksforGeeks - Programming tutorials and practice problems</li>
                    <li>LeetCode - Coding challenges for interview preparation</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="campus" className="space-y-4 mt-4">
            <div>
              <h3 className="text-md font-medium flex items-center gap-2 mb-3">
                <FileText className="h-4 w-4 text-primary" />
                On-Campus Academic Support
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Most educational institutions offer various support services to help students succeed academically:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">Tutoring Centers</span>
                    <p className="text-xs text-muted-foreground">
                      According to the National College Learning Center Association, students who use tutoring 
                      services attend class more regularly and are 25% more likely to graduate than peers who 
                      don't use these services.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Most colleges offer free tutoring for a wide range of subjects. Check your school's 
                      learning center or academic support website for scheduling.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">Writing Centers</span>
                    <p className="text-xs text-muted-foreground">
                      These centers provide assistance with essays, research papers, and other written assignments 
                      across all disciplines. Services typically include one-on-one consultations for brainstorming, 
                      outlining, drafting, and revising.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Research shows that students who use writing centers consistently produce higher quality 
                      written work and often see grade improvements of half to a full letter grade.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">Departmental Help Sessions</span>
                    <p className="text-xs text-muted-foreground">
                      Many academic departments offer regular help sessions, review sessions before exams, or 
                      supplemental instruction (SI) sessions led by students who previously excelled in the course.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Data from the International Center for Supplemental Instruction indicates that students who 
                      attend SI sessions earn course grades 0.5 to 1.0 letter grades higher than peers with similar 
                      academic backgrounds who don't attend.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded flex-shrink-0 mt-0.5">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium text-sm">Academic Advisors</span>
                    <p className="text-xs text-muted-foreground">
                      Academic advisors can help with course selection, understanding degree requirements, and 
                      connecting you with appropriate resources based on your specific needs.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Research from the National Academic Advising Association shows that students who meet regularly 
                      with advisors have higher GPAs and are more likely to graduate on time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Library Resources</h3>
              <p className="text-sm text-muted-foreground mb-3">
                University libraries offer more than just books - they provide a wealth of academic resources 
                that many students underutilize:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><span className="font-medium">Research Consultations:</span> Librarians can help you find sources for papers and projects</li>
                <li><span className="font-medium">Course Reserves:</span> Textbooks and course materials that can be borrowed for short periods</li>
                <li><span className="font-medium">Database Access:</span> Scholarly journals and publications not freely available online</li>
                <li><span className="font-medium">Study Spaces:</span> Quiet spaces, group rooms, and technology-equipped areas</li>
                <li><span className="font-medium">Workshops:</span> Training on research methods, citation styles, and academic tools</li>
              </ul>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-md border border-border">
              <h3 className="font-medium text-sm mb-2">Pro Tip: Office Hours</h3>
              <p className="text-xs text-muted-foreground">
                According to a study published in the Journal of Political Science Education, students who attended 
                office hours at least once during the semester scored an average of 3.5 percentage points higher in 
                the course than those who didn't.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Office hours are dedicated times when instructors are available to help students one-on-one. They're 
                an underutilized resource that can provide personalized guidance on course material, assignment 
                expectations, and exam preparation.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                When attending office hours, come prepared with specific questions and be ready to engage actively 
                with the material.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="study" className="space-y-4 mt-4">
            <div>
              <h3 className="text-md font-medium flex items-center gap-2 mb-3">
                <Laptop className="h-4 w-4 text-primary" />
                Evidence-Based Study Techniques
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Cognitive science research has identified several highly effective learning strategies:
              </p>
              <ul className="space-y-3">
                <li className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Spaced Repetition</h4>
                  <p className="text-xs text-muted-foreground">
                    Instead of cramming, space out your studying over time. Research shows that studying material 
                    multiple times with breaks between sessions leads to better long-term retention.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-medium">Implementation:</span> Use a spaced repetition app like Anki, or create a 
                    study schedule that revisits material at increasing intervals (review after 1 day, then 3 days, then 1 week).
                  </p>
                </li>
                
                <li className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Retrieval Practice</h4>
                  <p className="text-xs text-muted-foreground">
                    Testing yourself forces your brain to retrieve information, which strengthens memory more effectively 
                    than re-reading or highlighting. A meta-analysis in Psychological Science found that practice testing 
                    produced the largest effects on learning compared to other techniques.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-medium">Implementation:</span> Create flashcards, take practice tests, or close your 
                    notes and write down everything you remember about a topic.
                  </p>
                </li>
                
                <li className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Interleaving</h4>
                  <p className="text-xs text-muted-foreground">
                    Rather than studying one topic or problem type in isolation (blocked practice), mix different topics 
                    or problem types together. Research shows this approach improves long-term retention and transfer of knowledge.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-medium">Implementation:</span> If studying calculus, alternate between derivatives, 
                    integrals, and applications instead of completing all problems of one type before moving to the next.
                  </p>
                </li>
                
                <li className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Elaboration</h4>
                  <p className="text-xs text-muted-foreground">
                    Explaining concepts in your own words and connecting them to what you already know enhances understanding 
                    and retention. According to research in Educational Psychology Review, elaboration helps create more 
                    retrieval cues and strengthens memory.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-medium">Implementation:</span> After learning something new, explain it as if teaching 
                    someone else, or connect it to real-world examples and personal experiences.
                  </p>
                </li>
                
                <li className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Dual Coding</h4>
                  <p className="text-xs text-muted-foreground">
                    Combining verbal information with visuals improves learning by creating multiple pathways for retrieval. 
                    A review in the Journal of Educational Psychology found that learning with words and pictures leads to 
                    better performance than words alone.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-medium">Implementation:</span> Create diagrams, mind maps, or sketches to represent 
                    verbal information; annotate images with verbal explanations.
                  </p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Study Environment Optimization</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Research shows that your study environment can significantly impact learning effectiveness:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><span className="font-medium">Context-Dependent Memory:</span> Studying in an environment similar to where you'll be tested can improve recall</li>
                <li><span className="font-medium">Minimize Distractions:</span> Studies show that even brief distractions can significantly disrupt learning</li>
                <li><span className="font-medium">Background Music:</span> Research is mixed, but instrumental music at a moderate volume works best if you prefer studying with music</li>
                <li><span className="font-medium">Regular Breaks:</span> The Pomodoro Technique (25 minutes of focused work followed by a 5-minute break) helps maintain concentration</li>
                <li><span className="font-medium">Study Groups:</span> Effective for complex material requiring discussion, but choose members carefully</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-border">
              <h3 className="font-medium text-sm mb-2">Avoiding Ineffective Study Methods</h3>
              <p className="text-xs text-muted-foreground">
                Research in cognitive psychology has identified several popular study techniques that are less effective 
                than students believe:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-xs text-muted-foreground">
                <li><span className="font-medium">Rereading:</span> Passive and time-consuming with minimal benefit</li>
                <li><span className="font-medium">Highlighting/Underlining:</span> Often done mindlessly; better to annotate with notes</li>
                <li><span className="font-medium">Cramming:</span> May help short-term recall but leads to poor long-term retention</li>
                <li><span className="font-medium">Focusing on a Single Learning Style:</span> Research doesn't support matching teaching to preferred learning styles</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                Instead, focus on active learning techniques like self-testing, spaced practice, and teaching concepts to others.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="space-y-4 mt-4">
            <div>
              <h3 className="text-md font-medium flex items-center gap-2 mb-3">
                <Laptop className="h-4 w-4 text-primary" />
                Digital Study Tools & Apps
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                These digital tools can enhance your study efficiency and effectiveness:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Note-Taking & Organization</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Notion:</span> All-in-one workspace for notes, tasks, and projects</li>
                    <li><span className="font-medium">Evernote:</span> Note-taking app with powerful search and organization</li>
                    <li><span className="font-medium">OneNote:</span> Digital notebook with free-form page layout</li>
                    <li><span className="font-medium">Google Keep:</span> Simple note-taking with reminders and labels</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Flashcards & Spaced Repetition</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Anki:</span> Powerful spaced repetition flashcard system</li>
                    <li><span className="font-medium">Quizlet:</span> Study sets with various learning modes</li>
                    <li><span className="font-medium">Memrise:</span> Language learning with spaced repetition</li>
                    <li><span className="font-medium">Brainscape:</span> Confidence-based repetition system</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Focus & Productivity</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Forest:</span> Gamified focus timer that grows virtual trees</li>
                    <li><span className="font-medium">Focus@Will:</span> Neuroscience-based focus music</li>
                    <li><span className="font-medium">Freedom:</span> Blocks distracting websites and apps</li>
                    <li><span className="font-medium">Todoist:</span> Task management with scheduling and priorities</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Mind Mapping & Visual Learning</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">MindMeister:</span> Collaborative online mind mapping</li>
                    <li><span className="font-medium">XMind:</span> Structured mind mapping and brainstorming</li>
                    <li><span className="font-medium">Canva:</span> Easy graphic design for visual notes</li>
                    <li><span className="font-medium">Coggle:</span> Simple, collaborative mind maps</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Citation & Research</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Zotero:</span> Research management with browser integration</li>
                    <li><span className="font-medium">Mendeley:</span> Reference manager with PDF annotation</li>
                    <li><span className="font-medium">Citationsy:</span> Simple citation generator</li>
                    <li><span className="font-medium">Google Scholar:</span> Academic search engine</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-3">
                  <h4 className="font-medium text-sm mb-1">Subject-Specific Tools</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li><span className="font-medium">Desmos:</span> Interactive graphing calculator</li>
                    <li><span className="font-medium">Wolfram Alpha:</span> Computational knowledge engine</li>
                    <li><span className="font-medium">GeoGebra:</span> Interactive geometry, algebra, and calculus</li>
                    <li><span className="font-medium">Grammarly:</span> Grammar checker and writing assistant</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-md font-medium mb-3">Calculators and Academic Tools</h3>
              <p className="text-sm text-muted-foreground mb-3">
                In addition to our Final Grade Calculator, these other calculators can help with academic planning:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li><a href="/rref-calculator" className="text-primary hover:underline">RREF Calculator</a>: Solve systems of linear equations</li>
                <li><a href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</a>: Calculate statistical summaries</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-2">
                Using these calculators can help you better understand your academic standing and set realistic goals for improvement.
              </p>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-md border border-border">
              <h3 className="font-medium text-sm mb-2">Digital Literacy Tip</h3>
              <p className="text-xs text-muted-foreground">
                While digital tools can enhance learning, research shows that handwriting notes can improve conceptual understanding 
                compared to typing. A study published in Psychological Science found that students who took handwritten notes performed 
                better on conceptual questions than those who typed notes.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Consider using a hybrid approach: handwrite notes during class to promote deeper processing, then digitize important 
                information for easy searching and review.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default StudyResourcesGuide;
