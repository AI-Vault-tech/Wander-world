import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CoralGardeners.css'

const CoralGardeners = () => {
  const coralGuardians = [
    {
      id: 'parrotfish',
      name: 'Bumphead Parrotfish',
      scientificName: 'Bolbometopon muricatum',
      description: 'Massive grazers that consume algae and dead coral, producing fine sand through digestion.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '1.2m',
      habitat: 'Coral reefs of the Indo-Pacific region',
      diet: 'Algae, coral polyps, sea grasses',
      funFact: 'A single large parrotfish can produce over 800 pounds of sand per year through digestion'
    },
    {
      id: 'cleaner-wrasse',
      name: 'Cleaner Wrasse',
      scientificName: 'Labroides dimidiatus',
      description: 'Establishes cleaning stations where they remove parasites from larger fish.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.12m',
      habitat: 'Shallow coral reefs of the Indo-Pacific',
      diet: 'Parasites, dead tissue, mucus from client fish',
      funFact: 'Client fish recognize cleaner wrasse by their distinctive blue stripe and dancing movements'
    },
    {
      id: 'clownfish',
      name: 'Orange Clownfish',
      scientificName: 'Amphiprion percula',
      description: 'Lives symbiotically with sea anemones, providing nutrients and protection.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.11m',
      habitat: 'Shallow lagoons and outer reef slopes of the Indo-Pacific',
      diet: 'Algae, zooplankton, worms, small crustaceans',
      funFact: 'All clownfish are born male, with dominant individuals changing sex to female'
    },
    {
      id: 'sea-turtle',
      name: 'Green Sea Turtle',
      scientificName: 'Chelonia mydas',
      description: 'Grazes on seagrass beds, promoting healthy growth and nutrient cycling.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '1.5m',
      habitat: 'Coastal areas, bays, lagoons, and reefs in tropical and subtropical waters',
      diet: 'Seagrasses, algae, jellyfish, crabs, shrimp, snails',
      funFact: 'Named for green fat beneath shell, not shell color; can hold breath for up to 5 hours'
    },
    {
      id: 'coral-crab',
      name: 'Coral Guard Crab',
      scientificName: 'Trapezia ferruginea',
      description: 'Lives exclusively in branching corals, defending against predators and removing debris.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.02m',
      habitat: 'Branching corals like Acropora in Indo-Pacific reefs',
      diet: 'Mucus from coral polyps, small plankton, coral tissue',
      funFact: 'Forms mutualistic relationship with coral, receiving shelter in exchange for protection'
    },
    {
      id: 'reef-shark',
      name: 'Whitetip Reef Shark',
      scientificName: 'Triaenodon obesus',
      description: 'Controls populations of smaller fish, maintaining ecological balance in reef systems.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1.6m',
      habitat: 'Coral reefs and lagoons of the Indo-Pacific',
      diet: 'Fish, octopus, squid, crustaceans, mollusks',
      funFact: 'Hunts cooperatively at night while resting motionless in caves during the day'
    }
  ]

  return (
    <div className="coral-gardeners">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Coral Gardeners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Guardians of the underwater rainforests that maintain coral reef ecosystems
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
            <h2>Ocean Architects</h2>
            <p>
              Beneath the shimmering surface of tropical seas lies one of Earth's most biodiverse ecosystems - 
              the coral reef. These underwater metropolises are maintained by a diverse community of marine 
              creatures that function as gardeners, caretakers, and protectors of their delicate environment. 
              From the massive parrotfish that graze on algae to prevent coral smothering, to the tiny cleaner 
              wrasse that establish bustling health clinics for larger fish, these coral gardeners play vital 
              roles in maintaining the delicate balance of reef ecosystems. Their symbiotic relationships and 
              specialized behaviors have evolved over millions of years, creating a complex web of interactions 
              that support approximately 25% of all marine species despite reefs occupying less than 1% of the 
              ocean floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animal Cards */}
      <section className="birds-grid">
        <div className="container">
          {coralGuardians.map((animal, index) => (
            <motion.div
              key={animal.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={animal.image} alt={animal.name} />
              </div>
              <div className="bird-info">
                <h3>{animal.name}</h3>
                <p className="scientific-name">{animal.scientificName}</p>
                <p className="description">{animal.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{animal.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{animal.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{animal.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {animal.funFact}
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

export default CoralGardeners