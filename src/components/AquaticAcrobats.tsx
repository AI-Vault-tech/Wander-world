import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AquaticAcrobats.css'

const AquaticAcrobats = () => {
  const waterPerformers = [
    {
      id: 'dolphin',
      name: 'Bottlenose Dolphin',
      scientificName: 'Tursiops truncatus',
      description: 'Performs spectacular leaps and spins while surfing waves and playing in boat wakes.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '4m',
      habitat: 'Coastal and offshore waters worldwide in temperate and tropical zones',
      diet: 'Fish, squid, crustaceans',
      funFact: 'Each dolphin develops a unique signature whistle that acts like a name, recognizable to others'
    },
    {
      id: 'sea-lion',
      name: 'California Sea Lion',
      scientificName: 'Zalophus californianus',
      description: 'Executes graceful flips and spins while balancing on balls and surfing waves.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '2.4m',
      habitat: 'Coastal waters and islands of the eastern Pacific Ocean',
      diet: 'Fish, squid, octopus, crustaceans',
      funFact: 'Can slow heart rate to conserve oxygen and stay submerged for up to 10 minutes'
    },
    {
      id: 'penguin',
      name: 'Emperor Penguin',
      scientificName: 'Aptenodytes forsteri',
      description: 'Slides on belly across ice and dives to incredible depths in Antarctic Ocean.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.2m',
      habitat: 'Antarctic pack ice and ocean',
      diet: 'Fish, krill, squid',
      funFact: 'Males incubate eggs on their feet for 64 days during the brutal Antarctic winter'
    },
    {
      id: 'otter',
      name: 'Sea Otter',
      scientificName: 'Enhydra lutris',
      description: 'Floats on back while using rocks to crack shellfish, spinning in circles for grooming.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '1.2m',
      habitat: 'Coastal kelp forests of the northern Pacific Ocean',
      diet: 'Sea urchins, abalone, mussels, crabs, sea stars',
      funFact: 'Has the densest fur of any animal and uses tools more than any other marine mammal'
    },
    {
      id: 'pelican',
      name: 'Brown Pelican',
      scientificName: 'Pelecanus occidentalis',
      description: 'Dives headfirst from great heights to catch fish in expandable throat pouch.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1.4m',
      habitat: 'Coastal waters, estuaries, and lagoons of Americas',
      diet: 'Fish, especially menhaden, mullet, anchovies',
      funFact: 'Plunge dives at speeds up to 40 mph, using air sacs to cushion impact'
    },
    {
      id: 'seahorse',
      name: 'Big-Belly Seahorse',
      scientificName: 'Hippocampus abdominalis',
      description: 'Swims upright using dorsal fin and grasps objects with prehensile tail.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.15m',
      habitat: 'Sheltered harbors, estuaries, and coastal waters of southern Australia and New Zealand',
      diet: 'Small crustaceans, fish larvae, plankton',
      funFact: 'Males become pregnant and give birth, with babies born tail-first to avoid drowning'
    }
  ]

  return (
    <div className="aquatic-acrobats">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aquatic Acrobats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of water-based movement who perform breathtaking feats in aquatic environments
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
            <h2>Water Dancers</h2>
            <p>
              In oceans, rivers, and lakes around the world, a diverse group of animals have evolved 
              extraordinary abilities to move gracefully and powerfully through aquatic environments. 
              These aquatic acrobats demonstrate remarkable adaptations that allow them to swim, dive, 
              leap, and glide through water with fluid elegance. From the precision-engineered bodies 
              of dolphins that enable spectacular breaches and spins to the unique swimming style of 
              penguins that makes them underwater rockets, these water dancers showcase the incredible 
              diversity of locomotion in aquatic habitats. Their movements serve multiple purposes: 
              hunting for food, escaping predators, communicating with others of their species, and 
              engaging in playful behavior that strengthens social bonds. These animals have developed 
              specialized anatomical features such as streamlined bodies, powerful tails, webbed feet, 
              and modified limbs that transform them into masters of their liquid realm. Their 
              performances remind us of the beauty and complexity of life in aquatic ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performer Cards */}
      <section className="birds-grid">
        <div className="container">
          {waterPerformers.map((performer, index) => (
            <motion.div
              key={performer.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={performer.image} alt={performer.name} />
              </div>
              <div className="bird-info">
                <h3>{performer.name}</h3>
                <p className="scientific-name">{performer.scientificName}</p>
                <p className="description">{performer.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{performer.length || performer.height}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{performer.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{performer.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {performer.funFact}
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

export default AquaticAcrobats