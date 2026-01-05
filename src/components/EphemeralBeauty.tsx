import { motion } from 'framer-motion'
import './EphemeralBeauty.css'

const EphemeralBeauty = () => {
  const beauties = [
    {
      id: 1,
      name: 'Cherry Blossoms',
      location: 'Japan',
      description: '短暂而绚烂的樱花季，粉色花瓣如雪花般飘落。',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      season: 'Spring (March-May)',
      duration: '1-2 weeks',
      phenomenon: 'Hanami tradition'
    },
    {
      id: 2,
      name: 'Northern Lights',
      location: 'Iceland/Norway',
      description: '极光在夜空中舞动，绿色和紫色的光芒如丝绸般飘逸。',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      season: 'Winter (Sept-Mar)',
      duration: 'Variable',
      phenomenon: 'Aurora Borealis'
    },
    {
      id: 3,
      name: 'Superbloom',
      location: 'California, USA',
      description: '沙漠中短暂绽放的野花海，将荒芜之地变成色彩斑斓的花园。',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      season: 'Spring (Feb-Apr)',
      duration: '2-4 weeks',
      phenomenon: 'Desert wildflowers'
    },
    {
      id: 4,
      name: 'Fireflies',
      location: 'Tennessee, USA',
      description: '同步闪烁的萤火虫在夏夜里创造魔法般的光影表演。',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      season: 'Summer (May-July)',
      duration: '2-3 weeks',
      phenomenon: 'Synchronous fireflies'
    }
  ]

  return (
    <div className="ephemeral-beauty">
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
            Ephemeral Beauty
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Experience nature's most fleeting miracles, where timing is everything and beauty exists for just a moment in time.
          </motion.p>
        </div>
      </motion.div>

      <div className="beauties-grid">
        {beauties.map((beauty, index) => (
          <motion.div
            key={beauty.id}
            className="beauty-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="beauty-image-container">
              <div 
                className="beauty-image"
                style={{ backgroundImage: `url('${beauty.image}')` }}
              />
            </div>
            <div className="beauty-content">
              <h3>{beauty.name}</h3>
              <div className="location">{beauty.location}</div>
              <p className="description">{beauty.description}</p>
              <div className="beauty-details">
                <div className="detail-item">
                  <span className="detail-label">Season:</span>
                  <span className="detail-value">{beauty.season}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{beauty.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phenomenon:</span>
                  <span className="detail-value">{beauty.phenomenon}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="beauties-info">
        <div className="info-content">
          <h2>The Transience of Wonder</h2>
          <p>
            Ephemeral beauty reminds us that some of nature's most profound moments are also its most 
            temporary. These fleeting phenomena require specific conditions to occur, making them rare 
            and precious experiences that can never be exactly replicated.
          </p>
          <p>
            The impermanence of these natural events teaches us to be present and appreciative of 
            moments as they happen. Whether it's the brief bloom of desert wildflowers or the dancing 
            lights of aurora, these spectacles connect us to the cyclical rhythms of our planet and 
            inspire a deeper respect for the delicate balance that makes such beauty possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EphemeralBeauty