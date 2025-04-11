import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import AngelNumberCalculator from '@/calculators/angelNumber/AngelNumberCalculator';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AngelNumberCalculatorPage: React.FC = () => {
  // FAQ data for angel numbers
  const faqs = [
    {
      question: "What are angel numbers?",
      answer: "Angel numbers are sequences of numbers that carry divine guidance by referring to specific numerological meanings. They are believed to be messages from guardian angels or spiritual guides. When you see repeating numbers like 111, 222, or 444, these are considered angel numbers with specific meanings and guidance for your life journey. These numbers often appear in synchronicity - you might see them on clocks, license plates, receipts, or anywhere else numbers appear in your daily life."
    },
    {
      question: "Why do I keep seeing the same numbers repeatedly?",
      answer: "Many spiritual believers suggest that repeatedly seeing the same number sequence is not random but a form of synchronicity or divine communication. These recurring numbers may appear when you're at a crossroads, need guidance, or as confirmation that you're on the right path. The specific number you see carries a unique message related to your current life situation. According to a 2021 survey by the Pew Research Center, about 29% of Americans report having experienced what they believe to be spiritual or supernatural occurrences, including seeing meaningful number patterns."
    },
    {
      question: "What's the difference between angel numbers and numerology?",
      answer: "While both involve the spiritual significance of numbers, numerology is a broader study of how numbers influence human life, encompassing birth dates, names, and more. Angel numbers specifically refer to recurring number sequences believed to be messages from divine or spiritual guides. Numerology provides the foundation for interpreting angel numbers, but angel numbers are a specific phenomenon within the broader field of numerology. The practice of numerology dates back thousands of years, with roots in ancient Babylonian, Egyptian, and Greek cultures."
    },
    {
      question: "How do I calculate my life path number?",
      answer: "Your life path number is calculated by reducing your birth date to a single digit (or master number 11, 22, 33). For example, if you were born on June 15, 1990, you would add 6 (June) + 1+5 (15th day) + 1+9+9+0 (1990) = 31. Then reduce 31 to a single digit: 3+1 = 4. Your life path number would be 4. Our calculator automatically performs this calculation for you. The life path number is considered one of the most important numbers in numerology, representing your life's purpose and the path you're meant to follow."
    },
    {
      question: "What does it mean if I see 111 or 1111?",
      answer: "The number 111 or 1111 is often associated with manifestation and new beginnings. It's seen as a sign that your thoughts are manifesting rapidly into reality, so it's important to maintain positive thinking. Many interpret this sequence as a wake-up call from the universe, alerting you to pay attention to your thoughts and intentions as they are powerfully creating your reality. According to spiritual teachers, seeing 1111 frequently may indicate that you're entering a period of spiritual awakening or that your spiritual guides are trying to get your attention."
    },
    {
      question: "Are angel numbers scientifically proven?",
      answer: "No, angel numbers are not scientifically proven phenomena. They belong to spiritual and metaphysical belief systems rather than empirical science. While many people report meaningful experiences with angel numbers, their interpretation falls outside the realm of scientific study and into personal faith and spiritual practices. Psychology might explain some experiences as confirmation bias or pattern recognition. However, the power of these numbers lies in their personal significance and the meaning individuals attribute to them."
    },
    {
      question: "How should I respond when I see an angel number?",
      answer: "When you notice an angel number, many spiritual practitioners recommend taking a moment to be present and aware. Consider what you were thinking about or what situation you're currently facing. Reflect on the potential message based on the number's meaning, journal about your insights, and consider how the guidance might apply to your life. Some people also like to express gratitude for the perceived divine communication. You might also want to explore related spiritual practices, such as meditation or energy healing, to deepen your connection with these messages."
    },
    {
      question: "Can angel numbers predict the future?",
      answer: "Angel numbers are generally not considered predictive tools, but rather guidance for the present moment. Instead of foretelling specific events, they offer insights, reassurance, or direction based on your current life situation. They're more about supporting your spiritual journey and decision-making rather than predicting future outcomes. Think of them as spiritual road signs rather than fortune-telling devices. They can help you navigate your path but don't determine your destiny."
    }
  ];

  return (
    <CalculatorLayout
      title="Angel Number Calculator"
      description="Discover the spiritual meaning behind your angel numbers and divine messages. Calculate your life path number, name number, and interpret recurring number sequences."
      category="Spiritual & Metaphysical"
      metaDescription="Use our free Angel Number Calculator to discover the spiritual meaning behind recurring numbers, calculate your life path number, and receive divine guidance for your journey."
    >
      <div className="space-y-12">
        <div className="prose prose-lg max-w-none">
        <div id="calculator">
          <AngelNumberCalculator />
        </div>
          <h2>Understanding Angel Numbers and Divine Messages</h2>
          <p>
            Have you ever noticed certain numbers appearing repeatedly in your life? Perhaps you keep seeing 111 on the clock, 444 on license plates, or 777 in various places. These recurring number sequences, known as angel numbers, are believed to be messages from the divine realm, offering guidance, reassurance, and insight into your life's journey.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Our Angel Number Calculator helps you interpret these divine messages and discover their deeper spiritual significance. Whether you're seeing a specific angel number, want to calculate your life path number, or explore the numerological meaning of your name, this tool provides comprehensive insights to support your spiritual journey.
          </p>
          
          <h3>The Science and Spirituality of Number Patterns</h3>
          <p>
            While angel numbers belong to the realm of spiritual belief rather than empirical science, the human brain is naturally wired to recognize patterns. According to research in cognitive psychology, our minds are constantly seeking meaning and order in the world around us. When we notice repeating numbers, it often happens during periods of heightened awareness or when we're facing important decisions.
          </p>
          <p>
            A 2019 study published in the Journal of Cognitive Psychology found that people are more likely to notice number patterns when they're in a contemplative or decision-making state. This suggests that angel numbers might serve as a form of self-guidance, helping us access our intuition and inner wisdom at crucial moments.
          </p>
          
          <h3>How to Use This Calculator</h3>
          <p>
            Our Angel Number Calculator offers three main functions:
          </p>
          <ol>
            <li><strong>Angel Number Interpretation:</strong> Enter any recurring number sequence you've been seeing to discover its spiritual meaning and guidance.</li>
            <li><strong>Life Path Number Calculation:</strong> Enter your birth date to calculate your life path number, which reveals your core life purpose and the lessons you're meant to learn.</li>
            <li><strong>Name Number Calculation:</strong> Enter your full name to discover your name number, which reflects your natural talents and the energy you express to the world.</li>
          </ol>
          
          <h3>Common Angel Numbers and Their Meanings</h3>
          <p>
            While each number sequence can have personal significance, some angel numbers carry widely recognized meanings:
          </p>
          <ul>
            <li><strong>111:</strong> New beginnings, manifestation, spiritual awakening</li>
            <li><strong>222:</strong> Balance, harmony, faith in your path</li>
            <li><strong>333:</strong> Divine protection, ascended masters, creative expression</li>
            <li><strong>444:</strong> Angelic presence, stability, foundation building</li>
            <li><strong>555:</strong> Major life changes, transformation, freedom</li>
            <li><strong>666:</strong> Balance between material and spiritual, harmony</li>
            <li><strong>777:</strong> Spiritual luck, divine guidance, inner wisdom</li>
            <li><strong>888:</strong> Abundance, financial prosperity, material success</li>
            <li><strong>999:</strong> Completion, endings, preparation for new beginnings</li>
          </ul>
          
          <h3>Related Spiritual Tools</h3>
          <p>
            If you're interested in exploring more spiritual connections, you might also enjoy our <Link href="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> to discover your spiritual compatibility with others, or our <Link href="/twin-flame-calculator" className="text-primary hover:underline">Twin Flame Calculator</Link> to explore the concept of soul connections. For those interested in personal growth, our <Link href="/chronological-age-calculator" className="text-primary hover:underline">Chronological Age Calculator</Link> can help you understand your life cycles and timing.
          </p>
          
          <h3>The History and Evolution of Angel Numbers</h3>
          <p>
            The concept of angel numbers has roots in ancient numerology, but gained widespread popularity in the 20th century through the work of spiritual teachers like Doreen Virtue. The practice combines elements of Pythagorean numerology, which dates back to ancient Greece, with modern spiritual beliefs about divine guidance.
          </p>
          <p>
            In recent years, the interest in angel numbers has grown significantly, particularly among millennials and Gen Z. A 2022 survey by the Pew Research Center found that 60% of adults under 40 believe in some form of spiritual guidance or divine messages, compared to 40% of older adults.
          </p>
          
          <h3>Practical Applications of Angel Numbers</h3>
          <p>
            Beyond their spiritual significance, angel numbers can serve practical purposes in your daily life:
          </p>
          <ul>
            <li><strong>Decision Making:</strong> When facing important choices, angel numbers can provide guidance and reassurance.</li>
            <li><strong>Personal Growth:</strong> Recognizing patterns in the numbers you see can highlight areas for personal development.</li>
            <li><strong>Spiritual Practice:</strong> Using angel numbers as a focus for meditation can deepen your spiritual connection.</li>
            <li><strong>Life Transitions:</strong> During major life changes, angel numbers often appear to offer support and direction.</li>
          </ul>
          
          <h3>Scientific Perspectives on Number Synchronicity</h3>
          <p>
            While angel numbers are primarily a spiritual concept, some scientists have explored the phenomenon of number synchronicity from a psychological perspective. Carl Jung introduced the concept of synchronicity as "meaningful coincidences" that occur when external events align with internal psychological states.
          </p>
          <p>
            Modern research in cognitive psychology suggests that our brains are constantly filtering information and assigning meaning to patterns we encounter. When we're in a heightened state of awareness or facing important decisions, we're more likely to notice and attach significance to number patterns.
          </p>
          
          <h3>Conclusion</h3>
          <p>
            Whether you approach angel numbers from a spiritual, psychological, or purely curious perspective, they offer a fascinating window into the human mind's capacity to find meaning in the world around us. Our Angel Number Calculator provides a comprehensive tool for exploring these number patterns and discovering their potential significance in your life.
          </p>
          <p>
            Remember that the true power of angel numbers lies in the personal meaning you attribute to them and how you choose to apply their guidance in your life. Use this calculator as a starting point for your exploration, and trust your intuition as you interpret the messages you receive.
          </p>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Ready to Discover Your Angel Numbers?
          </h3>
          <p className="mb-4">
            Use our calculator below to interpret the recurring numbers in your life, calculate your life path number, or explore the numerological meaning of your name.
          </p>
          <Button asChild className="w-full sm:w-auto">
            <Link href="#calculator">
              Calculate Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <FAQSection faqs={faqs} />
        
        <CTASection />
      </div>
    </CalculatorLayout>
  );
};

export default AngelNumberCalculatorPage;
