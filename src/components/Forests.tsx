import { motion } from 'framer-motion'
import './Forests.css'

const Forests = () => {
  const forests = [
    {
      id: 1,
      name: 'Amazon Rainforest',
      location: 'South America',
      description: 'The world\'s largest tropical rainforest, home to 10% of all known species on Earth and often called the "lungs of the planet."',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '2.1 million sq miles',
      fact: 'Produces 20% of the world\'s oxygen'
    },
    {
      id: 2,
      name: 'Redwood National Park',
      location: 'California, USA',
      description: 'Home to the tallest trees on Earth, including Hyperion, a coast redwood standing 379 feet tall.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '110,000 acres',
      fact: 'Some trees are over 2,000 years old'
    },
    {
      id: 3,
      name: 'Black Forest',
      location: 'Germany',
      description: 'A densely wooded mountain range known for its dark forests, cuckoo clocks, and fairy-tale villages.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '6,000 sq km',
      fact: 'Inspired the Brothers Grimm fairy tales'
    },
    {
      id: 4,
      name: 'Sagano Bamboo Forest',
      location: 'Kyoto, Japan',
      description: 'An enchanting bamboo grove where towering bamboo stalks create a mesmerizing tunnel of green.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '16 sq km',
      fact: 'Bamboo grows up to 3 feet in a single day'
    },
    {
      id: 5,
      name: 'Białowieża Forest',
      location: 'Poland/Belarus',
      description: 'One of the last and largest remaining parts of the immense primeval forest that once stretched across the European Plain.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '580 sq miles',
      fact: 'Home to the last European bison'
    },
    {
      id: 6,
      name: 'Daintree Rainforest',
      location: 'Australia',
      description: 'The oldest rainforest in the world, estimated to be 180 million years old, with incredibly diverse flora and fauna.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '460 sq miles',
      fact: 'Contains 30% of Australia\'s frog, marsupial, and reptile species'
    }
  ]

  return (
    <div className="forests">
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
            Enchanted Forests
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Wander through the world's most magnificent forests, where ancient trees whisper stories of time immemorial.
          </motion.p>
        </div>
      </motion.div>

      <section className="forests-grid">
        {forests.map((forest, index) => (
          <motion.div
            key={forest.id}
            className="forest-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="forest-image-container">
              <div 
                className="forest-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${forest.image}')` }}
              />
            </div>
            <div className="forest-content">
              <h3>{forest.name}</h3>
              <p className="location">{forest.location}</p>
              <p className="description">{forest.description}</p>
              <div className="forest-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{forest.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{forest.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="forests-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Cathedral of Trees</h2>
          <p>
            Forests are the lungs of our planet, providing oxygen, storing carbon, and sheltering incredible biodiversity. 
            From the towering redwoods of California to the mysterious bamboo groves of Japan, these green cathedrals 
            inspire awe and remind us of our deep connection to nature.
          </p>
          <p>
            Each forest has its own personality and story, shaped by climate, soil, and the countless species that call 
            it home. They are repositories of ancient wisdom, genetic diversity, and natural beauty that have sustained 
            life on Earth for millions of years.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Forests