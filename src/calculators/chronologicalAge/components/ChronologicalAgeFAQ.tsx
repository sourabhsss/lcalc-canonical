
import React from 'react';
import FAQSection from '@/components/FAQSection';

const ChronologicalAgeFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is chronological age?",
      answer: "Chronological age is the amount of time that has passed since a person's birth. It's typically expressed in years, months, and days, and is calculated as the difference between the current date and the birth date. Unlike concepts such as mental age, developmental age, or biological age, chronological age is a straightforward measurement of elapsed time."
    },
    {
      question: "Why is calculating chronological age precisely important?",
      answer: "Precise chronological age calculations are important in many contexts, including medical assessments (growth charts, developmental screening, medication dosing), educational placement (school enrollment eligibility, grade placement), legal matters (age of consent, retirement benefits, eligibility for services), and research studies. In early childhood particularly, developmental milestones are often tied to specific age ranges in months rather than years."
    },
    {
      question: "How does the Chronological Age Calculator work?",
      answer: "Our calculator determines the exact time span between any two dates (typically a birth date and the current date) and expresses the result in years, months, and days. It takes into account varying month lengths and leap years to give you the most accurate calculation possible. The algorithm first calculates complete years, then complete months, and finally the remaining days."
    },
    {
      question: "Is chronological age the same as biological age?",
      answer: "No. Chronological age simply measures the time elapsed since birth, while biological age (sometimes called physiological age) refers to how old a person seems based on biomarkers and physical condition. Two people with the same chronological age can have very different biological ages based on genetics, lifestyle factors, and overall health. Biological age is considered by some researchers to be a better predictor of mortality risk than chronological age."
    },
    {
      question: "How is age calculated differently around the world?",
      answer: "While most countries now use the international standard of calculating age from birth date, some cultural traditions have different methods. In traditional East Asian age reckoning (used in Korea, China, and Japan), a person is considered one year old at birth, and everyone becomes a year older on New Year's Day rather than individual birthdays. In 2022, South Korea officially standardized its age-counting system to align with the international standard. Some cultures also use lunar calendars rather than solar calendars for age calculation."
    },
    {
      question: "What is 'adjusted age' or 'corrected age' for premature babies?",
      answer: "For babies born prematurely (before 37 weeks gestation), healthcare providers often use 'adjusted age' or 'corrected age' during the first 2-3 years of life. This is calculated by subtracting the number of weeks of prematurity from the chronological age. For example, a 6-month-old baby who was born 8 weeks early would have an adjusted age of approximately 4 months. This adjustment provides a more accurate basis for evaluating development and growth."
    },
    {
      question: "How are leap years handled in age calculations?",
      answer: "Our Chronological Age Calculator properly accounts for leap years when calculating the span between two dates. For people born on February 29 (leap day), some jurisdictions consider March 1 to be their legally recognized birthday in non-leap years, while others use February 28. Either way, our calculator will give you the exact years, months, and days between the selected dates, accounting for all leap years in between."
    },
    {
      question: "Can I calculate age between any two dates, not just from birth to now?",
      answer: "Yes, our calculator allows you to determine the time span between any two dates. While it's commonly used to calculate age from birth date to the current date, you can also use it to find the duration between any historical dates, future planning dates, or other significant time points."
    },
    {
      question: "When are precise months and days important in age calculation?",
      answer: "Precise calculation including months and days is particularly important for: 1) Infants and young children, where developmental milestones are often specified in months; 2) Medical assessments where growth percentiles depend on exact age; 3) Educational cut-off dates that determine school eligibility; 4) Legal contexts where rights or benefits begin on a specific birthdate; and 5) Research studies requiring precise age grouping."
    },
    {
      question: "Does time of day affect chronological age calculation?",
      answer: "Standard chronological age calculations typically don't account for the specific time of day a person was born, only the date. However, in some contexts (particularly medical research or highly precise developmental studies), time of birth might be considered when extremely precise age calculations are needed. Our calculator focuses on date-based calculations, which is sufficient for most purposes."
    },
    {
      question: "What is the difference between chronological age and developmental age?",
      answer: "Chronological age is simply how much time has passed since birth, while developmental age refers to the age at which a child is functioning based on typical developmental milestones. A child might have a chronological age of 4 years but demonstrate language skills typical of a 5-year-old (advanced developmental age in language) and motor skills typical of a 3-year-old (delayed developmental age in motor skills). Developmental assessments often compare a child's abilities against what's typical for their chronological age."
    },
    {
      question: "How is chronological age used in educational settings?",
      answer: "In educational settings, chronological age is used to determine: 1) School entry eligibility (many districts have cutoff dates requiring children to be 5 years old by a specific date to enter kindergarten); 2) Grade placement and promotion; 3) Age-appropriate curriculum and expectations; 4) Standardized test norms and interpretation; 5) Eligibility for certain special education services; and 6) Sports team eligibility in age-grouped competitions."
    }
  ];

  return <FAQSection title="Chronological Age Calculator: Frequently Asked Questions" faqs={faqs} />;
};

export default ChronologicalAgeFAQ;
