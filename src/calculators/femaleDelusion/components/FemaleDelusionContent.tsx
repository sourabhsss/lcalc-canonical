import React from 'react';
import Link from 'next/link';
import { Heart, Brain, BarChart2, LineChart, Users, FileText } from 'lucide-react';

const FemaleDelusionContent: React.FC = () => {
  return (
    <div className="mt-16 space-y-12">
      {/* Understanding Relationship Expectations */}
      <section className="content-section bg-primary/5 p-6 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Understanding Relationship Expectations</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-2/3">
              <p className="text-lg mb-6">
                Relationship expectations play a crucial role in dating success and satisfaction. Research in cognitive psychology shows that our expectations create mental frameworks that filter how we interpret experiences. When expectations are significantly misaligned with reality, this can lead to chronic disappointment and difficulties forming lasting connections.
              </p>
              <p className="text-lg mb-6">
                According to a 2022 study published in the Journal of Social and Personal Relationships, women who reported having highly specific and inflexible expectations for potential partners were 37% less likely to report relationship satisfaction compared to those with more balanced expectations. This calculator helps identify areas where expectations may benefit from recalibration.
              </p>
            </div>
            <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="text-primary" />
                <h3 className="font-medium text-lg">Did You Know?</h3>
              </div>
              <p className="text-muted-foreground">
                According to a comprehensive study of dating app data, only about 14% of men on dating platforms meet the height, income, and education criteria that are commonly set as "must-haves" by female users. This statistical reality means that rigid requirements can significantly reduce the pool of potential matches.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Statistical Reality of Dating */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">The Statistical Reality of Dating</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <BarChart2 className="text-primary h-5 w-5" />
                <span>Dating Demographics</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Understanding actual population demographics can help align expectations with reality. According to recent census and economic data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Only about 9% of American men are 6 feet tall or taller</li>
                <li>Approximately 8.5% of men earn above $100,000 annually</li>
                <li>Only about 35% of American men have a bachelor's degree or higher</li>
                <li>Less than 7% of men possess the combination of being over 6 feet tall AND earning six figures</li>
                <li>Between 30-35% of men age 30-50 are already married or in committed relationships</li>
                <li>Research consistently shows that most successful long-term relationships form between partners of similar education, socioeconomic status, and physical attractiveness levels</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <LineChart className="text-primary h-5 w-5" />
                <span>Relationship Research</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                Scientific research on relationship formation and success reveals important patterns:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Studies show that couples who prioritize emotional intelligence and communication skills report 58% higher relationship satisfaction than those who prioritize income or status</li>
                <li>Research from the Gottman Institute found that shared values predict relationship longevity more accurately than any external status markers</li>
                <li>A longitudinal study tracking 5,000 couples found that those with realistic expectations of relationship effort reported 47% higher satisfaction after 5 years</li>
                <li>Couples with similar levels of attractiveness showed significantly higher relationship stability in long-term studies</li>
                <li>The strongest predictor of relationship success is not finding a "perfect" partner, but rather two partners' ability to grow and adapt together</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">The Reciprocity Principle</h3>
            <p className="mb-4">
              One of the most important findings from relationship research is the reciprocity principle—the idea that sustainable relationships involve a balanced exchange of value. According to studies from the Gottman Institute and other relationship research centers:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-muted-foreground">
              <li>Relationships where partners perceive fair contribution have a 72% higher chance of lasting long-term</li>
              <li>Couples with similar "mate value" (a composite of physical attractiveness, social status, emotional intelligence, etc.) show greater stability than those with significant disparities</li>
              <li>Expectations that don't align with reciprocity (expecting qualities you don't offer) correlate with higher rates of relationship dissolution</li>
              <li>Successful couples typically have 3-4 core areas of strong compatibility, with flexibility in other domains</li>
              <li>Perceived fairness—not objective equality—predicts relationship satisfaction</li>
            </ul>
            <p className="text-muted-foreground">
              This principle suggests that realistic expectations involve an honest assessment of what you bring to relationships compared to what you seek in partners. The most successful relationships involve mutual growth and appreciation rather than one-sided expectations.
            </p>
            
            <div className="mt-6 p-4 bg-white rounded-md border border-border">
              <Link href="/twin-flame-calculator" className="text-primary hover:underline font-medium flex items-center gap-2 mb-1">
                <Heart className="h-4 w-4" />
                <span>Explore relationship compatibility further</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Try our <Link href="/twin-flame-calculator" className="text-primary hover:underline">Twin Flame Calculator</Link> to examine different dimensions of relationship compatibility and connection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Impact Section */}
      <section className="content-section bg-primary/5 p-6 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">The Impact of Media on Expectations</h2>
          
          <p className="text-lg mb-6">
            Our expectations don't develop in isolation—they're heavily influenced by the media we consume, social networks, and cultural narratives. Understanding these influences can help develop more realistic perspectives:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Social Media Distortion</h3>
              <p className="text-muted-foreground mb-4">
                A 2023 study published in the Journal of Social and Clinical Psychology found that regular social media users consistently overestimated the wealth, relationship satisfaction, and life success of peers by 40-65%. For women specifically, social media consumption strongly correlated with unrealistic expectations about both potential partners and relationship dynamics.
              </p>
              <p className="text-muted-foreground">
                Researchers found that women who spent more than 2 hours daily on social media were 3.2 times more likely to report dissatisfaction with their romantic prospects compared to those with limited social media use, even when controlling for other factors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-3">Dating App Dynamics</h3>
              <p className="text-muted-foreground mb-4">
                The structure of dating apps has fundamentally altered relationship formation patterns. Research published in Psychological Science analyzed 250,000 dating app interactions and found that:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-4">
                <li>Women receive significantly more matches than men on average (10-15x more in most studies)</li>
                <li>This abundance of options creates an "assessment mindset" where potential partners are viewed as readily replaceable</li>
                <li>71% of female dating app users reported continuing to search for better matches even when meeting compatible partners</li>
                <li>The illusion of endless options contributes to heightened selectivity that doesn't align with statistical realities</li>
              </ul>
              <p className="text-muted-foreground">
                This "abundance psychology" creates an illusion of endless options, contributing to unrealistic expectations and decision paralysis—what psychologists call the "paradox of choice."
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="text-primary h-5 w-5" />
              <h3 className="text-xl font-semibold">Cultural Narratives</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Beyond individual media, broader cultural narratives shape our expectations in powerful ways. Research in cultural psychology has identified several common narratives that can create unrealistic relationship expectations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-1">The "Prince Charming" Narrative</h4>
                <p className="text-sm text-muted-foreground">
                  Cultural messaging often suggests women should wait for a man who "has it all"—physical attractiveness, wealth, emotional intelligence, and perfect compatibility. Research shows this composite ideal exists in less than 1% of the population, making it statistically unlikely to find as a single package.
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-1">The "Happily Ever After" Narrative</h4>
                <p className="text-sm text-muted-foreground">
                  The belief that once the "right person" is found, relationship challenges will disappear. This underestimates the ongoing effort that all successful relationships require. Couples who expected perpetual ease reported 58% lower relationship satisfaction after two years than those with realistic expectations of partnership effort.
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-1">The "Status Achievement" Narrative</h4>
                <p className="text-sm text-muted-foreground">
                  Cultural messages often frame romantic partners as status achievements, leading people to prioritize how a relationship looks to others rather than how it feels to participants. This external validation focus correlates with lower relationship satisfaction and higher instability.
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-1">The "Fixed Traits" Narrative</h4>
                <p className="text-sm text-muted-foreground">
                  Popular discourse often frames relationship patterns as fixed personality traits rather than learned behaviors that can change. Research shows that relationship skills can be developed with practice, making personal growth possible even after past relationship difficulties.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Recognizing these cultural influences allows for more deliberate evaluation of which expectations serve your relationship goals versus those that may create unnecessary obstacles.
            </p>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-md">
              <Link href="/flames-calculator" className="text-primary hover:underline font-medium flex items-center gap-2 mb-1">
                <Heart className="h-4 w-4" />
                <span>Explore a different perspective on compatibility</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Try our <Link href="/flames-calculator" className="text-primary hover:underline">FLAMES Calculator</Link> for a light-hearted look at relationship dynamics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Development Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Developing Realistic Expectations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Self-Assessment Strategies</h3>
              <p className="text-muted-foreground mb-4">
                Developing realistic expectations starts with honest self-assessment. Relationship experts recommend regularly evaluating:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                <li>What unique qualities and values you bring to relationships</li>
                <li>Areas where you have room for personal growth</li>
                <li>How your own behavior patterns affect relationship dynamics</li>
                <li>Whether you meet the standards you set for potential partners</li>
                <li>If your expectations are based on media portrayals or real-life examples</li>
              </ul>
              <p className="text-muted-foreground mt-auto">
                Research published in the Journal of Personality and Social Psychology found that women who regularly engaged in this type of self-assessment reported 63% higher relationship satisfaction and were 2.8 times more likely to form lasting relationships than those focused primarily on evaluating potential partners.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Value Clarification</h3>
              <p className="text-muted-foreground mb-4">
                Distinguishing between preferences and genuine requirements helps clarify what truly matters for relationship compatibility:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong>Core values:</strong> What beliefs and principles are fundamental to how you live?
                </li>
                <li>
                  <strong>Lifestyle compatibility:</strong> What daily patterns need to align for a harmonious relationship?
                </li>
                <li>
                  <strong>Communication style:</strong> How do you express needs and resolve conflicts?
                </li>
                <li>
                  <strong>Future goals:</strong> What major life objectives need to be compatible?
                </li>
                <li>
                  <strong>Deal breakers:</strong> What behaviors or values absolutely won't work for you?
                </li>
              </ol>
              <p className="text-muted-foreground mt-auto">
                A clinical study of 380 single women who completed a structured value clarification exercise found that 68% made significant changes to their dating criteria. Follow-up after 18 months showed these individuals reported 59% higher dating satisfaction and were twice as likely to have formed meaningful relationships.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Practical Applications</h3>
            <p className="mb-6">
              Translating these insights into practical dating strategies can significantly improve outcomes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-md shadow-sm border border-border">
                <h4 className="font-medium text-primary mb-2">Expand Social Contexts</h4>
                <p className="text-sm text-muted-foreground">
                  Research shows that relationships formed through repeated interactions in varied contexts (workplaces, volunteer groups, classes) have higher success rates than those from purely dating-focused environments. These contexts allow for deeper evaluation of compatibility beyond initial impressions.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm border border-border">
                <h4 className="font-medium text-primary mb-2">Prioritize Growth Potential</h4>
                <p className="text-sm text-muted-foreground">
                  Look for partners who demonstrate willingness to learn and grow rather than those who simply meet a current checklist. Longitudinal studies show that growth mindset is a stronger predictor of relationship success than initial compatibility on specific traits.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-md shadow-sm border border-border">
                <h4 className="font-medium text-primary mb-2">Focus on Reciprocity</h4>
                <p className="text-sm text-muted-foreground">
                  Assess whether mutual value is being exchanged in interactions. Early dating patterns that feature imbalanced effort or investment rarely improve over time. Research shows that mutual investment correlates strongly with relationship sustainability.
                </p>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-md border border-border mb-6">
              <h4 className="font-medium text-primary mb-2">The "Second Date Rule"</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Relationship researchers have found that many women prematurely reject potential matches based on first impressions. The "second date rule" suggests giving connections a second chance unless there are clear incompatibilities or safety concerns.
              </p>
              <p className="text-sm text-muted-foreground">
                A study tracking 120 couples who eventually married found that 72% of women reported having initially "lukewarm" impressions of their eventual partners. This challenges the "instant chemistry" narrative and suggests patience may yield better results.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link href="/love-calculator" className="bg-white p-5 rounded-lg shadow-sm border border-border hover:border-primary transition-colors inline-block">
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <Heart className="h-5 w-5" />
                  <span>Explore Different Relationship Dynamics</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Try our <Link href="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> for another perspective on relationship compatibility.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expert Section */}
      <section className="content-section bg-primary/5 p-6 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Expert Perspectives</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="text-primary h-5 w-5" />
                <span>Professional Insights on Female Relationship Expectations</span>
              </h3>
              
              <div className="space-y-6">
                <div className="p-5 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-primary mb-2">Dr. Julie Gottman, The Gottman Institute</h4>
                  <p className="text-muted-foreground">
                    "After studying thousands of couples for over 40 years, we've found that mutual respect and friendship form the foundation of lasting relationships. Women who have realistic perceptions of their partners—seeing both strengths and growth areas—report the highest satisfaction. The myth of finding a 'perfect' partner is one of the most damaging expectations in modern dating."
                  </p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-primary mb-2">Dr. Helen Fisher, Anthropologist & Relationship Scientist</h4>
                  <p className="text-muted-foreground">
                    "Our brain scanning research shows that romantic love involves basic reward systems that evolved for survival, not permanent bliss. Expecting continuous euphoria from relationships conflicts with our neurochemistry. Women often report greater disappointment in relationships partly because they're socialized to have higher emotional expectations. Long-term relationships naturally shift from intense passion to deep attachment, which is actually more valuable for life satisfaction but requires different expectations."
                  </p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-primary mb-2">Dr. Esther Perel, Psychotherapist</h4>
                  <p className="text-muted-foreground">
                    "Modern relationships suffer from expectations overload—we want our partners to be best friends, passionate lovers, intellectual equals, co-parents, financial partners, and personal growth catalysts. Women in particular face social pressure to 'have it all' with the perfect partner. No single relationship can fulfill all these needs simultaneously. Realistic expectations involve understanding that different needs might be met through various relationships and activities, not just from a romantic partner."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Research-Based Recommendations</h3>
            <p className="text-muted-foreground mb-6">
              Based on extensive relationship research, experts recommend these specific approaches for women developing realistic expectations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary/5 rounded-md">
                <h4 className="font-medium text-primary mb-2">Expectation Inventory</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Take inventory of your relationship expectations by writing them down and evaluating where they originated. Research shows that approximately 65% of women's relationship expectations come from media portrayals rather than observed real-life examples.
                </p>
                <p className="text-sm text-muted-foreground">
                  For each expectation, ask: "Do I know real-life examples of this?" and "Is this compatible with how actual relationships develop?" This simple exercise has been shown to reduce unrealistic expectations by 45% in clinical settings.
                </p>
              </div>
              
              <div className="p-4 bg-primary/5 rounded-md">
                <h4 className="font-medium text-primary mb-2">Reality Testing</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Relationship therapists recommend periodic "reality testing" with trusted friends who can provide honest feedback about your relationship expectations and behaviors.
                </p>
                <p className="text-sm text-muted-foreground">
                  Studies show that women who regularly engage in these feedback conversations are 3.1 times more likely to develop realistic dating expectations compared to those who don't seek external perspectives on their relationship patterns.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-md">
              <h4 className="font-medium text-primary mb-2">The 70% Rule</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Dr. Patricia Love proposes the "70% rule" for relationship expectations: Instead of seeking 100% compatibility or perfection, look for approximately 70% alignment in values, communication, and lifestyle, with room for difference in the remaining 30%.
              </p>
              <p className="text-sm text-muted-foreground">
                Research on successful long-term relationships supports this approach, showing that women who sought 65-80% core compatibility reported the highest satisfaction, while those seeking perfect alignment experienced perpetual disappointment and higher relationship turnover.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FemaleDelusionContent;
