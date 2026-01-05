import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HighlandSentinels.css'

const HighlandSentinels = () => {
  const mountainBirds = [
    {
      id: 'condor',
      name: 'Andean Condor',
      scientificName: 'Vultur gryphus',
      description: 'Soars on thermal currents while scanning mountainsides for carrion, serving as ecosystem health indicators.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '3.2m',
      habitat: 'High-altitude mountains of South America, especially Andes',
      diet: 'Carrion, occasionally small live prey',
      funFact: 'With a wingspan reaching over 10 feet, it\'s one of the world\'s largest flying birds'
    },
    {
      id: 'snow-cock',
      name: 'Himalayan Snowcock',
      scientificName: 'Tetraogallus himalayensis',
      description: 'Lives at extreme altitudes and serves as indicator species for high-altitude ecosystem health.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.6m',
      habitat: 'High-altitude mountains of Central and South Asia, especially Himalayas',
      diet: 'Grasses, leaves, seeds, buds, roots, insects',
      funFact: 'Can survive at elevations up to 5,000 meters where oxygen levels are extremely low'
    },
    {
      id: 'lammergeier',
      name: 'Bearded Vulture',
      scientificName: 'Gypaetus barbatus',
      description: 'Specializes in bone consumption and plays crucial role in nutrient cycling in mountain ecosystems.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      wingspan: '2.8m',
      habitat: 'High mountains of Europe, Asia, and Africa',
      diet: 'Bones (80-90% of diet), occasionally meat scraps',
      funFact: 'Drops bones from great heights to crack them open, sometimes from altitudes over 100 meters'
    },
    {
      id: 'snow-partridge',
      name: 'Snow Partridge',
      scientificName: 'Lerwa lerwa',
      description: 'Camouflaged ground dweller that indicates health of alpine meadow ecosystems.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.35m',
      habitat: 'High-altitude hills and mountains of Himalayas',
      diet: 'Seeds, berries, leaves, buds, insects',
      funFact: 'Has feathered legs and feet to help survive in snowy, cold environments'
    },
    {
      id: 'wallcreeper',
      name: 'Wallcreeper',
      scientificName: 'Tichodroma muraria',
      description: 'Climbs vertical cliff faces searching for insects, indicating cliff ecosystem health.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.16m',
      habitat: 'Cliff faces and steep rocky slopes in mountains of Europe, Asia, and North Africa',
      diet: 'Insects, spiders, small invertebrates',
      funFact: 'Has stiff tail feathers that act as a prop to support its body while climbing'
    },
    {
      id: 'golden-eagle',
      name: 'Golden Eagle',
      scientificName: 'Aquila chrysaetos',
      description: 'Apex predator whose presence indicates healthy mountain ecosystem with intact food webs.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '2.3m',
      habitat: 'Mountains, hills, cliffs, open country across Northern Hemisphere',
      diet: 'Medium-sized mammals and birds, occasionally reptiles and fish',
      funFact: 'Can dive at speeds over 150 mph and has exceptional eyesight 8 times sharper than humans'
    }
  ]

  return (
    <div className="highland-sentinels">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Highland Sentinels
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Guardians of mountain ecosystems that serve as indicators of environmental health
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
            <h2>Mountain Watchers</h2>
            <p>
              Towering above the world's most rugged landscapes, these highland sentinels serve as living 
              barometers of mountain ecosystem health. Their presence, behavior, and population dynamics 
              provide critical insights into the complex interplay between climate, vegetation, and wildlife 
              in some of Earth's most challenging environments. From the massive Andean condors that patrol 
              the Andes in search of carrion to the elusive snow partridges that blend seamlessly with alpine 
              meadows, these birds and animals have evolved extraordinary adaptations to survive in thin air, 
              extreme temperatures, and harsh weather conditions. As climate change alters mountain environments 
              at unprecedented rates, these sentinels offer early warnings about ecosystem shifts, making their 
              conservation critically important for understanding and protecting these irreplaceable habitats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {mountainBirds.map((bird, index) => (
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
                    <span className="stat-value">{bird.wingspan || bird.length}</span>
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

export default HighlandSentinels