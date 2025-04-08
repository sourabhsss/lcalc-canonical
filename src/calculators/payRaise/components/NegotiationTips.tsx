
import React from 'react';
import { DollarSign } from 'lucide-react';

const NegotiationTips: React.FC = () => {
  return (
    <div className="mt-10 space-y-6">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        <DollarSign className="h-5 w-5 text-primary" />
        Negotiating a Pay Raise
      </h3>
      
      <div className="space-y-4">
        <p>
          Negotiating a pay raise can be intimidating, but with proper preparation and a strategic approach, you can increase your chances of success. This guide provides practical tips and strategies for effective salary negotiations.
        </p>
        
        <h4 className="text-xl font-medium mt-6">When to Ask for a Raise</h4>
        <p>
          Timing can significantly impact the success of your raise request. Consider these favorable moments:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Good Timing</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>After completing a successful project</li>
              <li>During your annual performance review</li>
              <li>When you've taken on additional responsibilities</li>
              <li>When the company is performing well financially</li>
              <li>Three to six months after starting a new position</li>
              <li>When you receive recognition for your work</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Poor Timing</h5>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>During company layoffs or financial difficulties</li>
              <li>Immediately after making a major mistake</li>
              <li>When your manager is dealing with a crisis</li>
              <li>During particularly busy periods</li>
              <li>When you've been in your role less than six months</li>
              <li>Shortly after receiving other benefits or perks</li>
            </ul>
          </div>
        </div>
        
        <h4 className="text-xl font-medium mt-6">Research and Preparation</h4>
        <p>
          The key to successful negotiation is thorough preparation. Gather these essential pieces of information before initiating the conversation:
        </p>
        
        <div className="mt-4 space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h5 className="font-medium mb-2">1. Know Your Market Value</h5>
            <p className="text-sm">
              Research salary ranges for your position, industry, and location using resources like Glassdoor, Payscale, Salary.com, or industry-specific surveys. Consider years of experience, education, and special skills or certifications that might increase your market value.
            </p>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg">
            <h5 className="font-medium mb-2">2. Document Your Achievements</h5>
            <p className="text-sm">
              Compile specific examples of your contributions, exceeded goals, added responsibilities, and positive feedback. Whenever possible, quantify your achievements with metrics like revenue generated, costs saved, or efficiency improved.
            </p>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg">
            <h5 className="font-medium mb-2">3. Understand Your Company's Situation</h5>
            <p className="text-sm">
              Assess your company's financial health, recent successes or challenges, and typical raise practices. This context helps you frame your request realistically and demonstrate awareness of the bigger picture.
            </p>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-lg">
            <h5 className="font-medium mb-2">4. Determine Your Target and Minimum</h5>
            <p className="text-sm">
              Based on your research, identify your ideal raise amount and the minimum you're willing to accept. Prepare to ask for slightly more than your target to leave room for negotiation.
            </p>
          </div>
        </div>
        
        <h4 className="text-xl font-medium mt-6">The Negotiation Conversation</h4>
        <p>
          Follow these steps to structure your salary negotiation meeting effectively:
        </p>
        
        <ol className="list-decimal pl-6 space-y-4 mt-4">
          <li>
            <strong>Schedule a dedicated meeting</strong> - Request a private conversation specifically about your compensation, rather than bringing it up spontaneously.
          </li>
          <li>
            <strong>Express appreciation</strong> - Begin by expressing gratitude for the opportunity to discuss your compensation and briefly mention your commitment to the company.
          </li>
          <li>
            <strong>Present your case</strong> - Clearly outline your accomplishments, added responsibilities, and increased value to the organization since your last compensation adjustment.
          </li>
          <li>
            <strong>Make your request</strong> - State your desired salary increase confidently and specifically, based on your research and contributions.
          </li>
          <li>
            <strong>Be prepared to discuss</strong> - Listen to your manager's response and be ready to address concerns or questions with specific examples from your preparation.
          </li>
          <li>
            <strong>Consider alternatives</strong> - If a direct salary increase isn't possible, be prepared to discuss other forms of compensation such as bonuses, additional time off, flexible working arrangements, or a timeline for future increases.
          </li>
          <li>
            <strong>End positively</strong> - Regardless of the outcome, thank your manager for their time and consideration, and establish next steps if appropriate.
          </li>
        </ol>
        
        <h4 className="text-xl font-medium mt-6">What to Do If Your Request Is Denied</h4>
        <p>
          If your raise request isn't approved, don't view it as a permanent rejection. Instead:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Ask for specific feedback about what would warrant a raise in the future</li>
          <li>Request a follow-up meeting in 3-6 months to reassess</li>
          <li>Inquire about other forms of compensation or benefits</li>
          <li>Develop a clear performance improvement plan with measurable goals</li>
          <li>Consider whether your growth prospects at the company align with your career aspirations</li>
        </ul>
        
        <div className="bg-primary/10 rounded-lg p-5 mt-6">
          <h4 className="font-medium mb-2">Pro Tip: Practice Makes Perfect</h4>
          <p className="text-sm">
            Rehearse your negotiation conversation with a trusted friend or mentor. Practice maintaining a confident, collaborative tone and anticipating potential objections. This preparation will help you communicate more effectively and manage nervousness during the actual discussion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NegotiationTips;
