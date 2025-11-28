import { motion } from 'framer-motion'
import './VastExpanses.css'

const VastExpanses = () => {
  const expanses = [
    {
      id: 1,
      name: 'Sahara Desert',
      location: 'North Africa',
      description: 'The largest hot desert in the world, covering 3.6 million square miles of golden dunes and rocky plateaus.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '3.6 million sq mi',
      fact: 'Largest hot desert on Earth'
    },
    {
      id: 2,
      name: 'Antarctic Ice Sheet',
      location: 'Antarctica',
      description: 'A massive ice sheet covering 5.4 million square miles, containing roughly 90% of the world\'s fresh water.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: '5.4 million sq mi',
      fact: 'Contains 90% of Earth\'s fresh water'
    },
    {
      id: 3,
      name: 'Amazon Rainforest',
      location: 'South America',
      description: 'The world\'s largest tropical rainforest, spanning 2.1 million square miles across nine countries.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
      size: '2.1 million sq mi',
      fact: 'Produces 20% of Earth\'s oxygen'
    },
    {
      id: 4,
      name: 'Great Plains',
      location: 'North America',
      description: 'A vast expanse of grassland stretching from Canada to Texas, once home to millions of bison.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      size: '1.3 million sq mi',
      fact: 'Historic home of 30 million bison'
    },
    {
      id: 5,
      name: 'Salar de Uyuni',
      location: 'Bolivia',
      description: 'The world\'s largest salt flat, covering 4,086 square miles and creating a mirror-like surface during rainy season.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '4,086 sq mi',
      fact: 'Largest salt flat on Earth'
    },
    {
      id: 6,
      name: 'Siberian Tundra',
      location: 'Russia',
      description: 'A vast, frozen landscape stretching across northern Siberia, home to unique wildlife adapted to extreme cold.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '3.5 million sq mi',
      fact: 'Largest continuous tundra ecosystem'
    }
  ]

  return (
    <div className="vast-expanses">
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
            Vast Expanses
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            The beauty of immense, uninterrupted space where Earth's grandest landscapes stretch beyond the horizon.
          </motion.p>
        </div>
      </motion.div>

      <section className="expanses-grid">
        {expanses.map((expanse, index) => (
          <motion.div
            key={expanse.id}
            className="expanse-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="expanse-image-container">
              <div 
                className="expanse-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${expanse.image}')` }}
              />
            </div>
            <div className="expanse-content">
              <h3>{expanse.name}</h3>
              <p className="location">{expanse.location}</p>
              <p className="description">{expanse.description}</p>
              <div className="expanse-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{expanse.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{expanse.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="expanses-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Majesty of Immensity</h2>
          <p>
            Vast expanses remind us of our smallness in the grand tapestry of the natural world. 
            These immense landscapes offer a sense of freedom and solitude that can only be found 
            where the horizon stretches endlessly before us.
          </p>
          <p>
            From the rolling dunes of the Sahara to the frozen wilderness of the Siberian tundra, 
            these places showcase the raw power and beauty of Earth's most expansive natural formations. 
            They are sanctuaries for unique ecosystems and serve as reminders of the planet's incredible 
            diversity and scale.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default VastExpanses