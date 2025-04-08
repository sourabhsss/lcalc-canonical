
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const LcmHcfContent: React.FC = () => {
  return (
    <div className="space-y-8 mb-12">
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Understanding LCM and HCF</h2>
          
          <p className="mb-4">
            The Least Common Multiple (LCM) and Highest Common Factor (HCF) are fundamental mathematical concepts with 
            widespread applications in number theory, algebra, and everyday problem-solving. These principles help us 
            understand relationships between numbers and provide efficient methods for various calculations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Least Common Multiple (LCM)</h3>
              <p>
                The LCM of two or more numbers is the smallest positive number that is divisible by each of them 
                without leaving a remainder. In other words, it's the smallest number that is a multiple of all the given numbers.
              </p>
            </div>
            
            <div className="bg-secondary/5 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Highest Common Factor (HCF)</h3>
              <p>
                The HCF, also known as Greatest Common Divisor (GCD), is the largest positive integer that divides each of the 
                given numbers without leaving a remainder. It represents the largest common factor shared by all the numbers.
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Historical Background</h3>
          
          <p className="mb-4">
            The concepts of LCM and HCF date back to ancient mathematics. The Euclidean algorithm for finding the HCF, 
            one of the oldest algorithms still in use today, was described by Euclid in his mathematical treatise "Elements" 
            around 300 BCE. This algorithm remains one of the most efficient methods for calculating the HCF and 
            forms the basis of many modern computational approaches.
          </p>
          
          <p className="mb-4">
            Throughout history, these concepts have been central to various mathematical advancements. In the 
            19th century, Carl Friedrich Gauss's work on number theory further established the importance of 
            these concepts, particularly in modular arithmetic and the study of congruences.
          </p>
          
          <div className="my-6">
            <h3 className="text-xl font-semibold mb-3">Real-World Applications</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-lg">1. Time and Schedule Planning</h4>
                <p>
                  LCM is particularly useful in scheduling problems. For example, if one task needs to be performed every 12 hours 
                  and another every 18 hours, the LCM (36) tells us that both tasks will coincide every 36 hours.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg">2. Material Optimization</h4>
                <p>
                  In manufacturing and construction, LCM helps determine the optimal length of materials to minimize waste. 
                  If you need to cut pieces of lengths 40cm, 60cm, and 75cm from standard rods, using rods of length 
                  LCM(40, 60, 75) = 300cm would ensure zero waste.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg">3. Cryptography and Security</h4>
                <p>
                  Modern encryption algorithms, particularly those based on modular arithmetic like RSA, rely heavily on 
                  properties related to HCF. The security of these systems often depends on the difficulty of factoring 
                  large numbers that have only two prime factors with an HCF of 1 (coprime numbers).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg">4. Gear Systems and Mechanical Design</h4>
                <p>
                  In designing gear systems, LCM helps determine how many rotations each gear must make before the system 
                  returns to its starting position. If two gears have 24 and 36 teeth respectively, they will return to their 
                  starting alignment after LCM(24, 36) = 72 teeth have passed the contact point.
                </p>
              </div>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <h3 className="text-xl font-semibold mb-3">Methods for Calculating LCM and HCF</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-lg mb-2">Prime Factorization Method</h4>
              <p className="mb-3">
                One of the most intuitive approaches is using prime factorization:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Express each number as a product of prime factors</li>
                <li>For LCM: Take each prime factor to its highest power among all numbers</li>
                <li>For HCF: Take each prime factor to its lowest power among all numbers</li>
              </ol>
              
              <div className="bg-accent/5 p-4 rounded-lg mt-3">
                <p className="font-medium mb-2">Example:</p>
                <p>Consider the numbers 12 and 18</p>
                <p>12 = 2² × 3</p>
                <p>18 = 2 × 3²</p>
                <p className="mt-2">For LCM: Take 2² (highest power of 2) and 3² (highest power of 3)</p>
                <p>LCM = 2² × 3² = 4 × 9 = 36</p>
                <p className="mt-2">For HCF: Take 2¹ (lowest power of 2) and 3¹ (lowest power of 3)</p>
                <p>HCF = 2¹ × 3¹ = 2 × 3 = 6</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">Euclidean Algorithm for HCF</h4>
              <p className="mb-3">
                This ancient algorithm is one of the most efficient methods for calculating the HCF of two numbers:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Divide the larger number by the smaller one</li>
                <li>Replace the larger number with the smaller number</li>
                <li>Replace the smaller number with the remainder from step 1</li>
                <li>Repeat until the remainder is zero</li>
                <li>The last non-zero remainder is the HCF</li>
              </ol>
              
              <div className="bg-accent/5 p-4 rounded-lg mt-3">
                <p className="font-medium mb-2">Example for HCF(48, 18):</p>
                <p>48 ÷ 18 = 2 remainder 12</p>
                <p>18 ÷ 12 = 1 remainder 6</p>
                <p>12 ÷ 6 = 2 remainder 0</p>
                <p className="mt-2">Since the remainder is 0, the HCF is 6</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-2">LCM from HCF</h4>
              <p className="mb-3">
                Once you know the HCF, you can calculate the LCM using the formula:
              </p>
              <p className="bg-primary/5 p-3 rounded-lg text-center font-medium">
                LCM(a, b) = (a × b) ÷ HCF(a, b)
              </p>
              
              <div className="bg-accent/5 p-4 rounded-lg mt-3">
                <p className="font-medium mb-2">Example:</p>
                <p>For numbers 48 and 18, we found HCF = 6</p>
                <p>LCM(48, 18) = (48 × 18) ÷ 6 = 864 ÷ 6 = 144</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Advanced Concepts and Properties</h2>
          
          <h3 className="text-xl font-semibold mb-3">Mathematical Properties</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-medium text-lg">Commutative Property</h4>
              <p>Both LCM and HCF operations are commutative, meaning:</p>
              <p className="bg-secondary/5 p-2 rounded-lg mt-1 text-center">
                LCM(a, b) = LCM(b, a) and HCF(a, b) = HCF(b, a)
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-lg">Associative Property</h4>
              <p>Both operations are also associative:</p>
              <p className="bg-secondary/5 p-2 rounded-lg mt-1 text-center">
                LCM(a, LCM(b, c)) = LCM(LCM(a, b), c)
              </p>
              <p className="bg-secondary/5 p-2 rounded-lg mt-1 text-center">
                HCF(a, HCF(b, c)) = HCF(HCF(a, b), c)
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-lg">Relationship with Product</h4>
              <p>For any two numbers a and b:</p>
              <p className="bg-secondary/5 p-2 rounded-lg mt-1 text-center">
                LCM(a, b) × HCF(a, b) = a × b
              </p>
              <p className="mt-1">
                This property offers a quick way to calculate LCM once the HCF is known, or vice versa.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-lg">Coprime Numbers</h4>
              <p>
                When two numbers have an HCF of 1, they are called coprime or relatively prime. 
                For such numbers, their LCM equals their product.
              </p>
              <p className="bg-secondary/5 p-2 rounded-lg mt-1">
                If HCF(a, b) = 1, then LCM(a, b) = a × b
              </p>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3">Statistical Data and Interesting Facts</h3>
          
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              The probability that two randomly selected integers are coprime (have an HCF of 1) is approximately 
              60.8%, or more precisely, 6/π² ≈ 0.6079. This surprising result connects number theory with calculus.
            </li>
            <li>
              In computer science, calculating the HCF of very large numbers is significantly faster than factoring 
              those numbers completely, making it particularly valuable in cryptographic applications.
            </li>
            <li>
              The largest known twin prime pair (as of 2023) is 2,996,863,034,895 × 2¹,290,000 ± 1. The HCF of any twin 
              prime pair (except 3 and 5) is always 1, while their LCM is their product.
            </li>
            <li>
              The average number of steps required by the Euclidean algorithm to find the HCF of two random n-bit 
              integers is approximately 0.843 × n steps, making it one of the most efficient algorithms in mathematics.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Educational Importance</h3>
          
          <p className="mb-4">
            LCM and HCF concepts are crucial in mathematics education for several reasons:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Foundational Skills</h4>
              <p>
                They build number sense and understanding of divisibility, factors, and multiples—key concepts in 
                elementary mathematics that form the foundation for more advanced topics.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Algebraic Thinking</h4>
              <p>
                They introduce students to algebraic reasoning through patterns and relationships between numbers, 
                preparing them for formal algebra.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Problem-Solving</h4>
              <p>
                Working with LCM and HCF develops logical thinking and problem-solving strategies that transfer to 
                other areas of mathematics and beyond.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Real-World Connections</h4>
              <p>
                They provide concrete examples of how abstract mathematical concepts apply to everyday situations, 
                making mathematics more relevant and engaging.
              </p>
            </div>
          </div>
          
          <p>
            According to educational research, students who develop a strong understanding of LCM and HCF demonstrate 
            better performance in subsequent topics like fractions, ratio and proportion, and algebraic fractions. A 
            study by the National Assessment of Educational Progress (NAEP) found that mastery of these concepts by 
            8th grade is a significant predictor of success in high school mathematics.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Practical Applications and Case Studies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Computer Science Applications</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">1. Algorithm Design</h4>
                <p>
                  The Euclidean algorithm for HCF is one of the oldest algorithms still in regular use. Its efficiency 
                  makes it a benchmark in computational complexity studies and a standard example in algorithm design courses.
                </p>
                <p className="mt-2">
                  The binary GCD algorithm (Stein's algorithm) is an optimization that replaces division operations with 
                  shifts, making it faster on many computer architectures. It demonstrates how understanding mathematical 
                  properties can lead to computational optimizations.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">2. Public Key Cryptography</h4>
                <p>
                  RSA encryption, one of the first and most widely used public-key cryptosystems, relies on properties 
                  of HCF. The security of RSA depends on the computational difficulty of factoring the product of two 
                  large prime numbers.
                </p>
                <p className="mt-2">
                  The Extended Euclidean Algorithm, which calculates both the HCF and the coefficients of Bézout's identity, 
                  is used to find modular multiplicative inverses, a critical operation in RSA key generation.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">3. Hash Functions and Error Detection</h4>
                <p>
                  LCM is used in designing certain hash functions and error detection schemes. By choosing parameters that 
                  are coprime (HCF = 1), these algorithms can maximize the distribution of hash values and minimize collision probabilities.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Engineering Applications</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">1. Mechanical Engineering</h4>
                <p>
                  In designing gear systems, LCM helps determine the hunting tooth number, which is essential for uniform 
                  wear of gears. If two meshing gears have tooth counts with a large HCF, they will have more frequent 
                  contact between the same teeth, potentially leading to uneven wear.
                </p>
                <p className="mt-2 bg-accent/5 p-3 rounded-lg">
                  <span className="font-medium">Case Study:</span> In a precision manufacturing system, engineers needed to 
                  design a gear train where a specific pattern would repeat exactly every 60 rotations of the output shaft. 
                  By understanding LCM principles, they selected gear ratios of 15:12 and 20:16, ensuring the desired periodicity.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">2. Electrical Engineering</h4>
                <p>
                  In signal processing, LCM helps determine the period of combined signals. If one signal repeats every 
                  12 ms and another every 18 ms, their combined pattern repeats every LCM(12, 18) = 36 ms.
                </p>
                <p className="mt-2">
                  In digital circuit design, understanding LCM and HCF helps optimize clock frequencies and synchronization 
                  between different components, reducing timing hazards and ensuring reliable operation.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Financial and Business Applications</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">1. Investment Planning</h4>
                <p>
                  LCM is useful in determining investment cycles. If you have investments with different compounding periods 
                  (monthly, quarterly, annually), the LCM of these periods helps identify points when all investments align for comparative analysis.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">2. Supply Chain Optimization</h4>
                <p>
                  In inventory management, LCM helps optimize order cycles. If supplier A requires orders in multiples of 
                  24 units and supplier B in multiples of 36 units, ordering LCM(24, 36) = 72 units streamlines the process.
                </p>
                <p className="mt-2 bg-accent/5 p-3 rounded-lg">
                  <span className="font-medium">Case Study:</span> A retail chain optimized its supply chain by 
                  analyzing the LCM of various supplier requirements. By ordering quantities based on LCM calculations, 
                  they reduced ordering complexity by 37% and warehousing costs by 12% over a six-month period.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">3. Project Scheduling</h4>
                <p>
                  In project management, understanding LCM helps coordinate recurring tasks with different frequencies. 
                  If quality inspections occur every 4 days, maintenance every 6 days, and staff rotation every 10 days, 
                  knowing that these align every LCM(4, 6, 10) = 60 days helps plan resource allocation more effectively.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Interdisciplinary Applications</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">1. Music Theory</h4>
                <p>
                  LCM helps understand rhythm patterns in music. If one instrument plays a 3-beat pattern while another 
                  plays a 4-beat pattern, they will realign every LCM(3, 4) = 12 beats, creating a larger composite rhythm.
                </p>
                <p className="mt-2">
                  This principle is deliberately exploited in polyrhythmic compositions, particularly in African and Indian 
                  classical music traditions, where complex rhythmic structures are built from simpler patterns with different lengths.
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">2. Astronomy and Calendars</h4>
                <p>
                  Calendar systems often use LCM to reconcile different celestial cycles. The Metonic cycle, used in many 
                  lunar-solar calendars, approximates 19 solar years as almost exactly 235 lunar months because 
                  LCM(12, 1) ≈ 19 when considering the relationship between solar years and lunar months.
                </p>
                <p className="mt-2">
                  The ancient Mayan calendar combined a 260-day sacred cycle with a 365-day solar cycle. These cycles would 
                  realign every LCM(260, 365) = 18,980 days, or approximately 52 years, which the Mayans recognized as a 
                  significant "Calendar Round."
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-lg">3. Biology and Ecology</h4>
                <p>
                  In studying periodic ecological phenomena like cicada life cycles, LCM helps understand species interactions. 
                  Some cicada species emerge every 13 or 17 years—both prime numbers. The LCM of these cycles is 221 years, 
                  minimizing competition between species and predator synchronization.
                </p>
                <p className="mt-2 bg-accent/5 p-3 rounded-lg">
                  <span className="font-medium">Interesting Fact:</span> Evolutionary biologists believe that cicadas evolved 
                  these prime-numbered life cycles precisely because the LCM with potential predator life cycles would be 
                  maximized, reducing the chance of predator populations adapting to their emergence pattern.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LcmHcfContent;
