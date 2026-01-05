import { motion } from 'framer-motion'
import './Caves.css'

const Caves = () => {
  const caves = [
    {
      id: 1,
      name: 'Son Doong Cave',
      location: 'Vietnam',
      description: 'The world\'s largest cave with its own jungle, river, and climate system. Large enough to fit a 40-story skyscraper inside.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '5.5 miles long',
      fact: 'Has its own clouds and rainforest ecosystem'
    },
    {
      id: 2,
      name: 'Mammoth Cave',
      location: 'Kentucky, USA',
      description: 'The world\'s longest known cave system with over 400 miles of explored passages and unique underground wildlife.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '400+ miles',
      fact: 'Home to the endangered Kentucky cave shrimp'
    },
    {
      id: 3,
      name: 'Waitomo Glowworm Caves',
      location: 'New Zealand',
      description: 'Ancient limestone caverns illuminated by thousands of bioluminescent glowworms creating a starlit underground sky.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '1,200 feet deep',
      fact: 'Glowworms are actually fly larvae that produce light to attract prey'
    },
    {
      id: 4,
      name: 'Eisriesenwelt Ice Cave',
      location: 'Austria',
      description: 'The world\'s largest ice cave with spectacular ice formations, frozen waterfalls, and crystal-clear ice sculptures.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '26 miles long',
      fact: 'Name means "World of Ice Giants" in German'
    },
    {
      id: 5,
      name: 'Cueva de los Cristales',
      location: 'Mexico',
      description: 'A cave filled with enormous selenite crystals, some measuring up to 39 feet long and weighing 55 tons.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: 'Deep underground',
      fact: 'Temperature reaches 136°F with 90-99% humidity'
    },
    {
      id: 6,
      name: 'Blue Grotto',
      location: 'Capri, Italy',
      description: 'A sea cave famous for its brilliant blue water created by sunlight passing through an underwater cavity.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '197 feet long',
      fact: 'Water appears blue due to the reflection of light off the white sand bottom'
    }
  ]

  return (
    <div className="caves">
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
            Underground Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Descend into the hidden world beneath our feet, where geological marvels and unique ecosystems thrive in darkness.
          </motion.p>
        </div>
      </motion.div>

      <section className="caves-grid">
        {caves.map((cave, index) => (
          <motion.div
            key={cave.id}
            className="cave-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="cave-image-container">
              <div 
                className="cave-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${cave.image}')` }}
              />
            </div>
            <div className="cave-content">
              <h3>{cave.name}</h3>
              <p className="location">{cave.location}</p>
              <p className="description">{cave.description}</p>
              <div className="cave-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{cave.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{cave.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="caves-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Hidden Depths</h2>
          <p>
            Caves are nature's secret galleries, carved over millennia by water, wind, and geological forces. 
            These underground realms harbor unique ecosystems, stunning mineral formations, and reveal the 
            Earth's geological history in layers of rock and crystal.
          </p>
          <p>
            From the bioluminescent glowworms of New Zealand to the massive crystals of Mexico, caves showcase 
            the incredible diversity of life and geology that exists beyond our everyday view. They are places 
            of mystery, scientific discovery, and profound beauty.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Caves