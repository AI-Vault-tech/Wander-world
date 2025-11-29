import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './DancePerformers.css'

const DancePerformers = () => {
  const danceMasters = [
    {
      id: 'bird-of-paradise',
      name: 'Greater Bird of Paradise',
      scientificName: 'Paradisaea apoda',
      description: 'Performs intricate courtship dances with elaborate plumage displays to attract females.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.3m',
      habitat: 'Tropical rainforests of New Guinea and surrounding islands',
      diet: 'Fruits, insects, small reptiles, nectar',
      funFact: 'Males gather in groups called leks to compete for female attention with their spectacular displays'
    },
    {
      id: 'albatross',
      name: 'Laysan Albatross',
      scientificName: 'Phoebastria immutabilis',
      description: 'Engages in synchronized mating dances involving bill clacking, sky pointing, and bowing.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.8m',
      habitat: 'North Pacific Ocean, nesting on Hawaiian islands and other remote islands',
      diet: 'Squid, fish, crustaceans, flying fish eggs',
      funFact: 'Pairs perform elaborate annual courtship rituals that can last several years before breeding'
    },
    {
      id: 'crane',
      name: 'Sandhill Crane',
      scientificName: 'Antigone canadensis',
      description: 'Executes graceful leaps and bows while calling in synchronized duets with mates.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.2m',
      habitat: 'Wetlands, grasslands, agricultural fields across North America',
      diet: 'Grains, seeds, berries, insects, small mammals, amphibians',
      funFact: 'Known for their trumpeting calls that can be heard from over 2 miles away'
    },
    {
      id: 'grebe',
      name: 'Western Grebe',
      scientificName: 'Aechmorphorus occidentalis',
      description: 'Performs breathtaking rushing displays where pairs run across water in perfect synchronization.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.5m',
      habitat: 'Freshwater lakes and marshes of western North America',
      diet: 'Fish, aquatic insects, crustaceans, amphibians',
      funFact: 'Their rushing display can reach speeds of 40 mph across the water surface'
    },
    {
      id: 'bowerbird',
      name: 'Satin Bowerbird',
      scientificName: 'Ptilonorhynchus violaceus',
      description: 'Dances around elaborately decorated bowers while singing complex songs to woo females.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Forests and woodlands of eastern and southeastern Australia',
      diet: 'Fruits, insects, leaves, flowers',
      funFact: 'Males collect blue objects to decorate their bowers, even stealing blue items from nearby gardens'
    },
    {
      id: 'manakin',
      name: 'Golden-collared Manakin',
      scientificName: 'Manacus vitellinus',
      description: 'Snaps wings together rapidly while moonwalking and jumping in precise courtship routines.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.1m',
      habitat: 'Lowland rainforests of Panama and northwestern Colombia',
      diet: 'Small fruits, insects, spiders',
      funFact: 'Wing snaps can reach 100 decibels, equivalent to the sound of a car horn from three feet away'
    }
  ]

  return (
    <div className="dance-performers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dance Performers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Avian artists who captivate audiences with elaborate courtship displays and aerial choreography
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
            <h2>Theatrical Masters</h2>
            <p>
              In the animal kingdom, few spectacles rival the elaborate courtship displays of birds who 
              have evolved into true performers. These dance masters transform the natural world into a 
              stage where they showcase breathtaking choreography, vibrant plumage, and complex vocalizations 
              to attract mates. Their performances are not mere instinctual behaviors but rather intricate 
              rituals that have been refined through millions of years of evolution. From the gravity-defying 
              leaps of grebes racing across water surfaces to the precisely synchronized movements of 
              bowerbirds dancing around their decorated stages, these avian performers demonstrate a level 
              of artistry that rivals human theatrical productions. Their displays serve multiple functions: 
              attracting mates, establishing territory, strengthening pair bonds, and communicating fitness 
              and genetic quality. These natural performers remind us that beauty and artistry are not 
              uniquely human traits but fundamental aspects of life on Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Cards */}
      <section className="birds-grid">
        <div className="container">
          {danceMasters.map((master, index) => (
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
                    <span className="stat-value">{master.length || master.height}</span>
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

export default DancePerformers