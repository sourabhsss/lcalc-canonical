
import React, { useState } from 'react';
import { Percent } from 'lucide-react';
import PercentageToCgpaForm from './PercentageToCgpaForm';
import PercentageToCgpaResult from './PercentageToCgpaResult';

const PercentageToCgpaCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [scale, setScale] = useState<4 | 7 | 10>(10);

  const handleCalculate = (percentageValue: number, scaleValue: 4 | 7 | 10) => {
    setPercentage(percentageValue);
    setScale(scaleValue);
    setCalculating(true);
  };

  const handleReset = () => {
    setPercentage(null);
    setScale(10);
    setCalculating(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Percent className="text-primary" />
          <h2 className="text-xl font-semibold">Percentage to CGPA Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Convert your percentage marks to Cumulative Grade Point Average (CGPA) using different scales.
            This calculator supports 10-point, 7-point, and 4-point CGPA scales used by various educational institutions.
          </p>
          
          <PercentageToCgpaForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && percentage !== null && (
            <PercentageToCgpaResult percentage={percentage} scale={scale} />
          )}
          
          <div className="mt-12 space-y-6">
            <h3 className="font-medium text-xl">About Percentage to CGPA Conversion</h3>
            <p className="text-muted-foreground">
              Different countries and educational institutions use different grading systems. 
              The most common CGPA scales are the 10-point scale (popular in India), 
              the 4-point scale (common in the US), and the 7-point scale (used in some universities).
              This calculator provides conversions for all three scales to help students understand 
              their academic performance across different systems.
            </p>
            
            <h4 className="font-medium text-lg">Understanding Different Grading Systems</h4>
            <p className="text-muted-foreground">
              The 10-point scale is widely used in Indian universities, where a CGPA of 10.0 typically corresponds to 
              a percentage of 95-100%. The 4-point scale, standard in American universities, equates a 4.0 GPA 
              with an A grade (90-100%). The 7-point scale is less common but used in some international institutions.
            </p>
            
            <h4 className="font-medium text-lg">Why Conversion Matters</h4>
            <p className="text-muted-foreground">
              Converting between percentage and CGPA is essential for students applying to international universities, 
              comparing academic records across institutions, or understanding their performance in a different metric. 
              Accurate conversion ensures that your academic achievements are properly represented regardless of the 
              grading system used.
            </p>
            
            <h4 className="font-medium text-lg">Using This Calculator</h4>
            <p className="text-muted-foreground">
              To use this calculator, simply enter your percentage and select the CGPA scale you want to convert to. 
              The calculator will instantly show your equivalent CGPA along with the corresponding grade letter. 
              You can also see how your marks would translate across all three common CGPA scales for comparison.
            </p>
            
            <div className="bg-secondary/10 p-4 rounded-lg">
              <p className="text-sm">
                Note: These are general conversion formulas, and exact conversion methods may vary by institution.
                Always check with your educational institution for their specific conversion policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">How is CGPA calculated from percentage?</h4>
            <p>
              The conversion from percentage to CGPA varies by institution and country. Generally, for a 10-point scale (common in India), 
              you can divide your percentage by 9.5 (CGPA = Percentage ÷ 9.5). For a 4-point scale (US system), 
              the conversion is more complex and typically uses grade brackets where 90-100% = 4.0, 80-89% = 3.0-3.9, etc.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">What is a good CGPA score?</h4>
            <p>
              What constitutes a "good" CGPA depends on the scale and context. On a 10-point scale, a CGPA above 8.0 is generally 
              considered excellent. On a 4-point scale, 3.5 or higher is typically viewed as very good to excellent. For the 7-point scale, 
              scores above 5.5 are usually considered strong. However, expectations may vary by institution, program, and country.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Can I convert CGPA back to percentage?</h4>
            <p>
              Yes, you can convert CGPA back to percentage. For a 10-point scale, multiply your CGPA by 9.5 (Percentage = CGPA × 9.5). 
              For a 4-point scale, a common conversion is to multiply by 25 (Percentage = CGPA × 25), though this varies by institution. 
              For a 7-point scale, multiply by 100/7 (Percentage = CGPA × 14.29).
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Why do educational institutions use different grading systems?</h4>
            <p>
              Different countries and institutions have developed their own grading systems based on their educational philosophies, 
              historical contexts, and assessment methods. The variety of systems reflects different approaches to measuring academic 
              achievement and allows institutions to maintain their unique standards and traditions.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">How accurate are CGPA conversion formulas?</h4>
            <p>
              CGPA conversion formulas provide reasonable approximations but may not be 100% accurate for all institutions. 
              Many universities have their own specific conversion methods. For the most accurate conversion, refer to the 
              official conversion policy of the specific institution you're applying to or studying at.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Related Calculators</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Work Experience Calculator</h4>
            <p className="mb-4">
              Calculate your total work experience across multiple jobs and positions.
            </p>
            <a href="/work-experience-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Five Number Summary Calculator</h4>
            <p className="mb-4">
              Calculate statistical measures including minimum, maximum, median, and quartiles.
            </p>
            <a href="/five-number-summary-calculator" className="text-primary hover:underline">Try Calculator →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageToCgpaCalculator;
