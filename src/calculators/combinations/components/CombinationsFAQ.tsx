
import React from 'react';
import FAQSection from '@/components/FAQSection';

const CombinationsFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the difference between combinations and permutations?",
      answer: "The fundamental difference between combinations and permutations is whether the order of selection matters. In combinations, the order does not matter - selecting items A, B, and C is the same combination as selecting C, A, and B. In permutations, the order does matter - arranging items as ABC is different from CBA. Mathematically, permutations calculate the number of ways to arrange r items from a set of n items, with formula P(n,r) = n!/(n-r)!. Combinations calculate the number of ways to select r items from n items regardless of order, with formula C(n,r) = n!/[r!(n-r)!]. The combination formula divides the permutation formula by r! to eliminate the effect of different orderings."
    },
    {
      question: "When should I use combinations instead of permutations?",
      answer: "Use combinations when the order of selection doesn't matter and you're only concerned with which items are selected, not how they're arranged. Common scenarios include: (1) Lottery numbers - the winning combination is the same regardless of the order in which the numbers are drawn. (2) Team selection - picking 5 players from a roster of 15 for a basketball team. (3) Committee formation - selecting 3 people from a department to form a committee. (4) Card games like poker - a hand of 5 cards is the same hand regardless of the order. (5) Food selection - choosing 3 toppings for a pizza from 8 available options. If, however, you need to count arrangements where the order matters (like PIN codes, rankings, or sequences), use permutations instead."
    },
    {
      question: "How do I calculate combinations by hand?",
      answer: "To calculate combinations by hand using the formula C(n,r) = n!/[r!(n-r)!]: 1) Calculate n! (factorial of n) by multiplying n × (n-1) × (n-2) × ... × 2 × 1. 2) Calculate r! in the same way. 3) Calculate (n-r)! 4) Multiply r! × (n-r)! 5) Divide n! by the product from step 4. For example, to calculate C(5,2): n! = 5! = 5×4×3×2×1 = 120, r! = 2! = 2×1 = 2, (n-r)! = 3! = 6, r!(n-r)! = 2×6 = 12, C(5,2) = 120÷12 = 10. For larger numbers, use the more efficient multiplicative formula: C(n,r) = (n×(n-1)×...×(n-r+1))÷(r×(r-1)×...×1), which avoids calculating complete factorials."
    },
    {
      question: "What are some practical applications of combinations in everyday life?",
      answer: "Combinations have numerous practical applications: 1) Games and lotteries - calculating odds in lottery tickets, card games (poker hands), or sports betting (parlay combinations). 2) Menu planning - determining how many different meal combinations are possible with given ingredients or courses. 3) Wardrobe planning - calculating outfit combinations from a set of clothing items. 4) Social arrangements - forming committees, teams, or groups from a larger population. 5) Investment portfolio construction - selecting a diversified group of stocks from available options. 6) Password security analysis - determining potential password combinations for security assessment. 7) Route planning - calculating different combinations of stops on a journey. 8) Academic course selection - determining possible course combinations that satisfy degree requirements. 9) Medical research - designing trials with different treatment combinations. 10) Product configurations - determining how many different product variants can be created from optional features."
    },
    {
      question: "Why does our calculator give different results than manual calculation for large numbers?",
      answer: "For large values of n and r, different calculation methods can produce slightly different results due to: 1) Computational precision - standard calculators may round intermediate steps, while our calculator maintains high precision throughout. 2) Calculation approach - our calculator uses the multiplicative formula for large inputs rather than calculating full factorials, which prevents numeric overflow. 3) Floating-point arithmetic - computers represent decimal numbers with finite precision, which can cause minor rounding differences in very large calculations. 4) Factorial overflow - the factorial function grows extremely rapidly (e.g., 70! has 100 digits), exceeding the capacity of standard calculators. Our calculator implements specialized algorithms to handle large inputs accurately. For critical applications with very large numbers, our calculator provides more reliable results than manual calculation or standard calculators."
    },
    {
      question: "What is the largest combination that can be calculated?",
      answer: "The practical limit for calculating combinations depends on the computational method and hardware: 1) Traditional factorial methods - most calculators and spreadsheets can handle n! up to about 170 before numeric overflow occurs. 2) Our calculator - uses efficient algorithms to calculate combinations with n values up to 1000, far exceeding standard calculators. 3) Specialized mathematical software - programs like Mathematica can handle arbitrarily large combinations using symbolic computation. 4) Approximation methods - for extremely large values (e.g., C(10^6, 10^3)), statistical approximations like Stirling's formula can be used. For most practical applications, our calculator's limit of n=1000 is more than sufficient. If you need to calculate even larger combinations, consider using logarithmic methods or specialized mathematical software."
    },
    {
      question: "What are the special rules or properties of combinations?",
      answer: "Important properties of combinations include: 1) Symmetry property: C(n,r) = C(n,n-r) - choosing r items is equivalent to choosing which (n-r) items to exclude. 2) Boundary conditions: C(n,0) = C(n,n) = 1 - there's exactly one way to select no items or all items. 3) Pascal's identity: C(n,r) = C(n-1,r-1) + C(n-1,r) - each entry in Pascal's triangle is the sum of the two entries above it. 4) Combination sum: The sum of all combinations for a given n is 2^n, representing all possible subsets. 5) Hockey-stick identity: The sum of combinations C(r,m) for r ranging from m to n equals C(n+1,m+1). 6) Vandermonde's identity: C(m+n,r) = Σ[k=0 to r] C(m,k)×C(n,r-k) - useful for breaking down complex combination problems. 7) Binomial theorem connection: The coefficients in the expansion of (a+b)^n are the combinations C(n,k)."
    },
    {
      question: "Can combinations have duplicates or repeated elements?",
      answer: "Standard combinations (as calculated by our calculator) do not allow for duplicates or repeated elements - each element can be selected only once. These are called 'combinations without repetition' or 'simple combinations.' However, there is a related concept called 'combinations with repetition' or 'multicombinations' that does allow the same element to be selected multiple times. For combinations with repetition, the formula changes to: C(n+r-1,r). For example, selecting 3 ice cream scoops from 5 flavors, where you can choose the same flavor multiple times, would be calculated as C(5+3-1,3) = C(7,3) = 35 possible combinations. If you need to calculate combinations with repetition, you can use our standard calculator with the adjusted inputs (n+r-1 and r) as described above."
    },
    {
      question: "How are combinations related to binomial coefficients and Pascal's Triangle?",
      answer: "Combinations, binomial coefficients, and Pascal's Triangle are intimately connected: 1) Equivalent concepts - The combination C(n,r) is identical to the binomial coefficient (n choose r), which appears as coefficients in the binomial theorem expansion of (a+b)^n. 2) Pascal's Triangle - Each number in Pascal's Triangle is a combination C(n,r), where n is the row number and r is the position in that row (both starting from 0). 3) Visual representation - Pascal's Triangle provides a visual way to find combination values, with each entry being the sum of the two entries directly above it (reflecting the identity C(n,r) = C(n-1,r-1) + C(n-1,r)). 4) Applications - This connection helps solve problems in probability, algebra, and number theory. For example, the probability of getting exactly k successes in n independent trials with success probability p is C(n,k)×p^k×(1-p)^(n-k), directly using the binomial coefficient."
    },
    {
      question: "What's the difference between combinations with and without replacement?",
      answer: "Combinations with and without replacement differ in whether an element can be selected multiple times: 1) Combinations without replacement (standard combinations) - Each element can be selected at most once. Formula: C(n,r) = n!/[r!(n-r)!]. Example: Selecting 3 different cards from a deck, where once a card is selected, it cannot be selected again. 2) Combinations with replacement (or multicombinations) - The same element can be selected multiple times. Formula: C(n+r-1,r). Example: Selecting 3 scoops of ice cream from 5 flavors, where you can choose the same flavor multiple times. The difference is significant in probability calculations. For instance, the probability of drawing a specific 3-card hand from a 52-card deck without replacement is 1/C(52,3), while the probability of selecting 3 specific items from 52 options with replacement would be 1/52^3 (assuming order matters) or 1/C(52+3-1,3) (if order doesn't matter)."
    }
  ];

  return <FAQSection faqs={faqs} title="Combinations Calculator: Frequently Asked Questions" />;
};

export default CombinationsFAQ;
