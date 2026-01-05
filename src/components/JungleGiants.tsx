import { motion } from 'framer-motion'
import './JungleGiants.css'

const JungleGiants = () => {
  const creatures = [
    {
      id: 1,
      name: 'African Elephant',
      scientificName: 'Loxodonta africana',
      description: 'The largest land mammal, known for its intelligence and complex social structures.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 4 meters tall',
      weight: 'Up to 7 tons',
      habitat: 'Savannas, forests, deserts',
      conservation: 'Critically Endangered'
    },
    {
      id: 2,
      name: 'Mountain Gorilla',
      scientificName: 'Gorilla beringei beringei',
      description: 'Largest living primate, known for its gentle nature and complex social groups.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: 'Up to 1.8 meters tall',
      weight: 'Up to 220 kg',
      habitat: 'Mountain forests',
      conservation: 'Critically Endangered'
    },
    {
      id: 3,
      name: 'Jaguar',
      scientificName: 'Panthera onca',
      description: 'Largest cat in the Americas with powerful bite force and excellent swimming ability.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 1.8 meters long',
      weight: '56-96 kg',
      habitat: 'Tropical and subtropical forests',
      conservation: 'Near Threatened'
    },
    {
      id: 4,
      name: 'Green Anaconda',
      scientificName: 'Eunectes murinus',
      description: 'Heaviest snake species, capable of reaching lengths over 9 meters and weighing up to 250 kg.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: 'Up to 9 meters long',
      weight: 'Up to 250 kg',
      habitat: 'Swamps, marshes, rivers',
      conservation: 'Least Concern'
    }
  ]

  return (
    <div className="jungle-giants">
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
            Jungle Giants
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Massive creatures that inhabit the world's dense rainforests
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
          <h2>Titans of the Tropical Realm</h2>
          <p>
            Jungle giants command respect not only for their impressive size but also for their 
            crucial roles in maintaining the delicate balance of rainforest ecosystems. These 
            magnificent creatures serve as seed dispersers, habitat creators, and keystone 
            species that shape the very landscape around them.
          </p>
          <p>
            Many jungle giants face severe threats from habitat destruction, poaching, and 
            climate change. Their protection is essential not just for preserving individual 
            species but for safeguarding the incredibly diverse ecosystems they inhabit, 
            which are home to more than half of the world's terrestrial species.
          </p>
        </div>
      </div>
    </div>
  )
}

export default JungleGiants