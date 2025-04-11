import React from 'react';
import { CalculatorItem } from '../calculatorTypes';
import { Cloud, Snowflake, Wind, Thermometer } from 'lucide-react';

export const weatherCalculators: CalculatorItem[] = [
  {
    title: "Snow Day Calculator",
    description: "Check your chances of having a snow day using real-time weather data and local school closure patterns.",
    icon: <Snowflake size={24} />,
    to: "/snow-day-calculator"
  },
  {
    title: "Wind Chill Calculator",
    description: "Calculate the real-feel temperature based on air temperature and wind speed.",
    icon: <Wind size={24} />,
    to: "/wind-chill-calculator"
  }
]; 