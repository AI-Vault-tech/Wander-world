import { motion } from 'framer-motion'
import './IsolatedSanctuaries.css'

const IsolatedSanctuaries = () => {
  const sanctuaries = [
    {
      id: 1,
      name: 'Tristan da Cunha',
      location: 'South Atlantic',
      description: '世界上最偏远的有人居住岛屿，被称为“最孤独的地方”。',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      population: '260 people',
      distance: '2,400km nearest land',
      access: '7-day boat journey'
    },
    {
      id: 2,
      name: 'Meteora Monasteries',
      location: 'Greece',
      description: '建在高耸岩石柱上的东正教修道院群，宛如悬浮于天空之中。',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      population: 'Small monastic communities',
      distance: '310km Athens',
      access: 'Hiking/vehicle'
    },
    {
      id: 3,
      name: 'Socotra Island',
      location: 'Yemen',
      description: '联合国教科文组织世界遗产，拥有地球上33%的独特植物物种。',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      population: '50,000 people',
      distance: '380km Yemen coast',
      access: 'Flight/boat'
    },
    {
      id: 4,
      name: 'Faroe Islands',
      location: 'North Atlantic',
      description: '北大西洋中的自治领土，以壮观的悬崖和传统草皮屋闻名。',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      population: '52,000 people',
      distance: '300km Scotland',
      access: 'Flight/ferry'
    }
  ]

  return (
    <div className="isolated-sanctuaries">
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
            Isolated Sanctuaries
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Journey to Earth's most remote havens, where solitude and serenity offer profound connections with nature and self.
          </motion.p>
        </div>
      </motion.div>

      <div className="sanctuaries-grid">
        {sanctuaries.map((sanctuary, index) => (
          <motion.div
            key={sanctuary.id}
            className="sanctuary-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="sanctuary-image-container">
              <div 
                className="sanctuary-image"
                style={{ backgroundImage: `url('${sanctuary.image}')` }}
              />
            </div>
            <div className="sanctuary-content">
              <h3>{sanctuary.name}</h3>
              <div className="location">{sanctuary.location}</div>
              <p className="description">{sanctuary.description}</p>
              <div className="sanctuary-details">
                <div className="detail-item">
                  <span className="detail-label">Population:</span>
                  <span className="detail-value">{sanctuary.population}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Distance:</span>
                  <span className="detail-value">{sanctuary.distance}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Access:</span>
                  <span className="detail-value">{sanctuary.access}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="sanctuaries-info">
        <div className="info-content">
          <h2>Sanctuaries of Solitude</h2>
          <p>
            Isolated sanctuaries offer rare opportunities to disconnect from the modern world and 
            reconnect with fundamental aspects of existence. These remote places challenge us to 
            adapt to different rhythms of life while providing profound perspectives on our place 
            within the larger tapestry of life on Earth.
          </p>
          <p>
            The journey to these destinations is often as transformative as the destination itself. 
            Reaching isolated sanctuaries requires commitment, patience, and often significant 
            effort, which paradoxically enhances the sense of achievement and appreciation upon arrival. 
            These places remind us of the vastness of our planet and the diversity of human adaptation 
            to different environments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IsolatedSanctuaries