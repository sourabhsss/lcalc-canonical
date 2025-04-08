import React from 'react';
import Link from 'next/link';

const GravelContent = () => {
  return (
    <div className="mt-12 space-y-8 text-muted-foreground">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Understanding Gravel: Types, Uses, and Calculations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <p className="mb-3">
              Gravel is one of the most versatile and widely used materials in construction and landscaping. Its applications range from creating driveways and pathways to drainage systems and decorative landscapes. Understanding how to calculate the right amount of gravel for your project is essential for proper budgeting and planning.
            </p>
            <p className="mb-3">
              Unlike other construction materials, gravel is typically sold by weight (tons) or volume (cubic yards), making it crucial to convert your area measurements to these units. Different types of gravel have varying densities, which affects weight calculations and ultimately, your project costs.
            </p>
          </div>
          <div className="bg-primary/5 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-foreground">Quick Facts</h3>
            <ul className="space-y-2 text-sm">
              <li>• A standard pickup truck can carry about 1-2 cubic yards of gravel</li>
              <li>• One cubic yard of standard gravel weighs approximately 2,800 pounds (1.4 tons)</li>
              <li>• For driveways, a depth of 4-6 inches is typically recommended</li>
              <li>• Most residential projects require between 3-10 cubic yards of gravel</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-accent/10 rounded-lg overflow-hidden my-6">
          <img 
            src="https://images.unsplash.com/photo-1504893524553-b855bce32c67" 
            alt="Gravel landscape with river rocks" 
            className="w-full h-64 object-cover"
          />
          <p className="text-xs text-center p-2">Different types of gravel can dramatically change the aesthetic of your landscape</p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Types of Gravel and Their Uses</h2>
        <div className="space-y-4">
          <p>
            The term "gravel" encompasses a wide range of materials, each with specific characteristics and ideal applications. Understanding these differences can help you select the right type for your project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-foreground">Standard Gravel/Crushed Stone</h3>
              <p className="text-sm">
                This is the most common type of gravel, consisting of crushed rock with angular pieces. It compacts well, making it ideal for driveways, walkways, and as a base for construction projects. The angular shape allows pieces to lock together, creating a stable surface.
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-foreground">Density:</span> Approximately 105 pounds per cubic foot
              </p>
              <p className="text-sm">
                <span className="font-medium text-foreground">Best used for:</span> Driveways, road bases, drainage
              </p>
            </div>
            
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-foreground">Pea Gravel</h3>
              <p className="text-sm">
                Named for its small, pea-sized stones (typically 1/4 inch in diameter), this gravel has a smooth, rounded surface. Its pleasing appearance and comfortable walking surface make it popular for garden paths, playgrounds, and decorative applications.
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-foreground">Density:</span> Approximately 100 pounds per cubic foot
              </p>
              <p className="text-sm">
                <span className="font-medium text-foreground">Best used for:</span> Garden paths, playgrounds, landscaping accents
              </p>
            </div>
            
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-foreground">Crushed Limestone</h3>
              <p className="text-sm">
                A sedimentary rock, crushed limestone is valued for its light color and excellent drainage properties. It compacts well and is often used as a base layer in construction projects or for driveways and paths.
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-foreground">Density:</span> Approximately 95 pounds per cubic foot
              </p>
              <p className="text-sm">
                <span className="font-medium text-foreground">Best used for:</span> Driveways, pathways, garden borders
              </p>
            </div>
            
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-foreground">Slate Chips</h3>
              <p className="text-sm">
                These thin, flat pieces of slate offer a unique appearance with their varied colors (often blue, gray, or purple). They don't compact as well as other gravels but are excellent for decorative landscaping.
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-foreground">Density:</span> Approximately 80 pounds per cubic foot
              </p>
              <p className="text-sm">
                <span className="font-medium text-foreground">Best used for:</span> Decorative gardens, water features, mulch replacement
              </p>
            </div>
            
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2 text-foreground">River Rock</h3>
              <p className="text-sm">
                Larger and more rounded than pea gravel, river rock ranges from 1 to 5 inches in diameter. Its polished appearance comes from natural water erosion, making it aesthetically pleasing for visible landscaping elements.
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-foreground">Density:</span> Approximately 110 pounds per cubic foot
              </p>
              <p className="text-sm">
                <span className="font-medium text-foreground">Best used for:</span> Decorative borders, dry creek beds, water features
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Planning Your Gravel Project</h2>
        <div className="space-y-4">
          <p>
            Proper planning is essential for any gravel project, whether it's a simple garden path or a large driveway. Here's how to approach your project:
          </p>
          
          <div className="bg-primary/5 p-6 rounded-lg my-6">
            <h3 className="font-semibold mb-3 text-foreground">Step-by-Step Project Planning</h3>
            <ol className="space-y-3 list-decimal ml-6">
              <li>
                <span className="font-medium text-foreground">Measure your area accurately:</span> Use a measuring tape to determine the length and width of your project area. For irregular shapes, break the area into simple geometric shapes and calculate each separately.
              </li>
              <li>
                <span className="font-medium text-foreground">Determine the appropriate depth:</span> Different applications require different depths:
                <ul className="ml-6 mt-1 space-y-1 list-disc">
                  <li>Driveways: 4-6 inches (10-15 cm)</li>
                  <li>Walkways: 2-3 inches (5-7.5 cm)</li>
                  <li>Decorative areas: 1-2 inches (2.5-5 cm)</li>
                  <li>Base layers: 4-8 inches (10-20 cm)</li>
                </ul>
              </li>
              <li>
                <span className="font-medium text-foreground">Choose the right gravel type:</span> Consider the purpose, appearance, and usage pattern when selecting your gravel type.
              </li>
              <li>
                <span className="font-medium text-foreground">Calculate materials needed:</span> Use our <span className="text-primary">Gravel Calculator</span> to determine exactly how much material you'll need.
              </li>
              <li>
                <span className="font-medium text-foreground">Add contingency:</span> Add 5-10% extra material to account for settling, spillage, and irregular ground.
              </li>
              <li>
                <span className="font-medium text-foreground">Plan for delivery:</span> Determine how the gravel will be delivered and where it will be temporarily stored on your property.
              </li>
            </ol>
          </div>
          
          <p>
            For larger projects, particularly those involving driveways or drainage systems, consider consulting with a professional landscaper or contractor. They can provide valuable insights about local soil conditions, drainage requirements, and material recommendations specific to your area.
          </p>
          
          <div className="bg-secondary/10 p-4 rounded-lg my-4">
            <h3 className="font-medium mb-2 text-foreground">Complementary Calculators</h3>
            <p className="text-sm mb-3">
              For more comprehensive project planning, check out these related calculators:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <Link href="/asphalt-calculator" className="text-primary hover:underline">Asphalt Calculator</Link>
              <Link href="/board-foot-calculator" className="text-primary hover:underline">Board Foot Calculator</Link>
              <Link href="/pool-volume-calculator" className="text-primary hover:underline">Pool Volume Calculator</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Installation Techniques and Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mb-3">
              Proper installation is just as important as selecting the right type and amount of gravel. Following best practices ensures your gravel surface will remain stable, drain properly, and look attractive for years to come.
            </p>
            <p>
              Gravel installation varies based on the application, but generally follows these key steps:
            </p>
            
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="font-medium text-foreground">1. Site Preparation</h4>
                <p className="text-sm">
                  Remove any existing vegetation, rocks, or debris from the area. For weed prevention, consider installing landscape fabric beneath the gravel, especially in garden areas.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">2. Create Proper Drainage</h4>
                <p className="text-sm">
                  Ensure a slight slope (about 2-5%) away from buildings to prevent water pooling. For heavy-use areas like driveways, create a crowned surface that slopes down from the center to the sides.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">3. Install Base Layers</h4>
                <p className="text-sm">
                  For driveways and pathways, start with a compacted sub-base of larger crushed stone (typically 2-4 inches) before adding the finishing layer of gravel.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-accent/10 rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                alt="Gravel path with river landscape" 
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">4. Edge Containment</h4>
                <p className="text-sm">
                  Install edge restraints (metal, plastic, wood, or stone) to prevent gravel migration, especially for pathways and decorative areas.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">5. Apply Gravel in Layers</h4>
                <p className="text-sm">
                  For deeper applications, add gravel in 2-3 inch layers, compacting each layer before adding the next one. This creates a more stable surface.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">6. Compact Properly</h4>
                <p className="text-sm">
                  Use a plate compactor for larger areas or a hand tamper for smaller spaces. Proper compaction reduces settling and creates a more solid surface.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 p-4 rounded-lg my-4">
          <h3 className="font-medium mb-2 text-foreground">Pro Tips for Long-Lasting Gravel Surfaces</h3>
          <ul className="space-y-2 text-sm">
            <li>• <span className="font-medium text-foreground">Geotextile fabric:</span> Install landscape fabric beneath gravel in areas prone to mud or weed growth</li>
            <li>• <span className="font-medium text-foreground">Maintenance schedule:</span> Plan to add a thin new layer every 1-2 years to replenish what's been lost</li>
            <li>• <span className="font-medium text-foreground">Winter considerations:</span> In snowy climates, mark the edges of gravel driveways to prevent snowplow damage</li>
            <li>• <span className="font-medium text-foreground">Transition areas:</span> Create smooth transitions between gravel and other surfaces to prevent tripping hazards</li>
            <li>• <span className="font-medium text-foreground">Dust control:</span> For driveways, consider occasional application of calcium chloride to reduce dust in dry conditions</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Environmental Considerations and Sustainable Practices</h2>
        
        <p className="mb-4">
          Gravel is often considered one of the more environmentally friendly surfacing options, especially when compared to concrete or asphalt. However, there are still important considerations to keep in mind for minimizing environmental impact:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-medium mb-3 text-foreground">Environmental Benefits</h3>
            <ul className="space-y-2 text-sm">
              <li>• <span className="font-medium text-foreground">Permeability:</span> Gravel allows water to percolate into the ground, reducing runoff and helping to recharge groundwater</li>
              <li>• <span className="font-medium text-foreground">Heat reflection:</span> Unlike dark asphalt, lighter gravels reflect heat, reducing the urban heat island effect</li>
              <li>• <span className="font-medium text-foreground">Local sourcing:</span> Gravel is often available locally, reducing transportation emissions</li>
              <li>• <span className="font-medium text-foreground">Longevity:</span> With proper maintenance, gravel surfaces can last indefinitely with occasional topping up</li>
              <li>• <span className="font-medium text-foreground">Reusability:</span> Gravel can be reused or repurposed for other projects</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h3 className="font-medium mb-3 text-foreground">Environmental Considerations</h3>
            <ul className="space-y-2 text-sm">
              <li>• <span className="font-medium text-foreground">Quarrying impact:</span> Gravel extraction can disrupt landscapes and ecosystems</li>
              <li>• <span className="font-medium text-foreground">Dust production:</span> Unsealed gravel surfaces can create dust, affecting air quality</li>
              <li>• <span className="font-medium text-foreground">Migration concerns:</span> Without proper edging, gravel can spread into lawns, streams, and storm drains</li>
              <li>• <span className="font-medium text-foreground">Weed control:</span> Chemical weed control methods can leach into groundwater</li>
              <li>• <span className="font-medium text-foreground">Accessibility issues:</span> Gravel surfaces can be challenging for wheelchairs, strollers, and some mobility aids</li>
            </ul>
          </div>
        </div>
        
        <div className="my-6">
          <h3 className="font-medium mb-3 text-foreground">Sustainable Gravel Practices</h3>
          <div className="space-y-3">
            <p>
              To maximize the environmental benefits of gravel while minimizing negative impacts, consider these sustainable practices:
            </p>
            
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                <span className="font-medium text-foreground">Source responsibly:</span> Choose suppliers that practice responsible quarrying and land restoration.
              </li>
              <li>
                <span className="font-medium text-foreground">Use recycled materials:</span> Consider recycled concrete aggregate or crushed recycled glass as alternatives to virgin gravel.
              </li>
              <li>
                <span className="font-medium text-foreground">Implement proper drainage:</span> Design gravel installations to work with natural drainage patterns, filtering water as it returns to the soil.
              </li>
              <li>
                <span className="font-medium text-foreground">Control erosion:</span> Use gravel strategically to prevent soil erosion on slopes and in water-prone areas.
              </li>
              <li>
                <span className="font-medium text-foreground">Maintain organic edges:</span> Where appropriate, allow some mixing of gravel edges with vegetation to create habitat transitions.
              </li>
              <li>
                <span className="font-medium text-foreground">Choose natural weed control:</span> Opt for landscape fabric, mechanical weeding, or heat treatment rather than chemical herbicides.
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-accent/10 rounded-lg overflow-hidden my-6">
          <img 
            src="https://images.unsplash.com/photo-1433086966358-54859d0ed716" 
            alt="Natural landscape with gravel and water" 
            className="w-full h-64 object-cover"
          />
          <p className="text-xs text-center p-2">Proper gravel installation can enhance natural landscapes while providing practical surfaces</p>
        </div>
        
        <p>
          For projects near sensitive ecosystems or waterways, consider consulting with a landscape architect or environmental specialist to ensure your gravel installation supports rather than harms the local environment.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Cost Considerations and Budgeting</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <p className="mb-3">
              The cost of gravel projects can vary significantly depending on material type, quantity, delivery distance, and regional pricing. Understanding these factors can help you budget effectively and avoid surprises.
            </p>
            <p>
              As of 2023, gravel costs typically range from $10 to $50 per ton or $15 to $75 per cubic yard, depending on the type and quality. However, these prices can fluctuate based on location, availability, and economic factors.
            </p>
          </div>
          
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-foreground">Average Costs</h3>
            <ul className="space-y-2 text-sm">
              <li>• <span className="font-medium">Standard Gravel:</span> $10-30 per ton</li>
              <li>• <span className="font-medium">Pea Gravel:</span> $15-40 per ton</li>
              <li>• <span className="font-medium">Crushed Limestone:</span> $20-30 per ton</li>
              <li>• <span className="font-medium">Slate Chips:</span> $40-80 per ton</li>
              <li>• <span className="font-medium">River Rock:</span> $40-45 per ton</li>
              <li>• <span className="font-medium">Delivery Fee:</span> $50-150, depending on distance</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Factors Affecting Total Project Cost</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-foreground">Material Quality and Type</h4>
              <p className="text-sm">
                Decorative and specialty gravels (like marble chips or lava rock) cost significantly more than standard construction gravel. Consider whether the premium appearance justifies the additional expense for your project.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-foreground">Quantity Discounts</h4>
              <p className="text-sm">
                Many suppliers offer volume discounts, with per-ton prices decreasing as order size increases. For large projects, request quotes from multiple suppliers and ask about bulk pricing.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-foreground">Delivery Costs</h4>
              <p className="text-sm">
                Delivery can add significantly to the total cost, especially for small orders or long distances. Some suppliers waive delivery fees for orders above a certain threshold. Calculate whether it's more economical to make multiple smaller purchases with higher delivery fees or one large order.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-foreground">Additional Materials</h4>
              <p className="text-sm">
                Don't forget to budget for supplementary materials like landscape fabric, edging, and base materials. These can add 10-30% to your total project cost but are essential for a professional result.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-foreground">Labor Costs</h4>
              <p className="text-sm">
                If hiring professionals, labor costs typically range from $40-100 per hour or $1.50-$3.00 per square foot for gravel installation. DIY installation saves on labor but requires time, proper tools, and physical effort.
              </p>
            </div>
            
            <div className="border p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-foreground">Seasonal Pricing</h4>
              <p className="text-sm">
                Gravel prices may fluctuate seasonally, often being more expensive during peak construction months (spring and summer). Planning your project for the off-season (late fall or winter in many regions) might yield better pricing.
              </p>
            </div>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg mt-6">
            <h3 className="font-medium mb-2 text-foreground">Cost-Saving Strategies</h3>
            <ul className="space-y-2 text-sm">
              <li>• <span className="font-medium text-foreground">Compare suppliers:</span> Get quotes from at least three different suppliers</li>
              <li>• <span className="font-medium text-foreground">Consider recycled options:</span> Recycled concrete aggregate can be 20-40% less expensive than virgin gravel</li>
              <li>• <span className="font-medium text-foreground">Coordinate with neighbors:</span> Share delivery costs by ordering together with neighbors planning similar projects</li>
              <li>• <span className="font-medium text-foreground">Phase large projects:</span> For budget constraints, consider completing your project in sections over time</li>
              <li>• <span className="font-medium text-foreground">Rent equipment:</span> For DIY installation, tool rental is typically more economical than purchasing</li>
              <li>• <span className="font-medium text-foreground">Ask about remnants:</span> Some suppliers offer discounted rates for leftover materials from large orders</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Maintenance and Long-Term Care</h2>
        
        <p className="mb-4">
          One of the advantages of gravel surfaces is their relatively low maintenance requirements compared to other materials. However, some regular care is necessary to keep your gravel installation looking its best and functioning properly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium mb-3 text-foreground">Regular Maintenance Tasks</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Raking and Leveling</h4>
                <p className="text-sm">
                  Periodically rake your gravel surface to redistribute material that has shifted due to use, weather, or runoff. Pay particular attention to high-traffic areas and spots where water tends to pool.
                </p>
                <p className="text-sm mt-1">
                  <span className="italic">Frequency:</span> Monthly for driveways and paths; seasonally for decorative areas
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Weed Management</h4>
                <p className="text-sm">
                  Even with landscape fabric, some weeds will eventually appear in gravel installations. Remove them promptly before they establish deep root systems or go to seed.
                </p>
                <p className="text-sm mt-1">
                  <span className="italic">Frequency:</span> Every 2-4 weeks during growing season
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Replenishment</h4>
                <p className="text-sm">
                  Gravel naturally compacts and some material is inevitably lost over time due to traffic, cleaning, and weather. Add new material as needed to maintain proper depth.
                </p>
                <p className="text-sm mt-1">
                  <span className="italic">Frequency:</span> Every 1-3 years, depending on usage
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-foreground">Seasonal Maintenance</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Spring</h4>
                <ul className="text-sm space-y-1 ml-5 list-disc">
                  <li>Remove debris that accumulated over winter</li>
                  <li>Check for and repair areas of erosion from spring rains</li>
                  <li>Redefine edges that may have blurred during winter</li>
                  <li>Apply pre-emergent weed control if desired</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Summer</h4>
                <ul className="text-sm space-y-1 ml-5 list-disc">
                  <li>Monitor and remove weeds during peak growing season</li>
                  <li>Apply dust control treatments during dry periods if needed</li>
                  <li>Check irrigation systems to ensure they're not washing away gravel</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Fall</h4>
                <ul className="text-sm space-y-1 ml-5 list-disc">
                  <li>Remove fallen leaves and organic matter before winter</li>
                  <li>Prepare drainage channels for winter precipitation</li>
                  <li>Address any low spots before freezing temperatures arrive</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground">Winter</h4>
                <ul className="text-sm space-y-1 ml-5 list-disc">
                  <li>Mark edges of driveways for snow removal</li>
                  <li>Use care when shoveling or plowing to minimize gravel displacement</li>
                  <li>Avoid using salt-based de-icers which can damage underlying soil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/10 p-5 rounded-lg my-6">
          <h3 className="font-medium mb-3 text-foreground">Troubleshooting Common Gravel Issues</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="col-span-1 font-medium text-foreground">Problem</div>
              <div className="col-span-2 font-medium text-foreground">Solution</div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-3 border-b">
              <div className="col-span-1 text-sm font-medium">Ruts and uneven surfaces</div>
              <div className="col-span-2 text-sm">
                Fill depressions with additional gravel, then compact with a plate compactor or hand tamper. For recurring issues, consider installing a geogrid beneath the gravel layer.
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-3 border-b">
              <div className="col-span-1 text-sm font-medium">Gravel migration</div>
              <div className="col-span-2 text-sm">
                Install or reinforce edge restraints. For driveways, consider using larger base stones at the bottom with smaller finishing gravel on top to increase stability.
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-3 border-b">
              <div className="col-span-1 text-sm font-medium">Muddy areas</div>
              <div className="col-span-2 text-sm">
                Improve drainage by creating a proper gravel base. For existing installations, remove gravel, install landscape fabric, and then replace the gravel with added depth.
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-3 border-b">
              <div className="col-span-1 text-sm font-medium">Persistent weeds</div>
              <div className="col-span-2 text-sm">
                Remove existing weeds, then install landscape fabric under the gravel. For established installations, consider using boiling water, vinegar, or mechanical removal rather than chemical herbicides.
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="col-span-1 text-sm font-medium">Dust problems</div>
              <div className="col-span-2 text-sm">
                Apply a dust control product specifically designed for gravel surfaces. These typically work by binding small particles together or by drawing moisture from the air to keep the surface slightly damp.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="mt-12 p-6 bg-primary/5 rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-foreground">Related Calculators</h2>
        <p className="text-center mb-6">
          Complete your project planning with these helpful calculators:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/asphalt-calculator" className="p-4 border rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="font-medium mb-1">Asphalt Calculator</div>
            <p className="text-sm text-muted-foreground">Calculate asphalt needs for paving projects</p>
          </Link>
          
          <Link href="/board-foot-calculator" className="p-4 border rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="font-medium mb-1">Board Foot Calculator</div>
            <p className="text-sm text-muted-foreground">Measure lumber volume for construction</p>
          </Link>
          
          <Link href="/pool-volume-calculator" className="p-4 border rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="font-medium mb-1">Pool Volume Calculator</div>
            <p className="text-sm text-muted-foreground">Determine water needs for your swimming pool</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GravelContent;
