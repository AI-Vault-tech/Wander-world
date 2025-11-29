import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './NightWhisperers.css'

const NightWhisperers = () => {
  const nightCreatures = [
    {
      id: 'barn-owl',
      name: 'Barn Owl',
      scientificName: 'Tyto alba',
      description: 'Hunts silently in complete darkness using exceptional hearing and specialized wing feathers.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.35m',
      habitat: 'Farmlands, grasslands, open woodlands worldwide',
      diet: 'Rodents, small mammals, birds, insects',
      funFact: 'Has asymmetrical ear placements that allow it to locate prey by sound alone with incredible precision'
    },
    {
      id: 'tawny-frogmouth',
      name: 'Tawny Frogmouth',
      scientificName: 'Podargus strigoides',
      description: 'Masters camouflage that perfectly mimics tree bark, remaining motionless during daylight.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.35m',
      habitat: 'Eucalyptus forests and woodlands of Australia',
      diet: 'Insects, spiders, worms, slugs, centipedes',
      funFact: 'Often mistaken for an owl but is actually more closely related to nightjars and has weak talons'
    },
    {
      id: 'flying-squirrel',
      name: 'Northern Flying Squirrel',
      scientificName: 'Glaucomys sabrinus',
      description: 'Glides between trees using patagium membrane and forages at night in forest canopies.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.3m',
      habitat: 'Coniferous and mixed forests of North America',
      diet: 'Truffles, mushrooms, lichens, nuts, seeds, insects',
      funFact: 'Has large eyes and specialized retinas that allow it to see in extremely low light conditions'
    },
    {
      id: 'aye-aye',
      name: 'Aye-aye',
      scientificName: 'Daubentonia madagascariensis',
      description: 'Uses elongated middle finger to tap on trees and locate insect larvae through echolocation.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.4m',
      habitat: 'Rainforests of Madagascar',
      diet: 'Insect larvae, nuts, fruits, nectar, seeds',
      funFact: 'Has continuously growing incisors like rodents and the world\'s longest middle finger relative to body size'
    },
    {
      id: 'kookaburra',
      name: 'Laughing Kookaburra',
      scientificName: 'Dacelo novaeguineae',
      description: 'Calls at dawn and dusk to establish territory, creating iconic laughing sounds of Australian bush.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.45m',
      habitat: 'Eucalyptus forests and woodlands of eastern Australia',
      diet: 'Snakes, lizards, birds, insects, small mammals, fish',
      funFact: 'Family groups participate in chorus calls that can be heard up to 2 kilometers away'
    },
    {
      id: 'bushbaby',
      name: 'Greater Galago',
      scientificName: 'Otolemur garnettii',
      description: 'Navigates forest canopy at night using large eyes and powerful hind legs for leaping.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.3m',
      habitat: 'Woodlands and forests of eastern and southern Africa',
      diet: 'Gum, sap, resin, fruit, insects, small vertebrates',
      funFact: 'Can rotate its head nearly 180 degrees and has a grooming claw on second toe'
    }
  ]

  return (
    <div className="night-whisperers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Night Whisperers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of darkness with exceptional nighttime adaptations and stealth abilities
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
              As daylight fades and the world settles into slumber, a secretive community of animals awakens 
              to claim dominion over the night. These night whisperers have evolved extraordinary sensory 
              adaptations that allow them to navigate, hunt, and communicate in near-total darkness. From 
              the silent flight of barn owls enabled by specialized wing feathers to the echolocation prowess 
              of aye-ayes tapping on tree bark, these creatures demonstrate nature's ingenuity in overcoming 
              the challenges of nocturnal existence. Their large eyes, acute hearing, and enhanced olfactory 
              senses paint a vivid picture of the world when the sun is down, revealing an entirely different 
              ecosystem that operates on rhythms unknown to diurnal creatures. These masters of darkness play 
              crucial roles in their environments, controlling pest populations, dispersing seeds, and maintaining 
              the delicate balance of nocturnal ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Creature Cards */}
      <section className="birds-grid">
        <div className="container">
          {nightCreatures.map((creature, index) => (
            <motion.div
              key={creature.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={creature.image} alt={creature.name} />
              </div>
              <div className="bird-info">
                <h3>{creature.name}</h3>
                <p className="scientific-name">{creature.scientificName}</p>
                <p className="description">{creature.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{creature.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{creature.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{creature.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {creature.funFact}
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

export default NightWhisperers