import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './MudArchitects.css'

const MudArchitects = () => {
  const mudBuilders = [
    {
      id: 'swallow',
      name: 'Barn Swallow',
      scientificName: 'Hirundo rustica',
      description: 'Crafts cup-shaped nests from mud pellets mixed with grass and saliva under eaves and bridges.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '0.17m',
      habitat: 'Open areas near water sources, farms, towns, and cities worldwide',
      diet: 'Flying insects, especially flies, beetles, wasps, moths, dragonflies',
      funFact: 'Both males and females participate in nest building, with males responsible for collecting mud pellets'
    },
    {
      id: 'mud-dauber',
      name: 'Mud Dauber Wasp',
      scientificName: 'Sceliphron caementarium',
      description: 'Constructs cylindrical mud tubes to lay eggs and provision with paralyzed spiders.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.025m',
      habitat: 'Shelters, eaves, garages, and protected outdoor areas',
      diet: 'Adults feed on flower nectar; larvae consume paralyzed spiders',
      funFact: 'Paralyzes spiders with venom but doesn\'t kill them, keeping them fresh for developing larvae'
    },
    {
      id: 'plover',
      name: 'Killdeer',
      scientificName: 'Charadrius vociferus',
      description: 'Scratch-scrapes nest depression in gravel or dirt and lines with pebbles and shell fragments.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.25m',
      habitat: 'Open fields, golf courses, parking lots, rooftops, gravel bars',
      diet: 'Insects, earthworms, crayfish, small fish, berries, seeds',
      funFact: 'Performs broken-wing distraction display to lure predators away from nest'
    },
    {
      id: 'terrapin',
      name: 'Diamondback Terrapin',
      scientificName: 'Malaclemys terrapin',
      description: 'Females travel miles inland to dig flask-shaped egg chambers in sandy or muddy substrate.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.2m',
      habitat: 'Brackish tidal marshes, creeks, and rivers along Atlantic and Gulf coasts',
      diet: 'Crabs, snails, mussels, insects, worms, fish, carrion',
      funFact: 'Salt glands behind eyes help excrete excess salt, allowing survival in brackish water'
    },
    {
      id: 'beaver',
      name: 'North American Beaver',
      scientificName: 'Castor canadensis',
      description: 'Constructs dams and lodges using mud, sticks, and stones to create pond ecosystems.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '1m',
      habitat: 'Rivers, streams, lakes, and ponds across North America',
      diet: 'Bark, leaves, stems, roots, aquatic plants',
      funFact: 'Creates wetlands that support 40% of North America\'s endangered species'
    },
    {
      id: 'mudskipper',
      name: 'Mudskipper',
      scientificName: 'Periophthalmus barbarus',
      description: 'Builds burrows in mudflats and uses fins to \"walk\" on land between tidal pools.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.15m',
      habitat: 'Mangrove swamps and mudflats in tropical Indo-Pacific regions',
      diet: 'Insects, insect larvae, small crabs, organic detritus',
      funFact: 'Can breathe through skin and mouth lining when out of water, and has eyes on stalks for 360° vision'
    }
  ]

  return (
    <div className="mud-architects">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mud Architects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Masters of earthen construction who build elaborate structures using mud and clay
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
            <h2>Earth Builders</h2>
            <p>
              In wetlands, riverbanks, and coastal areas around the world, a remarkable group of animals 
              demonstrate extraordinary architectural prowess using one of Earth's most abundant materials - 
              mud. These mud architects transform simple clay and soil into complex structures that serve 
              as nurseries, fortresses, and engineering marvels. From the precision-engineered nests of 
              barn swallows that cling to vertical surfaces to the massive dam complexes of beavers that 
              reshape entire landscapes, these creatures showcase nature's mastery of earthen construction. 
              Their buildings provide critical ecosystem services, creating habitats for countless other 
              species while demonstrating sustainable building practices that have inspired human architects 
              for centuries. These unsung engineers prove that with the right techniques and persistence, 
              even the humblest materials can be transformed into architectural masterpieces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Builder Cards */}
      <section className="birds-grid">
        <div className="container">
          {mudBuilders.map((builder, index) => (
            <motion.div
              key={builder.id}
              className="bird-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bird-image">
                <img src={builder.image} alt={builder.name} />
              </div>
              <div className="bird-info">
                <h3>{builder.name}</h3>
                <p className="scientific-name">{builder.scientificName}</p>
                <p className="description">{builder.description}</p>
                <div className="bird-stats">
                  <div className="stat">
                    <span className="stat-label">Size:</span>
                    <span className="stat-value">{builder.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Habitat:</span>
                    <span className="stat-value">{builder.habitat}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Diet:</span>
                    <span className="stat-value">{builder.diet}</span>
                  </div>
                </div>
                <div className="fun-fact">
                  <strong>Fun Fact:</strong> {builder.funFact}
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

export default MudArchitects