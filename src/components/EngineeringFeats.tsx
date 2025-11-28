import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './EngineeringFeats.css'

const EngineeringFeats = () => {
  // Define the sub-categories for Engineering Feats
  const subCategories = [
    {
      id: 'bridge-architecture',
      name: 'Bridge Architecture',
      description: 'Golden Gate, Millau Viaduct',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1920&q=80'
    },
    {
      id: 'tunnel-networks',
      name: 'Tunnel Networks',
      description: 'Channel Tunnel, Swiss Alps tunnels',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1920&q=80'
    },
    {
      id: 'space-engineering',
      name: 'Space Engineering',
      description: 'ISS, Mars rovers, telescopes',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80'
    },
    {
      id: 'sustainable-tech',
      name: 'Sustainable Tech',
      description: 'Solar farms, wind farms, hydro',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'digital-infrastructure',
      name: 'Digital Infrastructure',
      description: 'Internet, blockchain, AI systems',
      image: 'https://images.unsplash.com/photo-1547632572-6924bf47a5b4?w=1920&q=80'
    }
  ]

  // Sample engineering marvels for the animated blueprint transformation
  const featuredMarvels = [
    {
      id: 1,
      name: 'Millau Viaduct',
      location: 'France',
      height: '343m',
      length: '2.46km',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1920&q=80'
    },
    {
      id: 2,
      name: 'Channel Tunnel',
      location: 'UK-France',
      depth: '75m',
      length: '50.5km',
      image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1920&q=80'
    },
    {
      id: 3,
      name: 'Burj Khalifa',
      location: 'Dubai',
      height: '828m',
      floors: '163',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    }
  ]

  // Engineering principles data
  const engineeringPrinciples = [
    { id: 1, principle: 'Structural Integrity', description: 'Ensuring stability under all conditions' },
    { id: 2, principle: 'Material Science', description: 'Using advanced materials for optimal performance' },
    { id: 3, principle: 'Load Distribution', description: 'Evenly distributing forces throughout the structure' },
    { id: 4, principle: 'Environmental Resistance', description: 'Withstanding natural elements and disasters' },
    { id: 5, principle: 'Efficiency Optimization', description: 'Maximizing performance with minimal resources' }
  ]

  return (
    <div className="engineering-feats">
      {/* Hero Section with Animated Blueprint Transformation */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Engineering Feats
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            The poetry of precision and scale
          </motion.p>
        </div>
        
        {/* Animated Blueprint to Reality Transformation */}
        <div className="blueprint-transformation">
          <div className="blueprint-container">
            <div className="blueprint-viewer">
              <h3>Blueprint to Reality Transformation</h3>
              <div className="transformation-stages">
                <div className="stage">
                  <div className="stage-icon">📐</div>
                  <p>Conceptual Design</p>
                </div>
                <div className="stage">
                  <div className="stage-icon">📐</div>
                  <p>Detailed Engineering</p>
                </div>
                <div className="stage">
                  <div className="stage-icon">🏗️</div>
                  <p>Construction</p>
                </div>
                <div className="stage">
                  <div className="stage-icon">完工</div>
                  <p>Completion</p>
                </div>
              </div>
              <div className="blueprint-animation">
                <div className="blueprint-lines"></div>
                <div className="structure-form"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sub-Categories Gateway */}
      <section className="subcategories-section">
        <div className="section-header">
          <h2>Engineering Disciplines</h2>
          <p>Discover the diverse fields of human engineering mastery</p>
        </div>
        <div className="subcategories-grid">
          {subCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="subcategory-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link to={`/human-marvels/engineering/${category.id}`} className="subcategory-link">
                <div 
                  className="subcategory-image"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${category.image}')` 
                  }}
                >
                  <div className="subcategory-overlay">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <span className="explore-link">Explore →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Engineering Marvels */}
      <section className="featured-marvels">
        <div className="section-header">
          <h2>Engineering Marvels</h2>
          <p>Impossible structures that became reality</p>
        </div>
        <div className="marvels-grid">
          {featuredMarvels.map((marvel, index) => (
            <motion.div
              key={marvel.id}
              className="marvel-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="marvel-image"
                style={{ backgroundImage: `url('${marvel.image}')` }}
              />
              <div className="marvel-content">
                <h3>{marvel.name}</h3>
                <p className="location">{marvel.location}</p>
                <div className="marvel-specs">
                  <div className="spec">
                    <span className="spec-label">Height:</span>
                    <span className="spec-value">{marvel.height || 'N/A'}</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Length:</span>
                    <span className="spec-value">{marvel.length || 'N/A'}</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Depth:</span>
                    <span className="spec-value">{marvel.depth || 'N/A'}</span>
                  </div>
                  <div className="spec">
                    <span className="spec-label">Floors:</span>
                    <span className="spec-value">{marvel.floors || 'N/A'}</span>
                  </div>
                </div>
                <button className="view-details">View Engineering Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Marvels Explained Feature */}
      <section className="marvels-explained">
        <div className="section-header">
          <h2>Engineering Marvels Explained</h2>
          <p>Interactive diagrams showing how impossible structures work</p>
        </div>
        <div className="explained-content">
          <div className="diagram-container">
            <div className="diagram-placeholder">
              <h3>Interactive Structural Diagram</h3>
              <p>Click on different parts to explore engineering principles</p>
              <div className="diagram-elements">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="diagram-element" style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i * 10)}%`
                  }}>
                    <div className="element-icon">⚙️</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="principles-list">
            <h3>Core Engineering Principles</h3>
            <div className="principles-grid">
              {engineeringPrinciples.map((principle) => (
                <div key={principle.id} className="principle-card">
                  <div className="principle-icon">📐</div>
                  <h4>{principle.principle}</h4>
                  <p>{principle.description}</p>
                </div>
              ))}
            </div>
            <button className="explore-principles">Explore All Principles</button>
          </div>
        </div>
      </section>

      {/* Innovation Hub */}
      <section className="innovation-hub">
        <div className="section-header">
          <h2>Innovation Hub</h2>
          <p>Latest breakthroughs in engineering technology</p>
        </div>
        <div className="hub-content">
          <div className="innovation-feed">
            <div className="feed-item">
              <div className="feed-icon">🔬</div>
              <div className="feed-content">
                <h4>Self-Healing Concrete</h4>
                <p>New material can repair its own cracks using bacteria</p>
                <span className="feed-date">2 days ago</span>
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-icon">🌉</div>
              <div className="feed-content">
                <h4>Floating Airport Concept</h4>
                <p>Japanese engineers design sea-based airports for coastal cities</p>
                <span className="feed-date">1 week ago</span>
              </div>
            </div>
            <div className="feed-item">
              <div className="feed-icon">🚀</div>
              <div className="feed-content">
                <h4>Space Elevator Progress</h4>
                <p>Carbon nanotube cables reach new strength milestones</p>
                <span className="feed-date">2 weeks ago</span>
              </div>
            </div>
          </div>
          <div className="hub-sidebar">
            <div className="sidebar-card">
              <h3>Engineering Challenges</h3>
              <p>Solve real-world engineering problems with our interactive simulations</p>
              <button className="challenge-btn">Start Challenge</button>
            </div>
            <div className="sidebar-card">
              <h3>Virtual Labs</h3>
              <p>Experiment with engineering concepts in our physics simulation environment</p>
              <button className="lab-btn">Enter Lab</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EngineeringFeats