
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import BoardFootCalculator from '@/calculators/boardFoot/BoardFootCalculator';
import FAQSection from '@/components/FAQSection';
import { Hammer, Building, RectangleHorizontal, Circle, Calculator } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BoardFootCalculatorPage: React.FC = () => {
  const faqs = [
    {
      question: "What is a board foot?",
      answer: "A board foot is a unit of volume for measuring lumber in North America. It is equal to 144 cubic inches, which represents a piece of wood measuring 1 foot × 1 foot × 1 inch, or any equivalent volume."
    },
    {
      question: "How do you calculate board feet?",
      answer: "The formula for calculating board feet is: (Thickness in inches × Width in inches × Length in feet) ÷ 12. For example, a board that is 2 inches thick, 6 inches wide, and 8 feet long would be (2 × 6 × 8) ÷ 12 = 8 board feet."
    },
    {
      question: "Why use board feet instead of cubic feet?",
      answer: "Board feet are preferred in the lumber industry because they provide a standardized unit specifically designed for wood products, which are typically sold in nominal dimensions. It's easier to calculate material costs for woodworking and construction projects using board feet rather than converting everything to cubic feet."
    },
    {
      question: "What is the difference between nominal and actual lumber dimensions?",
      answer: "Nominal dimensions are the 'named' size of lumber (e.g., 2×4), while actual dimensions are the true measured size after processing. For example, a nominal 2×4 typically has actual dimensions of 1.5×3.5 inches. When calculating board feet, you should use the actual dimensions for accurate results."
    },
    {
      question: "How do I calculate the cost of lumber using board feet?",
      answer: "To calculate the cost, multiply the number of board feet by the price per board foot. For example, if you need 100 board feet of lumber at $5 per board foot, the cost would be 100 × $5 = $500."
    },
    {
      question: "Can I calculate board feet for metric measurements?",
      answer: "Yes, you can convert metric measurements to inches first, then use the standard board foot formula. Our calculator allows you to input dimensions in inches, feet, centimeters, or meters and automatically performs the conversion for you."
    },
    {
      question: "What unit is commonly used for lumber pricing?",
      answer: "Lumber is typically priced per board foot ($/BF) in North America. This standardized pricing method allows for consistent cost calculations regardless of the specific dimensions of each piece."
    },
    {
      question: "How many board feet are in a 4×8 sheet of plywood?",
      answer: "A standard 4×8 foot sheet of plywood that is 3/4 inch thick would be: (0.75 × 48 × 96) ÷ 144 = 24 board feet. However, sheet goods like plywood are typically sold by the sheet rather than by board feet."
    }
  ];

  return (
    <CalculatorLayout
      title="Board Foot Calculator"
      description="Calculate board feet for lumber and woodworking projects with adjustable dimensions and units."
      metaDescription="Free Board Foot Calculator to determine the volume and cost of lumber. Perfect for woodworking projects, construction, and material estimation."
      canonicalUrl="https://lcalculator.com/board-foot-calculator"
    >
      <div className="container mx-auto px-4">
        <div className="py-12">
          <BoardFootCalculator />
        </div>

        <div className="py-8">
          <h2 className="text-2xl font-bold mb-6">Understanding Board Feet in Woodworking and Construction</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              In the world of woodworking, carpentry, and construction, accurate material estimation is crucial for both project planning and budgeting. Board feet (BF) serves as the standard unit of measurement for lumber volume in North America, providing a consistent way to calculate, price, and purchase wood materials regardless of their specific dimensions.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">What Exactly Is a Board Foot?</h3>
            <p>
              A board foot is defined as the volume of wood equivalent to a piece measuring 1 foot long, 1 foot wide, and 1 inch thick—or 144 cubic inches. This standardized unit allows lumberyards, mills, and wood suppliers to price their inventory consistently despite the wide variety of available dimensions.
            </p>
            
            <p>
              Unlike linear measurements that only account for length, or square measurements that only consider area, board feet incorporate all three dimensions—thickness, width, and length—to accurately represent the volume of wood. This comprehensive approach makes it particularly valuable when working with dimensional lumber, hardwoods, and custom-milled pieces.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">The Historical Significance of Board Feet</h3>
            <p>
              The board foot measurement system dates back to early American lumber trade practices. Before modern standardization, it provided a practical solution for trading wood of varying dimensions. This system has endured for centuries because of its simplicity and practicality in the lumber industry.
            </p>
            
            <p>
              Today, despite the rise of metric measurements in many industries, the board foot remains the dominant unit for lumber volume in North America. Its continued use highlights the wood industry's connection to traditional practices and the practical utility of this unique measurement system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <RectangleHorizontal className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Lumber Estimation</h4>
                  <p className="text-sm text-center">
                    Accurately calculate material requirements for construction and woodworking projects to minimize waste.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Calculator className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Cost Calculation</h4>
                  <p className="text-sm text-center">
                    Determine project budgets by converting board feet to cost based on current lumber prices.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <Hammer className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium text-center mb-2">Project Planning</h4>
                  <p className="text-sm text-center">
                    Plan woodworking and construction projects with precise material requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground">The Board Foot Formula Explained</h3>
            <p>
              Understanding how to calculate board feet is essential for anyone working with lumber. The standard formula is:
            </p>
            
            <div className="bg-primary/5 p-4 rounded-lg my-4 text-center font-medium">
              Board Feet = (Thickness in inches × Width in inches × Length in feet) ÷ 12
            </div>
            
            <p>
              This formula can be adapted for different unit preferences. If you prefer to work with all measurements in inches, the alternative formula is:
            </p>
            
            <div className="bg-primary/5 p-4 rounded-lg my-4 text-center font-medium">
              Board Feet = (Thickness in inches × Width in inches × Length in inches) ÷ 144
            </div>
            
            <p>
              Let's consider an example: Calculating the board feet for a piece of lumber that is 2 inches thick, 8 inches wide, and 10 feet long:
            </p>
            
            <div className="bg-muted p-4 rounded-lg my-4">
              <p>Board Feet = (2 × 8 × 10) ÷ 12</p>
              <p>Board Feet = 160 ÷ 12</p>
              <p>Board Feet = 13.33 BF</p>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">Practical Applications in Various Industries</h3>
            
            <h4 className="text-lg font-medium mt-6">Construction and Carpentry</h4>
            <p>
              In construction, board feet calculations are essential for estimating material needs for framing, flooring, and structural elements. For example, when building a deck, a contractor needs to calculate the board feet required for joists, beams, and decking to create an accurate materials list and budget.
            </p>
            
            <h4 className="text-lg font-medium mt-6">Fine Woodworking</h4>
            <p>
              Woodworkers use board feet calculations when purchasing specialty hardwoods, which are often priced by the board foot. This is particularly important when working with expensive woods like walnut, cherry, or exotic species, where accurate estimation can significantly impact project costs.
            </p>
            
            <h4 className="text-lg font-medium mt-6">Lumber Industry</h4>
            <p>
              Sawmills and timber companies rely on board foot measurements to inventory and price their products. The timber industry often uses a different calculation method called "log scale" to estimate the board feet yield from unharvested trees or raw logs.
            </p>
            
            <h4 className="text-lg font-medium mt-6">DIY and Home Improvement</h4>
            <p>
              Homeowners and DIY enthusiasts benefit from understanding board feet when planning projects like built-in shelving, custom furniture, or renovation work. It allows for more accurate material purchasing and helps prevent both shortages and excess waste.
            </p>
            
            <div className="border-l-4 border-primary pl-6 py-2 my-8">
              <p className="italic">
                "Understanding board feet calculations has saved me thousands of dollars over my 20-year career as a furniture maker. It allows me to purchase exactly what I need and accurately estimate project costs for clients."
              </p>
              <p className="font-medium mt-2">— Robert Chen, Master Woodworker</p>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">Lumber Pricing and Board Feet</h3>
            <p>
              Lumber pricing is typically quoted per board foot, making this calculation essential for budgeting projects. Current lumber prices can vary significantly based on:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Wood species (pine vs. maple vs. oak)</li>
              <li>Grade quality (select, #1 common, #2 common)</li>
              <li>Market conditions and availability</li>
              <li>Processing level (rough-sawn vs. surfaced)</li>
              <li>Special treatments (kiln dried, pressure treated)</li>
            </ul>
            
            <p className="mt-4">
              As of 2023, average lumber prices per board foot in North America range from:
            </p>
            
            <table className="w-full border-collapse my-4">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-2 text-left">Wood Type</th>
                  <th className="border p-2 text-left">Price Range (per board foot)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Pine (construction grade)</td>
                  <td className="border p-2">$2.00 - $4.00</td>
                </tr>
                <tr>
                  <td className="border p-2">Oak (red)</td>
                  <td className="border p-2">$5.00 - $8.00</td>
                </tr>
                <tr>
                  <td className="border p-2">Maple (hard)</td>
                  <td className="border p-2">$6.00 - $10.00</td>
                </tr>
                <tr>
                  <td className="border p-2">Walnut</td>
                  <td className="border p-2">$10.00 - $15.00</td>
                </tr>
                <tr>
                  <td className="border p-2">Exotic species (teak, mahogany)</td>
                  <td className="border p-2">$15.00 - $25.00+</td>
                </tr>
              </tbody>
            </table>
            
            <p className="text-sm italic">*Prices may vary by region, quality, and market conditions.</p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">Common Mistakes in Board Foot Calculations</h3>
            <p>
              Even experienced professionals can make errors when calculating board feet. Here are some common mistakes to avoid:
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-start">
                <div className="bg-destructive/10 p-2 rounded-full mr-3 mt-1">
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <div>
                  <p className="font-medium">Using nominal instead of actual dimensions</p>
                  <p className="text-sm">A "2×4" actually measures 1.5×3.5 inches. Always use actual dimensions for accurate calculations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-destructive/10 p-2 rounded-full mr-3 mt-1">
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <div>
                  <p className="font-medium">Confusing the length unit</p>
                  <p className="text-sm">Ensure you're using feet for length in the standard formula, or convert all measurements to inches and use the alternative formula.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-destructive/10 p-2 rounded-full mr-3 mt-1">
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <div>
                  <p className="font-medium">Neglecting to account for waste</p>
                  <p className="text-sm">Add 10-15% to your calculated board feet to account for cutting waste, defects, and errors.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-destructive/10 p-2 rounded-full mr-3 mt-1">
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <div>
                  <p className="font-medium">Miscounting quantity</p>
                  <p className="text-sm">When calculating for multiple pieces, be sure to multiply the board feet by the number of pieces needed.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">Related Calculators and Tools</h3>
            <p>
              For comprehensive project planning, you might also find these related calculators useful:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <a href="/mortgage-calculator" className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Mortgage Calculator</span>
                </div>
                <p className="text-sm mt-1 text-muted-foreground">Calculate financing for construction or renovation projects.</p>
              </a>
              
              <a href="/asphalt-calculator" className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors">
                <div className="flex items-center">
                  <Circle className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium">Asphalt Calculator</span>
                </div>
                <p className="text-sm mt-1 text-muted-foreground">Estimate paving material needs for driveways and paths.</p>
              </a>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">Sustainable Lumber Practices</h3>
            <p>
              When planning your lumber needs using board feet, consider the environmental impact of your materials. Sustainable options include:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>FSC-certified lumber from responsibly managed forests</li>
              <li>Reclaimed or salvaged wood from old structures</li>
              <li>Locally sourced materials that reduce transportation emissions</li>
              <li>Alternative materials like bamboo or composite products</li>
            </ul>
            
            <p className="mt-4">
              By accurately calculating your board feet needs, you not only save money but also reduce waste, supporting more sustainable building practices.
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mt-8">Conclusion</h3>
            <p>
              The board foot remains an essential measurement unit in the lumber and woodworking industries. By understanding how to calculate and apply this measurement, you can more effectively plan projects, estimate costs, and purchase materials. Our Board Foot Calculator simplifies this process, allowing you to focus on the creative and technical aspects of your woodworking and construction projects.
            </p>
            
            <p className="mt-4">
              Whether you're a professional contractor, a skilled furniture maker, or a weekend DIY enthusiast, mastering board foot calculations will enhance your efficiency and precision in working with wood.
            </p>
          </div>
        </div>

        <FAQSection faqs={faqs} />
        
        <div className="py-12">
          <h2 className="text-2xl font-bold mb-6">Other Construction Calculators You Might Find Useful</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/asphalt-calculator" className="block p-6 border rounded-lg hover:bg-primary/5 transition-colors">
              <div className="flex items-center mb-3">
                <Circle className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-medium text-lg">Asphalt Calculator</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Calculate the required amount of asphalt for your paving project and estimate costs.
              </p>
            </a>
            
            <a href="/gravel-calculator" className="block p-6 border rounded-lg hover:bg-primary/5 transition-colors">
              <div className="flex items-center mb-3">
                <Circle className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-medium text-lg">Gravel Calculator</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Determine the amount of gravel needed for your landscaping or construction projects.
              </p>
            </a>
            
            <a href="/mortgage-calculator" className="block p-6 border rounded-lg hover:bg-primary/5 transition-colors">
              <div className="flex items-center mb-3">
                <Hammer className="h-6 w-6 text-primary mr-2" />
                <h3 className="font-medium text-lg">Mortgage Calculator</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Calculate your monthly mortgage payment, total interest, and amortization schedule.
              </p>
            </a>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
};

export default BoardFootCalculatorPage;
