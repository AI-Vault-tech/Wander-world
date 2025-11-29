import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ArcticAdventurers.css'

const ArcticAdventurers = () => {
  const arcticBirds = [
    {
      id: 'polar-bear',
      name: 'Polar Bear',
      scientificName: 'Ursus maritimus',
      description: 'Apex predator of the Arctic that hunts seals on sea ice.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '2.5m',
      habitat: 'Arctic sea ice, coastal areas of Alaska, Canada, Greenland, Norway, Russia',
      diet: 'Seals, fish, walruses, whale carcasses',
      funFact: 'Has black skin under transparent fur to absorb heat from the sun'
    },
    {
      id: 'arctic-fox',
      name: 'Arctic Fox',
      scientificName: 'Vulpes lagopus',
      description: 'Small fox with thick fur that changes color with seasons.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.7m',
      habitat: 'Arctic tundra of northern Eurasia and North America',
      diet: 'Lemmings, voles, birds, eggs, fish, berries',
      funFact: 'Has the warmest fur of any mammal and can survive temperatures as low as -50°C'
    },
    {
      id: 'walrus',
      name: 'Walrus',
      scientificName: 'Odobenus rosmarus',
      description: 'Large marine mammal with distinctive tusks and whiskers.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '3.5m',
      habitat: 'Arctic and subarctic regions of the Northern Hemisphere',
      diet: 'Mollusks, especially clams, using suction to extract meat',
      funFact: 'Can dive to depths of 90 meters and hold breath for up to 30 minutes'
    },
    {
      id: 'narwhal',
      name: 'Narwhal',
      scientificName: 'Monodon monoceros',
      description: 'Arctic whale with a long spiral tusk, actually an elongated tooth.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '5m',
      habitat: 'Arctic waters around Greenland, Canada, and Russia',
      diet: 'Arctic cod, Greenland halibut, squid, shrimp',
      funFact: 'The unicorn of the sea, with males having a tusk that can grow up to 3 meters long'
    },
    {
      id: 'beluga',
      name: 'Beluga Whale',
      scientificName: 'Delphinapterus leucas',
      description: 'Highly social whale with a distinctive white color and flexible neck.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '5.5m',
      habitat: 'Arctic and subarctic waters of the Northern Hemisphere',
      diet: 'Fish, squid, crustaceans, worms, mollusks',
      funFact: 'Can change the shape of its melon to focus echolocation clicks and express emotions'
    },
    {
      id: 'snowy-owl',
      name: 'Snowy Owl',
      scientificName: 'Bubo scandiacus',
      description: 'Large owl with thick white plumage that hunts during daylight.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.6m',
      habitat: 'Arctic tundra of North America and Eurasia',
      diet: 'Lemmings, other small mammals, birds, fish',
      funFact: 'Unlike most owls, it is diurnal (active during the day) and can turn its head 270 degrees'
    }
  ]

  return (
    <div className="arctic-adventurers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Arctic Adventurers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds and animals that thrive in frozen polar regions
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
            <h2>Frozen Frontier</h2>
            <p>
              In the extreme cold of Earth's polar regions, these remarkable creatures have evolved 
              incredible adaptations to survive in one of the planet's harshest environments. From 
              thick insulating layers to specialized hunting techniques, these arctic adventurers 
              demonstrate the incredible resilience of life in the face of extreme conditions. 
              Their unique physiological and behavioral adaptations allow them to thrive where 
              temperatures can plummet to -40°C or lower, turning the frozen wilderness into 
              their domain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animal Cards */}
      <section className="birds-grid">
        <div className="container">
          {arcticBirds.map((animal, index) => (
            <motion.div
              key={animal.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={animal.image} alt={animal.name} />
              </div>
              <div className="bird-info">
                <h3>{animal.name}</h3>
                <p className="scientific-name">{animal.scientificName}</p>
                <p className="description">{animal.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{animal.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{animal.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{animal.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {animal.funFact}
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

export default ArcticAdventurers