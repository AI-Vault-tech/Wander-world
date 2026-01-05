import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './VocalVirtuosos.css'

const VocalVirtuosos = () => {
  const vocalBirds = [
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
      id: 'mockingbird',
      name: 'Northern Mockingbird',
      scientificName: 'Mimus polyglottos',
      description: 'Master mimic that can learn and reproduce hundreds of different songs.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open areas, forest edges, suburbs, parks across North America',
      diet: 'Insects, berries, fruits',
      funFact: 'Can learn up to 150 songs from other species and sings both day and night'
    },
    {
      id: 'lyrebird',
      name: 'Superb Lyrebird',
      scientificName: 'Menura novaehollandiae',
      description: 'Extraordinary mimic that can reproduce almost any sound it hears.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1m',
      habitat: 'Rainforests of southeastern Australia',
      diet: 'Insects, spiders, worms, seeds, fruits',
      funFact: 'Male displays his tail like a lyre during courtship and can mimic chainsaws, camera shutters, and car alarms'
    },
    {
      id: 'canary',
      name: 'Domestic Canary',
      scientificName: 'Serinus canaria domestica',
      description: 'Popular cage bird known for its melodious song, selectively bred for centuries.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.13m',
      habitat: 'Originally from Canary Islands, now kept as pets worldwide',
      diet: 'Seeds, fruits, vegetables, egg food',
      funFact: 'Only male canaries sing, and they learn their songs from their fathers during a critical period'
    },
    {
      id: 'parrot',
      name: 'African Grey Parrot',
      scientificName: 'Psittacus erithacus',
      description: 'Highly intelligent parrot with exceptional ability to mimic human speech.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.33m',
      habitat: 'Rainforests and savannas of central and west Africa',
      diet: 'Fruits, nuts, seeds, flowers, insects',
      funFact: 'Can associate words with meanings and form simple sentences, with cognitive abilities similar to a 5-year-old child'
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
      funFact: 'Its song consists of clear, musical phrases often described as "ee-oh-lay" and can be heard from great distances'
    }
  ]

  return (
    <div className="vocal-virtuosos">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vocal Virtuosos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds with extraordinary vocal abilities, from complex songs to remarkable mimicry
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
            <h2>Songsters and Mimics</h2>
            <p>
              Among the avian world's most captivating performers are these vocal virtuosos, whose 
              extraordinary abilities range from complex melodies to flawless mimicry. These birds 
              demonstrate remarkable neural sophistication in their syrinx (vocal organ), allowing 
              them to produce sounds that can surpass human musical abilities. From the nightingale's 
              intricate nocturnal serenades to the lyrebird's uncanny environmental sound reproduction, 
              these vocalists showcase the incredible diversity of acoustic communication in nature. 
              Their songs serve multiple purposes - attracting mates, defending territories, and 
              maintaining social bonds - while delighting human listeners with their natural artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {vocalBirds.map((bird, index) => (
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

export default VocalVirtuosos