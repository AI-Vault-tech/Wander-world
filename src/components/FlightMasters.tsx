import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './FlightMasters.css'

const FlightMasters = () => {
  const flightBirds = [
    {
      id: 'swift',
      name: 'Common Swift',
      scientificName: 'Apus apus',
      description: 'Spends almost its entire life airborne, even sleeping while flying. These remarkable birds are among nature\'s most accomplished fliers.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '0.4m',
      habitat: 'Skies over Europe, Asia, and Africa',
      diet: 'Flying insects caught in mid-air',
      funFact: 'Can remain airborne for 10 months straight without landing'
    },
    {
      id: 'falcon',
      name: 'Peregrine Falcon',
      scientificName: 'Falco peregrinus',
      description: 'The fastest animal on Earth, reaching speeds over 390 km/h during hunting dives. Masters of aerial predation with incredible precision.',
      image: 'https://images.unsplash.com/photo-1611623576676-6757429a25d0?w=1920&q=80',
      wingspan: '1.1m',
      habitat: 'Cliffs, mountains, tall buildings in cities',
      diet: 'Medium-sized birds like pigeons, doves, shorebirds',
      funFact: 'Has specialized nostrils that prevent lung damage during high-speed dives'
    },
    {
      id: 'hummingbird',
      name: 'Anna\'s Hummingbird',
      scientificName: 'Calypte anna',
      description: 'Tiny powerhouse capable of incredible aerial maneuvers including flying backwards, upside down, and hovering with precision.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.1m',
      habitat: 'Coastal scrub, oak woodlands, gardens',
      diet: 'Nectar, small insects, spiders',
      funFact: 'Wings beat up to 80 times per second, creating their characteristic humming sound'
    },
    {
      id: 'albatross',
      name: 'Wandering Albatross',
      scientificName: 'Diomedea exulans',
      description: 'Master of dynamic soaring with the largest wingspan of any living bird. These oceanic nomads glide effortlessly for hours.',
      image: 'https://images.unsplash.com/photo-1559827292-23367bc76ee9?w=1920&q=80',
      wingspan: '3.5m',
      habitat: 'Southern Ocean and subantarctic islands',
      diet: 'Squid, fish, krill, carrion',
      funFact: 'Can circumnavigate the globe in just 46 days without flapping wings'
    },
    {
      id: 'eagle',
      name: 'Golden Eagle',
      scientificName: 'Aquila chrysaetos',
      description: 'Powerful raptor that hunts prey much larger than itself with incredible precision. Masters of thermal soaring and aerial hunting.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      wingspan: '2.3m',
      habitat: 'Mountains, hills, cliffs, open country',
      diet: 'Rabbits, hares, ground squirrels, birds, reptiles',
      funFact: 'Can dive at speeds over 240 km/h when hunting'
    },
    {
      id: 'bee-eater',
      name: 'European Bee-eater',
      scientificName: 'Merops apiaster',
      description: 'Colorful aerial acrobat that catches stinging insects in mid-flight with remarkable skill and agility.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open countryside with bare ground for nesting',
      diet: 'Bees, wasps, hornets, other flying insects',
      funFact: 'Removes stingers from bees by rubbing them on branches before eating'
    }
  ]

  return (
    <div className="flight-masters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Flight Masters</h1>
          <p>Birds with extraordinary flying abilities and aerial acrobatics</p>
        </div>
      </section>

      {/* Featured Bird */}
      <section className="featured-section">
        <div className="container">
          <motion.div 
            className="featured-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2>Peregrine Falcon: The Fastest Animal on Earth</h2>
            <p>
              The Peregrine Falcon is not just a master of flight; it's the undisputed champion of speed in the animal kingdom. 
              During its hunting dives, called stoops, this remarkable bird can reach speeds exceeding 390 km/h (240 mph), 
              making it faster than most cars and even some aircraft!
            </p>
            <p>
              With specialized nostrils that prevent lung damage during high-speed dives and eyesight that's eight times sharper 
              than human vision, the Peregrine Falcon is a perfect example of evolutionary perfection in action.
            </p>
          </motion.div>
          <motion.div 
            className="featured-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1611623576676-6757429a25d0?w=1920&q=80" alt="Peregrine Falcon in flight" />
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Flight is perhaps the most remarkable adaptation in the animal kingdom, and these extraordinary birds represent the pinnacle of aerial mastery. From the swift's ability to remain airborne for months to the falcon's lightning-fast hunting dives, each species has evolved specialized wing shapes, muscle structures, and flight techniques that allow them to exploit different aerial niches with incredible efficiency and grace.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ marginTop: '1.5rem' }}
          >
            These aerial athletes demonstrate the incredible diversity of flight strategies in the avian world, from the energy-efficient soaring of albatrosses to the rapid wingbeats of hummingbirds, each perfectly adapted to their ecological niche.
          </motion.p>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {flightBirds.map((bird, index) => (
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
                    <span className="stat-label">{bird.wingspan ? 'Wingspan:' : 'Length:'}</span>
                    <span className="stat-value">{bird.wingspan || bird.length}</span>
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
      
      {/* Conclusion */}
      <section className="conclusion-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="conclusion-content"
          >
            <h2>The Art of Flight</h2>
            <p>
              The diversity of flight styles among birds is a testament to the power of evolution and adaptation. 
              Each species has developed unique solutions to the challenges of aerial locomotion, creating a rich 
              tapestry of flight strategies that continue to inspire scientists, engineers, and nature lovers alike.
            </p>
            <p>
              As we continue to study these remarkable creatures, we gain deeper insights into the mechanics of 
              flight, the importance of conservation, and the endless creativity of natural selection.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FlightMasters