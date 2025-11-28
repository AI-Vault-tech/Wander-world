import { motion } from 'framer-motion'
import './NightHunters.css'

const NightHunters = () => {
  const creatures = [
    {
      id: 1,
      name: 'Snow Leopard',
      scientificName: 'Panthera uncia',
      description: 'Elusive big cat with thick fur and large paws adapted for rocky, mountainous terrain.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: 'Up to 1.3 meters long',
      weight: '25-55 kg',
      habitat: 'High mountain ranges of Central and South Asia',
      conservation: 'Vulnerable'
    },
    {
      id: 2,
      name: 'Owl',
      scientificName: 'Strigiformes',
      description: 'Nocturnal birds of prey with exceptional night vision and silent flight capabilities.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 70 cm tall',
      weight: '0.03-4 kg',
      habitat: 'Forests, grasslands, deserts worldwide',
      conservation: 'Varies by species'
    },
    {
      id: 3,
      name: 'Leopard',
      scientificName: 'Panthera pardus',
      description: 'Adaptable big cat known for its strength, stealth, and ability to climb trees.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 1.9 meters long',
      weight: '30-90 kg',
      habitat: 'Sub-Saharan Africa, parts of Asia',
      conservation: 'Vulnerable'
    },
    {
      id: 4,
      name: 'Bat',
      scientificName: 'Chiroptera',
      description: 'Only mammals capable of sustained flight, using echolocation for navigation and hunting.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: 'Up to 40 cm wingspan',
      weight: '2-1600 grams',
      habitat: 'Caves, forests, urban areas worldwide',
      conservation: 'Varies by species'
    }
  ]

  return (
    <div className="night-hunters">
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
            Night Hunters
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Nocturnal predators with incredible hunting abilities
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
          <h2>Shadow Stalkers</h2>
          <p>
            Night hunters have evolved extraordinary adaptations that allow them to thrive in 
            darkness. Enhanced senses, specialized anatomy, and refined hunting strategies 
            make these creatures supremely efficient predators during the night hours when 
            most prey animals are vulnerable.
          </p>
          <p>
            These nocturnal specialists play vital roles in their ecosystems by controlling 
            prey populations and maintaining ecological balance. Their mysterious nature 
            and elusive behaviors have captivated humans for millennia, inspiring countless 
            myths and legends across cultures.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NightHunters