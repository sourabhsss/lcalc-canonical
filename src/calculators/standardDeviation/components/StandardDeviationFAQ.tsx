
import React from 'react';
import FAQSection from '@/components/FAQSection';

const StandardDeviationFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is standard deviation used for in statistics?",
      answer: "Standard deviation is a fundamental statistical measure that quantifies the amount of variation or dispersion in a dataset. It's used to understand how far individual data points typically deviate from the mean. In practical applications, it helps assess data consistency, measure variability, estimate precision, detect outliers, and compare datasets. In fields like finance, it's used to measure investment risk; in manufacturing, it monitors product quality; in education, it evaluates test score distributions; and in scientific research, it determines the reliability of experimental results."
    },
    {
      question: "What's the difference between population and sample standard deviation?",
      answer: "Population standard deviation (σ) applies when you have data for every member of the entire population you're studying. It uses n (the total count) as the divisor in the formula. Sample standard deviation (s) applies when you only have data from a subset or sample of the population. It uses (n-1) as the divisor, which provides an unbiased estimate of the population standard deviation. The (n-1) divisor, known as Bessel's correction, compensates for the fact that a sample tends to underestimate the true variability in the population. Our calculator provides both values so you can choose the appropriate one based on whether your data represents a complete population or just a sample."
    },
    {
      question: "How do I interpret standard deviation values?",
      answer: "When interpreting standard deviation: 1) Context is key - what's considered high or low depends on your specific application and the scale of your measurements. 2) For normally distributed data, about 68% of values fall within one standard deviation of the mean, 95% within two, and 99.7% within three. 3) Compare the standard deviation to the mean - the coefficient of variation (standard deviation divided by the mean) helps assess relative variability, especially when comparing datasets with different units or scales. 4) In many applications, smaller standard deviations indicate more consistent, reliable, or uniform data, while larger values suggest greater variability, diversity, or potential instability."
    },
    {
      question: "Why does my calculator show different standard deviation values than Excel?",
      answer: "Different calculators and software might show slightly different standard deviation values due to: 1) Population vs. Sample calculation - Excel has two functions: STDEV.P (population) and STDEV.S (sample). Make sure you're comparing the same type. 2) Rounding differences - intermediate calculations might be rounded differently in various tools. 3) Precision settings - some tools use different levels of internal precision. 4) Formula variations - some calculators use computational shortcuts that can introduce minor differences. Our calculator provides both population and sample standard deviations with high precision to match most statistical software outputs."
    },
    {
      question: "Can standard deviation be negative?",
      answer: "No, standard deviation cannot be negative. It represents the square root of the variance, which is calculated by squaring differences from the mean. Since squares are always non-negative, and the square root of a non-negative number is non-negative, standard deviation is always either positive or zero. A standard deviation of zero only occurs when all values in the dataset are identical (no variation). The larger the standard deviation, the more spread out the data; it never indicates a 'negative spread' or any similar concept."
    },
    {
      question: "When should I use standard deviation versus other measures of spread?",
      answer: "Choose standard deviation when: 1) Your data approximates a normal distribution and you want a measure sensitive to all data points. 2) You need compatibility with common statistical tests and models. Consider alternatives when: 1) Your data is highly skewed or has outliers (use median and interquartile range instead). 2) You want a measure in the same units as your data (use mean absolute deviation). 3) You're comparing datasets with different units or scales (use coefficient of variation). 4) You're working with ranked or ordinal data (use range or percentiles). 5) You're analyzing circular data like angles or times of day (use circular standard deviation)."
    },
    {
      question: "How does sample size affect standard deviation?",
      answer: "Sample size affects standard deviation in several ways: 1) Stability - with larger samples, the standard deviation tends to stabilize closer to the true population value. 2) Precision - larger samples typically provide more precise estimates of the true standard deviation. 3) Formula adjustment - when calculating sample standard deviation, we divide by (n-1) rather than n, which makes a noticeable difference for small samples but becomes negligible as sample size increases. 4) Confidence - larger samples give us more confidence that the calculated standard deviation represents the actual variability in the population. As a general rule, larger samples provide more reliable standard deviation estimates."
    },
    {
      question: "What's the relationship between standard deviation and variance?",
      answer: "Variance and standard deviation measure the same thing—data dispersion—but have different properties: 1) Formula relationship - standard deviation is simply the square root of the variance. 2) Units - variance is expressed in squared units of the original data, while standard deviation is in the same units as the original data, making it more interpretable. 3) Statistical uses - variance has mathematical properties that make it useful in theoretical statistics and ANOVA, while standard deviation is more commonly used for data description and reporting because of its interpretability. 4) Additive properties - variances of independent variables are additive, while standard deviations are not."
    },
    {
      question: "How do outliers affect standard deviation?",
      answer: "Outliers can significantly impact standard deviation because: 1) Standard deviation calculation involves squaring differences from the mean, which amplifies the effect of values far from the mean. 2) Even a single extreme outlier can dramatically increase the standard deviation, potentially giving a misleading impression of the typical spread of most data points. 3) This sensitivity to outliers means standard deviation may not accurately represent the typical variability when outliers are present. For datasets with outliers, consider: 1) Removing outliers if they represent errors. 2) Using robust measures like median and interquartile range instead. 3) Transforming the data. 4) Reporting standard deviation both with and without outliers to show their impact."
    },
    {
      question: "Can I compare standard deviations between different datasets?",
      answer: "Yes, but with important considerations: 1) Same units - direct comparison requires the same units of measurement. 2) Similar scales - for meaningful comparisons, datasets should be on similar scales. 3) Coefficient of variation - for datasets with different means or units, use the coefficient of variation (standard deviation divided by mean, often expressed as a percentage). 4) Statistical tests - use F-tests or Levene's test to formally determine if two standard deviations are significantly different. 5) Sample sizes - consider whether different sample sizes might affect the reliability of the standard deviation estimates when making comparisons."
    }
  ];

  return <FAQSection faqs={faqs} title="Standard Deviation Calculator: Frequently Asked Questions" />;
};

export default StandardDeviationFAQ;
