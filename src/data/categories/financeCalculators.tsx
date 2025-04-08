
import React from 'react';
import { CalculatorItem } from '@/data/calculatorTypes';
import { Calculator, TrendingUp, DollarSign, PiggyBank, Coins, LineChart, BarChart3, Building, CreditCard, Car, Wallet, CreditCard as CreditCardIcon } from 'lucide-react';

export const financeCalculators: CalculatorItem[] = [
  {
    title: "Cash Back Calculator",
    description: "Calculate and maximize your credit card cash back rewards and benefits.",
    icon: <CreditCardIcon className="w-5 h-5" />,
    to: "/cash-back-calculator"
  },
  {
    title: "Mortgage Calculator",
    description: "Calculate your mortgage payments, amortization schedule, and total interest costs.",
    icon: <Building className="w-5 h-5" />,
    to: "/mortgage-calculator"
  },
  {
    title: "Gross Monthly Income Calculator",
    description: "Calculate your gross and net monthly income with detailed tax and deduction analysis.",
    icon: <Wallet className="w-5 h-5" />,
    to: "/gross-monthly-income-calculator"
  },
  {
    title: "Mortgage Recast Calculator",
    description: "Calculate how a mortgage recast affects your monthly payments and loan terms.",
    icon: <CreditCard className="w-5 h-5" />,
    to: "/mortgage-recast-calculator"
  },
  {
    title: "Reverse Mortgage Calculator",
    description: "Estimate the amount you could receive with a reverse mortgage based on your age and home value.",
    icon: <Building className="w-5 h-5" />,
    to: "/reverse-mortgage-calculator"
  },
  {
    title: "APY Calculator",
    description: "Calculate the Annual Percentage Yield (APY) for your investments and savings accounts.",
    icon: <LineChart className="w-5 h-5" />,
    to: "/apy-calculator"
  },
  {
    title: "Stock Average Calculator",
    description: "Calculate the average cost of your investments when purchasing at different prices.",
    icon: <BarChart3 className="w-5 h-5" />,
    to: "/stock-average-calculator"
  },
  {
    title: "Towing Estimate Calculator",
    description: "Calculate the estimated cost of towing services based on distance, vehicle type, and service requirements.",
    icon: <Car className="w-5 h-5" />,
    to: "/towing-estimate-calculator"
  },
  {
    title: "GST Calculator",
    description: "Calculate Goods and Services Tax (GST) for products and services.",
    icon: <Coins className="w-5 h-5" />,
    to: "/gst-calculator"
  },
  {
    title: "Pay Raise Calculator",
    description: "Calculate the impact of a salary increase on your earnings, including tax and inflation effects.",
    icon: <TrendingUp className="w-5 h-5" />,
    to: "/pay-raise-calculator"
  }
];
