import React from 'react';
import CalculatorCard from '../CalculatorCard';
import { calculatorCategories } from '@/data/calculatorCategories';
import { CalculatorCategory } from '@/data/calculatorTypes';

interface CalculatorCategorySectionProps {
  category: string;
}

const CalculatorCategorySection: React.FC<CalculatorCategorySectionProps> = ({ category }) => {
  // Find the selected category
  const selectedCategory = calculatorCategories.find(
    (cat) => cat.name.toLowerCase() === category.toLowerCase()
  );

  if (!selectedCategory) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
        <p className="text-muted-foreground">The requested calculator category could not be found.</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{selectedCategory.name} Calculators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.calculators.map((calculator, index) => (
            <CalculatorCard 
              key={index} 
              title={calculator.title}
              description={calculator.description}
              icon={calculator.icon}
              href={calculator.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorCategorySection;
