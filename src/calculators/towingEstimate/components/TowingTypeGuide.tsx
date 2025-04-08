
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TowingTypeGuide: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Guide to Towing Service Types</h2>
      <p className="text-muted-foreground mb-8">
        Different situations require different types of towing services. Understanding the various towing methods and when they're appropriate 
        can help you request the right service and potentially save money. Below is a comprehensive guide to the most common towing methods.
      </p>
      
      <Tabs defaultValue="flatbed" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="flatbed" className="py-3">Flatbed Towing</TabsTrigger>
          <TabsTrigger value="wheel-lift" className="py-3">Wheel-Lift Towing</TabsTrigger>
          <TabsTrigger value="integrated" className="py-3">Integrated Towing</TabsTrigger>
          <TabsTrigger value="specialty" className="py-3">Specialty Towing</TabsTrigger>
        </TabsList>
        
        <div className="mt-6">
          <TabsContent value="flatbed" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Flatbed Towing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  [Flatbed Towing Image]
                </div>
                
                <h3 className="text-xl font-semibold">What is Flatbed Towing?</h3>
                <p>
                  Flatbed towing involves a truck with a flat, hydraulic bed that tilts and lowers to ground level. The vehicle is either driven or winched onto the flatbed, then secured for transport. The entire vehicle is carried on the flatbed, with no wheels touching the ground.
                </p>
                
                <h4 className="text-lg font-medium mt-4">When to Use Flatbed Towing:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All-wheel drive (AWD) or 4-wheel drive vehicles</li>
                  <li>Luxury or exotic cars</li>
                  <li>Low ground clearance vehicles</li>
                  <li>Vehicles with transmission damage</li>
                  <li>Long-distance towing</li>
                  <li>When vehicle wheels/tires are damaged</li>
                  <li>After accidents with significant damage</li>
                </ul>
                
                <h4 className="text-lg font-medium mt-4">Advantages:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Most secure method of towing</li>
                  <li>No additional wear on vehicle's drivetrain or tires</li>
                  <li>Protects vehicle from road debris during transport</li>
                  <li>Works for virtually any passenger vehicle</li>
                  <li>Reduces risk of additional damage during transport</li>
                </ul>
                
                <h4 className="text-lg font-medium mt-4">Disadvantages:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>More expensive than wheel-lift towing</li>
                  <li>May not be available as quickly in some areas</li>
                  <li>Not suitable for some oversized vehicles</li>
                </ul>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4">
                  <p className="text-sm text-amber-800">
                    <strong>Pro Tip:</strong> Request flatbed towing specifically when calling for a tow if your vehicle has all-wheel drive, is a luxury model, or has been in an accident. Some insurance policies specifically cover flatbed towing, so check your coverage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wheel-lift" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Wheel-Lift Towing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  [Wheel-Lift Towing Image]
                </div>
                
                <h3 className="text-xl font-semibold">What is Wheel-Lift Towing?</h3>
                <p>
                  Wheel-lift towing is a modern evolution of the traditional hook and chain method. It uses a metal yoke that cradles the drive wheels of a vehicle, lifting them off the ground while the other wheels remain on the road surface. The vehicle is secured to the yoke using straps rather than chains, minimizing the risk of damage.
                </p>
                
                <h4 className="text-lg font-medium mt-4">When to Use Wheel-Lift Towing:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Front-wheel drive cars (lifted from front)</li>
                  <li>Rear-wheel drive cars (lifted from rear)</li>
                  <li>Short distance towing</li>
                  <li>Vehicles parked in tight spaces or garages</li>
                  <li>When a more economical towing option is needed</li>
                  <li>Situations requiring quick vehicle removal</li>
                </ul>
                
                <h4 className="text-lg font-medium mt-4">Advantages:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>More affordable than flatbed towing</li>
                  <li>More widely available and quicker response time</li>
                  <li>Can access vehicles in garages and tight spaces</li>
                  <li>Better than hook and chain for preventing vehicle damage</li>
                </ul>
                
                <h4 className="text-lg font-medium mt-4">Disadvantages:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Not suitable for AWD/4WD vehicles (can damage drivetrain)</li>
                  <li>Not ideal for vehicles with low ground clearance</li>
                  <li>Two wheels remain on the ground during towing</li>
                  <li>Not recommended for long-distance towing</li>
                </ul>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4">
                  <p className="text-sm text-amber-800">
                    <strong>Pro Tip:</strong> If your vehicle is two-wheel drive and you need to save money, wheel-lift towing is a good option for short distances. Always ensure the tow operator lifts the end with the drive wheels to prevent transmission damage.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrated" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Integrated Towing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  [Integrated Tow Truck Image]
                </div>
                
                <h3 className="text-xl font-semibold">What is Integrated Towing?</h3>
                <p>
                  Integrated tow trucks, also known as self-loaders or "repo trucks," combine elements of both wheel-lift and boom systems into one unit. These trucks feature a wheel-lift system that can be extended underneath a vehicle and are often used for repossessions and removing illegally parked vehicles, as they can quickly secure and remove a vehicle.
                </p>
                
                <h4 className="text-lg font-medium mt-4">When to Use Integrated Towing:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Vehicle repossessions</li>
                  <li>Removing illegally parked vehicles</li>
                  <li>Situations requiring rapid vehicle removal</li>
                  <li>When access to the vehicle is limited</li>
                  <li>Municipal towing contracts</li>
                </ul>
                
                <h4 className="text-lg font-medium mt-4">Advantages:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Quick loading and securing of vehicles</li>
                  <li>Can tow vehicles from tight or difficult spaces</li>
                  <li>Often equipped with additional recovery equipment</li>
                  <li>Versatile for different towing scenarios</li>
                </ul>
                
                <h4 className="text-lg font-medium mt-4">Disadvantages:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Same limitations as wheel-lift for AWD/4WD vehicles</li>
                  <li>Not as gentle as flatbed towing</li>
                  <li>May not be suitable for damaged vehicles</li>
                </ul>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4">
                  <p className="text-sm text-amber-800">
                    <strong>Pro Tip:</strong> If your vehicle is being towed from a no-parking zone or private property, it's likely being towed with an integrated tow truck. These are designed for rapid removal, so be aware that your vehicle may already be gone if you return to find it has been ticketed for illegal parking.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specialty" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Specialty Towing Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                  [Heavy Duty Towing Image]
                </div>
                
                <h3 className="text-xl font-semibold">Specialty Towing Options</h3>
                <p>
                  Beyond standard towing methods, several specialized towing services exist for specific vehicle types and situations. These services typically require specialized equipment and trained operators.
                </p>
                
                <div className="space-y-4 mt-4">
                  <div>
                    <h4 className="text-lg font-medium">Heavy-Duty Towing</h4>
                    <p className="text-sm text-muted-foreground mb-2">For large trucks, buses, RVs, and commercial vehicles</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Uses specialized equipment rated for heavier loads</li>
                      <li>Often employs underreach systems to lift from axles or frame</li>
                      <li>Significantly more expensive than standard towing</li>
                      <li>Required for vehicles over 10,000 lbs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Motorcycle Towing</h4>
                    <p className="text-sm text-muted-foreground mb-2">Specialized transport for motorcycles</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Uses specially designed motorcycle trailers or carriers</li>
                      <li>Requires proper securing techniques to prevent damage</li>
                      <li>Often less expensive than car towing</li>
                      <li>May be combined with flatbed service</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Off-Road Recovery</h4>
                    <p className="text-sm text-muted-foreground mb-2">For vehicles stuck in mud, snow, sand, or difficult terrain</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Uses winches, chains, and specialized equipment</li>
                      <li>May require multiple trucks or equipment</li>
                      <li>Often charged at higher hourly rates</li>
                      <li>May need additional labor and equipment fees</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Long-Distance Towing</h4>
                    <p className="text-sm text-muted-foreground mb-2">For transporting vehicles between cities or states</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Usually employs flatbed trucks for vehicle protection</li>
                      <li>May use multi-car carriers for efficiency</li>
                      <li>Typically priced per mile with minimum charges</li>
                      <li>Often requires pre-scheduling and coordination</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium">Exotic and Luxury Vehicle Towing</h4>
                    <p className="text-sm text-muted-foreground mb-2">Specialized handling for high-value vehicles</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Uses enclosed transport or covered flatbeds</li>
                      <li>Employs extra soft straps and wheel nets</li>
                      <li>Operators with specific training and insurance</li>
                      <li>Premium pricing reflects additional care and protection</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mt-4">
                  <p className="text-sm text-amber-800">
                    <strong>Pro Tip:</strong> For specialty vehicles or situations, specify your exact vehicle type and condition when calling for towing. Ask if the company has experience with your specific situation, and request photos of their equipment if possible. For exotic or valuable vehicles, consider using companies that specialize in luxury car transport.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};

export default TowingTypeGuide;
