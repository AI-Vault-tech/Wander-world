import { motion } from 'framer-motion'
import './MajesticBeasts.css'

const MajesticBeasts = () => {
  const beasts = [
    {
      id: 1,
      name: 'African Elephant',
      scientificName: 'Loxodonta africana',
      description: 'The largest land mammal, known for its intelligence and complex social structures.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: 'Up to 4 meters tall',
      weight: 'Up to 7 tons',
      habitat: 'Savannas, forests, deserts',
      conservation: 'Critically Endangered'
    },
    {
      id: 2,
      name: 'Blue Whale',
      scientificName: 'Balaenoptera musculus',
      description: 'The largest animal ever known to have lived on Earth, even larger than dinosaurs.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: 'Up to 30 meters long',
      weight: 'Up to 200 tons',
      habitat: 'Oceans worldwide',
      conservation: 'Endangered'
    },
    {
      id: 3,
      name: 'Siberian Tiger',
      scientificName: 'Panthera tigris altaica',
      description: 'The largest cat species, with powerful build and distinctive orange coat with black stripes.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Up to 3.3 meters long',
      weight: 'Up to 300 kg',
      habitat: 'Temperate forests',
      conservation: 'Endangered'
    },
    {
      id: 4,
      name: 'Mountain Gorilla',
      scientificName: 'Gorilla beringei beringei',
      description: 'Largest living primate, known for its gentle nature and complex social groups.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: 'Up to 1.8 meters tall',
      weight: 'Up to 220 kg',
      habitat: 'Mountain forests',
      conservation: 'Critically Endangered'
    }
  ]

  return (
    <div className="majestic-beasts">
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
            Majestic Beasts
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Large mammals, apex predators, iconic terrestrial and marine wildlife
          </motion.p>
        </div>
      </motion.div>

      <div className="beasts-grid">
        {beasts.map((beast, index) => (
          <motion.div
            key={beast.id}
            className="beast-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="beast-image-container">
              <div 
                className="beast-image"
                style={{ backgroundImage: `url('${beast.image}')` }}
              />
            </div>
            <div className="beast-content">
              <h3>{beast.name}</h3>
              <div className="scientific-name">{beast.scientificName}</div>
              <p className="description">{beast.description}</p>
              <div className="beast-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{beast.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Weight:</span>
                  <span className="detail-value">{beast.weight}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{beast.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Conservation:</span>
                  <span className="detail-value conservation">{beast.conservation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="beasts-info">
        <div className="info-content">
          <h2>Giants of the Natural World</h2>
          <p>
            Majestic beasts represent the pinnacle of evolutionary adaptation, with their massive size 
            and powerful presence commanding respect and awe. These creatures often serve as keystone 
            species in their ecosystems, playing crucial roles in maintaining environmental balance.
          </p>
          <p>
            Despite their grandeur, many of these magnificent animals face significant threats from 
            habitat loss, climate change, and human encroachment. Their conservation is not just about 
            preserving individual species but protecting entire ecosystems that depend on their presence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MajesticBeasts