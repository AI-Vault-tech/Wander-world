import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './NightHunters.css'

const NightHunters = () => {
  const nightBirds = [
    {
      id: 'owl',
      name: 'Great Horned Owl',
      scientificName: 'Bubo virginianus',
      description: 'Powerful nocturnal predator with exceptional hearing and silent flight.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.6m',
      habitat: 'Woodlands, forests, swamps, deserts, tundra across Americas',
      diet: 'Mammals, birds, reptiles, amphibians, fish, insects',
      funFact: 'Can rotate its head up to 270 degrees and has asymmetrical ears for precise sound localization'
    },
    {
      id: 'nightjar',
      name: 'Common Nighthawk',
      scientificName: 'Chordeiles minor',
      description: 'Aerial insect hunter that flies silently at dusk and dawn with wide mouth.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.25m',
      wingspan: '0.6m',
      habitat: 'Open areas, forests, grasslands across North America',
      diet: 'Flying insects, especially moths, beetles, mosquitoes',
      funFact: 'Has tiny bills but huge mouths to scoop insects from the air while flying'
    },
    {
      id: 'frogmouth',
      name: 'Tawny Frogmouth',
      scientificName: 'Podargus strigoides',
      description: 'Australian nocturnal bird that resembles an owl but is more closely related to nightjars.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.35m',
      habitat: 'Forests, woodlands, parks across Australia',
      diet: 'Insects, spiders, worms, small reptiles, mammals',
      funFact: 'Often mistaken for an owl due to similar appearance and nocturnal habits'
    },
    {
      id: 'potoo',
      name: 'Common Potoo',
      scientificName: 'Nyctibius griseus',
      description: 'Master of disguise that perches motionless during the day, hunting insects at night.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.5m',
      habitat: 'Tropical forests of Central and South America',
      diet: 'Large flying insects, especially moths and beetles',
      funFact: 'Has the largest eyes of any nocturnal bird relative to its head size'
    },
    {
      id: 'rail',
      name: 'Corn Crake',
      scientificName: 'Crex crex',
      description: 'Secretive marsh bird known for its distinctive nighttime call.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Grasslands, meadows, marshes across Europe and Asia',
      diet: 'Insects, spiders, worms, snails, seeds',
      funFact: 'Males call at night to attract females, with a distinctive grating "crex-crex" sound'
    },
    {
      id: 'goat-sucker',
      name: 'European Nightjar',
      scientificName: 'Caprimulgus europaeus',
      description: 'Nocturnal aerial insect hunter with cryptic plumage and distinctive churring call.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.25m',
      wingspan: '0.6m',
      habitat: 'Heathlands, forests, scrublands across Europe and Asia',
      diet: 'Flying insects, especially moths, beetles, mayflies',
      funFact: 'Its scientific name Caprimulgus means "goat-sucker" from ancient myth that it sucked goats dry'
    }
  ]

  return (
    <div className="night-hunters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Night Hunters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that hunt and are active during the night
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
            <h2>Creatures of the Night</h2>
            <p>
              As darkness falls and most birds settle into silence, these remarkable nocturnal 
              hunters come alive. Equipped with specialized adaptations for night vision, silent 
              flight, and acute hearing, these night hunters have evolved to exploit the 
              opportunities that darkness provides. From the stealthy flight of owls to the 
              aerial acrobatics of nightjars, these birds demonstrate the incredible diversity 
              of strategies for thriving in the nocturnal world. Their presence adds mystery 
              and wonder to the night, reminding us that the darkness is not empty but full 
              of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {nightBirds.map((bird, index) => (
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

export default NightHunters