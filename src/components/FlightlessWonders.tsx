import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './FlightlessWonders.css'

const FlightlessWonders = () => {
  const flightlessBirds = [
    {
      id: 'ostrich',
      name: 'Ostrich',
      scientificName: 'Struthio camelus',
      description: 'Largest living bird that runs up to 70 km/h to escape predators.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '2.8m',
      habitat: 'Savannas and deserts of Africa',
      diet: 'Plants, seeds, insects, small reptiles',
      funFact: 'Has the largest eyes of any land animal and can swallow objects as large as apples'
    },
    {
      id: 'kiwi',
      name: 'Kiwi',
      scientificName: 'Apteryx spp.',
      description: 'New Zealand\'s national bird with nostrils at the tip of its long bill for excellent smell.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      height: '0.4m',
      habitat: 'Forests and scrublands of New Zealand',
      diet: 'Insects, worms, spiders, berries, seeds',
      funFact: 'Lays one of the largest eggs relative to body size of any bird species'
    },
    {
      id: 'penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'Flightless seabird that dives to incredible depths in the Antarctic Ocean.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.2m',
      habitat: 'Antarctic pack ice and ocean',
      diet: 'Fish, krill, squid',
      funFact: 'Males incubate eggs on their feet for 64 days during the brutal Antarctic winter'
    },
    {
      id: 'cassowary',
      name: 'Southern Cassowary',
      scientificName: 'Casuarius casuarius',
      description: 'Large flightless bird with a distinctive casque and dangerously sharp claws.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '1.8m',
      habitat: 'Rainforests of New Guinea and northeastern Australia',
      diet: 'Fruits, insects, small animals, carrion',
      funFact: 'Considered the world\'s most dangerous bird, with dagger-like claws on its feet'
    },
    {
      id: 'kakapo',
      name: 'Kakapo',
      scientificName: 'Strigops habroptilus',
      description: 'The world\'s only flightless parrot, known for its owl-like face and nocturnal habits.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '0.6m',
      habitat: 'Forests of New Zealand',
      diet: 'Fruits, seeds, plants, pollen, nectar',
      funFact: 'The heaviest parrot in the world and is critically endangered with only around 200 individuals left'
    },
    {
      id: 'kea',
      name: 'Kea',
      scientificName: 'Nestor notabilis',
      description: 'World\'s only alpine parrot, known for its intelligence and curiosity.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.48m',
      habitat: 'Mountains forests of New Zealand',
      diet: 'Seeds, berries, insects, nectar, occasionally carrion',
      funFact: 'Known for its mischievous behavior and ability to solve complex puzzles'
    }
  ]

  return (
    <div className="flightless-wonders">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Flightless Wonders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that traded flight for terrestrial adaptations
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
            <h2>Grounded Giants</h2>
            <p>
              These remarkable birds have evolved to thrive without the ability to fly, developing 
              extraordinary terrestrial adaptations instead. From the lightning-fast ostrich to 
              the deep-diving penguins, these flightless wonders demonstrate that there are 
              multiple paths to success in the avian world. Their inability to fly has freed 
              them to excel in other areas - speed, strength, swimming ability, and specialized 
              feeding techniques. These birds showcase the incredible diversity of evolutionary 
              solutions to the challenges of survival.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {flightlessBirds.map((bird, index) => (
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

export default FlightlessWonders