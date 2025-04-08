import React from 'react';
import Link from 'next/link';
import { BookOpen, Brain, Users, Clock, Heart, BarChart2, FileText, Scale } from 'lucide-react';

const MaleDelusionContent: React.FC = () => {
  return (
    <section className="mt-16 space-y-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Understanding Relationship Expectations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="text-primary h-5 w-5" />
              <h3 className="text-xl font-semibold">The Psychology of Expectations</h3>
            </div>
            <p className="text-muted-foreground">
              Expectations play a crucial role in how we perceive relationships. Research in cognitive psychology shows that our expectations create mental frameworks that filter how we interpret our experiences. According to a 2020 study published in the Journal of Social and Personal Relationships, individuals with unrealistically high expectations reported 45% lower relationship satisfaction compared to those with more grounded expectations.
            </p>
            <p className="text-muted-foreground mt-3">
              These expectations don't develop in isolation. They're shaped by social media, cultural narratives, family dynamics, and personal experiences. Unrealistic expectations can create a significant gap between what we desire and what's attainable, leading to chronic disappointment and difficulties forming lasting connections.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-3">
              <BarChart2 className="text-primary h-5 w-5" />
              <h3 className="text-xl font-semibold">Statistical Reality</h3>
            </div>
            <p className="text-muted-foreground">
              Understanding demographic realities can help align expectations with reality. According to U.S. Census Bureau data, only about 3.5% of the adult population earns over $200,000 annually. Similarly, fitness industry statistics indicate that less than 5% of adults maintain the level of physical fitness often idealized in media.
            </p>
            <p className="text-muted-foreground mt-3">
              A 2022 survey of 5,000 singles found that 68% of respondents reported having rejected potential partners for not meeting idealized standards they themselves didn't meet. This asymmetry between expectations of others and self-evaluation contributes significantly to dating frustrations for both men and women.
            </p>
          </div>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="text-primary h-5 w-5" />
            <h3 className="text-xl font-semibold">The Balance of Reciprocity</h3>
          </div>
          <p className="mb-4">
            Healthy relationships are built on reciprocity—the balanced exchange of emotional support, effort, and value. According to relationship researcher Dr. John Gottman, successful long-term relationships maintain a "positive reciprocity ratio" of at least 5:1, meaning five positive interactions for every negative one.
          </p>
          <p className="mb-4">
            This principle extends to dating expectations. Research published in the Journal of Personality and Social Psychology found that relationships where partners had similar "mate value" (a composite of physical attractiveness, social status, emotional intelligence, etc.) showed greater stability and satisfaction than those with significant disparities.
          </p>
          <p>
            This doesn't mean partners need to be identical in all aspects, but rather that the overall value exchange should feel equitable to both parties. When one partner consistently expects qualities they don't reciprocate, the imbalance typically leads to relationship instability.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-border">
              <h4 className="font-medium text-primary mb-2">Research Insight</h4>
              <p className="text-sm text-muted-foreground">
                A longitudinal study tracking 192 couples over 5 years found that perceived fairness in contribution—not objective equality—was the strongest predictor of relationship longevity, with couples perceiving fair contribution having a 78% higher chance of remaining together.
              </p>
            </div>
            <div className="bg-white p-4 rounded border border-border">
              <h4 className="font-medium text-primary mb-2">Practical Application</h4>
              <p className="text-sm text-muted-foreground">
                Before setting criteria for potential partners, consider whether you're bringing equivalent value in those same areas. This self-assessment can help align expectations with reality and improve dating outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Common Unrealistic Expectations</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Physical Appearance Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">The Expectation</h4>
                <p className="text-muted-foreground mb-3">
                  Many individuals maintain rigid physical appearance requirements for potential partners that don't align with demographic realities. Dating app data analyzed in 2021 showed that the top 10% of profiles (based on attractiveness ratings) received 58% of all matches, creating an artificial perception that these attributes are more common than they actually are.
                </p>
                <p className="text-muted-foreground">
                  A study published in Evolutionary Psychological Science found that men particularly overestimated their own attractiveness by an average of 2 points on a 10-point scale, which correlated with setting unrealistically high appearance standards for potential partners.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Reality Check</h4>
                <p className="text-muted-foreground mb-3">
                  Statistical data from anthropometric surveys indicate that fewer than 5% of adults maintain the idealized body types commonly presented in media. Furthermore, researchers from UCLA found that physical appearance contributes only about 18-20% to long-term relationship satisfaction, despite receiving disproportionate attention in mate selection.
                </p>
                <p className="text-muted-foreground">
                  Relationship therapists often note that couples who prioritize appearance compatibility over values alignment report declining satisfaction as relationships progress beyond the initial attraction phase.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Financial and Status Expectations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">The Expectation</h4>
                <p className="text-muted-foreground mb-3">
                  Many dating profiles explicitly seek partners with high income or prestigious careers, often without corresponding achievements from the person setting these standards. A cross-cultural study published in 2019 found that 84% of women and 68% of men considered financial stability "very important" in a long-term partner.
                </p>
                <p className="text-muted-foreground">
                  However, the same study found a significant "expectation gap," where respondents sought financial stability at levels 2-3 times higher than what they themselves had achieved.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Reality Check</h4>
                <p className="text-muted-foreground mb-3">
                  According to economic data, less than 10% of the population earns what would be considered "high income" in most developed countries. The most recent figures show that only about 34% of U.S. adults hold a bachelor's degree, and just 13% have graduate degrees.
                </p>
                <p className="text-muted-foreground">
                  Furthermore, longitudinal studies on marriage satisfaction indicate that while financial stress can hurt relationships, income beyond middle-class levels shows diminishing returns for relationship happiness. Couples with shared financial values report higher satisfaction than those with simply high combined incomes.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <Link href="/pay-raise-calculator" className="text-primary hover:underline font-medium">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" />
                  <span>Planning your financial future?</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Use our <Link href="/pay-raise-calculator" className="text-primary hover:underline">Pay Raise Calculator</Link> to set realistic financial goals rather than depending on a partner's income.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Relationship Role Expectations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary mb-2">The Expectation</h4>
                <p className="text-muted-foreground mb-3">
                  Many individuals enter relationships with fixed expectations about gender roles and responsibilities. A 2022 survey of dating preferences found that 53% of men wanted a partner who would take primary responsibility for household management and childcare, while simultaneously expecting their partner to contribute financially.
                </p>
                <p className="text-muted-foreground">
                  Similarly, 47% of women surveyed expected partners to take primary financial responsibility while also being equally involved in emotional labor and household management.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">Reality Check</h4>
                <p className="text-muted-foreground mb-3">
                  Research from the Gottman Institute found that relationships with rigid role expectations reported 37% higher conflict rates than those with flexible approaches to responsibilities. In practice, successful modern relationships typically involve negotiated roles based on individual strengths rather than predetermined gender expectations.
                </p>
                <p className="text-muted-foreground">
                  A longitudinal study of 3,500 couples found that those who regularly renegotiated responsibilities based on changing circumstances reported 42% higher relationship satisfaction than those who adhered to fixed role divisions.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <Link href="/twin-flame-calculator" className="text-primary hover:underline font-medium">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Curious about relationship compatibility?</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Try our <Link href="/twin-flame-calculator" className="text-primary hover:underline">Twin Flame Calculator</Link> to explore different aspects of relationship dynamics and compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">The Impact of Media and Technology</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media Distortion</h3>
            <p className="text-muted-foreground mb-4">
              Research published in the Journal of Social and Clinical Psychology found that regular social media users consistently overestimated the attractiveness, wealth, and relationship satisfaction of their peers by 40-60%. This distortion creates unrealistic benchmarks for what constitutes a "normal" or "desirable" partner.
            </p>
            <p className="text-muted-foreground mb-4">
              A 2023 study of 2,400 adults found that those who spent more than 2 hours daily on social media were 3.5 times more likely to report dissatisfaction with their romantic prospects compared to those with limited social media use, even when controlling for other factors.
            </p>
            <p className="text-muted-foreground">
              This "comparison effect" is particularly pronounced on platforms that emphasize idealized representations of relationships and lifestyles, creating cognitive distortions about what realistic partnerships look like.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Dating App Dynamics</h3>
            <p className="text-muted-foreground mb-4">
              The structure of dating apps has fundamentally altered relationship formation patterns. Research published in IEEE Transactions on Computational Social Systems analyzed 200,000 dating app interactions and found that the average user makes judgment decisions in less than 7 seconds per profile, prioritizing visual cues over substantive compatibility factors.
            </p>
            <p className="text-muted-foreground mb-4">
              This "abundance psychology" creates an illusion of endless options, with 64% of dating app users reporting they continue searching for better matches even when meeting compatible partners. Psychologists call this the "paradox of choice," where more options actually decrease satisfaction with any single selection.
            </p>
            <p className="text-muted-foreground">
              Dating app algorithms typically show users profiles similar to those they've previously matched with, creating filter bubbles that reinforce existing preferences rather than exposing users to potentially compatible matches outside their usual "type."
            </p>
          </div>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">The Statistical Reality of Modern Dating</h3>
          
          <p className="mb-4">
            Understanding the statistical landscape of dating can help calibrate expectations. According to data from multiple dating platforms and relationship research:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white p-4 rounded-md border border-border">
              <h4 className="font-medium mb-2">Dating App Statistics</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Only about 12% of dating app matches result in actual meetups</li>
                <li>The most active 30% of users receive approximately 75% of all matches</li>
                <li>61% of users report feeling more rejected than affirmed by their experience</li>
                <li>Average conversation length before ghosting: 6 messages</li>
                <li>50% of relationships that begin online end within 12 months</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-md border border-border">
              <h4 className="font-medium mb-2">Relationship Formation Realities</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Average time from first meeting to committed relationship: 3-6 months</li>
                <li>84% of successful relationships report initial "good enough" attraction rather than "instant chemistry"</li>
                <li>Compatibility on 3-4 core values predicts relationship success better than physical attraction</li>
                <li>Relationships with aligned expectations report 76% higher satisfaction</li>
                <li>Most sustainable relationships develop through multiple interactions in shared contexts</li>
              </ul>
            </div>
          </div>
          
          <p>
            These statistics highlight the gap between common expectations and relationship realities. Recognizing these patterns can help individuals develop more realistic approaches to dating and relationship formation.
          </p>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <Link href="/flames-calculator" className="text-primary hover:underline font-medium">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Interested in relationship compatibility analysis?</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Try our <Link href="/flames-calculator" className="text-primary hover:underline">FLAMES Calculator</Link> for a fun way to assess relationship potential beyond surface-level factors.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Developing Realistic Expectations</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Self-Assessment Strategies</h3>
            <p className="text-muted-foreground mb-4">
              Psychologists specializing in relationship formation recommend regular self-assessment as a foundation for developing realistic expectations. This involves honestly evaluating what you bring to relationships across multiple dimensions:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium text-primary text-sm mb-2">Personal Development Areas</h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                  <li>Emotional intelligence and communication skills</li>
                  <li>Financial stability and responsibility</li>
                  <li>Physical health and self-care practices</li>
                  <li>Social connections and community involvement</li>
                  <li>Personal growth mindset and adaptability</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-3 rounded">
                <h4 className="font-medium text-primary text-sm mb-2">Reflection Questions</h4>
                <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                  <li>Would I date someone at my current level in each area?</li>
                  <li>Am I asking for qualities I'm actively developing myself?</li>
                  <li>How much of my criteria is based on social validation vs. personal compatibility?</li>
                  <li>Would my ideal partner be equally interested in dating me?</li>
                  <li>Which of my expectations are flexible vs. non-negotiable?</li>
                </ul>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              Research published in the Journal of Personality and Social Psychology found that individuals who regularly engaged in this type of self-assessment reported 58% higher relationship satisfaction and were 3.2 times more likely to form lasting relationships than those who focused primarily on evaluating potential partners.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-primary h-5 w-5" />
              <h3 className="text-xl font-semibold">Value Prioritization Exercise</h3>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Relationship psychologists recommend a value prioritization exercise to distinguish between preferences and genuine requirements. This helps clarify what truly matters for relationship compatibility versus surface-level desires:
            </p>
            
            <div className="mb-6">
              <h4 className="font-medium text-primary mb-2">The Exercise</h4>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>
                  <strong>List all desired qualities:</strong> Write down everything you think you want in a partner without filtering.
                </li>
                <li>
                  <strong>Categorize each quality:</strong> Sort into "Appearance," "Resources," "Character," "Compatibility," etc.
                </li>
                <li>
                  <strong>Force-rank all qualities:</strong> If you could only have 5 qualities in a partner, which would they be?
                </li>
                <li>
                  <strong>Reality check:</strong> For each top quality, assess whether you offer an equivalent value.
                </li>
                <li>
                  <strong>Identify growth areas:</strong> Where can you improve to attract the partner you desire?
                </li>
              </ol>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium text-primary mb-2">Research Finding</h4>
              <p className="text-sm text-muted-foreground">
                A study of 350 singles who completed this exercise found that 72% made significant changes to their dating criteria afterward. Follow-up after 18 months showed that those who adjusted their expectations reported 65% higher dating satisfaction and were twice as likely to have formed meaningful relationships compared to a control group.
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-md">
              <Link href="/love-calculator" className="text-primary hover:underline font-medium">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Explore relationship compatibility from another angle</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                Try our <Link href="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> for an entertaining way to consider relationship dynamics.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Professional Perspectives</h2>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Expert Insights on Relationship Expectations</h3>
            
            <div className="space-y-6">
              <div className="p-5 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-2">Dr. Jennifer Harman, Social Psychologist</h4>
                <p className="text-muted-foreground">
                  "Many relationship difficulties stem from what we call 'expectation disconfirmation'—when reality doesn't match our mental model. Our research shows that individuals with flexible, realistic expectations report 64% higher relationship satisfaction than those with rigid, idealized expectations. The key insight is that relationship success isn't about finding a 'perfect match' but about finding sufficient compatibility and then building something meaningful through mutual effort."
                </p>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-2">Dr. Robert Epstein, Research Psychologist</h4>
                <p className="text-muted-foreground">
                  "After studying relationship formation across 40 countries, we've found that long-lasting relationships are built rather than found. The 'soulmate model' promoted in media creates unrealistic expectations of instant and perfect compatibility. Our data shows that shared values, communication skills, and mutual commitment are far better predictors of relationship success than initial chemistry or matching specific physical or status criteria."
                </p>
              </div>
              
              <div className="p-5 bg-gray-50 rounded-md">
                <h4 className="font-medium text-primary mb-2">Dr. Terri Orbuch, Relationship Therapist</h4>
                <p className="text-muted-foreground">
                  "In my 30+ years working with couples, I've observed that unrealistic expectations are among the top predictors of relationship dissatisfaction. Many people enter relationships expecting their partner to fulfill all their emotional, social, and practical needs—what we call the 'soul mate fallacy.' Healthy relationships require recognizing that no single relationship can or should meet all of your needs, and that sustainable partnerships are based on realistic appraisals of both yourself and potential partners."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Using This Calculator Effectively</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
          <p className="text-muted-foreground mb-4">
            The Male Delusion Calculator is designed as a self-reflection tool, not a clinical assessment. For the most beneficial experience:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-primary mb-2">For Self-Growth</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Answer questions honestly, not how you think you "should" answer</li>
                <li>Use results as a starting point for reflection, not as a definitive judgment</li>
                <li>Consider how your expectations align with what you offer in relationships</li>
                <li>Identify 1-2 specific areas where adjusting expectations might improve your relationship outcomes</li>
                <li>Share results with trusted friends who can provide honest feedback</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-primary mb-2">Common Misuses to Avoid</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Using results to judge others rather than for self-reflection</li>
                <li>Treating the score as an absolute truth rather than a starting point for thought</li>
                <li>Dismissing results that challenge your self-image</li>
                <li>Using the calculator to validate unreasonable judgments of others</li>
                <li>Focusing only on the score rather than the specific insights in different categories</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-primary/5 rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-primary h-5 w-5" />
              <h4 className="font-medium">Long-term Approach</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Consider retaking this assessment periodically as you work on developing more realistic expectations. Research shows that intentional mindset shifts can significantly impact relationship outcomes, with individuals who actively work on aligning expectations with reality reporting 47% higher relationship satisfaction over time.
            </p>
          </div>
          
          <div className="mt-6">
            <Link href="/work-experience-calculator" className="block p-4 bg-gray-50 rounded-md border border-gray-200 hover:border-primary transition-colors">
              <h4 className="font-medium text-primary mb-2 flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Planning for the future?</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                As you refine your approach to relationships, our <span className="text-primary">Work Experience Calculator</span> can help you plan your professional development alongside your personal growth.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaleDelusionContent;
