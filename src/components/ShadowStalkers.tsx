import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ShadowStalkers.css'

const ShadowStalkers = () => {
  const shadowHunters = [
    {
      id: 'nightjar',
      name: 'Common Nightjar',
      scientificName: 'Caprimulgus europaeus',
      description: 'Camouflages perfectly with bark and leaves while waiting to ambush flying insects at dusk.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open woodlands, heaths, scrublands across Europe, Asia, and North Africa',
      diet: 'Flying insects, especially moths, beetles, and mosquitoes',
      funFact: 'Has specially adapted mouth with huge gape for scooping insects from the air while flying'
    },
    {
      id: 'owl',
      name: 'Tawny Owl',
      scientificName: 'Strix aluco',
      description: 'Hunts silently through forests using exceptional hearing and vision in near-total darkness.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.38m',
      habitat: 'Woodlands, parks, gardens across Europe and western Asia',
      diet: 'Small mammals, birds, insects, worms',
      funFact: 'Has asymmetrically placed ears that allow it to pinpoint sound location with incredible accuracy'
    },
    {
      id: 'leopard',
      name: 'African Leopard',
      scientificName: 'Panthera pardus',
      description: 'Uses spotted coat for camouflage while stalking prey in dappled forest light.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1.8m',
      habitat: 'Forests, woodlands, grasslands, mountains across sub-Saharan Africa',
      diet: 'Antelopes, monkeys, rodents, birds, reptiles, fish, insects',
      funFact: 'Exceptionally strong, can drag prey twice its weight up trees to keep it safe from scavengers'
    },
    {
      id: 'jaguar',
      name: 'Jaguar',
      scientificName: 'Panthera onca',
      description: 'Stalks prey through dense rainforest using powerful build and exceptional camouflage.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '1.8m',
      habitat: 'Rainforests, swamps, grasslands of Central and South America',
      diet: 'Deer, peccaries, capybaras, caimans, fish, turtles, birds',
      funFact: 'Has the strongest bite force of any big cat relative to its size, able to pierce skulls'
    },
    {
      id: 'snow-leopard',
      name: 'Snow Leopard',
      scientificName: 'Panthera uncia',
      description: 'Uses pale rosette coat to blend with rocky mountain terrain while stalking prey.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1.3m',
      habitat: 'High mountain ranges of Central and South Asia',
      diet: 'Blue sheep, ibex, marmots, hares, birds',
      funFact: 'Has incredibly long tail - up to 1 meter - for balance when leaping between rocks'
    },
    {
      id: 'puma',
      name: 'Puma',
      scientificName: 'Puma concolor',
      description: 'Stalks prey through diverse habitats using keen senses and powerful hind legs for pouncing.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '2.4m',
      habitat: 'Mountains, forests, grasslands from Canada to South America',
      diet: 'Deer, elk, moose, bighorn sheep, rabbits, rodents',
      funFact: 'Has the greatest range of any native land animal in the Western Hemisphere'
    }
  ]

  return (
    <div className="shadow-stalkers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shadow Stalkers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of stealth and camouflage who hunt in low light or use concealment to ambush prey
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
            <h2>Stealth Hunters</h2>
            <p>
              In the dim light of dawn and dusk, or hidden within the dappled shadows of forests and rocky 
              terrain, a group of exceptional predators demonstrate the art of stealth hunting. These shadow 
              stalkers have evolved remarkable adaptations for remaining unseen while pursuing their prey, 
              from the cryptic plumage of nightjars that renders them virtually invisible against forest 
              floors to the spotted coats of leopards that break up their silhouette in dappled light. Their 
              hunting strategies rely on patience, precision, and an intimate understanding of light and 
              shadow. Many possess specialized sensory adaptations, such as the asymmetric ears of owls that 
              enable them to locate prey by sound alone in complete darkness, or the exceptional night vision 
              of nocturnal hunters. These masters of concealment play crucial roles as apex predators, 
              controlling prey populations and maintaining the delicate balance of their ecosystems through 
              their remarkable hunting prowess.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hunter Cards */}
      <section className="birds-grid">
        <div className="container">
          {shadowHunters.map((hunter, index) => (
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

export default ShadowStalkers