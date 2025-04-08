
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sigma } from 'lucide-react';

const StandardDeviationContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Understanding Standard Deviation</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Standard deviation is one of the most important statistical measures, helping us understand how spread out our data is. Let's explore what it means and how to use it effectively.
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Sigma className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">What is Standard Deviation?</h3>
            
            <p>
              Standard deviation (often represented by the Greek letter sigma σ) is a statistical measure that quantifies the amount of variation or dispersion in a set of values. A low standard deviation indicates that the data points tend to be close to the mean (average), while a high standard deviation indicates that the data points are spread out over a wider range of values.
            </p>
            
            <p>
              In simpler terms, standard deviation tells us how much individual data points deviate from the mean. It's like taking the average distance between each data point and the mean, which gives us an idea about how "scattered" our data is.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Why Standard Deviation Matters</h3>
            
            <p>
              Understanding standard deviation provides several key benefits across various fields:
            </p>
            
            <ul>
              <li className="mb-2">
                <strong>Data Quality Assessment:</strong> It helps evaluate the reliability and consistency of data. In scientific research, smaller standard deviations typically suggest more precise and consistent measurements.
              </li>
              <li className="mb-2">
                <strong>Financial Risk Management:</strong> In finance, standard deviation is used to measure market volatility and investment risk. Higher standard deviations in asset returns indicate greater price fluctuations and potentially higher risk.
              </li>
              <li className="mb-2">
                <strong>Quality Control:</strong> In manufacturing, standard deviation helps monitor production processes. Products should fall within acceptable ranges of specifications; large deviations may signal problems in the production process.
              </li>
              <li className="mb-2">
                <strong>Academic Performance:</strong> In education, standard deviation can show the distribution of test scores. A high standard deviation indicates a wide range of student performance, while a low one suggests more uniform results.
              </li>
              <li className="mb-2">
                <strong>Weather Forecasting:</strong> Meteorologists use standard deviation to understand climate variability. Regions with high standard deviations in temperature experience more extreme weather patterns.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Real-World Examples</h3>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Example 1: Income Distribution</h4>
            
            <p>
              Consider the monthly income (in thousands of dollars) of employees in two different companies:
            </p>
            
            <ul>
              <li><strong>Company A:</strong> 5.2, 5.1, 4.9, 5.0, 5.3, 4.8, 5.1</li>
              <li><strong>Company B:</strong> 2.5, 9.8, 3.2, 7.6, 1.9, 8.4, 5.0</li>
            </ul>
            
            <p>
              Despite both companies having the same mean income of $5,000 per month, Company A has a much lower standard deviation (0.17) compared to Company B (3.12). This means that Company A has a more equitable salary structure, while Company B has significant income disparities among employees.
            </p>
            
            <h4 className="text-lg font-medium mt-6 mb-2">Example 2: Pharmaceutical Testing</h4>
            
            <p>
              In drug development, consider two medications designed to lower blood pressure:
            </p>
            
            <ul>
              <li><strong>Drug X:</strong> Average reduction of 12 mmHg with a standard deviation of 2 mmHg</li>
              <li><strong>Drug Y:</strong> Average reduction of 12 mmHg with a standard deviation of 8 mmHg</li>
            </ul>
            
            <p>
              While both drugs have the same average effect, Drug X provides more consistent results across patients. Drug Y might work extremely well for some patients but poorly for others, making it less reliable in clinical settings.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Population vs. Sample Standard Deviation</h3>
            
            <p>
              There are two types of standard deviation formulas, depending on whether you're working with an entire population or just a sample:
            </p>
            
            <ul>
              <li className="mb-2">
                <strong>Population Standard Deviation (σ):</strong> Used when you have data for the entire population. The formula divides the sum of squared differences by N (the total number of data points).
              </li>
              <li className="mb-2">
                <strong>Sample Standard Deviation (s):</strong> Used when you have data for only a sample of the population. The formula divides the sum of squared differences by (n-1) instead of n, which provides an unbiased estimate of the population standard deviation.
              </li>
            </ul>
            
            <p>
              The difference between these calculations becomes less significant with larger sample sizes but can be important for small samples. Our calculator provides both values so you can choose the appropriate one for your specific situation.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">The Normal Distribution and Standard Deviation</h3>
            
            <p>
              In a normal distribution (bell curve), the standard deviation has specific properties:
            </p>
            
            <ul>
              <li className="mb-2">
                <strong>About 68%</strong> of the data falls within 1 standard deviation of the mean
              </li>
              <li className="mb-2">
                <strong>About 95%</strong> of the data falls within 2 standard deviations of the mean
              </li>
              <li className="mb-2">
                <strong>About 99.7%</strong> of the data falls within 3 standard deviations of the mean
              </li>
            </ul>
            
            <p>
              This is known as the "68-95-99.7 rule" or the "empirical rule," and it's incredibly useful for understanding how values are distributed in datasets that follow a normal distribution.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Additional Statistical Measures</h3>
            
            <p>
              While standard deviation is powerful, it's most effective when used alongside other statistical measures:
            </p>
            
            <ul>
              <li className="mb-2">
                <strong>Variance:</strong> The square of the standard deviation, which emphasizes larger deviations.
              </li>
              <li className="mb-2">
                <strong>Coefficient of Variation:</strong> Standard deviation divided by the mean, expressed as a percentage. This allows comparison of variation between datasets with different units or means.
              </li>
              <li className="mb-2">
                <strong>Mean Absolute Deviation (MAD):</strong> The average of the absolute differences between each value and the mean, which is less sensitive to outliers than standard deviation.
              </li>
              <li className="mb-2">
                <strong>Interquartile Range (IQR):</strong> The range between the first and third quartiles, representing the middle 50% of the data and less affected by extreme values.
              </li>
            </ul>
            
            <p>
              Our calculator provides several of these complementary statistics to give you a comprehensive view of your data's distribution.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">When to Be Cautious with Standard Deviation</h3>
            
            <p>
              While standard deviation is an essential statistical tool, it has limitations:
            </p>
            
            <ul>
              <li className="mb-2">
                <strong>Non-normal Distributions:</strong> The interpretive power of standard deviation is strongest for normally distributed data. For skewed distributions, other measures like median and IQR may be more informative.
              </li>
              <li className="mb-2">
                <strong>Outliers:</strong> Standard deviation is sensitive to outliers, which can significantly inflate its value.
              </li>
              <li className="mb-2">
                <strong>Small Sample Sizes:</strong> With very small samples, standard deviation becomes less reliable as an estimator.
              </li>
              <li className="mb-2">
                <strong>Multimodal Data:</strong> For datasets with multiple peaks, a single standard deviation value may not adequately characterize the distribution.
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">How Our Standard Deviation Calculator Works</h3>
            
            <p>
              Our calculator implements the standard formulas for statistical analysis:
            </p>
            
            <ol>
              <li className="mb-2">
                First, we calculate the mean of your dataset by summing all values and dividing by the count.
              </li>
              <li className="mb-2">
                For each value, we calculate the difference from the mean, square it, and sum these squared differences.
              </li>
              <li className="mb-2">
                For sample standard deviation, we divide this sum by (n-1) and take the square root.
              </li>
              <li className="mb-2">
                For population standard deviation, we divide by n instead and take the square root.
              </li>
              <li className="mb-2">
                We also calculate related statistics like variance, median, mode, range, and coefficient of variation.
              </li>
            </ol>
            
            <p>
              The calculator handles all the complex calculations instantly, allowing you to focus on interpreting the results and understanding what they mean for your specific application.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Related Calculators</h3>
            
            <p>
              If you found our Standard Deviation Calculator helpful, you might also benefit from these related tools:
            </p>
            
            <ul>
              <li className="mb-2">
                <a href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</a> - Calculate minimum, maximum, median, and quartiles to understand data distribution.
              </li>
              <li className="mb-2">
                <a href="/combinations-calculator" className="text-primary hover:underline">Combinations Calculator</a> - Calculate the number of possible combinations when selecting items from a set.
              </li>
              <li className="mb-2">
                <a href="/permutations-calculator" className="text-primary hover:underline">Permutations Calculator</a> - Determine the number of ways to arrange items in a specific order.
              </li>
              <li className="mb-2">
                <a href="/percentage-increase-calculator" className="text-primary hover:underline">Percentage Increase Calculator</a> - Calculate percentage changes between values.
              </li>
              <li className="mb-2">
                <a href="/interpolation-calculator" className="text-primary hover:underline">Interpolation Calculator</a> - Find values between known data points.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StandardDeviationContent;
