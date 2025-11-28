import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>Effective Date: November 28, 2025</p>
        </div>
      </section>

      <section className="content-section">
        <div className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to The Beauty of the World. We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </div>

        <div className="policy-section">
          <h2>Information We Collect</h2>
          <h3>Personal Information You Disclose to Us</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Register for an account</li>
            <li>Express an interest in obtaining information about us or our products and services</li>
            <li>Participate in activities on the Site</li>
            <li>Contact us</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>We automatically collect certain information when you visit, use, or navigate the Site:</p>
          <ul>
            <li>Log and Usage Data</li>
            <li>Device Data</li>
            <li>Location Data</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Use of Your Information</h2>
          <p>We use personal information for various business purposes, including:</p>
          <ul>
            <li>To facilitate account creation and logon process</li>
            <li>To send administrative information</li>
            <li>To protect our Services</li>
            <li>To enforce our terms, conditions, and policies</li>
            <li>To respond to legal requests and prevent harm</li>
            <li>For advertising and marketing purposes</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Google AdSense</h2>
          <p>
            This website uses Google AdSense to display advertisements. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.
          </p>
          <p>
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.
          </p>
          <p>
            Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
          </p>
        </div>

        <div className="policy-section">
          <h2>Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. 
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, 
            no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </div>

        <div className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at: 
            privacy@thebeautyoftheworld.com
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/" className="back-link">← Back to Home</Link>
      </section>
    </div>
  );
};

export default PrivacyPolicy;