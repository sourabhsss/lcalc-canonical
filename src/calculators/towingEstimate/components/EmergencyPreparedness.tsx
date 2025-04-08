
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';

const EmergencyPreparedness: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Emergency Preparedness for Vehicle Breakdowns</h2>
      <p className="text-muted-foreground mb-8">
        Being prepared for a vehicle breakdown can save you time, money, and stress. Here are some important tips and recommendations to 
        help you be ready for unexpected roadside emergencies.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="bg-green-50 border-b">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <CardTitle>Essential Items for Your Vehicle</CardTitle>
                <CardDescription>Keep these items in your vehicle at all times</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                <div>
                  <span className="font-medium">Emergency Contact Information</span>
                  <p className="text-sm text-muted-foreground">Insurance roadside assistance number, local towing service, and emergency contacts.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                <div>
                  <span className="font-medium">First Aid Kit</span>
                  <p className="text-sm text-muted-foreground">Basic supplies for minor injuries until professional help arrives.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                <div>
                  <span className="font-medium">Warning Triangles/Flares</span>
                  <p className="text-sm text-muted-foreground">To alert other drivers if you're broken down on the roadside.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</div>
                <div>
                  <span className="font-medium">Flashlight with Extra Batteries</span>
                  <p className="text-sm text-muted-foreground">Essential for nighttime emergencies.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">5</div>
                <div>
                  <span className="font-medium">Basic Tool Kit</span>
                  <p className="text-sm text-muted-foreground">Screwdrivers, pliers, adjustable wrench, and tire pressure gauge.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">6</div>
                <div>
                  <span className="font-medium">Jumper Cables or Portable Jump Starter</span>
                  <p className="text-sm text-muted-foreground">For battery-related issues, which are common causes of breakdowns.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">7</div>
                <div>
                  <span className="font-medium">Spare Tire and Jack</span>
                  <p className="text-sm text-muted-foreground">Ensure your spare is properly inflated and you know how to use the jack.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-red-50 border-b">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <CardTitle>What to Do When Your Vehicle Breaks Down</CardTitle>
                <CardDescription>Follow these steps for your safety</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</div>
                <div>
                  <span className="font-medium">Move to Safety</span>
                  <p className="text-sm text-muted-foreground">If possible, pull completely off the road to a safe location, away from traffic.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</div>
                <div>
                  <span className="font-medium">Signal Your Presence</span>
                  <p className="text-sm text-muted-foreground">Turn on hazard lights, and set up warning triangles or flares if it's safe to do so.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</div>
                <div>
                  <span className="font-medium">Assess the Situation</span>
                  <p className="text-sm text-muted-foreground">Determine if it's safe to stay in your vehicle or if you should stand away from the road.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</div>
                <div>
                  <span className="font-medium">Call for Assistance</span>
                  <p className="text-sm text-muted-foreground">Contact roadside assistance, a towing service, or emergency services if needed.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">5</div>
                <div>
                  <span className="font-medium">Provide Specific Information</span>
                  <p className="text-sm text-muted-foreground">When calling for help, provide your exact location, vehicle description, and nature of the problem.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">6</div>
                <div>
                  <span className="font-medium">Stay Informed</span>
                  <p className="text-sm text-muted-foreground">Ask about estimated arrival time, towing destinations, and cost estimates before agreeing to service.</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="h-5 w-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">7</div>
                <div>
                  <span className="font-medium">Document Everything</span>
                  <p className="text-sm text-muted-foreground">Take photos of your vehicle and get receipts for all services for insurance purposes.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">Roadside Assistance Plans</h3>
        <p className="mb-4">
          Roadside assistance plans can save you money and provide peace of mind. Consider these options:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-blue-900">
          <li><strong>Auto Insurance Add-ons:</strong> Many insurance companies offer roadside assistance for a small addition to your premium.</li>
          <li><strong>Auto Club Memberships:</strong> Organizations like AAA provide comprehensive roadside services including towing, battery service, and fuel delivery.</li>
          <li><strong>Credit Card Benefits:</strong> Some premium credit cards include roadside assistance as a cardholder benefit.</li>
          <li><strong>Vehicle Manufacturer Programs:</strong> New vehicles often come with complimentary roadside assistance for a certain period.</li>
          <li><strong>Cellular Provider Plans:</strong> Some cellular companies offer roadside assistance plans as add-on services.</li>
        </ul>
        <p className="mt-4 text-sm text-blue-700">
          Compare plans to find one that matches your driving habits, vehicle age, and typical travel distances.
        </p>
      </div>
    </section>
  );
};

export default EmergencyPreparedness;
