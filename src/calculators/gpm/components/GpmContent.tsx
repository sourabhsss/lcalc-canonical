import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const GpmContent: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4" id="what-is-gpm">What is GPM (Gallons Per Minute)?</h2>
        <p className="mb-4">
          Gallons Per Minute (GPM) is a unit of flow rate that measures the volume of liquid passing through a point in a system over a one-minute period. It is one of the most common measurements used in plumbing, irrigation, water treatment, and various industrial applications across the United States and other countries that use the imperial system.
        </p>
        <p className="mb-4">
          Understanding GPM is crucial for properly sizing and selecting pumps, pipes, fixtures, and other components in water systems. Whether you're a homeowner trying to determine if your water supply is adequate for your needs, a plumber sizing pipes for a new installation, or an engineer designing an industrial water system, knowing how to calculate and interpret GPM is essential.
        </p>
        <p>
          In the metric system, flow rates are often measured in liters per minute (L/min) or cubic meters per hour (m³/h). Our calculator conveniently provides conversions between these common units to assist with international projects and specifications.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" id="gpm-applications">Applications of GPM Measurements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Residential Plumbing</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Household fixture requirements (typical ranges):
                <ul className="list-disc pl-5 mt-2">
                  <li>Bathroom faucet: 1.0 - 2.2 GPM</li>
                  <li>Kitchen faucet: 1.5 - 2.5 GPM</li>
                  <li>Showerhead: 1.5 - 2.5 GPM (federal regulation limits most to 2.5 GPM)</li>
                  <li>Toilet: 1.6 GPM (during flush)</li>
                  <li>Washing machine: 4 - 12 GPM</li>
                  <li>Dishwasher: 2 - 3 GPM</li>
                </ul>
              </li>
              <li>Whole house water requirements:
                <ul className="list-disc pl-5 mt-2">
                  <li>Small home (1-2 people): 6-12 GPM</li>
                  <li>Average home (3-4 people): 12-16 GPM</li>
                  <li>Large home (5+ people): 16-25 GPM</li>
                </ul>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <Link href="/pool-volume-calculator" className="text-primary hover:underline">
                Learn more about water volume calculations for swimming pools
              </Link>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Irrigation & Agriculture</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sprinkler system design:
                <ul className="list-disc pl-5 mt-2">
                  <li>Spray heads: 0.5 - 3 GPM per head</li>
                  <li>Rotors: 2 - 7 GPM per head</li>
                  <li>Drip irrigation: 0.5 - 4 GPM per 100 feet of tubing</li>
                </ul>
              </li>
              <li>Agricultural irrigation:
                <ul className="list-disc pl-5 mt-2">
                  <li>Center pivot systems: 500 - 2,000+ GPM</li>
                  <li>Flood irrigation: 1,000+ GPM</li>
                </ul>
              </li>
              <li>Water requirement factors:
                <ul className="list-disc pl-5 mt-2">
                  <li>Soil type and absorption rate</li>
                  <li>Plant type and water needs</li>
                  <li>Climate and evaporation rate</li>
                  <li>Irrigation method efficiency</li>
                </ul>
              </li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Commercial & Industrial Systems</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Commercial buildings:
                <ul className="list-disc pl-5 mt-2">
                  <li>Small office: 20 - 30 GPM</li>
                  <li>Medium commercial: 30 - 75 GPM</li>
                  <li>Large commercial: 75 - 150+ GPM</li>
                </ul>
              </li>
              <li>Fire protection systems:
                <ul className="list-disc pl-5 mt-2">
                  <li>Fire hose: 100 - 250 GPM</li>
                  <li>Fire sprinkler systems: Based on hazard classification and area</li>
                  <li>Standpipes: 250 - 500+ GPM</li>
                </ul>
              </li>
              <li>Industrial processes:
                <ul className="list-disc pl-5 mt-2">
                  <li>Cooling systems: Varies widely (100 - 10,000+ GPM)</li>
                  <li>Manufacturing: Process-specific requirements</li>
                  <li>Water treatment: Based on facility capacity</li>
                </ul>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <Link href="/asphalt-calculator" className="text-primary hover:underline">
                Calculate materials for construction projects
              </Link>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Well Systems & Water Supply</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Well pump sizing:
                <ul className="list-disc pl-5 mt-2">
                  <li>Residential well pumps: 5 - 30 GPM</li>
                  <li>Recovery rate: Critical factor in well system design</li>
                </ul>
              </li>
              <li>Municipal water systems:
                <ul className="list-disc pl-5 mt-2">
                  <li>Residential connections: 0.5 - 1.0 GPM per person (average)</li>
                  <li>Peak demand factors: 2 - 4 times average flow</li>
                </ul>
              </li>
              <li>System components:
                <ul className="list-disc pl-5 mt-2">
                  <li>Pressure tanks: Sized according to pump GPM</li>
                  <li>Water heaters: Flow rate affects recovery time</li>
                  <li>Water softeners & filters: Have maximum flow rate specifications</li>
                </ul>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4" id="factors-affecting-gpm">Factors Affecting Flow Rate (GPM)</h2>
        <p className="mb-4">
          Several factors can affect the flow rate in a water system. Understanding these influences helps in diagnosing issues and designing efficient systems:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">1. Pipe Diameter</h3>
            <p className="ml-5">
              Pipe diameter has an exponential effect on flow capacity. According to fluid dynamics principles, flow capacity increases with the square of the diameter. For example, doubling the pipe diameter increases the potential flow capacity by approximately four times. This is why even small changes in pipe diameter can dramatically affect GPM.
            </p>
            <table className="ml-5 mt-2 min-w-[400px] border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-2 text-left">Pipe Size (inches)</th>
                  <th className="border p-2 text-left">Typical Max Flow Rate (GPM)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">½"</td>
                  <td className="border p-2">10 GPM</td>
                </tr>
                <tr>
                  <td className="border p-2">¾"</td>
                  <td className="border p-2">18 GPM</td>
                </tr>
                <tr>
                  <td className="border p-2">1"</td>
                  <td className="border p-2">30 GPM</td>
                </tr>
                <tr>
                  <td className="border p-2">1½"</td>
                  <td className="border p-2">65 GPM</td>
                </tr>
                <tr>
                  <td className="border p-2">2"</td>
                  <td className="border p-2">115 GPM</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">2. Water Pressure</h3>
            <p className="ml-5">
              Flow rate and pressure are directly related. Higher pressure generally results in higher flow rates, though this relationship isn't linear and depends on system resistance. For residential systems:
            </p>
            <ul className="list-disc ml-10 mt-2">
              <li>Low pressure (30-40 psi): Typically produces lower flow rates</li>
              <li>Normal pressure (45-60 psi): Standard residential pressure range</li>
              <li>High pressure (65-80 psi): Can provide higher flow rates but may stress plumbing components</li>
            </ul>
            <p className="ml-5 mt-2">
              Note: Most residential plumbing codes require a pressure regulator if supply pressure exceeds 80 psi.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">3. Pipe Length and Configuration</h3>
            <p className="ml-5">
              The longer the pipe, the greater the friction loss and pressure drop, resulting in reduced flow rates. Each bend, elbow, valve, or fitting adds resistance to the system. For example:
            </p>
            <ul className="list-disc ml-10 mt-2">
              <li>A 90° elbow creates resistance equivalent to approximately 2-5 feet of straight pipe</li>
              <li>A standard gate valve (fully open) equals about 1-2 feet of pipe resistance</li>
              <li>A standard globe valve (fully open) can equal 15-40 feet of pipe resistance</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">4. Pipe Material</h3>
            <p className="ml-5">
              Different pipe materials have different internal surface roughness, affecting friction loss:
            </p>
            <ul className="list-disc ml-10 mt-2">
              <li>PEX and copper: Smoother surface, less friction loss</li>
              <li>PVC and CPVC: Good flow characteristics</li>
              <li>Galvanized steel: Rougher surface, more friction loss</li>
              <li>Old pipes: Scale and mineral buildup increase roughness over time</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">5. Temperature</h3>
            <p className="ml-5">
              Water temperature affects viscosity and density, which impact flow characteristics:
            </p>
            <ul className="list-disc ml-10 mt-2">
              <li>Cold water (40°F/4°C) is more viscous and produces slightly lower flow rates</li>
              <li>Hot water (120°F/49°C) is less viscous and can flow more easily</li>
            </ul>
            <p className="ml-5 mt-2">
              This difference is typically minor in residential systems but can be significant in industrial applications.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4" id="measuring-methods">Methods to Measure GPM</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Container Method</h3>
            <p className="mb-3">
              The container method is one of the simplest ways to measure GPM for smaller flow rates:
            </p>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Get a container with a known volume (e.g., a 5-gallon bucket)</li>
              <li>Use a stopwatch to time how long it takes to fill the container</li>
              <li>Calculate GPM using the formula: GPM = Volume (in gallons) ÷ Time (in minutes)</li>
            </ol>
            <p className="mt-3">
              <strong>Example:</strong> If a 5-gallon bucket fills in 45 seconds, the calculation would be:
              <br />
              GPM = 5 gallons ÷ (45 seconds ÷ 60 seconds/minute) = 5 gallons ÷ 0.75 minutes = 6.67 GPM
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Flow Meter Method</h3>
            <p className="mb-3">
              Flow meters provide direct GPM readings and come in several types:
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li><strong>Mechanical flow meters:</strong> Use turbines or propellers that rotate as water passes through</li>
              <li><strong>Magnetic flow meters:</strong> Measure flow based on electromagnetic principles, with no moving parts</li>
              <li><strong>Ultrasonic flow meters:</strong> Use sound waves to calculate flow rates without intrusion into the pipe</li>
              <li><strong>Variable area flow meters:</strong> Simple visual meters with a float in a tapered tube</li>
            </ul>
            <p className="mt-3">
              For professional applications, flow meters provide the most accurate and consistent measurements.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Pressure-Based Calculation</h3>
            <p className="mb-3">
              For systems where direct measurement isn't feasible, flow can be calculated based on pressure readings:
            </p>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Measure pressure at two points in the system</li>
              <li>Calculate head loss between these points</li>
              <li>Use flow formulas (like the Hazen-Williams or Darcy-Weisbach equations) to determine flow rate</li>
            </ol>
            <p className="mt-3">
              This method requires knowledge of pipe specifications and fluid characteristics, making it more complex but useful for existing systems where direct measurement is difficult.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tracer Methods</h3>
            <p className="mb-3">
              Used primarily in larger systems or for verification:
            </p>
            <ul className="list-disc ml-5">
              <li>Salt-dissolution method: Introducing and measuring dilution of a salt solution</li>
              <li>Dye-dilution method: Measuring the dilution rate of a colored dye</li>
            </ul>
            <p className="mt-3">
              These methods are specialized and typically used in municipal or environmental applications rather than residential settings.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4" id="troubleshooting">Troubleshooting Low Flow Rate Issues</h2>
        <p className="mb-4">
          If you're experiencing lower-than-expected GPM in your system, consider these common issues and solutions:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Residential Water Systems</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Clogged aerators or showerheads:</strong> Mineral buildup can restrict flow. Solution: Remove and clean with vinegar solution.</li>
              <li><strong>Partially closed valves:</strong> Main shutoff or fixture valves may not be fully open. Solution: Locate and fully open all valves.</li>
              <li><strong>Pressure regulator issues:</strong> Failed or improperly adjusted pressure regulators affect flow. Solution: Test pressure and adjust or replace regulator.</li>
              <li><strong>Pipe corrosion or scale:</strong> Internal buildup in older pipes reduces diameter. Solution: Consider pipe cleaning or replacement.</li>
              <li><strong>Water filtration restrictions:</strong> Clogged filters create back pressure. Solution: Replace filter cartridges according to schedule.</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Well Systems</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Well pump issues:</strong> Aging pumps lose efficiency. Solution: Test pump performance and replace if necessary.</li>
              <li><strong>Dropping water table:</strong> Seasonal changes affect well capacity. Solution: Monitor levels and adjust system accordingly.</li>
              <li><strong>Clogged inlet screen:</strong> Sediment can block pump intake. Solution: Clean or replace inlet screen.</li>
              <li><strong>Pressure tank problems:</strong> Waterlogged tanks or failed bladders affect flow. Solution: Check air charge and replace tank if needed.</li>
              <li><strong>Control switch malfunction:</strong> Incorrect pressure settings limit flow capacity. Solution: Adjust or replace pressure switch.</li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Irrigation Systems</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Clogged sprinkler heads:</strong> Dirt and debris restrict flow. Solution: Clean or replace heads.</li>
              <li><strong>Too many heads per zone:</strong> Exceeding zone capacity reduces pressure. Solution: Redesign zones with fewer heads per circuit.</li>
              <li><strong>Pinched or damaged pipes:</strong> Underground damage restricts flow. Solution: Locate and repair damaged sections.</li>
              <li><strong>Undersized mainline or laterals:</strong> Insufficient pipe diameter for flow requirements. Solution: Upgrade to larger diameter pipes.</li>
              <li><strong>Valves not fully opening:</strong> Failed diaphragms or solenoids prevent full flow. Solution: Repair or replace valves.</li>
            </ul>
            <div className="mt-4 text-sm">
              <Link href="/gravel-calculator" className="text-primary hover:underline">
                Calculate gravel needs for landscaping projects
              </Link>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-3">Commercial/Industrial Systems</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Pump curve misalignment:</strong> Operating outside design parameters. Solution: Verify system requirements against pump specifications.</li>
              <li><strong>System air locks:</strong> Trapped air pockets restrict flow. Solution: Install air release valves at high points.</li>
              <li><strong>VFD settings:</strong> Incorrect variable frequency drive programming. Solution: Recalibrate drive settings.</li>
              <li><strong>Inadequate supply:</strong> Source limitations affect available flow. Solution: Evaluate supply capacity and consider supplementary sources.</li>
              <li><strong>Excessive pressure loss:</strong> System design inefficiencies create restrictions. Solution: Redesign problematic sections with larger pipes or fewer fittings.</li>
            </ul>
          </Card>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Professional Testing</h3>
          <p>
            For persistent flow issues, professional testing can pinpoint problems that aren't immediately apparent:
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Comprehensive pressure testing across system points</li>
            <li>Video inspection of internal pipe conditions</li>
            <li>Ultrasonic flow measurement for non-invasive diagnostics</li>
            <li>Hydrant flow testing for municipal water supply evaluation</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4" id="gpm-regulations">GPM Regulations and Conservation</h2>
        <p className="mb-4">
          Water conservation efforts have led to regulations limiting maximum flow rates for various fixtures:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-2 text-left">Fixture Type</th>
                <th className="border p-2 text-left">Pre-1994 Standard</th>
                <th className="border p-2 text-left">Current US Federal Standard</th>
                <th className="border p-2 text-left">WaterSense Standard</th>
                <th className="border p-2 text-left">California Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Showerheads</td>
                <td className="border p-2">5.0+ GPM</td>
                <td className="border p-2">2.5 GPM</td>
                <td className="border p-2">≤ 2.0 GPM</td>
                <td className="border p-2">1.8 GPM</td>
              </tr>
              <tr>
                <td className="border p-2">Bathroom Faucets</td>
                <td className="border p-2">3.0+ GPM</td>
                <td className="border p-2">2.2 GPM</td>
                <td className="border p-2">≤ 1.5 GPM</td>
                <td className="border p-2">1.2 GPM</td>
              </tr>
              <tr>
                <td className="border p-2">Kitchen Faucets</td>
                <td className="border p-2">3.0+ GPM</td>
                <td className="border p-2">2.2 GPM</td>
                <td className="border p-2">≤ 1.8 GPM</td>
                <td className="border p-2">1.8 GPM</td>
              </tr>
              <tr>
                <td className="border p-2">Toilets</td>
                <td className="border p-2">3.5+ GPF</td>
                <td className="border p-2">1.6 GPF</td>
                <td className="border p-2">≤ 1.28 GPF</td>
                <td className="border p-2">1.28 GPF</td>
              </tr>
              <tr>
                <td className="border p-2">Pre-rinse Spray Valves</td>
                <td className="border p-2">4.0+ GPM</td>
                <td className="border p-2">1.6 GPM</td>
                <td className="border p-2">≤ 1.3 GPM</td>
                <td className="border p-2">1.3 GPM</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Water-Saving Impact</h3>
          <p className="mb-3">
            The reduction in fixture flow rates has had a significant impact on water conservation:
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>A household that replaces all pre-1994 fixtures with WaterSense-labeled fixtures can save approximately 20,000 gallons of water per year.</li>
            <li>Modern showerheads use 40% less water than their pre-1994 counterparts.</li>
            <li>High-efficiency toilets can save up to 13,000 gallons of water per year for a family of four.</li>
            <li>Commercial kitchens with efficient pre-rinse spray valves can save about 7,000 gallons of water per year per valve.</li>
          </ul>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Economic Benefits</h3>
          <p className="mb-3">
            Lower flow rates not only conserve water but also provide economic benefits:
          </p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Reduced water bills due to lower consumption</li>
            <li>Lower energy costs from heating less water</li>
            <li>Decreased wastewater treatment costs</li>
            <li>Reduced strain on municipal water supply infrastructure</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GpmContent;
