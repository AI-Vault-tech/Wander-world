import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVRMode, setIsVRMode] = useState(false);
  const [quantumState, setQuantumState] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState<Array<number>>([]);

  // Initialize particles
  useEffect(() => {
    const initialParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1
    }));
    setParticles(initialParticles);
    
    // Initialize neural activity
    const initialNeuralActivity = Array.from({ length: 20 }, () => Math.random() * 100);
    setNeuralActivity(initialNeuralActivity);
  }, []);

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
    
    // Animate particles
    const particleInterval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + 0.1) % 100,
        y: (particle.y + 0.05) % 100
      })));
    }, 100);
    
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 5);
    }, 5000);
    
    // Quantum state animation
    const quantumInterval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 360);
    }, 50);
    
    // Neural activity simulation
    const neuralInterval = setInterval(() => {
      setNeuralActivity(prev => prev.map(val => {
        const change = (Math.random() - 0.5) * 20;
        return Math.max(0, Math.min(100, val + change));
      }));
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
      clearInterval(particleInterval);
      clearInterval(testimonialInterval);
      clearInterval(quantumInterval);
      clearInterval(neuralInterval);
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
    },
    {
      id: 5,
      title: "Underwater Exploration",
      description: "Dive into the ocean depths with our advanced marine visualization technology",
      icon: "🌊",
      color: "linear-gradient(135deg, #1e90ff 0%, #00bfff 100%)",
      link: "/underwater"
    },
    {
      id: 6,
      title: "Space Odyssey",
      description: "Journey through our solar system and beyond with realistic space simulations",
      icon: "🚀",
      color: "linear-gradient(135deg, #8a2be2 0%, #4b0082 100%)",
      link: "/space"
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
      number: Math.floor(Math.random() * 10000) + 50000, 
      label: "Active Explorers", 
      change: "+127 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 10000) + 500000, 
      label: "Holograms Generated", 
      change: "+89 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 1000) + 15000, 
      label: "AR Sessions", 
      change: "+23 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 100) + 2000, 
      label: "Quantum Visualizations", 
      change: "+7 in last minute" 
    },
    { 
      number: Math.floor(Math.random() * 50) + 500, 
      label: "VR Experiences", 
      change: "+3 in last minute" 
    },
    { 
      number: 195, 
      label: "Countries Explored", 
      change: "+2 newly added" 
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
    },
    {
      title: "Underwater Realms",
      description: "Dive into the mysterious depths of our planet's oceans",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/underwater-realms"
    },
    {
      title: "Future Simulations",
      description: "Experience scientifically-accurate predictions of Earth's future",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/future-simulations"
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
    },
    {
      title: "Time Dilation Expeditions",
      description: "Experience hours of exploration in just minutes of real time",
      duration: "90 min",
      intensity: "Extreme"
    },
    {
      title: "Multi-Sensory Symphonies",
      description: "Engage all five senses with orchestrated environmental experiences",
      duration: "40 min",
      intensity: "High"
    }
  ];

  // Premium showcase items
  const premiumShowcase = [
    {
      title: "Aurora Quantum Field",
      description: "Interactive simulation of northern lights with particle physics visualization",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Volcanic Core Simulation",
      description: "Descend into Earth's mantle with real-time geothermal data visualization",
      image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Deep Space Observatory",
      description: "Explore distant galaxies through radio telescope data interpretation",
      image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Oceanic Abyss Explorer",
      description: "Journey to the deepest parts of Earth's oceans with submersible simulations",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // VIP experiences
  const vipExperiences = [
    {
      title: "私人定制探索之旅",
      subtitle: "Personalized Exploration Journey",
      description: "Tailored experiences based on your unique interests and preferences with dedicated AI concierge",
      icon: "👑"
    },
    {
      title: "专家陪同解说",
      subtitle: "Expert Guided Tours",
      description: "Exclusive access to world-renowned experts in various fields for personalized guided experiences",
      icon: "🎓"
    },
    {
      title: "前沿科技体验",
      subtitle: "Cutting-Edge Technology",
      description: "Early access to our latest quantum visualization and holographic technologies",
      icon: "🔬"
    },
    {
      title: "专属内容库",
      subtitle: "Exclusive Content Library",
      description: "Access to premium content not available to regular users, including 8K resolution experiences",
      icon: "🔒"
    },
    {
      title: "虚拟现实探险",
      subtitle: "Virtual Reality Adventures",
      description: "Full immersive VR experiences with haptic feedback suits and spatial audio",
      icon: "🥽"
    },
    {
      title: "全球探索通行证",
      subtitle: "World Explorer Pass",
      description: "Unlimited access to all destinations and experiences across all our platforms",
      icon: "🌐"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "Quantum Physicist",
      quote: "WanderWorld has revolutionized how I visualize complex scientific concepts. The quantum visualization tools are unparalleled.",
      avatar: "A"
    },
    {
      name: "Marcus Johnson",
      role: "National Geographic Photographer",
      quote: "The holographic landscape experiences have transformed my creative process. I've never seen anything like it.",
      avatar: "M"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Marine Biologist",
      quote: "The bio-digital fusion simulations helped me discover new species interactions I never would have noticed otherwise.",
      avatar: "E"
    },
    {
      name: "Professor James Wright",
      role: "Astrophysicist",
      quote: "The cosmic connections module provides the most accurate space visualization I've ever experienced. It's like being there.",
      avatar: "J"
    },
    {
      name: "Sarah Kim",
      role: "UNESCO World Heritage Expert",
      quote: "As a cultural preservationist, I'm amazed by how accurately WanderWorld captures the essence of heritage sites worldwide.",
      avatar: "S"
    }
  ];

  // Technology features
  const techFeatures = [
    {
      title: "Neural Interface",
      description: "Direct brain-computer integration for ultimate immersion",
      icon: "🧠"
    },
    {
      title: "Quantum Rendering",
      description: "Real-time photorealistic rendering using quantum computing",
      icon: "⚛️"
    },
    {
      title: "Holographic Display",
      description: "True 3D holograms without glasses or headsets",
      icon: "プロジェクター"
    },
    {
      title: "AI Synthesis",
      description: "Artificial intelligence that creates entirely new experiences",
      icon: "🤖"
    },
    {
      title: "Haptic Feedback",
      description: "Full-body tactile sensations for complete immersion",
      icon: "✋"
    },
    {
      title: "Multi-Sensory Integration",
      description: "Engage all five senses with orchestrated environmental experiences",
      icon: "👃"
    }
  ];

  // World Heritage Sites
  const worldHeritageSites = [
    {
      name: "Machu Picchu",
      country: "Peru",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1525862227096-74c7e08801d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Great Barrier Reef",
      country: "Australia",
      category: "Natural",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Pyramids of Giza",
      country: "Egypt",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1525862227096-74c7e08801d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Northern Lights",
      country: "Norway",
      category: "Natural",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Quantum dimensions
  const quantumDimensions = [
    {
      title: "Dimension X-42",
      description: "A realm where gravity flows in reverse and time moves in spirals",
      stability: "92%"
    },
    {
      title: "Nebula Prime",
      description: "A gaseous dimension composed entirely of sentient stellar clouds",
      stability: "78%"
    },
    {
      title: "EchoVerse",
      description: "A reality where every action creates infinite parallel outcomes",
      stability: "85%"
    }
  ];

  return (
    <div className="home-container">
      {/* Animated Particle Background */}
      <div className="particle-background">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          />
        ))}
      </div>

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
          <div className="hero-badge">WORLD'S LARGEST EXPLORATION PLATFORM</div>
          <h1 className="hero-title">
            <span className="glitch-text" data-text="WanderWorld">WanderWorld</span>
          </h1>
          <div className="time-experience" style={{ background: timeExperience.gradient }}>
            <h3>{timeExperience.title}</h3>
            <p>{timeExperience.subtitle}</p>
          </div>
          <p className="hero-subtitle">
            The world's largest, most beautiful, and most advanced exploration platform. 
            Experience destinations through holographic reality, quantum visualization, 
            and artificial intelligence powered discovery engines with ultra-premium content.
          </p>
          <div className="button-container">
            <Link to="/beautiful-places">
              <button className="cta-button neon-glow">Enter the Quantum Realm</button>
            </Link>
            <button 
              className="secondary-button vr-toggle"
              onClick={() => setIsVRMode(!isVRMode)}
            >
              {isVRMode ? "Exit VR Mode" : "Try VR Preview"}
            </button>
          </div>
        </div>
        
        {/* Interactive Grid Background */}
        <div className="grid-background"></div>
      </section>

      {/* World Heritage Sites Preview */}
      <section className="heritage-section">
        <div className="section-header">
          <div className="section-badge">UNESCO WORLD HERITAGE SITES</div>
          <h2 className="section-title">Explore Our Planet's Treasures</h2>
          <p className="section-subtitle">
            Discover the world's most significant cultural and natural heritage sites with our comprehensive database.
          </p>
        </div>
        <div className="heritage-grid">
          {worldHeritageSites.map((site, index) => (
            <div key={index} className="heritage-card">
              <div 
                className="heritage-image"
                style={{ backgroundImage: `url(${site.image})` }}
              >
                <div className="heritage-overlay">
                  <span className={`heritage-category ${site.category.toLowerCase()}`}>
                    {site.category}
                  </span>
                </div>
              </div>
              <div className="heritage-content">
                <h3>{site.name}</h3>
                <p>{site.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="centered-button">
          <button className="explore-more-button">Explore All 195 Countries</button>
        </div>
      </section>

      {/* VIP Experiences Section */}
      <section className="vip-section">
        <div className="section-header">
          <div className="section-badge">EXCLUSIVE VIP EXPERIENCES</div>
          <h2 className="section-title">Premium Membership Benefits</h2>
          <p className="section-subtitle">
            Unlock the ultimate exploration experience with our exclusive VIP program.
          </p>
        </div>
        <div className="vip-grid">
          {vipExperiences.map((experience, index) => (
            <div 
              key={index} 
              className="vip-card"
            >
              <div className="vip-icon">{experience.icon}</div>
              <h3 className="vip-title">{experience.title}</h3>
              <h4 className="vip-subtitle">{experience.subtitle}</h4>
              <p className="vip-description">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Features Section */}
      <section className="tech-section">
        <div className="section-header">
          <div className="section-badge">ADVANCED TECHNOLOGY</div>
          <h2 className="section-title">Powered by the Future</h2>
          <p className="section-subtitle">
            Cutting-edge technologies that make impossible experiences possible.
          </p>
        </div>
        <div className="tech-grid">
          {techFeatures.map((feature, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{feature.icon}</div>
              <h3 className="tech-title">{feature.title}</h3>
              <p className="tech-description">{feature.description}</p>
            </div>
          ))}
        </div>
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

      {/* Premium Showcase Section */}
      <section className="showcase-section premium-showcase">
        <div className="section-header">
          <div className="section-badge">PREMIUM SHOWCASE</div>
          <h2 className="section-title">Elite Quantum Experiences</h2>
          <p className="section-subtitle">
            Curated selection of our most advanced and visually stunning experiences.
          </p>
        </div>
        <div className="premium-grid">
          {premiumShowcase.map((item, index) => (
            <div key={index} className="premium-card">
              <div 
                className="premium-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="premium-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="premium-button">Experience Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <div className="section-badge">USER TESTIMONIALS</div>
          <h2 className="section-title">What Our Explorers Say</h2>
          <p className="section-subtitle">
            Hear from pioneers who have experienced the future of exploration.
          </p>
        </div>
        <div className="testimonials-container">
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-avatar">
                  <div className="avatar-initial">{testimonial.avatar}</div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
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

      {/* Quantum Dimensions Section */}
      <section className="quantum-section">
        <div className="section-header">
          <div className="section-badge">QUANTUM DIMENSIONS</div>
          <h2 className="section-title">Stable Parallel Realities</h2>
          <p className="section-subtitle">
            Access verified quantum dimensions with our breakthrough stabilization technology.
          </p>
        </div>
        <div className="quantum-grid">
          {quantumDimensions.map((dimension, index) => (
            <div 
              key={index} 
              className="quantum-card"
              style={{ 
                transform: `rotateY(${quantumState + index * 120}deg)`,
                background: `linear-gradient(${quantumState}deg, rgba(0, 217, 255, 0.2), rgba(170, 0, 255, 0.2))`
              }}
            >
              <div className="quantum-header">
                <h3>{dimension.title}</h3>
                <div className="stability-meter">
                  <div className="stability-bar" style={{ width: dimension.stability }}></div>
                  <span className="stability-value">{dimension.stability}</span>
                </div>
              </div>
              <p className="quantum-description">{dimension.description}</p>
              <button className="quantum-button">Enter Dimension</button>
            </div>
          ))}
        </div>
      </section>

      {/* Neural Activity Visualization */}
      <section className="neural-section">
        <div className="section-header">
          <div className="section-badge">GLOBAL NEURAL NETWORK</div>
          <h2 className="section-title">Real-Time Brain Activity Map</h2>
          <p className="section-subtitle">
            Visualize collective human consciousness during exploration experiences.
          </p>
        </div>
        <div className="neural-visualization">
          <div className="neural-grid">
            {neuralActivity.map((activity, index) => (
              <div 
                key={index} 
                className="neural-node"
                style={{ 
                  height: `${activity}%`,
                  background: `linear-gradient(to top, #00d9ff, #aa00ff)`,
                  opacity: activity / 100
                }}
              ></div>
            ))}
          </div>
          <div className="neural-stats">
            <div className="stat-item">
              <div className="stat-value">2.4M</div>
              <div className="stat-label">Active Neurons</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">98.7%</div>
              <div className="stat-label">Network Efficiency</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">0.3s</div>
              <div className="stat-label">Response Time</div>
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