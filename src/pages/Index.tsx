import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';

// Home components
import HeroSection from '../components/home/HeroSection';
import TrustedBySection from '../components/home/TrustedBySection';
import PopularCalculators from '../components/home/PopularCalculators';
import FeaturesSection from '../components/home/FeaturesSection';
import CalculatorCategoriesSection from '../components/home/CalculatorCategoriesSection';
import UseCasesSection from '../components/home/UseCasesSection';
import AdditionalContent from '../components/home/AdditionalContent';
import OurOfferings from '../components/home/WhyChooseSection';

const Index = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What is Lcalculator.com?',
      answer: 'Lcalculator.com is a free online platform offering a variety of calculators for different needs. From mathematical and statistical calculators to lifestyle and relationship calculators, we provide easy-to-use tools to help you make calculations quickly and accurately.'
    },
    {
      question: 'Are the calculators on this website free to use?',
      answer: 'Yes, all calculators on Lcalculator.com are completely free to use. We believe in providing valuable tools without any cost barriers. There are no hidden fees or premium features that require payment.'
    },
    {
      question: 'How accurate are the calculators on this website?',
      answer: 'Our calculators are designed to provide accurate results based on standard formulas and algorithms. However, they should be used as tools for estimation and guidance rather than for critical decisions where professional advice would be more appropriate.'
    },
    {
      question: 'Can I use these calculators on my mobile device?',
      answer: 'Absolutely! Our website is fully responsive and designed to work well on desktop computers, tablets, and smartphones. You can access and use our calculators from any device with an internet connection.'
    },
    {
      question: 'Do you store the data I enter into the calculators?',
      answer: 'No, we do not store any of the data you enter into our calculators. All calculations are performed in your browser, and no personal information or calculation data is sent to our servers. Your privacy is important to us.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Add Head with meta tags for the homepage */}
      <Head>
        <title>Lcalculator - Online Calculators for Every Need</title>
        <meta name="description" content="Free online calculators for math, finance, health, and more. Simple, accurate and easy to use." />
        <link rel="canonical" href="https://lcalculator.com" />
        <meta property="og:title" content="Lcalculator - Online Calculators for Every Need" />
        <meta property="og:description" content="Free online calculators for math, finance, health, and more. Simple, accurate and easy to use." />
        <meta property="og:url" content="https://lcalculator.com" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Navbar />
      
      <HeroSection />
      
      <OurOfferings />
      
      <TrustedBySection />
      
      <PopularCalculators />
      
      <FeaturesSection />
      
      <CalculatorCategoriesSection />
      
      <UseCasesSection />
      
      {/* Add the new Additional Content section */}
      <AdditionalContent />
      
      <FAQSection faqs={faqs} />
      
      <CTASection 
        title="Ready to Start Calculating?"
        description="Explore our wide range of free calculators and simplify your calculations today."
        buttonText="Browse All Calculators"
        buttonLink="/calculators"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
