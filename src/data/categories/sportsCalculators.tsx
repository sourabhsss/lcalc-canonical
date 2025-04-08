
import React from 'react';
import { Dumbbell, Activity, Trophy, Timer, Waves } from 'lucide-react';
import { CalculatorItem } from '../calculatorTypes';

export const sportsCalculators: CalculatorItem[] = [
  {
    title: 'Dunk Calculator',
    description: 'Calculate your vertical leap requirements for basketball dunking based on your height and reach.',
    icon: <Trophy size={24} />,
    to: '/dunk-calculator'
  },
  {
    title: 'TDEE Calculator',
    description: 'Calculate your Total Daily Energy Expenditure to understand your caloric needs for weight management.',
    icon: <Activity size={24} />,
    to: '/tdee-calculator'
  },
  {
    title: 'Swim Pace Calculator',
    description: 'Calculate your swimming pace, speed, and estimated calories burned based on distance and time.',
    icon: <Waves size={24} />,
    to: '/swim-pace-calculator'
  }
];
