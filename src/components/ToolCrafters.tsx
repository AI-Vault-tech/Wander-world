import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ToolCrafters.css'

const ToolCrafters = () => {
  const toolMasters = [
    {
      id: 'chimpanzee',
      name: 'Common Chimpanzee',
      scientificName: 'Pan troglodytes',
      description: 'Modifies sticks to fish for termites and uses rocks to crack nuts.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      height: '1.5m',
      habitat: 'Tropical forests and savannas of central and West Africa',
      diet: 'Fruits, leaves, seeds, insects, small mammals, birds, eggs',
      funFact: 'Can modify tools for specific tasks and teach tool use to offspring'
    },
    {
      id: 'crow',
      name: 'New Caledonian Crow',
      scientificName: 'Corvus moneduloides',
      description: 'Shapes hooks from twigs and wires to extract insects from crevices.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.4m',
      habitat: 'Forests and woodlands of New Caledonia',
      diet: 'Insects, spiders, eggs, small reptiles, fruit, nuts',
      funFact: 'Can solve complex puzzles and even create compound tools by combining multiple elements'
    },
    {
      id: 'sea-otter',
      name: 'Sea Otter',
      scientificName: 'Enhydra lutris',
      description: 'Uses rocks as anvils to crack open shellfish and clams.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1.2m',
      habitat: 'Coastal kelp forests of the northern Pacific Ocean',
      diet: 'Sea urchins, abalone, mussels, crabs, sea stars',
      funFact: 'Has the densest fur of any animal and uses tools more than any other marine mammal'
    },
    {
      id: 'elephant',
      name: 'Asian Elephant',
      scientificName: 'Elephas maximus',
      description: 'Modifies branches to swat flies and scratch hard-to-reach places.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      height: '3m',
      habitat: 'Forests, grasslands, and scrublands of South and Southeast Asia',
      diet: 'Grasses, leaves, bark, fruits, roots',
      funFact: 'Can distinguish between different human languages and recognize themselves in mirrors'
    },
    {
      id: 'dolphin',
      name: 'Indo-Pacific Bottlenose Dolphin',
      scientificName: 'Tursiops aduncus',
      description: 'Uses marine sponges as tools to protect rostrums while foraging.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '2.5m',
      habitat: 'Coastal waters of the Indo-Pacific region',
      diet: 'Fish, squid, crustaceans',
      funFact: 'Only dolphins known to use tools, with knowledge passed down through maternal lines'
    },
    {
      id: 'woodpecker',
      name: 'Acorn Woodpecker',
      scientificName: 'Melanerpes formicivorus',
      description: 'Excavates granaries in trees to store acorns for future consumption.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.2m',
      habitat: 'Oak woodlands and forests of western North America',
      diet: 'Acorns, insects, fruits, nuts, tree sap',
      funFact: 'Colonies maintain communal granaries with thousands of individual storage holes'
    }
  ]

  return (
    <div className="tool-crafters">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Tool Crafters
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ingenious innovators who create and use tools to solve problems and manipulate their environment
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
            <h2>Inventive Minds</h2>
            <p>
              Among the animal kingdom, only a select few species have demonstrated the cognitive ability 
              to create and use tools to solve problems and manipulate their environment. These tool crafters 
              possess remarkable intelligence and problem-solving skills that allow them to modify objects 
              in their environment to serve specific purposes. Their tool use goes beyond simple object 
              manipulation to include complex behaviors such as manufacturing tools for future use, 
              modifying tools for specific tasks, and even teaching tool-making skills to their offspring. 
              From the precision-engineered hooks crafted by New Caledonian crows to the sophisticated 
              sponge-use techniques of bottlenose dolphins, these innovative animals challenge our 
              understanding of animal intelligence and the evolution of technology. Their behaviors provide 
              valuable insights into the cognitive processes underlying tool use and offer glimpses into 
              the evolutionary origins of human technological development. These inventive minds represent 
              some of the most cognitively advanced animals on Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Cards */}
      <section className="birds-grid">
        <div className="container">
          {toolMasters.map((master, index) => (
            <motion.div
              key={master.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={master.image} alt={master.name} />
              </div>
              <div className="bird-info">
                <h3>{master.name}</h3>
                <p className="scientific-name">{master.scientificName}</p>
                <p className="description">{master.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{master.length || master.height}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{master.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{master.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {master.funFact}
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

export default ToolCrafters