
import React from 'react';
import FAQSection from '@/components/FAQSection';

const TDEEFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is TDEE and how is it different from BMR?",
      answer: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day, including all activities. BMR (Basal Metabolic Rate) is the number of calories your body needs at complete rest just to maintain basic functions like breathing and circulation. TDEE includes your BMR plus additional calories burned through daily activities, exercise, and digesting food."
    },
    {
      question: "How accurate is the TDEE calculator?",
      answer: "Our TDEE calculator provides a scientifically-based estimate using the Mifflin-St Jeor equation, which research shows is one of the most accurate predictive equations for the general population. However, it's still an estimate and individual metabolic rates can vary by up to 200-300 calories in either direction. The best approach is to use the calculator as a starting point, then track your weight over 2-3 weeks and adjust your calorie intake as needed based on your results."
    },
    {
      question: "Should I eat exactly my TDEE number of calories every day?",
      answer: "It depends on your goal. If you want to maintain your current weight, then yes, eating at your TDEE is appropriate. For weight loss, you'd eat below your TDEE (typically 300-500 calories less), and for weight gain or muscle building, you'd eat above your TDEE (typically 300-500 calories more). Remember that these numbers can be averaged over a week, so daily fluctuations are normal and expected."
    },
    {
      question: "Do I need to recalculate my TDEE regularly?",
      answer: "Yes, you should recalculate your TDEE whenever there's a significant change in your weight (every 10-15 pounds), activity level, or fitness routine. As you lose or gain weight, your energy requirements change. Additionally, factors like increased muscle mass, different exercise intensity, or changes in overall activity level will affect your TDEE."
    },
    {
      question: "Why did my weight loss stall even though I'm eating below my TDEE?",
      answer: "Weight loss plateaus can occur for several reasons: 1) Metabolic adaptation - your body becomes more efficient and burns fewer calories, 2) Water retention masking fat loss, 3) Inaccurate calorie tracking - most people underestimate their intake by 20-30%, 4) Reduced NEAT - unconsciously moving less when in a caloric deficit, or 5) Changes in body composition - gaining muscle while losing fat. Try recalculating your TDEE, ensuring accurate tracking, and possibly incorporating refeed days or diet breaks."
    },
    {
      question: "How does exercise affect my TDEE?",
      answer: "Exercise increases your TDEE by burning additional calories during the activity and potentially boosting your metabolism temporarily afterward (particularly with high-intensity or resistance training). Our calculator accounts for this through the activity level multiplier. However, be careful not to double-count exercise calories if you're using a fitness tracker, as your selected activity level already factors in your regular exercise habits."
    },
    {
      question: "Should I prioritize diet or exercise for changing my TDEE?",
      answer: "Both diet and exercise play important roles, but for different purposes. Diet (caloric intake) is generally more efficient for creating the energy deficit needed for weight loss, while exercise helps preserve muscle mass, improves body composition, and provides numerous health benefits beyond calories burned. The most effective approach combines both: moderate caloric adjustment through diet and regular physical activity for optimal health and sustainable results."
    },
    {
      question: "Can my TDEE change day to day?",
      answer: "Yes, your actual energy expenditure fluctuates daily based on activity level, types of food consumed (thermic effect), stress, sleep quality, and even environmental temperature. However, these fluctuations are typically relatively small. For practical purposes, using an average TDEE and focusing on weekly calorie targets rather than daily perfect adherence is often more sustainable and effective."
    },
    {
      question: "How does age affect my TDEE?",
      answer: "As you age, your TDEE typically decreases due to several factors: loss of muscle mass (which reduces BMR), hormonal changes, and often decreased activity levels. Research suggests metabolism decreases approximately 1-2% per decade after early adulthood. This is why maintaining muscle mass through resistance training becomes increasingly important as you age, helping to mitigate this decline."
    },
    {
      question: "What's the relationship between macronutrients and TDEE?",
      answer: "While total calories matter most for weight management, macronutrients (protein, carbs, fat) influence TDEE in subtle ways. Protein has the highest thermic effect, burning about 20-30% of its calories during digestion versus 5-10% for carbs and 0-3% for fats. Additionally, adequate protein helps preserve muscle mass during weight loss, which helps maintain a higher BMR. Carbohydrate intake can support higher intensity exercise, potentially increasing activity calorie burn."
    },
    {
      question: "How much of a calorie deficit is safe for weight loss?",
      answer: "Most nutrition experts recommend a moderate deficit of 300-500 calories per day (about 10-20% below your TDEE) for sustainable weight loss of 0.5-1 pound per week. Larger deficits may accelerate short-term weight loss but often lead to greater muscle loss, metabolic adaptation, nutritional deficiencies, and lower adherence rates. Very low calorie diets (<1200 calories for women, <1500 for men) should only be followed under medical supervision."
    },
    {
      question: "Can I build muscle in a calorie deficit?",
      answer: "Yes, but it's usually limited to specific circumstances: beginners to resistance training, those returning after a break, individuals with significant fat stores, or those taking performance-enhancing substances. For most experienced lifters, a modest calorie surplus combined with progressive resistance training provides the optimal environment for muscle growth. During a calorie deficit, prioritizing adequate protein (1.6-2.2g per kg of body weight) and maintaining training intensity helps preserve existing muscle."
    }
  ];

  return (
    <div className="mt-12">
      <FAQSection 
        title="Frequently Asked Questions About TDEE" 
        faqs={faqs} 
      />
    </div>
  );
};

export default TDEEFAQ;
