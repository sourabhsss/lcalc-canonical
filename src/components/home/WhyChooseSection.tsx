import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { 
  CheckCircle, 
  BookOpen, 
  Calculator, 
  Heart, 
  DollarSign, 
  Home, 
  Clock, 
  GraduationCap, 
  Activity 
} from 'lucide-react';

const OurOfferings = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Offerings</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how our calculators can simplify complex calculations and help you make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Accurate & Reliable Results */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Accurate & Reliable Results</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              All our calculators are built with precision and regularly tested to ensure they provide the most accurate results. Whether you're calculating complex statistics with our <Link href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</Link> or planning your finances with our <Link href="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</Link>, you can trust the accuracy of our tools.
            </p>
            <p className="text-muted-foreground">
              Our development team includes experts in finance, mathematics, and statistics who verify all formulas and algorithms to ensure reliability.
            </p>
          </div>

          {/* Educational Value */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Educational Value</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Each calculator comes with detailed explanations that help you understand the underlying concepts. For example, our <Link href="/standard-deviation-calculator" className="text-primary hover:underline">Standard Deviation Calculator</Link> explains what the results mean and how they can be interpreted in real-world contexts.
            </p>
            <p className="text-muted-foreground">
              Students particularly benefit from calculators like our <Link href="/ap-lang-calculator" className="text-primary hover:underline">AP Lang Calculator</Link> and <Link href="/college-gpa-calculator" className="text-primary hover:underline">College GPA Calculator</Link>, which include educational content alongside practical functionality.
            </p>
          </div>
        </div>

        {/* Calculators for Every Area of Life */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Calculators for Every Area of Life</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At Lcalculator, we understand that life involves many different types of calculations. That's why we've developed a comprehensive suite of tools to help you with decisions in various aspects of your life:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Relationships & Lifestyle */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-5 w-5 text-primary" />
                <h4 className="text-lg font-semibold">Relationships & Lifestyle</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> - Test your romantic compatibility</li>
                <li>• <Link href="/twin-flame-calculator" className="text-primary hover:underline">Twin Flame Calculator</Link> - Explore spiritual connections</li>
                <li>• <Link href="/male-delusion-calculator" className="text-primary hover:underline">Male Delusion Calculator</Link> - Check dating expectations</li>
              </ul>
            </div>

            {/* Financial Planning */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-5 w-5 text-primary" />
                <h4 className="text-lg font-semibold">Financial Planning</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/apy-calculator" className="text-primary hover:underline">APY Calculator</Link> - Calculate investment returns</li>
                <li>• <Link href="/pay-raise-calculator" className="text-primary hover:underline">Pay Raise Calculator</Link> - Understand salary increases</li>
                <li>• <Link href="/cash-back-calculator" className="text-primary hover:underline">Cash Back Calculator</Link> - Optimize credit card rewards</li>
              </ul>
            </div>

            {/* Real Estate & Construction */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-5 w-5 text-primary" />
                <h4 className="text-lg font-semibold">Real Estate & Construction</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</Link> - Plan home purchases</li>
                <li>• <Link href="/asphalt-calculator" className="text-primary hover:underline">Asphalt Calculator</Link> - Estimate paving materials</li>
                <li>• <Link href="/pool-volume-calculator" className="text-primary hover:underline">Pool Volume Calculator</Link> - For pool maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Did You Know? */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
          <p className="text-muted-foreground mb-4">
            Our calculators are used by thousands of people daily, from students working on academic projects to professionals making important financial decisions. The <Link href="/tdee-calculator" className="text-primary hover:underline">TDEE Calculator</Link> is particularly popular among fitness enthusiasts planning their nutrition, while our <Link href="/lcm-hcf-calculator" className="text-primary hover:underline">LCM & HCF Calculator</Link> helps mathematics students master fundamental concepts.
          </p>
          <p className="text-muted-foreground">
            For those planning special occasions, our <Link href="/half-birthday-calculator" className="text-primary hover:underline">Half Birthday Calculator</Link> offers a fun way to find midpoint celebrations, while professionals in various fields rely on our <Link href="/work-experience-calculator" className="text-primary hover:underline">Work Experience Calculator</Link> for accurate resume details.
          </p>
        </div>

        {/* Additional Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Time & Date Calculations */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-semibold">Time & Date Calculations</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Time management and event planning require precision. Our specialized date calculators help you plan important events and deadlines with confidence.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <Link href="/court-deadline-calculator" className="text-primary hover:underline">Court Deadline Calculator</Link> - Track legal timelines</li>
              <li>• <Link href="/chronological-age-calculator" className="text-primary hover:underline">Chronological Age Calculator</Link> - Determine exact age</li>
              <li>• <Link href="/lap-day-calculator" className="text-primary hover:underline">Lap Day Calculator</Link> - Find milestone anniversaries</li>
            </ul>
          </div>

          {/* Academic & Technical Tools */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-semibold">Academic & Technical Tools</h4>
            </div>
            <p className="text-muted-foreground mb-4">
              Our specialized academic calculators support students and researchers with complex mathematical and statistical operations.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <Link href="/combinations-calculator" className="text-primary hover:underline">Combinations Calculator</Link> - Solve probability problems</li>
              <li>• <Link href="/permutations-calculator" className="text-primary hover:underline">Permutations Calculator</Link> - Calculate arrangement possibilities</li>
              <li>• <Link href="/interpolation-calculator" className="text-primary hover:underline">Interpolation Calculator</Link> - Find values between data points</li>
            </ul>
          </div>
        </div>

        {/* Health & Wellness Tools */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="h-5 w-5 text-primary" />
            <h4 className="text-lg font-semibold">Health & Wellness Tools</h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Maintaining your health requires tracking various metrics and making informed lifestyle choices. Our health calculators provide valuable insights for your wellbeing journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-medium mb-2">Fitness Planning</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/tdee-calculator" className="text-primary hover:underline">TDEE Calculator</Link> - Calculate daily energy expenditure</li>
                <li>• <Link href="/dunk-calculator" className="text-primary hover:underline">Dunk Calculator</Link> - Assess vertical jump requirements</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">Health Monitoring</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/standard-drink-calculator" className="text-primary hover:underline">Standard Drink Calculator</Link> - Monitor alcohol consumption</li>
                <li>• <Link href="/sleep-calculator" className="text-primary hover:underline">Sleep Calculator</Link> - Optimize sleep cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurOfferings; 