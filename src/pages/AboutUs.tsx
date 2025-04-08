
import PageLayout from '../components/PageLayout';
import FAQSection from '../components/FAQSection';

const AboutUs = () => {
  // FAQ data
  const faqs = [
    {
      question: 'Who created Lcalculator.com?',
      answer: 'Lcalculator.com was created in 2025 by a single marketer with the help of the Lovable.Dev AI engineering tool. This innovative approach allowed for the rapid development of a comprehensive calculator platform without requiring a traditional development team.'
    },
    {
      question: 'How accurate are the calculators on this website?',
      answer: 'While we strive for accuracy, our calculators are built with AI assistance and should be used as helpful estimation tools rather than the sole source of truth. We recommend cross-checking important calculations and consulting with professionals for critical decisions.'
    },
    {
      question: 'When was Lcalculator.com launched?',
      answer: 'Lcalculator.com was launched in 2025 with a collection of AI-assisted calculators. We continue to expand our offerings based on user feedback and requests.'
    },
    {
      question: 'How do you decide which calculators to add to the site?',
      answer: "We add calculators based primarily on user requests and areas where calculations would save significant time. As a small operation powered by AI, we're able to respond quickly to emerging calculation needs."
    },
    {
      question: 'How can I report errors or suggest improvements?',
      answer: 'We welcome your feedback! If you notice any calculation errors or have suggestions for improving our tools, please reach out through our contact form. Your input helps us refine and enhance our AI-powered calculators.'
    }
  ];

  return (
    <PageLayout
      title="About Us"
      description="Learn more about Lcalculator.com, built in 2025 using AI technology to provide helpful calculation tools."
      breadcrumbItems={[{ label: 'About Us' }]}
      contentClassName="prose"
    >
      {/* Origin Story Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Story</h2>
          <p className="text-lg mb-6">
            Lcalculator.com began in 2025 as a solo project by a marketer who recognized the need for accessible, easy-to-use calculators across various fields. Unlike traditional calculator websites built by large development teams, Lcalculator.com was created with the assistance of Lovable.Dev, an AI engineering tool that transformed ideas into functional calculators.
          </p>
          <p className="text-lg mb-6">
            This unique approach allowed for the rapid development of a diverse collection of calculators without the need for extensive coding knowledge or a team of developers. What might have taken months or years with traditional development was accomplished in a fraction of the time through the power of AI.
          </p>
          <p className="text-lg">
            Today, Lcalculator.com offers a growing library of calculation tools spanning mathematics, finance, health, relationships, and more—all created through the collaborative effort of human creativity and artificial intelligence.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Mission</h2>
          <p className="text-lg mb-6">
            At Lcalculator.com, our mission is to democratize access to useful calculation tools. We believe that helpful calculators should be available to everyone, regardless of technical expertise or financial resources.
          </p>
          <p className="text-lg mb-6">
            By leveraging AI technology, we're able to create calculators that address real-world needs—from everyday math to specialized calculations—and make them available for free in an easy-to-use format.
          </p>
          <p className="text-lg">
            Our commitment to accessibility drives us to continually refine our calculators and add new ones based on user feedback, ensuring that Lcalculator.com remains a valuable resource for anyone in need of calculation assistance.
          </p>
        </div>
      </section>
      
      {/* AI-Powered Approach Section */}
      <section className="content-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our AI-Powered Approach</h2>
          <p className="text-lg mb-6">
            Lcalculator.com represents a new model of web development—one where artificial intelligence plays a central role in creation and implementation. Each calculator on our site is built with the assistance of AI, specifically using the Lovable.Dev AI engineering tool.
          </p>
          <p className="text-lg mb-6">
            This approach offers several advantages:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li className="text-lg">
              <strong>Rapid Development:</strong> We can create and deploy new calculators quickly in response to emerging needs
            </li>
            <li className="text-lg">
              <strong>Broad Coverage:</strong> We're able to offer calculators across diverse fields without requiring specialized expertise in each domain
            </li>
            <li className="text-lg">
              <strong>Continuous Improvement:</strong> We can rapidly iterate and refine our tools based on user feedback
            </li>
          </ul>
          
          <p className="text-lg mb-6">
            While AI enables us to create a wide range of calculators efficiently, we want to be transparent about the limitations. Our calculators should be used as helpful tools for estimation and guidance rather than as the definitive source for critical calculations. We recommend cross-checking important results and consulting with professionals when decisions of significance are involved.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="text-lg font-medium">Important Disclaimer</p>
            <p className="text-base">
              The calculators on Lcalculator.com are built with AI assistance and, while designed to be accurate, may contain errors. They should not be considered the sole source of truth for important calculations. Always verify critical results through multiple sources and consult with qualified professionals when necessary.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="content-section bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Values</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Accessibility</h3>
              <p className="text-lg">
                We believe calculation tools should be accessible to everyone, regardless of technical background or financial means. Our calculators are designed to be intuitive and free to use, with responsive designs that work across all devices.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Transparency</h3>
              <p className="text-lg">
                We're open about our AI-assisted approach to calculator development and the potential limitations that come with it. We believe in being honest about what our tools can and cannot do.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">User Privacy</h3>
              <p className="text-lg">
                We respect your privacy. Our calculators process calculations in your browser, not on our servers, meaning your input data remains private. We don't require personal information to use our tools.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Continuous Improvement</h3>
              <p className="text-lg">
                We're committed to refining our calculators based on user feedback and emerging best practices. While AI helps us build quickly, human oversight and user feedback help us improve continuously.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Lcalculator.com" 
        faqs={faqs} 
      />
    </PageLayout>
  );
};

export default AboutUs;
