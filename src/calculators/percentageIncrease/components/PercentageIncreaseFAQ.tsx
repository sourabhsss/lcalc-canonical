
import React from 'react';
import FAQSection from '@/components/FAQSection';

const PercentageIncreaseFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the formula for calculating percentage change?",
      answer: "The standard formula for calculating percentage change is: Percentage Change = ((New Value - Original Value) / |Original Value|) × 100%. This formula expresses the relative change between two values as a percentage of the original value. For example, if a price increases from $80 to $100, the percentage change is ((100 - 80) / |80|) × 100% = 25%. When the result is positive, it indicates a percentage increase; when negative, it indicates a percentage decrease. The formula uses the absolute value of the original value in the denominator to ensure the calculation works properly with negative original values."
    },
    {
      question: "What's the difference between percentage points and percentages?",
      answer: "Percentage points and percentages represent different ways of expressing changes: 1) Percentage points measure the arithmetic difference between two percentages. For example, if an interest rate changes from 3% to 5%, that's a 2 percentage point increase. 2) Percentage change measures the relative change between values. In the same example, changing from 3% to 5% is a 66.7% increase (because (5-3)/3 × 100% = 66.7%). This distinction is crucial in finance, economics, and statistics. For instance, if unemployment drops from 10% to 8%, news reports might accurately state: 'Unemployment decreased by 2 percentage points,' and also 'Unemployment decreased by 20%.' Both statements are correct but measure different aspects of the change."
    },
    {
      question: "Why doesn't a percentage increase followed by the same percentage decrease return to the original value?",
      answer: "A percentage increase followed by an equal percentage decrease doesn't return to the original value because the second percentage is applied to a different base value than the first. For example, if you start with $100 and increase it by 50%, you get $150. If you then decrease this by 50%, you get $75, which is 25% less than your original amount. This happens because the 50% decrease is calculated on the new value ($150), not the original value ($100). To return exactly to the original value after a percentage increase, you need to decrease by a different percentage. The formula to calculate this compensating percentage is: Compensating Percentage = (Percentage Increase / (100 + Percentage Increase)) × 100. For a 50% increase, the compensating decrease would be 33.33%."
    },
    {
      question: "How do I calculate a new value after a percentage increase?",
      answer: "To calculate a new value after a percentage increase: 1) Convert the percentage to a decimal by dividing by 100. 2) Add 1 to this decimal to create a multiplier. 3) Multiply the original value by this multiplier. The formula is: New Value = Original Value × (1 + (Percentage / 100)). For example, to calculate a 15% increase on $200: Convert 15% to 0.15, Add 1 to get 1.15, Multiply: $200 × 1.15 = $230. This method works for any percentage increase. For large increases, like 200%, the multiplier becomes 3 (1 + 2), effectively tripling the original value. When calculating salary increases, price inflations, or investment returns, this formula gives you the exact new value after applying the percentage increase."
    },
    {
      question: "How do I find the percentage change between negative numbers?",
      answer: "Calculating percentage change between negative numbers follows the same formula as with positive numbers, but requires careful attention to signs: Percentage Change = ((New Value - Original Value) / |Original Value|) × 100%. For example, if a company's losses improve from -$8,000 to -$3,000: 1) Calculate the difference: -$3,000 - (-$8,000) = $5,000 2) Divide by the absolute value of the original: $5,000 / |-$8,000| = 0.625 3) Multiply by 100%: 0.625 × 100% = 62.5% This represents a 62.5% improvement (reduction in losses). Similarly, if temperature changes from -5°C to -15°C: ((-15) - (-5)) / |-5| × 100% = -10 / 5 × 100% = -200%, indicating a 200% decrease."
    },
    {
      question: "How do I calculate percentage change when the starting value is zero?",
      answer: "When the starting value is zero, the standard percentage change formula (((New Value - Original Value) / |Original Value|) × 100%) breaks down because division by zero is mathematically undefined. This situation requires alternative approaches: 1) Report the absolute change instead of a percentage. For example, 'The value increased from 0 to 25.' 2) Use percentage points if dealing with rates or percentages. 3) Establish a minimum baseline value for calculation purposes. 4) Calculate the percentage change in reverse (from the new value to zero), which would always be -100%. 5) In some scientific or statistical contexts, specialized methods like log-fold changes may be used. The appropriate approach depends on your specific context and what information is most meaningful to communicate."
    },
    {
      question: "Why do different percentage increase calculators sometimes give different results?",
      answer: "Different percentage increase calculators might give varying results due to: 1) Rounding methods - some calculators round intermediate steps while others maintain precision throughout the calculation. 2) Formula interpretation - some calculators might implement slight variations of the percentage change formula. 3) Handling of special cases - different approaches to zero values, negative numbers, or very large percentages. 4) Precision settings - the number of decimal places displayed or used in calculations can affect final results. 5) Whether the calculator uses 'percentage change' or 'percentage difference' formulas (the latter taking the absolute value of the difference). Our calculator implements the standard mathematical formula for percentage change and maintains high precision throughout calculations to provide accurate results. For critical financial or scientific applications, it's always good practice to verify important calculations using multiple methods."
    },
    {
      question: "How do I calculate the original value if I know the percentage change and the new value?",
      answer: "To calculate the original value when you know the percentage change and the new value: 1) Convert the percentage change to a decimal by dividing by 100. 2) Add 1 to this decimal (for an increase) or subtract it from 1 (for a decrease). 3) Divide the new value by this factor. The formula is: Original Value = New Value / (1 + (Percentage Change / 100)). For example, if a value increased by 25% to $250: Original Value = $250 / (1 + (25/100)) = $250 / 1.25 = $200. For a 25% decrease to $150: Original Value = $150 / (1 - (25/100)) = $150 / 0.75 = $200. This calculation is particularly useful in reverse-engineering original prices from sale prices, determining pre-tax amounts, or finding initial investment values knowing the current value and return percentage."
    },
    {
      question: "What's the difference between absolute change and relative (percentage) change?",
      answer: "Absolute change and relative (percentage) change measure different aspects of variation between values: 1) Absolute change is the simple arithmetic difference between two values: New Value - Original Value. It's expressed in the same units as the original measurements. For example, a price change from $75 to $90 has an absolute change of $15. 2) Relative change expresses this difference as a proportion of the original value: ((New Value - Original Value) / Original Value) × 100%. Using the same example, the relative change is ((90 - 75) / 75) × 100% = 20%. Each measure has different applications: Absolute change is more relevant when the magnitude of change matters in practical terms (like budget planning). Relative change is better for comparing changes across different scales or contexts (like comparing performance across different investments). Both metrics together provide a more complete understanding of how values have changed."
    },
    {
      question: "How do compounding percentage changes work over multiple periods?",
      answer: "Compounding percentage changes over multiple periods work multiplicatively rather than additively: 1) Each percentage change is converted to a multiplier: (1 + Percentage/100). 2) The multipliers are then multiplied together to get the cumulative effect. 3) The result can be converted back to a percentage by subtracting 1 and multiplying by 100. For example, if an investment increases by 10% in year 1, 5% in year 2, and 15% in year 3: The multipliers are 1.10, 1.05, and 1.15. The cumulative multiplier is 1.10 × 1.05 × 1.15 = 1.33. This represents a 33% total increase over the three years. This is different from simply adding the percentages (10% + 5% + 15% = 30%). For significant financial planning, compound annual growth rate (CAGR) is often used to express the smoothed annualized gain over an investment holding period: CAGR = (Final Value / Initial Value)^(1/n) - 1, where n is the number of years."
    }
  ];

  return <FAQSection faqs={faqs} title="Percentage Change Calculator: Frequently Asked Questions" />;
};

export default PercentageIncreaseFAQ;
