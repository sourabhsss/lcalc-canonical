
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import WorkExperienceCalculator from '@/calculators/workExperience/WorkExperienceCalculator';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { Briefcase } from 'lucide-react';

// FAQ data
const faqs = [
  {
    question: "How does the Work Experience Calculator determine my experience?",
    answer: "Our Work Experience Calculator uses the difference between your start and end dates to calculate precise years, months, and days of experience. It accounts for varying month lengths and leap years to ensure accuracy."
  },
  {
    question: "Should I include part-time or freelance work in my experience calculation?",
    answer: "Yes, you should include part-time and freelance work in your experience calculation if they're relevant to your career path or the position you're applying for. However, make sure to be transparent about the nature of this work when presenting it."
  },
  {
    question: "How do I account for overlapping job periods in my work experience?",
    answer: "When dealing with overlapping job periods, you have several options: 1) Calculate each position separately and specify that they were concurrent, 2) Count the overlapping period only once to avoid experience inflation, or 3) Use our calculator for each position and then manually adjust for overlaps."
  },
  {
    question: "How should I represent gaps in my employment history?",
    answer: "When calculating your total work experience, do not include employment gaps. Use our Work Experience Calculator separately for each employment period, then add the results together for your total."
  },
  {
    question: "Does the calculator account for different month lengths and leap years?",
    answer: "Yes, our Work Experience Calculator uses date-fns, a robust JavaScript date manipulation library, to perform all calculations. This ensures that varying month lengths and leap years are properly accounted for."
  },
  {
    question: "How do I represent my work experience on my resume?",
    answer: "For most resumes, it's best to represent your work experience in years and months (e.g., '3 years, 6 months' or '3.5 years'). For positions lasting less than a year, specify the months (e.g., '8 months')."
  },
  {
    question: "Does volunteer or internship experience count as work experience?",
    answer: "Volunteer work and internships can definitely count as work experience, especially if they involved relevant skills for your target position. When calculating these experiences, use the same start and end dates as you would for regular employment."
  },
  {
    question: "How do I calculate experience for current employment?",
    answer: "To calculate your experience for a current position, enter the start date of your employment and use today's date as the end date. Our calculator will automatically compute your experience up to the present day."
  }
];

const WorkExperienceCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Work Experience Calculator"
      description="Calculate your total work experience between two dates in years, months, and days with precision for resumes and job applications."
      metaDescription="Use our free Work Experience Calculator to calculate your exact professional experience duration. Perfect for resumes, job applications, and career tracking with precise years, months, and days."
      canonicalUrl="https://lcalculator.com/work-experience-calculator"
      category="Date & Time"
      categoryUrl="/calculators#date-time"
    >
      <section className="py-12">
        <WorkExperienceCalculator />
      </section>

      {/* Introduction Section */}
      <section className="content-section bg-primary/5 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Understanding Work Experience Calculation</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Accurately calculating your work experience is a crucial step in job applications, resume preparation, and career planning. Whether you're applying for a position with specific experience requirements, negotiating a salary based on your professional history, or just tracking your career growth, having precise information about your work tenure matters.
            </p>
            
            <p className="text-lg">
              Our Work Experience Calculator provides an easy way to determine exactly how long you've worked between any two dates, breaking down your experience into years, months, and days.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      
      {/* CTA Section */}
      <CTASection 
        title="Explore Our Other Calculators"
        description="From finance to fitness, we offer a variety of free calculators to help you make informed decisions."
        buttonText="Browse All Calculators"
        buttonLink="/calculators"
      />
    </CalculatorLayout>
  );
};

export default WorkExperienceCalculatorPage;
