
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, Zap, ClipboardCheck, Timer } from 'lucide-react';

const AirFryerBenefits: React.FC = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl">Health & Environmental Benefits of Air Frying</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          <p>
            Air fryers have revolutionized home cooking by offering a healthier alternative to traditional 
            frying methods while saving energy and reducing cooking time. Here's why so many households are 
            making the switch:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <HeartPulse className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium m-0">Health Advantages</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-base">Reduced Fat Content</h4>
                  <p className="text-muted-foreground">
                    Air frying uses up to 80% less oil than traditional deep frying methods. A study published in the 
                    Journal of Food Science showed that air-fried foods contain significantly less fat while maintaining 
                    similar texture and taste profiles.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Lower Calorie Content</h4>
                  <p className="text-muted-foreground">
                    The reduction in oil translates directly to fewer calories. For example, air-fried chicken wings 
                    contain approximately 70-80 fewer calories per serving than their deep-fried counterparts.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Reduced Acrylamide Formation</h4>
                  <p className="text-muted-foreground">
                    Research indicates that air frying reduces the formation of acrylamide, a potentially harmful 
                    compound that forms in high-carbohydrate foods during high-temperature cooking, by up to 90% 
                    compared to deep frying.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium m-0">Energy & Environmental Impact</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-base">Energy Efficiency</h4>
                  <p className="text-muted-foreground">
                    Air fryers consume significantly less energy than conventional ovens. A standard air fryer uses 
                    approximately 1400-1700 watts, while a conventional oven uses 2000-2500 watts. Additionally, the 
                    shorter cooking times further reduce energy consumption.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Lower Carbon Footprint</h4>
                  <p className="text-muted-foreground">
                    The energy savings translate to a reduced carbon footprint. According to environmental studies, 
                    switching from oven cooking to air frying for appropriate dishes can reduce cooking-related 
                    carbon emissions by approximately 35%.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Reduced Cooking Oils</h4>
                  <p className="text-muted-foreground">
                    Less oil used means less oil produced and transported, reducing the environmental impact associated 
                    with cooking oil production and disposal.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium m-0">Time-Saving Benefits</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-base">Faster Cooking Times</h4>
                  <p className="text-muted-foreground">
                    Air fryers typically cook food 20-30% faster than conventional ovens due to their smaller cooking 
                    chamber and rapid air circulation technology.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Minimal Preheating</h4>
                  <p className="text-muted-foreground">
                    Most air fryers require only 2-3 minutes of preheating, compared to 10-15 minutes for conventional ovens.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Less Monitoring Required</h4>
                  <p className="text-muted-foreground">
                    The enclosed design and timer functions mean less need to constantly monitor cooking progress, 
                    allowing for multitasking in the kitchen.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium m-0">Real-World Impact</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-base">Nutritional Comparison</h4>
                  <p className="text-muted-foreground">
                    A 100g serving of air-fried french fries contains approximately 4-5g of fat, compared to 12-17g in 
                    deep-fried versions – a reduction of over 70%. This translates to approximately 70-80 fewer calories 
                    per serving.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Cost Savings</h4>
                  <p className="text-muted-foreground">
                    The average household can save $30-50 annually in energy costs by using an air fryer instead of an 
                    oven for appropriate cooking tasks. Additional savings come from reduced oil usage, which can save 
                    another $20-30 per year.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-base">Consumer Satisfaction</h4>
                  <p className="text-muted-foreground">
                    According to consumer surveys, over 85% of air fryer owners report being "very satisfied" with their 
                    purchase, citing health benefits and convenience as the top reasons.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <p className="font-medium">Recommended Calculator: <a href="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</a></p>
            <p className="text-muted-foreground">
              Planning to upgrade your kitchen with a new air fryer? Using our Mortgage Calculator can help you 
              budget for home improvements while managing your monthly expenses effectively.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AirFryerBenefits;
