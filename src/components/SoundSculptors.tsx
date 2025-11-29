import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SoundSculptors.css'

const SoundSculptors = () => {
  const soundMasters = [
    {
      id: 'lyrebird',
      name: 'Superb Lyrebird',
      scientificName: 'Menura novaehollandiae',
      description: 'Mimics complex sounds from chainsaws to camera shutters with incredible accuracy.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '1m',
      habitat: 'Rainforests of southeastern Australia',
      diet: 'Insects, spiders, worms, millipedes, centipedes, frogs',
      funFact: 'Male can mimic over 20 species of birds and human-made sounds, performing for up to 6 hours'
    },
    {
      id: 'mockingbird',
      name: 'Northern Mockingbird',
      scientificName: 'Mimus polyglottos',
      description: 'Learns and reproduces songs of other birds, often singing throughout the night.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.25m',
      habitat: 'Suburban areas, parks, gardens, scrublands across North America',
      diet: 'Insects, berries, fruits, seeds',
      funFact: 'Can learn up to 150 songs in its lifetime and sings both day and night during breeding season'
    },
    {
      id: 'whale',
      name: 'Humpback Whale',
      scientificName: 'Megaptera novaeangliae',
      description: 'Creates complex songs that evolve over time and are shared across ocean populations.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '16m',
      habitat: 'Oceans worldwide, migrating between polar feeding areas and tropical breeding grounds',
      diet: 'Krill, small fish, plankton',
      funFact: 'Songs can last up to 20 minutes and be heard 20 miles away underwater'
    },
    {
      id: 'katydid',
      name: 'Common True Katydid',
      scientificName: 'Pterophylla camellifolia',
      description: 'Produces loud mating calls by rubbing wings together and can synchronize with others.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.05m',
      habitat: 'Deciduous forests of eastern North America',
      diet: 'Leaves of oak, maple, cherry, and other trees',
      funFact: 'Females have longer ovipositors than body length and can lay up to 100 eggs'
    },
    {
      id: 'dolphin',
      name: 'Bottlenose Dolphin',
      scientificName: 'Tursiops truncatus',
      description: 'Uses signature whistles to identify individuals and coordinate complex hunting strategies.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '4m',
      habitat: 'Coastal and offshore waters worldwide in temperate and tropical zones',
      diet: 'Fish, squid, crustaceans',
      funFact: 'Each dolphin develops a unique signature whistle that acts like a name, recognizable to others'
    },
    {
      id: 'bustard',
      name: 'Great Bustard',
      scientificName: 'Otis tarda',
      description: 'Produces booming sounds during mating displays by inflating air sacs in the neck.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1.2m',
      habitat: 'Grasslands and agricultural fields of Europe and Asia',
      diet: 'Seeds, insects, small reptiles, rodents, birds',
      funFact: 'Males can weigh up to 21kg and perform spectacular courtship displays involving wing flapping'
    }
  ]

  return (
    <div className="sound-sculptors">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sound Sculptors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of acoustic communication who create complex sounds and manipulate their sonic environment
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
            <h2>Acoustic Architects</h2>
            <p>
              In the natural world, certain animals have evolved extraordinary abilities to create, manipulate, 
              and interpret sound in ways that rival human technological achievements. These sound sculptors 
              transform their environments through complex vocalizations, from the lyrebird's uncanny mimicry 
              of chainsaws and camera shutters to the humpback whale's haunting songs that traverse entire 
              ocean basins. Their acoustic abilities serve multiple purposes: attracting mates through elaborate 
              courtship displays, coordinating group hunting strategies, maintaining social bonds across vast 
              distances, and even echolocating to navigate in complete darkness. These masters of sound have 
              developed specialized anatomical structures and neural pathways that allow them to produce and 
              process acoustic information with precision that often exceeds human capabilities. Their sonic 
              artistry not only facilitates survival but also creates a rich tapestry of natural soundscapes 
              that contribute to the biodiversity and health of ecosystems worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Cards */}
      <section className="birds-grid">
        <div className="container">
          {soundMasters.map((master, index) => (
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

export default SoundSculptors