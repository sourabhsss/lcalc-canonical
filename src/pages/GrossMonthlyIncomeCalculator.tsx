
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import GrossMonthlyIncomeCalculator from '@/calculators/grossMonthlyIncome/GrossMonthlyIncomeCalculator';

const GrossMonthlyIncomeCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Gross Monthly Income Calculator"
      description="Calculate your gross and net monthly income, understand taxes and deductions, and get personalized budget recommendations based on your earnings."
      category="Finance"
      categoryUrl="/calculators"
      metaDescription="Free Gross Monthly Income Calculator to determine your income before and after taxes, plan your budget, and understand how deductions affect your take-home pay. Use our calculator for hourly, weekly, or annual wages."
    >
      <div className="container mx-auto py-12">
        <GrossMonthlyIncomeCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default GrossMonthlyIncomeCalculatorPage;
