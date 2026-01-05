import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CooperativeBreeders.css'

const CooperativeBreeders = () => {
  const cooperativeBirds = [
    {
      id: 'flamingo',
      name: 'Greater Flamingo',
      scientificName: 'Phoenicopterus roseus',
      description: 'Known for nesting in large colonies and cooperative chick-rearing behaviors.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1.5m',
      habitat: 'Shallow lakes, lagoons, salt pans',
      diet: 'Algae, small crustaceans, mollusks, insects',
      funFact: 'All flamingos are born gray and turn pink from pigments in their food'
    },
    {
      id: 'puffin',
      name: 'Atlantic Puffin',
      scientificName: 'Fratercula arctica',
      description: 'Forms large breeding colonies and exhibits cooperative behaviors during nesting season.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.3m',
      habitat: 'Coastal cliffs and islands of the North Atlantic',
      diet: 'Fish, especially sand eels, crustaceans, squid',
      funFact: 'Can carry several fish in its beak at once and flaps its wings up to 400 times per minute'
    },
    {
      id: 'plover',
      name: 'Killdeer',
      scientificName: 'Charadrius vociferus',
      description: 'Performs cooperative distraction displays to protect nests and young from predators.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open fields, lawns, parking lots, beaches across North America',
      diet: 'Insects, worms, spiders, small crustaceans, berries',
      funFact: 'Famous for its broken-wing act to lure predators away from nests'
    },
    {
      id: 'weaver',
      name: 'Sociable Weaver',
      scientificName: 'Philetairus socius',
      description: 'Builds massive communal nests that house multiple families and can last for decades.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.15m',
      habitat: 'Semi-arid regions of southern Africa',
      diet: 'Seeds, insects',
      funFact: 'Their communal nests can house over 100 pairs and provide temperature regulation for all residents'
    },
    {
      id: 'hornbill',
      name: 'Southern Ground Hornbill',
      scientificName: 'Bucorvus leadbeateri',
      description: 'Lives in family groups where non-breeding helpers assist in raising chicks.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1.2m',
      habitat: 'Savannas and woodlands of southern Africa',
      diet: 'Reptiles, amphibians, insects, small mammals, birds, eggs',
      funFact: 'Groups can consist of up to 12 individuals, but only one pair breeds at a time'
    },
    {
      id: 'crane',
      name: 'Sandhill Crane',
      scientificName: 'Antigone canadensis',
      description: 'Mates for life and engages in elaborate coordinated dances during courtship.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      height: '1.2m',
      habitat: 'Wetlands, grasslands, agricultural fields across North America',
      diet: 'Grains, tubers, insects, small vertebrates, berries',
      funFact: 'Perform synchronized dancing rituals that involve bowing, jumping, and wing flapping'
    }
  ]

  return (
    <div className="cooperative-breeders">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Cooperative Breeders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that exhibit remarkable cooperative behaviors in breeding and raising young
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
            <h2>Teamwork in the Avian World</h2>
            <p>
              While many birds follow the traditional model of pair bonding for reproduction, 
              these cooperative breeders demonstrate that teamwork can be an equally successful 
              strategy. These birds engage in complex social behaviors that involve multiple 
              individuals contributing to the care and upbringing of offspring. From the 
              intricately coordinated courtship dances of cranes to the communal nesting 
              societies of weavers, these species showcase the evolutionary advantages of 
              cooperation. Their behaviors provide insights into the development of social 
              structures and the benefits of shared parental responsibilities in ensuring 
              the survival of the next generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {cooperativeBirds.map((bird, index) => (
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

export default CooperativeBreeders