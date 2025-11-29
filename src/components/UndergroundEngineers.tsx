import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './UndergroundEngineers.css'

const UndergroundEngineers = () => {
  const burrowMasters = [
    {
      id: 'burrowing-owl',
      name: 'Burrowing Owl',
      scientificName: 'Athene cunicularia',
      description: 'Nests in abandoned burrows and modifies them with elaborate tunnel systems.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.25m',
      habitat: 'Grasslands, prairies, agricultural fields, deserts across Americas',
      diet: 'Insects, small mammals, reptiles, amphibians, scorpions',
      funFact: 'Collects mammal dung around nest entrance to attract dung beetles, a favorite food'
    },
    {
      id: 'rabbit',
      name: 'European Rabbit',
      scientificName: 'Oryctolagus cuniculus',
      description: 'Excavates extensive warren systems with multiple entrances and chambers.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.4m',
      habitat: 'Grasslands, woodlands, scrublands, agricultural areas across Europe and North Africa',
      diet: 'Grasses, herbs, clover, crops, bark in winter',
      funFact: 'Warrens can house over 20 individuals and include separate nesting, sleeping, and latrine chambers'
    },
    {
      id: 'prairie-dog',
      name: 'Black-tailed Prairie Dog',
      scientificName: 'Cynomys ludovicianus',
      description: 'Constructs massive colony complexes with interconnected burrows spanning acres.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.3m',
      habitat: 'Grasslands and prairies of central North America',
      diet: 'Grasses, forbs, seeds, roots, insects',
      funFact: 'Colonies can span thousands of acres and include complex warning systems for predators'
    },
    {
      id: 'mole',
      name: 'Eastern Mole',
      scientificName: 'Scalopus aquaticus',
      description: 'Excavates extensive tunnel networks using powerful forelimbs and specialized claws.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.15m',
      habitat: 'Moist soils of forests, meadows, and lawns across eastern United States',
      diet: 'Earthworms, grubs, insects, snails, small rodents',
      funFact: 'Can dig tunnels at a rate of 15 feet per hour and consume 70-100% of their body weight daily'
    },
    {
      id: 'puffin',
      name: 'Atlantic Puffin',
      scientificName: 'Fratercula arctica',
      description: 'Digs nesting burrows in cliff faces using beak and feet.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.3m',
      habitat: 'Coastal cliffs and islands of North Atlantic Ocean',
      diet: 'Fish, especially sand eels, herring, capelin',
      funFact: 'Can carry over 60 fish in their beak at once thanks to specialized spiny palate'
    },
    {
      id: 'bank-swallow',
      name: 'Bank Swallow',
      scientificName: 'Riparia riparia',
      description: 'Excavates nesting tunnels in vertical earthen banks near water.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.12m',
      habitat: 'Sandy banks of rivers, lakes, and quarries across Northern Hemisphere',
      diet: 'Flying insects, especially flies, beetles, wasps, bees',
      funFact: 'Colonies can contain hundreds of pairs nesting in closely spaced burrows along a bank'
    }
  ]

  return (
    <div className="underground-engineers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Underground Engineers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Subterranean architects who create complex burrow systems and tunnel networks
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
            <h2>Subsurface Architects</h2>
            <p>
              Beneath our feet lies a hidden world of remarkable engineering feats accomplished by animals 
              who have mastered the art of subterranean construction. These underground engineers have 
              evolved specialized anatomical features and behaviors that allow them to excavate complex 
              tunnel systems, creating elaborate networks of passages, chambers, and ventilation shafts. 
              Their constructions serve multiple purposes: providing shelter from predators and extreme 
              weather, creating safe spaces for reproduction, storing food, and facilitating social 
              organization. From the extensive warren systems of prairie dogs that span acres and house 
              entire communities to the precisely engineered burrows of burrowing owls that include 
              separate chambers for different activities, these subsurface architects demonstrate a level 
              of construction expertise that rivals human engineering. Their tunneling activities also 
              provide crucial ecosystem services, aerating soil, creating habitat for other species, 
              and influencing water drainage patterns in ways that benefit entire landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Cards */}
      <section className="birds-grid">
        <div className="container">
          {burrowMasters.map((master, index) => (
            <motion.div
              key={master.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={master.image} alt={master.name} />
              </div>
              <div className="bird-info">
                <h3>{master.name}</h3>
                <p className="scientific-name">{master.scientificName}</p>
                <p className="description">{master.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{master.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{master.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{master.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {master.funFact}
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

export default UndergroundEngineers