import React from 'react';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

const ProratedRentFAQ = () => {
  const faqs = [
    {
      question: "What is prorated rent and how is it calculated?",
      answer: "Prorated rent is a partial rent payment that covers only the days you actually occupy a rental property. It's calculated by taking the monthly rent, dividing it by the number of days in the month, and multiplying by the number of days you'll occupy the property. For example, if your monthly rent is $1,500 and you move in on the 15th of a 30-day month, your prorated rent would be $750 (15 days at $50 per day)."
    },
    {
      question: "When is prorated rent typically used?",
      answer: "Prorated rent is commonly used when tenants move in or out mid-month. It ensures you only pay for the days you actually occupy the property. This is standard practice in most rental agreements and helps maintain fairness for both landlords and tenants. Prorated rent calculations are especially important during lease transitions, subletting arrangements, or when adjusting rental terms."
    },
    {
      question: "How does prorated rent relate to other housing calculators?",
      answer: "Prorated rent calculations often work alongside other housing-related financial calculations. For example, when planning your housing budget, you might use a mortgage calculator to compare buying versus renting costs, a construction calculator for estimating property improvements, or analyze utility costs with specialized tools. For real estate investors, prorated rent calculations factor into cash flow projections alongside other metrics. Most financial housing decisions work as an ecosystem of calculations, with prorated rent being just one component of understanding your true housing costs, especially during transition periods when moving in or out."
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FAQSection 
          title="Frequently Asked Questions About Prorated Rent"
          faqs={faqs}
        />
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Still have questions? Try our{' '}
            <Link href="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</Link> to help with your housing decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProratedRentFAQ;
