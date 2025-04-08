
import React from 'react';
import FAQSection from '@/components/FAQSection';

const CashBackFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What exactly is cash back on a credit card?",
      answer: "Cash back is a rewards program where credit card issuers return a percentage of your spending as a rebate. Essentially, you're getting paid to use your credit card. The cash back percentage typically ranges from 1% to 5%, depending on the card and purchase category. This reward can be received as a statement credit, direct deposit to your bank account, check, or sometimes gift cards or merchandise, depending on your card's redemption options."
    },
    {
      question: "How is cash back calculated?",
      answer: "Cash back is calculated as a percentage of each purchase you make with your credit card. For example, if your card offers 2% cash back and you spend $100, you'll earn $2 back. The calculation formula is: Purchase Amount × Cash Back Percentage = Cash Back Reward. For cards with tiered rewards (different percentages for different categories), each purchase is calculated according to its category's rate. Our Cash Back Calculator helps you determine your potential earnings across various spending patterns and card options."
    },
    {
      question: "Are cash back rewards taxable?",
      answer: "Generally, cash back rewards are not taxable in the United States because the IRS considers them to be discounts on purchases rather than income. This applies to most cash back, points, and miles earned through normal spending. However, there are exceptions: sign-up bonuses earned without spending requirements (rare), referral bonuses, and rewards earned from business credit cards that were used for tax-deducted business expenses may be considered taxable. It's always advisable to consult with a tax professional for your specific situation."
    },
    {
      question: "How do I choose the best cash back credit card for my spending habits?",
      answer: "To choose the best cash back card, analyze your spending patterns to identify where you spend the most, then match those categories with cards offering the highest rewards in those areas. Consider whether you prefer simplicity (flat-rate cards) or are willing to track categories for higher returns. Evaluate if premium cards with annual fees justify their cost based on your spending volume and the extra benefits they offer. Our Cash Back Calculator can help with this analysis by comparing potential earnings against fees. Also consider redemption options, foreign transaction fees if you travel internationally, and any spending caps that might limit your rewards."
    },
    {
      question: "What's the difference between statement credits and direct deposits for cash back?",
      answer: "Statement credits reduce your credit card balance by the amount of cash back you redeem. For example, if you have a $500 balance and redeem $50 in cash back as a statement credit, your new balance will be $450. Direct deposits, on the other hand, transfer your cash back rewards directly to your checking or savings account. The key differences are: 1) Direct deposits give you actual cash you can spend anywhere, whereas statement credits only reduce your card balance; 2) Statement credits don't count as payments, so you still need to make at least your minimum payment; 3) Direct deposits often require linking a bank account and may have minimum redemption amounts."
    },
    {
      question: "Do cash back rewards expire?",
      answer: "The expiration policy for cash back rewards varies by credit card issuer. Many major cash back cards from issuers like Chase, Capital One, and Discover offer rewards that don't expire as long as your account remains open and in good standing. However, some cards do impose expiration dates, typically ranging from 3-5 years after earning the rewards. Rewards can also be forfeited if your account becomes delinquent, is closed (either by you or the issuer), or if you violate the card's terms and conditions. It's important to review your specific card's rewards policy and set reminders to redeem rewards if they have expiration dates."
    },
    {
      question: "Is it worth paying an annual fee for a cash back card?",
      answer: "Whether an annual fee is worth paying depends on your spending volume and patterns. To determine if a fee is justified, calculate the break-even point: Annual Fee ÷ (Reward Rate Difference) = Break-Even Spending. For example, if a no-fee card offers 1.5% cash back and a $95 annual fee card offers 2%, the difference is 0.5%. The break-even calculation would be: $95 ÷ 0.005 = $19,000 annual spending. If you'll spend more than this amount, the annual fee card provides better value. Also consider additional benefits like travel insurance, extended warranties, or statement credits that might offset the fee. Our Cash Back Calculator can help you perform this analysis with your specific numbers."
    },
    {
      question: "How can I maximize my cash back rewards?",
      answer: "To maximize cash back rewards: 1) Use multiple cards strategically (e.g., one for groceries, another for travel); 2) Time large purchases to coincide with bonus category promotions; 3) Add authorized users to consolidate household spending; 4) Pay bills and recurring services with your cash back card where feasible; 5) Link your card to shopping portals for additional cash back; 6) Set calendar reminders to activate quarterly bonus categories; 7) Consider paying rent, mortgage, or other large expenses with your card if the processing fee is less than the cash back earned; 8) Always pay your balance in full to avoid interest charges that would negate your rewards. Using our Cash Back Calculator regularly can help you optimize your strategy as your spending patterns change."
    },
    {
      question: "Will applying for cash back cards hurt my credit score?",
      answer: "Applying for new credit cards temporarily impacts your credit score in several ways: 1) Hard inquiries: Each application typically causes a 5-10 point drop in your score, though this impact diminishes after a few months and disappears entirely after two years; 2) New accounts lower your average account age, which can slightly reduce your score; 3) However, additional available credit can improve your credit utilization ratio (total debt divided by total credit limit), which may positively affect your score over time. To minimize negative impacts: space out applications (at least 3-6 months apart), don't apply before important loan applications like mortgages, and focus on cards you're likely to be approved for based on your credit profile."
    },
    {
      question: "What's the difference between cash back, points, and miles?",
      answer: "The main differences are in redemption flexibility and potential value: Cash back offers the most straightforward rewards, typically worth exactly their stated value (e.g., $50 cash back equals $50); Points systems vary by issuer - bank points usually offer multiple redemption options including cash back, travel, gift cards, and merchandise, with values that can vary depending on how you redeem; Miles are generally designed for travel redemptions and can offer outsized value when used for flights, especially premium cabins. Cash back is ideal if you value simplicity and guaranteed value. Points offer more flexibility but require more management. Miles typically provide the best value for frequent travelers willing to learn redemption strategies. Our Cash Back Calculator helps quantify the cash back option, but you might need to research point/mile valuations for proper comparison with other reward types."
    },
    {
      question: "Can I earn cash back on all purchases?",
      answer: "While cash back cards typically offer rewards on most purchases, certain transactions are commonly excluded from earning rewards: Balance transfers and cash advances never earn cash back and often incur high fees and interest; Money orders, wire transfers, and cryptocurrency purchases are usually excluded; Peer-to-peer payments may not qualify depending on how they're coded; Tax payments typically don't earn rewards, or the processing fees exceed the cash back value; Some cards exclude certain merchants or categories like insurance premium payments. Additionally, some cards have spending caps on high-reward categories (e.g., 6% on groceries up to $6,000 annually). Always check your specific card's terms and conditions for exclusions, and remember that merchant category codes (which determine reward categories) are assigned by payment networks, not by the banks issuing the cards."
    }
  ];

  return <FAQSection title="Cash Back Calculator: Frequently Asked Questions" faqs={faqs} />;
};

export default CashBackFAQ;
