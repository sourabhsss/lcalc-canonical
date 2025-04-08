
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TenKeyFAQ: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a 10-key calculator used for?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              A 10-key calculator is primarily used for numerical data entry and calculations in 
              accounting, bookkeeping, financial analysis, and other fields requiring rapid number processing.
            </p>
            <p>
              Its specialized layout makes it particularly efficient for tasks including:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Adding long columns of numbers</li>
              <li>Performing tax calculations</li>
              <li>Reconciling accounts</li>
              <li>Processing invoices and receipts</li>
              <li>Financial data entry</li>
              <li>Preparing financial statements</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>How is a 10-key calculator different from a regular calculator?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              A 10-key calculator differs from a regular calculator primarily in its layout and design focus:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Layout:</strong> The 10-key has numbers arranged in a compact 3×3 grid with 0 below, 
              optimized for touch typing, whereas regular calculators often have numbers in a telephone-style layout.</li>
              <li><strong>Paper Tape:</strong> Many 10-key calculators include a paper tape or digital record of calculations.</li>
              <li><strong>Specialized Functions:</strong> 10-key calculators often include functions specific to accounting 
              like tax calculation, grand total, and item count.</li>
              <li><strong>Ergonomics:</strong> They're designed for hours of continuous use with minimal hand movement.</li>
              <li><strong>Speed Focus:</strong> The design prioritizes rapid data entry over complex scientific functions.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>What does "KPH" mean in 10-key proficiency?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              "KPH" stands for "Keystrokes Per Hour" and is the standard measurement of 10-key proficiency.
            </p>
            <p className="mb-2">
              This metric counts how many keys a person can press in an hour while maintaining accuracy. In professional 
              settings, KPH is typically measured in combination with accuracy rates. For example, a requirement might be 
              "8,000 KPH with 98% accuracy."
            </p>
            <p>
              Proficiency levels generally range from:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Beginner: 4,000-6,000 KPH</li>
              <li>Intermediate: 6,000-8,000 KPH</li>
              <li>Proficient: 8,000-10,000 KPH</li>
              <li>Expert: 10,000+ KPH</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I improve my 10-key speed?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Improving your 10-key speed requires practice and proper technique:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Learn proper finger positioning:</strong> Use your middle finger on 5 (home position), 
                index finger for 4 and 1, ring finger for 6 and 3, and pinky for operation keys.
              </li>
              <li>
                <strong>Practice "touch" operation:</strong> Train yourself to use the keypad without looking 
                at it, similar to touch typing on a keyboard.
              </li>
              <li>
                <strong>Use rhythm:</strong> Develop a consistent rhythm when entering numbers to build muscle memory.
              </li>
              <li>
                <strong>Practice regularly:</strong> Dedicate 15-20 minutes daily to 10-key drills.
              </li>
              <li>
                <strong>Focus on accuracy first:</strong> Speed will naturally improve as you gain accuracy.
              </li>
              <li>
                <strong>Use proper drills:</strong> Practice with structured exercises like forward/reverse sequences 
                and repeated patterns.
              </li>
              <li>
                <strong>Time yourself:</strong> Track your KPH and set incremental goals for improvement.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger>Can 10-key skills be listed on a resume?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Yes, 10-key skills can and should be listed on your resume for roles in accounting, data entry, 
              bookkeeping, banking, and similar fields.
            </p>
            <p className="mb-2">
              When listing this skill:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Include your KPH speed if you know it (e.g., "10-key: 8,000 KPH")</li>
              <li>Mention accuracy rate if available (e.g., "10-key: 8,000 KPH with 99% accuracy")</li>
              <li>Note any certifications or proficiency tests you've passed</li>
              <li>Specify "by touch" if you can operate without looking at the keypad</li>
            </ul>
            <p className="mt-2">
              This skill is particularly valuable for positions like Accounting Clerk, Bookkeeper, Data Entry Specialist, 
              Accounts Payable/Receivable Clerk, Payroll Specialist, and Bank Teller.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-6">
          <AccordionTrigger>How does the online 10-key calculator compare to a physical calculator?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Our online 10-key calculator offers several advantages and a few differences compared to a physical calculator:
            </p>
            <p className="font-medium mb-1">Advantages:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Accessibility from any device with internet connection</li>
              <li>No need to purchase additional hardware</li>
              <li>Digital paper tape that can be cleared with one click</li>
              <li>Support for both mouse clicking and keyboard input</li>
              <li>Free to use with no maintenance or battery concerns</li>
            </ul>
            <p className="font-medium mb-1">Differences:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Physical tactile feedback is absent in the online version</li>
              <li>Some users may experience slight input lag depending on their device</li>
              <li>Physical calculators often have specialized industry-specific functions</li>
              <li>The online version requires an internet connection</li>
              <li>Touch-typists may need to adjust to keyboard layout differences</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-7">
          <AccordionTrigger>Are there 10-key proficiency tests available?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Yes, there are several ways to test and certify your 10-key proficiency:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Employment Assessments:</strong> Many employers administer their own 10-key tests during 
                the hiring process for relevant positions.
              </li>
              <li>
                <strong>Online Proficiency Tests:</strong> Websites like TypingTest.com, Data Entry Test, and 
                ProveIt offer 10-key speed tests.
              </li>
              <li>
                <strong>Certification Programs:</strong> American Institute of Professional Bookkeepers (AIPB) 
                and other organizations offer certification that includes 10-key proficiency.
              </li>
              <li>
                <strong>Educational Testing:</strong> Business schools and community colleges often provide 
                testing as part of their accounting or office skills programs.
              </li>
              <li>
                <strong>Self-Assessment Software:</strong> Programs like Ten Key Challenger and Ten Key Tutor 
                allow you to practice and test your speed.
              </li>
            </ol>
            <p className="mt-2">
              Most tests measure both speed (KPH) and accuracy, with results typically provided immediately upon completion.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-8">
          <AccordionTrigger>What are the memory functions on a 10-key calculator?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              The memory functions on a 10-key calculator allow you to store and recall values during calculations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>M+ (Memory Add):</strong> Adds the displayed value to the memory. If memory was empty, 
                it stores the displayed value.
              </li>
              <li>
                <strong>M- (Memory Subtract):</strong> Subtracts the displayed value from the memory.
              </li>
              <li>
                <strong>MR (Memory Recall):</strong> Displays the current value stored in memory without clearing it.
              </li>
              <li>
                <strong>MC (Memory Clear):</strong> Erases the value stored in memory, setting it to zero.
              </li>
            </ul>
            <p className="mt-2">
              These functions are particularly useful for:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              <li>Running totals across multiple calculations</li>
              <li>Temporarily storing a value while performing other calculations</li>
              <li>Adding or subtracting the same value to/from multiple numbers</li>
              <li>Performing complex calculations that require intermediate results</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TenKeyFAQ;
