import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AncientSpecies.css'

const AncientSpecies = () => {
  const ancientBirds = [
    {
      id: 'hoatzin',
      name: 'Hoatzin',
      scientificName: 'Opisthocomus hoazin',
      description: 'Unique Amazonian bird that digests leaves like a cow with a specialized stomach.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.64m',
      habitat: 'Swamps, mangroves, river forests of the Amazon and Orinoco basins',
      diet: 'Leaves, buds, fruits',
      funFact: 'Chicks have claws on their wings to help them climb back to the nest'
    },
    {
      id: 'kiwi',
      name: 'Kiwi',
      scientificName: 'Apteryx spp.',
      description: 'New Zealand\'s national bird with nostrils at the tip of its long bill for excellent smell.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      height: '0.4m',
      habitat: 'Forests and scrublands of New Zealand',
      diet: 'Insects, worms, spiders, berries, seeds',
      funFact: 'Lays one of the largest eggs relative to body size of any bird species'
    },
    {
      id: 'cassowary',
      name: 'Southern Cassowary',
      scientificName: 'Casuarius casuarius',
      description: 'Large flightless bird with a distinctive casque and dangerously sharp claws.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.8m',
      habitat: 'Rainforests of New Guinea and northeastern Australia',
      diet: 'Fruits, insects, small animals, carrion',
      funFact: 'Considered the world\'s most dangerous bird, with dagger-like claws on its feet'
    },
    {
      id: 'ostrich',
      name: 'Ostrich',
      scientificName: 'Struthio camelus',
      description: 'Largest living bird that runs up to 70 km/h to escape predators.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '2.8m',
      habitat: 'Savannas and deserts of Africa',
      diet: 'Plants, seeds, insects, small reptiles',
      funFact: 'Has the largest eyes of any land animal and can swallow objects as large as apples'
    },
    {
      id: 'pelican',
      name: 'Australian Pelican',
      scientificName: 'Pelecanus conspicillatus',
      description: 'Uses expandable throat pouch to scoop up fish from water surface.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.8m',
      wingspan: '2.5m',
      habitat: 'Lakes, rivers, coastal waters across Australia and nearby regions',
      diet: 'Fish, crustaceans, aquatic insects',
      funFact: 'Has the longest bill of any bird and can hold up to 13 liters of water in its pouch'
    },
    {
      id: 'hornbill',
      name: 'Southern Ground Hornbill',
      scientificName: 'Bucorvus leadbeateri',
      description: 'Lives in family groups where non-breeding helpers assist in raising chicks.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1.2m',
      habitat: 'Savannas and woodlands of southern Africa',
      diet: 'Reptiles, amphibians, insects, small mammals, birds, eggs',
      funFact: 'Groups can consist of up to 12 individuals, but only one pair breeds at a time'
    }
  ]

  return (
    <div className="ancient-species">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ancient Species
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that have remained relatively unchanged for millions of years
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
            <h2>Living Fossils</h2>
            <p>
              These remarkable birds represent some of the most ancient lineages on Earth, 
              having survived virtually unchanged through millions of years of evolutionary 
              history. Often called "living fossils," they provide invaluable insights into 
              the early development of avian life and the environmental conditions of bygone 
              eras. Their continued existence in relatively pristine form offers scientists 
              a window into the past, helping us understand how birds have adapted to changing 
              environments over geological time scales. These ancient species demonstrate the 
              incredible resilience and adaptability that has allowed certain lineages to 
              persist through mass extinctions and dramatic climate changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {ancientBirds.map((bird, index) => (
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

export default AncientSpecies