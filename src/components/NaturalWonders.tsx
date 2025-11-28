import { motion } from 'framer-motion'
import './NaturalWonders.css'

const NaturalWonders = () => {
  const wonders = [
    {
      id: 1,
      name: 'Victoria Falls',
      location: 'Zambia/Zimbabwe',
      description: 'Known as "The Smoke That Thunders," this massive waterfall is twice the height of Niagara Falls and half a mile wide.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '350 feet high',
      fact: 'Largest sheet of falling water in the world'
    },
    {
      id: 2,
      name: 'Great Barrier Reef',
      location: 'Australia',
      description: 'The world\'s largest coral reef system composed of over 2,900 individual reefs and 900 islands stretching over 1,400 miles.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '133,000 sq miles',
      fact: 'Visible from outer space and the world\'s biggest living structure'
    },
    {
      id: 3,
      name: 'Aurora Borealis',
      location: 'Arctic Circle',
      description: 'Natural light displays in Earth\'s sky, predominantly seen in high-latitude regions, creating dancing curtains of colored light.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: 'Visible across polar regions',
      fact: 'Caused by charged particles colliding with Earth\'s atmosphere'
    },
    {
      id: 4,
      name: 'Parícutin Volcano',
      location: 'Mexico',
      description: 'The youngest volcano in the world, born in a cornfield in 1943 and grew to be over 1,300 feet tall in just nine years.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '1,391 feet high',
      fact: 'Only volcano whose full life cycle has been observed by scientists'
    },
    {
      id: 5,
      name: 'Mount Roraima',
      location: 'Venezuela/Brazil/Guyana',
      description: 'A massive tabletop mountain and one of the oldest geological formations on Earth, inspiring Sir Arthur Conan Doyle\'s "The Lost World."',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '9,221 feet high',
      fact: 'Over 2 billion years old with unique endemic species'
    },
    {
      id: 6,
      name: 'Zhangjiajie',
      location: 'China',
      description: 'Towering sandstone pillars that inspired the floating mountains in Avatar, rising over 3,000 feet above the ground.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '3,000+ feet high',
      fact: 'Home to the world\'s tallest outdoor elevator'
    }
  ]

  return (
    <div className="natural-wonders">
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
            Natural Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Discover the Earth's most extraordinary natural phenomena that defy imagination and showcase the planet's incredible diversity.
          </motion.p>
        </div>
      </motion.div>

      <section className="wonders-grid">
        {wonders.map((wonder, index) => (
          <motion.div
            key={wonder.id}
            className="wonder-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="wonder-image-container">
              <div 
                className="wonder-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${wonder.image}')` }}
              />
            </div>
            <div className="wonder-content">
              <h3>{wonder.name}</h3>
              <p className="location">{wonder.location}</p>
              <p className="description">{wonder.description}</p>
              <div className="wonder-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{wonder.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{wonder.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="wonders-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Extraordinary Beauty of Nature</h2>
          <p>
            These natural wonders represent the incredible creativity and power of our planet. 
            From geological formations that took millions of years to form to phenomena that 
            occur in fleeting moments, they remind us of the dynamic and ever-changing nature 
            of the world we inhabit.
          </p>
          <p>
            Each wonder tells a story of Earth's history, showcasing the interplay between 
            time, natural forces, and the emergence of unique ecosystems that continue to 
            amaze scientists and visitors alike.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default NaturalWonders