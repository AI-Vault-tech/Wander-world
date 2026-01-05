import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CamouflageMasters.css'

const CamouflageMasters = () => {
  const camoExperts = [
    {
      id: 'leaf-butterfly',
      name: 'Leaf Butterfly',
      scientificName: 'Kallima inachus',
      description: 'Mimics dead leaves with remarkable accuracy, including veins and decay spots.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      wingspan: '0.1m',
      habitat: 'Tropical forests of Asia',
      diet: 'Rotting fruit, tree sap, dung',
      funFact: 'When wings are closed, it resembles a dead leaf so perfectly that even the shadow pattern matches'
    },
    {
      id: 'stick-insect',
      name: 'Giant Prickly Stick Insect',
      scientificName: 'Extatosoma tiaratum',
      description: 'Resembles thorny branches and can change color based on humidity.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.15m',
      habitat: 'Eucalyptus forests of Australia',
      diet: 'Eucalyptus leaves',
      funFact: 'Females are bright green while males are brown, and they can reproduce without males'
    },
    {
      id: 'octopus',
      name: 'Common Octopus',
      scientificName: 'Octopus vulgaris',
      description: 'Instantly changes color, texture, and shape to blend with surroundings.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1m',
      habitat: 'Coral reefs, rocky crevices, seagrass beds in tropical oceans',
      diet: 'Crabs, shrimp, fish, mollusks',
      funFact: 'Has three hearts and blue blood, and can squeeze through openings the size of its beak'
    },
    {
      id: 'chameleon',
      name: 'Veiled Chameleon',
      scientificName: 'Chamaeleo calyptratus',
      description: 'Changes color for camouflage and communication using specialized skin cells.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.6m',
      habitat: 'Mountains and valleys of Yemen and Saudi Arabia',
      diet: 'Insects, small birds, other lizards',
      funFact: 'Eyes can move independently, allowing 360-degree vision, and tongue can extend to twice body length'
    },
    {
      id: 'stonefish',
      name: 'Reef Stonefish',
      scientificName: 'Synanceia verrucosa',
      description: 'Perfectly mimics rocks and coral, armed with venomous spines for defense.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.4m',
      habitat: 'Coral reefs and rocky areas of Indo-Pacific',
      diet: 'Fish, crustaceans, shrimp',
      funFact: 'Considered the world\'s most venomous fish, capable of killing an adult human in under an hour'
    },
    {
      id: 'owl',
      name: 'Great Horned Owl',
      scientificName: 'Bubo virginianus',
      description: 'Feather patterns break up silhouette, allowing it to remain hidden during daylight.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.6m',
      habitat: 'Woodlands, forests, deserts, wetlands across North and South America',
      diet: 'Rabbits, rodents, birds, reptiles, insects',
      funFact: 'Has asymmetrical ear openings that help locate prey by sound alone in complete darkness'
    }
  ]

  return (
    <div className="camouflage-masters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Camouflage Masters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of disguise who use color, shape, and texture to blend seamlessly with their environment
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
            <h2>Invisible Artists</h2>
            <p>
              In the eternal game of hide and seek played out in nature, certain animals have evolved 
              into true masters of disguise. These camouflage experts possess extraordinary abilities 
              to alter their appearance, becoming virtually invisible in their natural habitats. Their 
              techniques range from simple color matching to complex mimicry that reproduces not just 
              the appearance but also the texture and even the behavior of inanimate objects or other 
              organisms. Some, like the octopus, can instantaneously transform their skin to match 
              virtually any background, while others, such as the leaf butterfly, have evolved over 
              millions of years to resemble dead foliage with stunning accuracy. These invisible artists 
              use their camouflage for multiple purposes: avoiding predators, ambushing prey, and 
              communicating with others of their species. Their remarkable adaptations represent some 
              of the most sophisticated examples of natural selection and demonstrate the incredible 
              lengths to which evolution will go to ensure survival in competitive environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expert Cards */}
      <section className="birds-grid">
        <div className="container">
          {camoExperts.map((expert, index) => (
            <motion.div
              key={expert.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={expert.image} alt={expert.name} />
              </div>
              <div className="bird-info">
                <h3>{expert.name}</h3>
                <p className="scientific-name">{expert.scientificName}</p>
                <p className="description">{expert.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{expert.wingspan || expert.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{expert.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{expert.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {expert.funFact}
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

export default CamouflageMasters