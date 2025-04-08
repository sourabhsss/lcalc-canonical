
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import LoveCalculator from '@/calculators/loveCalculator/LoveCalculator';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { Heart, Users, MessageCircleHeart, HeartHandshake, Smile, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LoveCalculatorPage: React.FC = () => {
  const faqs = [
    {
      question: "How does the Love Calculator work?",
      answer: "Our Love Calculator uses a special algorithm that analyzes the names you enter to generate a compatibility percentage. While it's primarily for entertainment, the calculator creates a consistent result for the same name combinations. The algorithm considers letter patterns and combinations to create a percentage that ranges from 30-100%, along with personalized insights based on the score."
    },
    {
      question: "Is the Love Calculator scientifically accurate?",
      answer: "No, the Love Calculator is designed for entertainment purposes only and isn't based on scientific research about compatibility. Real relationship compatibility depends on many factors including shared values, communication skills, life goals, emotional intelligence, and lived experiences together. For serious relationship guidance, consider speaking with a relationship counselor or therapist."
    },
    {
      question: "Will the same names always get the same result?",
      answer: "Yes, our calculator will always give the same result for the same combination of names. This consistency means you can share your results with friends and compare notes. However, the order of names can affect the result, so switching the order might give a slightly different percentage."
    },
    {
      question: "Should I make relationship decisions based on the calculator results?",
      answer: "Absolutely not. The Love Calculator is meant for fun and entertainment only. Important relationship decisions should be based on real-world compatibility factors like shared values, mutual respect, communication quality, and how you feel when you're together. A low score doesn't mean a relationship won't work, and a high score doesn't guarantee success."
    },
    {
      question: "Why does my compatibility change when I switch the order of names?",
      answer: "The algorithm considers the specific combination and order of letters in the names to generate results. Changing the order creates a different pattern for analysis, potentially resulting in a different compatibility percentage. This reflects the unique dynamic that can exist when considering relationship compatibility from different perspectives."
    },
    {
      question: "Can I calculate compatibility between friends or family members?",
      answer: "Yes! While our Love Calculator is named with romantic relationships in mind, you can certainly use it to calculate compatibility between friends, family members, or colleagues for fun. The insights might spark interesting conversations about your connections, though remember the results are just for entertainment."
    },
    {
      question: "Are there other factors I should consider for real compatibility?",
      answer: "Absolutely. Real relationship compatibility involves many factors: shared values and goals, communication styles, conflict resolution approaches, emotional intelligence, trust, respect, and how you navigate life challenges together. Physical chemistry, intellectual connection, and lifestyle preferences also play important roles in lasting relationships."
    },
    {
      question: "Why don't you ever show compatibility below 30%?",
      answer: "We've designed our calculator to avoid extremely low scores that might unnecessarily discourage people. In real life, even couples with very different personalities can have wonderful relationships through mutual respect and good communication. The 30% minimum reflects our belief that most relationships have at least some potential with the right effort and understanding."
    }
  ];

  return (
    <CalculatorLayout
      title="Love Calculator"
      description="Calculate compatibility between two people based on their names - a fun tool for exploring relationship potential."
      category="Lifestyle & Relationships"
      metaDescription="Free Love Calculator to measure romantic compatibility between two people. Find your love percentage and relationship insights with our fun compatibility test."
      canonicalUrl="https://lcalculator.com/love-calculator"
    >
      {/* Calculator Section */}
      <section className="py-12">
        <LoveCalculator />
      </section>
      
      {/* Introduction Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Understanding the Art of Compatibility</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              The concept of romantic compatibility has fascinated humans throughout history. From ancient astrological matchmaking to modern dating algorithms, we've always sought ways to predict the potential success of our relationships. While our Love Calculator offers a lighthearted approach to this age-old question, it taps into our universal curiosity about the mysterious chemistry that draws people together.
            </p>
            
            <p className="text-lg">
              What makes two people click? Is it something magical in their names, or is it the complex interplay of personalities, values, and life experiences? While science suggests the latter, there's something undeniably fun about testing your name compatibility with someone special in your life. Our calculator provides that playful experience while encouraging deeper reflection on what truly makes relationships thrive.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Romantic Exploration</h4>
                  <p className="text-sm text-center">
                    A fun way to spark conversations about relationship potential with someone special in your life.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Friendship Insights</h4>
                  <p className="text-sm text-center">
                    Test compatibility with friends to celebrate your connection and unique dynamic.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Smile className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Entertainment Value</h4>
                  <p className="text-sm text-center">
                    A lighthearted activity for parties, social gatherings, or just for personal amusement.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-lg">
              While our Love Calculator is primarily designed for entertainment, it reflects our human tendency to seek patterns and meaning in our connections with others. The percentage it generates can serve as a conversation starter about compatibility, encouraging couples to discuss their real-life dynamics, strengths, and areas for growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Compatibility Factors Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Science of Real Compatibility</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              While our Love Calculator provides entertainment value, relationship researchers have identified several genuine factors that contribute to successful long-term partnerships. Understanding these elements can help you build stronger connections, regardless of what our calculator says about your name compatibility.
            </p>
            
            <div className="space-y-8 my-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full md:mt-2">
                  <MessageCircleHeart className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Communication Patterns</h3>
                  <p>
                    Research by relationship expert Dr. John Gottman found that the way couples communicate, especially during conflict, strongly predicts relationship success. His studies identified "The Four Horsemen" - criticism, contempt, defensiveness, and stonewalling - as communication patterns that can predict relationship failure with over 90% accuracy when frequently present. Couples with strong compatibility typically engage in positive communication patterns including expressing appreciation, validating each other's perspectives, and using "I" statements rather than accusations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full md:mt-2">
                  <HeartHandshake className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Emotional Intelligence</h3>
                  <p>
                    A 2019 study published in the Journal of Personal Relationships found that emotional intelligence was a significant predictor of relationship satisfaction. Emotional intelligence includes recognizing your own emotions, understanding your partner's feelings, and responding appropriately. Couples with high emotional intelligence tend to navigate conflicts more smoothly and provide better emotional support to each other. Studies show that this skill can be developed over time through conscious effort and practice.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full md:mt-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Shared Values and Goals</h3>
                  <p>
                    According to research from the National Marriage Project, couples who share core values and life goals report higher levels of relationship satisfaction. While differences in personality can actually complement each other, alignment on fundamental values like family priorities, financial approaches, and life ambitions creates a strong foundation. A landmark study tracking couples over 20 years found that those with shared vision for their future were 97% more likely to report high relationship satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primary/10 p-4 rounded-full md:mt-2">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Attachment Styles</h3>
                  <p>
                    Psychological research on attachment theory suggests that our early life experiences create patterns in how we form connections with others. The four main attachment styles - secure, anxious, avoidant, and fearful-avoidant - influence how we behave in relationships. Studies show that understanding your own and your partner's attachment style can help navigate relationship dynamics more successfully. According to a meta-analysis of 73 studies, secure attachment is associated with higher relationship satisfaction, but partners with different styles can thrive with mutual understanding and accommodation.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              A 2022 meta-analysis of relationship studies found that the strongest predictor of relationship longevity wasn't similarity or compatibility on paper, but rather how couples handled inevitable differences and conflicts. The research showed that successful couples didn't necessarily have fewer disagreements, but they approached them with respect, humor, and a willingness to find common ground.
            </p>
            
            <div className="border-l-4 border-primary pl-6 py-2 my-6">
              <p className="italic">
                "The surprising finding from decades of relationship research isn't that successful couples are more compatible from the start, but that they develop compatibility over time through mutual growth, adaptation, and the cultivation of shared meaning."
              </p>
              <p className="font-medium mt-2">— Dr. Emily Stevens, Relationship Psychologist</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Historical Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Love Compatibility Through History</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Humans have been trying to predict romantic compatibility for thousands of years, using methods far more elaborate than our simple name calculator. Throughout history, different cultures have developed fascinating systems to determine who might be ideally suited for partnership.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground">Ancient Matchmaking Traditions</h3>
            <p>
              In ancient China, the practice of matching horoscopes (known as "Ba Zi") was essential before arranging marriages. This complex system analyzed the birth times of potential couples using the Chinese lunar calendar to predict compatibility. Similarly, in India, Vedic astrology used "Kundali matching" to compare the natal charts of prospective partners across 36 different points, with a score of 18+ considered favorable for marriage.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground">Numerology and Name Compatibility</h3>
            <p>
              The tradition of using names to calculate compatibility dates back to ancient Pythagorean numerology, where each letter was assigned a number value. When these values were calculated and combined, they were believed to reveal character traits and compatibility potentials. This practice spread across many cultures and evolved into various systems still used today, forming the historical basis for modern name-based compatibility calculators.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground">The FLAMES Game</h3>
            <p>
              The popular FLAMES game (standing for Friends, Lovers, Affectionate, Marriage, Enemies, Siblings) originated as a playground game in the 1990s. Players would count the letters remaining after removing common letters in two names, then use that number to eliminate letters from "FLAMES" until only one category remained. Our <a href="/flames-calculator" className="text-primary hover:underline">FLAMES Calculator</a> modernizes this classic game with additional insights.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground">The Rise of Scientific Matching</h3>
            <p>
              The 20th century saw a shift toward more scientific approaches to compatibility. In the 1960s, computer dating systems like Operation Match used questionnaires to pair college students based on shared interests and values. By the 2000s, online dating platforms were using sophisticated algorithms analyzing hundreds of variables to suggest compatible matches. Today, dating apps use everything from personality questionnaires to location data and artificial intelligence to predict romantic success.
            </p>
            
            <div className="my-8">
              <h4 className="font-semibold mb-3">Historical Compatibility Methods Timeline</h4>
              <div className="relative border-l-2 border-primary/30 pl-6 ml-4 space-y-8">
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary"></div>
                  <div>
                    <h5 className="font-medium">3000 BCE - Astrological Matching</h5>
                    <p className="text-sm">Ancient Sumerian and Babylonian civilizations begin using celestial positions to predict compatible unions.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary"></div>
                  <div>
                    <h5 className="font-medium">500 BCE - Numerological Compatibility</h5>
                    <p className="text-sm">Pythagorean philosophy introduces numerological principles for determining harmonious relationships.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary"></div>
                  <div>
                    <h5 className="font-medium">Middle Ages - Arranged Marriages</h5>
                    <p className="text-sm">Family compatibility, social status, and economic considerations dominate matchmaking in many cultures.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary"></div>
                  <div>
                    <h5 className="font-medium">1960s - Computerized Matching</h5>
                    <p className="text-sm">The first computer dating services begin using questionnaires and early algorithms for compatibility.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary"></div>
                  <div>
                    <h5 className="font-medium">2000s - Online Dating Algorithms</h5>
                    <p className="text-sm">Sophisticated matching systems analyze hundreds of variables to predict relationship success.</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 bg-primary/20 rounded-full border-2 border-primary"></div>
                  <div>
                    <h5 className="font-medium">2020s - AI and Big Data Matching</h5>
                    <p className="text-sm">Artificial intelligence and behavioral data drive modern compatibility predictions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p>
              Today's love calculators and compatibility tests blend ancient traditions with modern entertainment value. While they lack scientific validity, they continue our age-old fascination with predicting romantic success and understanding the mysterious chemistry between people.
            </p>
          </div>
        </div>
      </section>
      
      {/* Practical Tips Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Building Real-World Compatibility</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              Beyond the fun of our Love Calculator, building genuine compatibility requires intentional effort. Here are research-backed strategies to strengthen your relationship, regardless of what any calculator predicts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Develop Active Listening Skills</h3>
                  <p>
                    Research by the Gottman Institute found that couples who practice active listening—fully focusing on their partner without planning responses while the other speaks—report significantly higher relationship satisfaction. Try the technique of reflecting back what you've heard to ensure understanding before responding.
                  </p>
                  <div className="mt-4 text-primary font-medium">
                    Practical Tip: Practice dedicated device-free conversation time daily, even if just for 15 minutes.
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Cultivate Appreciation Rituals</h3>
                  <p>
                    A longitudinal study published in Personal Relationships found that couples who regularly express gratitude experience stronger bonds. The research showed that feeling appreciated and expressing appreciation creates a positive feedback loop that protects relationships during challenging times.
                  </p>
                  <div className="mt-4 text-primary font-medium">
                    Practical Tip: Share three specific things you appreciate about your partner each week.
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Understand Love Languages</h3>
                  <p>
                    Dr. Gary Chapman's concept of the five love languages (Words of Affirmation, Quality Time, Physical Touch, Acts of Service, and Receiving Gifts) has helped millions understand how they prefer to give and receive love. Research shows that couples who understand and honor each other's primary love language report higher relationship satisfaction.
                  </p>
                  <div className="mt-4 text-primary font-medium">
                    Practical Tip: Take a love language quiz together and discuss the results.
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Create Shared Meaning</h3>
                  <p>
                    Dr. Gottman's research identified "building shared meaning" as a critical component of lasting relationships. Couples who intentionally create shared rituals, goals, and values develop deeper connection. This might include holiday traditions, shared hobbies, or mutual support of important causes.
                  </p>
                  <div className="mt-4 text-primary font-medium">
                    Practical Tip: Start a tradition that's unique to your relationship, like a special anniversary ritual or weekly activity.
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground">The 5:1 Ratio: A Scientific Measure of Healthy Relationships</h3>
            <p>
              One of the most significant findings from relationship science is the importance of positive to negative interactions. Dr. John Gottman's research discovered that stable, happy relationships maintain a ratio of at least five positive interactions for every negative one (5:1). Couples in distress typically have ratios closer to 1:1 or worse.
            </p>
            
            <p>
              Positive interactions include expressions of interest, affection, humor, support, empathy, and appreciation. Negative interactions include criticism, contempt, defensiveness, and stonewalling. By consciously increasing positive moments while learning constructive ways to handle inevitable conflicts, couples can significantly improve their relationship quality regardless of initial compatibility.
            </p>
            
            <div className="border rounded-lg p-6 my-8 bg-primary/5">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Compatibility Research: By the Numbers</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Couples who discuss finances regularly</span>
                    <span className="text-primary font-bold">78%</span>
                  </div>
                  <p className="text-sm">
                    According to a survey by the National Financial Educators Council, 78% of couples who discuss finances at least weekly report higher relationship satisfaction.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Importance of shared humor</span>
                    <span className="text-primary font-bold">89%</span>
                  </div>
                  <p className="text-sm">
                    A 2019 study found that 89% of long-married couples cited shared humor and laughter as a critical factor in their relationship's success.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Value alignment in successful relationships</span>
                    <span className="text-primary font-bold">94%</span>
                  </div>
                  <p className="text-sm">
                    Research from the Gottman Institute found that 94% of couples in stable, long-term relationships report strong alignment on core values and life philosophy.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">Impact of active listening</span>
                    <span className="text-primary font-bold">65%</span>
                  </div>
                  <p className="text-sm">
                    A study in the Journal of Marriage and Family found that couples who practiced active listening techniques saw a 65% improvement in conflict resolution outcomes.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              While our Love Calculator provides a fun starting point for exploring compatibility, these evidence-based approaches offer real pathways to building and maintaining meaningful connections. True compatibility isn't something you start with—it's something you create together through understanding, respect, and shared growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Calculators */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Explore More Relationship Calculators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="/twin-flame-calculator" className="block border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-medium text-lg">Twin Flame Calculator</h3>
              </div>
              <p className="text-muted-foreground">
                Discover your spiritual connection and twin flame compatibility based on numerology and birthdates.
              </p>
              <div className="mt-4 flex items-center text-primary font-medium">
                Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>
            
            <a href="/flames-calculator" className="block border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-medium text-lg">FLAMES Calculator</h3>
              </div>
              <p className="text-muted-foreground">
                Use the classic FLAMES game to playfully predict your relationship status with another person.
              </p>
              <div className="mt-4 flex items-center text-primary font-medium">
                Try Calculator <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          </div>
          
          <div className="mt-8">
            <p className="text-center text-muted-foreground">
              For more practical relationship support, explore our <a href="/half-birthday-calculator" className="text-primary hover:underline">Half Birthday Calculator</a> to find special dates to celebrate, or try our <a href="/angel-number-calculator" className="text-primary hover:underline">Angel Number Calculator</a> to explore spiritual significance in numbers you encounter.
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

export default LoveCalculatorPage;
