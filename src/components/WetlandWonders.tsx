import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './WetlandWonders.css'

const WetlandWonders = () => {
  const wetlandBirds = [
    {
      id: 'heron',
      name: 'Great Blue Heron',
      scientificName: 'Ardea herodias',
      description: 'Tall wading bird that stands motionless waiting to spear fish with its bill.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1.5m',
      habitat: 'Marshes, swamps, rivers, lakeshores across North America',
      diet: 'Fish, amphibians, reptiles, small mammals, insects',
      funFact: 'Can strike with lightning speed, extending its neck in 30 milliseconds to catch prey'
    },
    {
      id: 'ibis',
      name: 'Sacred Ibis',
      scientificName: 'Threskiornis aethiopicus',
      description: 'Wading bird with distinctive curved bill for probing in mud and shallow water.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      height: '0.7m',
      habitat: 'Wetlands, marshes, riverbanks, lakeshores in Africa',
      diet: 'Insects, crustaceans, mollusks, small reptiles, fish',
      funFact: 'Was sacred to ancient Egyptians and often depicted in hieroglyphics'
    },
    {
      id: 'duck',
      name: 'Mandarin Duck',
      scientificName: 'Aix galericulata',
      description: 'Colorful duck with ornate plumage, considered a symbol of love in Asian cultures.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.45m',
      habitat: 'Forested lakes, marshes, park ponds in East Asia',
      diet: 'Seeds, grains, insects, snails, small fish',
      funFact: 'Male loses its colorful breeding plumage after mating season to resemble females'
    },
    {
      id: 'bittern',
      name: 'American Bittern',
      scientificName: 'Botaurus lentiginosus',
      description: 'Camouflaged heron that can compress its body to appear like reeds.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.8m',
      habitat: 'Freshwater marshes and wetlands across North America',
      diet: 'Fish, amphibians, reptiles, insects, crustaceans',
      funFact: 'Males produce a distinctive booming call by inflating their esophagus'
    },
    {
      id: 'grebe',
      name: 'Great Crested Grebe',
      scientificName: 'Podiceps cristatus',
      description: 'Elegant diving bird with elaborate courtship dance involving weed ceremonies.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.5m',
      habitat: 'Lakes and slow-moving rivers across Europe, Asia, and Africa',
      diet: 'Fish, crustaceans, aquatic insects, mollusks',
      funFact: 'Pairs perform an intricate courtship ritual where they present each other with weeds'
    },
    {
      id: 'rail',
      name: 'Purple Gallinule',
      scientificName: 'Porphyrio martinicus',
      description: 'Colorful marsh bird with long toes for walking on lily pads.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.35m',
      habitat: 'Freshwater marshes with abundant vegetation in Americas',
      diet: 'Plant material, seeds, fruits, insects, small fish',
      funFact: 'Has lobed toes that help it walk on floating vegetation without sinking'
    }
  ]

  return (
    <div className="wetland-wonders">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Wetland Wonders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds that thrive in marshes, swamps, and other wetland environments
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
            <h2>Watery Realms</h2>
            <p>
              Wetlands are among the most biologically diverse ecosystems on Earth, and these 
              remarkable birds have evolved specialized adaptations to thrive in these 
              water-rich environments. From long legs for wading through shallow waters to 
              specialized bills for probing mud and catching slippery prey, these wetland 
              wonders demonstrate the incredible diversity of avian life. Their presence is 
              vital to wetland ecosystems, serving as both predators and prey in complex 
              food webs that support countless other species.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {wetlandBirds.map((bird, index) => (
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

export default WetlandWonders