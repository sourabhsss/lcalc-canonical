
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TattooTipFAQ = () => {
  const faqs = [
    {
      question: "Is it mandatory to tip tattoo artists?",
      answer: "While tipping isn't technically mandatory, it's strongly customary in many countries, especially in the United States and Canada. Tipping is an acknowledgment of the artist's skill and service. In the tattoo industry, artists often receive only a portion of what you pay for the tattoo (typically 50-70%), with the rest going to the shop for overhead costs. Tips go directly to the artist and recognize their talent, time, and effort put into your custom piece."
    },
    {
      question: "What's the standard percentage to tip a tattoo artist?",
      answer: "The standard tip percentage for tattoo artists ranges from 15% to 25% of the total tattoo price. For good service and satisfactory work, 15-20% is appropriate. For exceptional work, particularly complex designs, or outstanding service, 20-25% or more shows your appreciation. If your tattoo artist owns their own shop, tipping may be less expected since they receive the full payment, but it's still appreciated for exceptional work."
    },
    {
      question: "Should I tip for a tattoo touch-up?",
      answer: "For free touch-ups on your artist's own work (often included within the first few months after getting the tattoo), a small tip of $20-40 is appreciated but not always expected. For paid touch-ups or significant revisions, tipping at the standard 15-20% rate is appropriate. If another artist is performing the touch-up on someone else's work, you should definitely tip as you would for a new tattoo."
    },
    {
      question: "Do I need to tip in cash or can I include it when paying by card?",
      answer: "Cash tips are generally preferred by tattoo artists for several reasons: they're immediate, they avoid credit card processing fees that may reduce the amount the artist receives, and they can be more convenient for tax purposes. However, most shops now have options for adding tips to card payments if you don't have cash. If you plan to tip with a card, you might want to check the shop's policy beforehand, as some smaller establishments might be cash-only."
    },
    {
      question: "When should I give the tip - before or after the tattoo is completed?",
      answer: "The standard practice is to tip after the tattoo is completed. This allows you to base your tip amount on the final result and overall experience. For multi-session pieces, you can either tip at the end of each session or give a larger tip upon the completion of the entire piece. If you choose to tip at the end of the project, it's courteous to let your artist know that's your plan so they don't think you're dissatisfied with their work."
    },
    {
      question: "Should I tip differently for small versus large tattoos?",
      answer: "For very small tattoos that have a minimum shop fee (often $50-100), consider tipping at least $20 even if the percentage would be less. For larger, more expensive tattoos, the standard percentage (15-25%) still applies, though some clients opt to cap very large tips at a reasonable amount. The complexity and time involved are more important factors than size alone - a small but intricate piece may deserve a higher percentage tip than a large but simple design."
    },
    {
      question: "What if I'm unhappy with my tattoo - should I still tip?",
      answer: "If you're truly dissatisfied with your tattoo, address your concerns with the artist directly and professionally before deciding about the tip. Minor issues that can be fixed with touch-ups shouldn't necessarily affect your tipping decision. For significant issues, a reduced tip (5-10%) acknowledges their time while expressing your dissatisfaction. If you're completely unhappy, it's better to discuss your concerns with the artist or shop manager rather than leaving no tip without explanation."
    },
    {
      question: "Do tattoo apprentices get tipped the same as experienced artists?",
      answer: "Apprentices typically charge less than experienced artists, but they should still be tipped at similar percentage rates (15-20%). Though they're learning, they're still dedicating time, effort, and developing skills to your piece. Some clients actually tip apprentices at a higher percentage (20-25%) to encourage them, especially if they're pleased with the work despite the artist being in training. Remember that apprentices often make very little money during their training period."
    },
    {
      question: "How do tipping practices vary in different countries?",
      answer: "Tipping practices vary significantly around the world. In the US and Canada, 15-25% is standard. In the UK, 10-15% is common but not as strictly expected. In most of Western Europe, tipping is appreciated but often not expected, with 5-10% being generous. In Japan and some other Asian countries, tipping isn't customary and might even be considered offensive. Australia and New Zealand generally don't have strong tipping cultures for tattoos. When traveling internationally for tattoo work, it's best to research local customs or simply ask the shop about tipping expectations."
    },
    {
      question: "Are there alternatives to monetary tips for showing appreciation to my tattoo artist?",
      answer: "Yes, there are several ways to show appreciation beyond monetary tips: 1) Referrals - sending friends and family to your artist is extremely valuable, 2) Social media promotion - sharing your tattoo and tagging the artist helps build their portfolio and client base, 3) Positive reviews on Google, Yelp, or industry platforms, 4) Bringing small gifts or food/drinks (though check shop policies first), 5) Becoming a repeat client, which is often the highest compliment. These gestures are wonderful supplements to, but not replacements for, monetary tips unless tipping isn't customary in your region."
    },
    {
      question: "How should I calculate the tip for a tattoo with multiple sessions?",
      answer: "For multi-session tattoos, you have two main options: 1) Tip at each session based on that day's work (15-20% of that session's cost), which provides your artist with consistent income, or 2) Provide one larger tip upon completion of the entire piece (15-25% of the total cost). If you choose the latter approach, it's courteous to let your artist know your intention to tip at the end of the project. For very long projects spanning months, tipping per session is generally more appreciated."
    },
    {
      question: "Should I tip differently for custom designs versus flash tattoos?",
      answer: "Custom designs typically involve additional time for consultations, sketching, revisions, and preparation that isn't directly compensated in the tattoo price. For this reason, many clients tip at the higher end of the spectrum (20-25%) for custom work. Flash tattoos (pre-designed pieces selected from the shop's collection) still require skill to apply properly, so the standard 15-20% tip remains appropriate. If a flash design is modified significantly to personalize it for you, consider tipping closer to custom design rates."
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TattooTipFAQ;
