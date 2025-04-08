import React from 'react';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

const SwimPaceFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is swimming pace and why is it important?",
      answer: "Swimming pace is the time taken to swim a specific distance, typically measured in minutes and seconds per 100 meters or 100 yards. It's important because it helps swimmers track progress, set goals, and develop effective training strategies. Pace awareness also enables swimmers to distribute effort optimally during races and training sessions, preventing early fatigue and improving overall performance."
    },
    {
      question: "How do I calculate my swimming pace manually?",
      answer: "To calculate your swim pace manually, divide your total swim time by the total distance, then multiply by your preferred pace unit (typically 100m or 100y). For example, if you swim 1000 meters in 20 minutes (1200 seconds), your 100m pace would be (1200 ÷ 1000) × 100 = 120 seconds or 2 minutes per 100m."
    },
    {
      question: "How accurate is the calorie calculation in the swim pace calculator?",
      answer: "The calorie calculation provides an estimate based on average energy expenditure for swimming at moderate intensity. Individual calorie burn can vary significantly based on factors like body weight, swimming efficiency, water temperature, and effort level. For a more personalized estimate, multiply your weight in kg by 0.1 to estimate calories burned per minute of swimming. For example, a 70kg person would burn approximately 7 calories per minute swimming at moderate intensity."
    },
    {
      question: "Why might my pace be different in a 25m pool versus a 50m pool?",
      answer: "Pace differences between pool sizes typically occur because of turn frequency. In a 25m pool, you make turns more often than in a 50m pool. Turns can either speed you up (if you have strong turns and push-offs) or slow you down (if turns are a weakness). Additionally, push-offs allow for brief rest periods and underwater dolphin kicks, which can be faster than surface swimming. Elite swimmers often record faster times in 25m pools due to these factors."
    },
    {
      question: "How do different swimming strokes affect pace?",
      answer: "Different strokes have inherent efficiency differences that affect pace. Freestyle (front crawl) is typically the fastest stroke, followed by backstroke (5-10% slower), butterfly (5-15% slower), and breaststroke (15-20% slower). These differences occur due to variations in drag, propulsive efficiency, and energy requirements. When setting pace-based training goals, it's important to adjust expectations based on the stroke you're swimming."
    },
    {
      question: "What's a good swimming pace for a beginner?",
      answer: "For beginners, a good freestyle pace is typically around 2:00-3:00 minutes per 100 meters. As you develop better technique and fitness, this pace will improve. Remember that consistency in training is more important than initial pace, and improvements can be significant in the early stages of learning to swim efficiently."
    },
    {
      question: "How can I improve my swimming pace?",
      answer: "To improve your swimming pace: 1) Focus on technique refinement through coaching or video analysis, 2) Incorporate interval training with specific rest periods, 3) Add strength training for swimming-specific muscles, 4) Include threshold training at challenging but sustainable paces, and 5) Ensure adequate recovery between workouts. Consistency in training and gradual progression of intensity are key to long-term improvement."
    },
    {
      question: "How does pace differ between pool swimming and open water?",
      answer: "Open water swimming generally results in slower paces compared to pool swimming due to several factors: navigation requirements (sighting), lack of push-offs from walls, currents and waves, temperature variations, and sometimes wetsuit drag. Experienced open water swimmers typically adjust their expected pace by 5-15% slower than their pool pace for the same effort level."
    },
    {
      question: "What is negative splitting and how does it relate to pace?",
      answer: "Negative splitting is a pacing strategy where you swim the second half of a distance faster than the first half. For example, in a 400m swim, you might complete the first 200m in 3:20 and the second 200m in 3:10. This strategy helps prevent early fatigue and is often used by elite swimmers in middle and long-distance events. Our pace calculator can help you plan appropriate splits for different race distances."
    },
    {
      question: "How should I use the swim pace calculator for interval training?",
      answer: "For interval training, first determine your current pace for your chosen distance. Then, set interval targets slightly faster than this pace for shorter repetitions, or at your current pace for endurance sets. For example, if your 100m pace is 1:45, you might set up a training set like '10 × 100m on 2:00' (allowing 15 seconds rest). The calculator helps establish your baseline pace from which you can derive appropriate interval times and rest periods."
    },
    {
      question: "Can the swim pace calculator be used for triathlon training?",
      answer: "Yes, the calculator is excellent for triathlon training. It helps you estimate your swim leg completion time based on your current pace, set appropriate training intensities, and track improvements. For triathletes, it's often beneficial to calculate pace using the specific distance of your upcoming race. Additionally, consider that open water swimming in a triathlon may be 5-10% slower than your pool pace due to conditions and the need to navigate."
    },
    {
      question: "What's the difference between pace and speed in swimming?",
      answer: "Pace is the time taken to cover a specific distance (e.g., 1:30 per 100m), while speed is the distance covered in a specific time (e.g., 1.1 meters per second). They're inversely related but express the same concept in different ways. Swimmers typically think in terms of pace rather than speed, as workouts and race goals are usually expressed as target times rather than velocities. Our calculator provides both metrics for comprehensive training reference."
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <FAQSection 
          title="Frequently Asked Questions About Swimming Pace"
          faqs={faqs}
        />
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Still have questions? Try our other calculators like the{' '}
            <Link href="/tdee-calculator" className="text-primary hover:underline">TDEE Calculator</Link> or{' '}
            <Link href="/sleep-calculator" className="text-primary hover:underline">Sleep Calculator</Link> to optimize your fitness regimen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwimPaceFAQ;
