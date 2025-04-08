
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Dumbbell, Scale, Clock, Flame, Apple } from 'lucide-react';

const TDEEContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <h2 className="text-2xl font-bold">Understanding Your Total Daily Energy Expenditure (TDEE)</h2>
      
      <div className="prose max-w-none">
        <p>
          Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns throughout the day. Understanding your TDEE is fundamental to creating effective nutrition and fitness plans, whether your goal is weight loss, muscle gain, or maintaining your current weight. This comprehensive guide explains everything you need to know about TDEE, how it's calculated, and how to apply this knowledge to achieve your health and fitness goals.
        </p>
        
        <h3 className="text-xl font-semibold mt-8">What is TDEE and Why Does It Matter?</h3>
        
        <p>
          Your TDEE represents the sum total of calories your body expends in a 24-hour period, accounting for all activities and bodily functions. This includes everything from the energy required to keep your heart beating to the calories burned during your workout. Think of TDEE as your body's daily energy budget – it's the number of calories you need to consume to maintain your current weight.
        </p>
        
        <p>
          TDEE is comprised of several components:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Basal Metabolic Rate (BMR)</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                The calories your body needs to perform basic life-sustaining functions like breathing, circulating blood, and cell production. BMR typically accounts for 60-70% of your TDEE and continues even when you're completely at rest.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Apple className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Thermic Effect of Food (TEF)</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                The energy required to digest, absorb, and process the nutrients in the food you eat. TEF typically accounts for about 10% of your TDEE, though it varies based on the macronutrient composition of your diet.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Dumbbell className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Exercise Activity (EA)</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Calories burned during intentional physical exercise like running, weight training, or cycling. This component varies significantly from person to person based on exercise frequency, duration, and intensity.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">Non-Exercise Activity Thermogenesis (NEAT)</h4>
              </div>
              <p className="text-muted-foreground text-sm">
                Energy expended for everything that is not sleeping, eating, or sports-like exercise. This includes activities like walking, fidgeting, typing, cleaning, and even standing. NEAT can vary dramatically between individuals and is a significant factor in weight management.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <h3 className="text-xl font-semibold mt-8">How TDEE Is Calculated</h3>
        
        <p>
          Our TDEE calculator uses the Mifflin-St Jeor equation to first determine your Basal Metabolic Rate (BMR). This equation is widely regarded as the most accurate for estimating BMR in the general population:
        </p>
        
        <div className="bg-primary/5 p-4 rounded-md my-4 font-mono text-sm">
          <p><strong>For men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5</p>
          <p><strong>For women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161</p>
        </div>
        
        <p>
          After calculating your BMR, we multiply it by an activity factor based on your typical physical activity level:
        </p>
        
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>Sedentary (little or no exercise):</strong> BMR × 1.2</li>
          <li><strong>Lightly active (light exercise 1-3 days/week):</strong> BMR × 1.375</li>
          <li><strong>Moderately active (moderate exercise 3-5 days/week):</strong> BMR × 1.55</li>
          <li><strong>Very active (hard exercise 6-7 days/week):</strong> BMR × 1.725</li>
          <li><strong>Extremely active (very hard exercise, physical job or training twice a day):</strong> BMR × 1.9</li>
        </ul>
        
        <p>
          The result gives you an estimate of your TDEE, representing the number of calories you need daily to maintain your current weight.
        </p>
        
        <h3 className="text-xl font-semibold mt-8">Real-World Applications of TDEE Knowledge</h3>
        
        <h4 className="text-lg font-medium mt-6">Weight Loss</h4>
        
        <p>
          To lose weight, you need to create a calorie deficit by consuming fewer calories than your TDEE. A pound of fat contains approximately 3,500 calories, so a deficit of 500 calories per day should theoretically lead to about 1 pound of weight loss per week (500 × 7 = 3,500).
        </p>
        
        <p>
          For example, if your TDEE is 2,500 calories, consuming 2,000 calories daily would create the desired deficit. However, it's generally not recommended to reduce calories by more than 20-25% of your TDEE to avoid metabolic slowdown and ensure adequate nutrient intake.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-100 my-6">
          <h5 className="font-semibold text-blue-800">Research Insight: Sustainable Weight Loss</h5>
          <p className="text-sm text-blue-700 mt-2">
            A 2018 meta-analysis published in the International Journal of Obesity found that gradual weight loss (0.5-1 lb per week) through moderate calorie restriction was associated with better long-term weight maintenance compared to rapid weight loss approaches.
          </p>
        </div>
        
        <h4 className="text-lg font-medium mt-6">Muscle Gain</h4>
        
        <p>
          Building muscle requires a caloric surplus, meaning you need to consume more calories than your TDEE. However, the surplus should be moderate (about 250-500 calories above TDEE) to minimize fat gain. This approach, combined with proper resistance training and adequate protein intake, creates an optimal environment for muscle growth.
        </p>
        
        <p>
          For someone with a TDEE of 2,500 calories, a muscle-building diet might include 2,750-3,000 calories daily, with at least 1.6-2.2g of protein per kg of body weight.
        </p>
        
        <h4 className="text-lg font-medium mt-6">Weight Maintenance</h4>
        
        <p>
          After reaching your weight goal, your focus shifts to maintenance. This requires consuming calories equal to your TDEE. However, as your weight changes, your TDEE will also change, requiring periodic recalculation and adjustment of your caloric intake.
        </p>
        
        <h3 className="text-xl font-semibold mt-8">Factors Affecting Your TDEE</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium">Age</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Metabolism typically slows with age, reducing TDEE by approximately 1-2% per decade after early adulthood.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium">Muscle Mass</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Muscle tissue is metabolically active and burns more calories at rest than fat tissue. More muscle mass means a higher BMR and TDEE.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium">Hormones</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Thyroid hormones, insulin, cortisol, and sex hormones all influence metabolism and can impact your TDEE.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium">Genetics</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Studies on twins suggest that genetic factors can account for up to 40% of the variation in BMR between individuals.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium">Environmental Temperature</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Extreme temperatures can increase energy expenditure as your body works to maintain core temperature.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium">Diet</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Certain foods, like protein and spicy foods, have a higher thermic effect, temporarily boosting metabolism.
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-8">Practical TDEE Application Tips</h3>
        
        <ol className="list-decimal pl-6 my-4 space-y-3">
          <li>
            <strong>Track your food intake accurately:</strong> Use a food scale and a tracking app to ensure you're hitting your calorie targets. Studies show most people underestimate their caloric intake by 20-30%.
          </li>
          <li>
            <strong>Adjust based on results:</strong> TDEE calculators provide estimates. If you're not seeing expected changes in your weight, adjust your calorie intake up or down by 100-200 calories.
          </li>
          <li>
            <strong>Recalculate regularly:</strong> As your weight, activity level, or fitness goals change, your TDEE will change too. Recalculate every 10-15 pounds of weight change.
          </li>
          <li>
            <strong>Don't forget about macronutrients:</strong> While calories are king for weight management, the composition of those calories (proteins, carbs, fats) affects body composition, performance, and satiety.
          </li>
          <li>
            <strong>Consider cycling your calories:</strong> Some people benefit from consuming more calories on training days and fewer on rest days, while maintaining the same weekly average.
          </li>
        </ol>
        
        <div className="my-8 p-5 bg-primary/5 rounded-lg border border-primary/10">
          <h3 className="text-xl font-semibold mb-4">Real-World TDEE Examples</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Case Study 1: Office Worker</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li><strong>Profile:</strong> 35-year-old female, 165 cm, 65 kg</li>
                <li><strong>Activity:</strong> Sedentary job, light exercise 2x/week</li>
                <li><strong>BMR:</strong> 1,374 calories</li>
                <li><strong>Activity Factor:</strong> 1.375 (lightly active)</li>
                <li><strong>TDEE:</strong> 1,889 calories</li>
                <li><strong>Goal:</strong> Weight loss of 0.5 lb/week</li>
                <li><strong>Recommended Intake:</strong> 1,639 calories (250 calorie deficit)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Case Study 2: Active Student</h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li><strong>Profile:</strong> 22-year-old male, 180 cm, 75 kg</li>
                <li><strong>Activity:</strong> Student, weight training 4x/week, active lifestyle</li>
                <li><strong>BMR:</strong> 1,790 calories</li>
                <li><strong>Activity Factor:</strong> 1.725 (very active)</li>
                <li><strong>TDEE:</strong> 3,088 calories</li>
                <li><strong>Goal:</strong> Muscle gain</li>
                <li><strong>Recommended Intake:</strong> 3,388 calories (300 calorie surplus)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-8">Common TDEE Myths and Misconceptions</h3>
        
        <div className="space-y-4 my-6">
          <div>
            <h4 className="font-medium">Myth 1: Eating small, frequent meals "speeds up" metabolism</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Research shows that meal frequency has a negligible effect on metabolism when total daily calories are the same. What matters most is your total caloric intake over time, not when or how often you eat.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Myth 2: You can't build muscle in a caloric deficit</h4>
            <p className="text-sm text-muted-foreground mt-1">
              While a caloric surplus is optimal for muscle growth, studies show that beginners and those returning after a break can build muscle while in a caloric deficit, especially with adequate protein intake and resistance training.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Myth 3: Starvation mode will prevent weight loss</h4>
            <p className="text-sm text-muted-foreground mt-1">
              While extreme caloric restriction can lead to metabolic adaptations that reduce energy expenditure, moderate caloric deficits (15-25% below TDEE) won't trigger significant "starvation mode" responses that prevent weight loss.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium">Myth 4: TDEE calculators are perfectly accurate</h4>
            <p className="text-sm text-muted-foreground mt-1">
              TDEE calculators provide estimates based on population averages. Individual metabolism can vary by ±200-300 calories from these estimates due to genetics, body composition, and other factors.
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-8">Long-Term TDEE Considerations</h3>
        
        <p>
          As you progress on your fitness journey, it's important to understand how your TDEE might change:
        </p>
        
        <div className="my-6 space-y-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Scale className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Metabolic Adaptation</h4>
              <p className="text-sm text-muted-foreground mt-1">
                During prolonged caloric restriction, your body may adapt by reducing energy expenditure. This is one reason why weight loss often plateaus. Research suggests that TDEE can decrease by 5-15% beyond what would be expected from the change in body mass alone.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Diet Breaks and Reverse Dieting</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Periodically increasing calories to maintenance levels during a weight loss phase (diet breaks) or gradually increasing calories after a dieting phase (reverse dieting) can help mitigate adaptive metabolism reduction and improve long-term adherence.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Dumbbell className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Exercise and NEAT Compensation</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Some studies suggest that increasing exercise may lead to compensatory decreases in non-exercise activity (NEAT) in some individuals, particularly during caloric restriction. Being aware of your overall activity level, not just structured exercise, is important.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-8">Using Our TDEE Calculator Effectively</h3>
        
        <p>
          Our TDEE calculator provides a solid starting point for your nutrition planning. Here's how to get the most out of it:
        </p>
        
        <ol className="list-decimal pl-6 my-4 space-y-2">
          <li>Enter accurate information about your height, weight, age, gender, and activity level.</li>
          <li>Use the calculated TDEE as a starting point and monitor your progress.</li>
          <li>If you're not seeing expected results after 2-3 weeks, adjust your calorie intake accordingly.</li>
          <li>Recalculate your TDEE whenever there's a significant change in your weight or activity level.</li>
          <li>Remember that TDEE is an estimate – individual response may vary based on genetics, metabolic health, and other factors.</li>
        </ol>
        
        <p>
          By understanding your TDEE and applying that knowledge to your nutrition plan, you can make informed decisions that support your health and fitness goals, whether you're aiming to lose fat, build muscle, or maintain your current physique.
        </p>
        
        <div className="bg-primary/5 p-4 rounded-md my-6">
          <h4 className="font-medium">Looking for more fitness tools?</h4>
          <p className="text-sm text-muted-foreground mt-2">
            Try our <a href="/dunk-calculator" className="text-primary font-medium">Dunk Calculator</a> to see if you have what it takes to dunk a basketball, or check out our <a href="/sleep-calculator" className="text-primary font-medium">Sleep Calculator</a> to optimize your rest and recovery.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default TDEEContent;
