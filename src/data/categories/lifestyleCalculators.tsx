import React from 'react';
import { CalculatorItem } from '../calculatorTypes';
import { BookAudio, Heart, GraduationCap, FlaskConical, LampDesk, Clock, Utensils, Droplets, Trophy, Gift, FileBarChart, Calendar } from 'lucide-react';

export const lifestyleCalculators: CalculatorItem[] = [
  {
    title: "Love Calculator",
    description: "Calculate love compatibility between two people.",
    icon: <Heart className="h-6 w-6" />,
    to: "/love-calculator"
  },
  {
    title: "Flames Calculator",
    description: "Find your relationship status using the FLAMES game.",
    icon: <Heart className="h-6 w-6" />,
    to: "/flames-calculator"
  },
  {
    title: "Twin Flame Calculator",
    description: "Discover your Twin Flame connection.",
    icon: <Heart className="h-6 w-6" />,
    to: "/twin-flame-calculator"
  },
  {
    title: "Lap Day Calculator",
    description: "Find out when your pet's age in 'pet years' will catch up to your age in human years.",
    icon: <Calendar className="h-6 w-6" />,
    to: "/lap-day-calculator"
  },
  {
    title: "Male Delusion Calculator",
    description: "Calculate realistic dating expectations for men.",
    icon: <GraduationCap className="h-6 w-6" />,
    to: "/male-delusion-calculator"
  },
  {
    title: "Female Delusion Calculator",
    description: "Calculate realistic dating expectations for women.",
    icon: <GraduationCap className="h-6 w-6" />,
    to: "/female-delusion-calculator"
  },
  {
    title: "Tattoo Tip Calculator",
    description: "Calculate appropriate tip for your tattoo artist.",
    icon: <Droplets className="h-6 w-6" />,
    to: "/tattoo-tip-calculator"
  },
  {
    title: "Air Fryer Calculator",
    description: "Calculate cooking times and temperatures for air fryers.",
    icon: <Utensils className="h-6 w-6" />,
    to: "/air-fryer-calculator"
  },
  {
    title: "Angel Number Calculator",
    description: "Discover the meaning behind recurring numbers.",
    icon: <LampDesk className="h-6 w-6" />,
    to: "/angel-number-calculator"
  },
  {
    title: "Audiobook Speed Calculator",
    description: "Calculate time saved at different audiobook playback speeds.",
    icon: <BookAudio className="h-6 w-6" />,
    to: "/audiobook-speed-calculator"
  },
  {
    title: "Therapy Productivity Calculator",
    description: "Calculate productivity metrics for therapists, including billable hours, efficiency rates, and revenue projections.",
    icon: <FileBarChart className="h-6 w-6" />,
    to: "/therapy-productivity-calculator"
  },
];
