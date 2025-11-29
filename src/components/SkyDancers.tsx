import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './SkyDancers.css'

const SkyDancers = () => {
  const skyDancers = [
    {
      id: 'swift',
      name: 'Common Swift',
      scientificName: 'Apus apus',
      description: 'Spends almost its entire life airborne, even sleeping while flying at high altitudes.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '0.45m',
      habitat: 'Urban and rural areas across Europe, Asia and Africa',
      diet: 'Flying insects, airborne spiders',
      funFact: 'Can stay airborne for up to 10 months without landing, even during migration'
    },
    {
      id: 'tern',
      name: 'Arctic Tern',
      scientificName: 'Sterna paradisaea',
      description: 'Undertakes the longest migration of any animal, flying from Arctic to Antarctic and back.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '0.7m',
      habitat: 'Coastal areas worldwide, Arctic in summer, Antarctic in winter',
      diet: 'Fish, crustaceans, marine invertebrates',
      funFact: 'Flies roughly 70,000 km annually, experiencing two summers each year'
    },
    {
      id: 'kite',
      name: 'Red Kite',
      scientificName: 'Milvus milvus',
      description: 'Performs elegant aerial acrobatics with distinctive forked tail and graceful wingbeats.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      wingspan: '1.8m',
      habitat: 'Open woodlands, farmland, urban fringes across Europe',
      diet: 'Carrion, small mammals, birds, insects',
      funFact: 'Can locate food from over 4km away using keen eyesight'
    },
    {
      id: 'bee-eater',
      name: 'European Bee-eater',
      scientificName: 'Merops apiaster',
      description: 'Catches bees and wasps in mid-air then removes stingers by rubbing them on branches.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      wingspan: '0.35m',
      habitat: 'Open countryside, river valleys, farmland across Europe and Asia',
      diet: 'Bees, wasps, hornets, other flying insects',
      funFact: 'Removes stinger from prey by hitting it against a perch, a skill learned by young birds'
    },
    {
      id: 'flycatcher',
      name: 'European Flycatcher',
      scientificName: 'Ficedula hypoleuca',
      description: 'Performs spectacular aerial sallies to catch insects, returning to the same perch each time.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      wingspan: '0.25m',
      habitat: 'Deciduous forests, parks, gardens across Europe and western Asia',
      diet: 'Flying insects, especially flies, beetles, moths',
      funFact: 'Can make up to 30 hunting flights per minute during peak insect activity'
    },
    {
      id: 'skimmer',
      name: 'Black Skimmer',
      scientificName: 'Rynchops niger',
      description: 'Flies with lower mandible slicing through water surface to catch fish and crustaceans.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      wingspan: '1.3m',
      habitat: 'Coastal beaches, estuaries, salt marshes of Americas',
      diet: 'Small fish, shrimp, crustaceans',
      funFact: 'Has the most extreme bill dimorphism of any bird species - males have longer bills'
    }
  ]

  return (
    <div className="sky-dancers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sky Dancers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds known for their spectacular aerial displays and mastery of flight
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
            <h2>Masters of the Air</h2>
            <p>
              In the vast expanse of the sky, these remarkable birds transform the heavens into their 
              stage, performing breathtaking aerial displays that showcase the pinnacle of evolutionary 
              flight adaptation. From the swifts that spend nearly their entire lives airborne to the 
              terns that traverse hemispheres in their annual journeys, these sky dancers demonstrate 
              an unparalleled mastery of aerial locomotion. Their performances serve multiple purposes: 
              attracting mates through elaborate courtship flights, defending territories with aggressive 
              aerial maneuvers, and exploiting atmospheric conditions to achieve remarkable energy efficiency. 
              Watching these birds in flight offers a glimpse into the extraordinary possibilities of 
              vertebrate locomotion and the beauty that emerges from millions of years of natural selection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {skyDancers.map((bird, index) => (
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
                    <span className="stat-label">Wingspan:</span>
                    <span className="stat-value">{bird.wingspan}</span>
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

export default SkyDancers