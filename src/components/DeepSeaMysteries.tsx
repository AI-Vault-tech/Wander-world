import { motion } from 'framer-motion'
import './DeepSeaMysteries.css'

const DeepSeaMysteries = () => {
  const creatures = [
    {
      id: 1,
      name: 'Giant Squid',
      scientificName: 'Architeuthis dux',
      description: 'Legendary deep-sea cephalopod with enormous eyes and long tentacles, rarely seen by humans.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: 'Up to 13 meters long',
      weight: 'Up to 275 kg',
      habitat: 'Deep ocean waters worldwide',
      conservation: 'Data Deficient'
    },
    {
      id: 2,
      name: 'Anglerfish',
      scientificName: 'Melanocetus johnsonii',
      description: 'Deep-sea predator with bioluminescent lure to attract prey in pitch-black waters.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 30 cm long',
      weight: 'Up to 2 kg',
      habitat: 'Bathypelagic zone of oceans',
      conservation: 'Least Concern'
    },
    {
      id: 3,
      name: 'Gulper Eel',
      scientificName: 'Eurypharynx pelecanoides',
      description: 'Deep-sea fish with enormous mouth and stomach, able to consume prey larger than itself.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 2 meters long',
      weight: 'Up to 5 kg',
      habitat: 'Mesopelagic to bathypelagic zones',
      conservation: 'Least Concern'
    },
    {
      id: 4,
      name: 'Vampire Squid',
      scientificName: 'Vampyroteusis infernalis',
      description: 'Unique cephalopod with webbed arms and bioluminescent capabilities, neither true squid nor octopus.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: 'Up to 30 cm long',
      weight: 'Up to 500 grams',
      habitat: 'Oxygen minimum zones of oceans',
      conservation: 'Least Concern'
    }
  ]

  return (
    <div className="deep-sea-mysteries">
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
            Deep Sea Mysteries
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Enigmatic creatures that dwell in the darkest depths of the ocean
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
                  <span className="detail-label">Weight:</span>
                  <span className="detail-value">{creature.weight}</span>
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
          <h2>Aliens of the Abyss</h2>
          <p>
            The deep sea remains Earth's final frontier, a realm of perpetual darkness where 
            pressure exceeds 1,000 times that at sea level. Creatures here have evolved 
            extraordinary adaptations: bioluminescence for communication and hunting, 
            elongated bodies to withstand crushing depths, and specialized feeding strategies 
            to survive in an environment where food is scarce.
          </p>
          <p>
            With less than 5% of the ocean explored, new species are discovered with nearly 
            every deep-sea expedition. These mysterious inhabitants challenge our understanding 
            of life's limits and offer insights into how organisms might survive in extreme 
            environments elsewhere in the universe.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DeepSeaMysteries