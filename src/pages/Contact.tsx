
import PageLayout from '../components/PageLayout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <PageLayout
      title="Contact Us"
      description="Have questions, feedback, or suggestions? We'd love to hear from you!"
      breadcrumbItems={[{ label: 'Contact' }]}
      contentClassName="prose"
      canonicalUrl="https://lcalculator.com/contact"
    >
      <div className="content-section">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              We value your feedback and are here to help with any questions or concerns you may have. 
              Fill out the form below, and we'll get back to you as soon as possible.
            </p>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h3 className="font-medium mb-2">When to Contact Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• If you have questions about our calculators</li>
                <li>• To report bugs or issues with our website</li>
                <li>• To suggest new calculator ideas</li>
                <li>• For partnership or business inquiries</li>
                <li>• For feedback on how we can improve</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <div className="bg-background border border-border rounded-lg p-6">
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">How quickly will I receive a response?</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 24-48 hours during business days. For more complex 
                  issues or suggestions, it may take a bit longer as we thoroughly evaluate each message.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Can I request a new calculator?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We welcome suggestions for new calculators. Please provide as much detail as possible 
                  about the calculator you'd like to see, including what it would calculate and why it would be useful.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">I found a bug in one of your calculators. How do I report it?</h3>
                <p className="text-muted-foreground">
                  If you encounter any bugs or issues with our calculators, please use the contact form to let us know. 
                  Include details such as which calculator you were using, what data you entered, and the nature of the 
                  bug. Screenshots are also very helpful when reporting issues.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Do you offer custom calculator development?</h3>
                <p className="text-muted-foreground">
                  While our primary focus is on providing free calculators for general use, we may be open to discussing 
                  custom calculator development for specific needs. Contact us with details about your requirements, and 
                  we'll let you know if it's something we can assist with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
