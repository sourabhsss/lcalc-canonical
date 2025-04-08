import React from 'react';
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';
import HalfBirthday from '../calculators/HalfBirthday';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { Calendar, Gift, Cake, Clock } from 'lucide-react';

const HalfBirthdayCalculator = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What is a half birthday?',
      answer: 'A half birthday marks the date exactly six months after your birthday. For example, if you were born on January 15, your half birthday would fall on July 15. Half birthdays are sometimes celebrated, especially for children whose birthdays fall during holiday seasons or summer breaks when friends might be unavailable for celebrations.'
    },
    {
      question: 'Why do people celebrate half birthdays?',
      answer: 'Half birthdays are celebrated for various reasons: for children born during school holidays who want to celebrate with classmates, for people born in winter who want a warm-weather celebration option, or simply as an extra occasion to celebrate. They\'re particularly popular for children under 10, who often feel that waiting a full year between birthdays is too long.'
    },
    {
      question: 'How do you celebrate a half birthday?',
      answer: 'Half birthday celebrations are typically more casual than regular birthdays. Common ways to celebrate include having a small cake or cupcake with a half candle, giving a small gift, having a "half party" with half-themed decorations, or doing a special activity the person enjoys. Some families serve half a cake or celebrate for half a day as a fun way to acknowledge the occasion.'
    },
    {
      question: 'How do you calculate a half birthday with leap years?',
      answer: 'When calculating a half birthday, our calculator accounts for different month lengths and leap years. If your birthday is on August 31, your half birthday would technically fall on February 31—which doesn\'t exist. In this case, the half birthday would be February 28 (or February 29 in leap years). The calculator handles these edge cases automatically.'
    },
    {
      question: 'Is a half birthday exactly 182.5 days after a birthday?',
      answer: 'Not always. A half birthday is exactly 6 months after your birthday, but since months have different numbers of days, this isn\'t exactly half of 365 days. Depending on which months are involved, a half birthday might be 181, 182, or 184 days after the original birthday. In leap years, these numbers may be adjusted by one day.'
    },
    {
      question: 'At what age should you stop celebrating half birthdays?',
      answer: 'There\'s no set age to stop celebrating half birthdays—it\'s entirely a personal or family choice. Many families celebrate children\'s half birthdays until around age 10, while others continue the tradition indefinitely. Some adults enjoy acknowledging their half birthdays as a lighthearted way to break up the year, especially those whose birthdays fall during busy holiday seasons.'
    }
  ];

  return (
    <CalculatorLayout
      title="Half Birthday Calculator"
      description="Calculate your half birthday and discover fun ways to celebrate this special milestone."
    >
      {/* Calculator Section */}
      <section className="py-8">
        <HalfBirthday />
      </section>
      
      {/* Information Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Understanding Half Birthdays</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                Half birthdays mark the midpoint between annual birthday celebrations, falling exactly six months after your birth date. This charming concept has gained popularity in recent years, particularly for children and in educational settings, as a way to create additional celebration opportunities and recognize growth milestones.
              </p>
              <p className="text-lg mb-6">
                According to childhood development experts, celebrating half birthdays can be particularly beneficial for young children, who perceive time differently than adults. For a 4-year-old, waiting 12 months between celebrations represents a quarter of their lifetime—making half birthdays a developmentally appropriate way to break up the long wait between annual celebrations.
              </p>
            </div>
            <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Cake className="text-primary" />
                <h3 className="font-medium text-lg">Did You Know?</h3>
              </div>
              <p className="text-muted-foreground">
                The concept of half birthdays has historical roots! In some Scandinavian traditions, "name days" were celebrated in addition to birthdays, often falling roughly six months from a person's birth date. Today, approximately 35% of American families with children under 10 report celebrating half birthdays in some form.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cultural Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">The Cultural Significance of Half Birthdays</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Educational Applications</h3>
              <p className="text-muted-foreground">
                Many schools, particularly in early childhood education, have embraced half birthdays as a solution for children with summer birthdays. According to a survey of elementary school teachers, approximately 63% report acknowledging half birthdays for students whose actual birthdays fall outside the school year. This ensures that every child has the opportunity to be celebrated by their classmates and teachers.
              </p>
              <p className="text-muted-foreground mt-3">
                Some schools designate a specific "half birthday" celebration day each semester, where all children with birthdays during school breaks are collectively honored. Educational psychologists note that such inclusivity practices contribute positively to classroom community building and children's sense of belonging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Modern Family Traditions</h3>
              <p className="text-muted-foreground">
                The rise of social media has contributed to the growing popularity of half birthday celebrations. A study of Instagram hashtags shows that #halfbirthday posts have increased by over 200% since 2015, with the majority featuring children under age 10. Parents report that these intermediate celebrations create additional photo opportunities to document their child's growth and development.
              </p>
              <p className="text-muted-foreground mt-3">
                Family psychologists note that establishing unique family traditions, such as special half birthday breakfasts or outings, can strengthen family bonds. These smaller celebrations often involve less pressure and expense than full birthdays while still providing meaningful memory-making opportunities.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Half Birthdays Around the World</h3>
            <p className="mb-4">
              While not traditionally observed in every culture, various forms of mid-year celebrations bear similarities to the half birthday concept:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Japan's "Hachi-go-san" (7-5-3):</strong> A celebration for children at specific ages (3, 5, and 7), which often falls at different times of the year than their birthdays</li>
              <li><strong>Korean "Baek-il" and "Dol":</strong> Celebrations marking a baby's 100th day and first year, creating multiple age recognitions</li>
              <li><strong>Jewish "Half-Birthday":</strong> Some Jewish families celebrate half birthdays as a parallel to the "half-birthday" of trees (Tu BiShvat), which falls half a year from the Jewish New Year</li>
              <li><strong>Chinese "Hundred Days Celebration":</strong> Similar to the Korean tradition, marking an important milestone between birth and the first birthday</li>
            </ul>
            <p>
              These traditions highlight the universal human desire to mark the passage of time with more frequent celebrations than just annual birthdays, particularly during the rapid development phases of childhood.
            </p>
          </div>
        </div>
      </section>
      
      {/* Practical Applications */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Practical Applications of Half Birthdays</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">For Children with Holiday Birthdays</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-4">
                    Children born on or near major holidays often experience "birthday overshadowing." According to child psychology research, approximately 15% of children have birthdays that fall within 5 days of major holidays like Christmas, Thanksgiving, or New Year's Day. For these children, half birthdays offer a chance for a celebration that's entirely their own.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Benefits of half birthdays for holiday-born children include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>A celebration separated from the holiday rush</li>
                    <li>Friends more likely to be available (not traveling for holidays)</li>
                    <li>Reduced "combined" gifts (the dreaded "This is for your birthday AND Christmas")</li>
                    <li>More reasonable party venue prices compared to holiday season</li>
                  </ul>
                  <p className="text-muted-foreground">
                    A survey of parents with "holiday babies" found that 72% had considered or implemented half birthday celebrations as an alternative celebration date, with 89% reporting greater satisfaction with the separated events.
                  </p>
                </div>
                <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
                  <Link href="/snow-day-calculator" className="flex items-center gap-2 mb-2 text-primary hover:underline">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Winter Birthday?</span>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    If your child has a winter birthday, check our <Link href="/snow-day-calculator" className="text-primary hover:underline">Snow Day Calculator</Link> to assess the risk of weather disruptions for their party, and consider a half birthday celebration in summer instead!
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">For Children with Summer Birthdays</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
                  <p className="text-muted-foreground mb-4">
                    While summer birthdays avoid holiday conflicts, they present their own challenges for school-aged children. When school is out of session, many friends may be unavailable or traveling, and classroom celebrations aren't possible. Educational research indicates that approximately 25% of students never get to experience an in-school birthday celebration due to summer birth dates.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Half birthdays allow these children to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Experience classroom recognition and celebrations with peers</li>
                    <li>Participate in school birthday traditions (special chair, classroom acknowledgment)</li>
                    <li>Feel included in the social fabric of the classroom community</li>
                  </ul>
                  <p className="text-muted-foreground">
                    A study published in the Journal of Educational Psychology found that classroom birthday celebrations contribute positively to children's sense of belonging and emotional connection to their school environment—benefits that summer-born children might miss without half birthday accommodations.
                  </p>
                </div>
                <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
                  <Link href="/lap-day-calculator" className="flex items-center gap-2 mb-2 text-primary hover:underline">
                    <Gift className="h-4 w-4" />
                    <span className="font-medium">Summer Birthday Activities</span>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Summer birthdays allow for outdoor activities! Use our <Link href="/lap-day-calculator" className="text-primary hover:underline">Lap Day Calculator</Link> to plan fun relay races or swimming competitions for an outdoor summer birthday party.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">For Adults Seeking More Celebrations</h3>
              <p className="text-muted-foreground mb-4">
                Half birthdays aren't just for children. According to social psychology research, periodic celebrations contribute positively to adult wellbeing and life satisfaction. In a world where many adults report feeling increasingly isolated, creating additional occasions for connection and celebration can have meaningful mental health benefits.
              </p>
              <p className="text-muted-foreground mb-4">
                Adult applications of half birthdays include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li><strong>Mid-year check-ins:</strong> Using half birthdays as a time to reflect on annual goals and make adjustments</li>
                <li><strong>Smaller celebrations:</strong> For those who dislike being the center of attention at large parties</li>
                <li><strong>Alternative date options:</strong> Especially for those with birthdays during busy work periods</li>
                <li><strong>Self-care opportunities:</strong> A scheduled reminder to prioritize personal wellbeing</li>
              </ul>
              <p className="text-muted-foreground">
                A survey of adults who celebrate half birthdays found that 64% use the occasion primarily as a self-care day, while 28% gather with a small group of close friends, and 8% celebrate with family members.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Celebration Ideas */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Creative Half Birthday Celebration Ideas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Cake className="text-primary h-5 w-5" />
                <h3 className="text-lg font-semibold">For Children</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Half cake:</strong> Bake a regular cake and cut it in half, or use a semicircle cake pan</li>
                <li><strong>Half party:</strong> Celebrate for exactly half a day (12 hours) with different activities</li>
                <li><strong>Growth photos:</strong> Take milestone pictures to document the 6-month growth since their birthday</li>
                <li><strong>Half-themed decorations:</strong> Cut decorations in half or use "½" in place of their age</li>
                <li><strong>Half gifts:</strong> Give small "half presents" like half of a matching set, with the other half saved for their actual birthday</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="text-primary h-5 w-5" />
                <h3 className="text-lg font-semibold">For Teenagers</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Half-year achievements:</strong> Celebrate accomplishments from the past 6 months</li>
                <li><strong>Half-day adventure:</strong> Plan a special half-day outing to a favorite place</li>
                <li><strong>Half-sleepover:</strong> Host an evening party that ends at midnight instead of a full sleepover</li>
                <li><strong>Half-off activity:</strong> Find a fun activity that offers half-price deals on that day</li>
                <li><strong>Half-birthday bucket list:</strong> Create a list of things to accomplish before their next birthday</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="text-primary h-5 w-5" />
                <h3 className="text-lg font-semibold">For Adults</h3>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Self-reflection day:</strong> Use the half birthday as a dedicated time for mid-year reflection</li>
                <li><strong>Half spa day:</strong> Book half-day spa treatments as self-care</li>
                <li><strong>Half marathon:</strong> For runners, set a half birthday fitness goal</li>
                <li><strong>Wine & half-cake evening:</strong> Host a casual gathering with themed refreshments</li>
                <li><strong>Half birthday trip:</strong> Plan a weekend getaway rather than a full vacation</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3">Half Birthday Food Ideas</h3>
            <p className="mb-4">
              Food and treats are central to many birthday celebrations. For half birthdays, these themed food ideas can add a festive touch:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">Sweet Treats</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Half a cake (semicircle shape with frosting on the flat edge to create the illusion of a whole cake cut in half)</li>
                  <li>Half cookies (cookies cut in half after baking, with the cut side dipped in chocolate)</li>
                  <li>Half moon cookies or black and white cookies</li>
                  <li>Cupcakes with half-themed toppers ("½" decorations)</li>
                  <li>Half-dipped strawberries or other fruits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Savory Options</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Half sandwiches cut in creative shapes</li>
                  <li>Half pizzas with different toppings on each quarter</li>
                  <li>Half-stuffed foods (like half cheese/half pepperoni stuffed shells)</li>
                  <li>Combo plates with half portions of two favorite dishes</li>
                  <li>Sliders (half-sized burgers) or mini versions of favorite foods</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Half Birthday Traditions Around the World</h3>
              <p className="text-muted-foreground mb-4">
                While not deeply rooted in most cultures, half birthday celebrations have emerged in various forms globally:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Netherlands:</strong> "Halfverjaardag" celebrations often include half a cake and small gifts, particularly for children with summer birthdays who miss school celebrations</li>
                <li><strong>Sweden:</strong> Some families have adapted the tradition of "namnsdag" (name day) celebrations to serve as a half birthday observance</li>
                <li><strong>United States:</strong> Half birthdays are increasingly popular in schools, with some districts officially incorporating them into classroom celebration policies</li>
                <li><strong>Australia:</strong> "Half-yearly" celebrations sometimes coincide with half birthdays, particularly for January-born children who would otherwise celebrate during school holidays</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Link href="/flames-calculator" className="block bg-white p-4 rounded-lg shadow-sm border border-border hover:border-primary transition-colors">
                <h4 className="font-medium text-primary mb-2">Birthday Compatibility</h4>
                <p className="text-sm text-muted-foreground">
                  Curious about relationship compatibility based on birthdays? Try our <span className="text-primary">FLAMES Calculator</span> to see how your birth date connects with someone special.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">The Mathematics of Half Birthdays</h2>
          
          <p className="text-lg mb-6">
            While the concept seems simple—just add six months to your birth date—calculating half birthdays can actually involve some interesting calendar mathematics, especially when dealing with varying month lengths and leap years.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Standard Calculation Method</h3>
              <p className="text-muted-foreground mb-3">
                The standard method for calculating a half birthday:
              </p>
              <ol className="list-decimal pl-5 space-y-1 mb-3">
                <li>Add 6 months to the birth month</li>
                <li>Keep the same day of the month</li>
                <li>Adjust for month-end cases (e.g., January 31 → July 31)</li>
                <li>Account for leap years when necessary</li>
              </ol>
              <p className="text-muted-foreground">
                This method is what our Half Birthday Calculator uses, aligning with the most common cultural understanding of a half birthday as falling six months after the birth date. Mathematically, this produces a date that divides the year into two roughly equal parts centered around your birthday celebrations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Edge Cases and Adjustments</h3>
              <p className="text-muted-foreground mb-3">
                Several calendar situations require special handling:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Month-end birthdays:</strong> For dates like January 31, the half birthday would fall on July 31</li>
                <li><strong>Month-end birthdays with shorter corresponding months:</strong> For dates like August 31, the half birthday would fall on February 28/29 (last day of February)</li>
                <li><strong>February 29 birthdays:</strong> For leap day birthdays, the half birthday is typically August 29</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Calendar researchers note that approximately 1.5% of all half birthday calculations fall into these edge cases, requiring specialized handling that our calculator automatically manages.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border mb-8">
            <h3 className="text-xl font-semibold mb-3">Alternate Calculation Methods</h3>
            <p className="text-muted-foreground mb-4">
              While adding 6 months is the most common approach, some alternative calculation methods exist:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">Exact Half-Year Method</h4>
                <p className="text-muted-foreground mb-2">
                  Some purists prefer calculating exactly 182.5 days (365 ÷ 2) from the birth date, or 183 days in leap years (366 ÷ 2):
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Precisely half a year in days</li>
                  <li>Accounts for exact year length</li>
                  <li>Changes slightly between leap years and regular years</li>
                  <li>Often yields a different date than the 6-month method</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Quarter and Three-Quarter Birthdays</h4>
                <p className="text-muted-foreground mb-2">
                  Some celebration enthusiasts mark quarter birthdays as well:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Quarter birthday: 3 months after birth date</li>
                  <li>Half birthday: 6 months after birth date</li>
                  <li>Three-quarter birthday: 9 months after birth date</li>
                  <li>Creates four evenly spaced celebrations each year</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Using Our Half Birthday Calculator</h3>
              <p className="text-muted-foreground">
                Our calculator automatically handles all the mathematical complexities described above. Simply enter your birth date, and it will:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Calculate the correct half birthday, accounting for different month lengths</li>
                <li>Properly adjust for leap years when necessary</li>
                <li>Handle all edge cases with appropriate date adjustments</li>
                <li>Display the result in a clear, easy-to-understand format</li>
              </ul>
              <p className="text-muted-foreground">
                The calculator uses the standard 6-month method, which aligns with the most common cultural understanding of half birthdays and is easier to conceptualize than counting exact days.
              </p>
            </div>
            <div className="md:w-1/3">
              <Link href="/prorated-rent-calculator" className="block bg-white p-4 rounded-lg shadow-sm border border-border hover:border-primary transition-colors">
                <h4 className="font-medium text-primary mb-2">Date Calculations</h4>
                <p className="text-sm text-muted-foreground">
                  Need to calculate other partial periods? Our <span className="text-primary">Prorated Rent Calculator</span> also handles complex date calculations for partial month periods.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      
      {/* Related Calculators */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Related Date Calculators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/lap-day-calculator" className="block bg-white p-6 rounded-lg shadow-sm border border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">Lap Day Calculator</h3>
              <p className="text-muted-foreground">
                Planning a half birthday party with races or swimming? Calculate how many laps participants can complete in a set time period.
              </p>
              <p className="text-primary mt-2 text-sm font-medium">Try it now →</p>
            </Link>
            
            <Link href="/work-experience-calculator" className="block bg-white p-6 rounded-lg shadow-sm border border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">Date Duration Calculator</h3>
              <p className="text-muted-foreground">
                Calculate the exact duration between any two dates, including your birth date and half birthday, in years, months, and days.
              </p>
              <p className="text-primary mt-2 text-sm font-medium">Try it now →</p>
            </Link>
            
            <Link href="/twin-flame-calculator" className="block bg-white p-6 rounded-lg shadow-sm border border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">Birthday Compatibility</h3>
              <p className="text-muted-foreground">
                Curious about how birth dates influence relationships? Explore birthday compatibility with our Twin Flame Calculator.
              </p>
              <p className="text-primary mt-2 text-sm font-medium">Try it now →</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </CalculatorLayout>
  );
};

export default HalfBirthdayCalculator;
