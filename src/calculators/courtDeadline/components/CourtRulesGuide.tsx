
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const CourtRulesGuide: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Court Rules for Calculating Deadlines</h3>
        
        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            The information below provides general guidance. Always check the specific rules for your jurisdiction.
          </AlertDescription>
        </Alert>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="federal-rules">
            <AccordionTrigger>Federal Court Rules (FRCP Rule 6)</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Day of the Event:</strong> When calculating a time period stated in days, exclude the day of the event that triggers the period.</p>
                <p><strong>Weekends and Holidays:</strong> Count every day, including intermediate Saturdays, Sundays, and legal holidays.</p>
                <p><strong>Last Day:</strong> Include the last day of the period, but if the last day is a Saturday, Sunday, or legal holiday, the period continues to run until the end of the next day that is not a weekend or holiday.</p>
                <p><strong>"Within" a Time Period:</strong> When a filing must be made "within" a specified time, it must be filed before the end of the last day.</p>
                <p><strong>Additional Time After Service:</strong> When a party may or must act within a specified time after service and service is made by mail or electronic means, 3 days are added after the period would otherwise expire.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="state-variations">
            <AccordionTrigger>Common State Court Variations</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>California:</strong> Code of Civil Procedure § 12-12c. Similar to federal rules but has unique provisions for certain types of cases.</p>
                <p><strong>New York:</strong> CPLR § 2103. Has specific provisions about service and extension of time when served by mail.</p>
                <p><strong>Texas:</strong> Texas Rules of Civil Procedure Rule 4. Excludes Saturdays, Sundays, and legal holidays for periods less than 5 days.</p>
                <p><strong>Florida:</strong> Florida Rules of Civil Procedure Rule 1.090. Follows the federal rules closely.</p>
                <p><strong>Illinois:</strong> Illinois Code of Civil Procedure 735 ILCS 5/1-108. Has specific rules for computing time.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="service-methods">
            <AccordionTrigger>Impact of Service Methods</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Personal Service:</strong> Typically, time begins to run from the day after personal service is made.</p>
                <p><strong>Mail Service:</strong> Many jurisdictions add additional days (often 3-5) when service is made by mail. The exact number varies by jurisdiction.</p>
                <p><strong>Electronic Service:</strong> Rules vary by jurisdiction. Some courts add additional days for electronic service, while others treat it the same as personal service.</p>
                <p><strong>Publication:</strong> For service by publication, time typically begins to run from the last day of publication.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="deadline-extensions">
            <AccordionTrigger>Deadline Extensions</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Stipulations:</strong> Parties can often extend deadlines by agreement, but this usually requires court approval.</p>
                <p><strong>Motions for Extension:</strong> Courts may grant additional time upon motion showing good cause.</p>
                <p><strong>Court Closures:</strong> If the court is closed on the last day for filing, the deadline is typically extended to the next day the court is open.</p>
                <p><strong>Excusable Neglect:</strong> Some deadlines can be extended after they've passed if the party shows excusable neglect.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="jurisdictional-deadlines">
            <AccordionTrigger>Jurisdictional Deadlines</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <p><strong>Definition:</strong> Jurisdictional deadlines are imposed by statute and affect the court's ability to hear a case.</p>
                <p><strong>Cannot Be Extended:</strong> These deadlines typically cannot be extended, even by agreement of the parties or court order.</p>
                <p><strong>Examples:</strong> Statutes of limitations, notice requirements for government claims, and deadlines for appeals are often jurisdictional.</p>
                <p><strong>Consequences:</strong> Missing a jurisdictional deadline often results in the permanent loss of the right to pursue a claim or defense.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CourtRulesGuide;
