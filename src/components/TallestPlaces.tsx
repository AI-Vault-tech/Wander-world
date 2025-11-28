import { motion } from 'framer-motion'
import './TallestPlaces.css'

const TallestPlaces = () => {
  const places = [
    {
      id: 1,
      name: 'Mount Everest',
      location: 'Nepal/China',
      description: 'The world\'s highest peak at 29,032 feet, challenging climbers with its extreme altitude and unpredictable weather.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      height: '29,032 ft',
      fact: 'Grows 4mm taller each year due to tectonic activity'
    },
    {
      id: 2,
      name: 'Burj Khalifa',
      location: 'Dubai, UAE',
      description: 'The world\'s tallest building at 2,717 feet, featuring cutting-edge engineering and luxury amenities.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      height: '2,717 ft',
      fact: 'Has its own zip code and 57 elevators'
    },
    {
      id: 3,
      name: 'Angel Falls',
      location: 'Venezuela',
      description: 'The world\'s highest uninterrupted waterfall, plunging 3,212 feet from the Auyán-tepui mountain.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      height: '3,212 ft',
      fact: 'Named after Jimmy Angel, the first aviator to fly over it'
    },
    {
      id: 4,
      name: 'Hyperion Tree',
      location: 'California, USA',
      description: 'The world\'s tallest known living tree, a coast redwood standing 379.7 feet tall in Redwood National Park.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      height: '379.7 ft',
      fact: 'Estimated to be over 700 years old'
    },
    {
      id: 5,
      name: 'Mauna Kea',
      location: 'Hawaii, USA',
      description: 'The world\'s tallest mountain when measured from base to peak, rising 33,476 feet from the ocean floor.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      height: '33,476 ft',
      fact: 'Taller than Mount Everest when measured from base'
    },
    {
      id: 6,
      name: 'Shanghai Tower',
      location: 'Shanghai, China',
      description: 'The world\'s second tallest building at 2,073 feet, featuring a twisting design that reduces wind loads.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      height: '2,073 ft',
      fact: 'Twists 120 degrees from base to top'
    }
  ]

  return (
    <div className="tallest-places">
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
            Tallest Wonders
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Reach for the skies and discover the world's most towering natural and man-made marvels.
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
                  <span className="detail-label">Height:</span>
                  <span className="detail-value">{place.height}</span>
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
          <h2>The Majesty of Height</h2>
          <p>
            From the soaring peaks of the Himalayas to mankind's architectural achievements, 
            these towering wonders inspire awe and push the boundaries of what's possible. 
            They stand as testaments to the power of nature and human ingenuity.
          </p>
          <p>
            Whether it's the natural majesty of a giant sequoia or the engineering marvel 
            of a skyscraper, these vertical wonders draw our eyes upward and our spirits 
            toward the heavens.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default TallestPlaces