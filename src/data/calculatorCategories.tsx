import React from 'react';
import { CalculatorCategory } from './calculatorTypes';
import { mathCalculators } from './categories/mathCalculators';
import { educationCalculators } from './categories/educationCalculators';
import { dateTimeCalculators } from './categories/dateTimeCalculators';
import { lifestyleCalculators } from './categories/lifestyleCalculators';
import { financeCalculators } from './categories/financeCalculators';
import { constructionCalculators } from './categories/constructionCalculators';
import { sportsCalculators } from './categories/sportsCalculators';
import { spiritualCalculators } from './categories/spiritualCalculators';

// Calculator categories
export const calculatorCategories: CalculatorCategory[] = [
  {
    name: 'Math & Statistics',
    calculators: mathCalculators
  },
  {
    name: 'Academic',
    calculators: educationCalculators
  },
  {
    name: 'Date & Time',
    calculators: dateTimeCalculators
  },
  {
    name: 'Spiritual & Metaphysical',
    calculators: spiritualCalculators
  },
  {
    name: 'Lifestyle & Relationships',
    calculators: lifestyleCalculators
  },
  {
    name: 'Finance',
    calculators: financeCalculators
  },
  {
    name: 'Construction & Real Estate',
    calculators: constructionCalculators
  },
  {
    name: 'Sports & Fitness',
    calculators: sportsCalculators
  }
];
