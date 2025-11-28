import { motion } from 'framer-motion'
import './CamouflageMasters.css'

const CamouflageMasters = () => {
  const creatures = [
    {
      id: 1,
      name: 'Leaf-Tailed Gecko',
      scientificName: 'Uroplatus phantasticus',
      description: 'Master of disguise with skin flaps that help it blend seamlessly with tree bark.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: 'Up to 10 cm long',
      weight: '5-10 grams',
      habitat: 'Madagascar rainforests',
      conservation: 'Endangered'
    },
    {
      id: 2,
      name: 'Cuttlefish',
      scientificName: 'Sepia officinalis',
      description: 'Can change color and texture in milliseconds to match surroundings perfectly.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: 'Up to 50 cm long',
      weight: '5-10 kg',
      habitat: 'Shallow coastal waters',
      conservation: 'Least Concern'
    },
    {
      id: 3,
      name: 'Pygmy Seahorse',
      scientificName: 'Hippocampus bargibanti',
      description: 'So well-camouflaged it was discovered by accident, matching coral polyps exactly.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 2.4 cm long',
      weight: '0.07 grams',
      habitat: 'Coral reefs of Indonesia',
      conservation: 'Data Deficient'
    },
    {
      id: 4,
      name: 'Ghost Mantis',
      scientificName: 'Phyllocrania paradoxa',
      description: 'Translucent insect that mimics dead leaves with incredible precision.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: 'Up to 5 cm long',
      weight: '0.5-1 gram',
      habitat: 'Dry forests of Africa',
      conservation: 'Least Concern'
    }
  ]

  return (
    <div className="camouflage-masters">
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
            Camouflage Masters
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Animals with extraordinary abilities to blend into their surroundings
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
          <h2>Nature's Ultimate Illusionists</h2>
          <p>
            Camouflage masters represent some of evolution's most sophisticated solutions to survival. 
            Through millions of years of adaptation, these creatures have developed the ability to become 
            virtually invisible, transforming themselves into living art that defies detection.
          </p>
          <p>
            From the cuttlefish's rapid color-changing abilities to the leaf-tailed gecko's skin flaps 
            that mimic bark texture, these animals demonstrate that sometimes the best defense is becoming 
            indistinguishable from the environment itself. Their mastery of disguise serves not only to 
            evade predators but also to ambush prey with deadly precision.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CamouflageMasters