import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AquaticSpecialists.css'

const AquaticSpecialists = () => {
  const aquaticBirds = [
    {
      id: 'penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'Largest penguin species that dives to incredible depths in the Antarctic Ocean.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1.2m',
      habitat: 'Antarctic pack ice and ocean',
      diet: 'Fish, krill, squid',
      funFact: 'Males incubate eggs on their feet for 64 days during the brutal Antarctic winter, surviving temperatures as low as -40°C'
    },
    {
      id: 'cormorant',
      name: 'Great Cormorant',
      scientificName: 'Phalacrocorax carbo',
      description: 'Expert diver that pursues fish underwater using powerful feet for propulsion.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1m',
      habitat: 'Coastal areas, lakes, rivers across Europe, Asia, Africa, and Australasia',
      diet: 'Fish, eels, crustaceans',
      funFact: 'Bones are solid rather than hollow, helping them dive deeper underwater'
    },
    {
      id: 'grebe',
      name: 'Great Crested Grebe',
      scientificName: 'Podiceps cristatus',
      description: 'Elegant diving bird with lobed toes for efficient underwater propulsion.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.5m',
      habitat: 'Lakes and slow-moving rivers across Europe, Asia, and Africa',
      diet: 'Fish, crustaceans, aquatic insects, mollusks',
      funFact: 'Pairs perform an intricate courtship ritual where they present each other with weeds'
    },
    {
      id: 'darter',
      name: 'Anhinga',
      scientificName: 'Anhinga anhinga',
      description: 'Snakebird that spears fish with its sharp bill while submerged.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.9m',
      habitat: 'Freshwater swamps, lakes, slow-moving rivers of the Americas',
      diet: 'Fish, aquatic insects, crustaceans, small reptiles',
      funFact: 'Has no waterproofing on its feathers, allowing it to sink underwater to hunt'
    },
    {
      id: 'loon',
      name: 'Common Loon',
      scientificName: 'Gavia immer',
      description: 'Excellent swimmer and diver with feet positioned far back for underwater propulsion.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.8m',
      habitat: 'Lakes and ponds in northern regions of North America and Eurasia',
      diet: 'Fish, crustaceans, aquatic insects',
      funFact: 'Cannot walk well on land due to leg position but is incredibly agile underwater'
    },
    {
      id: 'kingfisher',
      name: 'Common Kingfisher',
      scientificName: 'Alcedo atthis',
      description: 'Dives at high speed to catch fish, entering water with minimal splash.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.17m',
      habitat: 'Rivers, streams, lakes with clear water across Europe, Asia, and North Africa',
      diet: 'Fish, aquatic insects, crustaceans',
      funFact: 'Can see UV light, helping it spot fish against reflections on water surfaces'
    }
  ]

  return (
    <div className="aquatic-specialists">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aquatic Specialists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that have evolved unique adaptations for life in and around water
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="intro-content"
          >
            <h2>Masters of the Aquatic Realm</h2>
            <p>
              These extraordinary birds have developed specialized adaptations that make them 
              supremely efficient in aquatic environments. From the solid bones of cormorants 
              that aid deep diving to the lobed toes of grebes that provide powerful underwater 
              propulsion, each species has evolved unique solutions for hunting, feeding, and 
              navigating in water. Their remarkable physical characteristics - waterproof 
              feathers, specialized bills, and modified limbs - enable them to exploit marine 
              and freshwater resources with unmatched efficiency. These aquatic specialists 
              showcase the seamless integration between form and function in the natural world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {aquaticBirds.map((bird, index) => (
            <motion.div
              key={bird.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={bird.image} alt={bird.name} />
              </div>
              <div className="bird-info">
                <h3>{bird.name}</h3>
                <p className="scientific-name">{bird.scientificName}</p>
                <p className="description">{bird.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{bird.height || bird.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{bird.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{bird.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {bird.funFact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Back to Birds World */}
      <section className="navigation-section">
        <div className="container">
          <Link to="/birds-world" className="back-link">
            ← Back to Birds World
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AquaticSpecialists