import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './OceanNavigators.css'

const OceanNavigators = () => {
  const oceanBirds = [
    {
      id: 'albatross',
      name: 'Wandering Albatross',
      scientificName: 'Diomedea exulans',
      description: 'Master of dynamic soaring with the largest wingspan of any living bird.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '3.5m',
      habitat: 'Southern Ocean and subantarctic islands',
      diet: 'Squid, fish, krill, carrion',
      funFact: 'Can circumnavigate the globe in just 46 days without flapping wings'
    },
    {
      id: 'petrel',
      name: 'Snow Petrel',
      scientificName: 'Pagodroma nivea',
      description: 'The only bird known to breed exclusively on ice shelves in Antarctica.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '0.8m',
      habitat: 'Antarctic ice shelves and surrounding waters',
      diet: 'Fish, krill, squid, carrion',
      funFact: 'Nests in ice caves and can dive underwater to catch prey'
    },
    {
      id: 'penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'The tallest and heaviest penguin species, diving to depths of over 500 meters.',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
      height: '1.2m',
      habitat: 'Antarctic sea ice',
      diet: 'Fish, krill, squid',
      funFact: 'Males incubate eggs on their feet for 64 days during the brutal Antarctic winter'
    },
    {
      id: 'booby',
      name: 'Blue-footed Booby',
      scientificName: 'Sula nebouxii',
      description: 'Colorful seabird famous for its bright blue feet and plunge diving.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      length: '0.8m',
      habitat: 'Tropical and subtropical eastern Pacific Ocean',
      diet: 'Fish, especially sardines and anchovies',
      funFact: 'Brightness of feet indicates health and influences mating success'
    },
    {
      id: 'gannet',
      name: 'Northern Gannet',
      scientificName: 'Morus bassanus',
      description: 'Striking seabird that dives at high speeds to catch fish underwater.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      wingspan: '1.8m',
      habitat: 'North Atlantic Ocean and coastal areas',
      diet: 'Fish, especially herring and mackerel',
      funFact: 'Can dive at speeds up to 100 km/h, cushioned by air sacs in its body'
    },
    {
      id: 'tern',
      name: 'Arctic Tern',
      scientificName: 'Sterna paradisaea',
      description: 'The ultimate traveler, making the longest migration of any animal on Earth each year.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.35m',
      habitat: 'Arctic and subarctic coasts in summer, Antarctic pack ice in winter',
      diet: 'Fish, krill, squid, crustaceans',
      funFact: 'Flies roughly 70,000 km (44,000 miles) annually, experiencing two summers each year'
    }
  ]

  return (
    <div className="ocean-navigators">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Ocean Navigators</h1>
          <p>Seabirds that traverse vast oceans and coastal waters</p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The world's oceans cover more than 70% of Earth's surface, and countless seabirds have evolved remarkable adaptations to thrive in this vast aquatic realm. These incredible navigators spend most of their lives at sea, only returning to land for breeding. With specialized salt glands, waterproof feathers, and exceptional flying or diving abilities, they represent some of nature's most impressive marine specialists.
          </motion.p>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {oceanBirds.map((bird, index) => (
            <motion.div
              key={bird.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bird-image-container">
                <img src={bird.image} alt={bird.name} />
              </div>
              <div className="bird-info">
                <h3>{bird.name}</h3>
                <p className="scientific-name">{bird.scientificName}</p>
                <p className="description">{bird.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">{bird.wingspan ? 'Wingspan:' : bird.height ? 'Height:' : 'Length:'}</span>
                    <span className="stat-value">{bird.wingspan || bird.height || bird.length}</span>
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

      {/* Navigation Back */}
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

export default OceanNavigators