import PageLayout from '../components/PageLayout';
import Head from 'next/head';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Lcalculator.com</title>
        <meta name="description" content="Please read these terms carefully before using our website." />
        <link rel="canonical" href="https://lcalculator.com/terms-of-service" />
      </Head>
      <PageLayout>
        <div className="content-section prose">
          <div className="max-w-4xl mx-auto">
            <h1>Terms of Service</h1>
            <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>Introduction</h2>
            <p>
              Welcome to Lcalculator.com. These Terms of Service ("Terms") govern your use of our website located at https://lcalculator.com (the "Service") operated by Lcalculator.com ("we", "us", or "our").
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.
            </p>
            
            <h2>Use of the Service</h2>
            <p>
              Lcalculator.com provides free online calculators for a variety of purposes. By using our Service, you agree to:
            </p>
            <ul>
              <li>Use the Service only for lawful purposes and in accordance with these Terms.</li>
              <li>Not use the Service in any way that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Service.</li>
              <li>Not attempt to gain unauthorized access to any parts of the Service, or any systems or networks connected to the Service.</li>
              <li>Not use any robot, spider, or other automatic device, process, or means to access the Service for any purpose, including monitoring or copying any of the material on the Service.</li>
              <li>Not introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Lcalculator.com and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Lcalculator.com.
            </p>
            
            <h2>Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
            </p>
            <p>
              Lcalculator.com does not warrant that:
            </p>
            <ul>
              <li>The Service will function uninterrupted, secure, or available at any particular time or location.</li>
              <li>Any errors or defects will be corrected.</li>
              <li>The Service is free of viruses or other harmful components.</li>
              <li>The results of using the Service will meet your requirements.</li>
            </ul>
            <p>
              While we strive for accuracy in our calculators, we make no guarantees about the results provided. You should verify all calculator results for critical applications.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Lcalculator.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service.</li>
              <li>Any conduct or content of any third party on the Service.</li>
              <li>Any content obtained from the Service.</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.</li>
            </ul>
            
            <h2>Links to Other Websites</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or controlled by Lcalculator.com.
            </p>
            <p>
              Lcalculator.com has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
            </p>
            <p>
              You acknowledge and agree that Lcalculator.com shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2>Changes to Terms of Service</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: upretification@gmail.com</li>
              <li>By visiting our contact page: <a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default TermsOfService;
