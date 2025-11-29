import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SeedGuardians.css'

const SeedGuardians = () => {
  const seedCarriers = [
    {
      id: 'hornbill',
      name: 'Rhinoceros Hornbill',
      scientificName: 'Buceros rhinoceros',
      description: 'Disperses seeds of over 100 fruit species through extensive daily flights across forest canopy.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '1.2m',
      habitat: 'Tropical rainforests of Southeast Asia',
      diet: 'Figs, fruits, small animals, insects, reptiles',
      funFact: 'Male seals female inside nest cavity for 3 months during breeding, feeding her through crack'
    },
    {
      id: 'toucan',
      name: 'Toco Toucan',
      scientificName: 'Ramphastos toco',
      description: 'Consumes fruits whole and disperses seeds through droppings, often far from parent tree.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.6m',
      habitat: 'Tropical and subtropical forests, woodlands, plantations of South America',
      diet: 'Fruits, insects, small reptiles, bird eggs, small birds',
      funFact: 'Despite its large size, the bill is surprisingly lightweight, made of keratin with honeycomb structure'
    },
    {
      id: 'orangutan',
      name: 'Bornean Orangutan',
      scientificName: 'Pongo pygmaeus',
      description: 'Distributes seeds through extensive travels and builds sleeping platforms in fruiting trees.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      height: '1.5m',
      habitat: 'Peat swamps, mangrove forests, lowland dipterocarp forests of Borneo',
      diet: 'Figs, durian, mangosteen, lychee, jackfruit, insects, bird eggs',
      funFact: 'Has longest interbirth interval of any animal - 8 years between offspring'
    },
    {
      id: 'cassowary',
      name: 'Southern Cassowary',
      scientificName: 'Casuarius casuarius',
      description: 'Primary disperser of large-fruited rainforest trees, with some seeds only germinating after passage.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '1.7m',
      habitat: 'Tropical rainforests of Australia and New Guinea',
      diet: 'Fruits, fungi, insects, small vertebrates, carrion',
      funFact: 'Known as \"living dinosaur\" and is critically important for rainforest ecosystem health'
    },
    {
      id: 'agouti',
      name: 'Central American Agouti',
      scientificName: 'Dasyprocta punctata',
      description: 'Buries seeds for later consumption, creating \"seed banks\" that regenerate forests.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.6m',
      habitat: 'Tropical forests of Central and South America',
      diet: 'Fruits, nuts, seeds, roots, stems, leaves, insects',
      funFact: 'Has powerful jaws that can crack open Brazil nuts, which few other animals can do'
    },
    {
      id: 'bear',
      name: 'American Black Bear',
      scientificName: 'Ursus americanus',
      description: 'Disperses berry seeds through droppings and creates forest clearings through foraging.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1.8m',
      habitat: 'Forests, swamps, mountains across North America',
      diet: 'Berries, nuts, fruits, insects, fish, small mammals, honey',
      funFact: 'Excellent climbers throughout their lives and can run up to 35 mph despite their size'
    }
  ]

  return (
    <div className="seed-guardians">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Seed Guardians
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Forest regenerators that disperse seeds and maintain biodiversity through their feeding habits
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
            <h2>Forest Regenerators</h2>
            <p>
              Deep within the world's forests, a vital network of seed guardians ensures the continuation 
              of plant life and the regeneration of ecosystems. These remarkable animals serve as nature's 
              gardeners, carrying seeds across vast distances and depositing them in new locations where 
              they can germinate and grow. From the massive cassowaries that are the sole dispersers of 
              certain rainforest tree species to the meticulous agoutis that create underground seed banks, 
              these guardians play irreplaceable roles in maintaining forest biodiversity. Their feeding 
              behaviors, migration patterns, and territorial habits have co-evolved with plants over millions 
              of years, creating intricate relationships that are essential for ecosystem health. As forests 
              face increasing threats from deforestation and climate change, these seed guardians become even 
              more critical for preserving genetic diversity and ensuring the survival of countless plant species 
              that form the foundation of forest ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guardian Cards */}
      <section className="birds-grid">
        <div className="container">
          {seedCarriers.map((guardian, index) => (
            <motion.div
              key={guardian.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={guardian.image} alt={guardian.name} />
              </div>
              <div className="bird-info">
                <h3>{guardian.name}</h3>
                <p className="scientific-name">{guardian.scientificName}</p>
                <p className="description">{guardian.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{guardian.length || guardian.height}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{guardian.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{guardian.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {guardian.funFact}
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

export default SeedGuardians