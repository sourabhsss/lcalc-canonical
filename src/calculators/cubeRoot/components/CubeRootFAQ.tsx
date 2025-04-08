
import React from 'react';
import FAQSection from '@/components/FAQSection';

const CubeRootFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is a cube root?",
      answer: "A cube root of a number is a value that, when multiplied by itself three times (cubed), gives the original number. For example, the cube root of 8 is 2 because 2³ = 2 × 2 × 2 = 8. Mathematically, the cube root of a number x is written as ∛x or x^(1/3)."
    },
    {
      question: "How is the cube root different from a square root?",
      answer: "While both are radical operations, a square root is a value that when multiplied by itself (squared) equals the original number, whereas a cube root is a value that when multiplied by itself three times (cubed) equals the original number. Another key difference is that square roots of negative numbers are not real numbers, but cube roots of negative numbers are real (e.g., ∛(-8) = -2)."
    },
    {
      question: "Can negative numbers have cube roots?",
      answer: "Yes, negative numbers can have cube roots, and these cube roots are also negative. For example, the cube root of -27 is -3 because (-3)³ = -27. This is different from square roots, where negative numbers don't have real square roots."
    },
    {
      question: "What are perfect cubes?",
      answer: "Perfect cubes are numbers that are the result of raising an integer to the power of 3. Examples include 1, 8, 27, 64, and 125, which are 1³, 2³, 3³, 4³, and 5³ respectively. Finding the cube root of a perfect cube results in an integer."
    },
    {
      question: "How can I calculate a cube root without a calculator?",
      answer: "For perfect cubes, you can memorize common values (e.g., 8, 27, 64). For other numbers, you can use estimation, the Newton-Raphson method, or logarithms. First, make an educated guess. Then refine it using: new_guess = (2 × old_guess + number/(old_guess²))/3. Repeat until you reach the desired accuracy."
    },
    {
      question: "Why do we use cube roots in mathematics?",
      answer: "Cube roots are used in various mathematical applications, including solving cubic equations, calculating volumes in 3D geometry, analyzing growth rates in three dimensions, and working with physical laws that involve cubic relationships (like how the mass of an object relates to its volume at constant density)."
    },
    {
      question: "What's the relationship between cube roots and exponents?",
      answer: "The cube root is equivalent to raising a number to the power of 1/3. This means ∛x = x^(1/3). This relationship extends to all roots—the nth root of x is equivalent to x^(1/n)."
    },
    {
      question: "Are there any numbers that don't have a cube root?",
      answer: "No, every real number has exactly one real cube root. This is different from square roots, where negative numbers don't have real square roots. The cube root function is defined for all real numbers."
    },
    {
      question: "How precise is this cube root calculator?",
      answer: "Our calculator uses JavaScript's built-in Math.cbrt() function, which provides high precision calculations accurate to approximately 15-16 significant digits for most common inputs, which is sufficient for virtually all practical applications."
    },
    {
      question: "What are some real-world applications of cube roots?",
      answer: "Cube roots are used in engineering to determine dimensions from volume requirements, in finance for calculating compound growth rates, in computer graphics for 3D modeling, in physics for fluid dynamics and sound propagation, and in material science to analyze relationships between volume and material properties."
    },
    {
      question: "How do cube roots relate to cubic equations?",
      answer: "Cube roots are essential for solving cubic equations (equations involving x³). For example, in the simple cubic equation x³ = k, the solution is x = ∛k. For more complex cubic equations, cube roots often appear in the solution formulas, such as Cardano's formula."
    },
    {
      question: "What is the relationship between cube roots and logarithms?",
      answer: "Cube roots can be calculated using logarithms through the formula: ∛x = e^(ln(x)/3). This relationship is particularly useful in computational methods and is the basis for how many calculators determine cube roots."
    }
  ];

  return <FAQSection faqs={faqs} />;
};

export default CubeRootFAQ;
