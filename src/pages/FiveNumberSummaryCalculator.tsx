import CalculatorLayout from '../components/CalculatorLayout';
import FiveNumberSummary from '../calculators/FiveNumberSummary';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { Card } from '@/components/ui/card';

const FiveNumberSummaryCalculator = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What is a five-number summary?',
      answer: 'A five-number summary is a descriptive statistic that provides information about a dataset through five key values: the minimum value, first quartile (Q1), median, third quartile (Q3), and the maximum value. It gives a quick overview of the central tendency, spread, and range of a dataset without requiring complex statistical analyses.'
    },
    {
      question: 'How are quartiles calculated in statistics?',
      answer: 'Quartiles divide a dataset into four equal parts. There are several methods for calculating quartiles: 1) The standard method separates the data at the median and finds the middle value of each half; 2) The inclusive method uses linear interpolation to find more precise values; 3) The nearest rank method simply uses the nearest data point at the 25% and 75% positions. Our calculator offers all three methods to accommodate different statistical needs.'
    },
    {
      question: 'What is the interquartile range (IQR) used for?',
      answer: 'The interquartile range (IQR) is the difference between the third quartile (Q3) and the first quartile (Q1). It represents the middle 50% of the data and is a robust measure of dispersion that\'s not affected by outliers. The IQR is commonly used to identify outliers using the 1.5 × IQR rule: values below Q1 - 1.5 × IQR or above Q3 + 1.5 × IQR are considered potential outliers.'
    },
    {
      question: 'Why should I use a five-number summary instead of just calculating the mean and standard deviation?',
      answer: 'A five-number summary is more robust to outliers than the mean and standard deviation. It provides insights into the shape of the distribution and is particularly useful for skewed data or datasets with extreme values. While the mean and standard deviation assume a normal distribution, the five-number summary makes no such assumption, making it more versatile for real-world data analysis.'
    },
    {
      question: 'How can I interpret a box plot or five-number summary?',
      answer: 'When interpreting a five-number summary or box plot: 1) Look at the median to understand the central tendency; 2) Examine the IQR (the difference between Q3 and Q1) to gauge the spread of the middle 50% of data; 3) Compare the distance from minimum to Q1 and from Q3 to maximum to assess skewness; 4) Check for outliers that fall outside the whiskers; 5) Compare the overall range (max - min) to understand the full spread of the data.'
    },
    {
      question: 'When should I use different quartile calculation methods?',
      answer: 'Different quartile calculation methods are appropriate in different contexts: 1) The standard method is commonly used in basic statistics and aligns with many textbook definitions; 2) The inclusive method provides more precise values through interpolation and is often used in advanced statistical analyses; 3) The nearest rank method is simpler and may be preferred when working with ordinal data or when precise interpolation is not desired. If you\'re following specific guidelines or comparing with other analyses, it\'s important to use the same method for consistency.'
    },
    {
      question: 'How do I identify outliers using the five-number summary?',
      answer: 'Outliers can be identified using the 1.5 × IQR rule. Calculate the IQR (Q3 - Q1), then determine the lower bound (Q1 - 1.5 × IQR) and upper bound (Q3 + 1.5 × IQR). Any values below the lower bound or above the upper bound are considered potential outliers. This method is more robust than using standard deviations from the mean because it\'s not affected by the outliers themselves.'
    },
    {
      question: 'Can I use a five-number summary for any type of data?',
      answer: "A five-number summary is most useful for quantitative data (numerical data that can be measured). It's particularly valuable for continuous data like measurements, prices, or scores. For categorical or nominal data (like colors or types), a five-number summary is not appropriate. For ordinal data (ranked categories), a five-number summary may be used with caution, depending on the specific context."
    }
  ];

  return (
    <CalculatorLayout
      title="Five Number Summary Calculator"
      description="Calculate the minimum, Q1, median, Q3, and maximum values from your dataset with advanced visualization and outlier detection."
      category="Math & Statistics"
      metaDescription="Free online Five Number Summary Calculator - Analyze your data with minimum, Q1, median, Q3, maximum, IQR, outlier detection, and statistical visualizations."
    >
      {/* Calculator Section */}
      <section className="py-8">
        <FiveNumberSummary />
      </section>
      
      {/* Information Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Understanding the Five Number Summary</h2>
          <p className="text-lg mb-6">
            The five-number summary is a fundamental concept in descriptive statistics that provides a comprehensive overview of a dataset's distribution. By capturing five critical values—the minimum, first quartile (Q1), median, third quartile (Q3), and maximum—this statistical tool offers insights into central tendency, dispersion, and potential outliers without requiring complex mathematical analyses.
          </p>
          <p className="text-lg mb-6">
            Developed as part of exploratory data analysis techniques, the five-number summary serves as the foundation for box plots (also known as box-and-whisker plots), which provide visual representations of data distributions. This approach to data analysis gained prominence through the work of statistician John Tukey in the 1970s and remains a cornerstone of modern statistical practice.
          </p>
          <p className="text-lg">
            Unlike mean and standard deviation, which can be heavily influenced by extreme values, the five-number summary relies primarily on order statistics and quantiles, making it particularly robust against outliers. This quality makes it especially valuable for analyzing real-world data, which often contains anomalies or follows non-normal distributions.
          </p>
        </div>
      </section>
      
      {/* Components Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Components of the Five Number Summary</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Minimum Value</h3>
              <p className="text-lg text-muted-foreground">
                The minimum value represents the smallest observation in your dataset. While simple to identify, this value provides crucial information about the lower bound of your data and helps establish the overall range. In some contexts, an extremely low minimum may indicate potential data entry errors or genuinely unusual observations that warrant further investigation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">First Quartile (Q1)</h3>
              <p className="text-lg text-muted-foreground">
                The first quartile, or Q1, marks the 25th percentile of your data—the value below which 25% of observations fall. Also known as the lower quartile, Q1 forms the lower boundary of the box in a box plot. The calculation of Q1 can vary depending on the method used (standard, inclusive, or nearest rank), but it consistently represents the median of the lower half of the dataset in most approaches.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Median</h3>
              <p className="text-lg text-muted-foreground">
                The median represents the middle value of the dataset when arranged in ascending order—the 50th percentile. For an odd number of observations, it's simply the middle value; for an even number, it's the average of the two middle values. As a measure of central tendency, the median is more robust to outliers than the mean, making it particularly valuable for skewed distributions. The median divides the dataset into two equal halves and forms the central line in a box plot.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Third Quartile (Q3)</h3>
              <p className="text-lg text-muted-foreground">
                The third quartile, or Q3, marks the 75th percentile of your data—the value below which 75% of observations fall. Also known as the upper quartile, Q3 forms the upper boundary of the box in a box plot. Like Q1, the calculation of Q3 can vary depending on the method used, but it generally represents the median of the upper half of the dataset.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Maximum Value</h3>
              <p className="text-lg text-muted-foreground">
                The maximum value represents the largest observation in your dataset. Together with the minimum, it establishes the overall range of your data. In certain contexts, an extremely high maximum may indicate outliers or data collection errors that might need special attention during analysis.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Interquartile Range (IQR)</h3>
              <p className="text-lg text-muted-foreground">
                While not one of the five named components, the interquartile range (IQR) is derived from the five-number summary and represents the difference between Q3 and Q1. The IQR measures the spread of the middle 50% of your data and is particularly useful for identifying outliers. By convention, values below Q1 - 1.5 × IQR or above Q3 + 1.5 × IQR are often flagged as potential outliers in statistical analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Real-World Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Financial Analysis</h3>
              <p className="text-muted-foreground">
                Financial analysts use five-number summaries to analyze stock prices, returns, and market indices. The IQR helps identify volatile trading days or unusual market behavior, while the median provides a robust measure of central tendency that isn't skewed by extreme market events. Investment firms often use box plots based on these summaries to visualize risk and return distributions across different asset classes.
              </p>
              <p className="text-muted-foreground mt-2">
                For example, when analyzing historical stock returns, a financial analyst might calculate the five-number summary to identify not only the typical returns (median) but also the spread of common returns (IQR) and any unusual performance periods that might qualify as outliers.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Educational Assessment</h3>
              <p className="text-muted-foreground">
                In education, five-number summaries help analyze test scores across classes, schools, or districts. Teachers and administrators can quickly compare performance distributions, identify achievement gaps, and spot unusual patterns that might indicate issues with test administration or curriculum implementation.
              </p>
              <p className="text-muted-foreground mt-2">
                For instance, a school district analyzing standardized test results might use five-number summaries to compare performance across different schools. A wide IQR at certain schools could indicate greater variability in student achievement, potentially highlighting areas where additional educational support might be beneficial.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Medical Research</h3>
              <p className="text-muted-foreground">
                Medical researchers frequently use five-number summaries when analyzing patient data such as lab values, vital signs, or treatment responses. The robustness of this approach makes it particularly valuable for clinical data, which often contains outliers due to individual patient variability.
              </p>
              <p className="text-muted-foreground mt-2">
                In a clinical trial studying a new medication, researchers might generate five-number summaries of patient response data to quickly assess the distribution of outcomes. This approach can help identify not only the typical response but also unusual cases that might warrant further investigation for safety concerns or exceptional efficacy.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Environmental Science</h3>
              <p className="text-muted-foreground">
                Environmental scientists use five-number summaries to analyze measurements such as pollution levels, temperature variations, or precipitation patterns. This approach helps identify seasonal trends, unusual environmental events, and potential data collection issues.
              </p>
              <p className="text-muted-foreground mt-2">
                When monitoring air quality across multiple locations, an environmental scientist might calculate five-number summaries for each site to quickly compare pollution levels. Sites with particularly high maximums or large IQRs might indicate areas with intermittent pollution sources or monitoring stations that require calibration.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Methods Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Different Methods for Calculating Quartiles</h2>
          <p className="text-lg mb-6">
            While the concept of quartiles is straightforward—dividing data into quarters—there are several methods for calculating them. These different approaches can sometimes yield slightly different results, especially for small datasets or when the number of observations isn't a multiple of four.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Standard Method</h3>
              <p className="text-lg text-muted-foreground">
                The standard method, sometimes called Tukey's method, involves finding the median of the dataset to divide it into upper and lower halves. Q1 is then the median of the lower half, and Q3 is the median of the upper half. When the dataset has an odd number of elements, the median itself is typically excluded from both halves before calculating Q1 and Q3.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                This method is widely used in introductory statistics and aligns with many textbook definitions. It's the default method in many statistical software packages, including early versions of Microsoft Excel.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Inclusive Method</h3>
              <p className="text-lg text-muted-foreground">
                The inclusive method uses linear interpolation to calculate quartiles based on positions rather than specific data points. It determines the position of the quartiles as (n+1)/4 for Q1 and 3(n+1)/4 for Q3, where n is the number of observations. If these positions fall between data points, linear interpolation is used to calculate the quartile values.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                This method can provide more precise quartile estimates, especially for small datasets. It's used in some statistical software and scientific calculators, and it may be preferred in contexts where continuous, rather than discrete, estimates are desirable.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Nearest Rank Method</h3>
              <p className="text-lg text-muted-foreground">
                The nearest rank method uses the nearest actual data points to represent the quartiles. It calculates the position of Q1 as ceiling(n/4) and Q3 as ceiling(3n/4), where n is the number of observations. This approach always selects an actual data point from the dataset rather than interpolating between values.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                This method is conceptually simpler and may be preferred when working with ordinal data or when the exact values between observed data points aren't meaningful. Some statistical software packages use variations of this approach.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Practical Considerations</h3>
              <p className="text-lg text-muted-foreground">
                When working with five-number summaries and quartiles, it's important to:
              </p>
              <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2 mt-2">
                <li>Be consistent in the method used, especially when comparing multiple datasets</li>
                <li>Document the quartile calculation method used in any analysis or report</li>
                <li>Understand that different statistical software may use different default methods</li>
                <li>Consider the nature of your data when selecting a method (discrete vs. continuous, small vs. large dataset)</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                Our calculator provides all three methods to give you flexibility in your statistical analysis and to ensure compatibility with various analytical approaches and software packages.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visualization Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Visualizing the Five Number Summary</h2>
          <p className="text-lg mb-6">
            The five-number summary forms the foundation of one of the most useful statistical visualizations: the box plot (or box-and-whisker plot). This visualization provides an immediate graphical representation of your data's distribution, central tendency, and variability.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Box Plots</h3>
              <p className="text-lg text-muted-foreground">
                A box plot represents the five-number summary as follows:
              </p>
              <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2 mt-2">
                <li>The "box" spans from Q1 to Q3, representing the interquartile range (IQR)</li>
                <li>A line inside the box represents the median</li>
                <li>"Whiskers" extend from the box to the minimum and maximum values, with some variations:
                  <ul className="list-circle pl-6 space-y-1 mt-1">
                    <li>In Tukey's original formulation, whiskers extend to the most extreme points within 1.5 × IQR from the box</li>
                    <li>Points beyond the whiskers are plotted individually as potential outliers</li>
                    <li>Some variations show whiskers extending to the minimum and maximum values regardless of distance</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Interpreting Box Plots</h3>
              <p className="text-lg text-muted-foreground">
                Box plots reveal several characteristics of your data at a glance:
              </p>
              <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2 mt-2">
                <li><strong>Central tendency:</strong> The position of the median line within the box</li>
                <li><strong>Dispersion:</strong> The length of the box (IQR) and whiskers</li>
                <li><strong>Skewness:</strong> Asymmetry in the box or whiskers:
                  <ul className="list-circle pl-6 space-y-1 mt-1">
                    <li>If the median is closer to Q1, the distribution is positively skewed (right-skewed)</li>
                    <li>If the median is closer to Q3, the distribution is negatively skewed (left-skewed)</li>
                    <li>If the median is roughly centered in the box, the distribution is approximately symmetric</li>
                  </ul>
                </li>
                <li><strong>Outliers:</strong> Individual points beyond the whiskers</li>
                <li><strong>Comparison:</strong> When multiple box plots are displayed side by side, they facilitate easy comparison of different groups or categories</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Beyond Box Plots</h3>
              <p className="text-lg text-muted-foreground">
                While box plots based on the five-number summary provide valuable insights, they're often complemented by other visualizations:
              </p>
              <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2 mt-2">
                <li><strong>Violin plots:</strong> Combine box plots with kernel density plots to show the full distribution</li>
                <li><strong>Beeswarm plots:</strong> Add individual data points in a non-overlapping arrangement</li>
                <li><strong>Histograms:</strong> Show frequency distributions with more detail about data clustering</li>
                <li><strong>QQ plots:</strong> Compare the quantiles of your data with theoretical distributions</li>
              </ul>
              <p className="text-lg text-muted-foreground mt-4">
                The choice of visualization should depend on your specific analytical needs and the characteristics of your data. However, the five-number summary remains a cornerstone of exploratory data analysis, providing essential information regardless of the visualization method chosen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Tools Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Related Statistical Tools</h2>
          <p className="text-lg mb-6">
            While the five-number summary provides valuable insights into your data, it's often used alongside other statistical tools and measures. Understanding these related concepts can enhance your data analysis capabilities and provide a more comprehensive view of your dataset.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">GPA Calculations</h3>
              <p className="text-muted-foreground">
                When analyzing academic performance, the five-number summary can complement GPA calculations by providing insights into the distribution of grades. While GPA offers a single measure of central tendency, the five-number summary reveals the spread and potential outliers in academic achievement.
              </p>
              <p className="text-muted-foreground mt-2">
                Our <a href="/college-gpa-calculator" className="text-primary hover:underline">College GPA Calculator</a> and <a href="/percentage-to-cgpa-calculator" className="text-primary hover:underline">Percentage to CGPA Calculator</a> can help you convert between different grading systems while the five-number summary analyzes the distribution of your scores.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Financial Metrics</h3>
              <p className="text-muted-foreground">
                In financial analysis, the five-number summary complements metrics like average returns and volatility measures. It provides a more robust view of investment performance that isn't skewed by occasional extreme market movements.
              </p>
              <p className="text-muted-foreground mt-2">
                Our <a href="/stock-average-calculator" className="text-primary hover:underline">Stock Average Calculator</a> helps you determine your average investment cost, while the five-number summary can analyze the distribution of historical stock prices or returns to identify typical performance ranges and unusual market conditions.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Z-scores and Standardization</h3>
              <p className="text-muted-foreground">
                While the five-number summary uses the original units of measurement, z-scores standardize data by expressing values in terms of standard deviations from the mean. Z-scores are particularly useful for comparing observations from different distributions or scales.
              </p>
              <p className="text-muted-foreground mt-2">
                The five-number summary complements z-scores by providing insights into the shape of the distribution and identifying potential outliers without assuming normality. Together, these tools offer a comprehensive view of your data's position, spread, and distribution characteristics.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Correlation and Regression</h3>
              <p className="text-muted-foreground">
                When examining relationships between variables, correlation and regression analyses provide insights into the direction and strength of associations. The five-number summary can complement these analyses by characterizing the distribution of each variable independently.
              </p>
              <p className="text-muted-foreground mt-2">
                Before performing correlation or regression analysis, it's often valuable to generate five-number summaries for each variable to identify potential outliers or skewness that might influence the relationship. This preliminary step can guide decisions about data transformations or the selection of appropriate correlation measures.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      
      {/* CTA Section */}
      <CTASection 
        title="Explore More Statistical Calculators"
        description="Discover our suite of mathematical and statistical tools designed to help you analyze data more effectively."
        buttonText="Browse All Calculators"
        buttonLink="/calculators"
      />
    </CalculatorLayout>
  );
};

export default FiveNumberSummaryCalculator;
