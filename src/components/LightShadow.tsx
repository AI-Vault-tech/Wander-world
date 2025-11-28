import { motion } from 'framer-motion'
import './LightShadow.css'

const LightShadow = () => {
  const phenomena = [
    {
      id: 1,
      name: 'Antelope Canyon',
      location: 'Arizona, USA',
      description: 'Sculpted sandstone walls create mesmerizing light beams during midday sun.',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
      bestTime: '11am-1pm',
      phenomenon: 'Canyon Light Beams'
    },
    {
      id: 2,
      name: 'Cliffs of Moher',
      location: 'Ireland',
      description: 'Dramatic coastal cliffs with ever-changing light and shadow patterns.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      bestTime: 'Sunrise/Sunset',
      phenomenon: 'Golden Hour Reflections'
    },
    {
      id: 3,
      name: 'Zhangye Danxia',
      location: 'China',
      description: 'Rainbow-colored rock formations with striking light and shadow contrasts.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      bestTime: 'Midday',
      phenomenon: 'Chromatic Shadows'
    },
    {
      id: 4,
      name: 'Glowworm Caves',
      location: 'New Zealand',
      description: 'Underground caves illuminated by thousands of bioluminescent creatures.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      bestTime: 'Night Tours',
      phenomenon: 'Natural Bioluminescence'
    }
  ]

  return (
    <div className="light-shadow">
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
            Light & Shadow
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Witness the transformative power of light as it dances across landscapes, creating ephemeral masterpieces of shadow and illumination.
          </motion.p>
        </div>
      </motion.div>

      <div className="phenomena-grid">
        {phenomena.map((phenomenon, index) => (
          <motion.div
            key={phenomenon.id}
            className="phenomenon-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="phenomenon-image-container">
              <div 
                className="phenomenon-image"
                style={{ backgroundImage: `url('${phenomenon.image}')` }}
              />
            </div>
            <div className="phenomenon-content">
              <h3>{phenomenon.name}</h3>
              <div className="location">{phenomenon.location}</div>
              <p className="description">{phenomenon.description}</p>
              <div className="phenomenon-details">
                <div className="detail-item">
                  <span className="detail-label">Best Time:</span>
                  <span className="detail-value">{phenomenon.bestTime}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phenomenon:</span>
                  <span className="detail-value">{phenomenon.phenomenon}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="phenomena-info">
        <div className="info-content">
          <h2>The Dance of Light</h2>
          <p>
            Light and shadow are nature's most ephemeral artists, constantly reshaping landscapes 
            throughout the day. The angle of the sun, atmospheric conditions, and surface textures 
            combine to create infinite variations of illumination that transform familiar places 
            into entirely new experiences.
          </p>
          <p>
            These optical phenomena reveal hidden dimensions of our world, from the ethereal glow 
            of bioluminescent organisms to the dramatic chiaroscuro effects in slot canyons. 
            Understanding these interactions enhances our appreciation for the subtle interplay 
            between light, matter, and perception that defines our visual experience of nature.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LightShadow