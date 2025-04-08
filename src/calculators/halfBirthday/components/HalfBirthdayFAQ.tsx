import React from 'react';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

const HalfBirthdayFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is a half birthday?",
      answer: "A half birthday marks the date exactly six months after your birthday. For example, if you were born on January 15, your half birthday would fall on July 15. Half birthdays are sometimes celebrated, especially for children whose birthdays fall during holiday seasons or summer breaks when friends might be unavailable for celebrations."
    },
    {
      question: "Why do people celebrate half birthdays?",
      answer: "Half birthdays are celebrated for various reasons: for children born during school holidays who want to celebrate with classmates, for people born in winter who want a warm-weather celebration option, for tracking developmental milestones at 6-month intervals, or simply as an extra occasion to celebrate. They're particularly popular for children under 10, who often feel that waiting a full year between birthdays is too long."
    },
    {
      question: "How do you celebrate a half birthday?",
      answer: "Half birthday celebrations are typically more casual than regular birthdays. Common ways to celebrate include having a half cake or cupcake (either cut in half or semicircle-shaped), giving a small gift, having a 'half party' with half-themed decorations, or doing a special activity the person enjoys. Some families serve half portions of food, celebrate for half a day, or use 'half' as a theme throughout decorations and activities."
    },
    {
      question: "How do you calculate a half birthday with leap years?",
      answer: "When calculating a half birthday, our calculator accounts for different month lengths and leap years. If your birthday is on August 31, your half birthday would technically fall on February 31—which doesn't exist. In this case, the half birthday would be February 28 (or February 29 in leap years). The calculator handles these edge cases automatically to ensure accurate results regardless of birth date."
    },
    {
      question: "Is a half birthday exactly 182.5 days after a birthday?",
      answer: "Not always. A half birthday is typically calculated as exactly 6 months after your birthday, but since months have different numbers of days, this isn't exactly half of 365 days. Depending on which months are involved, a half birthday might be 181, 182, or 184 days after the original birthday. In leap years, these numbers may be adjusted by one day. Most people use the simpler 'add 6 months' method rather than counting exact days."
    },
    {
      question: "At what age should you stop celebrating half birthdays?",
      answer: "There's no set age to stop celebrating half birthdays—it's entirely a personal or family choice. Many families celebrate children's half birthdays until around age 10, while others continue the tradition indefinitely. Some adults enjoy acknowledging their half birthdays as a lighthearted way to break up the year, especially those whose birthdays fall during busy holiday seasons. Half birthdays can also serve as useful mid-year check-in points for personal goals at any age."
    },
    {
      question: "Are there cultural traditions around half birthdays?",
      answer: "While half birthdays as we know them today are primarily observed in Western cultures, various cultures have traditions that mark interim periods between birthdays. In the Netherlands, 'Halfverjaardag' celebrations are common for children. Japan's 'Hachi-go-san' (7-5-3) celebrations, Korea's 'Baek-il' (100th day) observances, and various naming day traditions also create multiple age-related celebrations throughout the year, though they may not be specifically tied to the half-year mark."
    },
    {
      question: "How are half birthdays celebrated in schools?",
      answer: "Many schools, particularly in early education, acknowledge half birthdays for students whose actual birthdays fall during summer break or holidays. Typical school half birthday celebrations might include wearing a special crown or badge, bringing half cupcakes for classmates, having special privileges for half a day, or receiving a card signed by classmates. According to surveys, approximately 63% of elementary school teachers report acknowledging half birthdays for students with out-of-school-year birthdays."
    },
    {
      question: "Can I use the half birthday calculator for someone else's birthday?",
      answer: "Absolutely! Our half birthday calculator works for any birthdate you enter. Whether you're calculating your own half birthday, your child's, a friend's, or planning for multiple family members, simply enter each birthdate separately to find the corresponding half birthday. This can be particularly useful for parents planning celebrations for children, teachers organizing classroom recognition, or friends arranging surprise half-birthday gatherings."
    },
    {
      question: "Is there a difference between a half-birthday and a half-anniversary?",
      answer: "Yes, although both mark a six-month interval. A half birthday occurs six months after a person's birthdate and celebrates their age at the halfway point to their next birthday. A half-anniversary, on the other hand, commemorates six months after a significant event such as a wedding, relationship milestone, or business opening. Both follow the same calculation method (adding six months to the original date) but celebrate different types of occasions."
    },
    {
      question: "What should I do if my half birthday falls on a day that doesn't exist?",
      answer: "If your half birthday would fall on a day that doesn't exist (like September 31 or February 30), the convention is to use the last day of that month instead. For example, if your birthday is March 31, your half birthday would be September 30, since September only has 30 days. Similarly, if your birthday is August 29, 30, or 31, your half birthday would fall on February 28 (or February 29 in leap years). Our calculator automatically makes these adjustments for accurate results."
    },
    {
      question: "Can half birthdays help with child development?",
      answer: "Child development experts suggest that half birthdays can indeed support development in several ways. For young children who have difficulty conceptualizing long time periods, half birthdays break down the year into more manageable segments, helping develop time awareness. They also provide structured opportunities to acknowledge growth and new skills, which can boost confidence. Additionally, half birthdays offer opportunities for social connection and can help children born during school breaks experience the important social milestone of in-school celebrations."
    },
    {
      question: "How do half birthdays relate to other special dates?",
      answer: "Half birthdays are part of a broader category of personal milestone dates that mark intervals in a person's life. They relate to quarter birthdays (3 months after birth date), three-quarter birthdays (9 months after), and of course, full birthdays. They're similar in concept to other interval-based celebrations like 6-month anniversaries, 100-day celebrations, or semi-annual events. For calculating other important interval dates, visit our <Link href='/work-experience-calculator' className='text-primary hover:underline'>Work Experience Calculator</Link> which can help determine exact durations between any two dates."
    }
  ];

  return <FAQSection faqs={faqs} title="Half Birthday Calculator: Frequently Asked Questions" />;
};

export default HalfBirthdayFAQ;
