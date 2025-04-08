
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const StandardDrinkFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What exactly is a 'standard drink'?",
      answer: "A standard drink is a measurement used to quantify alcohol consumption. It contains a fixed amount of pure alcohol (ethanol), regardless of the type of alcoholic beverage. The exact amount varies by country—in the United States, a standard drink contains 14 grams of pure alcohol, while in the UK it's 8 grams, and in Australia it's 10 grams. This standardization helps people track and compare alcohol consumption across different beverage types and serving sizes."
    },
    {
      question: "How is the number of standard drinks calculated?",
      answer: "The formula for calculating standard drinks is: Standard Drinks = (Volume in milliliters × ABV% × 0.789) ÷ Standard Drink Size in grams. The 0.789 factor represents the density of ethanol (pure alcohol) in grams per milliliter. For example, a 355ml (12oz) beer with 5% ABV contains approximately 14 grams of pure alcohol in the US, which equals one standard drink. The calculation would be: (355 × 0.05 × 0.789) ÷ 14 = 1 standard drink."
    },
    {
      question: "Why do standard drink sizes differ between countries?",
      answer: "Standard drink sizes vary between countries due to differences in public health approaches, cultural drinking norms, and historical development of alcohol guidelines. These differences reflect each country's unique balance between providing practical guidelines and addressing public health concerns. For example, the UK uses a lower threshold (8g) to encourage more moderate consumption, while Japan's larger standard (19.75g) aligns with traditional sake serving sizes. These variations highlight the importance of knowing which country's standard you're using when tracking consumption."
    },
    {
      question: "How many standard drinks can I have and still drive legally?",
      answer: "Legal driving limits vary by country and sometimes by region, but it's important to understand that any amount of alcohol can impair driving ability. In the US, the legal blood alcohol concentration (BAC) limit is 0.08% for adults, which is typically reached after about 2 standard drinks for an average-sized adult male on an empty stomach (less for women). However, impairment begins with the first drink—at a BAC of just 0.02%, tracking and judgment are already affected. The safest approach is to not drive at all after consuming alcohol."
    },
    {
      question: "How long does it take for one standard drink to leave my system?",
      answer: "On average, the body metabolizes alcohol at a rate of approximately one standard drink per hour, though this varies based on factors like weight, sex, age, liver function, and genetics. For planning purposes, a general guideline is to allow at least one hour per standard drink before activities requiring alertness or coordination. However, complete elimination may take longer—alcohol can be detected in breath for up to 24 hours and in urine for up to 80 hours after consumption, depending on the amount consumed and testing method used."
    },
    {
      question: "Does the type of alcoholic beverage affect how quickly I get intoxicated?",
      answer: "The primary factor in intoxication is the amount of pure alcohol consumed, not the beverage type. However, several beverage-specific factors can influence absorption rates: Carbonation (in drinks like champagne or mixed with soda) can increase alcohol absorption speed. Higher alcohol concentrations (like in spirits) can be absorbed more quickly. Mixers with sugar may slow absorption slightly. Consumption speed often varies by beverage—people typically consume spirits faster than beer. Despite these variations, the total alcohol content remains the most important factor in determining intoxication levels."
    },
    {
      question: "Do I need to worry about standard drinks if I only drink occasionally?",
      answer: "Yes, understanding standard drinks is valuable even for occasional drinkers. It helps you make informed decisions about consumption regardless of frequency. The health and safety risks associated with alcohol aren't just relevant to regular drinkers—even occasional drinking can lead to impaired coordination, judgment, and driving ability. Additionally, occasional drinkers may have lower tolerance, potentially experiencing stronger effects from the same amount of alcohol compared to regular drinkers. Being aware of standard drinks helps manage these risks effectively."
    },
    {
      question: "How do standard drinks relate to 'units' of alcohol mentioned in health guidelines?",
      answer: "In many countries, the terms 'standard drink' and 'unit' are used interchangeably, though they may represent different amounts of alcohol. In the UK, one unit contains 8 grams of pure alcohol, while one standard drink in the US contains 14 grams. When reading health guidelines, it's important to note which measurement system is being used. For example, UK guidelines recommending 'no more than 14 units per week' translate to approximately 8 standard US drinks. Always check which country's measurement system is being referenced in health recommendations."
    },
    {
      question: "How accurate are the standard drink labels on alcoholic beverages?",
      answer: "Standard drink labeling varies significantly worldwide. In Australia, labels showing standard drinks are mandatory and generally accurate. In the US, labels aren't required to show standard drinks, though some voluntarily include this information. When labels are present, they're calculated based on the beverage's stated ABV and volume, which can vary slightly from actual content due to production variations. For most commercial beverages, the stated ABV is typically within 0.5% of the actual value, making standard drink estimates reasonably accurate for consumer guidance."
    },
    {
      question: "Do all beers contain the same amount of alcohol?",
      answer: "No, alcohol content varies widely across beer types. Light beers typically contain 3.5-4.5% ABV (alcohol by volume), regular beers average 4-6% ABV, and craft beers often range from 5-10% ABV, with some specialty beers exceeding 15% ABV. This variation means a 12oz (355ml) serving of different beers can represent very different amounts of alcohol—from less than one standard drink for a light beer to more than two standard drinks for a strong craft beer. Always check the ABV percentage on the label to accurately assess alcohol content."
    },
    {
      question: "How do factors like weight, gender, and food affect alcohol metabolism?",
      answer: "Multiple biological and situational factors influence alcohol metabolism: Body size: Larger individuals generally have more body water for alcohol dilution, resulting in lower blood alcohol concentration from the same amount of alcohol. Gender: Women typically have higher body fat percentages and less alcohol dehydrogenase enzyme than men, leading to higher blood alcohol levels from equivalent consumption. Food: Eating before or while drinking slows alcohol absorption by up to 50%. Genetics: Variations in alcohol-metabolizing enzymes can cause significant differences in processing speed and side effects. Age: Metabolism efficiency typically decreases with age. These factors combine to create highly individual responses to alcohol consumption."
    },
    {
      question: "Can I use this calculator to determine if I'm safe to drive?",
      answer: "No, this calculator should not be used to determine driving safety. While it accurately calculates standard drinks, it cannot account for individual biological variations in alcohol metabolism, tolerance differences, or the many factors affecting impairment. Blood alcohol concentration (BAC) calculators are equally unreliable for this purpose. Research consistently shows that people are poor judges of their own impairment level. The only safe approach is to avoid driving completely after consuming any alcohol—even one drink can impair coordination, reaction time, and judgment."
    },
    {
      question: "How many calories are in alcoholic drinks?",
      answer: "Alcoholic beverages contain calories from both the alcohol itself (7 calories per gram of pure alcohol) and other ingredients like carbohydrates. For reference: A 12oz regular beer (5% ABV): approximately 150 calories. A 5oz glass of wine (12% ABV): approximately 120 calories. A 1.5oz shot of spirits (40% ABV): approximately 100 calories. Mixed drinks can contain significantly more calories due to added sugars in mixers—a piña colada may contain over 500 calories. For weight management, it's important to consider these 'empty calories' that provide minimal nutritional value while potentially increasing appetite."
    }
  ];
  
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
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
      </CardContent>
    </Card>
  );
};

export default StandardDrinkFAQ;
