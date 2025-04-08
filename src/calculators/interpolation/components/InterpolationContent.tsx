import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { interpolationExamples } from '../interpolationUtils';

const InterpolationContent: React.FC = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-4">Understanding Interpolation</h2>
        
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methods">Methods</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="guide">Practical Guide</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4 space-y-4">
            <p>
              Interpolation is a mathematical technique used to estimate unknown values that fall between known data points. 
              When we have a set of data points but need to find values between these points, interpolation helps us make 
              educated guesses based on the patterns in our existing data.
            </p>
            
            <p>
              Think of interpolation like connecting dots on a graph. If you know the height of a tree when it was 5 years old and 
              10 years old, interpolation can help you estimate how tall it was at 7 years old, even though you didn't measure it 
              at that time.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Why Is Interpolation Important?</h3>
            <p>
              Interpolation bridges gaps in data, allowing us to:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Create smooth visualizations from discrete data points</li>
              <li>Estimate values at specific points where measurements weren't taken</li>
              <li>Reconstruct signals or functions from sampled data</li>
              <li>Build predictive models based on observed patterns</li>
              <li>Fill in missing values in datasets for analysis</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Core Concepts in Interpolation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Data Points</h4>
                <p className="text-sm">
                  Known values that serve as anchors for our interpolation. The more data points we have, the more accurate 
                  our interpolation can be, particularly if the underlying pattern is complex.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Interpolants</h4>
                <p className="text-sm">
                  The mathematical functions used to connect data points. These can be straight lines (linear interpolation), 
                  polynomials, splines, or other functions depending on the method chosen.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Extrapolation</h4>
                <p className="text-sm">
                  When we estimate values outside the range of our known data points. This is riskier than interpolation 
                  because we're extending patterns beyond our observations, which may not hold true.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Error & Accuracy</h4>
                <p className="text-sm">
                  The difference between interpolated values and the actual (but unknown) true values. Different interpolation 
                  methods have different error characteristics, which is why choosing the right method matters.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <p>
                Interpolation is closely related to other mathematical concepts like <Link href="/rref-calculator" className="text-primary hover:underline">matrix calculations</Link>, 
                <Link href="/five-number-summary-calculator" className="text-primary hover:underline"> statistical analysis</Link>, and function approximation. 
                It serves as a fundamental tool in numerous scientific, engineering, and data analysis applications.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="methods" className="mt-4 space-y-4">
            <p>
              Different interpolation methods offer varying balances between simplicity, computational efficiency, and accuracy. 
              The choice of method depends on the nature of your data and the specific requirements of your application.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Linear Interpolation</h3>
            <div className="p-4 border border-border rounded-lg">
              <p>
                Linear interpolation is the simplest and most intuitive method. It connects data points with straight lines and 
                estimates values along these lines. This method assumes a constant rate of change between adjacent data points.
              </p>
              
              <h4 className="font-medium mt-3 mb-1">Formula:</h4>
              <p className="text-sm bg-secondary/10 p-2 rounded font-mono">
                y = y₁ + (x - x₁) × (y₂ - y₁) / (x₂ - x₁)
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="font-medium mb-1">Advantages:</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Simple and computationally efficient</li>
                    <li>Works well for nearly linear relationships</li>
                    <li>Requires only two points for each segment</li>
                    <li>Doesn't introduce oscillations or artifacts</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Limitations:</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Not smooth at data points (discontinuous derivatives)</li>
                    <li>Less accurate for curved relationships</li>
                    <li>Doesn't capture the curvature of the underlying function</li>
                    <li>May introduce noticeable "corners" in visualizations</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-3 text-sm">
                <span className="font-medium">Best for:</span> Quick calculations, nearly linear relationships, real-time applications, 
                and cases where computational efficiency is more important than smoothness.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Polynomial Interpolation</h3>
            <div className="p-4 border border-border rounded-lg">
              <p>
                Polynomial interpolation fits a single polynomial function through all data points. The degree of the polynomial 
                is determined by the number of data points (n points require a polynomial of degree n-1).
              </p>
              
              <h4 className="font-medium mt-3 mb-1">Methods:</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li><span className="font-medium">Lagrange Polynomials:</span> A direct formula that constructs the interpolating polynomial as a sum of basis polynomials</li>
                <li><span className="font-medium">Newton's Divided Differences:</span> A computationally efficient method for constructing the interpolating polynomial</li>
                <li><span className="font-medium">Barycentric Interpolation:</span> A numerically stable variant that avoids some common computational issues</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="font-medium mb-1">Advantages:</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Creates a smooth function through all data points</li>
                    <li>Captures curvature in the data relationship</li>
                    <li>Mathematically elegant with a single function</li>
                    <li>Exact at all data points</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Limitations:</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Runge's phenomenon: high-degree polynomials can oscillate wildly</li>
                    <li>Sensitive to outliers in the data</li>
                    <li>Computationally more intensive than linear interpolation</li>
                    <li>Poor extrapolation performance</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-3 text-sm">
                <span className="font-medium">Best for:</span> Data with smooth underlying relationships, moderate numbers of points, 
                and when a single continuous function is desired. Use with caution when working with more than ~10 data points.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Cubic Spline Interpolation</h3>
            <div className="p-4 border border-border rounded-lg">
              <p>
                Cubic spline interpolation uses piecewise cubic polynomials to create a smooth curve through all data points. 
                It maintains continuity of the function and its first and second derivatives at all points.
              </p>
              
              <h4 className="font-medium mt-3 mb-1">Types of Cubic Splines:</h4>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li><span className="font-medium">Natural Splines:</span> Second derivatives are zero at endpoints</li>
                <li><span className="font-medium">Clamped Splines:</span> First derivatives are specified at endpoints</li>
                <li><span className="font-medium">Not-a-knot Splines:</span> Third derivatives match across the second and second-to-last points</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h4 className="font-medium mb-1">Advantages:</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>Creates a very smooth curve (continuous second derivatives)</li>
                    <li>Avoids the oscillation problems of high-degree polynomials</li>
                    <li>Locally stable (changes in one area don't affect distant areas)</li>
                    <li>Aesthetically pleasing visual results</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Limitations:</h4>
                  <ul className="list-disc pl-6 text-sm space-y-1">
                    <li>More complex to implement than linear or polynomial methods</li>
                    <li>Requires solving a system of equations</li>
                    <li>May not preserve monotonicity or convexity of data</li>
                    <li>Endpoints require special handling (boundary conditions)</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-3 text-sm">
                <span className="font-medium">Best for:</span> Creating smooth curves through data points, scientific visualization, 
                computer graphics, and when the appearance of the interpolation matters. Often the method of choice for professional 
                data visualization and analysis.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Other Interpolation Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Hermite Interpolation</h4>
                <p className="text-sm">
                  Uses both function values and derivatives at data points. Particularly useful when you know not just points 
                  but also the slopes at those points. Common in computer graphics for animation curves.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Monotonic Interpolation</h4>
                <p className="text-sm">
                  Preserves the monotonicity (consistent increasing or decreasing behavior) of the original data. 
                  Useful for data that should never change direction between points.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Radial Basis Functions</h4>
                <p className="text-sm">
                  Uses a sum of radially symmetric functions to interpolate scattered data in multiple dimensions. 
                  Particularly useful for irregular grids and higher-dimensional problems.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Kriging (Gaussian Process Regression)</h4>
                <p className="text-sm">
                  A statistical interpolation method that provides both estimated values and uncertainty measures. 
                  Widely used in geostatistics and spatial data analysis.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <p>
                Choosing the right interpolation method involves considering the nature of your data, the accuracy requirements, 
                computational constraints, and how the results will be used. For many practical applications, cubic spline 
                interpolation offers a good balance of smoothness and computational efficiency without the drawbacks of high-degree polynomials.
              </p>
              <p className="mt-2">
                If you're working with statistical data, you might also be interested in our <Link href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</Link>, 
                which helps analyze the distribution of your dataset.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-4 space-y-4">
            <p>
              Interpolation is a versatile mathematical tool with applications across numerous fields. From engineering to finance, 
              wherever there's a need to estimate values between discrete data points, interpolation provides the solution.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {interpolationExamples.map((field, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-primary/10 px-4 py-2 font-medium">
                    {field.field}
                  </div>
                  <div className="p-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {field.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-3">Real-World Case Studies</h3>
            
            <div className="space-y-5">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Weather Forecasting</h4>
                <p className="text-sm">
                  Meteorologists use interpolation to create weather maps from discrete measurement stations. 
                  Temperature, pressure, and precipitation data from weather stations are interpolated to create continuous 
                  maps that show conditions across entire regions. This allows forecasters to predict weather patterns in 
                  locations where no actual measurements exist.
                </p>
                <p className="text-sm mt-2">
                  For example, if Temperature Station A records 75°F and Station B (50 miles east) records 82°F, interpolation 
                  helps estimate that a location 25 miles east of Station A might be experiencing around 78.5°F.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Digital Image Processing</h4>
                <p className="text-sm">
                  When you resize a digital image, interpolation algorithms determine the new pixel values. Bicubic interpolation 
                  (a two-dimensional extension of cubic interpolation) produces smoother results than simple nearest-neighbor 
                  or bilinear methods, making it preferred for photo editing software.
                </p>
                <p className="text-sm mt-2">
                  Increasing an image from 1000×1000 pixels to 1500×1500 pixels requires creating 1.25 million new pixels whose 
                  colors must be interpolated from the original pixels. The quality of this interpolation significantly affects 
                  the appearance of the resized image.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Financial Yield Curves</h4>
                <p className="text-sm">
                  In finance, the yield curve shows interest rates across different contract lengths. However, bonds and securities 
                  don't exist for every possible duration. Cubic spline interpolation is commonly used to create a smooth yield curve 
                  from available market data.
                </p>
                <p className="text-sm mt-2">
                  For instance, if the market provides yields for 2-year, 5-year, and 10-year bonds, interpolation helps traders 
                  and analysts estimate what the yield would be for a 7-year bond. This is crucial for pricing fixed-income securities 
                  and modeling interest rate risk.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-2">Animation and Computer Graphics</h4>
                <p className="text-sm">
                  Animators define keyframes at specific times, and interpolation fills in the frames between. Cubic Hermite splines 
                  (often implemented as Bezier curves) are frequently used because they allow control over both position and velocity 
                  at keyframes, creating natural-looking motion.
                </p>
                <p className="text-sm mt-2">
                  In a 30 frames-per-second animation, an animator might define a character's position at frames 0 and 30, and the 
                  software will use interpolation to calculate positions for frames 1 through 29, creating smooth movement without 
                  manually positioning each frame.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-3">Interpolation in Data Science</h3>
            <p>
              Data scientists frequently encounter incomplete datasets or need to resample data to different frequencies. 
              Interpolation techniques help fill these gaps:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <span className="font-medium">Time Series Resampling:</span> Converting daily data to hourly or monthly to quarterly 
                often requires interpolation to estimate values at the new time points.
              </li>
              <li>
                <span className="font-medium">Missing Data Imputation:</span> When values are missing in a dataset, interpolation 
                provides estimates based on surrounding data points, allowing analysis to proceed without discarding incomplete records.
              </li>
              <li>
                <span className="font-medium">Feature Engineering:</span> Creating new features at specific intervals or thresholds 
                may require interpolated values from existing data.
              </li>
            </ul>
            
            <div className="mt-6">
              <p>
                If you're working with date and time calculations in your data analysis, our <Link href="/chronological-age-calculator" className="text-primary hover:underline">Chronological Age Calculator</Link> 
                can help you determine precise time intervals between dates, which is often useful when preparing data for interpolation.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="guide" className="mt-4 space-y-4">
            <p>
              This practical guide will help you choose the right interpolation method for your specific needs and avoid common pitfalls. 
              Whether you're a student, professional, or hobbyist, these guidelines will help you get the most accurate results from your interpolation.
            </p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">How to Choose the Right Interpolation Method</h3>
            
            <div className="overflow-x-auto mt-3">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 bg-secondary/10 border border-border">When to Use</th>
                    <th className="text-left p-2 bg-secondary/10 border border-border">Linear</th>
                    <th className="text-left p-2 bg-secondary/10 border border-border">Polynomial</th>
                    <th className="text-left p-2 bg-secondary/10 border border-border">Cubic Spline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-border">Data relationship is approximately linear</td>
                    <td className="p-2 border border-border">✓ Best choice</td>
                    <td className="p-2 border border-border">Overkill</td>
                    <td className="p-2 border border-border">Overkill</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border">Need a smooth curve through data</td>
                    <td className="p-2 border border-border">❌ Not smooth</td>
                    <td className="p-2 border border-border">✓ Good for few points</td>
                    <td className="p-2 border border-border">✓ Best overall</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border">Working with many data points ({'>'}10)</td>
                    <td className="p-2 border border-border">✓ Works fine</td>
                    <td className="p-2 border border-border">❌ May oscillate wildly</td>
                    <td className="p-2 border border-border">✓ Works well</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border">Need computational efficiency</td>
                    <td className="p-2 border border-border">✓ Very efficient</td>
                    <td className="p-2 border border-border">Moderate efficiency</td>
                    <td className="p-2 border border-border">More complex</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border">Data has sharp transitions</td>
                    <td className="p-2 border border-border">✓ Can handle with enough points</td>
                    <td className="p-2 border border-border">❌ Will oscillate</td>
                    <td className="p-2 border border-border">❌ May smooth them out</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-border">Visual presentation is important</td>
                    <td className="p-2 border border-border">❌ Shows corners</td>
                    <td className="p-2 border border-border">Variable results</td>
                    <td className="p-2 border border-border">✓ Best appearance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Best Practices for Accurate Interpolation</h3>
            
            <div className="space-y-4 mt-3">
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-medium mb-1">Use Sufficient Data Points</h4>
                <p className="text-sm">
                  Ensure your data points adequately capture the behavior of the system you're modeling. For rapidly changing functions, 
                  use more closely spaced points in regions of high variability.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-medium mb-1">Validate Your Results</h4>
                <p className="text-sm">
                  When possible, compare interpolated values with known values that weren't used in creating the interpolation. 
                  This helps verify the accuracy of your method.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-medium mb-1">Be Cautious with Extrapolation</h4>
                <p className="text-sm">
                  Extending beyond your data range can lead to unreliable results. If extrapolation is necessary, linear methods 
                  often produce more reasonable results than higher-order methods.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-medium mb-1">Consider Data Preprocessing</h4>
                <p className="text-sm">
                  Smoothing noisy data before interpolation or using weighted methods for data with varying reliability can improve results. 
                  Consider using our <Link href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</Link> to analyze your dataset first.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-primary bg-primary/5">
                <h4 className="font-medium mb-1">Understand Domain-Specific Constraints</h4>
                <p className="text-sm">
                  Some fields have specific requirements: financial data might need to preserve monotonicity, physical simulations might 
                  need to conserve energy, etc. Choose methods that respect these constraints.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">Common Interpolation Mistakes to Avoid</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Ignoring Data Quality Issues</h4>
                <p className="text-sm">
                  Outliers or measurement errors in your data will propagate through interpolation. Identify and address problematic 
                  data points before interpolating.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Using High-Degree Polynomials</h4>
                <p className="text-sm">
                  A common mistake is using polynomial interpolation with too many points, leading to wild oscillations (Runge's phenomenon). 
                  Use cubic splines instead for many data points.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Overfitting to Noisy Data</h4>
                <p className="text-sm">
                  Interpolating through every point in noisy data can create artificial complexity. Consider whether smoothing or 
                  fitting a simpler function might better represent the underlying relationship.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Trusting Extrapolated Values</h4>
                <p className="text-sm">
                  Predicting beyond your data range is risky. Extrapolated values, especially from polynomial methods, can diverge 
                  rapidly from the true values.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Forgetting Physical Constraints</h4>
                <p className="text-sm">
                  Interpolation may produce values that violate physical laws or domain constraints (e.g., negative concentrations or 
                  probabilities greater than 1). Always check results for reasonableness.
                </p>
              </div>
              
              <div className="p-4 bg-secondary/10 rounded-lg">
                <h4 className="font-medium mb-1">Using Linear Methods for Everything</h4>
                <p className="text-sm">
                  While linear interpolation is simple, it can miss important curvature in your data. For curved relationships, 
                  consider spline methods for better accuracy.
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <p>
                When working with math and statistics, you may also find our <Link href="/rref-calculator" className="text-primary hover:underline">RREF Calculator</Link> useful for matrix operations, 
                which are often involved in solving interpolation problems, especially for cubic splines.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InterpolationContent;
