
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const CourtDeadlineFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is a court deadline?",
      answer: "A court deadline is a specific date by which a legal document must be filed or an action must be taken in a legal proceeding. These deadlines are established by court rules, statutes, or court orders. Missing a court deadline can have serious consequences for your case, including dismissal or default judgment."
    },
    {
      question: "How are court deadlines typically calculated?",
      answer: "Court deadlines are calculated based on specific rules that vary by jurisdiction. Generally, there are three main methods: calendar days (counting all days including weekends and holidays), business days (excluding weekends and holidays), and court days (which follow specific court rules). The calculation starting point is usually the day after an event (like service of a document), and the deadline may be extended if it falls on a weekend or holiday."
    },
    {
      question: "What's the difference between calendar days, business days, and court days?",
      answer: "Calendar days include all days on the calendar, including weekends and holidays. Business days exclude weekends and holidays. Court days follow specific court rules and typically exclude weekends and holidays, but may have additional rules about the first day, last day, and extensions for weekends and holidays. Different jurisdictions and different types of filings may use different counting methods."
    },
    {
      question: "Does the filing method affect my deadline?",
      answer: "Yes, the filing method can affect your deadline. Many jurisdictions add extra days to deadlines when documents are served by mail (typically 3-5 additional days). Some jurisdictions also add extra days for other service methods like electronic service. In-person filing usually doesn't add extra time. The rules vary by jurisdiction and court type."
    },
    {
      question: "How do holidays affect court deadlines?",
      answer: "When a deadline falls on a holiday, it typically extends to the next business day. For business day and court day counting methods, holidays are usually excluded from the count. Different jurisdictions recognize different holidays, with federal courts following federal holidays and state courts often including additional state-specific holidays."
    },
    {
      question: "What happens if I miss a court deadline?",
      answer: "Missing a court deadline can have serious consequences, including dismissal of your case, entry of a default judgment against you, waiver of certain rights or arguments, sanctions (including monetary penalties), or other adverse rulings. The specific consequences depend on the nature of the deadline and the court's rules. If you miss a deadline, you should immediately consult with an attorney about potential remedies, such as filing a motion for extension of time or relief from default."
    },
    {
      question: "Can court deadlines be extended?",
      answer: "Many court deadlines can be extended, but the process varies. Some deadlines can be extended by agreement of the parties (stipulation), while others require a formal motion and court approval. Extensions are typically granted for 'good cause' or 'excusable neglect.' However, some deadlines, particularly jurisdictional deadlines like statutes of limitations or appeal deadlines, may not be extendable even with court approval."
    },
    {
      question: "Are federal court deadlines different from state court deadlines?",
      answer: "Yes, federal and state courts often have different rules for calculating deadlines. Federal courts follow the Federal Rules of Civil Procedure (particularly Rule 6), while state courts have their own rules that vary by state. The differences can include how days are counted, which days are excluded, how extensions are handled, and the specific time periods for various filings."
    },
    {
      question: "How accurate is this Court Deadline Calculator?",
      answer: "Our Court Deadline Calculator provides estimates based on general rules for the selected jurisdiction and filing type. While we strive for accuracy, deadline calculations can be complex and rules can change. The calculator may not account for all local rules, specific case orders, or unusual circumstances. Always verify deadlines with official court rules and consider consulting with an attorney for critical deadlines."
    },
    {
      question: "Do different types of cases have different deadline rules?",
      answer: "Yes, different types of cases often have different deadline rules. For example, criminal cases typically have different deadlines than civil cases. Bankruptcy, family law, probate, and administrative proceedings each have specialized rules. Even within civil cases, certain types of actions (like preliminary injunctions or temporary restraining orders) have accelerated deadlines. Always check the specific rules for your type of case."
    },
    {
      question: "How do I count the first day when calculating a deadline?",
      answer: "In most jurisdictions, when calculating a deadline specified in days, you exclude the day of the event that triggers the period. For example, if you were served with a complaint on June 1 and have 21 days to respond, you would start counting on June 2, making your deadline June 22. However, rules can vary by jurisdiction and for certain types of deadlines, so always check the applicable rules."
    },
    {
      question: "Can electronic filing systems affect deadlines?",
      answer: "Yes, electronic filing can affect deadlines in several ways. Many courts consider documents filed electronically before midnight on the due date to be timely, even if the court physically closes earlier. However, technical failures of electronic filing systems may occur, and courts typically have rules addressing how these situations affect deadlines. Additionally, some jurisdictions have different rules about when service is effective for electronically filed documents."
    }
  ];

  return (
    <div className="mt-12">
      <Separator className="my-8" />
      
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourtDeadlineFAQ;
