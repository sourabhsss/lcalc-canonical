import React from 'react';
import { CalculatorItem } from '../calculatorTypes';
import { LampDesk, Sparkles, Star, Moon, Sun, Heart } from 'lucide-react';

export const spiritualCalculators: CalculatorItem[] = [
  {
    title: "Angel Number Calculator",
    description: "Discover the spiritual meaning behind your angel numbers and divine messages.",
    icon: <Sparkles className="h-6 w-6" />,
    to: "/angel-number-calculator"
  },
  {
    title: "Love Calculator",
    description: "Calculate love compatibility and spiritual connection between two people.",
    icon: <Heart className="h-6 w-6" />,
    to: "/love-calculator"
  },
  {
    title: "Twin Flame Calculator",
    description: "Discover your Twin Flame connection and spiritual journey.",
    icon: <Star className="h-6 w-6" />,
    to: "/twin-flame-calculator"
  }
]; 