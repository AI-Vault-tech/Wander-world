import { motion } from 'framer-motion'
import './HiddenRealms.css'

const HiddenRealms = () => {
  const realms = [
    {
      id: 1,
      name: 'Son Doong Cave',
      location: 'Vietnam',
      description: 'World\'s largest natural cave with its own ecosystem and jungle inside.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      size: '5 km long',
      discovery: '1991',
      accessibility: 'Limited tours'
    },
    {
      id: 2,
      name: 'Underground River',
      location: 'Philippines',
      description: 'UNESCO site featuring a navigable underground river through limestone caves.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: '8.2 km river',
      discovery: '1887',
      accessibility: 'Guided tours'
    },
    {
      id: 3,
      name: 'Blue Grotto',
      location: 'Italy',
      description: 'Seawater cave with brilliant blue light created by sunlight refraction.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '60m long',
      discovery: 'Ancient times',
      accessibility: 'Boat entry'
    },
    {
      id: 4,
      name: 'Waitomo Glowworm Caves',
      location: 'New Zealand',
      description: 'Limestone caves illuminated by thousands of bioluminescent glowworms.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
      size: 'Extensive network',
      discovery: '1887',
      accessibility: 'Guided tours'
    }
  ]

  return (
    <div className="hidden-realms">
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
            Hidden Realms
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Descend into Earth's secret chambers where darkness meets wonder, revealing hidden ecosystems and geological marvels untouched by time.
          </motion.p>
        </div>
      </motion.div>

      <div className="realms-grid">
        {realms.map((realm, index) => (
          <motion.div
            key={realm.id}
            className="realm-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="realm-image-container">
              <div 
                className="realm-image"
                style={{ backgroundImage: `url('${realm.image}')` }}
              />
            </div>
            <div className="realm-content">
              <h3>{realm.name}</h3>
              <div className="location">{realm.location}</div>
              <p className="description">{realm.description}</p>
              <div className="realm-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{realm.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Discovery:</span>
                  <span className="detail-value">{realm.discovery}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Accessibility:</span>
                  <span className="detail-value">{realm.accessibility}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="realms-info">
        <div className="info-content">
          <h2>Secrets Beneath the Surface</h2>
          <p>
            Hidden realms represent some of Earth's most mysterious and least explored environments. 
            These subterranean worlds often harbor unique ecosystems that have evolved in complete 
            isolation from surface conditions, creating specialized organisms found nowhere else.
          </p>
          <p>
            The formation of caves and underground spaces is a testament to the power of water 
            and time. Limestone caves are carved by slightly acidic groundwater over millions of years, 
            while lava tubes form as underground tunnels when flowing lava creates hollow passages. 
            Each hidden realm tells a story of geological processes that operate far from human sight.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HiddenRealms