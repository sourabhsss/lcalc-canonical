
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, InfoIcon, CircleDashed } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CookingTips: React.FC = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-primary" />
          <span>Air Fryer Cooking Essentials</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tips" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tips">Pro Tips</TabsTrigger>
            <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
            <TabsTrigger value="techniques">Advanced Techniques</TabsTrigger>
          </TabsList>
          <TabsContent value="tips" className="p-4">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium">Master Your Air Fryer with These Pro Tips</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Preparation Tips</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Prep surfaces properly:</strong> Pat food dry before air frying to reduce splatter 
                      and promote even browning.
                    </li>
                    <li>
                      <strong>Use a light oil spray:</strong> A light mist of oil (rather than drizzling) gives the 
                      most even coating and best results.
                    </li>
                    <li>
                      <strong>Season generously:</strong> Air fryers can reduce the intensity of some seasonings, 
                      so don't be afraid to season a bit more than usual.
                    </li>
                    <li>
                      <strong>Create uniform sizes:</strong> Cut foods to similar sizes to ensure even cooking 
                      throughout your batch.
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">During Cooking</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Don't overcrowd:</strong> Air needs to circulate freely around food items. Cook in 
                      batches if necessary rather than piling food too high.
                    </li>
                    <li>
                      <strong>Shake or flip:</strong> For even cooking, shake the basket or flip food at least once 
                      during cooking (our calculator will recommend the best time).
                    </li>
                    <li>
                      <strong>Use foil or parchment judiciously:</strong> While helpful for easy cleanup, these can 
                      block airflow. Use pre-perforated parchment designed for air fryers, or create your own holes.
                    </li>
                    <li>
                      <strong>Check early:</strong> Until you're familiar with how your specific model cooks, check 
                      food 2-3 minutes before the estimated cooking time completes.
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Food-Specific Guidance</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Breaded foods:</strong> Spray both the food and the basket with oil for best results 
                      with breaded items.
                    </li>
                    <li>
                      <strong>Fresh vegetables:</strong> Toss in 1-2 teaspoons of oil with seasonings before air frying 
                      for better texture and taste.
                    </li>
                    <li>
                      <strong>Battered foods:</strong> Traditional wet batters don't work well in air fryers. Instead, 
                      use a dry breading method (flour→egg→breadcrumbs).
                    </li>
                    <li>
                      <strong>Dough products:</strong> For baking bread or cinnamon rolls, let the dough rise properly 
                      before placing in the air fryer.
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium">Maintenance & Care</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Clean after each use:</strong> Food residue affects performance and can cause smoking 
                      in future uses.
                    </li>
                    <li>
                      <strong>Soak, don't scrub:</strong> For stuck-on food, soak the basket and pan in warm soapy 
                      water rather than using abrasive cleaners.
                    </li>
                    <li>
                      <strong>Check for damage:</strong> Regularly inspect the non-stick coating for scratches or 
                      chips, as damaged coating can affect cooking performance.
                    </li>
                    <li>
                      <strong>Position properly:</strong> Keep your air fryer at least 5 inches from walls and other 
                      appliances for proper ventilation.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 text-muted-foreground">
                <p>
                  Looking for help with recipe conversions? Our <a href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</a> can 
                  help you analyze cooking time data from multiple recipes to find the optimal range for your favorite dishes.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mistakes" className="p-4">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium">Common Air Fryer Mistakes to Avoid</h3>
              
              <div className="mt-4 space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <CircleDashed className="h-4 w-4 mr-2 text-red-500" />
                    Overcrowding the Basket
                  </h4>
                  <p className="text-muted-foreground">
                    The most common mistake is trying to cook too much food at once. Air fryers work by circulating hot air 
                    around food, and when pieces are touching or piled up, they steam instead of crisp. Always arrange food 
                    in a single layer with space between pieces.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Cook in batches for best results, even if it takes a bit longer.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <CircleDashed className="h-4 w-4 mr-2 text-red-500" />
                    Forgetting to Preheat
                  </h4>
                  <p className="text-muted-foreground">
                    While some models don't require preheating, most air fryers perform better with a 2-3 minute preheat. 
                    Starting with a cold air fryer can lead to inconsistent cooking and longer cook times.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Preheat for 2-3 minutes before adding food.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <CircleDashed className="h-4 w-4 mr-2 text-red-500" />
                    Using Too Much (or Too Little) Oil
                  </h4>
                  <p className="text-muted-foreground">
                    While air fryers use less oil than deep fryers, many foods still benefit from a light coating of oil. 
                    Too much oil causes smoking and greasy results, while too little can leave food dry.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Use an oil mister for light, even application. For most foods, 1-2 teaspoons is sufficient.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <CircleDashed className="h-4 w-4 mr-2 text-red-500" />
                    Not Flipping or Shaking Food
                  </h4>
                  <p className="text-muted-foreground">
                    Even with hot air circulation, food needs to be flipped or shaken midway through cooking for even results. 
                    Forgetting this step can result in food that's overcooked on one side and undercooked on the other.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Set a timer for halfway through the cooking time as a reminder to flip or shake.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <CircleDashed className="h-4 w-4 mr-2 text-red-500" />
                    Using Ingredients That Don't Work Well
                  </h4>
                  <p className="text-muted-foreground">
                    Not all foods are suited for air frying. Wet batters, loose leafy greens, and foods with high liquid content 
                    typically don't work well.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Stick to foods that can be breaded rather than battered, and avoid very light items 
                    that might get blown around by the fan.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center">
                    <CircleDashed className="h-4 w-4 mr-2 text-red-500" />
                    Incorrect Temperature Settings
                  </h4>
                  <p className="text-muted-foreground">
                    Using temperatures that are too high can burn the outside of food while leaving the inside undercooked. 
                    Temperatures that are too low may not achieve the desired crispness.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Use our calculator for optimal temperature settings based on food type.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-muted-foreground">
                <p>
                  Need help keeping track of cooking times? Try our <a href="/lap-day-calculator" className="text-primary hover:underline">Lap Day Calculator</a> to time multiple batches of food in your air fryer.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="techniques" className="p-4">
            <div className="prose max-w-none">
              <h3 className="text-lg font-medium">Advanced Air Frying Techniques</h3>
              
              <div className="mt-4 space-y-6">
                <div className="space-y-2">
                  <h4 className="font-medium">Two-Stage Cooking</h4>
                  <p className="text-muted-foreground">
                    For optimal results with certain foods like thick chicken breasts or roasts, use a two-stage cooking approach:
                  </p>
                  <ol className="pl-5 space-y-1">
                    <li>Begin cooking at a lower temperature (320-330°F) for 75% of the total cooking time</li>
                    <li>Increase to a higher temperature (370-400°F) for the remaining time to develop browning and crispness</li>
                  </ol>
                  <p className="text-muted-foreground">
                    This technique helps ensure food cooks through properly while still developing a nicely browned exterior.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Creating Steam for Bakery Items</h4>
                  <p className="text-muted-foreground">
                    When baking bread or pastries in your air fryer, create a steam environment for better rise and texture:
                  </p>
                  <ol className="pl-5 space-y-1">
                    <li>Place a small, oven-safe ramekin with 1-2 tablespoons of water in the corner of the air fryer</li>
                    <li>Pre-heat with the water vessel in place</li>
                    <li>Add your dough and bake as directed</li>
                  </ol>
                  <p className="text-muted-foreground">
                    The steam helps create a tender interior while still allowing the exterior to develop a nice crust.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Layered Cooking for Complete Meals</h4>
                  <p className="text-muted-foreground">
                    Cook entire meals in one session using strategic layering:
                  </p>
                  <ol className="pl-5 space-y-1">
                    <li>Place longer-cooking items (like meat) on the bottom of the basket</li>
                    <li>Cook for 50-60% of the required time</li>
                    <li>Add faster-cooking vegetables or sides on top</li>
                    <li>Continue cooking until everything is done</li>
                  </ol>
                  <p className="text-muted-foreground">
                    This technique works best with foods that complement each other in flavor, as drippings will add flavor 
                    to foods on lower levels.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Dehydrating in Your Air Fryer</h4>
                  <p className="text-muted-foreground">
                    Many air fryers can double as food dehydrators with the right settings:
                  </p>
                  <ul className="pl-5 space-y-1">
                    <li>Set temperature to the lowest setting (usually 170-180°F)</li>
                    <li>Arrange thinly sliced fruits, vegetables, or herbs in a single layer</li>
                    <li>Cook for 3-4 hours, checking periodically for desired dryness</li>
                    <li>For even drying, rotate trays or position every hour</li>
                  </ul>
                  <p className="text-muted-foreground">
                    This technique is perfect for making dried apple chips, beef jerky, or herb garnishes.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Roasting Garlic and Vegetables</h4>
                  <p className="text-muted-foreground">
                    Achieve oven-roasted flavor in less time:
                  </p>
                  <ol className="pl-5 space-y-1">
                    <li>For garlic: Cut the top off a whole head, drizzle with olive oil</li>
                    <li>Wrap loosely in foil, leaving the top slightly open</li>
                    <li>Air fry at 380°F for 15-20 minutes until soft and caramelized</li>
                  </ol>
                  <p className="text-muted-foreground">
                    For vegetables, toss with oil and herbs, then air fry at 375°F, shaking occasionally until caramelized.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-muted-foreground">
                <p>
                  Trying to calculate timing for multiple air fryer batches? Our <a href="/work-experience-calculator" className="text-primary hover:underline">Work Experience Calculator</a> can be 
                  repurposed to track and optimize your cooking efficiency.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 bg-muted p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <InfoIcon className="h-5 w-5 text-primary shrink-0 mt-1" />
            <div>
              <h4 className="font-medium">Did you know?</h4>
              <p className="text-sm text-muted-foreground">
                According to market research, air fryer ownership has increased by over 40% since 2019, with more than 
                25 million American households now owning an air fryer. The most commonly air-fried foods are french fries, 
                chicken wings, and vegetables, with users reporting an average 65% reduction in cooking oil consumption.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Calculate the potential savings with our <a href="/stock-average-calculator" className="text-primary hover:underline">Stock Average Calculator</a> by 
                tracking how much you save on cooking oil purchases over time.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CookingTips;
