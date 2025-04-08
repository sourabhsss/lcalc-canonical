
import React, { useState } from 'react';
import CurrencyInput from './components/CurrencyInput';
import NumberInput from './components/NumberInput';
import PercentageInput from './components/PercentageInput';
import PaymentOptionSelect from './components/PaymentOptionSelect';
import FormActions from './components/FormActions';

interface ReverseMortgageFormProps {
  onCalculate: (
    homeValue: number,
    age: number,
    mortgageBalance: number,
    interestRate: number,
    paymentOption: string
  ) => void;
}

const ReverseMortgageForm: React.FC<ReverseMortgageFormProps> = ({ onCalculate }) => {
  const [homeValue, setHomeValue] = useState<string>('300000');
  const [age, setAge] = useState<string>('70');
  const [mortgageBalance, setMortgageBalance] = useState<string>('50000');
  const [interestRate, setInterestRate] = useState<string>('4.5');
  const [paymentOption, setPaymentOption] = useState<string>('lump-sum');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateInputs = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (isNaN(Number(homeValue)) || Number(homeValue) <= 0) {
      newErrors.homeValue = 'Please enter a valid home value';
    }
    
    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 62 || ageNum > 120) {
      newErrors.age = 'Age must be at least 62 years';
    }
    
    if (isNaN(Number(mortgageBalance)) || Number(mortgageBalance) < 0) {
      newErrors.mortgageBalance = 'Please enter a valid mortgage balance';
    } else if (Number(mortgageBalance) > Number(homeValue)) {
      newErrors.mortgageBalance = 'Mortgage balance cannot exceed home value';
    }
    
    if (isNaN(Number(interestRate)) || Number(interestRate) <= 0 || Number(interestRate) >= 20) {
      newErrors.interestRate = 'Please enter a valid interest rate (0-20%)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateInputs()) {
      onCalculate(
        Number(homeValue),
        Number(age),
        Number(mortgageBalance),
        Number(interestRate),
        paymentOption
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CurrencyInput
        id="homeValue"
        label="Home Value"
        value={homeValue}
        onChange={setHomeValue}
        tooltipText="The current market value of your home"
        error={errors.homeValue}
      />

      <NumberInput
        id="age"
        label="Age of Youngest Borrower"
        value={age}
        onChange={setAge}
        tooltipText="Must be at least 62 years old to qualify"
        min="62"
        max="120"
        error={errors.age}
      />

      <CurrencyInput
        id="mortgageBalance"
        label="Current Mortgage Balance"
        value={mortgageBalance}
        onChange={setMortgageBalance}
        tooltipText="Any existing mortgage must be paid off with the reverse mortgage proceeds"
        error={errors.mortgageBalance}
      />

      <PercentageInput
        id="interestRate"
        label="Expected Interest Rate"
        value={interestRate}
        onChange={setInterestRate}
        tooltipText="Current average rate for HECM loans is around 4-5%"
        error={errors.interestRate}
      />

      <PaymentOptionSelect 
        value={paymentOption} 
        onChange={setPaymentOption} 
      />

      <FormActions onSubmit={handleSubmit} />
    </form>
  );
};

export default ReverseMortgageForm;
