
import CalculatorLayout from '../components/CalculatorLayout';
import Flames from '../calculators/Flames';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const FlamesCalculator = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What does FLAMES stand for?',
      answer: 'FLAMES is an acronym that stands for Friends, Love, Affection, Marriage, Enemies, and Siblings. It\'s a playful game that has been popular for generations, particularly among teenagers and young adults, as a fun way to predict the nature of a relationship between two people.'
    },
    {
      question: 'How does the FLAMES calculator work?',
      answer: 'The FLAMES calculator works by counting the letters remaining after canceling out the common letters in two names. This count is then used in a counting process to strike out letters in the word "FLAMES" until only one letter remains, which determines the relationship prediction. Our calculator enhances this with compatibility percentages and detailed descriptions.'
    },
    {
      question: 'Is the FLAMES calculator accurate?',
      answer: 'The FLAMES calculator is meant for entertainment purposes only and doesn\'t have any scientific basis for predicting relationships. Real relationships are complex and develop based on many factors including communication, shared values, and mutual respect, not from name-based games. Enjoy the results for fun but don\'t make serious relationship decisions based on them.'
    },
    {
      question: 'Can I calculate FLAMES for nicknames or full names?',
      answer: 'Yes, you can use either nicknames or full names in the FLAMES calculator. What\'s most important is using the names that both individuals commonly go by. For consistency, try to either use full names for both people or nicknames for both, rather than mixing approaches.'
    },
    {
      question: 'Why do I get different results with different name variations?',
      answer: 'Different name variations (like including middle names, using nicknames, or different spellings) will change the pattern of common and unique letters, which affects the calculation. This is one reason why FLAMES results shouldn\'t be taken seriously - minor changes in how you enter the names can lead to completely different predictions.'
    },
    {
      question: 'What\'s the history behind the FLAMES game?',
      answer: 'The FLAMES game has unclear origins but has been a popular pastime among young people across many cultures for decades. It likely began as a paper-and-pencil game in schools and has evolved with technology into digital calculators. Similar name-based compatibility games exist in many cultures, showing how universal the desire is to playfully predict romantic compatibility.'
    }
  ];

  return (
    <CalculatorLayout
      title="FLAMES Calculator"
      description="Discover the playful prediction of your relationship using the classic FLAMES game."
      category="Lifestyle & Relationships"
    >
      {/* Calculator Section */}
      <section className="py-8">
        <Flames />
      </section>
      
      {/* Information Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">What is FLAMES?</h2>
          <p className="text-lg mb-6">
            FLAMES is a classic relationship prediction game that has been passed down through generations of young people. The acronym stands for Friends, Love, Affection, Marriage, Enemies, and Siblings - representing six potential relationship outcomes between two individuals.
          </p>
          <p className="text-lg mb-6">
            The game originated as a simple paper-and-pencil activity played in schools, often scribbled in notebooks between classes. Its enduring popularity stems from its simplicity and the element of surprise in its predictions, which can range from romantic connections to amusing rivalry.
          </p>
          <p className="text-lg">
            While FLAMES has no scientific basis for predicting actual compatibility, it continues to be enjoyed as a light-hearted way to speculate about relationships. Our modern calculator enhances the classic game with additional features like compatibility percentages and detailed relationship descriptions.
          </p>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">How the FLAMES Calculator Works</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Name Processing</h3>
              <p className="text-lg text-muted-foreground">
                The calculator takes the two names you enter and processes them by removing spaces and converting all letters to lowercase for consistent comparison. This standardization ensures that differences in capitalization or spacing don't affect the results.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Counting Remaining Letters</h3>
              <p className="text-lg text-muted-foreground">
                The algorithm then identifies and removes all common letters that appear in both names. After this cancellation process, it counts the total number of remaining letters. For example, if "James" and "Emily" are entered, common letters like "m" and "e" would be canceled out, leaving other unique letters to be counted.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: FLAMES Counting</h3>
              <p className="text-lg text-muted-foreground">
                Using the count of remaining letters, the calculator performs a counting process around the letters F-L-A-M-E-S, eliminating one letter at a time until only one remains. This final letter determines the relationship prediction. For example, if "F" remains, the relationship is predicted as "Friends."
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 4: Compatibility Calculation</h3>
              <p className="text-lg text-muted-foreground">
                Our enhanced calculator also generates a compatibility percentage based on factors like the proportion of common letters to total letters in both names. This adds another dimension to the classic game, giving a numerical representation of the predicted compatibility.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Step 5: Result Interpretation</h3>
              <p className="text-lg text-muted-foreground">
                Finally, the calculator presents your results with a relationship type, description, and compatibility score. While presented in an engaging way, remember that these predictions are meant for entertainment purposes only and not as serious relationship advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Relationship Types Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Understanding the Six FLAMES Relationships</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-2xl mr-2">👫</span> Friends
              </h3>
              <p className="text-muted-foreground">
                A friendship prediction suggests a companionable relationship built on mutual interests, trust, and support. While not romantic in nature, friendships are valuable connections that can last a lifetime and provide emotional fulfillment. In the FLAMES game, this outcome indicates that you might naturally relate to each other as comfortable allies.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-2xl mr-2">❤️</span> Love
              </h3>
              <p className="text-muted-foreground">
                A love prediction suggests romantic potential with deep emotional connection. This relationship type in FLAMES points to chemistry and attraction that could develop into a significant romantic partnership. While the game can't predict actual compatibility, this result playfully suggests that cupid's arrow might be pointed in your direction.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-2xl mr-2">🥰</span> Affection
              </h3>
              <p className="text-muted-foreground">
                An affection prediction indicates a relationship characterized by warmth, care, and tenderness. This might manifest as a close bond that includes elements of both friendship and attraction, but perhaps without the intensity of romantic love. In FLAMES, this suggests a comfortable, nurturing connection with potential for growth in various directions.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-2xl mr-2">💍</span> Marriage
              </h3>
              <p className="text-muted-foreground">
                A marriage prediction in FLAMES playfully suggests a relationship with long-term potential leading to formal commitment. This doesn't necessarily mean you'll actually marry this person, but rather indicates compatibility that could theoretically support a lasting partnership. It's the game's way of suggesting a harmonious match.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-2xl mr-2">⚔️</span> Enemies
              </h3>
              <p className="text-muted-foreground">
                An enemies prediction suggests a relationship with potential for conflict or opposition. Rather than taking this literally, consider it a playful indication that you might challenge each other or have contrasting personalities. Some of the most dynamic relationships involve initial friction, which can sometimes transform into other types of connections.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <span className="text-2xl mr-2">👯</span> Siblings
              </h3>
              <p className="text-muted-foreground">
                A siblings prediction indicates a familial-type bond with elements of both support and rivalry. This suggests a comfortable relationship where you might feel like family even without blood relations - understanding each other deeply while occasionally getting on each other's nerves. This comfortable familiarity can be the foundation for lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cultural Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">FLAMES Across Cultures</h2>
          <p className="text-lg mb-6">
            While the FLAMES game as we know it today has uncertain origins, similar name-based compatibility games exist across many cultures. These games reflect our universal fascination with predicting relationships and finding patterns in names.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Global Variations</h3>
              <p className="text-lg text-muted-foreground">
                In different regions, the FLAMES acronym sometimes stands for slightly different words while maintaining the same gameplay. For instance, some versions replace "Siblings" with "Sweethearts" or "Soulmates." In certain Asian countries, similar games use different letters altogether but follow comparable counting principles.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-lg text-muted-foreground">
                What began as a paper-and-pencil game has evolved with technology. Modern digital FLAMES calculators like ours enhance the experience with additional features, visualizations, and detailed interpretations that weren't possible in the original handwritten format. This evolution shows how traditional games can adapt to new mediums while preserving their core appeal.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Enduring Popularity</h3>
              <p className="text-lg text-muted-foreground">
                Despite the advent of sophisticated compatibility algorithms on dating platforms, FLAMES and similar games maintain their popularity for their simplicity and nostalgic value. The game continues to be passed down through generations, with each adding their own variations and interpretations while preserving the basic counting mechanism.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      
      {/* CTA Section */}
      <CTASection 
        title="Explore More Relationship Calculators"
        description="Discover our collection of tools designed to add fun and insight to your relationships."
        buttonText="Browse All Calculators"
        buttonLink="/calculators"
      />
    </CalculatorLayout>
  );
};

export default FlamesCalculator;
