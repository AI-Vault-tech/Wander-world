import { motion } from 'framer-motion'
import './DeepestPlaces.css'

const DeepestPlaces = () => {
  const places = [
    {
      id: 1,
      name: 'Mariana Trench',
      location: 'Pacific Ocean',
      description: 'The deepest part of Earth\'s oceans at 36,200 feet deep, home to unique deep-sea creatures in crushing pressures.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      depth: '36,200 ft',
      fact: 'If Mount Everest were placed at its lowest point, the peak would still be under water'
    },
    {
      id: 2,
      name: 'Grand Canyon',
      location: 'Arizona, USA',
      description: 'Carved by the Colorado River over millions of years, this immense canyon reaches depths of over a mile.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      depth: '6,000 ft',
      fact: 'Nearly two billion years of Earth\'s geological history are exposed in its walls'
    },
    {
      id: 3,
      name: 'Dead Sea',
      location: 'Jordan/Israel',
      description: 'The Earth\'s lowest land surface at 1,412 feet below sea level, known for its hypersaline waters.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      depth: '1,412 ft below sea',
      fact: 'Salt concentration is nearly 10 times higher than regular seawater'
    },
    {
      id: 4,
      name: 'Kruber Cave',
      location: 'Georgia',
      description: 'The deepest known cave in the world at 7,208 feet deep, formed in limestone rock in the Arabika Massif.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      depth: '7,208 ft',
      fact: 'Takes nearly two days to reach the deepest point'
    },
    {
      id: 5,
      name: 'Lake Baikal',
      location: 'Russia',
      description: 'The world\'s deepest freshwater lake at 5,387 feet deep, containing 20% of the world\'s unfrozen fresh water.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      depth: '5,387 ft',
      fact: 'Home to over 3,700 species, many found nowhere else on Earth'
    },
    {
      id: 6,
      name: 'Ryder Bay',
      location: 'Antarctica',
      description: 'One of Antarctica\'s deepest bays at over 2,000 feet deep, surrounded by spectacular ice formations.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      depth: '2,000+ ft',
      fact: 'Home to diverse marine life despite extreme cold conditions'
    }
  ]

  return (
    <div className="deepest-places">
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
            Deepest Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Descend into the depths and discover Earth's most profound natural and underwater marvels.
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
                  <span className="detail-label">Depth:</span>
                  <span className="detail-value">{place.depth}</span>
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
          <h2>The Mystery of Depth</h2>
          <p>
            From the crushing depths of the ocean trenches to the hidden passages of underground caves, 
            these profound wonders conceal secrets that have remained untouched for millennia. 
            They represent the hidden realms of our planet, where extreme conditions create unique 
            ecosystems and geological formations.
          </p>
          <p>
            These deep places challenge our understanding of life and geology, 
            revealing the incredible diversity and resilience of our world in its most extreme environments.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default DeepestPlaces