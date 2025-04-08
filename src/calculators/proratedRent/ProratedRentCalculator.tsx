
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import ProratedRentForm from './ProratedRentForm';
import ProratedRentResult from './ProratedRentResult';
import ProratedRentContent from './components/ProratedRentContent';
import ProratedRentFAQ from './components/ProratedRentFAQ';

const ProratedRentCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [params, setParams] = useState<{
    monthlyRent: number;
    moveInDate: Date;
    calculationMethod: 'daysInMonth' | 'standardMonth' | 'dailyRate';
  } | null>(null);

  const handleCalculate = (
    monthlyRent: number,
    moveInDate: Date,
    calculationMethod: 'daysInMonth' | 'standardMonth' | 'dailyRate'
  ) => {
    setParams({ monthlyRent, moveInDate, calculationMethod });
    setCalculating(true);
  };

  const handleReset = () => {
    setParams(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Calendar className="text-primary" />
          <h2 className="text-xl font-semibold">Prorated Rent Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate your prorated rent when moving in on a day other than the first of the month.
            This calculator helps you determine how much you'll owe for your partial first month of rent.
          </p>
          
          <ProratedRentForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && params && (
            <ProratedRentResult {...params} />
          )}
          
          <div className="mt-8 border-t pt-6">
            <h3 className="font-medium text-lg mb-2">About Prorated Rent</h3>
            <p className="text-muted-foreground text-sm">
              Prorated rent is the amount you pay when you move in on a day other than when rent is normally due 
              (typically the first of the month). Instead of paying a full month's rent, you pay only for the days 
              you'll actually be living in the property during that first partial month.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              There are several ways landlords can calculate prorated rent:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground text-sm mt-2 space-y-1">
              <li><strong>Exact Days in Month:</strong> Monthly rent ÷ Number of days in the month</li>
              <li><strong>Standard 30-Day Month:</strong> Monthly rent ÷ 30 days</li>
              <li><strong>Daily Rate:</strong> A higher daily rate, often (Monthly rent ÷ 30) × 1.5</li>
            </ul>
            <p className="text-muted-foreground text-sm mt-2">
              Check your lease agreement or ask your landlord to confirm which method they use for prorating rent.
            </p>
          </div>
        </div>
      </div>
      
      {/* Detailed Content */}
      <ProratedRentContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <ProratedRentFAQ />
      </div>
    </div>
  );
};

export default ProratedRentCalculator;
