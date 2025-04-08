import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Ruler, Layers, FileText } from 'lucide-react';

const AsphaltContent: React.FC = () => {
  return (
    <div className="mt-12 space-y-8">
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">Understanding Asphalt Calculation: A Comprehensive Guide</h2>
        
        <p>
          Asphalt, also known as bituminous concrete, is one of the most widely used paving materials in the world. 
          Whether you're planning a new driveway, parking lot, road, or pathway, accurate calculation of asphalt 
          quantities is crucial for budgeting and material ordering. This guide provides in-depth information about 
          asphalt calculation, types, costs, and best practices to help you plan your paving project effectively.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">The Science Behind Asphalt</h3>
        
        <p>
          Asphalt is a composite material consisting of aggregate (stone, sand, and gravel) bound together with bitumen, 
          a sticky, black, and highly viscous liquid that forms the petroleum byproduct. The precise composition varies 
          depending on the intended use, climate conditions, and local specifications, but typically contains:
        </p>
        
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>Aggregate (93-97%):</strong> Crushed stone, gravel, and sand that provide strength and structure</li>
          <li><strong>Bitumen (3-7%):</strong> The petroleum-based binder that holds the aggregate together</li>
          <li><strong>Additives:</strong> Various materials added to enhance performance, including polymers, anti-stripping agents, and fibers</li>
        </ul>
        
        <p>
          According to the National Asphalt Pavement Association (NAPA), asphalt is used in approximately 94% of the 
          2.6 million miles of paved roads in the United States, making it the nation's most recycled material by weight. 
          In fact, over 80 million tons of asphalt pavement material is reclaimed each year, and over 99% of that is reused 
          or recycled.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Common Types of Asphalt for Different Applications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Hot Mix Asphalt (HMA)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The most common type, produced at 300-350°F (150-175°C). Provides excellent durability and water resistance.
                Ideal for high-traffic roads, highways, and commercial applications.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Warm Mix Asphalt (WMA)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Produced at lower temperatures (250-275°F/120-135°C), reducing energy use and emissions.
                Comparable performance to HMA with environmental benefits.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Cold Mix Asphalt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prepared without heating, using emulsified or cutback asphalt.
                Primarily used for patching and repairs, especially during cold weather.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Porous or Permeable Asphalt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Allows water to drain through the surface, reducing runoff and replenishing groundwater.
                Beneficial for environmentally sensitive areas and stormwater management.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">How to Calculate Asphalt Quantities</h3>
        
        <p>
          Calculating the correct amount of asphalt for your project involves several steps:
        </p>
        
        <ol className="list-decimal pl-6 my-4 space-y-3">
          <li>
            <strong>Measure the area:</strong> Determine the length and width of the surface to be paved. For irregular
            shapes, break the area into rectangles and triangles, calculate each separately, and sum the results.
          </li>
          <li>
            <strong>Determine the required depth:</strong> The appropriate depth depends on the intended use:
            <ul className="list-disc pl-6 my-2">
              <li>Residential driveways: 2-3 inches (5-7.5 cm)</li>
              <li>Commercial parking lots: 3-4 inches (7.5-10 cm)</li>
              <li>Heavy traffic roads: 4-6 inches (10-15 cm)</li>
            </ul>
          </li>
          <li>
            <strong>Calculate volume:</strong> Multiply the area by the depth to determine the volume of compacted asphalt needed.
          </li>
          <li>
            <strong>Convert to weight:</strong> Asphalt is sold by weight, not volume. The standard density values are:
            <ul className="list-disc pl-6 my-2">
              <li>Imperial: 145 pounds per cubic foot (approximately 2 tons per cubic yard)</li>
              <li>Metric: 2.4 tonnes per cubic meter</li>
            </ul>
          </li>
          <li>
            <strong>Add waste factor:</strong> Include an additional 5-10% to account for waste, compaction, and spillage.
          </li>
        </ol>
        
        <p>
          For example, a driveway measuring 40 feet long by 12 feet wide with a 3-inch depth would require:
        </p>
        <ul className="list-disc pl-6 my-2">
          <li>Area: 40 ft × 12 ft = 480 ft²</li>
          <li>Volume: 480 ft² × 0.25 ft (3 inches) = 120 ft³</li>
          <li>Weight: 120 ft³ × 145 lbs/ft³ = 17,400 lbs = 8.7 tons</li>
          <li>With 10% waste: 8.7 tons × 1.1 = 9.57 tons</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Cost Considerations for Asphalt Projects</h3>
        
        <p>
          According to industry data, the national average cost of asphalt in 2023 ranges from $85 to $155 per ton, 
          with significant regional variations. For a complete installation, costs typically range:
        </p>
        
        <table className="min-w-full border border-border my-4">
          <thead className="bg-primary/5">
            <tr>
              <th className="border border-border px-4 py-2">Application</th>
              <th className="border border-border px-4 py-2">Cost per Square Foot</th>
              <th className="border border-border px-4 py-2">Average Cost (Typical Project)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Residential Driveway</td>
              <td className="border border-border px-4 py-2">$3.50 - $7.00</td>
              <td className="border border-border px-4 py-2">$3,500 - $7,000 (500 sq ft)</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Commercial Parking Lot</td>
              <td className="border border-border px-4 py-2">$2.50 - $5.50</td>
              <td className="border border-border px-4 py-2">$25,000 - $55,000 (10,000 sq ft)</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Private Road</td>
              <td className="border border-border px-4 py-2">$4.00 - $8.00</td>
              <td className="border border-border px-4 py-2">$16,000 - $32,000 (400 ft × 10 ft)</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Asphalt Resurfacing</td>
              <td className="border border-border px-4 py-2">$2.00 - $4.00</td>
              <td className="border border-border px-4 py-2">$2,000 - $4,000 (1,000 sq ft)</td>
            </tr>
          </tbody>
        </table>
        
        <p>
          These costs include materials, labor, equipment, and basic site preparation. Additional factors that affect the 
          final price include:
        </p>
        
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li><strong>Site preparation requirements:</strong> Excavation, drainage solutions, base installation</li>
          <li><strong>Accessibility:</strong> Difficult-to-reach locations may increase costs</li>
          <li><strong>Local regulations:</strong> Permits, inspections, and compliance requirements</li>
          <li><strong>Seasonal factors:</strong> Prices may be higher during peak construction seasons</li>
          <li><strong>Oil prices:</strong> Since bitumen is a petroleum product, fluctuations in oil prices affect asphalt costs</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Environmental Considerations</h3>
        
        <p>
          The asphalt industry has made significant strides in sustainability in recent decades:
        </p>
        
        <ul className="list-disc pl-6 my-4 space-y-2">
          <li>
            <strong>Recycled Content:</strong> Reclaimed Asphalt Pavement (RAP) utilization saves over 50 million barrels of oil annually.
            According to the Federal Highway Administration, asphalt pavements are recycled at a rate of over 99%.
          </li>
          <li>
            <strong>Reduced Emissions:</strong> Warm-mix asphalt technologies reduce production temperatures, cutting emissions by 20-30% 
            compared to traditional hot-mix methods.
          </li>
          <li>
            <strong>Porous Asphalt Solutions:</strong> These systems allow water to drain through the pavement surface into a stone recharge 
            bed and infiltrate into the soils below, reducing stormwater runoff and replenishing groundwater.
          </li>
          <li>
            <strong>Perpetual Pavement Design:</strong> This approach creates long-lasting asphalt roads that need only periodic surface 
            renewal, reducing lifecycle resource consumption.
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Best Practices for Asphalt Installation</h3>
        
        <p>
          Whether you're hiring professionals or considering DIY for smaller projects, understanding these best practices 
          will help ensure a successful and long-lasting asphalt installation:
        </p>
        
        <ol className="list-decimal pl-6 my-4 space-y-3">
          <li>
            <strong>Proper base preparation:</strong> A well-compacted base of 4-8 inches of crushed stone or gravel is essential 
            for preventing settling and cracking.
          </li>
          <li>
            <strong>Adequate drainage:</strong> Ensure the paved area has a slope of at least 1-2% to prevent water pooling, which 
            can damage asphalt over time.
          </li>
          <li>
            <strong>Weather conditions:</strong> Install asphalt when temperatures are above 50°F (10°C) and no rain is forecasted 
            for at least 24 hours.
          </li>
          <li>
            <strong>Edge restraints:</strong> Install concrete curbs or steel edging along the perimeter to prevent the asphalt 
            from cracking or spreading at the edges.
          </li>
          <li>
            <strong>Proper compaction:</strong> Use appropriate equipment to achieve 95% or greater compaction density for maximum 
            strength and durability.
          </li>
          <li>
            <strong>Sealcoating:</strong> Apply the first sealcoat approximately 6-12 months after installation, then every 2-3 
            years thereafter to protect from UV damage, water penetration, and chemical spills.
          </li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Asphalt vs. Concrete: Making the Right Choice</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Asphalt Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li>Lower initial cost ($2.50-$7.00 per sq ft vs. $4.00-$10.00 for concrete)</li>
                <li>Faster installation and curing (1-2 days vs. 5-7 days for concrete)</li>
                <li>Better performance in freezing conditions and snow/ice removal</li>
                <li>Easier and less expensive to repair</li>
                <li>Smoother and quieter driving surface</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Concrete Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li>Longer lifespan (20-30 years vs. 15-20 years for asphalt)</li>
                <li>Less maintenance required over lifetime</li>
                <li>Better resistance to oils and chemicals</li>
                <li>More aesthetic options (colors, stamping, textures)</li>
                <li>Better performance in hot climates (no softening)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <p>
          Climate considerations play a significant role in this decision. In northern regions with freeze-thaw cycles, 
          asphalt's flexibility can be advantageous. In southern regions with extreme heat, concrete might perform better 
          as it doesn't soften in high temperatures.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Related Construction Projects and Calculators</h3>
        
        <p>
          If you're planning an asphalt project, you might find these related calculators helpful:
        </p>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4 flex items-center space-x-4">
              <Layers className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Concrete Calculator</h3>
                <p className="text-sm text-gray-600">Calculate concrete volume</p>
              </div>
              <Calculator className="h-5 w-5 ml-auto" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 flex items-center space-x-4">
              <Ruler className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">Area Calculator</h3>
                <p className="text-sm text-gray-600">Calculate surface area</p>
              </div>
              <FileText className="h-5 w-5 ml-auto" />
            </CardContent>
          </Card>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Maintenance Tips for Asphalt Longevity</h3>
        
        <p>
          Proper maintenance can significantly extend the life of your asphalt surface:
        </p>
        
        <ol className="list-decimal pl-6 my-4 space-y-2">
          <li>
            <strong>Regular cleaning:</strong> Remove debris, dirt, and vegetation to prevent damage and staining.
          </li>
          <li>
            <strong>Sealcoating:</strong> Apply a protective sealcoat every 2-3 years to shield from UV rays, water, and chemicals.
          </li>
          <li>
            <strong>Crack filling:</strong> Address small cracks promptly before they expand or allow water infiltration.
          </li>
          <li>
            <strong>Pothole repair:</strong> Fix potholes immediately to prevent them from expanding and causing further damage.
          </li>
          <li>
            <strong>Edge maintenance:</strong> Keep edges supported and repair any crumbling to maintain structural integrity.
          </li>
          <li>
            <strong>Drainage upkeep:</strong> Ensure proper drainage systems continue to function effectively to prevent water damage.
          </li>
          <li>
            <strong>Oil stain removal:</strong> Clean oil and chemical spills promptly using appropriate cleaners or absorbents.
          </li>
        </ol>
        
        <p>
          A comprehensive maintenance program can potentially double the lifespan of your asphalt surface, providing 
          a better return on investment and reducing the frequency of major repairs or replacements.
        </p>
      </div>
    </div>
  );
};

export default AsphaltContent;
