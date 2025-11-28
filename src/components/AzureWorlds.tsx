import { motion } from 'framer-motion'
import './AzureWorlds.css'

const AzureWorlds = () => {
  const worlds = [
    {
      id: 1,
      name: 'Turquoise Lagoon',
      location: 'Maldives',
      description: 'Crystal-clear waters with vibrant blue hues surrounded by pristine white sand.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      depth: '50m average',
      salinity: '3.5%',
      temperature: '28°C'
    },
    {
      id: 2,
      name: 'Seven Lakes',
      location: 'Turkey',
      description: 'A series of stunning turquoise lakes formed in a dormant volcano crater.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      depth: '350m maximum',
      salinity: '0.5%',
      temperature: '15°C'
    },
    {
      id: 3,
      name: 'Blue Window',
      location: 'Malta',
      description: 'Iconic azure arch formation overlooking the Mediterranean Sea.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      depth: 'N/A',
      salinity: '3.8%',
      temperature: '22°C'
    },
    {
      id: 4,
      name: 'Caño Cristales',
      location: 'Colombia',
      description: 'River of five colors with vibrant blue waters during rainy season.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      depth: '1-5m',
      salinity: '0.1%',
      temperature: '25°C'
    }
  ]

  return (
    <div className="azure-worlds">
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
            Azure Worlds
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Explore the mesmerizing blue waters of our planet, from tropical lagoons to glacial lakes, each with their own unique hue and character.
          </motion.p>
        </div>
      </motion.div>

      <div className="worlds-grid">
        {worlds.map((world, index) => (
          <motion.div
            key={world.id}
            className="world-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="world-image-container">
              <div 
                className="world-image"
                style={{ backgroundImage: `url('${world.image}')` }}
              />
            </div>
            <div className="world-content">
              <h3>{world.name}</h3>
              <div className="location">{world.location}</div>
              <p className="description">{world.description}</p>
              <div className="world-details">
                <div className="detail-item">
                  <span className="detail-label">Depth:</span>
                  <span className="detail-value">{world.depth}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Salinity:</span>
                  <span className="detail-value">{world.salinity}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Temperature:</span>
                  <span className="detail-value">{world.temperature}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="worlds-info">
        <div className="info-content">
          <h2>The Science of Blue Waters</h2>
          <p>
            The captivating blue hues of these aquatic wonders are created by the interaction of sunlight with water molecules. 
            Shorter blue wavelengths are scattered more than other colors, giving these bodies of water their distinctive azure appearance. 
            Factors like depth, mineral content, and algae presence further influence the specific shade of blue we observe.
          </p>
          <p>
            These azure worlds are not just visually stunning; they represent diverse ecosystems that support unique marine life. 
            From coral reefs thriving in warm tropical waters to cold-water species in glacial lakes, each environment tells a story 
            of adaptation and natural beauty.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AzureWorlds