import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ExtremeSurvivors.css'

const ExtremeSurvivors = () => {
  const extremeBirds = [
    {
      id: 'emperor-penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'Largest penguin species that endures the harshest Antarctic winters.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1.2m',
      habitat: 'Antarctic pack ice and ocean',
      diet: 'Fish, krill, squid',
      funFact: 'Males incubate eggs on their feet for 64 days during the brutal Antarctic winter'
    },
    {
      id: 'snow-bunting',
      name: 'Snow Bunting',
      scientificName: 'Plectrophenax nivalis',
      description: 'Breeds in the high Arctic and can withstand temperatures as low as -40°C.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.16m',
      habitat: 'Arctic tundra, mountain peaks, coastal areas',
      diet: 'Seeds, insects, spiders, berries',
      funFact: 'Has feathered legs and feet to protect against freezing temperatures'
    },
    {
      id: 'hoatzin',
      name: 'Hoatzin',
      scientificName: 'Opisthocomus hoazin',
      description: 'Unique Amazonian bird that digests leaves like a cow with a specialized stomach.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.64m',
      habitat: 'Swamps, mangroves, river forests of the Amazon and Orinoco basins',
      diet: 'Leaves, buds, fruits',
      funFact: 'Chicks have claws on their wings to help them climb back to the nest'
    },
    {
      id: 'macaroni-penguin',
      name: 'Macaroni Penguin',
      scientificName: 'Eudyptes chrysolophus',
      description: 'Distinguished by its bright yellow crest and ability to dive to great depths.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '0.7m',
      habitat: 'Subantarctic islands and Antarctic Peninsula',
      diet: 'Krill, fish, squid',
      funFact: 'Named after the 18th-century fashion trend of "macaroni" - a term for foppishness'
    },
    {
      id: 'ptarmigan',
      name: 'Willow Ptarmigan',
      scientificName: 'Lagopus lagopus',
      description: 'Changes color with seasons and survives brutal Arctic winters with feathered feet.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.36m',
      habitat: 'Arctic and subarctic tundra, boreal forests',
      diet: 'Buds, leaves, berries, seeds, insects',
      funFact: 'Only ptarmigan species where both males and females grow white winter plumage'
    },
    {
      id: 'petrel',
      name: 'Antarctic Petrel',
      scientificName: 'Thalassoica antarctica',
      description: 'Seabird that breeds on Antarctic ice shelves and spends most of its life at sea.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.45m',
      habitat: 'Antarctic ice shelves and surrounding waters',
      diet: 'Fish, krill, squid',
      funFact: 'Can drink seawater thanks to special salt-filtering glands above their eyes'
    }
  ]

  return (
    <div className="extreme-survivors">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Extreme Survivors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that live in the most extreme environments on Earth
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
            <h2>Masters of the Extremes</h2>
            <p>
              These remarkable birds have evolved extraordinary adaptations to survive in some 
              of the most hostile environments on our planet. From the frozen expanses of Antarctica 
              to the scorching deserts and oxygen-thin mountaintops, these extreme survivors 
              demonstrate the incredible resilience and adaptability of life. Their specialized 
              physiological and behavioral adaptations allow them to thrive where most other 
              creatures would perish, showcasing the power of evolution to produce life forms 
              perfectly suited to their challenging habitats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {extremeBirds.map((bird, index) => (
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

export default ExtremeSurvivors