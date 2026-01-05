import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Discovering and sharing the wonders of our world</p>
        </div>
      </section>

      <section className="content-section">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            The Beauty of the World is dedicated to showcasing the incredible diversity and beauty of our planet. 
            We believe that by understanding and appreciating the natural wonders, scientific discoveries, and human achievements around us, 
            we can foster a deeper connection with our world and inspire positive action for its preservation.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2025, The Beauty of the World began as a passion project to document and celebrate the extraordinary places, 
            creatures, and human innovations that make our planet truly remarkable. What started as a small collection of photographs 
            and stories has grown into a comprehensive platform featuring thousands of wonders from every corner of the globe.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            We are a diverse group of scientists, photographers, writers, and explorers united by a common passion for discovery. 
            Our contributors span the globe, bringing unique perspectives and expertise to help create the most accurate and engaging 
            content about our world's wonders.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Scientific Accuracy:</strong> All content is reviewed by experts to ensure factual correctness</li>
            <li><strong>Environmental Responsibility:</strong> We promote sustainable tourism and conservation efforts</li>
            <li><strong>Cultural Sensitivity:</strong> We respect and honor the communities and traditions we feature</li>
            <li><strong>Educational Excellence:</strong> We strive to make learning about our world accessible to everyone</li>
            <li><strong>Ethical Standards:</strong> We maintain the highest standards of integrity in all our operations</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>AdSense Compliance</h2>
          <p>
            As part of our commitment to providing quality content while maintaining a sustainable platform, 
            we use Google AdSense to support our operations. We ensure that all advertising complies with Google's policies 
            and maintains the integrity of our user experience. Our ads are carefully selected to be relevant and non-intrusive, 
            allowing us to continue providing free access to our educational content.
          </p>
        </div>

        <div className="about-section">
          <h2>Get Involved</h2>
          <p>
            We welcome contributions from researchers, photographers, and enthusiasts who share our passion for documenting 
            the wonders of our world. If you have expertise or content you'd like to share, please contact us at contribute@thebeautyoftheworld.com.
          </p>
        </div>
      </section>

      <section className="navigation-section">
        <Link to="/" className="back-link">← Back to Home</Link>
      </section>
    </div>
  );
};

export default AboutUs;