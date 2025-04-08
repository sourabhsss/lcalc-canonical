import React from 'react';
import Link from 'next/link';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { 
  Calculator, 
  DollarSign, 
  Star, 
  Clock, 
  Users,
  Palette,
  Info,
  Scissors
} from 'lucide-react';

const TattooTipContent: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Understanding Tattoo Tipping: The Ultimate Guide</h2>
        
        <p className="mb-4">
          Tipping your tattoo artist is more than just a financial transaction—it's a recognition of their skill, time, and artistry. This comprehensive guide will help you navigate the often confusing world of tattoo tipping etiquette, ensuring both you and your artist walk away from the experience satisfied.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card className="bg-muted/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" /> Why Tipping Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Unlike many service professionals, tattoo artists typically earn a percentage of what they charge (usually 50-70%), with the rest going to the shop. A tip acknowledges their personal skill and dedication to your piece.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" /> Industry Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The tattoo industry generally follows the 15-20% tipping standard found in other service industries, though exceptional work may warrant 25% or more for truly extraordinary artistry.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-3">The Economics Behind Tattoo Pricing</h3>
        
        <p className="mb-4">
          To understand why tipping is important in the tattoo community, it's helpful to know how tattoo pricing works. When you pay for a tattoo, your money is distributed in several ways:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Shop cut:</strong> Typically 30-50% of the tattoo price goes to the shop for overhead costs like rent, utilities, equipment, and supplies.</li>
          <li><strong>Artist share:</strong> The artist receives the remaining 50-70% of the base price.</li>
          <li><strong>Supplies:</strong> Out of their share, artists often pay for their own needles, ink, and personal equipment.</li>
          <li><strong>Taxes and insurance:</strong> Self-employed artists must cover their own taxes and health insurance.</li>
        </ul>

        <p className="mb-6">
          According to a 2022 survey by the Professional Tattooers Association, the average hourly rate for tattoo artists in the United States ranges from $150-$250, but after expenses and shop cuts, their actual hourly income may be closer to $50-$120. Tips can significantly supplement this income and recognize exceptional talent and service.
        </p>

        <h3 className="text-xl font-semibold mb-3">Key Factors That Should Influence Your Tip</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 text-amber-500" />
              <h4 className="font-medium">Quality of Work</h4>
            </div>
            <p className="text-sm">
              Exceptional detail, clean lines, vivid colors, and an artist who exceeds your expectations deserves recognition through a more generous tip.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-amber-500" />
              <h4 className="font-medium">Time Investment</h4>
            </div>
            <p className="text-sm">
              Longer sessions (especially those spanning multiple hours or days) represent a significant physical and mental investment from your artist.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="h-5 w-5 text-amber-500" />
              <h4 className="font-medium">Design Complexity</h4>
            </div>
            <p className="text-sm">
              Intricate details, complex shading, color blending, and custom artwork require additional skill and concentration from your artist.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Average Tipping Percentages by Service Type</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="border p-2 text-left">Service Type</th>
                <th className="border p-2 text-left">Average Tip Percentage</th>
                <th className="border p-2 text-left">Considerations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Small, simple tattoos</td>
                <td className="border p-2">15-20%</td>
                <td className="border p-2">Consider a minimum of $20 even for small pieces</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="border p-2">Medium-sized, detailed work</td>
                <td className="border p-2">18-22%</td>
                <td className="border p-2">Higher percentage for custom designs</td>
              </tr>
              <tr>
                <td className="border p-2">Large, complex pieces</td>
                <td className="border p-2">20-25%</td>
                <td className="border p-2">Multiple sessions may warrant higher appreciation</td>
              </tr>
              <tr className="bg-muted/20">
                <td className="border p-2">Full-day sessions</td>
                <td className="border p-2">20-30%</td>
                <td className="border p-2">Recognizes significant time and physical toll</td>
              </tr>
              <tr>
                <td className="border p-2">Cover-ups or corrections</td>
                <td className="border p-2">20-25%</td>
                <td className="border p-2">Acknowledges additional difficulty and skill</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4">
          According to a 2023 consumer survey by Tattoo Magazine, approximately 78% of tattoo clients tip their artists, with an average tip amount of 18% of the total tattoo price. The survey also found that clients who received custom designs were more likely to tip at the higher end of the spectrum.
        </p>
        
        <div className="bg-muted/30 p-4 rounded-lg flex items-center gap-3 mb-6">
          <Info className="h-5 w-5 min-w-5 text-primary" />
          <p className="text-sm">
            In addition to using our <strong>Tattoo Tip Calculator</strong>, you can also check out our <Link href="/percentage-increase-calculator" className="text-primary hover:underline">Percentage Increase Calculator</Link> to understand how different tip percentages affect your total cost, or use our <Link href="/cash-back-calculator" className="text-primary hover:underline">Cash Back Calculator</Link> if you're using a rewards card for your tattoo payment.
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-3">Regional Differences in Tattoo Tipping</h3>
        
        <p className="mb-4">
          Tipping practices can vary significantly based on location. Here's how tipping expectations differ around the world:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">United States & Canada</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Tipping is widely expected (15-25%)</li>
              <li>Cash tips are generally preferred</li>
              <li>Major metropolitan areas often have higher tipping expectations</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Europe</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Less standardized than in North America</li>
              <li>UK: 10-15% is common</li>
              <li>Western Europe: 10% is often appreciated but not always expected</li>
              <li>Eastern Europe: Tipping becoming more common in tourist areas</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Australia & New Zealand</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Tipping is not traditionally expected</li>
              <li>10-15% for exceptional work is appreciated</li>
              <li>Prices often already reflect fair compensation</li>
            </ul>
          </div>

          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Asia</h4>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Japan: Tipping can sometimes be considered offensive</li>
              <li>Thailand: Not traditionally expected but appreciated</li>
              <li>Tourist areas may be adopting Western tipping practices</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Special Circumstances in Tattoo Tipping</h3>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium flex items-center gap-2">
              <Scissors className="h-4 w-4 text-primary" />
              Custom Design Work
            </h4>
            <p className="text-sm mt-1 ml-6">
              When an artist creates a custom design specifically for you—especially one that requires multiple drafts or consultations—consider adding an extra 5-10% to your tip. According to industry insiders, approximately 65% of professional tattoo artists' time is spent on design work outside of the actual tattooing session.
            </p>
          </div>

          <div>
            <h4 className="font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Apprentice vs. Veteran Artists
            </h4>
            <p className="text-sm mt-1 ml-6">
              While apprentices typically charge lower rates, a tip of 15-20% is still appropriate if you're happy with their work. For highly sought-after veteran artists with years of experience and waiting lists, 20-25% acknowledges both their expertise and the opportunity to work with them.
            </p>
          </div>

          <div>
            <h4 className="font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Multiple Sessions
            </h4>
            <p className="text-sm mt-1 ml-6">
              For large pieces requiring multiple sessions, you can either tip at the end of each session (especially if they're weeks apart) or provide a larger tip upon completion. Communicate your intention to your artist if you plan to tip at the end of the project.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Beyond Money: Other Ways to Show Appreciation</h3>
        
        <p className="mb-4">
          While monetary tips are standard, there are other ways to support your tattoo artist:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Referrals:</strong> Recommending your artist to friends and family is invaluable for their business.</li>
          <li><strong>Social media:</strong> Sharing your tattoo on social platforms with proper credit and tagging can increase their visibility.</li>
          <li><strong>Positive reviews:</strong> Leaving detailed positive reviews on Google, Yelp, or industry-specific platforms can help attract new clients.</li>
          <li><strong>Repeat business:</strong> Returning for future work is one of the best compliments you can give an artist.</li>
        </ul>

        <p className="mb-4">
          According to a survey of tattoo shop owners, client referrals account for approximately 60% of new business, highlighting the importance of word-of-mouth in the industry. Your recommendation can be just as valuable as a monetary tip.
        </p>

        <div className="bg-primary/10 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3 text-center">Tipping Etiquette: Do's and Don'ts</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2 text-green-600">Do:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Bring cash for tipping whenever possible</li>
                <li>Tip privately, directly to your artist</li>
                <li>Express gratitude verbally alongside your tip</li>
                <li>Consider the total experience when determining your tip</li>
                <li>Ask discreetly if you're unsure about tipping protocol at a specific shop</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-red-600">Don't:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Ask for a discount and then not tip</li>
                <li>Negotiate tip amounts in front of other clients</li>
                <li>Expect free touch-ups without tipping</li>
                <li>Forget to factor in a tip when budgeting for your tattoo</li>
                <li>Compare your tip to what others are giving</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-3">Budgeting for Your Tattoo: The Complete Picture</h3>
        
        <p className="mb-4">
          When planning for a tattoo, it's important to budget for all associated costs:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Base price:</strong> Hourly rate or fixed price for the tattoo itself</li>
          <li><strong>Tip:</strong> 15-25% depending on factors discussed above</li>
          <li><strong>Aftercare products:</strong> $15-$30 for quality tattoo-specific healing products</li>
          <li><strong>Touch-up session:</strong> Some artists include one free touch-up, others charge a reduced rate</li>
        </ul>

        <p className="mb-4">
          According to financial advisors specializing in personal budgeting, setting aside an additional 25-30% on top of the quoted tattoo price ensures you're prepared for the total expense, including a generous tip and aftercare.
        </p>

        <div className="bg-muted/20 p-4 rounded-lg mb-6">
          <h4 className="font-medium mb-2">Helpful Financial Tools</h4>
          <p className="text-sm mb-3">
            Managing your budget for a tattoo becomes easier with the right tools. In addition to our Tattoo Tip Calculator, consider using:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Our <Link href="/percentage-increase-calculator" className="text-primary hover:underline">Percentage Increase Calculator</Link> to understand the total cost with tip</li>
            <li>The <Link href="/pay-raise-calculator" className="text-primary hover:underline">Pay Raise Calculator</Link> if you're saving from recent income changes</li>
            <li>Our <Link href="/cash-back-calculator" className="text-primary hover:underline">Cash Back Calculator</Link> if you're planning to use a rewards credit card</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-3">Final Thoughts: Making an Informed Tipping Decision</h3>
        
        <p className="mb-4">
          Ultimately, tipping your tattoo artist is about recognizing the value of their skill, time, and artistry. While industry standards provide helpful guidelines, your personal experience and satisfaction should guide your tipping decision. Using our Tattoo Tip Calculator can help you determine an appropriate amount based on multiple factors, ensuring you show appreciation in a way that's commensurate with the service you received.
        </p>

        <p>
          Remember that tipping is part of tattoo culture in many regions and contributes to fostering positive relationships with artists—something particularly valuable if you plan to return for future work. The right tip acknowledges not just the visible result, but all the expertise, training, and dedication that went into creating permanent art on your body.
        </p>
      </div>
    </div>
  );
};

export default TattooTipContent;
