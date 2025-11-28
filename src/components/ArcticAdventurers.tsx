import { motion } from 'framer-motion'
import './ArcticAdventurers.css'

const ArcticAdventurers = () => {
  const creatures = [
    {
      id: 1,
      name: 'Polar Bear',
      scientificName: 'Ursus maritimus',
      description: 'Largest land carnivore with thick fur and fat layers for insulation in Arctic conditions.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 2.5 meters long',
      weight: '350-700 kg',
      habitat: 'Arctic sea ice and coastal areas',
      conservation: 'Vulnerable'
    },
    {
      id: 2,
      name: 'Arctic Fox',
      scientificName: 'Vulpes lagopus',
      description: 'Small fox with thick fur that changes color with seasons for camouflage.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 115 cm long',
      weight: '3-8 kg',
      habitat: 'Arctic tundra',
      conservation: 'Least Concern'
    },
    {
      id: 3,
      name: 'Walrus',
      scientificName: 'Odobenus rosmarus',
      description: 'Large marine mammal with distinctive tusks used for hauling out and defense.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: 'Up to 3.5 meters long',
      weight: '800-1700 kg',
      habitat: 'Arctic and subarctic waters',
      conservation: 'Vulnerable'
    },
    {
      id: 4,
      name: 'Snowy Owl',
      scientificName: 'Bubo scandiacus',
      description: 'Large, white owl with exceptional hearing and vision for hunting in low light.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: 'Up to 71 cm tall',
      weight: '1.6-3 kg',
      habitat: 'Arctic tundra',
      conservation: 'Vulnerable'
    }
  ]

  return (
    <div className="arctic-adventurers">
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
            Arctic Adventurers
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Animals that call the frozen polar regions their home
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
          <h2>Denizens of the Deep Freeze</h2>
          <p>
            Arctic adventurers have mastered one of Earth's most inhospitable environments through 
            remarkable evolutionary adaptations. These creatures possess specialized features like 
            insulating blubber, dense fur, and compact body shapes that minimize heat loss in 
            subzero temperatures.
          </p>
          <p>
            As climate change alters their icy habitat, these resilient animals face unprecedented 
            challenges. Their survival depends not only on their own adaptive capabilities but also 
            on global efforts to preserve the fragile polar ecosystems they call home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArcticAdventurers