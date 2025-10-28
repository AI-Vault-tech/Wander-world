import { motion } from 'framer-motion'
import './FuturisticCities.css'

const cities = [
  {
    name: 'Dubai',
    location: 'United Arab Emirates',
    description: 'A desert mirage transformed into reality. Where impossibility becomes architecture, featuring the world\'s tallest building, artificial islands, and flying taxis.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
    facts: ['Burj Khalifa: 828m tall', 'Palm Islands visible from space', 'World\'s largest shopping mall'],
    futuristic: ['Flying taxi network', 'AI-powered infrastructure', '3D-printed buildings']
  },
  {
    name: 'Singapore',
    location: 'Southeast Asia',
    description: 'The garden city of the future. Where nature and technology merge seamlessly in vertical forests, smart gardens, and sustainable urban planning.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1920&q=80',
    facts: ['Gardens by the Bay: 250 acres', 'Supertrees harvest solar energy', '80% green building certification'],
    futuristic: ['Autonomous vehicles', 'Smart nation initiative', 'Vertical farming towers']
  },
  {
    name: 'Tokyo',
    location: 'Japan',
    description: 'Where tradition meets tomorrow. A neon-lit metropolis of 14 million souls, pushing the boundaries of technology, robotics, and urban efficiency.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80',
    facts: ['World\'s busiest intersection', 'Most Michelin stars globally', '13 subway lines'],
    futuristic: ['Robot hotels & restaurants', 'Maglev trains at 600 km/h', 'Holographic assistants']
  },
  {
    name: 'Seoul',
    location: 'South Korea',
    description: 'The world\'s most connected city. A 5G wonderland where ancient palaces glow alongside LED skyscrapers and digital innovation never sleeps.',
    image: 'https://images.unsplash.com/photo-1583950268462-b7e7ef5c0ada?w=1920&q=80',
    facts: ['Fastest internet: 1Gbps average', 'Dongdaemun Design Plaza', '10 million population'],
    futuristic: ['Citywide 5G coverage', 'Smart city sensors', 'Digital twin simulation']
  },
  {
    name: 'Shanghai',
    location: 'China',
    description: 'The city that rose from rice fields to rival Manhattan in 30 years. A vertical forest of skyscrapers housing 26 million dreamers.',
    image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1920&q=80',
    facts: ['Shanghai Tower: 632m', 'World\'s fastest elevator', 'Maglev train to airport'],
    futuristic: ['AI traffic management', 'Facial recognition everywhere', 'Smart waste systems']
  },
  {
    name: 'Neom',
    location: 'Saudi Arabia',
    description: 'The city that doesn\'t exist yet. A $500 billion vision of tomorrow: The Line - a 170km linear city powered 100% by renewable energy.',
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920&q=80',
    facts: ['170km linear city', 'Zero cars, zero streets', '$500 billion investment'],
    futuristic: ['100% renewable energy', 'Flying taxis only', 'AI-run governance']
  }
]

const FuturisticCities = () => {
  return (
    <div className="futuristic-cities">
      <div className="cyber-grid"></div>
      
      <motion.div
        className="page-header futuristic-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="holographic-title"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        >
          <h1>Futuristic Cities</h1>
        </motion.div>
        <p className="page-description">
          Where human ambition meets architectural impossibility. These are the cities
          reshaping tomorrow, today—vertical forests, flying vehicles, and AI-powered metropolises.
        </p>
      </motion.div>

      <div className="cities-grid">
        {cities.map((city, index) => (
          <motion.article
            key={city.name}
            className="city-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="city-image-wrapper">
              <div
                className="city-image"
                style={{ backgroundImage: `url('${city.image}')` }}
              />
              <div className="holographic-overlay"></div>
              <div className="scan-line"></div>
            </div>
            
            <div className="city-content">
              <div className="city-header">
                <h2>{city.name}</h2>
                <span className="city-location">{city.location}</span>
              </div>
              
              <p className="city-description">{city.description}</p>
              
              <div className="stats-container">
                <div className="stat-section">
                  <h3>Current Achievements</h3>
                  <ul className="stat-list">
                    {city.facts.map((fact, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {fact}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="stat-section futuristic-section">
                  <h3>Future Technology</h3>
                  <ul className="stat-list neon-list">
                    {city.futuristic.map((tech, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="card-glow"></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default FuturisticCities
