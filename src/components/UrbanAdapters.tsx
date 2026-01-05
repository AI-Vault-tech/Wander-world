import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './UrbanAdapters.css'

const UrbanAdapters = () => {
  const urbanBirds = [
    {
      id: 'pigeon',
      name: 'Rock Pigeon',
      scientificName: 'Columba livia',
      description: 'Highly adaptable bird that thrives in cities worldwide, nesting on buildings.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.3m',
      habitat: 'Cities, towns, parks, buildings across the globe',
      diet: 'Seeds, grains, fruits, human food scraps',
      funFact: 'Can recognize all 26 letters of the alphabet and distinguish between photographs'
    },
    {
      id: 'crow',
      name: 'American Crow',
      scientificName: 'Corvus brachyrhynchos',
      description: 'Intelligent problem-solver that has learned to navigate urban environments.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.5m',
      habitat: 'Cities, suburbs, farmland across North America',
      diet: 'Insects, small animals, eggs, garbage, human food',
      funFact: 'Can make and use tools, recognize human faces, and remember them for years'
    },
    {
      id: 'sparrow',
      name: 'House Sparrow',
      scientificName: 'Passer domesticus',
      description: 'Small, social bird that lives commensally with humans in urban areas.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.15m',
      habitat: 'Cities, towns, farms, parks worldwide',
      diet: 'Seeds, grains, insects, crumbs, food scraps',
      funFact: 'One of the few birds that can drink water by sucking it up without tilting its head back'
    },
    {
      id: 'starling',
      name: 'European Starling',
      scientificName: 'Sturnus vulgaris',
      description: 'Gregarious bird that forms spectacular murmurations over cities at dusk.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.2m',
      habitat: 'Cities, parks, farmland across Europe, Asia, and North America',
      diet: 'Insects, fruits, seeds, garbage, food scraps',
      funFact: 'Can mimic over 20 other bird species and even human speech'
    },
    {
      id: 'magpie',
      name: 'Eurasian Magpie',
      scientificName: 'Pica pica',
      description: 'Intelligent corvid that has thrived in urban environments across Europe and Asia.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.45m',
      habitat: 'Cities, parks, gardens across Europe and Asia',
      diet: 'Insects, small mammals, eggs, carrion, human food scraps',
      funFact: 'One of the few non-mammals that can recognize itself in a mirror, showing self-awareness'
    },
    {
      id: 'hawk',
      name: 'Red-tailed Hawk',
      scientificName: 'Buteo jamaicensis',
      description: 'Raptor that has adapted to hunt in urban environments, nesting on buildings.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.6m',
      wingspan: '1.4m',
      habitat: 'Cities, suburbs, parks across North America',
      diet: 'Rodents, birds, reptiles, insects',
      funFact: 'Has excellent eyesight and can spot a mouse from 100 feet in the air'
    }
  ]

  return (
    <div className="urban-adapters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Urban Adapters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that have successfully adapted to city life
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
            <h2>City Survivors</h2>
            <p>
              As human populations increasingly concentrate in urban areas, these remarkable 
              birds have demonstrated extraordinary adaptability by making cities their homes. 
              From the intelligent problem-solving abilities of crows to the social flexibility 
              of sparrows, these urban adapters have learned to exploit human environments for 
              nesting, feeding, and breeding. Their success in metropolitan landscapes showcases 
              the incredible plasticity of avian behavior and the complex relationships that can 
              develop between wildlife and human settlements. These birds serve as reminders that 
              nature persists even in our most constructed environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {urbanBirds.map((bird, index) => (
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

export default UrbanAdapters