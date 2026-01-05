import { motion } from 'framer-motion'
import './CultivatedBeauty.css'

const CultivatedBeauty = () => {
  const beauties = [
    {
      id: 1,
      name: 'Keukenhof Gardens',
      location: 'Netherlands',
      description: '世界最大的花卉公园，拥有700万朵郁金香、水仙花和风信子。',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
      size: '32 hectares',
      flowers: '7 million blooms',
      season: 'Spring (March-May)'
    },
    {
      id: 2,
      name: 'Hanging Gardens',
      location: 'Bali, Indonesia',
      description: '层叠式的绿色梯田，瀑布贯穿其中，营造出人间仙境。',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: 'Multi-tiered',
      flowers: 'Tropical plants',
      season: 'Year-round'
    },
    {
      id: 3,
      name: 'Versailles Gardens',
      location: 'France',
      description: '法式园林艺术的巅峰之作，几何对称设计与精美雕塑相结合。',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      size: '800 hectares',
      flowers: 'Formal parterres',
      season: 'April-October'
    },
    {
      id: 4,
      name: 'Shakkei Gardens',
      location: 'Japan',
      description: '借景园艺，将远山融入庭院设计，实现自然与人工的完美融合。',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      size: 'Varies by garden',
      flowers: 'Seasonal arrangements',
      season: 'Year-round'
    }
  ]

  return (
    <div className="cultivated-beauty">
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
            Cultivated Beauty
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Discover the harmonious marriage of human artistry and natural splendor, where gardens become living masterpieces.
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
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{beauty.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Flowers:</span>
                  <span className="detail-value">{beauty.flowers}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Season:</span>
                  <span className="detail-value">{beauty.season}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="beauties-info">
        <div className="info-content">
          <h2>Art Meets Nature</h2>
          <p>
            Cultivated beauty represents humanity's desire to enhance and celebrate natural aesthetics 
            through thoughtful design and meticulous care. These spaces demonstrate how human creativity 
            can work in harmony with nature to produce environments that surpass what either could 
            achieve alone.
          </p>
          <p>
            Garden design reflects cultural values and artistic movements across civilizations. 
            From the geometric precision of French formal gardens to the contemplative simplicity 
            of Japanese zen gardens, each tradition reveals unique perspectives on beauty, balance, 
            and humanity's relationship with the natural world. These cultivated spaces serve as 
            sanctuaries for both plants and people.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CultivatedBeauty