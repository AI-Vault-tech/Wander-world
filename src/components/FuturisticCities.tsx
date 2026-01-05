import { motion } from 'framer-motion'
import './FuturisticCities.css'

const FuturisticCities = () => {
  const cities = [
    {
      id: 1,
      name: 'Neom City',
      location: 'Saudi Arabia',
      description: 'A planned cross-border city envisioned as a hub for innovation, powered entirely by renewable energy with flying taxis and robot butlers.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      population: 'Projected 9 million',
      fact: 'Includes a 170km-long mirror-lined structure called "The Line"'
    },
    {
      id: 2,
      name: 'Singapore',
      location: 'Singapore',
      description: 'A global leader in smart city technology with extensive green architecture, autonomous vehicles, and integrated digital services.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      population: '5.8 million',
      fact: 'Named world\'s most technology-ready city by IMD'
    },
    {
      id: 3,
      name: 'Tokyo',
      location: 'Japan',
      description: 'A metropolis blending cutting-edge technology with traditional culture, featuring robot restaurants, smart toilets, and earthquake-resistant buildings.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      population: '37 million',
      fact: 'Home to the world\'s busiest pedestrian crossing at Shibuya'
    },
    {
      id: 4,
      name: 'Dubai',
      location: 'UAE',
      description: 'A city of superlatives with the world\'s tallest building, largest mall, and ambitious projects like underwater hotels and Mars exploration.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      population: '3.3 million',
      fact: 'Has the world\'s largest 3D printed building'
    },
    {
      id: 5,
      name: 'Copenhagen',
      location: 'Denmark',
      description: 'A pioneer in sustainable urban living with carbon-neutral goals, extensive bike lanes, and innovative waste-to-energy systems.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      population: '1.3 million',
      fact: 'Aims to become the world\'s first carbon-neutral capital by 2025'
    },
    {
      id: 6,
      name: 'Shenzhen',
      location: 'China',
      description: 'China\'s Silicon Valley and a testing ground for smart city technologies, from facial recognition systems to electric vehicle infrastructure.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      population: '17.5 million',
      fact: 'Transformed from a fishing village to a megacity in just 40 years'
    }
  ]

  return (
    <div className="futuristic-cities">
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
            Futuristic Cities
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Explore the urban landscapes of tomorrow where technology, sustainability, and innovation converge to create the cities of the future.
          </motion.p>
        </div>
      </motion.div>

      <section className="cities-grid">
        {cities.map((city, index) => (
          <motion.div
            key={city.id}
            className="city-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="city-image-container">
              <div 
                className="city-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${city.image}')` }}
              />
            </div>
            <div className="city-content">
              <h3>{city.name}</h3>
              <p className="location">{city.location}</p>
              <p className="description">{city.description}</p>
              <div className="city-details">
                <div className="detail-item">
                  <span className="detail-label">Population:</span>
                  <span className="detail-value">{city.population}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{city.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="cities-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Cities of Tomorrow</h2>
          <p>
            These futuristic cities represent humanity's vision of urban living reimagined. 
            Through the integration of cutting-edge technology, sustainable practices, and 
            innovative architecture, they're creating blueprints for how we might live in 
            the decades to come.
          </p>
          <p>
            From smart infrastructure that anticipates our needs to sustainable energy systems 
            that reduce environmental impact, these cities showcase the incredible potential 
            of human ingenuity to solve complex urban challenges while enhancing quality of life.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default FuturisticCities