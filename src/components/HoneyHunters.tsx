import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HoneyHunters.css'

const HoneyHunters = () => {
  const honeySeekers = [
    {
      id: 'honeyguide',
      name: 'Greater Honeyguide',
      scientificName: 'Indicator indicator',
      description: 'Leads humans and other animals to bee colonies then feeds on leftover wax and larvae.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.2m',
      habitat: 'Woodlands and savannas of sub-Saharan Africa',
      diet: 'Beeswax, larvae, insects, fruits, berries',
      funFact: 'One of the few birds that can digest beeswax, which few other animals can do'
    },
    {
      id: 'honey-badger',
      name: 'Honey Badger',
      scientificName: 'Mellivora capensis',
      description: 'Uses incredible strength and immunity to bee stings to raid beehives for honey and larvae.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.7m',
      habitat: 'Deserts, scrublands, grasslands, woodlands across Africa and Southwest Asia',
      diet: 'Honey, bee larvae, insects, small mammals, birds, reptiles, fruit',
      funFact: 'Has extremely thick skin that protects it from bee stings and even some predator bites'
    },
    {
      id: 'bee-eater',
      name: 'European Bee-eater',
      scientificName: 'Merops apiaster',
      description: 'Catches bees and wasps in mid-air then removes stingers by rubbing them on branches.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open countryside, river valleys, farmland across Europe and western Asia',
      diet: 'Bees, wasps, hornets, other flying insects',
      funFact: 'Removes stinger from prey by hitting it against a perch, a skill learned by young birds'
    },
    {
      id: 'sun-bear',
      name: 'Sun Bear',
      scientificName: 'Helarctos malayanus',
      description: 'Climbs trees to raid beehives, using long tongue to extract honey and insects.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '1.4m',
      habitat: 'Tropical rainforests of Southeast Asia',
      diet: 'Honey, bees, termites, fruits, insects, small mammals, birds',
      funFact: 'Has the longest tongue of any bear species - up to 25cm - perfect for extracting honey'
    },
    {
      id: 'honey-possum',
      name: 'Honey Possum',
      scientificName: 'Tarsipes rostratus',
      description: 'Feeds exclusively on nectar and pollen, acting as important pollinator for banksia flowers.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.07m',
      habitat: 'Heathlands of southwestern Australia with banksia and grevillea flowers',
      diet: 'Nectar and pollen from banksia, grevillea, and melaleuca flowers',
      funFact: 'Has brush-tipped tongue and specialized gut that can digest large amounts of sugar'
    },
    {
      id: 'waxwing',
      name: 'Bohemian Waxwing',
      scientificName: 'Bombycilla garrulus',
      description: 'Consumes large quantities of berries, including those with high sugar content similar to honey.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.19m',
      habitat: 'Boreal forests of northern Europe, Asia, and North America',
      diet: 'Berries, especially rowan, juniper, and honeysuckle; insects in summer',
      funFact: 'Can consume up to three times its body weight in berries in a single day'
    }
  ]

  return (
    <div className="honey-hunters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Honey Hunters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialists in seeking out sweet rewards from bees and nectar-rich plants
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
            <h2>Sweet Seekers</h2>
            <p>
              Throughout the natural world, certain animals have evolved extraordinary specializations for 
              seeking out and consuming sweet substances, particularly honey and nectar. These honey hunters 
              have developed remarkable strategies for accessing these energy-rich resources, from the 
              honeyguide's unique partnership with humans to the honey badger's fearless hive raiding. 
              Their relationships with bees and flowering plants represent some of nature's most fascinating 
              examples of co-evolution, where both parties benefit from the interaction. While some hunters 
              like the honey badger focus on raiding beehives for their protein-rich larvae, others like 
              the honey possum have become entirely dependent on nectar, serving as crucial pollinators in 
              their ecosystems. These sweet-seeking specialists play vital roles in maintaining the delicate 
              balance between flowering plants and their pollinators, ensuring the continuation of countless 
              plant species while satisfying their own nutritional needs for energy-dense foods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hunter Cards */}
      <section className="birds-grid">
        <div className="container">
          {honeySeekers.map((hunter, index) => (
            <motion.div
              key={hunter.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={hunter.image} alt={hunter.name} />
              </div>
              <div className="bird-info">
                <h3>{hunter.name}</h3>
                <p className="scientific-name">{hunter.scientificName}</p>
                <p className="description">{hunter.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{hunter.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{hunter.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{hunter.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {hunter.funFact}
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

export default HoneyHunters