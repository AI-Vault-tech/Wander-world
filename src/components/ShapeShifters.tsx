import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ShapeShifters.css'

const ShapeShifters = () => {
  const shapeShiftingBirds = [
    {
      id: 'ptarmigan',
      name: 'Willow Ptarmigan',
      scientificName: 'Lagopus lagopus',
      description: 'Completely changes plumage from brown in summer to pure white in winter.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.36m',
      habitat: 'Arctic and subarctic tundra, boreal forests',
      diet: 'Buds, leaves, berries, seeds, insects',
      funFact: 'Only ptarmigan species where both males and females grow white winter plumage'
    },
    {
      id: 'cardinal',
      name: 'Northern Cardinal',
      scientificName: 'Cardinalis cardinalis',
      description: 'Males lose their bright red coloration during molting periods.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.21m',
      habitat: 'Woodlands, gardens, shrublands across eastern and central North America',
      diet: 'Seeds, fruits, insects',
      funFact: 'Both males and females can sing, which is rare among songbirds'
    },
    {
      id: 'flamingo',
      name: 'Greater Flamingo',
      scientificName: 'Phoenicopterus roseus',
      description: 'Gets its pink color from carotenoids in its diet of algae and shrimp.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.5m',
      habitat: 'Shallow lakes, lagoons, salt pans',
      diet: 'Algae, small crustaceans, mollusks, insects',
      funFact: 'All flamingos are born gray and turn pink from pigments in their food'
    },
    {
      id: 'peacock',
      name: 'Indian Peafowl',
      scientificName: 'Pavo cristatus',
      description: 'Male grows spectacular tail feathers for mating displays, sheds them afterward.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '1m',
      habitat: 'Forests, cultivated lands, villages across South Asia',
      diet: 'Seeds, insects, fruits, small reptiles',
      funFact: 'Peacock feathers have microscopic structures that create iridescent colors without pigment'
    },
    {
      id: 'puffin',
      name: 'Atlantic Puffin',
      description: 'Develops bright orange beak and facial markings during breeding season.',
      scientificName: 'Fratercula arctica',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.3m',
      habitat: 'Coastal cliffs and islands of the North Atlantic',
      diet: 'Fish, especially sand eels, crustaceans, squid',
      funFact: 'Can carry several fish in its beak at once and flaps its wings up to 400 times per minute'
    },
    {
      id: 'redstart',
      name: 'American Redstart',
      scientificName: 'Setophaga ruticilla',
      description: 'Undergoes complete molt twice yearly, changing appearance between seasons.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.14m',
      habitat: 'Deciduous forests, forest edges, parks across North America',
      diet: 'Insects, spiders, caterpillars, berries',
      funFact: 'Males flash their bright tail feathers to startle insects into flight for easier capture'
    }
  ]

  return (
    <div className="shape-shifters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shape Shifters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that undergo dramatic physical changes for breeding or seasonal purposes
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
            <h2>Avian Transformers</h2>
            <p>
              These remarkable birds possess the ability to dramatically alter their appearance 
              through molting, dietary influences, or seasonal changes. Their transformations 
              serve crucial biological functions - from camouflage in changing environments to 
              elaborate mating displays that attract partners. These shape shifters demonstrate 
              nature's incredible capacity for adaptation, showing how physical flexibility 
              can be just as important as behavioral adaptability for survival and reproduction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {shapeShiftingBirds.map((bird, index) => (
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
                    <span className="stat-value">{bird.height || bird.length}</span>
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

export default ShapeShifters