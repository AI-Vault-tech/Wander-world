import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './IslandEndemics.css'

const IslandEndemics = () => {
  const islandBirds = [
    {
      id: 'dodo',
      name: 'Dodo',
      scientificName: 'Raphus cucullatus (Extinct)',
      description: 'An iconic flightless bird from Mauritius that became extinct due to human activity.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1m',
      habitat: 'Mauritius forests (historically)',
      diet: 'Fruits, nuts, seeds, roots, crabs',
      funFact: 'The dodo was so trusting of humans that sailors could easily approach and capture them'
    },
    {
      id: 'kakapo',
      name: 'Kakapo',
      scientificName: 'Strigops habroptilus',
      description: 'The world\'s only flightless parrot, known for its owl-like face and nocturnal habits.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      height: '0.6m',
      habitat: 'Forests of New Zealand',
      diet: 'Fruits, seeds, plants, pollen, nectar',
      funFact: 'The heaviest parrot in the world and is critically endangered with only around 200 individuals left'
    },
    {
      id: 'takahe',
      name: 'Takahe',
      scientificName: 'Porphyrio hochstetteri',
      description: 'A large, flightless rail that was once thought to be extinct.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '0.63m',
      habitat: 'Alpine grasslands of New Zealand',
      diet: 'Tussock grasses, fern rhizomes, insects',
      funFact: 'Rediscovered in 1948 after being considered extinct for 50 years'
    },
    {
      id: 'crowned-crane',
      name: 'Grey Crowned Crane',
      scientificName: 'Balearica regulorum',
      description: 'A crane with a distinctive golden crown, found in wetlands of East Africa.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '1.1m',
      habitat: 'Wetlands, grasslands, cultivated areas of East Africa',
      diet: 'Seeds, insects, frogs, fish, reptiles',
      funFact: 'One of only two crane species that can roost in trees, thanks to its long hind toe'
    },
    {
      id: 'honeyeater',
      name: 'Scarlet Honeyeater',
      scientificName: 'Myzomela eques',
      description: 'A small, brightly colored bird endemic to Norfolk Island.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.12m',
      habitat: 'Subtropical forests of Norfolk Island',
      diet: 'Nectar, insects, spiders',
      funFact: 'Found only on Norfolk Island, a small island in the Pacific Ocean between Australia and New Zealand'
    },
    {
      id: 'rail',
      name: 'Inaccessible Island Rail',
      scientificName: 'Laterallus rogersi',
      description: 'The world\'s smallest flightless bird, endemic to Inaccessible Island.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.13m',
      habitat: 'Temperate shrubland and tussock grassland of Inaccessible Island',
      diet: 'Insects, earthworms, berries',
      funFact: 'Flightless due to the absence of predators on its remote island home'
    }
  ]

  return (
    <div className="island-endemics">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Island Endemics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that evolved in isolation on remote islands with unique characteristics found nowhere else
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
            <h2>Island Treasures</h2>
            <p>
              Remote islands have served as natural laboratories of evolution, fostering the development of 
              unique species found nowhere else on Earth. Isolated from mainland populations for thousands 
              or millions of years, these island endemics have evolved distinctive characteristics adapted 
              to their specific environments. Some, like the dodo, tragically disappeared due to human activity, 
              serving as poignant reminders of our impact on fragile ecosystems. Others, like the kakapo, 
              persist only through intensive conservation efforts. These birds showcase the incredible power 
              of evolutionary adaptation and the importance of preserving these unique island ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {islandBirds.map((bird, index) => (
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

export default IslandEndemics