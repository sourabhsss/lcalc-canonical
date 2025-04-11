import React from 'react';
import { CalculatorItem } from '../calculatorTypes';
import { GraduationCap, BookOpen, Calculator, Pencil, FileEdit, BarChart4, PenTool, FlaskConical, BookMarked } from 'lucide-react';

// Education Calculators
export const educationCalculators: CalculatorItem[] = [
  {
    title: 'AP Lang Score Calculator',
    description: 'Estimate your AP English Language and Composition score based on multiple-choice and free-response performance.',
    icon: <BookMarked size={24} />,
    to: '/ap-lang-calculator'
  },
  {
    title: 'College GPA Calculator',
    description: 'Calculate your college Grade Point Average (GPA) for a single semester or your cumulative GPA across multiple terms.',
    icon: <GraduationCap size={24} />,
    to: '/college-gpa-calculator'
  },
  {
    title: 'Percentage to CGPA Calculator',
    description: 'Convert percentage marks to CGPA on 10-point, 7-point, and 4-point scales. Easy and accurate conversion for students worldwide.',
    icon: <Calculator size={24} />,
    to: '/percentage-to-cgpa-calculator'
  },
  {
    title: 'Final Grade Calculator',
    description: 'Calculate what score you need on your final exam to achieve your desired course grade.',
    icon: <FileEdit size={24} />,
    to: '/final-grade-calculator'
  },
  {
    title: 'Snow Day Calculator',
    description: 'Predict the likelihood of a snow day based on weather conditions and school factors.',
    icon: <BarChart4 size={24} />,
    to: '/snow-day-calculator'
  },
  {
    title: 'Peptide Calculator',
    description: 'Calculate molecular weight, extinction coefficient, and other properties of peptides based on amino acid sequence.',
    icon: <FlaskConical size={24} />,
    to: '/peptide-calculator'
  }
];
