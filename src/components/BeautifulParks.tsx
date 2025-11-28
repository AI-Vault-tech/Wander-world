import { motion } from 'framer-motion'
import './BeautifulParks.css'

const BeautifulParks = () => {
  const parks = [
    {
      id: 1,
      name: 'Central Park',
      location: 'New York, USA',
      description: 'An urban oasis spanning 843 acres in the heart of Manhattan, featuring lakes, meadows, and iconic bridges designed by Frederick Law Olmsted.',
      image: 'https://images.unsplash.com/photo-1598940880645-0bd7e9afb5a0?w=1920&q=80',
      size: '843 acres',
      fact: 'Has 21 playgrounds and 36 bridges'
    },
    {
      id: 2,
      name: 'Hyde Park',
      location: 'London, UK',
      description: 'One of London\'s largest and most famous parks, home to the Serpentine Lake, Speakers\' Corner, and Kensington Palace.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '350 acres',
      fact: 'Site of the Great Exhibition of 1851'
    },
    {
      id: 3,
      name: 'Jardin du Luxembourg',
      location: 'Paris, France',
      description: 'A formal garden with geometric layouts, fountains, and the iconic Medici Fountain, beloved by Parisians and visitors alike.',
      image: 'https://images.unsplash.com/photo-1519817652826-0228150977d9?w=1920&q=80',
      size: '55 acres',
      fact: 'Features 106 statues and 42 acres of gardens'
    },
    {
      id: 4,
      name: 'Stanley Park',
      location: 'Vancouver, Canada',
      description: 'A 1,000-acre peninsula park with beaches, totem poles, and the famous Seawall that offers stunning views of the mountains and ocean.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      size: '1,001 acres',
      fact: 'Largest urban park in Canada'
    },
    {
      id: 5,
      name: 'Tiergarten',
      location: 'Berlin, Germany',
      description: 'A vast urban park that was once a royal hunting ground, now featuring over 200,000 trees and the iconic Victory Column.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      size: '520 acres',
      fact: 'Contains over 2,400 different species of flora'
    },
    {
      id: 6,
      name: 'Ueno Park',
      location: 'Tokyo, Japan',
      description: 'A cultural hub with museums, temples, and beautiful cherry blossom viewing spots, considered one of Tokyo\'s finest parks.',
      image: 'https://images.unsplash.com/photo-1589636909194-5b54d04b2875?w=1920&q=80',
      size: '120 acres',
      fact: 'Home to over 1,000 cherry blossom trees'
    }
  ]

  return (
    <div className="beautiful-parks">
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
            Beautiful Parks
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Discover the world's most magnificent urban and natural parks, where nature and design create spaces of tranquility and wonder.
          </motion.p>
        </div>
      </motion.div>

      <section className="parks-grid">
        {parks.map((park, index) => (
          <motion.div
            key={park.id}
            className="park-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="park-image-container">
              <div 
                className="park-image"
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${park.image}')` }}
              />
            </div>
            <div className="park-content">
              <h3>{park.name}</h3>
              <p className="location">{park.location}</p>
              <p className="description">{park.description}</p>
              <div className="park-details">
                <div className="detail-item">
                  <span className="detail-label">Size:</span>
                  <span className="detail-value">{park.size}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Fact:</span>
                  <span className="detail-value">{park.fact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="parks-info">
        <motion.div
          className="info-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2>Oases of Green</h2>
          <p>
            Parks are the lungs of our cities and the jewels of our natural landscapes. They provide essential 
            green spaces where people can connect with nature, find respite from urban life, and enjoy recreational 
            activities in beautiful surroundings.
          </p>
          <p>
            From the meticulously designed urban parks of Europe to the vast natural preserves that protect 
            wildlife and ecosystems, these green spaces represent our commitment to preserving beauty and 
            biodiversity for future generations. They are places where memories are made and nature's 
            restorative power can be experienced by all.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default BeautifulParks