import { motion } from 'framer-motion'
import './CoastalDreams.css'

const CoastalDreams = () => {
  const dreams = [
    {
      id: 1,
      name: 'Maldives',
      location: 'Indian Ocean',
      description: '翡翠绿的泻湖环绕着如珍珠般的白色沙滩环礁。',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      features: 'Overwater bungalows',
      water: 'Crystal clear lagoons',
      activities: 'Snorkeling, diving'
    },
    {
      id: 2,
      name: 'Big Sur',
      location: 'California, USA',
      description: '崎岖的海岸线与茂密的红杉林相遇，创造出令人叹为观止的景观。',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      features: 'Dramatic cliffs',
      water: 'Pacific coastline',
      activities: 'Hiking, photography'
    },
    {
      id: 3,
      name: 'Amalfi Coast',
      location: 'Italy',
      description: '地中海沿岸的彩色村庄坐落在悬崖上，俯瞰着碧蓝的海水。',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      features: 'Cliffside villages',
      water: 'Mediterranean Sea',
      activities: 'Boat tours, dining'
    },
    {
      id: 4,
      name: 'Whitehaven Beach',
      location: 'Australia',
      description: '纯白色的二氧化硅沙滩与碧绿的海洋形成鲜明对比。',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      features: 'Whitest sand beach',
      water: 'Turquoise waters',
      activities: 'Sailing, swimming'
    }
  ]

  return (
    <div className="coastal-dreams">
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
            Coastal Dreams
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Surrender to the endless allure of where land meets sea, where crashing waves compose nature's most soothing symphony.
          </motion.p>
        </div>
      </motion.div>

      <div className="dreams-grid">
        {dreams.map((dream, index) => (
          <motion.div
            key={dream.id}
            className="dream-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="dream-image-container">
              <div 
                className="dream-image"
                style={{ backgroundImage: `url('${dream.image}')` }}
              />
            </div>
            <div className="dream-content">
              <h3>{dream.name}</h3>
              <div className="location">{dream.location}</div>
              <p className="description">{dream.description}</p>
              <div className="dream-details">
                <div className="detail-item">
                  <span className="detail-label">Features:</span>
                  <span className="detail-value">{dream.features}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Water:</span>
                  <span className="detail-value">{dream.water}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Activities:</span>
                  <span className="detail-value">{dream.activities}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dreams-info">
        <div className="info-content">
          <h2>Where Land Meets Legend</h2>
          <p>
            Coastal environments represent some of Earth's most dynamic and beloved landscapes, 
            where the constant interaction between land and sea creates endlessly varied and 
            spectacular scenery. These transitional zones support rich biodiversity and have 
            inspired human settlement and culture for millennia.
          </p>
          <p>
            The perpetual dance between waves and shore shapes unique geological features like 
            sea stacks, arches, and caves while providing habitat for specialized marine and 
            terrestrial species. Coastal areas offer both tranquility and drama, from gentle 
            lapping waves on sandy shores to the thunderous crash of surf against rocky headlands. 
            These diverse environments remind us of our connection to the ocean and the powerful 
            forces that shape our planet's surface.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoastalDreams