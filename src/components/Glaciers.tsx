import { motion } from 'framer-motion'
import './Glaciers.css'

const Glaciers = () => {
  const glaciers = [
    {
      id: 1,
      name: 'Perito Moreno Glacier',
      location: 'Argentina',
      description: 'One of the few advancing glaciers in the world, famous for its dramatic ice calving events and stunning blue ice formations.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '98 square miles',
      fact: 'Moves about 2 meters per day and calves icebergs every 20 minutes'
    },
    {
      id: 2,
      name: 'Lambert Glacier',
      location: 'Antarctica',
      description: 'The world\'s largest glacier, draining about 8% of the Antarctic ice sheet into the ocean.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '250 miles long',
      fact: 'Contains enough ice to raise global sea levels by 30 feet if melted'
    },
    {
      id: 3,
      name: 'Vatnajökull Glacier',
      location: 'Iceland',
      description: 'Europe\'s largest glacier covering 8% of Iceland, featuring ice caves, volcanic activity, and glacial lagoons.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '3,100 square miles',
      fact: 'Home to the largest glacier cave in the world'
    },
    {
      id: 4,
      name: 'Hubbard Glacier',
      location: 'Alaska/Canada',
      description: 'The largest tidewater glacier in North America, known for its pristine wilderness and massive ice formations.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '76 miles long',
      fact: 'Has been growing for the past 100 years despite global warming'
    },
    {
      id: 5,
      name: 'Jostedalsbreen Glacier',
      location: 'Norway',
      description: 'Northern Europe\'s largest glacier, with numerous arms extending into dramatic fjord landscapes.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '177 square miles',
      fact: 'Protected as part of Jostedalsbreen National Park'
    },
    {
      id: 6,
      name: 'Fox and Franz Josef Glaciers',
      location: 'New Zealand',
      description: 'Unique temperate glaciers that descend from alpine heights to rainforests, creating rare glacier-to-rainforest ecosystems.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80',
      size: '7.5 miles long',
      fact: 'Advance and retreat multiple times per year due to high precipitation'
    }
  ]

  return (
    <div className="glaciers">
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
            Frozen Giants
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Witness the majestic beauty of Earth's frozen rivers of ice, where time is measured in millennia and every formation tells a story.
          </motion.p>
        </div>
      </motion.div>

      <section className="glaciers-grid">
        {glaciers.map((glacier, index) => (
          <motion.div
            key={glacier.id}
            className="glacier-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="glacier-image-container">
              <div 
                className="glacier-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${glacier.image}')` }}
              />
            </div>
            <div className="glacier-content">
              <h3>{glacier.name}</h3>
              <p className="location">{glacier.location}</p>
              <p className="description">{glacier.description}</p>
              <div className="glacier-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{glacier.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{glacier.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="glaciers-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>The Sculptors of Landscapes</h2>
          <p>
            Glaciers are massive moving bodies of ice that have shaped the Earth's surface for millions of years. 
            These frozen rivers carve valleys, create fjords, and transport enormous amounts of rock and sediment 
            as they slowly advance and retreat across the landscape.
          </p>
          <p>
            From the dramatic calving events of tidewater glaciers to the ethereal blue ice caves of continental 
            glaciers, these frozen giants represent some of the most dynamic and visually stunning features on 
            our planet. They are also crucial indicators of climate change and play a vital role in global sea levels.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Glaciers