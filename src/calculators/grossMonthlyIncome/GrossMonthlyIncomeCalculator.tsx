
import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';
import GrossMonthlyIncomeForm from './GrossMonthlyIncomeForm';
import GrossMonthlyIncomeResult from './GrossMonthlyIncomeResult';
import { 
  GrossMonthlyIncomeInputs,
  processGrossMonthlyIncomeInputs,
  calculateGrossMonthlyIncome,
  GrossMonthlyIncomeResult as GrossMonthlyIncomeResultType,
  grossMonthlyIncomeFaqs,
  industryIncomeInsights,
  grossMonthlyIncomeResources
} from './grossMonthlyIncomeUtils';
import FAQSection from '@/components/FAQSection';
import RelatedCalculators from './components/RelatedCalculators';
import IncomeGuideSection from './components/IncomeGuideSection';
import TaxDeductionGuide from './components/TaxDeductionGuide';

const GrossMonthlyIncomeCalculator: React.FC = () => {
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [result, setResult] = useState<GrossMonthlyIncomeResultType | null>(null);

  const handleCalculate = (inputs: GrossMonthlyIncomeInputs) => {
    const { income, deductions } = processGrossMonthlyIncomeInputs(inputs);
    const calculationResult = calculateGrossMonthlyIncome(income, deductions);
    setResult(calculationResult);
    setIsCalculated(true);
    
    // Scroll to results if already calculated once
    setTimeout(() => {
      if (isCalculated) {
        window.scrollBy({
          top: 200,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleReset = () => {
    setResult(null);
    setIsCalculated(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <DollarSign className="text-primary" />
          <h2 className="text-xl font-semibold">Gross Monthly Income Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate your gross monthly income, net income after taxes and deductions, and get personalized budget recommendations.
            This calculator helps you understand your complete financial picture including tax obligations, take-home pay, 
            and effective tax rate to make better financial decisions.
          </p>
          
          <GrossMonthlyIncomeForm 
            onCalculate={handleCalculate} 
            onReset={handleReset} 
          />
          
          {isCalculated && result && (
            <GrossMonthlyIncomeResult result={result} />
          )}
          
          {/* Educational content about income */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex gap-4 items-start">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Why Calculating Gross Monthly Income Matters</h3>
                <p className="text-blue-700">
                  Understanding your gross monthly income is essential for financial planning, budgeting, and making informed
                  financial decisions. It serves as the foundation for loan applications, rental agreements, and determining 
                  your tax obligations. Accurate income calculations help you assess your true earning power, plan for the future,
                  and create realistic financial goals based on your actual income potential.
                </p>
              </div>
            </div>
          </div>
          
          <IncomeGuideSection industryInsights={industryIncomeInsights} />
          <TaxDeductionGuide resources={grossMonthlyIncomeResources} />
        </div>
      </div>
      
      <FAQSection faqs={grossMonthlyIncomeFaqs} />
      
      <RelatedCalculators />
    </div>
  );
};

export default GrossMonthlyIncomeCalculator;
