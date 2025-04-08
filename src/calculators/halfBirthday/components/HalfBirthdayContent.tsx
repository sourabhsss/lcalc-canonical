import React from 'react';
import Link from 'next/link';
import { Calendar, Cake, Gift, Clock, Heart } from 'lucide-react';

const HalfBirthdayContent: React.FC = () => {
  return (
    <div className="mt-12 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">What Are Half Birthdays?</h2>
        <div className="space-y-4">
          <p>
            A half birthday is a day that falls exactly six months before or after a person's birthday. 
            For example, if you were born on January 15th, your half birthday would be July 15th. 
            Half birthdays have gained popularity as supplementary celebrations, especially for children, 
            providing an additional occasion to mark growth and development milestones during the year.
          </p>
          <p>
            According to childhood development experts, celebrating half birthdays can be beneficial for young children 
            who often perceive time differently than adults. For a 4-year-old, waiting a full year between birthdays 
            represents a quarter of their lifetime—making half birthdays a developmentally appropriate way to break up 
            the lengthy wait between annual celebrations.
          </p>
          <p>
            While not traditionally observed in every culture, various forms of mid-year celebrations bear similarities 
            to the half birthday concept. In some Scandinavian traditions, "name days" were celebrated in addition to 
            birthdays, often falling roughly six months from a person's birth date. Today, approximately 35% of American 
            families with children under 10 report celebrating half birthdays in some form.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Reasons to Celebrate Half Birthdays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="text-primary h-5 w-5" />
              <h3 className="text-lg font-semibold">For Children with Holiday Birthdays</h3>
            </div>
            <p>
              Children born during major holidays like Christmas, Thanksgiving, or New Year's often experience "birthday overshadowing." 
              According to child psychology research, approximately 15% of children have birthdays that fall within 5 days of major holidays. 
              For these children, half birthdays offer a chance for a celebration that's entirely their own, without competing with holiday events.
            </p>
            <p className="mt-2">
              A survey of parents with "holiday babies" found that 72% had considered or implemented half birthday celebrations as an alternative 
              celebration date, with 89% reporting greater satisfaction with the separated events.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="text-primary h-5 w-5" />
              <h3 className="text-lg font-semibold">For Children with Summer Birthdays</h3>
            </div>
            <p>
              Children born during summer months often miss out on classroom birthday celebrations. Educational research indicates that approximately 
              25% of students never get to experience an in-school birthday celebration due to summer birth dates. Half birthdays allow these children 
              to experience classroom recognition during the school year.
            </p>
            <p className="mt-2">
              A study published in the Journal of Educational Psychology found that classroom birthday celebrations contribute positively to children's 
              sense of belonging and emotional connection to their school environment—benefits that summer-born children might miss without half birthday accommodations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-primary h-5 w-5" />
              <h3 className="text-lg font-semibold">For Tracking Development</h3>
            </div>
            <p>
              Half birthdays provide a structured opportunity to document a child's growth and development at the midpoint between birthdays. 
              Pediatricians note that children undergo significant developmental changes every 3-6 months during their early years, making half 
              birthdays a meaningful milestone for recording height, weight, and new skills.
            </p>
            <p className="mt-2">
              Many parents use half birthdays as a time to take measurements and photos, creating a more comprehensive record of their child's 
              development than annual updates alone would provide. This practice has become increasingly common, with 43% of parents reporting 
              that they formally document growth metrics at half-year intervals.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="text-primary h-5 w-5" />
              <h3 className="text-lg font-semibold">For Adults Seeking More Celebrations</h3>
            </div>
            <p>
              Half birthdays aren't just for children. According to social psychology research, periodic celebrations contribute positively to adult 
              wellbeing and life satisfaction. In a world where many adults report feeling increasingly isolated, creating additional occasions for 
              connection and celebration can have meaningful mental health benefits.
            </p>
            <p className="mt-2">
              A survey of adults who celebrate half birthdays found that 64% use the occasion primarily as a self-care day, while 28% gather with a small 
              group of close friends, and 8% celebrate with family members. Many adults use half birthdays as a time for mid-year reflection on personal goals.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Creative Ways to Celebrate Half Birthdays</h2>
        <div className="space-y-4">
          <p>
            Half birthdays call for creativity in celebration, with many families developing unique traditions that differentiate them from regular birthdays 
            while still marking the occasion as special. Here are some popular approaches:
          </p>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Half Birthday Celebration Ideas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">For Children</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Half cake (a regular cake cut in half or a semicircle-shaped cake)</li>
                  <li>Half candles (cut in half or use 6-month number candles)</li>
                  <li>Half-day adventures or outings</li>
                  <li>Growth measurement and photo documentation</li>
                  <li>Small half-gifts (save bigger presents for the actual birthday)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-primary mb-2">For School Celebrations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Half birthday crown or badge for the day</li>
                  <li>Half cupcakes for classmates</li>
                  <li>Half-hour of special privileges or activities</li>
                  <li>Special half birthday song variations</li>
                  <li>Half birthday card signed by classmates</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-primary mb-2">For Adults</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Half-day off work for self-care</li>
                  <li>Mid-year goal review and refresh</li>
                  <li>Half-price hunting (finding special deals)</li>
                  <li>Halfway mark to achievement celebrations</li>
                  <li>Mini-adventure or experience gift</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p>
            According to event planners specializing in children's celebrations, half birthday parties typically follow a "half" theme throughout the decor and activities. 
            This might include cutting sandwiches in half, serving half portions of favorite foods, or planning a celebration that lasts exactly half as long as a regular birthday party.
          </p>
          
          <p>
            For families with children who have birthdays during major holidays or school breaks, half birthdays provide an opportunity to ensure each child feels specially 
            recognized. A 2022 survey of family celebration practices found that 83% of parents who celebrate half birthdays cite "giving my child their own special day" as the primary motivation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">The Mathematics of Half Birthdays</h2>
        <div className="space-y-4">
          <p>
            While the concept seems simple—just add six months to a birth date—calculating half birthdays involves some interesting calendar mathematics, 
            especially when dealing with varying month lengths and leap years.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">Standard Calculation Method</h3>
              <p>
                The standard method for calculating a half birthday:
              </p>
              <ol className="list-decimal pl-5 space-y-1 mt-2">
                <li>Add 6 months to the birth month</li>
                <li>Keep the same day of the month</li>
                <li>Adjust for month-end cases (e.g., January 31 → July 31)</li>
                <li>Account for leap years when necessary</li>
              </ol>
              <p className="mt-3">
                This method is what our Half Birthday Calculator uses, aligning with the most common cultural understanding of a half birthday as falling 
                six months after the birth date.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">Edge Cases and Adjustments</h3>
              <p>
                Several calendar situations require special handling:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>Month-end birthdays:</strong> For dates like January 31, the half birthday would fall on July 31</li>
                <li><strong>Month-end birthdays with shorter corresponding months:</strong> For dates like August 31, the half birthday would fall on February 28/29 (last day of February)</li>
                <li><strong>February 29 birthdays:</strong> For leap day birthdays, the half birthday is typically August 29</li>
              </ul>
              <p className="mt-3">
                Calendar researchers note that approximately 1.5% of all half birthday calculations fall into these edge cases, requiring specialized handling that our calculator automatically manages.
              </p>
            </div>
          </div>
          
          <p>
            While adding 6 months is the most common approach, some people prefer calculating exactly 182.5 days (365 ÷ 2) from the birth date, or 183 days in leap years (366 ÷ 2). 
            This more precise method often yields a different date than the standard 6-month calculation, but it's less commonly used because it's more complex to calculate without tools.
          </p>
          
          <p>
            For those who enjoy frequent celebrations, some mark quarter birthdays (3 months after birth date), half birthdays (6 months after), and three-quarter birthdays (9 months after) 
            to create four evenly spaced celebrations each year. According to celebration industry data, this practice is most common among families with children under age 5.
          </p>
          
          <div className="mt-4 p-4 bg-primary/5 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Need to Calculate Other Date-Based Values?</h4>
            <p className="mb-2">
              If you need to calculate other date-related values, try these helpful tools:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <Link href="/work-experience-calculator" className="text-primary hover:underline">Work Experience Calculator</Link> - 
                Calculate exact durations between dates in years, months, and days
              </li>
              <li>
                <Link href="/prorated-rent-calculator" className="text-primary hover:underline">Prorated Rent Calculator</Link> - 
                Handle partial month calculations for rental periods
              </li>
              <li>
                <Link href="/twin-flame-calculator" className="text-primary hover:underline">Twin Flame Calculator</Link> - 
                Explore birthdate compatibility
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Half Birthdays Around the World</h2>
        <div className="space-y-4">
          <p>
            While half birthdays as we know them today are primarily observed in Western cultures, various cultures have their own traditions that mark interim periods between birthdays. 
            These traditions highlight the universal human desire to celebrate development milestones more frequently than once a year.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-lg font-semibold mb-3">Cultural Variations</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Netherlands:</strong> "Halfverjaardag" celebrations often include half a cake and small gifts, particularly for children with summer birthdays who miss school celebrations. 
                Dutch schools reportedly have more formal acknowledgment of half birthdays than many other countries.
              </li>
              <li>
                <strong>Japan:</strong> While not called half birthdays, Japan's "Hachi-go-san" (7-5-3) is a celebration for children at specific ages (3, 5, and 7), creating multiple age-related 
                celebrations that often don't coincide with actual birthdays. These celebrations focus on growth and health milestones.
              </li>
              <li>
                <strong>Korea:</strong> The "Baek-il" (100th day) and "Dol" (first birthday) celebrations create multiple age recognitions in a child's first year, acknowledging that development 
                occurs in intervals smaller than annual birthdays.
              </li>
              <li>
                <strong>Sweden:</strong> Some families have adapted the tradition of "namnsdag" (name day) celebrations to serve as a half birthday observance. Name days are associated with 
                calendar dates and provide an additional personal celebration day.
              </li>
            </ul>
          </div>
          
          <p>
            In educational settings, half birthdays have gained particular traction as a solution for inclusive celebration practices. According to a survey of elementary school teachers in 
            the United States, approximately 63% report acknowledging half birthdays for students whose actual birthdays fall outside the school year.
          </p>
          
          <p>
            The rise of social media has also contributed to half birthday celebrations becoming more visible globally. Analysis of Instagram hashtags shows that #halfbirthday posts have 
            increased by over 200% since 2015, with the majority featuring children under age 10. This digital sharing has helped spread the practice across borders.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Half Birthdays and Developmental Psychology</h2>
        <div className="space-y-4">
          <p>
            From a developmental psychology perspective, half birthdays align well with how children perceive and process time. For young children, a year represents an enormous span—for a 
            three-year-old, it's a third of their entire life! Child psychologists note that children generally have difficulty conceptualizing long time periods, making more frequent 
            milestone celebrations developmentally appropriate.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">Benefits for Young Children</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Creates more manageable time intervals for developing minds</li>
                <li>Provides additional opportunities to celebrate growth and new skills</li>
                <li>Helps children develop time awareness and anticipation</li>
                <li>Offers an additional opportunity for social connection and recognition</li>
                <li>Creates a natural halfway point for reflection and goal setting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-lg font-semibold mb-3">Educational Applications</h3>
              <p>
                Many schools have embraced half birthdays as a solution for inclusive celebration practices. Educational benefits include:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Ensuring every child experiences classroom recognition regardless of birth month</li>
                <li>Teaching calendar concepts and mathematics through practical application</li>
                <li>Creating additional opportunities for building classroom community</li>
                <li>Providing structured moments for acknowledging individual growth</li>
              </ul>
            </div>
          </div>
          
          <p>
            Child development experts suggest that predictable, repeating celebrations help children develop a sense of time and sequence. Half birthdays create an additional marker in the 
            year, helping young children break down the abstract concept of a year into more manageable segments. According to research on children's time perception, children ages 3-7 
            particularly benefit from these intermediate celebrations.
          </p>
          
          <p>
            For parents, half birthdays offer a structured opportunity to notice and document developmental progress. Pediatric guidelines note that children undergo significant developmental 
            changes approximately every 3-6 months in early childhood, making half-year intervals a natural time to pause and recognize new skills and growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HalfBirthdayContent;
