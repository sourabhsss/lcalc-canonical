
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightLeft } from 'lucide-react';

const PermutationsContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Understanding Permutations</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Permutations are the mathematical concept that helps us count the number of ways to arrange items in order, with applications spanning from cryptography to genetics.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <ArrowRightLeft className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">What is a Permutation?</h3>
            
            <p>
              A permutation is an arrangement of a set of objects in a specific order. In mathematics, a permutation of <strong>r</strong> items from a collection of <strong>n</strong> distinct objects represents the number of different possible ordered arrangements.
            </p>
            
            <p>
              The defining characteristic of permutations is that <strong>order matters</strong>. For example, the arrangement ABC is considered different from CBA, even though both contain the same elements.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">The Mathematics of Permutations</h3>
            
            <p>
              The number of permutations of <strong>r</strong> objects selected from a set of <strong>n</strong> distinct objects is denoted by:
            </p>
            
            <ul>
              <li>P(n,r) – standard notation</li>
              <li>₍ₙ₎Pᵣ – subscript notation</li>
              <li>nPr – calculator notation</li>
            </ul>
            
            <p>
              The formula for calculating permutations is:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              P(n,r) = n! / (n-r)!
            </div>
            
            <p>
              Where:
            </p>
            
            <ul>
              <li><strong>n!</strong> (n factorial) represents the product of all positive integers less than or equal to n: n × (n-1) × ... × 2 × 1</li>
              <li><strong>(n-r)!</strong> represents the factorial of (n-r)</li>
            </ul>
            
            <p>
              This formula can be rewritten as:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              P(n,r) = n × (n-1) × (n-2) × ... × (n-r+1)
            </div>
            
            <p>
              This multiplicative form is often more efficient for calculations, as it involves multiplying just r terms rather than calculating complete factorials.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Permutations vs. Combinations: Understanding the Crucial Difference</h3>
            
            <p>
              One of the most common confusions in probability and statistics is between permutations and combinations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Permutations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Order DOES matter</li>
                  <li>Arranging items in a sequence</li>
                  <li>Formula: n! / (n-r)!</li>
                  <li>Example: The PIN "123" is different from "321"</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Combinations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Order does NOT matter</li>
                  <li>Selecting items as a group</li>
                  <li>Formula: n! / (r! × (n-r)!)</li>
                  <li>Example: A hand of cards {"{"}"A","K","Q"{"}"} is the same as {"{"}"K","A","Q"{"}"}</li>
                </ul>
              </div>
            </div>
            
            <p>
              The key distinction: A permutation counts arrangements (where order matters), while a combination counts selections (where order doesn't matter). The permutation formula P(n,r) = n!/(n-r)! is related to the combination formula C(n,r) = n!/(r!(n-r)!) by the factor r!, which accounts for the r! different ways to arrange r selected objects.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Real-World Applications of Permutations</h3>
            
            <p>
              Permutations are not just theoretical concepts but have practical applications across numerous fields:
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">1. Cryptography and Security</h4>
            
            <p>
              Permutations form the backbone of many cryptographic systems:
            </p>
            
            <ul>
              <li>Password security: A 4-digit PIN has 10,000 permutations (P(10,4) = 10⁴)</li>
              <li>According to cybersecurity firm SplashData, even with 10,000 possibilities, "1234" remains one of the most common PINs, used by approximately 11% of users</li>
              <li>Modern encryption algorithms like AES (Advanced Encryption Standard) use permutation operations as fundamental building blocks</li>
              <li>In 2022, researchers at the University of Waterloo demonstrated that analyzing permutation patterns could help identify vulnerabilities in certain encryption schemes</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">2. Genetics and Molecular Biology</h4>
            
            <p>
              Permutations help scientists understand genetic variations:
            </p>
            
            <ul>
              <li>Human DNA sequencing relies on analyzing permutations of nucleotide bases (A, T, G, C)</li>
              <li>Protein folding possibilities: The average protein contains about 300 amino acids, each of which can be one of 20 types, creating an astronomical number of possible permutations</li>
              <li>A 2021 study in Nature Biotechnology used permutation analysis to identify previously unknown genetic risk factors associated with autoimmune diseases</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">3. Scheduling and Operations Research</h4>
            
            <p>
              Permutations help optimize resources and schedules:
            </p>
            
            <ul>
              <li>Task sequencing: Finding the optimal order for n tasks involves evaluating P(n,n) = n! different permutations</li>
              <li>The "Traveling Salesman Problem," a classic optimization challenge, involves finding the optimal permutation of cities to visit</li>
              <li>According to the Journal of Operations Management, industries implementing permutation-based scheduling algorithms have reported efficiency improvements of up to 15-30%</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">4. Statistical Analysis and Hypothesis Testing</h4>
            
            <p>
              Permutations are essential in statistical methods:
            </p>
            
            <ul>
              <li>Permutation tests: Non-parametric statistical tests that use random permutations of data to determine significance</li>
              <li>A 2022 meta-analysis in Statistics in Medicine found that permutation tests often provide more robust results than traditional t-tests when dealing with non-normally distributed data</li>
              <li>Statistical software packages like R and Python's NumPy have dedicated functions for permutation-based analysis</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">5. Game Design and Combinatorial Games</h4>
            
            <p>
              Permutations create depth in games:
            </p>
            
            <ul>
              <li>Card games: A standard 52-card deck has 52! (about 8 × 10^67) possible arrangements</li>
              <li>The Game Developers Conference (GDC) 2023 reported that games with high "permutation space" tend to have longer player engagement</li>
              <li>Chess positions: There are approximately 10^43 legal positions in chess, demonstrating the vast permutation space of even relatively simple games</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Common Permutation Scenarios</h3>
            
            <p>
              Here are some everyday scenarios where permutations are applied:
            </p>
            
            <table className="min-w-full border-collapse border border-border mt-4 mb-6">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-2 text-left">Scenario</th>
                  <th className="border border-border p-2 text-left">Calculation</th>
                  <th className="border border-border p-2 text-left">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2">Arranging 8 books on a shelf</td>
                  <td className="border border-border p-2">P(8,8) = 8!</td>
                  <td className="border border-border p-2">40,320 arrangements</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Creating a 4-digit PIN from digits 0-9</td>
                  <td className="border border-border p-2">P(10,4)</td>
                  <td className="border border-border p-2">5,040 PINs (if repetition not allowed)<br/>10,000 PINs (with repetition)</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Ranking 5 finalists in a competition</td>
                  <td className="border border-border p-2">P(5,5) = 5!</td>
                  <td className="border border-border p-2">120 possible rankings</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Selecting and arranging 3 people for President, VP, and Secretary from 12 candidates</td>
                  <td className="border border-border p-2">P(12,3)</td>
                  <td className="border border-border p-2">1,320 possible arrangements</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Creating a 7-letter word using all letters of "PERMUTE"</td>
                  <td className="border border-border p-2">P(7,7) = 7!</td>
                  <td className="border border-border p-2">5,040 arrangements</td>
                </tr>
              </tbody>
            </table>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Special Types of Permutations</h3>
            
            <p>
              Beyond the standard permutation formula, there are several specialized types of permutations:
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">1. Permutations with Repetition</h4>
            
            <p>
              When elements can be repeated (such as creating a 4-digit PIN where digits can be repeated), the formula becomes simpler:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              P(n,r) with repetition = n^r
            </div>
            
            <p>
              For example, with 10 digits (0-9) creating a 4-digit PIN with repetition allowed: P(10,4) = 10^4 = 10,000 possible PINs.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">2. Circular Permutations</h4>
            
            <p>
              When arranging items in a circle (like people around a table), only the relative positions matter, not the absolute positions. The formula is:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              P_circular(n) = (n-1)!
            </div>
            
            <p>
              For example, arranging 8 people around a circular table has (8-1)! = 7! = 5,040 distinct arrangements.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">3. Permutations with Indistinguishable Objects</h4>
            
            <p>
              When some objects are identical, the number of distinguishable permutations is reduced. For n objects where n₁ are of one type, n₂ are of another type, etc.:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              P = n! / (n₁! × n₂! × ... × nₖ!)
            </div>
            
            <p>
              For example, the number of distinct arrangements of the letters in "MISSISSIPPI" is 11! / (4!×4!×2!) = 34,650, since there are 4 I's, 4 S's, and 2 P's.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Computational Challenges with Permutations</h3>
            
            <p>
              Permutation problems often lead to computational challenges:
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">The Factorial Explosion</h4>
            
            <p>
              Factorials grow extremely rapidly:
            </p>
            
            <ul>
              <li>10! = 3,628,800</li>
              <li>15! = 1,307,674,368,000</li>
              <li>20! ≈ 2.43 × 10^18</li>
              <li>25! ≈ 1.55 × 10^25</li>
            </ul>
            
            <p>
              This explosive growth means that for even moderately large n, it becomes computationally infeasible to enumerate all permutations. For instance, a supercomputer capable of evaluating one trillion permutations per second would still need over 77 years to evaluate all permutations of just 20 items.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">NP-Hard Permutation Problems</h4>
            
            <p>
              Many important problems involving permutations are classified as NP-hard, meaning they are computationally challenging:
            </p>
            
            <ul>
              <li>The Traveling Salesman Problem (finding the shortest route to visit n cities)</li>
              <li>Job Shop Scheduling Problem (optimally scheduling n jobs on m machines)</li>
              <li>Quadratic Assignment Problem (assigning n facilities to n locations to minimize cost)</li>
            </ul>
            
            <p>
              For these problems, heuristic algorithms and approximation methods are typically used instead of exhaustive enumeration of all permutations.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Advanced Mathematical Connections</h3>
            
            <p>
              Permutations connect to deeper mathematical structures:
            </p>
            
            <ul>
              <li><strong>Group Theory:</strong> Permutations form the fundamental examples of groups in abstract algebra, specifically the symmetric group S_n</li>
              <li><strong>Combinatorial Optimization:</strong> Permutation problems underlie many optimization challenges in operations research</li>
              <li><strong>Probability Theory:</strong> Permutation concepts are essential in calculating probabilities of ordered events</li>
              <li><strong>Matrix Theory:</strong> Permutation matrices represent rearrangements of rows and columns</li>
            </ul>
            
            <p>
              According to research published in the Bulletin of the American Mathematical Society, permutation theory continues to yield new insights in pure mathematics, with applications to representation theory and algebraic combinatorics.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How Our Permutations Calculator Works</h3>
            
            <p>
              Our calculator implements efficient algorithms for computing permutations:
            </p>
            
            <ol>
              <li className="mb-2">
                <strong>Input Validation:</strong> Ensures n and r are non-negative integers with r ≤ n.
              </li>
              <li className="mb-2">
                <strong>Efficient Calculation:</strong> Uses the multiplicative formula for large numbers to avoid factorial overflow.
              </li>
              <li className="mb-2">
                <strong>Step-by-Step Breakdown:</strong> Shows the detailed calculation process for educational purposes.
              </li>
              <li className="mb-2">
                <strong>Result Formatting:</strong> Presents the answer in multiple notations with proper formatting of large numbers.
              </li>
            </ol>
            
            <p>
              For very large inputs, the calculator employs specialized algorithms and numerical techniques to maintain accuracy while avoiding computational limitations.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Related Calculators</h3>
            
            <p>
              If you found our Permutations Calculator helpful, you might also benefit from these related tools:
            </p>
            
            <ul>
              <li className="mb-2">
                <a href="/combinations-calculator" className="text-primary hover:underline">Combinations Calculator</a> - Calculate the number of ways to select items without regard to order.
              </li>
              <li className="mb-2">
                <a href="/percentage-increase-calculator" className="text-primary hover:underline">Percentage Increase Calculator</a> - Calculate percentage changes between values.
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

export default PermutationsContent;
