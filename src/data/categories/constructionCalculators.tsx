
import React from 'react';
import { CalculatorItem } from '../calculatorTypes';
import {
  Clock,
  Ruler,
  DollarSign,
  Calculator,
  Home,
  Droplets,
  FileBarChart,
} from 'lucide-react';

export const constructionCalculators: CalculatorItem[] = [
  {
    title: "Asphalt Calculator",
    description: "Calculate the amount of asphalt needed for your paving project based on area and thickness.",
    icon: <Ruler />,
    to: "/asphalt-calculator"
  },
  {
    title: "Gravel Calculator",
    description: "Determine the amount of gravel needed for landscaping and construction projects.",
    icon: <Calculator />,
    to: "/gravel-calculator"
  },
  {
    title: "Board Foot Calculator",
    description: "Calculate board feet for lumber purchasing and project planning.",
    icon: <Ruler />,
    to: "/board-foot-calculator"
  },
  {
    title: "Pool Volume Calculator",
    description: "Calculate the volume of water in your swimming pool for maintenance and chemical treatment.",
    icon: <Droplets />,
    to: "/pool-volume-calculator"
  },
  {
    title: "Prorated Rent Calculator",
    description: "Calculate partial rent payments for incomplete rental periods.",
    icon: <Home />,
    to: "/prorated-rent-calculator"
  },
  {
    title: "GPM Calculator",
    description: "Calculate water flow rate in gallons per minute for plumbing, irrigation, and water systems.",
    icon: <Droplets />,
    to: "/gpm-calculator"
  },
];
