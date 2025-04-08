
import React from 'react';
import FAQSection from '@/components/FAQSection';

const DunkFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What height do you need to be to dunk a basketball?",
      answer: "There's no absolute minimum height requirement for dunking. While being taller generally makes dunking easier, players of all heights have successfully dunked basketballs. NBA player Spud Webb dunked at just 5'7\", while Brandon Todd, at 5'5\", trained specifically to dunk. That said, most dunkers are at least 5'10\" or taller. The key factors are your standing reach, vertical leap, and hand size. For example, a 5'10\" person with exceptionally long arms and a 36-inch vertical leap can likely dunk, while a 6'2\" person with short arms and a 20-inch vertical leap might struggle."
    },
    {
      question: "How high do you need to jump to dunk?",
      answer: "The vertical leap required to dunk depends on your standing reach and the type of dunk you want to perform. To dunk, your reach at the peak of your jump must exceed the rim height (10 feet or 120 inches) plus half the basketball diameter (about 4.7 inches). So if your standing reach is 8 feet (96 inches), you would need a vertical leap of at least 29 inches to perform a basic dunk. More advanced dunks require additional height—a windmill might need 4-6 inches more, while a between-the-legs dunk might require 8-10 inches more than a basic dunk."
    },
    {
      question: "Can I increase my vertical leap with training?",
      answer: "Yes, vertical leap can be significantly improved with proper training. Most people can gain 4-8 inches of vertical jump height with 8-12 weeks of dedicated training. A comprehensive approach includes strength training (squats, deadlifts), plyometrics (box jumps, depth jumps), technique work, and proper recovery. Genetic factors do influence your maximum potential, but almost everyone has room for substantial improvement. Research shows that beginners often see the most dramatic gains, sometimes adding 6-10 inches to their vertical with proper training, while advanced athletes might see more modest 2-4 inch improvements with specialized training."
    },
    {
      question: "Is dunking bad for your knees?",
      answer: "Dunking itself isn't inherently bad for your knees when performed with proper technique and landing mechanics. However, the impact from repeated jumping and landing can place stress on your joints. To minimize risk: 1) Develop proper landing technique—land softly with bent knees to absorb impact, 2) Build adequate leg strength to support your joints, 3) Don't overdo it—allow for recovery between jumping sessions, and 4) Wear quality basketball shoes with good cushioning. Pre-existing knee conditions may be aggravated by dunking activities, so consult a healthcare professional if you have concerns about joint health."
    },
    {
      question: "What's the difference between a one-foot and two-foot jump?",
      answer: "One-foot and two-foot jumping are different techniques with distinct advantages: A one-foot jump (running jump) allows you to convert horizontal momentum into vertical height, often resulting in higher jumps for many athletes. It's ideal for dunking after a drive or on a fast break. A two-foot jump (power jump) provides more stability and control, making it better for technical dunks requiring precision. It typically allows for more balanced body positioning. Most people naturally favor one style over the other based on body mechanics, but elite jumpers train both techniques. One-foot jumpers often benefit from speed training, while two-foot jumpers typically benefit from strength and plyometric training."
    },
    {
      question: "How is standing reach measured?",
      answer: "Standing reach is measured by standing flat-footed (in socks or barefoot) on a hard surface with your feet together, then reaching straight up with your dominant hand as high as possible without lifting your heels. The distance from the floor to the highest point your fingertips reach is your standing reach. For accurate measurement: 1) Stand against a wall, 2) Reach up as high as possible while keeping your shoulders level and feet flat, 3) Have someone mark or measure the highest point, and 4) Take multiple measurements and use the average. Standing reach is typically about 1.33 times a person's height, though this varies based on individual arm length proportions."
    },
    {
      question: "What's the average vertical leap for different age groups?",
      answer: "Vertical leap varies by age, gender, and activity level. For untrained males: Teenagers (13-19): 14-20 inches, Young adults (20-29): 16-22 inches, Adults (30-39): 14-20 inches, Middle-aged (40-49): 12-18 inches, Seniors (50+): 8-14 inches. For untrained females, values are typically 4-6 inches lower across all age groups. Athletes across all ages demonstrate higher values, with elite basketball and volleyball players often having vertical leaps of 28-40+ inches regardless of age. Peak jumping ability typically occurs between ages 19-28 for most individuals, after which there's a gradual decline without specific training to maintain explosiveness."
    },
    {
      question: "Should I train differently for one-foot versus two-foot dunking?",
      answer: "Yes, training should be somewhat specialized depending on your jumping style: For one-foot jumping: Focus on reactive strength and elasticity with exercises like single-leg bounds, depth jumps to single-leg landings, and sprint training. Work on approach speed and penultimate step technique. For two-foot jumping: Emphasize maximal strength with squats, trap bar deadlifts, and heavy hip thrusts. Include vertical-focused plyometrics like squat jumps and depth jumps with two-foot landings. However, a complete training program should include elements for both jumping styles, as the underlying physiological adaptations are beneficial regardless of your preferred technique. The ratio might be 70/30 in favor of your dominant jumping style."
    },
    {
      question: "Can shorter people with average genetics really dunk with training?",
      answer: "Yes, shorter individuals with average genetics can dunk with dedicated training, though it requires more work than for taller people. Success stories include 5'5\" Brandon Todd and numerous sub-6-foot dunkers. The keys to success include: 1) Long-term commitment (often 6-12+ months of training), 2) Optimized training program focusing on strength, plyometrics, and jumping technique, 3) Maintaining low body fat to improve power-to-weight ratio, and 4) Learning optimal dunking technique. It's important to set realistic expectations—a 5'6\" person might need a 38\"+ vertical leap to dunk, which is exceptional but achievable with proper training for those willing to put in the consistent effort."
    },
    {
      question: "How does body weight affect vertical jump and dunking ability?",
      answer: "Body weight significantly impacts vertical jump and dunking ability due to the power-to-weight ratio. Excess body fat acts as dead weight that must be lifted against gravity without contributing to force production. Research shows that reducing body fat percentage (while maintaining muscle mass) can improve vertical jump height—each 1% reduction in body fat can potentially add 0.5-1 inch to your vertical jump. However, there's a balance: losing too much weight can reduce overall strength. The optimal approach is to achieve an athletic body composition (10-15% body fat for men, 18-22% for women) while focusing on strength and power development. Many professional dunkers maintain very lean physiques precisely because it maximizes their jumping ability."
    }
  ];

  return <FAQSection faqs={faqs} title="Dunk Calculator: Frequently Asked Questions" />;
};

export default DunkFAQ;
