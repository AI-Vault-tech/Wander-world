import { motion } from 'framer-motion'
import './LivingLandscapes.css'

const LivingLandscapes = () => {
  const landscapes = [
    {
      id: 1,
      name: 'Amazon Rainforest',
      location: 'South America',
      description: 'Largest tropical rainforest with unparalleled biodiversity.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
      size: '5.5 million km²',
      species: '10% of Earth\'s',
      canopy: '30-40 meters'
    },
    {
      id: 2,
      name: 'Sagano Bamboo Grove',
      location: 'Japan',
      description: 'Dense bamboo forest creating a serene tunnel effect.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: '16 km²',
      species: 'Moso Bamboo',
      canopy: '15-20 meters'
    },
    {
      id: 3,
      name: 'Redwood National Park',
      location: 'California, USA',
      description: 'Home to Earth\'s tallest trees reaching over 300 feet.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '139,000 acres',
      species: 'Coast Redwoods',
      canopy: '60-80 meters'
    },
    {
      id: 4,
      name: 'Tsingy de Bemaraha',
      location: 'Madagascar',
      description: 'UNESCO site with limestone pinnacles supporting unique flora.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: '72,300 ha',
      species: 'Endemic plants',
      canopy: 'Variable'
    }
  ]

  return (
    <div className="living-landscapes">
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
            Living Landscapes
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Immerse yourself in Earth's most vibrant ecosystems, where life flourishes in extraordinary abundance and diversity.
          </motion.p>
        </div>
      </motion.div>

      <div className="landscapes-grid">
        {landscapes.map((landscape, index) => (
          <motion.div
            key={landscape.id}
            className="landscape-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="landscape-image-container">
              <div 
                className="landscape-image"
                style={{ backgroundImage: `url('${landscape.image}')` }}
              />
            </div>
            <div className="landscape-content">
              <h3>{landscape.name}</h3>
              <div className="location">{landscape.location}</div>
              <p className="description">{landscape.description}</p>
              <div className="landscape-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{landscape.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Species:</span>
                  <span className="detail-value">{landscape.species}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Canopy Height:</span>
                  <span className="detail-value">{landscape.canopy}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="landscapes-info">
        <div className="info-content">
          <h2>Ecosystems in Harmony</h2>
          <p>
            Living landscapes represent the pinnacle of biological complexity and interdependence. 
            These environments showcase the intricate relationships between countless species, from 
            microscopic organisms to towering trees, all working together to create self-sustaining 
            systems of remarkable resilience and productivity.
          </p>
          <p>
            The biodiversity found in these landscapes drives evolutionary innovation and provides 
            critical ecosystem services such as carbon sequestration, water purification, and climate 
            regulation. Protecting these living systems is essential for maintaining planetary health 
            and ensuring the survival of countless species, including our own.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LivingLandscapes