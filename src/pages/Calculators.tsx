
import React from 'react';
import PageLayout from '../components/PageLayout';
import CalculatorCategorySection from '@/components/calculators/CalculatorCategorySection';
import { calculatorCategories } from '@/data/calculatorCategories';

const Calculators: React.FC = () => {
  return (
    <PageLayout
      title="All Calculators"
      description="Browse our collection of free online calculators for a variety of needs."
      breadcrumbItems={[{ label: 'Calculators' }]}
    >
      <div className="content-section">
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          We've organized our calculators into categories to help you find exactly what you need. 
          Each calculator is designed to be simple to use while providing accurate results.
        </p>
        
        <div className="space-y-12">
          {calculatorCategories.map((category, index) => (
            <CalculatorCategorySection key={index} category={category.name} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Calculators;
