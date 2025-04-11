import React, { useState } from 'react';
import CourtDeadlineForm from './CourtDeadlineForm';
import CourtDeadlineResult from './CourtDeadlineResult';
import { calculateCourtDeadline, CourtDeadlineInputs, CourtDeadlineResults } from './courtDeadlineUtils';
import CourtRulesGuide from './components/CourtRulesGuide';
import JurisdictionGuidelines from './components/JurisdictionGuidelines';
import RelatedCalculators from './components/RelatedCalculators';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from "@/components/ui/separator";

const CourtDeadlineCalculator: React.FC = () => {
  const [calculationInputs, setCalculationInputs] = useState<CourtDeadlineInputs | null>(null);
  const [calculationResults, setCalculationResults] = useState<CourtDeadlineResults | null>(null);
  
  const handleCalculate = (inputs: CourtDeadlineInputs) => {
    setCalculationInputs(inputs);
    const results = calculateCourtDeadline(inputs);
    setCalculationResults(results);
  };
  
  const handleReset = () => {
    setCalculationInputs(null);
    setCalculationResults(null);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-lg shadow-sm border">
            <CourtDeadlineForm 
              onCalculate={handleCalculate}
              onReset={handleReset}
            />
          </div>
        </div>
        
        {/* Results and Tabs Section */}
        <div className="lg:col-span-7">
          {calculationResults && (
            <div className="mb-8">
              <CourtDeadlineResult 
                results={calculationResults}
                filingDate={calculationInputs?.filingDate || null}
              />
            </div>
          )}

          <div className="bg-white rounded-lg shadow-sm border">
            <Tabs defaultValue="court-rules" className="w-full">
              <TabsList className="w-full border-b bg-muted/50 rounded-t-lg">
                <TabsTrigger value="court-rules" className="flex-1 rounded-none data-[state=active]:bg-background">Court Rules</TabsTrigger>
                <TabsTrigger value="jurisdictions" className="flex-1 rounded-none data-[state=active]:bg-background">Jurisdictions</TabsTrigger>
              </TabsList>
              <div className="p-6">
                <TabsContent value="court-rules" className="mt-0">
                  <CourtRulesGuide />
                </TabsContent>
                <TabsContent value="jurisdictions" className="mt-0">
                  <JurisdictionGuidelines />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Related Calculators Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
        <RelatedCalculators />
      </div>
      
      <Separator className="my-12" />
      
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Understanding Court Deadlines</h2>
        <p className="text-muted-foreground">Court deadlines are critical aspects of legal proceedings that determine when specific actions must be taken. Missing a court deadline can have serious consequences, potentially resulting in the dismissal of your case or other negative outcomes. Our Court Deadline Calculator helps legal professionals and individuals navigate these important dates with greater confidence.</p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Why Court Deadlines Matter</h3>
        <p className="text-muted-foreground">In the legal system, timing is everything. Court deadlines ensure that cases move forward efficiently and that all parties have adequate time to prepare. Different types of legal proceedings have different deadlines, and these can vary by jurisdiction. Some common court deadlines include:</p>
        
        <ul className="list-disc pl-6 my-4 text-muted-foreground">
          <li>Filing an initial complaint or petition</li>
          <li>Responding to a complaint</li>
          <li>Filing motions</li>
          <li>Submitting discovery requests</li>
          <li>Responding to discovery requests</li>
          <li>Filing appeals</li>
          <li>Serving documents to other parties</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Types of Deadline Counting Methods</h3>
        <p className="text-muted-foreground">Courts use different methods to count days for deadlines:</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Calendar Days</h4>
        <p className="text-muted-foreground">Calendar days include all days (weekends and holidays) in the count. This is the simplest method but can result in deadlines falling on weekends or holidays.</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Business Days</h4>
        <p className="text-muted-foreground">Business days exclude weekends and holidays. This method is often used for shorter deadlines and administrative matters.</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Court Days</h4>
        <p className="text-muted-foreground">Court days follow specific rules set by the court system. These rules can vary by jurisdiction but typically:</p>
        
        <ul className="list-disc pl-6 my-4 text-muted-foreground">
          <li>When calculating time periods specified in days, exclude the day of the event that triggers the period.</li>
          <li>Count every day, including intermediate Saturdays, Sundays, and legal holidays.</li>
          <li>If the last day is a Saturday, Sunday, or legal holiday, the period continues to run until the end of the next day that is not a weekend or holiday.</li>
          <li>When calculating time periods stated in hours, begin counting immediately from the specified event.</li>
        </ul>
        
        <h4 className="text-lg font-medium mt-6 mb-2">State Courts</h4>
        <p className="text-muted-foreground">State court rules vary significantly from state to state. Many states have adopted rules similar to the federal rules, but important differences exist. Some states:</p>
        
        <ul className="list-disc pl-6 my-4 text-muted-foreground">
          <li>Exclude weekends and holidays only for shorter time periods (e.g., less than 7 days)</li>
          <li>Have different rules for counting the first and last days</li>
          <li>Have unique holidays not recognized in federal courts</li>
          <li>Have special rules for certain types of cases (e.g., family law, probate)</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Common Deadline Extensions and Exceptions</h3>
        <p className="text-muted-foreground">Several circumstances can affect court deadlines:</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Court-Ordered Extensions</h4>
        <p className="text-muted-foreground">Courts may grant extensions of time for good cause shown. These are typically requested through a motion for extension of time.</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Stipulations</h4>
        <p className="text-muted-foreground">Parties can often agree to extend deadlines by filing a stipulation with the court, though some deadlines cannot be extended even by agreement.</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Court Closures</h4>
        <p className="text-muted-foreground">If the court is closed due to weather, emergency, or other reasons, deadlines that fall on those days typically extend to the next business day.</p>
        
        <h4 className="text-lg font-medium mt-6 mb-2">Electronic Filing Issues</h4>
        <p className="text-muted-foreground">Most courts have provisions for technical failures of electronic filing systems that prevent timely filing.</p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Best Practices for Managing Court Deadlines</h3>
        <p className="text-muted-foreground">To effectively manage court deadlines:</p>
        
        <ol className="list-decimal pl-6 my-4 text-muted-foreground">
          <li><strong>Calendar all deadlines immediately:</strong> As soon as you receive notice of a deadline, add it to your calendar.</li>
          <li><strong>Add buffer time:</strong> Schedule internal deadlines a few days before the actual court deadline.</li>
          <li><strong>Use deadline calculation tools:</strong> Tools like our Court Deadline Calculator can help ensure accuracy.</li>
          <li><strong>Double-check calculations:</strong> Verify deadline calculations, especially for complex or critical deadlines.</li>
          <li><strong>Know local rules:</strong> Familiarize yourself with the specific rules of the court handling your case.</li>
          <li><strong>Set reminders:</strong> Configure multiple reminders leading up to important deadlines.</li>
          <li><strong>Document deadline extensions:</strong> Keep written records of all extensions granted.</li>
        </ol>
        
        <div className="bg-muted/50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Statistical Insights on Court Deadlines</h3>
          <p className="text-muted-foreground">Research into legal practice reveals some interesting statistics about court deadlines:</p>
          
          <ul className="list-disc pl-6 my-4 text-muted-foreground">
            <li>According to the American Bar Association, deadline-related issues account for approximately 34% of malpractice claims against attorneys.</li>
            <li>A study by Thomson Reuters found that 23% of attorneys report having missed at least one court deadline in their career.</li>
            <li>Court analytics show that motions for extensions of time are granted approximately 86% of the time when filed before the deadline.</li>
            <li>The same study found that motions filed after the deadline passed were only granted 47% of the time.</li>
            <li>Electronic filing systems have reduced missed deadlines by approximately 22% according to court administration data.</li>
          </ul>
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Recent Changes in Deadline Calculation Rules</h3>
        <p className="text-muted-foreground">Court rules regarding deadlines continue to evolve:</p>
        
        <ul className="list-disc pl-6 my-4 text-muted-foreground">
          <li>Many jurisdictions have updated rules to accommodate electronic filing.</li>
          <li>The COVID-19 pandemic led to numerous temporary and permanent rule changes regarding deadlines.</li>
          <li>Some jurisdictions have moved to standardize deadline calculations to reduce confusion.</li>
          <li>Federal courts amended Rule 6 in recent years to clarify the treatment of the three-day mail rule in conjunction with electronic service.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Using Our Court Deadline Calculator</h3>
        <p className="text-muted-foreground">Our calculator simplifies the process of determining court deadlines by:</p>
        
        <ul className="list-disc pl-6 my-4 text-muted-foreground">
          <li>Accounting for different counting methods (calendar days, business days, court days)</li>
          <li>Adjusting for weekends and holidays</li>
          <li>Considering filing method impacts on deadlines</li>
          <li>Providing jurisdiction-specific guidance</li>
          <li>Generating clear deadline information with explanations</li>
        </ul>
        
        <p className="text-muted-foreground">While our calculator is a valuable tool, it's important to verify all deadlines according to current court rules for your specific jurisdiction and case type. Legal deadlines are too important to rely solely on automated calculations.</p>
        
        <div className="bg-primary/5 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <p className="text-muted-foreground">For more information about court deadlines and legal timing, consider these resources:</p>
          
          <ul className="list-disc pl-6 my-4 text-muted-foreground">
            <li>Federal Rules of Civil Procedure (particularly Rule 6)</li>
            <li>Your state's rules of civil procedure</li>
            <li>Local court rules for specific jurisdictions</li>
            <li>Court clerk's offices for clarification on specific deadlines</li>
            <li>Bar association resources on practice management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourtDeadlineCalculator;
