import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ToolUsers.css'

const ToolUsers = () => {
  const toolUsingBirds = [
    {
      id: 'new-caledonian-crow',
      name: 'New Caledonian Crow',
      scientificName: 'Corvus moneduloides',
      description: 'A master toolmaker that creates and modifies tools from twigs and leaves.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.4m',
      habitat: 'Forests of New Caledonia',
      diet: 'Insects, larvae, eggs, small vertebrates',
      funFact: 'Can create hooks from wire and even make tools by combining multiple elements'
    },
    {
      id: 'rook',
      name: 'Rook',
      scientificName: 'Corvus frugilegus',
      description: 'Intelligent corvid that uses tools to solve complex problems in experimental settings.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.45m',
      habitat: 'Farmland, parks, gardens across Europe and Asia',
      diet: 'Insects, seeds, fruits, small mammals, birds, eggs',
      funFact: 'Named for its distinctive "cawing" call, which can vary in pitch and tone'
    },
    {
      id: 'green-heron',
      name: 'Green Heron',
      scientificName: 'Butorides virescens',
      description: 'Uses bait to lure fish within striking distance, demonstrating sophisticated hunting behavior.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.45m',
      habitat: 'Wetlands, marshes, streams, ponds across North and Central America',
      diet: 'Fish, amphibians, reptiles, insects, crustaceans',
      funFact: 'One of the few bird species known to use bait fishing, dropping insects or bread to attract fish'
    },
    {
      id: 'woodpecker-finch',
      name: 'Woodpecker Finch',
      scientificName: 'Camarhynchus pallidus',
      description: 'Uses twigs and cactus spines to extract insects from tree holes in the Galápagos Islands.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.15m',
      habitat: 'Arid zones of the Galápagos Islands',
      diet: 'Insects, larvae, spiders, seeds',
      funFact: 'One of Darwin\'s finches that inspired his theory of evolution by natural selection'
    },
    {
      id: 'egyptian-vulture',
      name: 'Egyptian Vulture',
      scientificName: 'Neophron percnopterus',
      description: 'Known to use stones to crack open ostrich eggs, demonstrating tool-assisted feeding.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.6m',
      wingspan: '1.6m',
      habitat: 'Semi-deserts, steppes, cultivated areas across Africa, southern Europe, and Asia',
      diet: 'Carrion, insects, small mammals, eggs, fruits',
      funFact: 'One of the few birds that regularly uses tools, and one of the few that uses them to obtain food'
    },
    {
      id: 'sea-otter',
      name: 'Sea Otter',
      scientificName: 'Enhydra lutris',
      description: 'Although not a bird, this marine mammal is known for using rocks to crack open shellfish.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '1.2m',
      habitat: 'Coastal waters of the northern Pacific Ocean',
      diet: 'Sea urchins, abalone, mussels, clams, crabs',
      funFact: 'Has the densest fur of any animal and uses its chest as a table to break open prey'
    }
  ]

  return (
    <div className="tool-users">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tool Users
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds known for their remarkable ability to create and use tools with sophisticated problem-solving skills
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
            <h2>Feathered Engineers</h2>
            <p>
              The ability to create and use tools was once thought to be uniquely human, but certain bird species 
              have shattered this assumption with their remarkable problem-solving abilities. These avian engineers 
              demonstrate cognitive sophistication by modifying objects to suit specific needs, using tools in 
              sequential operations, and even teaching tool-use behaviors to their offspring. From the New Caledonian 
              Crow's hook-shaped tools to the Green Heron's bait fishing technique, these birds showcase the 
              incredible capacity for innovation in the animal kingdom. Their tool-using behaviors provide valuable 
              insights into the evolution of intelligence and the cognitive abilities of non-human animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {toolUsingBirds.map((bird, index) => (
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
                  {bird.wingspan && (
                    <div className="stat">
                      <span className="stat-label">Wingspan:</span>
                      <span className="stat-value">{bird.wingspan}</span>
                    </div>
                  )}
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

export default ToolUsers