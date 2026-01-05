import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './LongDistanceChampions.css'

const LongDistanceChampions = () => {
  const enduranceBirds = [
    {
      id: 'arctic-tern',
      name: 'Arctic Tern',
      scientificName: 'Sterna paradisaea',
      description: 'The ultimate traveler, making the longest migration of any animal on Earth each year.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '0.7m',
      habitat: 'Arctic and subarctic coasts in summer, Antarctic pack ice in winter',
      diet: 'Fish, krill, squid, crustaceans',
      funFact: 'Flies roughly 70,000 km (44,000 miles) annually, experiencing two summers each year'
    },
    {
      id: 'swift',
      name: 'Common Swift',
      scientificName: 'Apus apus',
      description: 'Spends almost its entire life airborne, even sleeping while flying.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '0.4m',
      habitat: 'Cities, towns, cliffs, buildings',
      diet: 'Flying insects and spiders caught in flight',
      funFact: 'Can stay airborne for up to 10 months without landing, even mating and sleeping on the wing'
    },
    {
      id: 'albatross',
      name: 'Wandering Albatross',
      scientificName: 'Diomedea exulans',
      description: 'Possesses the largest wingspan of any living bird, spending most of its life airborne over oceans.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80',
      wingspan: '3.5m',
      habitat: 'Southern Ocean and adjacent seas',
      diet: 'Squid, fish, krill, carrion',
      funFact: 'Can fly for hours without flapping wings, using dynamic soaring to harness wind energy'
    },
    {
      id: 'godwit',
      name: 'Bar-tailed Godwit',
      scientificName: 'Limosa lapponica',
      description: 'Holds the record for the longest non-stop flight of any bird.',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
      wingspan: '0.9m',
      habitat: 'Coastal mudflats, estuaries, tundra',
      diet: 'Marine worms, mollusks, crustaceans',
      funFact: 'Flies 11,000 km (7,000 miles) non-stop from Alaska to New Zealand without eating or drinking'
    },
    {
      id: 'swiftlet',
      name: 'Edible-nest Swiftlet',
      scientificName: 'Aerodramus fuciphagus',
      description: 'Nests exclusively in caves and builds its nest from its own saliva.',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80',
      wingspan: '0.15m',
      habitat: 'Caves and cliff faces in Southeast Asia',
      diet: 'Flying insects caught in flight',
      funFact: 'Its nest is considered a delicacy in Chinese cuisine and can sell for thousands of dollars'
    },
    {
      id: 'petrel',
      name: 'Great Shearwater',
      scientificName: 'Puffinus gravis',
      description: 'Undertakes one of the longest annual migrations of any animal.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
      wingspan: '1.1m',
      habitat: 'Open ocean, breeding on remote islands',
      diet: 'Fish, squid, crustaceans',
      funFact: 'Travels over 64,000 km (40,000 miles) annually in a figure-eight pattern across the Atlantic Ocean'
    }
  ]

  return (
    <div className="long-distance-champions">
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
            Long Distance Champions
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Birds that demonstrate extraordinary endurance and stamina in their flights and migrations
          </motion.p>
        </div>
      </motion.div>

      <section className="intro-section">
        <div className="intro-content">
          <h2>Masters of Endurance</h2>
          <p>
            Some birds have evolved to become masters of endurance, capable of sustained flight for days, 
            weeks, or even months at a time. These long-distance champions possess specialized physiological 
            adaptations that allow them to conserve energy, navigate accurately, and maintain flight for 
            seemingly impossible durations.
          </p>
          <p>
            From the Arctic Tern's pole-to-pole journey to the Common Swift's ability to sleep on the wing, 
            these birds showcase the incredible limits of avian endurance and the remarkable adaptations that 
            make such feats possible.
          </p>
        </div>
      </section>

      <section className="birds-grid">
        {enduranceBirds.map((bird, index) => (
          <motion.div
            key={bird.id}
            className="bird-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="bird-image">
              <img src={bird.image} alt={bird.name} />
            </div>
            <div className="bird-content">
              <h3>{bird.name}</h3>
              <p className="scientific-name">{bird.scientificName}</p>
              <p className="description">{bird.description}</p>
              <div className="bird-stats">
                <div className="stat">
                  <span className="stat-label">Wingspan:</span>
                  <span className="stat-value">{bird.wingspan}</span>
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
      </section>

      <section className="navigation-section">
        <div className="navigation-content">
          <h2>Explore More Bird Categories</h2>
          <div className="navigation-links">
            <Link to="/birds-world/flight-masters" className="nav-link">Flight Masters</Link>
            <Link to="/birds-world/ocean-navigators" className="nav-link">Ocean Navigators</Link>
            <Link to="/birds-world/forest-singers" className="nav-link">Forest Singers</Link>
            <Link to="/birds-world/desert-survivors" className="nav-link">Desert Survivors</Link>
            <Link to="/birds-world/arctic-adventurers" className="nav-link">Arctic Adventurers</Link>
            <Link to="/birds-world/wetland-wonders" className="nav-link">Wetland Wonders</Link>
            <Link to="/birds-world/mountain-soarers" className="nav-link">Mountain Soarers</Link>
            <Link to="/birds-world/night-hunters" className="nav-link">Night Hunters</Link>
            <Link to="/birds-world/colorful-displayers" className="nav-link">Colorful Displayers</Link>
            <Link to="/birds-world/ancient-species" className="nav-link">Ancient Species</Link>
            <Link to="/birds-world/urban-adapters" className="nav-link">Urban Adapters</Link>
            <Link to="/birds-world/migratory-marvels" className="nav-link">Migratory Marvels</Link>
            <Link to="/birds-world/aquatic-specialists" className="nav-link">Aquatic Specialists</Link>
            <Link to="/birds-world/island-endemics" className="nav-link">Island Endemics</Link>
            <Link to="/birds-world/tool-users" className="nav-link">Tool Users</Link>
            <Link to="/birds-world/vocal-virtuosos" className="nav-link">Vocal Virtuosos</Link>
            <Link to="/birds-world/cooperative-breeders" className="nav-link">Cooperative Breeders</Link>
            <Link to="/birds-world/extreme-survivors" className="nav-link">Extreme Survivors</Link>
            <Link to="/birds-world/shape-shifters" className="nav-link">Shape Shifters</Link>
            <Link to="/birds-world" className="nav-link">Return to Birds World</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LongDistanceChampions