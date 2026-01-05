import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MigratoryMarvels.css'

const MigratoryMarvels = () => {
  const migratoryBirds = [
    {
      id: 'arctic-tern',
      name: 'Arctic Tern',
      scientificName: 'Sterna paradisaea',
      description: 'Champion of migration, traveling roughly 70,000 km annually from Arctic to Antarctic and back.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.35m',
      habitat: 'Arctic and subarctic coasts in summer, Antarctic pack ice in winter',
      diet: 'Fish, crustaceans, insects, marine invertebrates',
      funFact: 'Experiences more daylight than any other creature, seeing two summers each year'
    },
    {
      id: 'bar-tailed-godwit',
      name: 'Bar-tailed Godwit',
      scientificName: 'Limosa lapponica',
      description: 'Flies non-stop for 11,000 km from Alaska to New Zealand, the longest non-stop flight.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.4m',
      habitat: 'Coastal mudflats, estuaries, tundra wetlands',
      diet: 'Mollusks, marine worms, small crustaceans',
      funFact: 'Can fly for nine days straight without eating, drinking, or sleeping'
    },
    {
      id: 'ruby-throated-hummingbird',
      name: 'Ruby-throated Hummingbird',
      scientificName: 'Archilochus colubris',
      description: 'Tiny bird that crosses the Gulf of Mexico in a single 500-mile flight each spring.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.08m',
      habitat: 'Woodlands, gardens, meadows of eastern North America',
      diet: 'Nectar, small insects, spiders',
      funFact: 'Can beat its wings up to 53 times per second and is the only bird that can fly backwards'
    },
    {
      id: 'swainsons-hawk',
      name: 'Swainson\'s Hawk',
      scientificName: 'Buteo swainsoni',
      description: 'Raptor that travels 10,000 km from North America to Patagonia each autumn.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.5m',
      wingspan: '1.3m',
      habitat: 'Grasslands, agricultural fields, prairies of western North America',
      diet: 'Voles, mice, ground squirrels, insects, reptiles',
      funFact: 'Hunts both day and night during migration, unlike most hawks that hunt only during the day'
    },
    {
      id: 'red-knot',
      name: 'Red Knot',
      scientificName: 'Calidris canutus',
      description: 'Shorebird that flies 15,000 km from Arctic to Tierra del Fuego each year.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Arctic tundra in summer, coastal areas in winter',
      diet: 'Mollusks, marine worms, small crustaceans, berries',
      funFact: 'Doubles its body weight before migration and shrinks its digestive organs to save energy'
    },
    {
      id: 'loggerhead-shrike',
      name: 'Loggerhead Shrike',
      scientificName: 'Lanius ludovicianus',
      description: 'Songbird that makes 3,000 km journeys between North American breeding and wintering grounds.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.2m',
      habitat: 'Open grasslands, agricultural areas, scrublands',
      diet: 'Insects, small mammals, birds, reptiles',
      funFact: 'Impales its prey on thorns or barbed wire, earning it the nickname "butcher bird"'
    }
  ]

  return (
    <div className="migratory-marvels">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Migratory Marvels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds known for their extraordinary long-distance migrations across continents and oceans
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
            <h2>Journeys Across the Globe</h2>
            <p>
              These remarkable birds undertake some of the most extraordinary journeys in the 
              natural world, navigating thousands of kilometers across continents and oceans 
              with incredible precision. Their migrations are driven by seasonal changes in 
              food availability, breeding opportunities, and climate conditions. Equipped with 
              specialized physiological adaptations and innate navigational abilities, these 
              migratory marvels demonstrate the incredible endurance and determination of avian 
              life. Their journeys connect ecosystems across the globe and highlight the 
              interconnectedness of our planet's environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {migratoryBirds.map((bird, index) => (
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
                    <span className="stat-value">{bird.length}</span>
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

export default MigratoryMarvels