import { motion } from 'framer-motion'
import './AncientSpecies.css'

const AncientSpecies = () => {
  const species = [
    {
      id: 1,
      name: 'Coelacanth',
      scientificName: 'Latimeria',
      description: 'Ancient fish thought to be extinct for 66 million years until rediscovered in 1938.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: '150-200 cm',
      habitat: 'Deep ocean, near volcanic islands',
      conservation: 'Critically Endangered'
    },
    {
      id: 2,
      name: 'Horseshoe Crab',
      scientificName: 'Limulidae',
      description: 'Marine arthropods that have remained virtually unchanged for over 450 million years.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '30-60 cm',
      habitat: 'Shallow coastal waters, estuaries',
      conservation: 'Vulnerable'
    },
    {
      id: 3,
      name: 'Tuatara',
      scientificName: 'Sphenodon',
      description: 'Reptile endemic to New Zealand, the last surviving member of an ancient lineage.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '30-40 cm',
      habitat: 'Coastal forests, rocky areas',
      conservation: 'Endangered'
    },
    {
      id: 4,
      name: 'Ginkgo Tree',
      scientificName: 'Ginkgo biloba',
      description: 'Living fossil tree species that has existed for over 270 million years.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: '20-35 meters',
      habitat: 'Temperate regions, cultivated',
      conservation: 'Least Concern'
    }
  ]

  return (
    <div className="ancient-species">
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
            Ancient Species
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Living fossils, endangered species, and prehistoric descendants
          </motion.p>
        </div>
      </motion.div>

      <div className="species-grid">
        {species.map((specie, index) => (
          <motion.div
            key={specie.id}
            className="specie-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="specie-image-container">
              <div 
                className="specie-image"
                style={{ backgroundImage: `url('${specie.image}')` }}
              />
            </div>
            <div className="specie-content">
              <h3>{specie.name}</h3>
              <div className="scientific-name">{specie.scientificName}</div>
              <p className="description">{specie.description}</p>
              <div className="specie-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{specie.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{specie.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Conservation:</span>
                  <span className="detail-value conservation">{specie.conservation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="species-info">
        <div className="info-content">
          <h2>Windows to the Past</h2>
          <p>
            Ancient species are living links to Earth's distant past, having survived mass extinctions 
            and environmental changes that eliminated countless other lineages. These remarkable creatures 
            offer scientists invaluable insights into evolutionary processes and the history of life on our planet.
          </p>
          <p>
            Many of these species have remained virtually unchanged for millions of years, earning them 
            the title of "living fossils." Their persistence through geological time speaks to their 
            remarkable adaptability and the stability of their ecological niches. Protecting these species 
            is crucial for preserving the biological diversity that tells the story of life's evolution.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AncientSpecies