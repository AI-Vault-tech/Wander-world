import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: React.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove as any);
    window.addEventListener('scroll', handleScroll);
    
    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  // Interactive 3D cards data
  const interactiveCards = [
    {
      id: 1,
      title: "Holographic Landscapes",
      description: "Experience destinations through augmented reality overlays with real-time environmental data",
      icon: "🔷",
      color: "linear-gradient(135deg, #00dbde 0%, #fc00ff 100%)",
      link: "/beautiful-places"
    },
    {
      id: 2,
      title: "Quantum Creatures",
      description: "Discover animals through quantum visualization showing behavioral patterns and genetic structures",
      icon: "🔶",
      color: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      link: "/creatures"
    },
    {
      id: 3,
      title: "Neo-Architecture",
      description: "Explore human marvels through neural network-generated designs of future possibilities",
      icon: "🔸",
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      link: "/human-marvels"
    },
    {
      id: 4,
      title: "Temporal Science",
      description: "Witness scientific breakthroughs through time-lapse simulations and predictive modeling",
      icon: "🔹",
      color: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      link: "/scientific-wonders"
    }
  ];

  // Dynamic time-based experiences
  const getTimeBasedExperience = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) {
      return { 
        title: "Dawn Discoveries", 
        subtitle: "Experience the world awakening with golden hour photography and morning wildlife activity",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
      };
    } else if (hour >= 12 && hour < 18) {
      return { 
        title: "Solar Expeditions", 
        subtitle: "Explore destinations at their brightest with UV-reactive imagery and heat signature mapping",
        gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
      };
    } else {
      return { 
        title: "Nocturnal Adventures", 
        subtitle: "Discover the world after dark with luminescent photography and night vision simulations",
        gradient: "linear-gradient(135deg, #434343 0%, #000000 100%)"
      };
    }
  };

  const timeExperience = getTimeBasedExperience();

  // Stats with live simulation
  const liveStats = [
    { 
      number: Math.floor(Math.random() * 1000) + 15000, 
      label: "Active Explorers", 
      change: "+24 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 500) + 100000, 
      label: "Holograms Generated", 
      change: "+12 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 50) + 2000, 
      label: "AR Sessions", 
      change: "+3 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 10) + 75, 
      label: "Quantum Visualizations", 
      change: "+1 in last minute" 
    }
  ];

  // Expanded universe data
  const expandedUniverse = [
    {
      title: "Multiverse Explorer",
      description: "Journey through parallel dimensions where Earth evolved differently",
      image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/multiverse"
    },
    {
      title: "Temporal Archive",
      description: "Experience historical events as they happened through time-stream technology",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      link: "/temporal-archive"
    },
    {
      title: "Cosmic Connections",
      description: "Explore the relationship between Earth and distant celestial bodies",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/cosmic"
    },
    {
      title: "Bio-Digital Fusion",
      description: "See how living organisms interact with digital environments",
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/bio-digital"
    }
  ];

  // Immersive experiences
  const immersiveExperiences = [
    {
      title: "Neural Interface Tours",
      description: "Experience destinations through direct neural stimulation for ultimate immersion",
      duration: "30 min",
      intensity: "High"
    },
    {
      title: "Quantum Entanglement Journeys",
      description: "Travel to multiple locations simultaneously through quantum superposition",
      duration: "45 min",
      intensity: "Extreme"
    },
    {
      title: "Holographic Memory Implants",
      description: "Implant authentic memories of visiting any location in history",
      duration: "60 min",
      intensity: "Medium"
    }
  ];

  return (
    <div className="home-container">
      {/* Interactive Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        {/* Floating 3D Elements */}
        <div className="floating-elements">
          <div className="element element-1" style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}></div>
          <div className="element element-2" style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01}px)`
          }}></div>
          <div className="element element-3" style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015}px)`
          }}></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">FUTURE OF EXPLORATION</div>
          <h1 className="hero-title">
            <span className="glitch-text" data-text="WanderWorld">WanderWorld</span>
          </h1>
          <div className="time-experience" style={{ background: timeExperience.gradient }}>
            <h3>{timeExperience.title}</h3>
            <p>{timeExperience.subtitle}</p>
          </div>
          <p className="hero-subtitle">
            The next generation of exploration through holographic reality, quantum visualization, 
            and artificial intelligence powered discovery engines.
          </p>
          <div className="button-container">
            <Link to="/beautiful-places">
              <button className="cta-button neon-glow">Enter the Matrix</button>
            </Link>
            <button className="secondary-button">Hologram Demo</button>
          </div>
        </div>
        
        {/* Interactive Grid Background */}
        <div className="grid-background"></div>
      </section>

      {/* Interactive Cards Section */}
      <section className="interactive-section">
        <div className="section-header">
          <div className="section-badge">QUANTUM INTERACTION</div>
          <h2 className="section-title">Touch the Future of Exploration</h2>
          <p className="section-subtitle">
            Engage with our revolutionary interactive discovery system that adapts to your curiosity in real-time.
          </p>
        </div>
        <div className="interactive-grid">
          {interactiveCards.map((card) => (
            <div 
              key={card.id}
              className={`interactive-card ${activeCard === card.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ 
                background: card.color,
                transform: activeCard === card.id 
                  ? 'translateY(-20px) scale(1.05)' 
                  : 'translateY(0) scale(1)'
              }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <Link to={card.link} className="card-link">Initiate Experience</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded Universe Section */}
      <section className="universe-section">
        <div className="section-header">
          <div className="section-badge">EXPANDED UNIVERSE</div>
          <h2 className="section-title">Beyond Earth's Boundaries</h2>
          <p className="section-subtitle">
            Explore realms beyond our physical world through our expanded universe experiences.
          </p>
        </div>
        <div className="universe-grid">
          {expandedUniverse.map((item, index) => (
            <div 
              key={index} 
              className="universe-card"
              style={{ 
                transform: `translateY(${scrollY * (0.1 + index * 0.05)}px)` 
              }}
            >
              <div 
                className="universe-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="universe-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.link} className="universe-link">Explore Dimension</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Data Visualization */}
      <section className="data-section">
        <div className="section-header">
          <div className="section-badge">LIVE QUANTUM FEED</div>
          <h2 className="section-title">Real-Time Global Exploration</h2>
          <p className="section-subtitle">
            Witness the current state of global exploration through our live data visualization system.
          </p>
        </div>
        <div className="live-data-grid">
          {liveStats.map((stat, index) => (
            <div key={index} className="data-card">
              <div className="data-number">{stat.number.toLocaleString()}</div>
              <div className="data-label">{stat.label}</div>
              <div className="data-change">{stat.change}</div>
              <div className="data-visualizer">
                <div className="visualizer-bar" style={{ 
                  height: `${Math.random() * 80 + 20}%`,
                  animationDelay: `${index * 0.2}s`
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immersive Experiences */}
      <section className="immersive-section">
        <div className="section-header">
          <div className="section-badge">IMMERSIVE EXPERIENCES</div>
          <h2 className="section-title">Next-Level Exploration</h2>
          <p className="section-subtitle">
            Experience destinations like never before with our cutting-edge immersive technologies.
          </p>
        </div>
        <div className="immersive-grid">
          {immersiveExperiences.map((experience, index) => (
            <div key={index} className="immersive-card">
              <div className="immersive-header">
                <h3>{experience.title}</h3>
                <div className="immersive-meta">
                  <span className="duration">{experience.duration}</span>
                  <span className={`intensity ${experience.intensity.toLowerCase()}`}>{experience.intensity}</span>
                </div>
              </div>
              <p className="immersive-description">{experience.description}</p>
              <button className="immersive-button">Activate Experience</button>
            </div>
          ))}
        </div>
      </section>

      {/* Holographic Showcase */}
      <section className="showcase-section">
        <div className="section-header">
          <div className="section-badge">HOLOGRAPHIC SHOWCASE</div>
          <h2 className="section-title">Today's Featured Dimensions</h2>
          <p className="section-subtitle">
            Experience our editors' choice of multidimensional content through holographic projection.
          </p>
        </div>
        <div className="hologram-container">
          <div className="hologram-display">
            <div className="hologram-content">
              <h3>Aurora Quantum Field</h3>
              <p>Interactive simulation of northern lights with particle physics visualization</p>
              <div className="hologram-controls">
                <button className="hologram-btn">Rotate View</button>
                <button className="hologram-btn">Particle Detail</button>
                <button className="hologram-btn">Sound Field</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neural Network Recommendation */}
      <section className="ai-section">
        <div className="section-header">
          <div className="section-badge">AI RECOMMENDATION MATRIX</div>
          <h2 className="section-title">Personalized Discovery Engine</h2>
          <p className="section-subtitle">
            Our neural network analyzes your exploration patterns to suggest your next adventure.
          </p>
        </div>
        <div className="ai-recommendation">
          <div className="ai-avatar">
            <div className="ai-icon">🤖</div>
          </div>
          <div className="ai-message">
            <p>Based on your recent exploration of volcanic formations, I recommend:</p>
            <h3>Quantum Simulation: Supervolcano Calderas of Yellowstone</h3>
            <p>This interactive experience combines geological data with predictive modeling to show potential future eruptions.</p>
            <div className="ai-actions">
              <button className="ai-btn primary">Experience Now</button>
              <button className="ai-btn secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Mega Section */}
      <section className="mega-cta-section">
        <div className="mega-cta-content">
          <h2 className="mega-cta-title">Join the Quantum Exploration Revolution</h2>
          <p className="mega-cta-subtitle">
            Become part of the largest community of explorers pushing the boundaries of human experience.
          </p>
          <div className="mega-cta-buttons">
            <button className="mega-cta-button primary">Create Quantum Account</button>
            <button className="mega-cta-button secondary">View Enterprise Solutions</button>
          </div>
        </div>
      </section>

      {/* Footer Preview */}
      <footer className="footer-preview">
        <p className="footer-text">
          © 2025 WanderWorld Quantum Division. Pioneering the future of digital exploration. 
          <span className="quantum-badge">QUANTUM CERTIFIED</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;