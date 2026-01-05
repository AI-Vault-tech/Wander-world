import { motion } from 'framer-motion'
import './ColorfulBeings.css'

const ColorfulBeings = () => {
  const beings = [
    {
      id: 1,
      name: 'Peacock',
      scientificName: 'Pavo cristatus',
      description: 'Known for its iridescent tail feathers with distinctive eye-shaped markings.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: '80-120 cm',
      habitat: 'Forests, grasslands, India',
      conservation: 'Least Concern'
    },
    {
      id: 2,
      name: 'Mandarinfish',
      scientificName: 'Synchiropus splendidus',
      description: 'Small, vibrant marine fish with intricate patterns and electric blue, orange, and green colors.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '5-6 cm',
      habitat: 'Coral reefs, Pacific Ocean',
      conservation: 'Least Concern'
    },
    {
      id: 3,
      name: 'Poison Dart Frog',
      scientificName: 'Dendrobatidae',
      description: 'Small, brightly colored frogs with toxic skin secretions and striking patterns.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: '1-6 cm',
      habitat: 'Tropical rainforests, Central/South America',
      conservation: 'Varies by species'
    },
    {
      id: 4,
      name: 'Flamingo',
      scientificName: 'Phoenicopterus',
      description: 'Wading birds with distinctive pink plumage derived from their diet of shrimp and algae.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '120-150 cm',
      habitat: 'Shallow lakes, salt flats',
      conservation: 'Least Concern'
    }
  ]

  return (
    <div className="colorful-beings">
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
            Colorful Beings
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            The most vibrant, patterned, and camouflaged creatures
          </motion.p>
        </div>
      </motion.div>

      <div className="beings-grid">
        {beings.map((being, index) => (
          <motion.div
            key={being.id}
            className="being-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="being-image-container">
              <div 
                className="being-image"
                style={{ backgroundImage: `url('${being.image}')` }}
              />
            </div>
            <div className="being-content">
              <h3>{being.name}</h3>
              <div className="scientific-name">{being.scientificName}</div>
              <p className="description">{being.description}</p>
              <div className="being-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{being.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Habitat:</span>
                  <span className="detail-value">{being.habitat}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Conservation:</span>
                  <span className="detail-value conservation">{being.conservation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="beings-info">
        <div className="info-content">
          <h2>Nature's Palette</h2>
          <p>
            Colorful beings showcase the incredible diversity of pigments and structural colors in the natural world. 
            These creatures use their vibrant appearances for various purposes, from attracting mates to warning predators 
            of their toxicity, or camouflaging themselves in colorful environments.
          </p>
          <p>
            The brilliant hues found in these animals often result from complex evolutionary adaptations. Some colors 
            come from dietary pigments, while others are structural, created by microscopic patterns that refract light. 
            These natural works of art demonstrate that beauty and function can be perfectly intertwined.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ColorfulBeings