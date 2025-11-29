import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './DesertSurvivors.css'

const DesertSurvivors = () => {
  const desertBirds = [
    {
      id: 'roadrunner',
      name: 'Greater Roadrunner',
      scientificName: 'Geococcyx californianus',
      description: 'Fast runner that can sprint up to 42 km/h across desert landscapes.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.6m',
      habitat: 'Deserts and scrublands of southwestern United States and Mexico',
      diet: 'Snakes, lizards, rodents, insects, small birds, fruits, seeds',
      funFact: 'Can survive without drinking water, getting moisture from its prey'
    },
    {
      id: 'sandgrouse',
      name: 'Four-banded Sandgrouse',
      scientificName: 'Pterocles quadricinctus',
      description: 'Male has specialized belly feathers that absorb water for chicks.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.33m',
      habitat: 'Sandy deserts of North Africa',
      diet: 'Seeds, shoots, insects',
      funFact: 'Males can carry water in their specialized belly feathers to their chicks'
    },
    {
      id: 'lark',
      name: 'Desert Lark',
      scientificName: 'Ammomanes deserti',
      description: 'Camouflaged ground bird that forages for seeds in sandy desert terrain.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.15m',
      habitat: 'Deserts and semi-deserts of North Africa and Middle East',
      diet: 'Seeds, insects',
      funFact: 'Can go its entire life without drinking water, obtaining moisture from food'
    },
    {
      id: 'owl',
      name: 'Elf Owl',
      scientificName: 'Micrathene whitneyi',
      description: 'World\'s smallest owl that hunts insects in desert environments at night.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.15m',
      habitat: 'Deserts of southwestern United States and Mexico',
      diet: 'Insects, scorpions, centipedes, small lizards',
      funFact: 'Weighs less than a golf ball but can take down prey twice its size'
    },
    {
      id: 'courser',
      name: 'Cream-colored Courser',
      scientificName: 'Cursorius cursor',
      description: 'Long-legged wader that runs swiftly across hot desert sands.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Hot deserts of North Africa and Middle East',
      diet: 'Insects, spiders, small reptiles, seeds',
      funFact: 'Can tolerate body temperatures up to 45°C (113°F) without harm'
    },
    {
      id: 'finch',
      name: 'Desert Finch',
      scientificName: 'Rhodospiza obsoleta',
      description: 'Adapted to arid environments with specialized beak for seed cracking.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.15m',
      habitat: 'Deserts and semi-deserts of North Africa and Middle East',
      diet: 'Seeds, especially from acacia and tamarisk trees',
      funFact: 'Can drink saltwater and has specialized kidneys to conserve water'
    }
  ]

  return (
    <div className="desert-survivors">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Desert Survivors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that thrive in arid, water-scarce environments
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
            <h2>Oasis of Adaptation</h2>
            <p>
              In the harsh, unforgiving landscapes of the world's deserts, these remarkable birds 
              have developed extraordinary adaptations to survive extreme heat, scarce water, and 
              limited food sources. From specialized kidneys that conserve every drop of moisture 
              to behaviors that minimize water loss, these desert survivors demonstrate nature's 
              ingenuity in overcoming environmental challenges. Their unique physical and behavioral 
              adaptations allow them to thrive where few other creatures can, turning seemingly 
              barren landscapes into thriving ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {desertBirds.map((bird, index) => (
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

export default DesertSurvivors