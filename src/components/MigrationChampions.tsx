import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MigrationChampions.css'

const MigrationChampions = () => {
  const migrationExperts = [
    {
      id: 'arctic-tern',
      name: 'Arctic Tern',
      scientificName: 'Sterna paradisaea',
      description: 'Flies roughly 70,000 km annually from Arctic to Antarctic and back.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.35m',
      habitat: 'Arctic and subarctic coasts in summer, Antarctic pack ice in winter',
      diet: 'Fish, crustaceans, insects, marine invertebrates',
      funFact: 'Experiences more daylight than any other creature, seeing two summers each year'
    },
    {
      id: 'monarch-butterfly',
      name: 'Monarch Butterfly',
      scientificName: 'Danaus plexippus',
      description: 'Travels over 4,000 km from Canada to Mexico in multigenerational journey.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '0.1m',
      habitat: 'Meadows, fields, gardens across North America',
      diet: 'Nectar from milkweed, goldenrod, asters, clover',
      funFact: 'No single butterfly completes the round trip - it takes 4-5 generations to return north'
    },
    {
      id: 'humpback-whale',
      name: 'Humpback Whale',
      scientificName: 'Megaptera novaeangliae',
      description: 'Migrates up to 8,000 km between polar feeding areas and tropical breeding grounds.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '16m',
      habitat: 'Oceans worldwide, migrating between polar and tropical waters',
      diet: 'Krill, small fish, plankton',
      funFact: 'Songs can last up to 20 minutes and be heard 20 miles away underwater'
    },
    {
      id: 'bar-tailed-godwit',
      name: 'Bar-tailed Godwit',
      scientificName: 'Limosa lapponica',
      description: 'Flies 11,000 km non-stop from Alaska to New Zealand without feeding.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.4m',
      habitat: 'Coastal mudflats, estuaries, tundra of Arctic and subarctic regions',
      diet: 'Mollusks, marine worms, small crustaceans, insects',
      funFact: 'Flies for 9 days straight without stopping, eating, or drinking'
    },
    {
      id: 'leatherback-turtle',
      name: 'Leatherback Sea Turtle',
      scientificName: 'Dermochelys coriacea',
      description: 'Migrates across entire ocean basins, diving to depths of over 1,200 meters.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '2m',
      habitat: 'Open oceans worldwide, nesting on tropical beaches',
      diet: 'Jellyfish, salps, sea squirts',
      funFact: 'Can regulate body temperature and dive deeper than any other turtle species'
    },
    {
      id: 'wildebeest',
      name: 'Wildebeest',
      scientificName: 'Connochaetes taurinus',
      description: 'Participates in the Great Migration, traveling 1,000+ km annually in East Africa.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '2.4m',
      habitat: 'Savannas and grasslands of East Africa',
      diet: 'Grasses, leaves, fruits, shoots',
      funFact: 'Over 1.5 million wildebeest migrate annually, creating one of nature\'s greatest spectacles'
    }
  ]

  return (
    <div className="migration-champions">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Migration Champions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Extraordinary travelers who undertake the longest and most challenging journeys in the animal kingdom
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
            <h2>Journey Masters</h2>
            <p>
              Across the globe, certain animals embark on epic journeys that test the limits of endurance 
              and navigation. These migration champions travel thousands of kilometers each year, guided 
              by innate biological compasses and environmental cues that scientists are only beginning 
              to understand. Their migrations serve critical purposes: finding food, breeding, escaping 
              harsh weather, and ensuring the survival of their species. Some, like the Arctic tern, 
              experience two summers each year by traveling from pole to pole, while others, such as 
              the bar-tailed godwit, fly non-stop for days across open ocean without rest. These 
              extraordinary journeys require tremendous physical preparation, with animals doubling 
              their body weight in fat reserves and developing specialized physiological adaptations. 
              The migration champions demonstrate nature's incredible capacity for endurance and 
              precision navigation, inspiring awe and scientific inquiry into the mechanisms that 
              make these epic travels possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expert Cards */}
      <section className="birds-grid">
        <div className="container">
          {migrationExperts.map((expert, index) => (
            <motion.div
              key={expert.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={expert.image} alt={expert.name} />
              </div>
              <div className="bird-info">
                <h3>{expert.name}</h3>
                <p className="scientific-name">{expert.scientificName}</p>
                <p className="description">{expert.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{expert.length || expert.wingspan}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{expert.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{expert.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {expert.funFact}
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

export default MigrationChampions