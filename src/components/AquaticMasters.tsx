import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AquaticMasters.css'

const AquaticMasters = () => {
  const aquaticBirds = [
    {
      id: 'penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'Dives to incredible depths in the Antarctic Ocean, holding breath for up to 22 minutes.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1.2m',
      habitat: 'Antarctic pack ice and ocean',
      diet: 'Fish, krill, squid',
      funFact: 'Males incubate eggs on their feet for 64 days during the brutal Antarctic winter'
    },
    {
      id: 'albatross',
      name: 'Wandering Albatross',
      scientificName: 'Diomedea exulans',
      description: 'Soars effortlessly for hours with wingspan reaching up to 3.5 meters.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      height: '1.3m',
      wingspan: '3.5m',
      habitat: 'Southern Ocean and Antarctic waters',
      diet: 'Fish, squid, krill, carrion',
      funFact: 'Can travel 100,000 km in a single foraging trip and rarely touches land except to breed'
    },
    {
      id: 'pelican',
      name: 'Australian Pelican',
      scientificName: 'Pelecanus conspicillatus',
      description: 'Uses expandable throat pouch to scoop up fish from water surface.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.8m',
      wingspan: '2.5m',
      habitat: 'Lakes, rivers, coastal waters across Australia and nearby regions',
      diet: 'Fish, crustaceans, aquatic insects',
      funFact: 'Has the longest bill of any bird and can hold up to 13 liters of water in its pouch'
    },
    {
      id: 'kingfisher',
      name: 'Common Kingfisher',
      scientificName: 'Alcedo atthis',
      description: 'Dives at high speed to catch fish, entering water with minimal splash.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.17m',
      habitat: 'Rivers, streams, lakes with clear water across Europe, Asia, and North Africa',
      diet: 'Fish, aquatic insects, crustaceans',
      funFact: 'Can see UV light, helping it spot fish against reflections on water surfaces'
    },
    {
      id: 'cormorant',
      name: 'Great Cormorant',
      scientificName: 'Phalacrocorax carbo',
      description: 'Expert diver that pursues fish underwater using powerful feet for propulsion.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1m',
      habitat: 'Coastal areas, lakes, rivers across Europe, Asia, Africa, and Australasia',
      diet: 'Fish, eels, crustaceans',
      funFact: 'Bones are solid rather than hollow, helping them dive deeper underwater'
    },
    {
      id: 'loon',
      name: 'Common Loon',
      scientificName: 'Gavia immer',
      description: 'Excellent swimmer and diver with feet positioned far back for underwater propulsion.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.8m',
      habitat: 'Lakes and ponds in northern regions of North America and Eurasia',
      diet: 'Fish, crustaceans, aquatic insects',
      funFact: 'Cannot walk well on land due to leg position but is incredibly agile underwater'
    }
  ]

  return (
    <div className="aquatic-masters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aquatic Masters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that have mastered life on, in, and above water
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
            <h2>Waterborne Experts</h2>
            <p>
              These extraordinary birds have evolved specialized adaptations that make them supreme 
              rulers of aquatic environments. From the deep-diving penguins to the soaring albatrosses, 
              these aquatic masters demonstrate the incredible diversity of evolutionary solutions 
              for life in and around water. Their unique physical characteristics - from waterproof 
              feathers to specialized bills and feet - enable them to exploit marine and freshwater 
              resources with unmatched efficiency. These birds showcase the seamless integration 
              between form and function in the natural world.
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
                  {bird.wingspan && (
                    <div className="stat">
                      <span className="stat-label">Wingspan:</span>
                      <span className="stat-value">{bird.wingspan}</span>
                    </div>
                  )}
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

export default AquaticMasters