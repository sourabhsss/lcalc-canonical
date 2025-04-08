
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import StandardDrinkCalculator from '@/calculators/standardDrink/StandardDrinkCalculator';

const StandardDrinkCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="Standard Drink Calculator"
      description="Calculate the number of standard drinks in alcoholic beverages based on volume and alcohol percentage."
      category="Lifestyle & Relationships"
      categoryUrl="/calculators"
      metaDescription="Free online Standard Drink Calculator - Easily determine the number of standard drinks in your beverages based on alcohol content, volume, and container size. Understand your alcohol consumption for responsible drinking."
    >
      <div className="py-12">
        <StandardDrinkCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default StandardDrinkCalculatorPage;
