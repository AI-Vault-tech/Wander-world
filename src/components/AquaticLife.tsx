import { motion } from 'framer-motion'
import './AquaticLife.css'

const AquaticLife = () => {
  const creatures = [
    {
      id: 1,
      name: 'Clownfish',
      scientificName: 'Amphiprioninae',
      description: 'Bright orange fish with white stripes, famous for their symbiotic relationship with sea anemones.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '10-15 cm',
      habitat: 'Coral reefs, Indo-Pacific',
      conservation: 'Least Concern'
    },
    {
      id: 2,
      name: 'Jellyfish',
      scientificName: 'Scyphozoa',
      description: 'Ancient marine animals with gelatinous bodies and trailing tentacles for capturing prey.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: '2-200 cm',
      habitat: 'Oceans worldwide',
      conservation: 'Varies by species'
    },
    {
      id: 3,
      name: 'Blue Whale',
      scientificName: 'Balaenoptera musculus',
      description: 'The largest animal ever known to have lived on Earth, even larger than dinosaurs.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 30 meters',
      habitat: 'Oceans worldwide',
      conservation: 'Endangered'
    },
    {
      id: 4,
      name: 'Sea Turtle',
      scientificName: 'Chelonioidea',
      description: 'Ancient reptiles that have been navigating oceans for over 100 million years.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '60-200 cm',
      habitat: 'Tropical oceans',
      conservation: 'Varies by species'
    }
  ]

  return (
    <div className="aquatic-life">
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
            Aquatic Life
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Marine and freshwater creatures, from coral reefs to deep-sea oddities
          </motion.p>
        </div>
      </motion.div>

      <div className="creatures-grid">
        {creatures.map((creature, index) => (
          <motion.div
            key={creature.id}
            className="creature-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="creature-image-container">
              <div 
                className="creature-image"
                style={{ backgroundImage: `url('${creature.image}')` }}
              />
            </div>
            <div className="creature-content">
              <h3>{creature.name}</h3>
              <div className="scientific-name">{creature.scientificName}</div>
              <p className="description">{creature.description}</p>
              <div className="creature-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{creature.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{creature.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Conservation:</span>
                  <span className="detail-value conservation">{creature.conservation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="creatures-info">
        <div className="info-content">
          <h2>Oceanic Treasures</h2>
          <p>
            Aquatic life represents the majority of life on Earth, with oceans covering over 70% of our planet's surface. 
            These creatures have evolved to thrive in one of the most challenging environments on Earth, where pressure, 
            temperature, and salinity vary dramatically with depth.
          </p>
          <p>
            From the shallow coral reefs teeming with colorful fish to the abyssal depths where bioluminescent creatures 
            create their own light, aquatic ecosystems showcase an incredible diversity of life forms. Many of these 
            species have remained virtually unchanged for millions of years, making them living fossils of our planet's history.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AquaticLife