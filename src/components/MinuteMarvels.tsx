import { motion } from 'framer-motion'
import './MinuteMarvels.css'

const MinuteMarvels = () => {
  const marvels = [
    {
      id: 1,
      name: 'Snowflake Patterns',
      description: 'Each snowflake is a unique crystalline structure formed as water vapor freezes in the atmosphere, creating intricate six-sided symmetrical patterns.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      scale: 'Millimeters',
      fact: 'No two snowflakes are exactly alike'
    },
    {
      id: 2,
      name: 'Sand Dunes',
      location: 'Namibia',
      description: 'The towering red dunes of Sossusvlei reach heights of over 1,000 feet, formed by millions of years of wind erosion and deposition.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      scale: 'Meters',
      fact: 'Some dunes are over 5 million years old'
    },
    {
      id: 3,
      name: 'Microscopic Diatoms',
      description: 'These single-celled algae create intricate glass-like shells with patterns more complex than any human-made structure of similar size.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
      scale: 'Micrometers',
      fact: 'Produce 20-30% of Earth\'s oxygen'
    },
    {
      id: 4,
      name: 'Moiré Patterns',
      description: 'The interference patterns created when two grids or textures overlap, producing beautiful wave-like visual effects.',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
      scale: 'Variable',
      fact: 'Used in anti-counterfeiting technology'
    },
    {
      id: 5,
      name: 'Soap Bubble Films',
      description: 'Ultra-thin layers of soapy water create iridescent colors through light interference, forming perfect spheres with minimal surface area.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      scale: 'Nanometers',
      fact: 'Demonstrate minimal surface mathematics'
    },
    {
      id: 6,
      name: 'Fracture Patterns',
      description: 'The beautiful crack patterns that form in dried mud, glass, or paint reveal the physics of material stress and expansion.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      scale: 'Centimeters to meters',
      fact: 'Follow mathematical principles of fracture mechanics'
    }
  ]

  return (
    <div className="minute-marvels">
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
            Minute Marvels
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            The breathtaking beauty of the infinitesimally small, where nature's most intricate patterns reveal themselves under closer inspection.
          </motion.p>
        </div>
      </motion.div>

      <section className="marvels-grid">
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
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${marvel.image}')` }}
              />
            </div>
            <div className="marvel-content">
              <h3>{marvel.name}</h3>
              {marvel.location && <p className="location">{marvel.location}</p>}
              <p className="description">{marvel.description}</p>
              <div className="marvel-details">
                <div className="detail-item">
                  <span className="detail-label">Scale:</span>
                  <span className="detail-value">{marvel.scale}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{marvel.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="marvels-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Wonder of the Small</h2>
          <p>
            In the realm of the minute, beauty exists at scales beyond our everyday perception. 
            These tiny marvels demonstrate that complexity and elegance are not dependent on size, 
            but on the precision of natural processes.
          </p>
          <p>
            From the ephemeral patterns of soap bubbles to the ancient formations of desert sand, 
            these small-scale wonders reveal the mathematical principles and physical forces that 
            shape our world at every level. They invite us to look closer, to discover the extraordinary 
            hidden in the ordinary.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default MinuteMarvels