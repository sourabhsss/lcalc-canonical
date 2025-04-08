
import React from 'react';
import { Calendar, Clock, Heart, Cake, CalendarClock } from 'lucide-react';
import { CalculatorItem } from '../calculatorTypes';

export const dateTimeCalculators: CalculatorItem[] = [
  {
    title: 'Chronological Age Calculator',
    description: 'Calculate exact age in years, months, and days between any two dates.',
    icon: <CalendarClock size={24} />,
    to: '/chronological-age-calculator'
  },
  {
    title: 'Court Deadline Calculator',
    description: 'Calculate legal deadlines for court filings based on jurisdiction rules, filing method, and deadline types.',
    icon: <Calendar size={24} />,
    to: '/court-deadline-calculator'
  },
  {
    title: 'Half Birthday Calculator',
    description: 'Find out when your half birthday falls with our simple calculator. Perfect for planning celebrations six months from your birthday.',
    icon: <Cake size={24} />,
    to: '/half-birthday-calculator'
  },
  {
    title: 'Work Experience Calculator',
    description: 'Calculate your total work experience between jobs with precise years, months, and days for resumes and applications.',
    icon: <Clock size={24} />,
    to: '/work-experience-calculator'
  },
  {
    title: 'Snow Day Calculator',
    description: 'Determine the likelihood of a snow day based on weather conditions and location.',
    icon: <Calendar size={24} />,
    to: '/snow-day-calculator'
  },
  {
    title: 'Twin Flame Calculator',
    description: 'Calculate twin flame compatibility based on birthdates and discover your spiritual connection.',
    icon: <Heart size={24} />,
    to: '/twin-flame-calculator'
  }
];
