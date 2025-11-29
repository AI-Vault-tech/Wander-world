import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MountainSoarers.css'

const MountainSoarers = () => {
  const mountainBirds = [
    {
      id: 'condor',
      name: 'Andean Condor',
      scientificName: 'Vultur gryphus',
      description: 'Massive vulture with wingspan up to 3.3 meters, soars effortlessly on mountain thermals.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '1.3m',
      wingspan: '3.3m',
      habitat: 'Mountains of South America, especially the Andes',
      diet: 'Carrion, occasionally small live prey',
      funFact: 'Has the largest wingspan of any land bird and can soar for hours without flapping'
    },
    {
      id: 'eagle',
      name: 'Golden Eagle',
      scientificName: 'Aquila chrysaetos',
      description: 'Powerful raptor that nests on cliff faces and hunts in mountainous terrain.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.9m',
      wingspan: '2.3m',
      habitat: 'Mountains, hills, cliffs, open country across Northern Hemisphere',
      diet: 'Mammals, birds, reptiles, fish',
      funFact: 'Can dive at speeds over 240 km/h and has exceptional eyesight 8 times sharper than humans'
    },
    {
      id: 'snowcock',
      name: 'Himalayan Snowcock',
      scientificName: 'Tetraogallus himalayensis',
      description: 'High-altitude grouse that lives among rocky slopes up to 5,000 meters elevation.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.6m',
      habitat: 'High mountains of Central and South Asia',
      diet: 'Grasses, leaves, seeds, roots, insects',
      funFact: 'Has feathered legs and feet to protect against freezing temperatures at extreme altitudes'
    },
    {
      id: 'chough',
      name: 'Alpine Chough',
      scientificName: 'Pyrrhocorax graculus',
      description: 'Smart crow relative that thrives at high elevations and raids mountain huts.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.4m',
      habitat: 'High mountains of Europe, Asia, and North Africa',
      diet: 'Insects, berries, seeds, small mammals, human food scraps',
      funFact: 'Can survive at altitudes up to 8,000 meters and has been seen flying near Mount Everest'
    },
    {
      id: 'lammergeier',
      name: 'Bearded Vulture',
      scientificName: 'Gypaetus barbatus',
      description: 'Specialized scavenger that drops bones from heights to access marrow.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1.2m',
      wingspan: '2.8m',
      habitat: 'High mountains of Europe, Asia, and Africa',
      diet: 'Almost exclusively bones, which it drops from heights to crack open',
      funFact: 'Has highly acidic digestive system to dissolve bone fragments and can consume up to 90% of its body weight in bones'
    },
    {
      id: 'snowfinch',
      name: 'White-winged Snowfinch',
      scientificName: 'Montifringilla nivalis',
      description: 'Small passerine that breeds at higher altitudes than any other songbird.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.16m',
      habitat: 'High mountains of Europe, Asia, and North Africa',
      diet: 'Seeds, insects, spiders',
      funFact: 'Nests in rock crevices at altitudes up to 6,500 meters, higher than any other passerine'
    }
  ]

  return (
    <div className="mountain-soarers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mountain Soarers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that excel in high-altitude environments
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
            <h2>Heights of Majesty</h2>
            <p>
              In the thin air and rugged terrain of the world's highest peaks, these extraordinary 
              birds have evolved specialized adaptations to thrive where few other creatures can 
              survive. From massive wings that harness mountain thermals to specialized respiratory 
              systems that function in low-oxygen environments, these mountain soarers demonstrate 
              the incredible diversity of avian adaptations. Their mastery of aerial navigation in 
              challenging conditions showcases the pinnacle of evolutionary engineering for life 
              at extreme altitudes.
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

export default MountainSoarers