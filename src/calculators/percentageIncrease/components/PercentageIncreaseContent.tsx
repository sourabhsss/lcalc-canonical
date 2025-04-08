
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Percent } from 'lucide-react';

const PercentageIncreaseContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Understanding Percentage Changes</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Percentage changes are fundamental measures used in finance, statistics, and everyday life to quantify relative changes in values.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Percent className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">What is Percentage Change?</h3>
            
            <p>
              Percentage change is a mathematical concept that expresses the relative change between two values as a proportion of the original value, multiplied by 100 to yield a percentage. It's a way to standardize changes across different scales, making comparisons more meaningful.
            </p>
            
            <p>
              Unlike absolute changes, which simply measure the arithmetic difference between values, percentage changes express this difference proportionally, allowing for more insightful comparisons across different contexts, time periods, or scales.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">The Mathematics of Percentage Change</h3>
            
            <p>
              The basic formula for percentage change is:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              Percentage Change = ((New Value - Original Value) / |Original Value|) × 100%
            </div>
            
            <p>
              This formula can be broken down into three key steps:
            </p>
            
            <ol>
              <li>Calculate the absolute change: New Value - Original Value</li>
              <li>Divide by the absolute value of the Original Value to get the relative change</li>
              <li>Multiply by 100 to express the result as a percentage</li>
            </ol>
            
            <p>
              When the result is positive, it indicates a percentage increase; when negative, it indicates a percentage decrease. A zero result means no change between the values.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Types of Percentage Calculations</h3>
            
            <h4 className="text-lg font-medium mt-6 mb-2">1. Percentage Change</h4>
            
            <p>
              As described above, percentage change measures the relative change between two values. For example, if a stock price changes from $100 to $120, the percentage change is:
            </p>
            
            <div className="bg-muted/30 p-3 font-mono my-4">
              ((120 - 100) / |100|) × 100% = (20 / 100) × 100% = 20%
            </div>
            
            <h4 className="text-lg font-medium mt-6 mb-2">2. Percentage Increase</h4>
            
            <p>
              Percentage increase specifically refers to positive percentage changes. To calculate a new value after a percentage increase:
            </p>
            
            <div className="bg-muted/30 p-3 font-mono my-4">
              New Value = Original Value × (1 + (Percentage / 100))
            </div>
            
            <p>
              For example, to find a new price after a 15% increase from $200:
            </p>
            
            <div className="bg-muted/30 p-3 font-mono my-4">
              New Value = $200 × (1 + (15/100)) = $200 × 1.15 = $230
            </div>
            
            <h4 className="text-lg font-medium mt-6 mb-2">3. Percentage Decrease</h4>
            
            <p>
              Percentage decrease refers to negative percentage changes. To calculate a new value after a percentage decrease:
            </p>
            
            <div className="bg-muted/30 p-3 font-mono my-4">
              New Value = Original Value × (1 - (Percentage / 100))
            </div>
            
            <p>
              For example, to find a new price after a 25% decrease from $80:
            </p>
            
            <div className="bg-muted/30 p-3 font-mono my-4">
              New Value = $80 × (1 - (25/100)) = $80 × 0.75 = $60
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Real-World Applications of Percentage Change</h3>
            
            <p>
              Percentage changes are ubiquitous across various fields and everyday contexts:
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">1. Finance and Investment</h4>
            
            <p>
              In the financial world, percentage changes are essential metrics:
            </p>
            
            <ul>
              <li>Stock market returns: The S&P 500 index saw a 26.9% return in 2021, followed by a -19.4% return in 2022, dramatically affecting investors' portfolios</li>
              <li>Inflation rates: According to the U.S. Bureau of Labor Statistics, the Consumer Price Index increased 3.7% over the 12 months ending September 2023</li>
              <li>Interest rates: When the Federal Reserve raises interest rates by 0.25 percentage points, it significantly impacts mortgage rates, credit card interest, and bond yields</li>
              <li>Compound annual growth rate (CAGR): Investors use CAGR to measure the mean annual growth rate of investments over multiple years</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">2. Business and Economics</h4>
            
            <p>
              Businesses and economists rely on percentage changes for critical analysis:
            </p>
            
            <ul>
              <li>Sales growth: Retailers often report year-over-year percentage changes to assess performance</li>
              <li>Profit margins: A company might analyze how a 5% increase in material costs affects its 15% profit margin</li>
              <li>GDP growth: The U.S. Bureau of Economic Analysis reported a 2.1% annual rate increase in real GDP for the second quarter of 2023</li>
              <li>Market share changes: A company might celebrate increasing its market share from 14% to 16.8%, representing a 20% relative increase</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">3. Science and Health</h4>
            
            <p>
              Scientific and medical fields frequently utilize percentage changes:
            </p>
            
            <ul>
              <li>Clinical trial efficacy: A medication might show a 35% reduction in symptoms compared to a placebo</li>
              <li>Population growth: Demographic studies might examine the 10.4% growth in U.S. Hispanic population between 2010 and 2020 according to Census Bureau data</li>
              <li>Disease prevalence: Epidemiologists track percentage changes in infection rates to monitor disease outbreaks</li>
              <li>Laboratory measurements: Many scientific experiments report results as percentage changes from baseline or control conditions</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">4. Personal Finance</h4>
            
            <p>
              Individuals use percentage calculations for everyday financial decisions:
            </p>
            
            <ul>
              <li>Discounts: Calculating the final price after a 30% off sale</li>
              <li>Tip calculation: Determining a 15% or 20% gratuity on a restaurant bill</li>
              <li>Salary increases: Evaluating a job offer with a 7% raise versus current compensation</li>
              <li>Retirement planning: Projecting account growth with assumed 7% annual returns</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Common Misconceptions About Percentage Changes</h3>
            
            <p>
              Several misconceptions often arise when working with percentage changes:
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Misconception 1: Percentage Points vs. Percentages</h4>
            
            <p>
              People frequently confuse percentage points and percentages. For example, if an interest rate increases from 2% to 3%, it's a 1 percentage point increase but a 50% relative increase. Similarly, if unemployment drops from 8% to 6%, that's a 2 percentage point decrease but a 25% relative decrease.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Misconception 2: Reversibility of Percentage Changes</h4>
            
            <p>
              A common error is assuming that a percentage increase followed by the same percentage decrease (or vice versa) returns to the original value. For example, a 50% increase followed by a 50% decrease does not return to the original value:
            </p>
            
            <ul>
              <li>Start with $100</li>
              <li>Increase by 50%: $100 × 1.5 = $150</li>
              <li>Decrease by 50%: $150 × 0.5 = $75</li>
              <li>Result: $75 (25% less than the original)</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Misconception 3: Averaging Percentages</h4>
            
            <p>
              Simple averaging of percentage changes often leads to incorrect results. For example, if an investment increases by 50% in year 1 and decreases by 50% in year 2, the average change is not 0%:
            </p>
            
            <ul>
              <li>Start with $1,000</li>
              <li>Year 1: $1,000 × 1.5 = $1,500 (50% increase)</li>
              <li>Year 2: $1,500 × 0.5 = $750 (50% decrease)</li>
              <li>Overall change: -25% (not 0%)</li>
              <li>Correct average: Use geometric mean or compound annual growth rate</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Special Cases in Percentage Calculations</h3>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Case 1: Zero as the Original Value</h4>
            
            <p>
              When the original value is zero, standard percentage change calculations break down since division by zero is undefined. If a value changes from 0 to any non-zero number, the percentage increase is technically infinite. In practice, this is often handled by:
            </p>
            
            <ul>
              <li>Reporting the absolute change instead of a percentage</li>
              <li>Establishing a minimum baseline value</li>
              <li>Using alternative metrics like percentage point differences</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Case 2: Negative Values</h4>
            
            <p>
              Percentage changes with negative values require careful interpretation. For example, if a company's profit changes from -$5 million to -$2 million, the calculation would be:
            </p>
            
            <div className="bg-muted/30 p-3 font-mono my-4">
              ((-2) - (-5)) / |-5| × 100% = 3/5 × 100% = 60%
            </div>
            
            <p>
              This represents a 60% improvement (reduction in losses), even though both values are negative.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Case 3: Very Large Percentage Changes</h4>
            
            <p>
              When values change dramatically (e.g., by 1000% or more), alternative representations may be more meaningful:
            </p>
            
            <ul>
              <li>Using multipliers: "The value increased 12-fold" instead of "The value increased by 1100%"</li>
              <li>Logarithmic scales: Often used in scientific presentations of large-scale changes</li>
              <li>Absolute changes: Sometimes more meaningful for practical interpretation</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Practical Tips for Working with Percentage Changes</h3>
            
            <ol>
              <li className="mb-2">
                <strong>Be Clear About Base Values:</strong> Always specify what value is being used as the denominator in percentage calculations.
              </li>
              <li className="mb-2">
                <strong>Use Consistent Time Periods:</strong> When comparing percentage changes, ensure the time periods are consistent (e.g., year-over-year, quarter-over-quarter).
              </li>
              <li className="mb-2">
                <strong>Consider Both Absolute and Relative Changes:</strong> A 50% increase from $2 to $3 is very different from a 50% increase from $2,000,000 to $3,000,000 in terms of absolute impact.
              </li>
              <li className="mb-2">
                <strong>Be Careful with Consecutive Percentage Changes:</strong> Use compounding principles when applying multiple percentage changes sequentially.
              </li>
              <li className="mb-2">
                <strong>Watch for Percentage Point Confusion:</strong> Be precise with language, distinguishing between percentage points and percentage changes.
              </li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How Our Percentage Change Calculator Works</h3>
            
            <p>
              Our calculator implements standard formulas for percentage calculations:
            </p>
            
            <ol>
              <li className="mb-2">
                <strong>Percentage Change:</strong> Calculates the relative change between two values, expressed as a percentage.
              </li>
              <li className="mb-2">
                <strong>Percentage Increase:</strong> Applies a positive percentage change to a base value to find the new value.
              </li>
              <li className="mb-2">
                <strong>Percentage Decrease:</strong> Applies a negative percentage change to a base value to find the new value.
              </li>
              <li className="mb-2">
                <strong>Special Case Handling:</strong> The calculator handles edge cases like zero values and provides informative messages.
              </li>
            </ol>
            
            <p>
              The calculator provides not only the numerical results but also step-by-step calculations and interpretations to help users understand the meaning behind the numbers.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Related Calculators</h3>
            
            <p>
              If you found our Percentage Change Calculator helpful, you might also benefit from these related tools:
            </p>
            
            <ul>
              <li className="mb-2">
                <a href="/combinations-calculator" className="text-primary hover:underline">Combinations Calculator</a> - Calculate the number of ways to select items without regard to order.
              </li>
              <li className="mb-2">
                <a href="/permutations-calculator" className="text-primary hover:underline">Permutations Calculator</a> - Calculate the number of ways to arrange items in order.
              </li>
              <li className="mb-2">
                <a href="/standard-deviation-calculator" className="text-primary hover:underline">Standard Deviation Calculator</a> - Measure the dispersion in a dataset.
              </li>
              <li className="mb-2">
                <a href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</a> - Calculate key statistical measures for data analysis.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PercentageIncreaseContent;
