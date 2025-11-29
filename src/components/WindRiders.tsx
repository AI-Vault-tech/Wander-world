import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './WindRiders.css'

const WindRiders = () => {
  const windMasters = [
    {
      id: 'albatross',
      name: 'Wandering Albatross',
      scientificName: 'Diomedea exulans',
      description: 'Soars for hours without flapping wings, using dynamic soaring to harness wind energy.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '3.5m',
      habitat: 'Southern Ocean and sub-Antarctic islands',
      diet: 'Squid, fish, krill, carrion',
      funFact: 'Has the largest wingspan of any living bird and can circumnavigate the globe in a single journey'
    },
    {
      id: 'vulture',
      name: 'Andean Condor',
      scientificName: 'Vultur gryphus',
      description: 'Uses thermal updrafts to soar effortlessly while scanning for carrion across vast landscapes.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '3.2m',
      habitat: 'Mountains and coastal areas of South America',
      diet: 'Carrion',
      funFact: 'With a wingspan reaching over 10 feet, it\'s one of the world\'s largest flying birds'
    },
    {
      id: 'eagle',
      name: 'Golden Eagle',
      scientificName: 'Aquila chrysaetos',
      description: 'Exploits mountain thermals and updrafts for energy-efficient hunting and territorial patrols.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      wingspan: '2.3m',
      habitat: 'Mountains, hills, cliffs, open country across Northern Hemisphere',
      diet: 'Medium-sized mammals and birds, occasionally reptiles and fish',
      funFact: 'Can dive at speeds over 150 mph and has exceptional eyesight 8 times sharper than humans'
    },
    {
      id: 'pelican',
      name: 'American White Pelican',
      scientificName: 'Pelecanus erythrorhynchos',
      description: 'Glides in coordinated flocks to conserve energy during long migrations and foraging flights.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      wingspan: '3m',
      habitat: 'Shallow lakes, rivers, and wetlands of western and central North America',
      diet: 'Fish, crayfish, amphibians, turtles',
      funFact: 'Cooperatively herd fish into shallow water before scooping them up with their pouched bills'
    },
    {
      id: 'frigatebird',
      name: 'Magnificent Frigatebird',
      scientificName: 'Fregata magnificens',
      description: 'Soars for weeks without landing, exploiting trade winds and updrafts for effortless flight.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      wingspan: '2.3m',
      habitat: 'Tropical oceans, especially around coral reefs and islands',
      diet: 'Fish, squid, jellyfish, stolen food from other birds',
      funFact: 'Has the highest ratio of wing area to body weight of any bird, enabling extended soaring flight'
    },
    {
      id: 'kite',
      name: 'Swallow-tailed Kite',
      scientificName: 'Elanoides forficatus',
      description: 'Performs acrobatic aerial maneuvers while gliding effortlessly on air currents.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '1.2m',
      habitat: 'Forested wetlands, swamps, and riverine forests of the Americas',
      diet: 'Insects, spiders, tree frogs, lizards, nestling birds, fruit',
      funFact: 'Builds large communal nests high in trees and can catch and eat prey while flying'
    }
  ]

  return (
    <div className="wind-riders">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Wind Riders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of aerial navigation who harness wind currents for effortless soaring and gliding
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
            <h2>Aerial Athletes</h2>
            <p>
              High above the Earth's surface, where air currents dance and swirl, a select group of birds 
              have evolved to become masters of wind-powered flight. These wind riders have developed 
              extraordinary adaptations that allow them to harness the invisible forces of nature, 
              transforming wind into a means of effortless transportation. Through dynamic soaring, 
              thermal riding, and precise wing control, they can remain airborne for hours or even days 
              without a single wingbeat. Their specialized wing shapes, lightweight bones, and acute 
              sensitivity to air pressure changes enable them to navigate complex aerial environments 
              with unmatched efficiency. These aerial athletes play crucial roles in their ecosystems, 
              serving as long-distance pollinators, seed dispersers, and scavengers that help maintain 
              ecological balance across vast geographical areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Cards */}
      <section className="birds-grid">
        <div className="container">
          {windMasters.map((master, index) => (
            <motion.div
              key={master.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={master.image} alt={master.name} />
              </div>
              <div className="bird-info">
                <h3>{master.name}</h3>
                <p className="scientific-name">{master.scientificName}</p>
                <p className="description">{master.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Wingspan:</span>
                    <span className="stat-value">{master.wingspan}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{master.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{master.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {master.funFact}
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

export default WindRiders