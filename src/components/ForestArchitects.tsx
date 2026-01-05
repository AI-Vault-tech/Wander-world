import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ForestArchitects.css'

const ForestArchitects = () => {
  const architectBirds = [
    {
      id: 'weaver',
      name: 'Sociable Weaver',
      scientificName: 'Philetairus socius',
      description: 'Builds massive communal nests that house multiple families and can last for decades.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.15m',
      habitat: 'Semi-arid regions of southern Africa',
      diet: 'Seeds, insects',
      funFact: 'Their communal nests can house over 100 pairs and provide temperature regulation for all residents'
    },
    {
      id: 'bowerbird',
      name: 'Satellite Bowerbird',
      scientificName: 'Archboldia papuensis',
      description: 'Creates elaborate bower structures decorated with colorful objects to attract mates.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.3m',
      habitat: 'Montane forests of New Guinea',
      diet: 'Fruits, insects, flowers',
      funFact: 'Males spend hours arranging decorations in perfect symmetry to impress females'
    },
    {
      id: 'termitebird',
      name: 'Termite-eating Bird',
      scientificName: 'Sclerurus rufigularis',
      description: 'Excavates complex tunnel systems in termite mounds for nesting and feeding.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.18m',
      habitat: 'Tropical forests of Central and South America',
      diet: 'Termites, ants, other insects',
      funFact: 'Has specialized tongue adaptations for extracting insects from narrow tunnels'
    },
    {
      id: 'honeyguide',
      name: 'Greater Honeyguide',
      scientificName: 'Indicator indicator',
      description: 'Guides humans and other animals to bee colonies then feeds on leftover wax.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.2m',
      habitat: 'Woodlands and savannas of sub-Saharan Africa',
      diet: 'Beeswax, larvae, insects',
      funFact: 'One of the few birds that can digest beeswax, which few other animals can do'
    },
    {
      id: 'woodpecker',
      name: 'Pileated Woodpecker',
      scientificName: 'Dryocopus pileatus',
      description: 'Carves large rectangular holes in dead trees, creating nesting sites for other species.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.45m',
      habitat: 'Mature forests of North America',
      diet: 'Carpenter ants, wood-boring beetle larvae, fruits, nuts',
      funFact: 'Its excavations provide nesting sites for at least 15 other bird species'
    },
    {
      id: 'antbird',
      name: 'Rufous-capped Antbird',
      scientificName: 'Basileuterus rufifrons',
      description: 'Follows army ant swarms to catch flushed insects, forming complex ecological relationships.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.13m',
      habitat: 'Tropical rainforests of Central and South America',
      diet: 'Insects, spiders, small arthropods',
      funFact: 'Has specialized calls to communicate with specific ant swarms it follows'
    }
  ]

  return (
    <div className="forest-architects">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Forest Architects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that engineer their environments through nest-building and habitat modification
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
            <h2>Nature's Master Builders</h2>
            <p>
              In the complex ecosystems of the world's forests, these remarkable birds function as 
              ecosystem engineers, fundamentally shaping their environments through their construction 
              activities. From the massive communal nests of weaver birds that provide shelter for 
              entire communities to the precisely carved tunnels of woodpeckers that become homes 
              for numerous other species, these avian architects demonstrate the profound impact 
              that individual species can have on their surroundings. Their building behaviors 
              represent millions of years of co-evolution with their environments, resulting in 
              structures that are both functional and remarkably sophisticated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {architectBirds.map((bird, index) => (
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

export default ForestArchitects