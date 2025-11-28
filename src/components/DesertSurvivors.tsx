import { motion } from 'framer-motion'
import './DesertSurvivors.css'

const DesertSurvivors = () => {
  const creatures = [
    {
      id: 1,
      name: 'Fennec Fox',
      scientificName: 'Vulpes zerda',
      description: 'The smallest fox species with distinctive large ears that help dissipate heat and locate prey underground.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 40 cm tall',
      weight: '1-1.5 kg',
      habitat: 'Sahara Desert and other North African deserts',
      conservation: 'Least Concern'
    },
    {
      id: 2,
      name: 'Camel Spider',
      scientificName: 'Solifugae',
      description: 'Fast-moving arachnid with powerful jaws, despite myths, not actually a spider and not venomous.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: 'Up to 15 cm leg span',
      weight: '20-50 grams',
      habitat: 'Deserts of Middle East, North Africa, and Southwest US',
      conservation: 'Not Evaluated'
    },
    {
      id: 3,
      name: 'Gila Monster',
      scientificName: 'Heloderma suspectum',
      description: 'One of only two venomous lizard species, with distinctive bead-like scales and bright warning colors.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 50 cm long',
      weight: '350-700 grams',
      habitat: 'Sonoran and Mojave Deserts',
      conservation: 'Near Threatened'
    },
    {
      id: 4,
      name: 'Sand Cat',
      scientificName: 'Felis margarita',
      description: 'True desert specialist with fur-covered feet that protect against hot sand and allow silent movement.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '39-52 cm body length',
      weight: '1.5-3.4 kg',
      habitat: 'Deserts of North Africa and Southwest Asia',
      conservation: 'Near Threatened'
    }
  ]

  return (
    <div className="desert-survivors">
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
            Desert Survivors
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Creatures that have adapted to thrive in the harshest desert environments
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
          <h2>Masters of Aridity</h2>
          <p>
            Desert survivors represent some of nature's most ingenious adaptations to extreme conditions. 
            These remarkable creatures have evolved specialized physiological and behavioral traits that 
            allow them to conserve water, regulate body temperature, and find sustenance in environments 
            where most life would perish.
          </p>
          <p>
            From the fennec fox's oversized ears that radiate excess heat to the sand cat's fur-covered 
            feet that protect against scorching sand, each adaptation tells a story of evolutionary 
            ingenuity. These animals demonstrate that life not only persists in harsh conditions but 
            can flourish with the right toolkit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesertSurvivors