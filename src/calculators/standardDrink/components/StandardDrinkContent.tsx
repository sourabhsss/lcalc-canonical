
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Wine, AlertTriangle, Info, BarChart, Clock, Heart } from 'lucide-react';
import { standardDrinksByCountry, drinkingGuidelines } from '../standardDrinkUtils';

const StandardDrinkContent: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6 space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is a Standard Drink?</h2>
          <p className="mb-4">
            A standard drink is a unit of measurement used to quantify alcohol consumption. It represents a specific amount of pure 
            alcohol (ethanol) regardless of the type of alcoholic beverage or its container size. Understanding standard drinks 
            helps individuals track their alcohol consumption and make informed decisions about responsible drinking.
          </p>
          
          <p className="mb-4">
            Different countries define standard drinks differently, with measurements ranging from 8 grams of pure alcohol in the 
            United Kingdom to 19.75 grams in Japan. In the United States, a standard drink contains 14 grams of pure alcohol.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center mb-2">
                <Wine className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">12 oz of Beer (5%)</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                A regular 12-ounce (355ml) can or bottle of beer with 5% alcohol by volume equals one standard drink in the US.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center mb-2">
                <Wine className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">5 oz of Wine (12%)</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                A typical 5-ounce (150ml) glass of wine with around 12% alcohol by volume equals one standard drink in the US.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center mb-2">
                <Wine className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold">1.5 oz of Spirits (40%)</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                A shot of 1.5 ounces (44ml) of distilled spirits (like whiskey, vodka, or rum) at 40% alcohol equals one standard drink in the US.
              </p>
            </div>
          </div>
          
          <Alert variant="default" className="mb-4">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Remember that many beverages, especially craft beers, fortified wines, and cocktails, often contain more alcohol 
              than a standard drink. Use our calculator above to determine the actual number of standard drinks in your beverage.
            </AlertDescription>
          </Alert>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Why Standard Drinks Matter</h2>
          <p className="mb-4">
            Understanding standard drinks is crucial for several reasons:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                <Heart className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Health Awareness</h3>
                <p className="text-muted-foreground">
                  Knowing how many standard drinks you're consuming helps you stay within recommended health guidelines. 
                  According to a 2018 study published in The Lancet, consuming more than 100 grams of alcohol per week 
                  (about 7 standard US drinks) is associated with decreased life expectancy.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                <AlertTriangle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Safety Considerations</h3>
                <p className="text-muted-foreground">
                  Tracking standard drinks helps prevent overconsumption and reduces risks associated with alcohol-related 
                  accidents and injuries. The National Highway Traffic Safety Administration reports that in the United States, 
                  about 32 people die every day in drunk-driving crashes—that's one person every 45 minutes.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Metabolic Processing</h3>
                <p className="text-muted-foreground">
                  The body metabolizes alcohol at a relatively constant rate—about one standard drink per hour for most people. 
                  Knowing this helps you estimate how long alcohol will remain in your system. Research from the National Institute 
                  on Alcohol Abuse and Alcoholism shows that the liver can metabolize about 7-10 grams of alcohol per hour.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                <BarChart className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Comparison Across Beverages</h3>
                <p className="text-muted-foreground">
                  Standard drinks allow you to compare alcohol content across different types of beverages. A 2023 Gallup poll found 
                  that 39% of American adults consume alcohol, and many are unaware that a craft beer (7% ABV) contains about 1.4 times 
                  more alcohol than a regular beer (5% ABV) of the same volume.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Standard Drink Definitions Worldwide</h2>
          <p className="mb-4">
            The definition of a standard drink varies significantly around the world. Here's how different countries define their standard units:
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-muted border-b">
                  <th className="py-2 px-4 text-left">Country</th>
                  <th className="py-2 px-4 text-left">Standard Drink (g of alcohol)</th>
                  <th className="py-2 px-4 text-left">Example Equivalents</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(standardDrinksByCountry).map(([code, country]) => (
                  <tr key={code} className="border-b">
                    <td className="py-2 px-4">{country.name}</td>
                    <td className="py-2 px-4">{country.alcoholGrams}g</td>
                    <td className="py-2 px-4">
                      <ul className="list-disc list-inside text-sm">
                        {country.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Source: International Alliance for Responsible Drinking (IARD) and national health authorities.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Low-Risk Drinking Guidelines</h2>
          <p className="mb-4">
            Health authorities around the world have established guidelines for low-risk alcohol consumption. 
            These guidelines aim to reduce the health risks associated with drinking alcohol.
          </p>
          
          <div className="space-y-4 mb-6">
            {Object.entries(drinkingGuidelines).map(([code, guideline]) => (
              <div key={code} className="p-4 border rounded-md">
                <h3 className="font-semibold mb-2">{guideline.name}</h3>
                <div className="space-y-2">
                  {guideline.daily && (
                    <p className="text-sm">
                      <span className="font-medium">Daily limit:</span> Up to {guideline.daily.men} standard drinks for men, 
                      up to {guideline.daily.women} standard drinks for women
                    </p>
                  )}
                  {guideline.weekly && (
                    <p className="text-sm">
                      <span className="font-medium">Weekly limit:</span> No more than {guideline.weekly.men} standard drinks for men, 
                      no more than {guideline.weekly.women} standard drinks for women
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">Source: {guideline.source}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              It's important to note that these are guidelines for general risk reduction, not safe drinking levels. 
              The safest level of alcohol consumption is zero. According to the World Health Organization, no level 
              of alcohol consumption is completely safe.
            </AlertDescription>
          </Alert>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Use the Standard Drink Calculator</h2>
          <p className="mb-4">
            Our Standard Drink Calculator makes it easy to determine how many standard drinks are in your alcoholic beverage:
          </p>
          
          <ol className="list-decimal list-inside space-y-4 mb-6">
            <li className="pl-2">
              <span className="font-medium">Select your beverage type</span> from the dropdown menu or enter custom values.
            </li>
            <li className="pl-2">
              <span className="font-medium">Enter the volume</span> of your drink in milliliters (ml) or fluid ounces (oz).
            </li>
            <li className="pl-2">
              <span className="font-medium">Input the alcohol percentage</span> (ABV) of your beverage. This information is usually found on the label.
            </li>
            <li className="pl-2">
              <span className="font-medium">Choose your country</span> to use the appropriate standard drink definition.
            </li>
            <li className="pl-2">
              <span className="font-medium">Click "Calculate"</span> to see how many standard drinks your beverage contains.
            </li>
          </ol>
          
          <p className="text-sm text-muted-foreground mb-4">
            For the most accurate results, use the alcohol by volume (ABV) percentage listed on the beverage container. 
            If this information is not available, you can use the typical ABV values provided in our quick select options.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">The Science Behind Alcohol Metabolism</h2>
          <p className="mb-4">
            When you consume alcohol, your body begins to metabolize it immediately. Understanding this process can help 
            you make informed decisions about your alcohol consumption:
          </p>
          
          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold mb-1">Absorption</h3>
              <p className="text-sm text-muted-foreground">
                Alcohol is primarily absorbed in the small intestine (80%) and stomach (20%). Empty stomachs absorb alcohol 
                faster—eating before drinking slows absorption. According to research published in the Journal of Clinical 
                Investigation, the presence of food in the stomach can reduce the peak blood alcohol concentration by up to 50%.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Metabolism</h3>
              <p className="text-sm text-muted-foreground">
                The liver metabolizes about 90-95% of consumed alcohol using enzymes like alcohol dehydrogenase (ADH) and 
                acetaldehyde dehydrogenase (ALDH). Studies show that the average person metabolizes approximately 7-10 grams 
                of pure alcohol per hour, which is roughly equivalent to one standard drink in many countries.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-1">Individual Variations</h3>
              <p className="text-sm text-muted-foreground">
                Metabolism rates vary based on factors such as genetics, gender, age, body mass, liver health, and medications. 
                Research in the journal Alcoholism: Clinical and Experimental Research found that women generally have less ADH 
                than men, resulting in slower alcohol metabolism and higher blood alcohol concentrations from the same amount of 
                alcohol, even after adjusting for body weight.
              </p>
            </div>
          </div>
          
          <p className="mb-4">
            The effects of alcohol on the body are influenced by how quickly it's absorbed compared to how quickly it's 
            metabolized. When consumption exceeds metabolism capacity, blood alcohol concentration rises, leading to 
            increased impairment.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Tips for Responsible Drinking</h2>
          <p className="mb-4">
            If you choose to drink alcohol, the following strategies can help you do so more responsibly:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border rounded-md">
              <h3 className="font-semibold mb-2">Count Your Drinks</h3>
              <p className="text-sm text-muted-foreground">
                Use our calculator to understand how many standard drinks you're consuming. Set a personal limit based on 
                health guidelines and stick to it. A study by the National Institute on Alcohol Abuse and Alcoholism found 
                that people who track their drinks consume 43% less alcohol on average.
              </p>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="font-semibold mb-2">Pace Yourself</h3>
              <p className="text-sm text-muted-foreground">
                Aim for no more than one standard drink per hour, which is approximately the rate at which your body can 
                metabolize alcohol. Consider alternating alcoholic beverages with water or other non-alcoholic drinks.
              </p>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="font-semibold mb-2">Eat Before and While Drinking</h3>
              <p className="text-sm text-muted-foreground">
                Food slows alcohol absorption into the bloodstream. A study in the Journal of the American Medical Association 
                found that consuming food before alcohol can reduce blood alcohol concentration by up to 20%.
              </p>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="font-semibold mb-2">Plan Safe Transportation</h3>
              <p className="text-sm text-muted-foreground">
                Never drive after drinking. According to the CDC, even one drink can impair driving ability. Always designate 
                a sober driver, use public transportation, or call a rideshare service.
              </p>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="font-semibold mb-2">Know Your Limits</h3>
              <p className="text-sm text-muted-foreground">
                Understand how alcohol affects your body and mind. Factors like body weight, medications, fatigue, and health 
                conditions can influence your tolerance. A 2019 study in Scientific Reports found that perceived tolerance is 
                often inaccurate—people frequently overestimate their ability to function while intoxicated.
              </p>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="font-semibold mb-2">Consider Alcohol-Free Days</h3>
              <p className="text-sm text-muted-foreground">
                Include several alcohol-free days in your week. Research published in BMC Public Health suggests that regular 
                alcohol-free periods can improve liver function, sleep quality, and reduce overall consumption patterns.
              </p>
            </div>
          </div>
          
          <Alert variant="default" className="mb-4">
            <Info className="h-4 w-4" />
            <AlertDescription>
              If you're concerned about your drinking habits or think you might have a dependency on alcohol, 
              don't hesitate to seek help from a healthcare professional. Organizations like the Substance Abuse 
              and Mental Health Services Administration (SAMHSA) offer resources and support.
            </AlertDescription>
          </Alert>
        </section>
      </CardContent>
    </Card>
  );
};

export default StandardDrinkContent;
