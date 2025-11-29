import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './DesertEngineers.css'

const DesertEngineers = () => {
  const desertAnimals = [
    {
      id: 'fennec-fox',
      name: 'Fennec Fox',
      scientificName: 'Vulpes zerda',
      description: 'Digs extensive burrow systems with multiple entrances to escape heat and raise young.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.4m',
      habitat: 'Sahara Desert and other arid regions of North Africa',
      diet: 'Insects, rodents, birds, eggs, plants, roots',
      funFact: 'Has enormous ears that help dissipate heat and can hear prey moving underground'
    },
    {
      id: 'kangaroo-rat',
      name: 'Kangaroo Rat',
      scientificName: 'Dipodomys spectabilis',
      description: 'Constructs complex underground tunnel networks and survives without drinking water.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.15m',
      habitat: 'Deserts and dry scrublands of western North America',
      diet: 'Seeds, nuts, vegetation, insects',
      funFact: 'Never drinks water in its lifetime - gets all moisture needed from metabolizing seeds'
    },
    {
      id: 'desert-tortoise',
      name: 'Desert Tortoise',
      scientificName: 'Gopherus agassizii',
      description: 'Excavates burrows up to 30 feet long to escape extreme temperatures and drought.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.4m',
      habitat: 'Mojave and Sonoran Deserts of southwestern United States and northwestern Mexico',
      diet: 'Grasses, herbs, annual wildflowers, cactus pads, fruits',
      funFact: 'Can store water in its bladder and reabsorb it when needed, surviving up to a year without water'
    },
    {
      id: 'camel',
      name: 'Dromedary Camel',
      scientificName: 'Camelus dromedarius',
      description: 'Stores fat in hump for energy and has specialized nostrils to keep out sand.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '2m',
      habitat: 'Deserts and arid regions of North Africa and Middle East',
      diet: 'Thorny plants, dry grasses, grains, twigs, bones, skin',
      funFact: 'Can drink 30 gallons of water in 13 minutes and close nostrils to keep out blowing sand'
    },
    {
      id: 'meerkat',
      name: 'Meerkat',
      scientificName: 'Suricata suricatta',
      description: 'Lives in complex social groups with elaborate burrow systems and sentinel systems.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.3m',
      habitat: 'Kalahari Desert of Botswana, Namibia, South Africa',
      diet: 'Insects, spiders, scorpions, small reptiles, birds, eggs, plants',
      funFact: 'Has dark patches around eyes that reduce sun glare like built-in sunglasses'
    },
    {
      id: 'gila-monster',
      name: 'Gila Monster',
      scientificName: 'Heloderma suspectum',
      description: 'Stores fat in tail and uses venom to subdue prey in harsh desert conditions.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.5m',
      habitat: 'Sonoran and Mojave Deserts of southwestern United States and northwestern Mexico',
      diet: 'Eggs, young birds, frogs, lizards, insects, carrion',
      funFact: 'One of only two venomous lizards in the world and can eat one-third of its body weight in a meal'
    }
  ]

  return (
    <div className="desert-engineers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Desert Engineers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of arid environments that create sustainable habitats in the desert
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
            <h2>Oasis Architects</h2>
            <p>
              In the seemingly barren expanses of Earth's deserts, life finds extraordinary ways to not 
              only survive but flourish. These desert engineers have developed ingenious solutions to 
              challenges that would defeat most creatures - extreme heat, scarce water, and shifting sands. 
              From the intricate underground cities of kangaroo rats to the temperature-regulated burrows 
              of desert tortoises, these animals demonstrate remarkable engineering prowess. They've 
              evolved to harvest moisture from the driest seeds, regulate their body temperatures through 
              behavioral adaptations, and create sustainable micro-environments in some of the planet's 
              most unforgiving landscapes. Their survival strategies offer inspiration for sustainable 
              living and showcase the incredible adaptability of life on Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animal Cards */}
      <section className="birds-grid">
        <div className="container">
          {desertAnimals.map((animal, index) => (
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
                    <span className="stat-value">{animal.length || animal.height}</span>
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

export default DesertEngineers