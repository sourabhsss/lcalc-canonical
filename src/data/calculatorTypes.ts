
import React from 'react';

export interface CalculatorItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

export interface CalculatorCategory {
  name: string;
  calculators: CalculatorItem[];
}
