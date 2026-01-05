import { motion } from 'framer-motion'
import './AerialWonders.css'

const AerialWonders = () => {
  const wonders = [
    {
      id: 1,
      name: 'Bald Eagle',
      scientificName: 'Haliaeetus leucocephalus',
      description: 'Majestic bird of prey and national symbol of the United States with powerful flight and keen eyesight.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '70-100 cm',
      wingspan: '1.8-2.3 meters',
      habitat: 'Near large bodies of water',
      conservation: 'Least Concern'
    },
    {
      id: 2,
      name: 'Monarch Butterfly',
      scientificName: 'Danaus plexippus',
      description: 'Known for its spectacular multi-generational migration across North America.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: '8-10 cm wingspan',
      wingspan: '8-10 cm',
      habitat: 'Meadows, gardens, forests',
      conservation: 'Endangered'
    },
    {
      id: 3,
      name: 'Albatross',
      scientificName: 'Diomedeidae',
      description: 'Seabird with the largest wingspan of any flying bird, capable of gliding for hours without flapping.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '80-120 cm',
      wingspan: '2.5-3.5 meters',
      habitat: 'Southern Ocean, Pacific',
      conservation: 'Vulnerable'
    },
    {
      id: 4,
      name: 'Dragonfly',
      scientificName: 'Anisoptera',
      description: 'Ancient insect with four wings that can fly in any direction, including backwards and hovering.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '2-12 cm',
      wingspan: '2-18 cm',
      habitat: 'Near water bodies',
      conservation: 'Varies by species'
    }
  ]

  return (
    <div className="aerial-wonders">
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
            Aerial Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Birds, flying insects, bats, and the beauty of flight
          </motion.p>
        </div>
      </motion.div>

      <div className="wonders-grid">
        {wonders.map((wonder, index) => (
          <motion.div
            key={wonder.id}
            className="wonder-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="wonder-image-container">
              <div 
                className="wonder-image"
                style={{ backgroundImage: `url('${wonder.image}')` }}
              />
            </div>
            <div className="wonder-content">
              <h3>{wonder.name}</h3>
              <div className="scientific-name">{wonder.scientificName}</div>
              <p className="description">{wonder.description}</p>
              <div className="wonder-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{wonder.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Wingspan:</span>
                  <span className="detail-value">{wonder.wingspan}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{wonder.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Conservation:</span>
                  <span className="detail-value conservation">{wonder.conservation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="wonders-info">
        <div className="info-content">
          <h2>Masters of the Sky</h2>
          <p>
            Aerial wonders showcase the incredible diversity of flight in the natural world. From the 
            powerful soar of eagles to the delicate flutter of butterflies, these creatures have evolved 
            remarkable adaptations that allow them to conquer the third dimension.
          </p>
          <p>
            Flight represents one of nature's most energy-intensive activities, yet these aerial masters 
            have perfected it through millions of years of evolution. Their ability to navigate three-dimensional 
            space with precision and grace continues to inspire human innovation in aviation and robotics.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AerialWonders