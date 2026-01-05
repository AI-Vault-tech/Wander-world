import { Link } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Terms of Service</h1>
          <p>Effective Date: November 28, 2025</p>
        </div>
      </section>

      <section className="content-section">
        <div className="terms-section">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") 
            and The Beauty of the World ("we," "us," or "our"), concerning your access to and use of the website as well as any other media form, 
            media channel, mobile website, or mobile application related, linked, or otherwise connected thereto.
          </p>
        </div>

        <div className="terms-section">
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, 
            audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or 
            controlled by us or licensed to us.
          </p>
        </div>

        <div className="terms-section">
          <h2>3. User Representations</h2>
          <p>By using the Site, you represent and warrant that:</p>
          <ul>
            <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
            <li>You are not a minor in the jurisdiction in which you reside</li>
            <li>You will not access the Site through automated or non-human means</li>
            <li>You will not use the Site for any illegal or unauthorized purpose</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>4. Prohibited Activities</h2>
          <p>You may not access or use the Site for any purpose other than that for which we make the Site available. As a user, you agree not to:</p>
          <ul>
            <li>Systematically retrieve data or other content from the Site to create or compile a collection</li>
            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses</li>
            <li>Use the Site to advertise or offer to sell goods and services</li>
            <li>Engage in unauthorized framing of or linking to the Site</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Google AdSense</h2>
          <p>
            This website uses Google AdSense to display advertisements. By using this site, you consent to the placement of Google AdSense cookies 
            and the use of Google AdSense technology. You may opt out of personalized advertising by visiting 
            <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer"> Ads Settings</a>.
          </p>
        </div>

        <div className="terms-section">
          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The Site is provided on an as-is and as-available basis. You agree that your use of the Site and our services will be at your sole risk. 
            To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof.
          </p>
        </div>

        <div className="terms-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, 
            exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your 
            use of the Site.
          </p>
        </div>

        <div className="terms-section">
          <h2>8. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, 
            please contact us at: terms@thebeautyoftheworld.com
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/" className="back-link">← Back to Home</Link>
      </section>
    </div>
  );
};

export default TermsOfService;