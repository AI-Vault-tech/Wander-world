import { motion } from 'framer-motion'
import './AncientStones.css'

const AncientStones = () => {
  const stones = [
    {
      id: 1,
      name: 'Delicate Arch',
      location: 'Utah, USA',
      description: 'Iconic freestanding natural arch carved from Entrada Sandstone.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
      age: '170 million years',
      height: '65 feet',
      formation: 'Erosion'
    },
    {
      id: 2,
      name: 'Giant\'s Causeway',
      location: 'Northern Ireland',
      description: 'UNESCO site with 40,000 interlocking basalt columns.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      age: '60 million years',
      height: '100m cliffs',
      formation: 'Volcanic Activity'
    },
    {
      id: 3,
      name: 'Zhangye Danxia',
      location: 'China',
      description: 'Rainbow-colored rock formations with striped patterns.',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      age: '25 million years',
      height: '300m peaks',
      formation: 'Sedimentation'
    },
    {
      id: 4,
      name: 'Twelve Apostles',
      location: 'Australia',
      description: 'Limestone stacks rising from the Southern Ocean.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      age: '20 million years',
      height: '45m average',
      formation: 'Erosion'
    }
  ]

  return (
    <div className="ancient-stones">
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
            Ancient Stones
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Marvel at Earth's timeless sculptures, where wind, water, and time have crafted stone into art over millions of years.
          </motion.p>
        </div>
      </motion.div>

      <div className="stones-grid">
        {stones.map((stone, index) => (
          <motion.div
            key={stone.id}
            className="stone-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="stone-image-container">
              <div 
                className="stone-image"
                style={{ backgroundImage: `url('${stone.image}')` }}
              />
            </div>
            <div className="stone-content">
              <h3>{stone.name}</h3>
              <div className="location">{stone.location}</div>
              <p className="description">{stone.description}</p>
              <div className="stone-details">
                <div className="detail-item">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{stone.age}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Height:</span>
                  <span className="detail-value">{stone.height}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Formation:</span>
                  <span className="detail-value">{stone.formation}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="stones-info">
        <div className="info-content">
          <h2>Time\'s Masterpieces</h2>
          <p>
            Ancient stones are Earth's longest-standing monuments, shaped by geological forces 
            over millions of years. These formations tell the story of our planet's dynamic history, 
            from the movement of tectonic plates to the relentless erosion by wind and water.
          </p>
          <p>
            Each stone formation represents a unique combination of rock type, climate conditions, 
            and time. Sandstone arches form through differential erosion, while basalt columns 
            crystallize from cooling lava flows. Understanding these processes helps us appreciate 
            the incredible patience required to create such magnificent natural sculptures.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AncientStones