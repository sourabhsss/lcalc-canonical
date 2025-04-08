
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, CreditCard, LineChart, PiggyBank, Calculator, ShoppingCart } from 'lucide-react';

const CashBackContent: React.FC = () => {
  return (
    <div className="space-y-8 mb-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding Cash Back Rewards</h2>
        <div className="prose max-w-none">
          <p>
            Cash back rewards are one of the most popular credit card perks, offering cardholders a percentage of their spending back as a reward. This straightforward benefit allows consumers to earn money on purchases they would make anyway, essentially providing a discount on everything from groceries to gas to online shopping.
          </p>
          
          <p>
            According to the Consumer Financial Protection Bureau, Americans hold more than 500 million credit card accounts, with cash back cards making up approximately 60% of all rewards cards issued. A 2023 survey by Bankrate found that 57% of U.S. adults have at least one cash back credit card, making it the most common type of rewards card.
          </p>
          
          <div className="my-6 bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-primary" />
              Did You Know?
            </h3>
            <p className="mt-2">
              The average American household earns approximately $230 in cash back rewards annually, but many miss out on up to $300 in additional rewards by not using the right cards for their spending patterns.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">How Cash Back Rewards Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <ShoppingCart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Make Purchases</h3>
              <p className="text-muted-foreground">
                Use your cash back credit card for everyday purchases. Each transaction earns a percentage back based on your card's reward structure.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Your rewards accumulate in your account. Most cards offer 1-2% on general purchases and up to 5% in bonus categories.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-primary mb-4">
                <PiggyBank className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Redeem Benefits</h3>
              <p className="text-muted-foreground">
                Redeem your rewards as statement credits, direct deposits, gift cards, or merchandise, depending on your card's options.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="prose max-w-none">
          <p>
            Cash back rewards typically range from 1% to 5% of your purchase amount. For example, with a 2% cash back card, a $100 purchase would earn you $2 back. While this might seem small per transaction, it adds up significantly over time. The average American household spends approximately $63,000 annually, which could generate over $1,260 in cash back with a 2% flat-rate card.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Types of Cash Back Structures</h3>
          
          <ol>
            <li>
              <strong>Flat-rate cash back cards:</strong> Offer the same percentage (typically 1.5-2%) on all purchases. These are best for simplicity and general spending.
            </li>
            <li>
              <strong>Tiered cash back cards:</strong> Provide different rates for different spending categories. For example, 3% on dining, 2% on groceries, and 1% on everything else.
            </li>
            <li>
              <strong>Rotating category cards:</strong> Offer higher percentages (often 5%) in categories that change quarterly, with 1% on all other purchases.
            </li>
            <li>
              <strong>Category-specific cards:</strong> Specialize in particular spending types, such as 4% on gas or 6% on groceries, with lower rates on other purchases.
            </li>
          </ol>
          
          <p>
            According to market research, flat-rate cards make up approximately 40% of cash back cards, tiered cards account for 35%, rotating category cards represent 15%, and category-specific cards comprise the remaining 10%.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Maximizing Your Cash Back Rewards</h2>
        <div className="prose max-w-none">
          <p>
            Strategic credit card use can significantly boost your rewards. Consider these data-backed strategies:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Optimal Cash Back Strategies</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-2 text-left">Strategy</th>
                  <th className="border p-2 text-left">Potential Annual Benefit</th>
                  <th className="border p-2 text-left">Implementation Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Card Pairing (using multiple cards strategically)</td>
                  <td className="border p-2">$300-$500 additional cash back</td>
                  <td className="border p-2">Moderate</td>
                </tr>
                <tr>
                  <td className="border p-2">Utilizing Shopping Portals</td>
                  <td className="border p-2">$150-$300 additional cash back</td>
                  <td className="border p-2">Easy</td>
                </tr>
                <tr>
                  <td className="border p-2">Sign-up Bonus Optimization</td>
                  <td className="border p-2">$500-$1,000 one-time value</td>
                  <td className="border p-2">Easy</td>
                </tr>
                <tr>
                  <td className="border p-2">Category Spending Alignment</td>
                  <td className="border p-2">$200-$450 additional cash back</td>
                  <td className="border p-2">Easy</td>
                </tr>
                <tr>
                  <td className="border p-2">Annual Fee Analysis (using our calculator)</td>
                  <td className="border p-2">$100-$300 savings</td>
                  <td className="border p-2">Easy</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            Analysis of consumer spending patterns suggests that the average household could increase their cash back by 47% simply by matching their highest spending categories with the right cards. Our <a href="/cash-back-calculator" className="text-primary hover:underline">Cash Back Calculator</a> helps determine if a card's annual fee is justified by your spending habits and the rewards you'll earn.
          </p>
          
          <div className="my-6 bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-primary" />
              Cash Back Optimization Tip
            </h3>
            <p className="mt-2">
              When considering a card with an annual fee, use this break-even formula: Annual Fee ÷ (Cash Back Rate ÷ 100) = Required Annual Spending. For example, a $95 annual fee card with 2% cash back requires $4,750 in annual spending to break even.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Cash Back vs. Other Reward Types</h2>
        <div className="prose max-w-none">
          <p>
            Cash back is just one type of credit card reward. Understanding how it compares to other options helps you choose the best card for your needs.
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-2 text-left">Reward Type</th>
                  <th className="border p-2 text-left">Typical Value per $100 Spent</th>
                  <th className="border p-2 text-left">Flexibility</th>
                  <th className="border p-2 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Cash Back</td>
                  <td className="border p-2">$1-$5</td>
                  <td className="border p-2">High</td>
                  <td className="border p-2">General spending, simplicity</td>
                </tr>
                <tr>
                  <td className="border p-2">Travel Points</td>
                  <td className="border p-2">$1-$2.5 (up to $5 with transfers)</td>
                  <td className="border p-2">Medium</td>
                  <td className="border p-2">Frequent travelers</td>
                </tr>
                <tr>
                  <td className="border p-2">Airline Miles</td>
                  <td className="border p-2">$1-$3 (can exceed $5 for premium travel)</td>
                  <td className="border p-2">Low</td>
                  <td className="border p-2">Brand-loyal travelers</td>
                </tr>
                <tr>
                  <td className="border p-2">Hotel Points</td>
                  <td className="border p-2">$0.5-$2</td>
                  <td className="border p-2">Low</td>
                  <td className="border p-2">Frequent hotel guests</td>
                </tr>
                <tr>
                  <td className="border p-2">Store Rewards</td>
                  <td className="border p-2">$2-$10 (store credit only)</td>
                  <td className="border p-2">Very Low</td>
                  <td className="border p-2">Store-specific shoppers</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4">
            Market research indicates that 73% of consumers prefer cash back over other reward types due to its simplicity and flexibility. However, for specific usage patterns, other reward types may provide more value. For instance, frequent travelers who can utilize premium redemptions often get more value from travel points or miles.
          </p>
          
          <p>
            Use our <a href="/standard-deviation-calculator" className="text-primary hover:underline">Standard Deviation Calculator</a> to analyze your spending patterns and determine which reward structure might work best for your lifestyle.
          </p>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">The True Cost of Cash Back Cards</h2>
        <div className="prose max-w-none">
          <p>
            While cash back cards offer valuable rewards, it's important to understand their potential costs and how to mitigate them:
          </p>
          
          <h3 className="text-xl font-semibold mt-4 mb-3">Potential Costs to Consider</h3>
          
          <ul>
            <li>
              <strong>Annual fees:</strong> Range from $0 to $550, with most premium cash back cards charging $95-$99. According to industry data, cards with annual fees typically need to offer at least 0.5-1% higher cash back rates than no-fee cards to be worthwhile.
            </li>
            <li>
              <strong>Interest charges:</strong> With the average credit card APR at 24.59% as of 2023, carrying a balance quickly negates cash back benefits. A $1,000 balance with 2% cash back earns $20, but one month of interest at 24.59% costs $20.49.
            </li>
            <li>
              <strong>Foreign transaction fees:</strong> Typically 3% on purchases made abroad, which can eliminate or exceed cash back earnings when traveling internationally.
            </li>
            <li>
              <strong>Balance transfer fees:</strong> Usually 3-5% of the transferred amount, which should be factored in when considering a new card.
            </li>
          </ul>
          
          <p>
            The <a href="/mortgage-calculator" className="text-primary hover:underline">Mortgage Calculator</a> can help you understand how credit card interest compares to other types of loans and why paying off high-interest debt should typically take priority over earning cash back.
          </p>
          
          <div className="my-6 bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h3 className="text-lg font-semibold flex items-center">
              <LineChart className="mr-2 h-5 w-5 text-primary" />
              Cash Back Break-Even Analysis
            </h3>
            <p className="mt-2">
              Financial analysis shows that for the average household spending $63,000 annually:
              <br />- A no-fee 1.5% cash back card earns $945 yearly
              <br />- A $95 annual fee 2% card earns $1,260 minus the fee = $1,165 yearly
              <br />- Net benefit of the annual fee card: $220 per year
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Cash Back and Credit Scores</h2>
        <div className="prose max-w-none">
          <p>
            Maximizing cash back while maintaining a healthy credit score requires understanding how the two interact:
          </p>
          
          <ul>
            <li>
              <strong>Credit utilization:</strong> Accounts for 30% of your FICO score. Keep utilization below 30% across all cards, ideally under 10%. Higher spending to earn more cash back can increase utilization and potentially lower your score.
            </li>
            <li>
              <strong>Payment history:</strong> Represents 35% of your FICO score. Late payments seeking to maximize cash back can severely damage your credit for up to seven years.
            </li>
            <li>
              <strong>Length of credit history:</strong> Makes up 15% of your score. Frequently opening new cards for sign-up bonuses can temporarily lower your average account age.
            </li>
            <li>
              <strong>New credit inquiries:</strong> Constitute 10% of your score. Each application typically causes a small 5-10 point drop that recovers within 3-6 months.
            </li>
          </ul>
          
          <p>
            Data from FICO shows that consumers with scores above 760 have an average of 7 credit cards but utilize only 7% of their available credit. Strategic cash back optimization should work within these parameters to maintain excellent credit.
          </p>
          
          <p>
            Our <a href="/percentage-increase-calculator" className="text-primary hover:underline">Percentage Increase Calculator</a> can help you track improvements in your credit score as you implement responsible cash back strategies.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CashBackContent;
