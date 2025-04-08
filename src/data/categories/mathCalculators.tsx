
import { Calculator, BarChart, Plus, Minus, Divide, Percent } from 'lucide-react';
import { CalculatorItem } from '../calculatorTypes';

export const mathCalculators: CalculatorItem[] = [
  {
    title: "Standard Deviation Calculator",
    description: "Calculate standard deviation, variance, and other statistical measures from a dataset.",
    icon: <BarChart className="h-5 w-5" />,
    to: "/standard-deviation-calculator"
  },
  {
    title: "Combinations Calculator",
    description: "Calculate the number of ways to select items from a set without regard to order.",
    icon: <Calculator className="h-5 w-5" />,
    to: "/combinations-calculator"
  },
  {
    title: "Permutations Calculator",
    description: "Calculate the number of ways to arrange items in a specific order.",
    icon: <Calculator className="h-5 w-5" />,
    to: "/permutations-calculator"
  },
  {
    title: "Percentage Increase Calculator",
    description: "Calculate percentage change, increase, or decrease between two values.",
    icon: <Percent className="h-5 w-5" />,
    to: "/percentage-increase-calculator"
  },
  {
    title: "Interpolation Calculator",
    description: "Calculate unknown values between data points using various interpolation methods.",
    icon: <Calculator className="h-5 w-5" />,
    to: "/interpolation-calculator"
  },
  {
    title: "RREF Calculator",
    description: "Reduce matrices to Row Reduced Echelon Form (RREF) for solving linear equations.",
    icon: <Calculator className="h-5 w-5" />,
    to: "/rref-calculator"
  },
  {
    title: "Cube Root Calculator",
    description: "Calculate the cube root of any number with precision and mathematical verification.",
    icon: <Calculator className="h-5 w-5" />,
    to: "/cube-root-calculator"
  },
  {
    title: "Percent Error Calculator",
    description: "Calculate the accuracy of measurements by determining the percentage of error.",
    icon: <Percent className="h-5 w-5" />,
    to: "/percent-error-calculator"
  },
  {
    title: "LCM and HCF Calculator",
    description: "Calculate the Least Common Multiple and Highest Common Factor of multiple numbers.",
    icon: <Calculator className="h-5 w-5" />,
    to: "/lcm-hcf-calculator"
  }
];
