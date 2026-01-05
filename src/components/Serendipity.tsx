import { motion } from 'framer-motion'
import './Serendipity.css'

const Serendipity = () => {
  const places = [
    {
      id: 1,
      name: 'Socotra Island',
      location: 'Yemen',
      description: 'An isolated island with 700 endemic species found nowhere else on Earth, including the iconic Dragon Blood Trees.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '132 square miles',
      fact: 'Called the most alien-looking place on Earth by UNESCO'
    },
    {
      id: 2,
      name: 'Zhangye Danxia',
      location: 'China',
      description: 'Rainbow-colored rock formations created by mineral deposits over 24 million years, creating a painter\'s palette in stone.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '20 square miles',
      fact: 'Colors come from layers of red sandstone and mineral deposits'
    },
    {
      id: 3,
      name: 'Lençóis Maranhenses',
      location: 'Brazil',
      description: 'Vast white sand dunes dotted with seasonal blue and green lagoons, creating a desert-meets-oasis landscape.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '640 square miles',
      fact: 'Rainy season creates over 3,000 lagoons between the dunes'
    },
    {
      id: 4,
      name: 'Faroe Islands',
      location: 'North Atlantic',
      description: 'Dramatic volcanic islands with grass-roof houses, cascading waterfalls, and some of the world\'s most breathtaking cliffs.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '540 square miles',
      fact: 'Have their own language and cultural traditions dating back 1,000 years'
    },
    {
      id: 5,
      name: 'Tsingy de Bemaraha',
      location: 'Madagascar',
      description: 'A forest of limestone pinnacles creating a stone jungle that\'s home to unique wildlife found nowhere else.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '240 square miles',
      fact: 'Name means "where one cannot walk barefoot" in Malagasy'
    },
    {
      id: 6,
      name: 'Caño Cristales',
      location: 'Colombia',
      description: 'A river that turns into a living rainbow during certain months when aquatic plants bloom in brilliant colors.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '62 miles long',
      fact: 'Called the "River of Five Colors" or "Liquid Rainbow"'
    }
  ]

  return (
    <div className="serendipity">
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
            Serendipitous Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Discover the world's most unexpected and enchanting places that seem to exist in a realm between dreams and reality.
          </motion.p>
        </div>
      </motion.div>

      <section className="places-grid">
        {places.map((place, index) => (
          <motion.div
            key={place.id}
            className="place-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="place-image-container">
              <div 
                className="place-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${place.image}')` }}
              />
            </div>
            <div className="place-content">
              <h3>{place.name}</h3>
              <p className="location">{place.location}</p>
              <p className="description">{place.description}</p>
              <div className="place-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{place.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{place.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="places-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Magic of Unexpected Beauty</h2>
          <p>
            These serendipitous wonders remind us that the world still holds secrets and surprises beyond our imagination. 
            They are places where geological forces, climate, and time have combined in extraordinary ways to create 
            landscapes that seem almost otherworldly.
          </p>
          <p>
            From rivers that bloom in color to forests of stone, these destinations challenge our understanding of what's 
            possible on our planet. They represent the incredible diversity and creativity of nature, offering glimpses 
            into Earth's most unique and enchanting corners.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Serendipity