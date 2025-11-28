import { motion } from 'framer-motion'
import './Islands.css'

const Islands = () => {
  const islands = [
    {
      id: 1,
      name: 'Maldives',
      location: 'Indian Ocean',
      description: 'A tropical paradise of 1,192 coral islands grouped into 26 atolls, known for crystal-clear waters and overwater bungalows.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '298 km²',
      fact: 'Has the world\'s first underwater restaurant'
    },
    {
      id: 2,
      name: 'Santorini',
      location: 'Greece',
      description: 'A stunning volcanic island with whitewashed buildings, blue-domed churches, and breathtaking sunsets over the caldera.',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1920&q=80',
      size: '73 km²',
      fact: 'Created by one of the largest volcanic eruptions in recorded history'
    },
    {
      id: 3,
      name: 'Bora Bora',
      location: 'French Polynesia',
      description: 'A South Pacific island surrounded by a lagoon and coral reef, with Mount Otemanu rising dramatically from the center.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      size: '40.3 km²',
      fact: 'Used as a filming location for the movie "Moana"'
    },
    {
      id: 4,
      name: 'Seychelles',
      location: 'Indian Ocean',
      description: 'An archipelago of 115 islands with granite peaks, coral reefs, and some of the world\'s oldest oceanic islands.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '459 km²',
      fact: 'Home to coco de mer, the world\'s heaviest seed'
    },
    {
      id: 5,
      name: 'Isle of Skye',
      location: 'Scotland',
      description: 'A rugged island known for its dramatic landscapes, ancient castles, and the iconic Quiraing rock formations.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
      size: '1,656 km²',
      fact: 'Inspired numerous songs, poems, and films including "Braveheart"'
    },
    {
      id: 6,
      name: 'Galápagos Islands',
      location: 'Ecuador',
      description: 'A volcanic archipelago famous for its unique wildlife that inspired Charles Darwin\'s theory of evolution.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
      size: '7,880 km²',
      fact: 'Contains the world\'s only population of pink iguanas'
    }
  ]

  return (
    <div className="islands">
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
            Paradise Islands
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Explore the world's most breathtaking islands, where turquoise waters meet pristine beaches and unique cultures flourish.
          </motion.p>
        </div>
      </motion.div>

      <section className="islands-grid">
        {islands.map((island, index) => (
          <motion.div
            key={island.id}
            className="island-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="island-image-container">
              <div 
                className="island-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${island.image}')` }}
              />
            </div>
            <div className="island-content">
              <h3>{island.name}</h3>
              <p className="location">{island.location}</p>
              <p className="description">{island.description}</p>
              <div className="island-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{island.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{island.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="islands-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>Islands of Wonder</h2>
          <p>
            Islands are nature's most isolated masterpieces, where unique ecosystems have evolved in splendid isolation. 
            They offer a sense of escape and adventure, with their own distinct cultures, wildlife, and landscapes 
            that can't be found anywhere else on Earth.
          </p>
          <p>
            From the volcanic peaks of the Galápagos to the coral atolls of the Maldives, islands showcase the 
            incredible diversity of our planet. They are places of both relaxation and discovery, where visitors 
            can experience unparalleled natural beauty and rich cultural traditions.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default Islands