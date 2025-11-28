import { motion } from 'framer-motion'
import './BeautifulCities.css'

const BeautifulCities = () => {
  const cities = [
    {
      id: 1,
      name: 'Prague',
      location: 'Czech Republic',
      description: 'The City of a Hundred Spires with its Gothic and Baroque architecture, cobblestone streets, and the iconic Charles Bridge.',
      image: 'https://images.unsplash.com/photo-1590185592992-93854894b3d6?w=1920&q=80',
      population: '1.3 million',
      fact: 'Home to the world\'s oldest continuously operating Prague Astronomical Clock'
    },
    {
      id: 2,
      name: 'Kyoto',
      location: 'Japan',
      description: 'A city of timeless beauty with over 2,000 temples, traditional wooden machiya houses, and stunning seasonal transformations.',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80',
      population: '1.5 million',
      fact: 'Has 17 UNESCO World Heritage Sites within city limits'
    },
    {
      id: 3,
      name: 'Paris',
      location: 'France',
      description: 'The City of Light renowned for its Haussmannian boulevards, world-class museums, and romantic river Seine views.',
      image: 'https://images.unsplash.com/photo-1508050919630-b135583b29ab?w=1920&q=80',
      population: '2.2 million',
      fact: 'Has 470 parks and gardens covering 30 square kilometers'
    },
    {
      id: 4,
      name: 'Marrakech',
      location: 'Morocco',
      description: 'The Red City with its vibrant souks, stunning Islamic architecture, and the famous Jardin Majorelle oasis.',
      image: 'https://images.unsplash.com/photo-1589636909194-5b54d04b2875?w=1920&q=80',
      population: '1 million',
      fact: 'The medina is a UNESCO World Heritage Site'
    },
    {
      id: 5,
      name: 'Venice',
      location: 'Italy',
      description: 'A floating city of canals, Renaissance palaces, and Byzantine churches, built on 118 small islands connected by bridges.',
      image: 'https://images.unsplash.com/photo-1504955361624-0a7c040dcfc9?w=1920&q=80',
      population: '260,000',
      fact: 'Has no roads, only canals and walkways'
    },
    {
      id: 6,
      name: 'Cape Town',
      location: 'South Africa',
      description: 'A coastal gem nestled between Table Mountain and the Atlantic Ocean, with stunning natural beauty and diverse cultures.',
      image: 'https://images.unsplash.com/photo-1522163164813-549516470d25?w=1920&q=80',
      population: '4.6 million',
      fact: 'One of the world\'s most biodiverse cities with over 9,000 plant species'
    }
  ]

  return (
    <div className="beautiful-cities">
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
            Beautiful Cities
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Explore the world's most enchanting urban landscapes where history, culture, and architecture blend in perfect harmony.
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
          <h2>Urban Masterpieces</h2>
          <p>
            Beautiful cities are more than just collections of buildings - they are living works of art where 
            architecture, culture, and human ingenuity converge. Each city tells a unique story through its 
            streets, monuments, and the daily lives of its inhabitants.
          </p>
          <p>
            From the ancient alleyways of Marrakech to the modernist boulevards of Paris, these destinations 
            showcase the incredible diversity of human civilization and our ability to create spaces that 
            inspire, delight, and endure through time.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default BeautifulCities