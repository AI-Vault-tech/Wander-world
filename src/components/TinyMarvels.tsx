import { motion } from 'framer-motion'
import './TinyMarvels.css'

const TinyMarvels = () => {
  const marvels = [
    {
      id: 1,
      name: 'Hummingbird',
      scientificName: 'Trochilidae',
      description: 'The smallest bird species, capable of hovering flight and beating wings up to 80 times per second.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: '5-10 cm',
      weight: '2-20 grams',
      habitat: 'Americas, gardens, forests',
      conservation: 'Varies by species'
    },
    {
      id: 2,
      name: 'Butterfly',
      scientificName: 'Lepidoptera',
      description: 'Insects with large, often colorful wings that undergo complete metamorphosis.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '2-30 cm wingspan',
      weight: '0.5-3 grams',
      habitat: 'Worldwide, meadows, gardens',
      conservation: 'Varies by species'
    },
    {
      id: 3,
      name: 'Seahorse',
      scientificName: 'Hippocampus',
      description: 'Marine fish with a horse-like head, prehensile tail, and unique male pregnancy.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '1.5-35 cm',
      weight: '1-25 grams',
      habitat: 'Shallow tropical waters',
      conservation: 'Vulnerable'
    },
    {
      id: 4,
      name: 'Fairyfly',
      scientificName: 'Mymaridae',
      description: 'Tiny wasps that are among the smallest insects in the world.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '0.139-15 mm',
      weight: '0.0001-0.001 grams',
      habitat: 'Worldwide, forests, gardens',
      conservation: 'Least Concern'
    }
  ]

  return (
    <div className="tiny-marvels">
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
            Tiny Marvels
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Insects, microorganisms, small amphibians, and reptiles
          </motion.p>
        </div>
      </motion.div>

      <div className="marvels-grid">
        {marvels.map((marvel, index) => (
          <motion.div
            key={marvel.id}
            className="marvel-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="marvel-image-container">
              <div 
                className="marvel-image"
                style={{ backgroundImage: `url('${marvel.image}')` }}
              />
            </div>
            <div className="marvel-content">
              <h3>{marvel.name}</h3>
              <div className="scientific-name">{marvel.scientificName}</div>
              <p className="description">{marvel.description}</p>
              <div className="marvel-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{marvel.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Weight:</span>
                  <span className="detail-value">{marvel.weight}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{marvel.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Conservation:</span>
                  <span className="detail-value conservation">{marvel.conservation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="marvels-info">
        <div className="info-content">
          <h2>Small Wonders, Big Impact</h2>
          <p>
            Tiny marvels demonstrate that size is no indicator of significance. These miniature creatures 
            often possess extraordinary abilities that larger animals cannot match, from the hummingbird's 
            aerial acrobatics to the butterfly's metamorphosis.
          </p>
          <p>
            Despite their small stature, these creatures play vital roles in ecosystems as pollinators, 
            decomposers, and prey for larger species. Their diminutive size often allows them to occupy 
            ecological niches that would be impossible for larger animals to access.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TinyMarvels