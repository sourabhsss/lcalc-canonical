
import React from 'react';

const PercentErrorFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is percent error?",
      answer: "Percent error is a measure of the difference between a measured or experimental value and the accepted or true value, expressed as a percentage of the accepted value. It quantifies how accurate a measurement is relative to the expected result. The formula for percent error is: Percent Error = |Measured Value - Actual Value| ÷ |Actual Value| × 100%."
    },
    {
      question: "Why do we use absolute value in the percent error formula?",
      answer: "The absolute value is used in the standard percent error formula because we're typically interested in the magnitude of the error rather than its direction. This makes percent error always positive, which is useful for general accuracy assessment. However, in some specialized applications, scientists may use a signed percent error (without absolute value signs) to indicate whether the measurement is an overestimation (positive) or underestimation (negative)."
    },
    {
      question: "What is considered a good or acceptable percent error?",
      answer: "What constitutes an acceptable percent error varies widely depending on the field and application. As a general guideline: 1) Less than 1% is considered excellent accuracy, suitable for analytical chemistry and precision engineering; 2) 1-5% is very good, appropriate for most laboratory and industrial applications; 3) 5-10% is good, acceptable for many educational and field experiments; 4) 10-20% is fair, may be acceptable for preliminary studies; 5) Over 20% is generally considered poor accuracy, potentially indicating significant methodological issues."
    },
    {
      question: "Can percent error be negative?",
      answer: "In the standard formula for percent error, which uses absolute value, the result is always positive. However, when scientists want to indicate whether a measurement is an overestimation or underestimation, they may use a modified formula without absolute value signs that can yield negative results. A negative percent error would indicate that the measured value is less than the actual value (underestimation), while a positive percent error would indicate that the measured value is greater than the actual value (overestimation)."
    },
    {
      question: "How is percent error different from percentage difference?",
      answer: "Percent error specifically compares a measured or experimental value to a known or accepted 'true' value, indicating the accuracy of a measurement. Percentage difference, on the other hand, compares any two values without designating either as the 'correct' one. Percent error is typically used in scientific contexts where there's an established correct value, while percentage difference is used to compare two values that may be equally valid or when no true value is known."
    },
    {
      question: "How do I reduce percent error in my measurements?",
      answer: "To reduce percent error: 1) Ensure instruments are properly calibrated; 2) Take multiple measurements and calculate an average; 3) Control environmental conditions that might affect measurements; 4) Use instruments with appropriate precision for your needs; 5) Follow standardized measurement procedures; 6) Ensure proper training for anyone taking measurements; 7) Identify and correct systematic errors; 8) Use statistical methods to analyze and minimize random errors; 9) Implement quality control checks throughout the measurement process."
    },
    {
      question: "What's the difference between percent error, relative error, and absolute error?",
      answer: "Absolute error is the simple difference between the measured and actual values (|measured - actual|). Relative error is the absolute error divided by the actual value (|measured - actual| ÷ |actual|). Percent error is simply the relative error multiplied by 100 to express it as a percentage. So while absolute error expresses the difference in the original units of measurement, relative and percent error normalize this difference relative to the size of the value being measured, making it possible to meaningfully compare the accuracy of measurements of different quantities."
    },
    {
      question: "When should I use percent error versus standard deviation?",
      answer: "Percent error and standard deviation serve different purposes. Percent error measures the accuracy of a measurement compared to a known correct value, making it useful for assessing how close your experimental results are to an established truth. Standard deviation, on the other hand, measures the precision or consistency of a set of measurements, indicating how closely clustered multiple measurements are to each other, regardless of their accuracy. Use percent error when you want to know how accurate a measurement is, and standard deviation when you want to know how consistent or precise a set of repeated measurements are."
    },
    {
      question: "Can percent error exceed 100%?",
      answer: "Yes, percent error can exceed 100%. This happens when the absolute difference between the measured and actual values is greater than the actual value itself. For example, if the actual value is 10 and the measured value is 25, the percent error would be |(25-10)÷10|×100% = 150%. A percent error exceeding 100% usually indicates a very significant discrepancy, such as a major methodological flaw, completely inappropriate measuring technique, or an error in recording or calculating values."
    },
    {
      question: "How is percent error used in real-world applications?",
      answer: "Percent error has numerous real-world applications: 1) Quality control in manufacturing to ensure products meet specifications; 2) Laboratory analysis to validate experimental methods and results; 3) Medical testing to ensure accurate patient diagnoses; 4) Environmental monitoring to validate measurements of pollutants or climatic conditions; 5) Engineering to verify that structures and components meet design requirements; 6) Educational settings to help students understand measurement limitations; 7) Research and development to assess new measurement techniques or instruments; 8) Calibration processes to verify instrument accuracy; 9) Pharmaceutical production to ensure precise drug formulations."
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Percent Error</h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercentErrorFAQ;
