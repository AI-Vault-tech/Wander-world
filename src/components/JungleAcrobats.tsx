import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './JungleAcrobats.css'

const JungleAcrobats = () => {
  const acrobatBirds = [
    {
      id: 'toucan',
      name: 'Keel-billed Toucan',
      scientificName: 'Ramphastos sulfuratus',
      description: 'Navigates dense rainforest canopies with colorful bill and agile flight between branches.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.5m',
      habitat: 'Tropical rainforests of Central and South America',
      diet: 'Fruits, insects, small reptiles, bird eggs',
      funFact: 'Its large bill is surprisingly lightweight, made of keratin with a honeycomb structure'
    },
    {
      id: 'hornbill',
      name: 'Great Pied Hornbill',
      scientificName: 'Buceros bicornis',
      description: 'Soars through forest gaps with distinctive casque and performs aerial courtship displays.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1m',
      habitat: 'Tropical and subtropical forests of India, Southeast Asia',
      diet: 'Fruits, insects, small mammals, birds, reptiles',
      funFact: 'Female seals herself inside nest cavity with mud and feces, relying on male to feed her during incubation'
    },
    {
      id: 'flying-fox',
      name: 'Flying Fox',
      scientificName: 'Pteropus vampyrus',
      description: 'Glides between tall trees with membrane wings, navigating by echolocation and keen eyesight.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      wingspan: '1.5m',
      habitat: 'Tropical forests, mangroves, plantations across Southeast Asia and Australia',
      diet: 'Fruits, nectar, flowers, pollen',
      funFact: 'Despite name, it\'s actually a bat - the world\'s largest bat species with excellent flying abilities'
    },
    {
      id: 'spider-monkey',
      name: 'Black Spider Monkey',
      scientificName: 'Ateles fusciceps',
      description: 'Swings through canopy with prehensile tail acting as fifth limb for incredible agility.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.5m',
      habitat: 'Tropical rainforests of Central and South America',
      diet: 'Fruits, leaves, flowers, insects, bird eggs',
      funFact: 'Has a reduced or absent thumb, allowing hand to hook around branches more effectively'
    },
    {
      id: 'squirrel-monkey',
      name: 'Common Squirrel Monkey',
      scientificName: 'Saimiri sciureus',
      description: 'Leaps between branches with precision, using tail for balance in complex three-dimensional space.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Tropical forests of South America, especially along rivers',
      diet: 'Fruits, insects, spiders, small vertebrates, flowers, leaves',
      funFact: 'Has one of the largest brain-to-body ratios of any primate, enabling complex social behaviors'
    },
    {
      id: 'colugo',
      name: 'Malayan Colugo',
      scientificName: 'Galeopterus variegatus',
      description: 'Glides up to 150 meters between trees with patagium membrane, perfectly adapted for canopy life.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.4m',
      habitat: 'Tropical forests of Southeast Asia',
      diet: 'Leaves, shoots, flowers, fruits',
      funFact: 'Has the largest gliding membrane of any mammal, stretching from neck to forelimbs, hindlimbs and tail'
    }
  ]

  return (
    <div className="jungle-acrobats">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jungle Acrobats
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of agility and specialized adaptations for life in dense forest canopies
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
            <h2>Canopy Champions</h2>
            <p>
              Deep within the world's most biodiverse forests, a group of extraordinary creatures have 
              evolved to become masters of the three-dimensional realm of the forest canopy. These jungle 
              acrobats navigate complex aerial environments with a grace and precision that seems to defy 
              gravity itself. From the colorful toucans that leap between branches with their oversized 
              bills to the gliding colugos that sail silently through the night sky, these animals have 
              developed specialized anatomical features and behaviors that allow them to exploit niches 
              unavailable to their ground-dwelling counterparts. Their adaptations represent millions of 
              years of evolutionary refinement, resulting in some of the most spectacular displays of 
              locomotion in the natural world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {acrobatBirds.map((bird, index) => (
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
                    <span className="stat-value">{bird.length || bird.wingspan}</span>
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

export default JungleAcrobats