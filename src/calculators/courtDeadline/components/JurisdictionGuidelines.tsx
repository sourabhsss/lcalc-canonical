
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const JurisdictionGuidelines: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold mb-4">Common Jurisdiction Guidelines</h3>
        
        <p className="mb-6 text-muted-foreground">
          Different jurisdictions have varying rules for calculating court deadlines. Here's a quick reference guide to some common jurisdictions.
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="federal-courts">
            <AccordionTrigger>Federal Courts</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Federal courts follow the Federal Rules of Civil Procedure (FRCP) and Federal Rules of Criminal Procedure (FRCrP).</p>
                
                <h4 className="font-medium text-lg">Common Federal Deadlines</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filing Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Rule</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Answer to Complaint</TableCell>
                      <TableCell>21 days after service</TableCell>
                      <TableCell>FRCP 12(a)(1)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Motion to Dismiss</TableCell>
                      <TableCell>21 days after service</TableCell>
                      <TableCell>FRCP 12(a)(1)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Reply to Answer</TableCell>
                      <TableCell>21 days after service</TableCell>
                      <TableCell>FRCP 12(a)(1)(C)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Response to Motion</TableCell>
                      <TableCell>14 days after service</TableCell>
                      <TableCell>FRCP 6</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Notice of Appeal</TableCell>
                      <TableCell>30 days after judgment</TableCell>
                      <TableCell>FRAP 4</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="california">
            <AccordionTrigger>California Courts</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>California courts follow the California Code of Civil Procedure and California Rules of Court.</p>
                
                <h4 className="font-medium text-lg">Common California Deadlines</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filing Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Authority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Answer to Complaint</TableCell>
                      <TableCell>30 days after service</TableCell>
                      <TableCell>CCP § 412.20</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Demurrer</TableCell>
                      <TableCell>30 days after service</TableCell>
                      <TableCell>CCP § 430.40</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Motion to Strike</TableCell>
                      <TableCell>30 days after service</TableCell>
                      <TableCell>CCP § 435</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Summary Judgment Motion</TableCell>
                      <TableCell>75 days before trial</TableCell>
                      <TableCell>CCP § 437c</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Notice of Appeal</TableCell>
                      <TableCell>60 days after notice of entry</TableCell>
                      <TableCell>CRC 8.104</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="new-york">
            <AccordionTrigger>New York Courts</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>New York courts follow the Civil Practice Law and Rules (CPLR).</p>
                
                <h4 className="font-medium text-lg">Common New York Deadlines</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filing Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Authority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Answer to Complaint</TableCell>
                      <TableCell>20 or 30 days after service</TableCell>
                      <TableCell>CPLR § 3012</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Motion to Dismiss</TableCell>
                      <TableCell>20 or 30 days after service</TableCell>
                      <TableCell>CPLR § 3211</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Reply to Counterclaim</TableCell>
                      <TableCell>20 days after service</TableCell>
                      <TableCell>CPLR § 3011</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Summary Judgment Motion</TableCell>
                      <TableCell>120 days after Note of Issue</TableCell>
                      <TableCell>CPLR § 3212</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Notice of Appeal</TableCell>
                      <TableCell>30 days after service</TableCell>
                      <TableCell>CPLR § 5513</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="texas">
            <AccordionTrigger>Texas Courts</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Texas courts follow the Texas Rules of Civil Procedure (TRCP).</p>
                
                <h4 className="font-medium text-lg">Common Texas Deadlines</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filing Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Authority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Answer to Petition</TableCell>
                      <TableCell>First Monday after 20 days</TableCell>
                      <TableCell>TRCP 99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Motion for Summary Judgment</TableCell>
                      <TableCell>21 days before hearing</TableCell>
                      <TableCell>TRCP 166a</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Response to Motion</TableCell>
                      <TableCell>7 days before hearing</TableCell>
                      <TableCell>TRCP 166a</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Motion for New Trial</TableCell>
                      <TableCell>30 days after judgment</TableCell>
                      <TableCell>TRCP 329b</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Notice of Appeal</TableCell>
                      <TableCell>30 days after judgment</TableCell>
                      <TableCell>TRAP 26.1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="special-proceedings">
            <AccordionTrigger>Special Proceedings</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>Certain types of legal proceedings have their own unique deadline rules.</p>
                
                <h4 className="font-medium text-lg">Bankruptcy Court Deadlines</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filing Type</TableHead>
                      <TableHead>Deadline</TableHead>
                      <TableHead>Authority</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Proof of Claim (Ch. 7)</TableCell>
                      <TableCell>90 days after first meeting</TableCell>
                      <TableCell>FRBP 3002</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Objection to Discharge</TableCell>
                      <TableCell>60 days after first meeting</TableCell>
                      <TableCell>FRBP 4004</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <h4 className="font-medium text-lg mt-4">Family Law Deadlines (Varies by State)</h4>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Filing Type</TableHead>
                      <TableHead>Common Deadlines</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Response to Divorce Petition</TableCell>
                      <TableCell>20-30 days (varies by state)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Financial Disclosures</TableCell>
                      <TableCell>45-60 days after filing (varies)</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default JurisdictionGuidelines;
