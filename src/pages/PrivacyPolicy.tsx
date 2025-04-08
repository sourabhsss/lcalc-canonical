import React from 'react';
import PageLayout from '../components/PageLayout';
import { Shield, Lock, Eye, FileText, UserCheck, Server } from 'lucide-react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Lcalculator.com</title>
        <meta name="description" content="Learn about how we protect your privacy and handle your data." />
        <link rel="canonical" href="https://lcalculator.com/privacy-policy" />
      </Head>
      <PageLayout>
        <div className="content-section prose">
          <div className="max-w-4xl mx-auto">
            <h1>Privacy Policy</h1>
            <p className="text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2>Introduction</h2>
            <p>
              At Lcalculator.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
            </p>
            
            <h2>Data Collection</h2>
            <p>
              We collect minimal personal information to provide and improve our services. This may include:
            </p>
            <ul>
              <li>Information you provide when contacting us</li>
              <li>Usage data to improve our calculators</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h2>Data Usage</h2>
            <p>
              We use your information to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve user experience</li>
              <li>Respond to your inquiries</li>
              <li>Send important updates about our services</li>
            </ul>
            
            <h2>Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
