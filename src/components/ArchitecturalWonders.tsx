import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ArchitecturalWonders.css'

const ArchitecturalWonders = () => {
  // Define the sub-categories for Architectural Wonders
  const subCategories = [
    {
      id: 'ancient-mysteries',
      name: 'Ancient Mysteries',
      description: 'Pyramids, Machu Picchu, Petra',
      image: 'https://images.unsplash.com/photo-1534210620129-7c058b713c84?w=1920&q=80'
    },
    {
      id: 'sacred-spaces',
      name: 'Sacred Spaces',
      description: 'Cathedrals, Mosques, Temples',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80'
    },
    {
      id: 'modern-icons',
      name: 'Modern Icons',
      description: 'Sydney Opera House, Burj Khalifa',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'sustainable-design',
      name: 'Sustainable Design',
      description: 'Green architecture, eco-cities',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80'
    },
    {
      id: 'future-concepts',
      name: 'Future Concepts',
      description: 'Mars habitats, underwater cities',
      image: 'https://images.unsplash.com/photo-1547632572-6924bf47a5b4?w=1920&q=80'
    }
  ]

  // Sample structures for the 3D model viewer
  const featuredStructures = [
    {
      id: 1,
      name: 'Giza Pyramid Complex',
      location: 'Egypt',
      year: '2580-2510 BCE',
      image: 'https://images.unsplash.com/photo-1534210620129-7c058b713c84?w=1920&q=80'
    },
    {
      id: 2,
      name: 'Taj Mahal',
      location: 'India',
      year: '1632-1648 CE',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=80'
    },
    {
      id: 3,
      name: 'Sydney Opera House',
      location: 'Australia',
      year: '1957-1973 CE',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1920&q=80'
    }
  ]

  return (
    <div className="architectural-wonders">
      {/* Hero Section with 3D Model Viewer */}
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
            Architectural Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Where stone and steel touch the divine
          </motion.p>
        </div>
        
        {/* Interactive 3D Model Viewer Placeholder */}
        <div className="model-viewer-container">
          <div className="model-viewer">
            <div className="model-placeholder">
              <h3>Interactive 3D Model Viewer</h3>
              <p>Explore iconic structures from around the world</p>
              <div className="model-controls">
                <button className="control-btn">Rotate</button>
                <button className="control-btn">Zoom</button>
                <button className="control-btn">Pan</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sub-Categories Gateway */}
      <section className="subcategories-section">
        <div className="section-header">
          <h2>Explore Architectural Eras</h2>
          <p>Discover structures from different periods of human history</p>
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
              <Link to={`/human-marvels/architecture/${category.id}`} className="subcategory-link">
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

      {/* Featured Structures */}
      <section className="featured-structures">
        <div className="section-header">
          <h2>Architectural Masterpieces</h2>
          <p>Iconic structures that define human creativity</p>
        </div>
        <div className="structures-grid">
          {featuredStructures.map((structure, index) => (
            <motion.div
              key={structure.id}
              className="structure-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="structure-image"
                style={{ backgroundImage: `url('${structure.image}')` }}
              />
              <div className="structure-content">
                <h3>{structure.name}</h3>
                <p className="location">{structure.location}</p>
                <p className="year">{structure.year}</p>
                <button className="view-details">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Architectural DNA Feature */}
      <section className="architectural-dna">
        <div className="section-header">
          <h2>Architectural DNA</h2>
          <p>Compare structural principles across eras</p>
        </div>
        <div className="dna-content">
          <div className="dna-visualization">
            <div className="dna-chart">
              <div className="chart-row">
                <div className="era-label">Ancient</div>
                <div className="principle-bar" style={{ width: '80%' }}>
                  <span className="principle-name">Stone Masonry</span>
                </div>
              </div>
              <div className="chart-row">
                <div className="era-label">Classical</div>
                <div className="principle-bar" style={{ width: '75%' }}>
                  <span className="principle-name">Columns & Arches</span>
                </div>
              </div>
              <div className="chart-row">
                <div className="era-label">Medieval</div>
                <div className="principle-bar" style={{ width: '70%' }}>
                  <span className="principle-name">Gothic Elements</span>
                </div>
              </div>
              <div className="chart-row">
                <div className="era-label">Renaissance</div>
                <div className="principle-bar" style={{ width: '85%' }}>
                  <span className="principle-name">Symmetry & Proportion</span>
                </div>
              </div>
              <div className="chart-row">
                <div className="era-label">Modern</div>
                <div className="principle-bar" style={{ width: '90%' }}>
                  <span className="principle-name">Steel & Glass</span>
                </div>
              </div>
              <div className="chart-row">
                <div className="era-label">Contemporary</div>
                <div className="principle-bar" style={{ width: '95%' }}>
                  <span className="principle-name">Sustainable Tech</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dna-explanation">
            <h3>Evolution of Building Principles</h3>
            <p>
              Architecture evolves with technology, culture, and human needs. 
              From the massive stone blocks of ancient pyramids to the smart 
              materials of today, each era has contributed unique principles 
              that continue to influence modern design.
            </p>
            <button className="compare-button">Compare Structures</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArchitecturalWonders