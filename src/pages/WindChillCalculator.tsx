import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wind, Thermometer, Cloud, Snowflake } from 'lucide-react';
import CalculatorLayout from '@/components/CalculatorLayout';
import WindChillCalculator from '@/calculators/windChill/WindChillCalculator';
import FAQSection from '@/components/FAQSection';
import { Button } from '@/components/ui/button';

const WindChillCalculatorPage: React.FC = () => {
  const faqs = [
    {
      question: "What is wind chill and why is it important?",
      answer: "Wind chill is the perceived decrease in air temperature felt by the human body due to wind flow. It's important because it helps you understand how cold it actually feels outside and can help prevent cold-related health risks. According to the National Weather Service, wind chill temperatures of -20°F or below can cause frostbite in as little as 30 minutes."
    },
    {
      question: "How is wind chill calculated?",
      answer: "Wind chill is calculated using a formula developed by the National Weather Service that takes into account air temperature and wind speed. The formula is: Wind Chill = 35.74 + (0.6215 × T) - (35.75 × V^0.16) + (0.4275 × T × V^0.16), where T is temperature in °F and V is wind speed in mph. This formula is valid for temperatures at or below 50°F and wind speeds above 3 mph."
    },
    {
      question: "How accurate are wind chill calculations?",
      answer: "The current wind chill formula, implemented in 2001, is based on scientific studies and human trials. It's considered accurate within ±2°F for the specified temperature and wind speed ranges. The formula was developed using human subjects and advanced computer modeling by scientists in the U.S. and Canada."
    },
    {
      question: "What are dangerous wind chill levels?",
      answer: "According to the National Weather Service, wind chill values below -15°F are considered dangerous, and those below -25°F are extremely dangerous. At -55°F wind chill, exposed skin can freeze in under 2 minutes. In 2019, during the polar vortex, some areas of the Midwest experienced wind chills as low as -60°F."
    },
    {
      question: "How does wind chill affect daily activities?",
      answer: "Wind chill significantly impacts outdoor activities and safety. Many schools have policies to keep children indoors for recess when wind chill falls below certain temperatures (typically between 0°F and -10°F). Construction sites often modify work schedules when wind chill creates dangerous conditions. The CDC reports that cold weather caused over 1,300 deaths between 2003-2013."
    },
    {
      question: "Does wind chill affect objects like cars or pipes?",
      answer: "Wind chill only affects living things and has no impact on inanimate objects. While wind can speed up the rate at which an object loses heat, it cannot cool the object below the actual air temperature. However, wind does increase the rate at which pipes might freeze or cars might require more energy to maintain operating temperature."
    }
  ];

  return (
    <CalculatorLayout
      title="Wind Chill Calculator"
      description="Calculate the 'feels like' temperature based on actual temperature and wind speed. Get accurate wind chill readings using the National Weather Service formula."
      category="Weather"
      metaDescription="Free Wind Chill Calculator - Calculate the real-feel temperature using official National Weather Service formula. Get accurate wind chill readings for winter weather safety."
    >
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">Wind Chill Calculator: What Does It Really Feel Like Outside?</h1>
          <p className="lead">
            When winter winds blow, the actual temperature only tells part of the story. Our Wind Chill Calculator uses the official National Weather Service formula to determine how cold it really feels, helping you plan outdoor activities safely and prepare for extreme weather conditions.
          </p>
        </div>

        {/* Calculator Section */}
        <div id="calculator" className="my-8">
          <WindChillCalculator />
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Understanding Wind Chill and Winter Safety</h2>
          <p>
            Wind chill is more than just an interesting weather statistic—it's a crucial safety indicator that helps prevent cold-related injuries and illnesses. According to the National Weather Service, Americans face over 60 million person-days of extreme wind chill exposure each winter.
          </p>

          <div className="my-8">
            <Image
              src="/images/wind-chill-chart.webp"
              alt="Wind Chill Temperature Chart"
              width={800}
              height={400}
              className="rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-2">
              National Weather Service Wind Chill Temperature Index chart showing danger zones
            </p>
          </div>

          <h3>The Science Behind Wind Chill</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="flex items-start gap-4">
              <Wind className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Wind Speed Impact</h4>
                <p className="text-sm">
                  For every 5 mph increase in wind speed, the cooling effect intensifies significantly. Research shows that 15 mph winds can make 30°F feel like 19°F.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Thermometer className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-2">Temperature Factors</h4>
                <p className="text-sm">
                  The wind chill effect becomes more pronounced at lower temperatures. Studies indicate that the impact is most significant when temperatures fall below 20°F.
                </p>
              </div>
            </div>
          </div>

          <h3>Health and Safety Implications</h3>
          <p>
            Understanding wind chill is crucial for winter safety. The CDC reports that cold weather exposure causes significant health risks:
          </p>
          
          <ul>
            <li>Frostbite can occur in under 30 minutes at wind chills of -15°F</li>
            <li>Hypothermia risk increases by 50% when wind chill drops below -20°F</li>
            <li>Cold-related emergency room visits increase by 40% on days with severe wind chill</li>
            <li>Outdoor workers face elevated risks when wind chill falls below -10°F</li>
          </ul>

          <div className="my-8">
            <Image
              src="/images/frostbite-risk-zones.webp"
              alt="Frostbite Risk Zones Map"
              width={800}
              height={400}
              className="rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-2">
              U.S. map showing regions with highest frostbite risk based on wind chill factors
            </p>
          </div>

          <h3>Related Weather Tools</h3>
          <p>
            For comprehensive winter weather planning, consider using these related calculators:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <Link href="/snow-day-calculator" className="block p-4 border rounded-lg hover:border-primary transition-colors">
              <h4 className="font-semibold mb-2">Snow Day Calculator</h4>
              <p className="text-sm text-muted-foreground">
                Check the likelihood of school closures based on weather conditions.
              </p>
            </Link>
            <Link href="/sunrise-sunset-calculator" className="block p-4 border rounded-lg hover:border-primary transition-colors">
              <h4 className="font-semibold mb-2">Sunrise & Sunset Calculator</h4>
              <p className="text-sm text-muted-foreground">
                Plan outdoor activities around daylight hours during winter months.
              </p>
            </Link>
          </div>

          <h3>Practical Applications</h3>
          <p>
            Wind chill calculations have numerous practical applications:
          </p>
          
          <ul>
            <li>School administrators use wind chill data for closure decisions</li>
            <li>Sports teams adjust practice schedules based on wind chill factors</li>
            <li>Construction sites modify work schedules for worker safety</li>
            <li>Emergency services prepare for increased cold-weather calls</li>
          </ul>

          <h3>Regional Considerations</h3>
          <p>
            Wind chill impact varies significantly by region:
          </p>
          
          <ul>
            <li>Northern states experience dangerous wind chills 30-40 days per year</li>
            <li>Midwest regions face the most extreme wind chill conditions</li>
            <li>Coastal areas often have higher wind speeds affecting wind chill</li>
            <li>Urban areas can create wind tunnels that increase local wind chill</li>
          </ul>

          <div className="bg-primary/5 p-6 rounded-lg my-8">
            <h4 className="font-semibold mb-4">Ready to Check the Wind Chill?</h4>
            <p className="mb-4">
              Use our calculator to determine the real-feel temperature and plan your outdoor activities safely.
            </p>
            <Button asChild>
              <Link href="#calculator">
                Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />
      </div>
    </CalculatorLayout>
  );
};

export default WindChillCalculatorPage; 