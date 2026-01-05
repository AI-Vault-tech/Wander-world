import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './IceSculptors.css'

const IceSculptors = () => {
  const iceBirds = [
    {
      id: 'snow-bunting',
      name: 'Snow Bunting',
      scientificName: 'Plectrophenax nivalis',
      description: 'Nests in rock crevices and builds insulated nests to survive Arctic winters.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.16m',
      habitat: 'Arctic tundra, mountain peaks, coastal cliffs',
      diet: 'Seeds, insects, spiders, berries',
      funFact: 'Can withstand temperatures as low as -40°C by fluffing feathers to trap warm air close to body'
    },
    {
      id: 'ptarmigan',
      name: 'Rock Ptarmigan',
      scientificName: 'Lagopus muta',
      description: 'Changes plumage from brown to pure white and grows feathered feet for walking on snow.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.35m',
      habitat: 'Arctic and subarctic tundra, mountain peaks, rocky areas',
      diet: 'Buds, leaves, seeds, berries, flowers, insects',
      funFact: 'Has feathered feet that act as natural snowshoes, distributing weight to prevent sinking'
    },
    {
      id: 'snowy-owl',
      name: 'Snowy Owl',
      scientificName: 'Bubo scandiacus',
      description: 'Hunts in complete darkness and builds nests on the ground in Arctic tundra.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.6m',
      habitat: 'Arctic tundra, coastal dunes, prairie grasslands',
      diet: 'Lemmings, other small mammals, birds, fish',
      funFact: 'Female is more heavily barred than male, and both have yellow eyes that help them see in low light'
    },
    {
      id: 'polar-bear',
      name: 'Polar Bear',
      scientificName: 'Ursus maritimus',
      description: 'Constructs maternity dens in snowdrifts and ice caves for giving birth and nursing cubs.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '2.5m',
      habitat: 'Arctic sea ice, coastal areas, islands',
      diet: 'Ringed and bearded seals, walrus, beluga whales, bird eggs',
      funFact: 'Has black skin underneath white fur to absorb heat, and can swim at speeds up to 10 km/h'
    },
    {
      id: 'arctic-fox',
      name: 'Arctic Fox',
      scientificName: 'Vulpes lagopus',
      description: 'Digs elaborate dens in permafrost with multiple entrances and chambers for family living.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.6m',
      habitat: 'Arctic tundra, sea ice, coastal areas',
      diet: 'Lemmings, voles, ringed seal pups, fish, seabirds, eggs',
      funFact: 'Has the warmest fur of any mammal and can survive temperatures as low as -58°F (-50°C)'
    },
    {
      id: 'walrus',
      name: 'Walrus',
      scientificName: 'Odobenus rosmarus',
      description: 'Uses massive tusks to haul itself onto ice floes and create breathing holes in ice.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '3.5m',
      habitat: 'Arctic and subarctic seas, ice floes, shallow coastal areas',
      diet: 'Bivalve mollusks, gastropods, tube worms, fish, seals',
      funFact: 'Can dive to depths of 90 meters and hold breath for up to 30 minutes underwater'
    }
  ]

  return (
    <div className="ice-sculptors">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ice Sculptors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of frozen environments that create remarkable structures in ice and snow
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
            <h2>Frozen Architects</h2>
            <p>
              In the harsh, unforgiving realms of Earth's polar regions, a select group of creatures have 
              evolved extraordinary adaptations that allow them to not only survive but thrive in some of 
              the planet's most extreme conditions. These ice sculptors have mastered the art of creating 
              shelter, finding food, and raising young in environments where temperatures regularly plummet 
              below -40°C. From the intricate snow burrows of Arctic foxes to the massive ice excavation 
              projects of walruses, these animals demonstrate an almost supernatural ability to shape and 
              utilize their frozen surroundings. Their architectural feats in ice and snow rival those of 
              human builders, yet they accomplish these wonders using only their bodies and instincts honed 
              by millennia of evolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {iceBirds.map((bird, index) => (
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

export default IceSculptors