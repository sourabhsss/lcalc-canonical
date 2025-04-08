import React from 'react';
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';
import StockAverage from '../calculators/StockAverage';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { Card } from '@/components/ui/card';
import { Calculator, TrendingUp, BarChart2, ChevronRight } from 'lucide-react';

const StockAverageCalculator = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What is a stock average calculator?',
      answer: 'A stock average calculator is a tool that helps investors determine the weighted average cost per share of their stock purchases over time. When you buy shares of the same company at different prices and quantities, this calculator uses the weighted average method to determine your overall cost basis. This is crucial for understanding your investment position, calculating potential profits or losses, making informed buy/sell decisions, and properly reporting taxes.'
    },
    {
      question: 'How is the average stock price calculated?',
      answer: 'The average stock price is calculated using a weighted average method, which accounts for both the price and quantity of each purchase. For each stock purchase, multiply the number of shares by the price per share to get the total cost. Add up all these total costs and divide by the total number of shares purchased. This gives you the weighted average cost per share. The formula is: Average Cost = (Sum of (Shares × Price per Share)) ÷ Total Number of Shares.'
    },
    {
      question: 'What is dollar-cost averaging (DCA) and how does it relate to my average stock price?',
      answer: 'Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money at regular intervals, regardless of the share price. This approach helps reduce the impact of market volatility on your average cost. By tracking your average cost with our calculator, you can see how effective your DCA strategy is. When prices are low, your fixed amount buys more shares; when prices are high, it buys fewer shares. Over time, this typically results in a lower average cost than trying to time the market.'
    },
    {
      question: 'How do stock splits affect my average cost calculation?',
      answer: 'Stock splits change both the number of shares you own and their price, but not your total investment value. If a 2-for-1 split occurs, you\'ll have twice as many shares at half the price. When calculating your average cost after a split, you should adjust all pre-split purchases accordingly. For example, if you originally bought 100 shares at $50 and a 2-for-1 split occurred, you would calculate as if you bought 200 shares at $25. Our calculator doesn\'t automatically account for splits, so you\'ll need to manually adjust your inputs for accurate results.'
    },
    {
      question: 'Why is the average cost different from the simple average of all my purchase prices?',
      answer: 'The average cost differs from a simple average because it\'s weighted by the number of shares in each purchase. For example, if you buy 10 shares at $50 and 30 shares at $100, the simple average is $75 per share ((50+100)/2). However, the weighted average is $87.50 per share ((10×$50 + 30×$100)/40). The weighted average gives more influence to larger purchases, providing a more accurate representation of your actual investment cost per share.'
    },
    {
      question: 'How does the average cost method compare to FIFO or LIFO for tax purposes?',
      answer: 'For tax purposes in the United States, investors typically use one of three cost basis methods: FIFO (First-In, First-Out), LIFO (Last-In, First-Out), or the Specific Identification method. The Average Cost method is also available specifically for mutual funds. While our calculator provides your weighted average cost, for tax reporting you\'ll need to specify which actual shares you\'re selling. Different methods can result in different taxable gains or losses. It\'s advisable to consult with a tax professional to determine which method is most advantageous for your specific situation.'
    },
    {
      question: 'How do dividend reinvestments affect my average cost?',
      answer: 'When you reinvest dividends to purchase additional shares, those purchases should be included in your average cost calculation. Enter each dividend reinvestment as a separate purchase with the appropriate number of shares and price. Dividend reinvestments can significantly impact your average cost over time, especially for dividend-paying stocks held long-term. For tax purposes, dividend reinvestments are considered new purchases with their own cost basis, even though you didn\'t directly invest additional cash.'
    },
    {
      question: 'Can I use this calculator for ETFs, mutual funds, and cryptocurrencies?',
      answer: 'Yes, this calculator works for any investment where you make multiple purchases of the same asset over time. You can use it for stocks, ETFs, mutual funds, cryptocurrencies, or other securities. The weighted average method applies the same way regardless of the investment type. Just enter the quantity purchased and the price per unit for each transaction. For mutual funds specifically, average cost is one of the IRS-approved methods for calculating cost basis.'
    },
    {
      question: 'How does averaging down work, and is it a good strategy?',
      answer: 'Averaging down refers to buying more shares of a stock after its price has fallen, thereby reducing your average cost per share. While this can be a strategic way to build a position in a company you believe in long-term, it carries risks. The primary risk is catching a "falling knife" – investing more in a company facing fundamental problems. Before averaging down, thoroughly research why the stock price fell and assess if the long-term investment thesis remains intact. Our calculator can help you see the exact impact of averaging down on your overall position.'
    },
    {
      question: 'How can I track my profit/loss with this calculator?',
      answer: 'To track your profit or loss, enter all your purchase details and then input the current market price in the designated field. The calculator will then show your total profit or loss (both in dollar value and percentage) based on the difference between your average cost and the current price. This gives you a quick snapshot of your position\'s performance. For more detailed portfolio tracking, consider using a dedicated investment tracking tool that can account for dividends received, capital gains distributions, and other factors affecting your total return.'
    },
    {
      question: 'What information should I keep for tax purposes?',
      answer: 'For tax purposes, maintain detailed records of all stock transactions, including: purchase dates, number of shares bought, price per share, fees or commissions paid, dividend reinvestments, and sale information when applicable. Also document any corporate actions affecting your holdings (stock splits, mergers, spin-offs). While our calculator provides a helpful overview of your average cost, the IRS may require specific identification of which shares were sold. Keep your trade confirmations and account statements in a secure place as documentation for your tax returns.'
    }
  ];

  return (
    <CalculatorLayout
      title="Stock Average Calculator"
      description="Calculate your weighted average stock price across multiple purchases to make better investment decisions and track your position's performance."
      category="Finance"
      metaDescription="Free online Stock Average Calculator - Calculate your weighted average cost per share across multiple stock purchases, track profit/loss, and make informed investment decisions."
    >
      {/* Calculator Section */}
      <section className="py-8">
        <StockAverage />
      </section>
      
      {/* Information Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Understanding Stock Price Averaging</h2>
          <p className="text-lg mb-6">
            Stock price averaging, also known as calculating your cost basis, is a fundamental concept in investment management that helps investors track their true position in a security across multiple purchases at different price points. Unlike a simple average that gives equal weight to each purchase price, the weighted average cost per share accounts for both the price and the quantity of shares in each transaction.
          </p>
          <p className="text-lg mb-6">
            According to a 2023 Federal Reserve survey, approximately 58% of American households own stocks either directly or through retirement accounts, yet many investors struggle to accurately track their cost basis. A proper understanding of your average cost is essential for making informed investment decisions, calculating potential gains or losses, and accurately reporting taxes.
          </p>
          <p className="text-lg">
            For example, if you purchase 50 shares of a company at $40 per share and later buy an additional 150 shares at $60 per share, your weighted average cost isn't simply $50 (the average of $40 and $60). Instead, it's $55 per share because you bought three times as many shares at the higher price. This weighted average provides a more accurate representation of your actual investment position.
          </p>
        </div>
      </section>
      
      {/* Strategy Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Investment Strategies Using Average Cost</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Dollar-Cost Averaging (DCA)</h3>
              <p className="text-lg text-muted-foreground">
                Dollar-cost averaging is a systematic investment approach where you invest a fixed amount of money at regular intervals, regardless of the share price. According to a Vanguard study, this strategy has historically outperformed lump-sum investing about one-third of the time, particularly during bear markets or highly volatile periods.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                When you dollar-cost average, you automatically buy more shares when prices are low and fewer shares when prices are high. This naturally lowers your average cost over time and helps reduce the impact of market volatility on your investment performance. For example, investing $1,000 monthly in an S&P 500 index fund during the 2008-2009 financial crisis would have resulted in a substantially lower average cost compared to a lump-sum investment before the downturn.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Our Stock Average Calculator allows you to track how your DCA strategy affects your average cost over time, providing valuable insights into the effectiveness of your approach.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Averaging Down</h3>
              <p className="text-lg text-muted-foreground">
                Averaging down involves buying additional shares of a stock after its price has decreased, thereby reducing your average cost per share. While this strategy can be effective for building positions in fundamentally sound companies, it requires careful consideration and research.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                A study by Morningstar found that investors who averaged down on high-quality companies during the 2020 COVID-19 market crash saw an average return of 70% over the following year, significantly outperforming those who sold their positions. However, averaging down on companies with deteriorating fundamentals led to further losses in many cases.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Before averaging down, assess whether the stock price decline is due to temporary market conditions or fundamental issues with the company. Look at key financial metrics, competitive positioning, and industry trends. Our calculator helps you precisely determine how additional purchases at lower prices will affect your overall position.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Tax-Loss Harvesting</h3>
              <p className="text-lg text-muted-foreground">
                Understanding your average cost is crucial for effective tax-loss harvesting, a strategy that involves selling investments at a loss to offset capital gains elsewhere in your portfolio. According to a Betterment study, proper tax-loss harvesting can add up to 0.77% in annual after-tax returns.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                When considering tax-loss harvesting, compare your current market value to your average cost to determine potential tax benefits. Keep in mind that different cost basis methods (FIFO, LIFO, specific identification) may result in different realized gains or losses. While our calculator uses the average cost method, you may want to consult with a tax professional to determine the most advantageous approach for your specific situation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Breakeven Analysis</h3>
              <p className="text-lg text-muted-foreground">
                Knowing your average cost allows you to calculate exactly what price the stock needs to reach for you to break even on your investment. This can be crucial for setting realistic exit strategies or determining whether to hold or sell during market fluctuations.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                According to a 2022 J.P. Morgan Asset Management study, the average retail investor tends to sell winning positions too early and hold losing positions too long, a behavioral bias known as the disposition effect. By clearly understanding your breakeven point and setting objective price targets, you can make more rational investment decisions based on data rather than emotions.
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Our calculator not only shows your average cost but also calculates your current profit or loss when you enter the current market price, giving you immediate insight into your position's performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced Concepts Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Advanced Concepts in Cost Basis Calculation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Corporate Actions</h3>
              <p className="text-muted-foreground">
                Corporate actions like stock splits, mergers, and spin-offs can significantly impact your cost basis calculation. For example, in a 2-for-1 stock split, you'll own twice as many shares at half the price, but your total investment value and cost basis remain the same.
              </p>
              <p className="text-muted-foreground mt-2">
                To adjust for a stock split in our calculator, recalculate your pre-split purchases as if you had bought more shares at a lower price. For example, if you originally purchased 100 shares at $50 before a 2-for-1 split, enter it as 200 shares at $25.
              </p>
              <p className="text-muted-foreground mt-2">
                For more complex corporate actions like spin-offs or mergers, consult your brokerage statements or a tax professional to determine the appropriate cost basis allocation.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Dividend Reinvestment Plans (DRIPs)</h3>
              <p className="text-muted-foreground">
                Dividend reinvestment plans automatically use dividend payments to purchase additional shares. According to Hartford Funds research, reinvested dividends accounted for approximately 84% of the S&P 500's total return from 1960 to 2023, highlighting their significant impact on long-term performance.
              </p>
              <p className="text-muted-foreground mt-2">
                When dividends are reinvested, each reinvestment should be treated as a new purchase in your average cost calculation. Enter the number of shares acquired and the price per share for each dividend reinvestment event. Over time, these regular small purchases can significantly affect your average cost.
              </p>
              <p className="text-muted-foreground mt-2">
                For accurate record-keeping, maintain a log of all dividend reinvestment transactions, including dates, share prices, and the number of shares acquired.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Cost Basis Methods for Taxes</h3>
              <p className="text-muted-foreground">
                For tax purposes, the IRS recognizes several methods for determining which shares you're selling and calculating your cost basis:
              </p>
              <ul className="list-disc pl-5 mt-2 text-muted-foreground space-y-1">
                <li><strong>FIFO (First-In, First-Out):</strong> Assumes the first shares you bought are the first ones you sell</li>
                <li><strong>LIFO (Last-In, First-Out):</strong> Assumes the most recently purchased shares are sold first</li>
                <li><strong>Specific Identification:</strong> Allows you to choose which specific shares you're selling</li>
                <li><strong>Average Cost:</strong> Uses the average cost of all shares (only available for mutual funds)</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                While our calculator uses the average cost method, your brokerage might default to FIFO for tax reporting. According to tax experts, specific identification often provides the most tax flexibility, allowing you to minimize gains or harvest losses as needed.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Wash Sale Rule</h3>
              <p className="text-muted-foreground">
                The wash sale rule prevents investors from claiming a tax loss if they repurchase the same or a substantially identical security within 30 days before or after selling at a loss. This IRS regulation significantly impacts cost basis calculations for active traders.
              </p>
              <p className="text-muted-foreground mt-2">
                When a wash sale occurs, the disallowed loss is added to the cost basis of the replacement shares, effectively increasing your average cost. For example, if you sell 100 shares at a $500 loss and repurchase within 30 days, that $500 loss gets added to the cost basis of your new shares.
              </p>
              <p className="text-muted-foreground mt-2">
                While our calculator doesn't automatically detect wash sales, you can manually adjust your inputs to reflect the adjusted cost basis for accurate tracking.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Practical Tips Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Practical Tips for Using the Stock Average Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Record All Transactions</h3>
              <p className="text-muted-foreground">
                For accurate average cost calculations, include all your purchases of a particular stock, including initial buys, additional investments, and dividend reinvestments. According to a Charles Schwab survey, investors who maintain detailed records of their transactions make more informed decisions and typically achieve better long-term results.
              </p>
              <p className="text-muted-foreground mt-2">
                Consider using our calculator alongside a transaction log where you record dates, share quantities, prices, and any relevant notes. This comprehensive approach ensures you have all the information needed for both investment decisions and tax reporting.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Account for Fees and Commissions</h3>
              <p className="text-muted-foreground">
                While many brokerages now offer commission-free trading, other fees might still apply and should be factored into your cost basis. Research shows that even small fees can significantly impact returns over time due to the compounding effect.
              </p>
              <p className="text-muted-foreground mt-2">
                To include fees in your average cost calculation, add them to the purchase price before entering the data. For example, if you buy 100 shares at $50 per share with a $10 commission, your actual cost per share is $50.10 (($50 × 100 + $10) ÷ 100).
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Regularly Update Your Calculations</h3>
              <p className="text-muted-foreground">
                Investment positions evolve over time with new purchases, dividend reinvestments, and corporate actions. According to a Fidelity study, investors who regularly review and update their portfolio information tend to make more strategic decisions and better achieve their financial goals.
              </p>
              <p className="text-muted-foreground mt-2">
                Consider setting a regular schedule—perhaps quarterly or after each new purchase—to update your average cost calculations. This practice helps you maintain an accurate picture of your investment positions and makes tax-time calculations much simpler.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Use Multiple Metrics for Evaluation</h3>
              <p className="text-muted-foreground">
                While average cost is an important metric, it shouldn't be the only factor in your investment decisions. Research by DALBAR shows that investors who focus exclusively on cost basis often make suboptimal decisions driven by the "sunk cost fallacy" rather than future prospects.
              </p>
              <p className="text-muted-foreground mt-2">
                Complement your average cost tracking with other analytical tools. Our <Link href="/five-number-summary-calculator" className="text-primary hover:underline">Five Number Summary Calculator</Link> can help analyze the statistical distribution of your investment returns, while fundamental analysis of the underlying company remains essential for evaluating long-term prospects.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Tools Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Related Financial Tools</h2>
          <p className="text-lg mb-6">
            While the Stock Average Calculator helps you track your investment cost basis, it works best as part of a comprehensive approach to investment management. Explore these related calculators to enhance your financial analysis toolkit:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/five-number-summary-calculator" className="group">
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart2 className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Five Number Summary Calculator</h3>
                </div>
                <p className="text-muted-foreground">
                  Analyze your investment returns with statistical metrics like median, quartiles, and identify outliers in your performance data.
                </p>
                <div className="flex items-center mt-4 text-primary text-sm font-medium">
                  Try Calculator <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
            
            <Link href="/mortgage-calculator" className="group">
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Mortgage Calculator</h3>
                </div>
                <p className="text-muted-foreground">
                  Calculate monthly payments, total interest, and amortization schedule for home loans to balance your investment portfolio.
                </p>
                <div className="flex items-center mt-4 text-primary text-sm font-medium">
                  Try Calculator <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
            
            <Link href="/apy-calculator" className="group">
              <Card className="p-6 h-full hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">APY Calculator</h3>
                </div>
                <p className="text-muted-foreground">
                  Compare the annual percentage yield of different investments to maximize returns on your fixed-income portfolio components.
                </p>
                <div className="flex items-center mt-4 text-primary text-sm font-medium">
                  Try Calculator <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection faqs={faqs} />
      
      {/* CTA Section */}
      <CTASection 
        title="Explore More Financial Calculators"
        description="Discover our comprehensive suite of financial tools designed to help you make smarter investment decisions and achieve your financial goals."
        buttonText="Browse All Calculators"
        buttonLink="/calculators"
      />
    </CalculatorLayout>
  );
};

export default StockAverageCalculator;
