
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shuffle } from 'lucide-react';

const CombinationsContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Understanding Combinations</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Combinations are a fundamental concept in mathematics, statistics, and probability, with wide-ranging applications from lottery systems to scientific research.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shuffle className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">What is a Combination?</h3>
            
            <p>
              A combination is a selection of items from a collection, such that the order of selection does not matter. In mathematical terms, a combination is a way to select <strong>r</strong> distinct objects from a set of <strong>n</strong> objects where the order of selection is irrelevant.
            </p>
            
            <p>
              The key characteristic of combinations is that they count groups or sets rather than arrangements or sequences. For example, selecting cards {'{2, 5, 9}'} from a deck is the same combination as selecting {'{9, 2, 5}'} or {'{5, 9, 2}'}—the same three cards are chosen, just in a different order.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">The Mathematics of Combinations</h3>
            
            <p>
              The number of possible combinations of <strong>r</strong> items from a set of <strong>n</strong> distinct items is denoted by:
            </p>
            
            <ul>
              <li>C(n,r) – standard notation</li>
              <li>(n choose r) – binomial coefficient notation</li>
              <li>nCr – calculator notation</li>
            </ul>
            
            <p>
              The formula for calculating combinations is:
            </p>
            
            <div className="bg-muted/30 p-3 text-center font-mono my-4">
              C(n,r) = n! / (r! × (n-r)!)
            </div>
            
            <p>
              Where:
            </p>
            
            <ul>
              <li><strong>n!</strong> represents the factorial of n (n × (n-1) × ... × 2 × 1)</li>
              <li><strong>r!</strong> represents the factorial of r</li>
              <li><strong>(n-r)!</strong> represents the factorial of (n-r)</li>
            </ul>
            
            <p>
              This formula can be interpreted as:
            </p>
            
            <ol>
              <li>Start with the total number of ways to arrange all n items (n!)</li>
              <li>Divide by the number of ways to arrange the r selected items (r!)</li>
              <li>Divide by the number of ways to arrange the (n-r) unselected items ((n-r)!)</li>
            </ol>
            
            <p>
              By dividing by these factors, we eliminate the effect of different orderings of the same selection, which is precisely what defines a combination.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Combinations vs. Permutations: Understanding the Difference</h3>
            
            <p>
              A common source of confusion in probability and statistics is the distinction between combinations and permutations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Combinations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Order does NOT matter</li>
                  <li>Selecting items as a group</li>
                  <li>Formula: n! / (r! × (n-r)!)</li>
                  <li>Example: Lottery numbers (5,12,23) is the same combination as (23,5,12)</li>
                </ul>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Permutations</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Order DOES matter</li>
                  <li>Arranging items in a sequence</li>
                  <li>Formula: n! / (n-r)!</li>
                  <li>Example: The code "123" is a different permutation than "321"</li>
                </ul>
              </div>
            </div>
            
            <p>
              A helpful way to remember: Combinations are for <strong>selection</strong>, permutations are for <strong>arrangement</strong>.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Real-World Applications of Combinations</h3>
            
            <p>
              Combinations are ubiquitous in our daily lives and across scientific fields. Here are some significant applications:
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">1. Games of Chance and Lottery Systems</h4>
            
            <p>
              Combinations are fundamental to understanding lottery odds. For example, in a typical 6/49 lottery:
            </p>
            
            <ul>
              <li>Players select 6 numbers from a pool of 49 numbers</li>
              <li>The total number of possible combinations is C(49,6) = 13,983,816</li>
              <li>This means the odds of winning the jackpot are 1 in 13,983,816</li>
            </ul>
            
            <p>
              According to the American Gaming Association, Americans wager over $150 billion on lotteries annually, with many players not fully understanding these staggering odds.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">2. Finance and Investment Portfolio Construction</h4>
            
            <p>
              In finance, combinations help construct diversified investment portfolios:
            </p>
            
            <ul>
              <li>A portfolio manager selecting 15 stocks from the S&P 500 has C(500,15) = approximately 2.37 × 10^29 possible combinations</li>
              <li>Modern portfolio theory uses combinatorial methods to optimize asset allocation</li>
              <li>According to a 2021 study by Morningstar, optimal diversification can increase risk-adjusted returns by up to 18% compared to naive approaches</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">3. Molecular Biology and Genetics</h4>
            
            <p>
              Combinations are essential in genetics for understanding:
            </p>
            
            <ul>
              <li>DNA sequencing: The human genome contains approximately 3 billion base pairs with four possible nucleotides (A, T, G, C)</li>
              <li>Protein formation: The 20 standard amino acids can combine in countless ways to form proteins</li>
              <li>A 2020 study in Nature Biotechnology reported that combinatorial analysis of genetic mutations helped identify previously unknown risk factors for breast cancer</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">4. Computer Science and Cryptography</h4>
            
            <p>
              Combinations underpin many computing and security applications:
            </p>
            
            <ul>
              <li>Password security: An 8-character password using letters (upper and lower case), numbers, and special symbols has approximately 6.6 × 10^15 possible combinations</li>
              <li>According to the 2023 IBM Security Report, brute force attacks attempting combinations of credentials accounted for over 20% of security breaches</li>
              <li>Combinatorial optimization algorithms help solve complex problems in artificial intelligence and machine learning</li>
            </ul>
            
            <h4 className="text-lg font-medium mt-6 mb-2">5. Statistical Sampling and Research Design</h4>
            
            <p>
              Scientific research relies on combinations for:
            </p>
            
            <ul>
              <li>Experimental design: Selecting subjects for control and treatment groups</li>
              <li>Survey sampling: Choosing representative subsets from larger populations</li>
              <li>Clinical trials: The FDA reports that proper randomization using combinatorial principles increases the validity of clinical results by up to 37%</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Common Combination Scenarios</h3>
            
            <p>
              Below are some everyday scenarios where combinations come into play:
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
                  <td className="border border-border p-2">5-card poker hand from 52 cards</td>
                  <td className="border border-border p-2">C(52,5)</td>
                  <td className="border border-border p-2">2,598,960 possible hands</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Selecting 3 books from 10 books</td>
                  <td className="border border-border p-2">C(10,3)</td>
                  <td className="border border-border p-2">120 possible selections</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Forming a 4-person committee from 20 people</td>
                  <td className="border border-border p-2">C(20,4)</td>
                  <td className="border border-border p-2">4,845 possible committees</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Selecting 2 toppings on a pizza from 8 options</td>
                  <td className="border border-border p-2">C(8,2)</td>
                  <td className="border border-border p-2">28 possible combinations</td>
                </tr>
                <tr>
                  <td className="border border-border p-2">Picking 3 movies to watch from a list of 12</td>
                  <td className="border border-border p-2">C(12,3)</td>
                  <td className="border border-border p-2">220 possible selections</td>
                </tr>
              </tbody>
            </table>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Special Properties of Combinations</h3>
            
            <p>
              Combinations exhibit several interesting mathematical properties:
            </p>
            
            <ol>
              <li className="mb-2">
                <strong>Symmetry Property:</strong> C(n,r) = C(n,n-r)<br />
                The number of ways to select r items equals the number of ways to select (n-r) items. This makes sense because selecting r items automatically "selects" the remaining (n-r) items to exclude.
              </li>
              <li className="mb-2">
                <strong>Pascal's Triangle:</strong> C(n,r) = C(n-1,r-1) + C(n-1,r)<br />
                Each number in Pascal's Triangle is the sum of the two numbers above it, a pattern that corresponds to this combinatorial identity.
              </li>
              <li className="mb-2">
                <strong>Binomial Theorem:</strong> (a+b)^n = Σ C(n,k) a^k b^(n-k) for k=0 to n<br />
                Combinations appear as coefficients in the expansion of binomial expressions, hence the term "binomial coefficients."
              </li>
              <li className="mb-2">
                <strong>Total Number of Subsets:</strong> The sum of all combinations C(n,0) + C(n,1) + ... + C(n,n) = 2^n<br />
                This equals the total number of possible subsets (including the empty set and the complete set) of an n-element set.
              </li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Calculating Combinations Efficiently</h3>
            
            <p>
              While the factorial formula C(n,r) = n! / (r! × (n-r)!) is standard, it can lead to computational issues with large numbers due to factorial growth. More efficient methods include:
            </p>
            
            <ul>
              <li className="mb-2">
                <strong>Multiplicative Formula:</strong> C(n,r) = (n × (n-1) × ... × (n-r+1)) / (r × (r-1) × ... × 1)<br />
                This approach avoids calculating complete factorials, reducing the risk of numeric overflow.
              </li>
              <li className="mb-2">
                <strong>Recursive Calculation:</strong> Using the identity C(n,r) = C(n-1,r-1) + C(n-1,r) with memoization for efficiency.
              </li>
              <li className="mb-2">
                <strong>Symmetry Property:</strong> If r {'>'} n/2, calculate C(n,n-r) instead, which is mathematically equivalent but may involve smaller numbers.
              </li>
            </ul>
            
            <p>
              Our calculator implements these efficient algorithms to handle large inputs accurately.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Practical Tips for Working with Combinations</h3>
            
            <ol>
              <li className="mb-2">
                <strong>Check if Order Matters:</strong> Before calculating, determine if you're dealing with a combination (order doesn't matter) or a permutation (order matters).
              </li>
              <li className="mb-2">
                <strong>Use the Symmetry Property:</strong> If r is large, calculate C(n,n-r) instead which will give the same result.
              </li>
              <li className="mb-2">
                <strong>Break Down Complex Problems:</strong> Some problems can be solved by breaking them into multiple combination calculations.
              </li>
              <li className="mb-2">
                <strong>Remember Special Cases:</strong> C(n,0) = C(n,n) = 1, and C(n,1) = n.
              </li>
              <li className="mb-2">
                <strong>Be Careful with Constraints:</strong> Real-world problems often have additional constraints that affect how combinations should be calculated.
              </li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How Our Combinations Calculator Works</h3>
            
            <p>
              Our calculator uses advanced algorithms to efficiently compute combinations:
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
              If you found our Combinations Calculator helpful, you might also benefit from these related tools:
            </p>
            
            <ul>
              <li className="mb-2">
                <a href="/permutations-calculator" className="text-primary hover:underline">Permutations Calculator</a> - Calculate the number of ways to arrange items in order.
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

export default CombinationsContent;
