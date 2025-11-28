import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ArtisticTreasures.css'

const ArtisticTreasures = () => {
  // Define the sub-categories for Artistic Treasures
  const subCategories = [
    {
      id: 'renaissance-masters',
      name: 'Renaissance Masters',
      description: 'Da Vinci, Michelangelo',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=80'
    },
    {
      id: 'cultural-expressions',
      name: 'Cultural Expressions',
      description: 'African masks, Asian calligraphy',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'modern-movements',
      name: 'Modern Movements',
      description: 'Impressionism, Cubism, Surrealism',
      image: 'https://images.unsplash.com/photo-1544003484-3cd181d17917?w=1920&q=80'
    },
    {
      id: 'digital-revolution',
      name: 'Digital Revolution',
      description: 'NFT art, digital installations',
      image: 'https://images.unsplash.com/photo-1547632572-6924bf47a5b4?w=1920&q=80'
    },
    {
      id: 'living-art',
      name: 'Living Art',
      description: 'Performance, street art, temporary installations',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'
    }
  ]

  // Sample masterpieces for the zoomable viewer
  const featuredMasterpieces = [
    {
      id: 1,
      name: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      year: '1503-1506',
      movement: 'Renaissance',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1920&q=80'
    },
    {
      id: 2,
      name: 'The Starry Night',
      artist: 'Vincent van Gogh',
      year: '1889',
      movement: 'Post-Impressionism',
      image: 'https://images.unsplash.com/photo-1544003484-3cd181d17917?w=1920&q=80'
    },
    {
      id: 3,
      name: 'Guernica',
      artist: 'Pablo Picasso',
      year: '1937',
      movement: 'Cubism',
      image: 'https://images.unsplash.com/photo-1547632572-6924bf47a5b4?w=1920&q=80'
    }
  ]

  return (
    <div className="artistic-treasures">
      {/* Hero Section with Zoomable Masterpiece */}
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
            Artistic Treasures
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            The soul's language in color and form
          </motion.p>
        </div>
        
        {/* Ultra-high-resolution Zoomable Masterpiece Placeholder */}
        <div className="masterpiece-viewer-container">
          <div className="masterpiece-viewer">
            <div className="masterpiece-placeholder">
              <h3>Ultra-High-Resolution Zoomable Masterpiece</h3>
              <p>Explore every brushstroke and detail</p>
              <div className="zoom-controls">
                <button className="control-btn">Zoom In</button>
                <button className="control-btn">Zoom Out</button>
                <button className="control-btn">Pan</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sub-Categories Gateway */}
      <section className="subcategories-section">
        <div className="section-header">
          <h2>Artistic Movements</h2>
          <p>Discover masterpieces from different artistic periods</p>
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
              <Link to={`/human-marvels/art/${category.id}`} className="subcategory-link">
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

      {/* Featured Masterpieces */}
      <section className="featured-masterpieces">
        <div className="section-header">
          <h2>Masterpiece Gallery</h2>
          <p>Iconic works that shaped art history</p>
        </div>
        <div className="masterpieces-grid">
          {featuredMasterpieces.map((masterpiece, index) => (
            <motion.div
              key={masterpiece.id}
              className="masterpiece-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="masterpiece-image"
                style={{ backgroundImage: `url('${masterpiece.image}')` }}
              />
              <div className="masterpiece-content">
                <h3>{masterpiece.name}</h3>
                <p className="artist">{masterpiece.artist}</p>
                <p className="year">{masterpiece.year}</p>
                <p className="movement">{masterpiece.movement}</p>
                <button className="view-details">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artistic Vision Lab Feature */}
      <section className="vision-lab">
        <div className="section-header">
          <h2>Artistic Vision Lab</h2>
          <p>See how different masters would interpret the same subject</p>
        </div>
        <div className="lab-content">
          <div className="lab-interface">
            <div className="subject-viewer">
              <h3>Reference Subject</h3>
              <div className="subject-placeholder">
                <p>Mountain Landscape</p>
              </div>
            </div>
            <div className="style-comparison">
              <h3>Master Interpretations</h3>
              <div className="styles-grid">
                <div className="style-card">
                  <div className="style-image" style={{ background: 'linear-gradient(135deg, #8e6e42, #5d4037)' }}></div>
                  <p>Van Gogh Style</p>
                </div>
                <div className="style-card">
                  <div className="style-image" style={{ background: 'linear-gradient(135deg, #2e7d32, #81c784)' }}></div>
                  <p>Monet Style</p>
                </div>
                <div className="style-card">
                  <div className="style-image" style={{ background: 'linear-gradient(135deg, #1565c0, #90caf9)' }}></div>
                  <p>Picasso Style</p>
                </div>
                <div className="style-card">
                  <div className="style-image" style={{ background: 'linear-gradient(135deg, #e64a19, #ff8a65)' }}></div>
                  <p>Kandinsky Style</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lab-explanation">
            <h3>AI-Powered Artistic Interpretation</h3>
            <p>
              Our Artistic Vision Lab uses advanced neural networks to simulate 
              how history's greatest artists would interpret any given subject. 
              By analyzing thousands of works from each master, the AI learns 
              their unique techniques, color palettes, and stylistic elements.
            </p>
            <button className="try-lab">Try the Vision Lab</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArtisticTreasures