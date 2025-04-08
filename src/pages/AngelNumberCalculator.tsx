import React from 'react';
import Link from 'next/link';
import CalculatorLayout from '@/components/CalculatorLayout';
import AngelNumberCalculator from '@/calculators/angelNumber/AngelNumberCalculator';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AngelNumberCalculatorPage: React.FC = () => {
  // FAQ data for angel numbers
  const faqs = [
    {
      question: "What are angel numbers?",
      answer: "Angel numbers are sequences of numbers that carry divine guidance by referring to specific numerological meanings. They are believed to be messages from guardian angels or spiritual guides. When you see repeating numbers like 111, 222, or 444, these are considered angel numbers with specific meanings and guidance for your life journey."
    },
    {
      question: "Why do I keep seeing the same numbers repeatedly?",
      answer: "Many spiritual believers suggest that repeatedly seeing the same number sequence is not random but a form of synchronicity or divine communication. These recurring numbers may appear when you're at a crossroads, need guidance, or as confirmation that you're on the right path. The specific number you see carries a unique message related to your current life situation."
    },
    {
      question: "What's the difference between angel numbers and numerology?",
      answer: "While both involve the spiritual significance of numbers, numerology is a broader study of how numbers influence human life, encompassing birth dates, names, and more. Angel numbers specifically refer to recurring number sequences believed to be messages from divine or spiritual guides. Numerology provides the foundation for interpreting angel numbers, but angel numbers are a specific phenomenon within the broader field of numerology."
    },
    {
      question: "How do I calculate my life path number?",
      answer: "Your life path number is calculated by reducing your birth date to a single digit (or master number 11, 22, 33). For example, if you were born on June 15, 1990, you would add 6 (June) + 1+5 (15th day) + 1+9+9+0 (1990) = 31. Then reduce 31 to a single digit: 3+1 = 4. Your life path number would be 4. Our calculator automatically performs this calculation for you."
    },
    {
      question: "What does it mean if I see 111 or 1111?",
      answer: "The number 111 or 1111 is often associated with manifestation and new beginnings. It's seen as a sign that your thoughts are manifesting rapidly into reality, so it's important to maintain positive thinking. Many interpret this sequence as a wake-up call from the universe, alerting you to pay attention to your thoughts and intentions as they are powerfully creating your reality."
    },
    {
      question: "Are angel numbers scientifically proven?",
      answer: "No, angel numbers are not scientifically proven phenomena. They belong to spiritual and metaphysical belief systems rather than empirical science. While many people report meaningful experiences with angel numbers, their interpretation falls outside the realm of scientific study and into personal faith and spiritual practices. Psychology might explain some experiences as confirmation bias or pattern recognition."
    },
    {
      question: "How should I respond when I see an angel number?",
      answer: "When you notice an angel number, many spiritual practitioners recommend taking a moment to be present and aware. Consider what you were thinking about or what situation you're currently facing. Reflect on the potential message based on the number's meaning, journal about your insights, and consider how the guidance might apply to your life. Some people also like to express gratitude for the perceived divine communication."
    },
    {
      question: "Can angel numbers predict the future?",
      answer: "Angel numbers are generally not considered predictive tools, but rather guidance for the present moment. Instead of foretelling specific events, they offer insights, reassurance, or direction based on your current life situation. They're more about supporting your spiritual journey and decision-making rather than predicting future outcomes."
    }
  ];

  const [number, setNumber] = React.useState('');
  const [meaning, setMeaning] = React.useState('');

  const calculateMeaning = () => {
    // Implement the logic to calculate the meaning of the entered number
    setMeaning('Calculating the meaning of the entered number...');
  };

  return (
    <CalculatorLayout
      title="Angel Number Calculator"
      description="Discover the spiritual meaning behind your angel numbers"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Enter Your Angel Number</h2>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter a number"
          />
          <Button onClick={calculateMeaning} className="w-full">Calculate Meaning</Button>
        </div>

        {meaning && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Angel Number {number} Meaning:</h3>
            <p className="text-gray-700">{meaning}</p>
          </div>
        )}
      </div>
      <CTASection />
    </CalculatorLayout>
  );
};

export default AngelNumberCalculatorPage;
