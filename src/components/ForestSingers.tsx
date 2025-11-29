import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ForestSingers.css'

const ForestSingers = () => {
  const forestBirds = [
    {
      id: 'nightingale',
      name: 'Common Nightingale',
      scientificName: 'Luscinia megarhynchos',
      description: 'Renowned for its powerful and beautiful song, often heard at night.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.16m',
      habitat: 'Dense undergrowth in woodlands and scrub',
      diet: 'Insects, spiders, worms, berries',
      funFact: 'Can sing over 1,000 different song types and learns new songs throughout its life'
    },
    {
      id: 'thrush',
      name: 'Wood Thrush',
      scientificName: 'Hylocichla mustelina',
      description: 'Known for its ethereal, flute-like song that echoes through eastern forests.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.19m',
      habitat: 'Moist deciduous forests of eastern North America',
      diet: 'Insects, earthworms, snails, berries, fruits',
      funFact: 'Its song is often described as the most beautiful sound in North American forests'
    },
    {
      id: 'warbler',
      name: 'Yellow Warbler',
      scientificName: 'Setophaga petechia',
      description: 'Bright yellow songbird with a sweet, musical trilling song.',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
      length: '0.13m',
      habitat: 'Riparian woodlands, willow thickets, orchards',
      diet: 'Insects, spiders, caterpillars, berries',
      funFact: 'Males sing constantly during breeding season, up to 300 songs per hour'
    },
    {
      id: 'mockingbird',
      name: 'Northern Mockingbird',
      scientificName: 'Mimus polyglottos',
      description: 'Incredible mimic with a repertoire of over 150 songs from other species.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open areas with scattered trees, parks, suburbs',
      diet: 'Insects, earthworms, berries, fruits',
      funFact: 'Can learn up to 200 songs in its lifetime and sings year-round'
    },
    {
      id: 'wren',
      name: 'Carolina Wren',
      scientificName: 'Thryothorus ludovicianus',
      description: 'Small but loud songbird with an exuberant, melodious song.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.13m',
      habitat: 'Dense vegetation in forests, swamps, suburban gardens',
      diet: 'Insects, spiders, snails, small fruits',
      funFact: 'Has the loudest song relative to its body size of any bird in North America'
    },
    {
      id: 'cuckoo',
      name: 'Common Cuckoo',
      scientificName: 'Cuculus canorus',
      description: 'Known for its distinctive two-note call and brood parasitism behavior.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.34m',
      habitat: 'Open woodlands, forests, parks, gardens',
      diet: 'Caterpillars (especially hairy ones), insects, eggs',
      funFact: 'Females lay eggs in other birds\' nests, and chicks eject host eggs to monopolize care'
    }
  ]

  return (
    <div className="forest-singers">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Forest Singers</h1>
          <p>Melodious songbirds that fill woodlands with their beautiful calls</p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Forests come alive with the symphony of songbirds, each species contributing its unique voice to the natural orchestra. These melodious creatures have evolved complex vocal abilities not just for communication, but as intricate expressions of territory, mating readiness, and social interaction. Their songs range from simple calls to elaborate compositions that can last for minutes, creating a rich auditory landscape that defines the character of woodland environments.
          </motion.p>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {forestBirds.map((bird, index) => (
            <motion.div
              key={bird.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bird-image-container">
                <img src={bird.image} alt={bird.name} />
              </div>
              <div className="bird-info">
                <h3>{bird.name}</h3>
                <p className="scientific-name">{bird.scientificName}</p>
                <p className="description">{bird.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Length:</span>
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

      {/* Navigation Back */}
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

export default ForestSingers