
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import HalfBirthdayForm from './HalfBirthdayForm';
import HalfBirthdayResult from './HalfBirthdayResult';
import HalfBirthdayContent from './components/HalfBirthdayContent';
import HalfBirthdayFAQ from './components/HalfBirthdayFAQ';

const HalfBirthdayCalculator: React.FC = () => {
  const [calculating, setCalculating] = useState<boolean>(false);
  const [birthdate, setBirthdate] = useState<Date | null>(null);
  const [halfBirthdate, setHalfBirthdate] = useState<Date | null>(null);

  const handleCalculate = (date: Date) => {
    setBirthdate(date);
    
    // Calculate half birthday (6 months after birthdate)
    const halfBirthdayDate = new Date(date);
    halfBirthdayDate.setMonth(halfBirthdayDate.getMonth() + 6);
    
    setHalfBirthdate(halfBirthdayDate);
    setCalculating(true);
  };

  const handleReset = () => {
    setBirthdate(null);
    setHalfBirthdate(null);
    setCalculating(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="calc-card">
        <div className="calc-card-header flex items-center gap-3">
          <Calendar className="text-primary" />
          <h2 className="text-xl font-semibold">Half Birthday Calculator</h2>
        </div>
        
        <div className="calc-card-body">
          <p className="text-muted-foreground mb-6">
            Calculate when your half birthday falls. This calculator helps you find the exact date that marks the midpoint between your birthdays.
          </p>
          
          <HalfBirthdayForm onCalculate={handleCalculate} onReset={handleReset} />
          
          {calculating && birthdate && halfBirthdate && (
            <HalfBirthdayResult birthdate={birthdate} halfBirthdate={halfBirthdate} />
          )}
        </div>
      </div>
      
      {/* Detailed Content */}
      <HalfBirthdayContent />
      
      {/* FAQs */}
      <div className="mt-12">
        <HalfBirthdayFAQ />
      </div>
    </div>
  );
};

export default HalfBirthdayCalculator;
