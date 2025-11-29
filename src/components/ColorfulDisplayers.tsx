import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './ColorfulDisplayers.css'

const ColorfulDisplayers = () => {
  const colorfulBirds = [
    {
      id: 'peacock',
      name: 'Indian Peafowl',
      scientificName: 'Pavo cristatus',
      description: 'Male displays spectacular tail feathers in elaborate courtship displays.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80',
      length: '1m',
      habitat: 'Forests, cultivated lands, villages across South Asia',
      diet: 'Seeds, insects, fruits, small reptiles',
      funFact: 'Peacock feathers have microscopic structures that create iridescent colors without pigment'
    },
    {
      id: 'bird-of-paradise',
      name: 'Greater Bird-of-Paradise',
      scientificName: 'Paradisaea apoda',
      description: 'Male performs intricate dance with golden plumes to attract females.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.3m',
      habitat: 'Tropical rainforests of New Guinea and nearby islands',
      diet: 'Fruits, berries, arthropods, small reptiles',
      funFact: 'Males molt their ornate plumes annually and regrow them for the next breeding season'
    },
    {
      id: 'toucan',
      name: 'Toco Toucan',
      scientificName: 'Ramphastos toco',
      description: 'Large, colorful bill used in courtship displays and thermoregulation.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.6m',
      billLength: '0.2m',
      habitat: 'Tropical forests of South America',
      diet: 'Fruits, insects, small reptiles, eggs, small birds',
      funFact: 'Despite its large size, the bill is lightweight, made of keratin with a honeycomb structure'
    },
    {
      id: 'quetzal',
      name: 'Resplendent Quetzal',
      scientificName: 'Pharomachrus mocinno',
      description: 'Male has brilliant green plumage with long tail feathers prized by ancient cultures.',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80',
      length: '0.4m',
      habitat: 'Cloud forests of Central America',
      diet: 'Fruits (especially wild avocados), insects, lizards, frogs',
      funFact: 'Considered sacred by the ancient Maya and Aztec civilizations'
    },
    {
      id: 'kingfisher',
      name: 'Rainbow Bee-eater',
      scientificName: 'Merops ornatus',
      description: 'Vibrant bee-eater with rainbow-colored throat and elegant breeding plumage.',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80',
      length: '0.2m',
      habitat: 'Open woodlands, scrublands, farmlands across Australia',
      diet: 'Bees, wasps, ants, other flying insects',
      funFact: 'Removes stingers from bees by rubbing them on branches before eating'
    },
    {
      id: 'sunbird',
      name: 'Crimson Sunbird',
      scientificName: 'Aethopyga siparaja',
      description: 'Small, jewel-like bird with iridescent red and purple male plumage.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      length: '0.1m',
      habitat: 'Forests, gardens, plantations across South and Southeast Asia',
      diet: 'Nectar, spiders, insects',
      funFact: 'Can hover in mid-air like a hummingbird while feeding on nectar'
    }
  ]

  return (
    <div className="colorful-displayers">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Colorful Displayers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Birds known for their vibrant plumage and spectacular mating displays
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
            <h2>Nature's Living Jewels</h2>
            <p>
              In the avian world, few spectacles rival the breathtaking beauty of these colorful 
              displayers. Their vibrant plumage and elaborate courtship rituals represent some 
              of nature's most stunning evolutionary creations. These birds have developed 
              extraordinary visual displays not just for beauty, but as crucial tools for 
              attracting mates and ensuring reproductive success. From the iridescent feathers 
              of hummingbirds to the dramatic plumes of birds-of-paradise, these living jewels 
              showcase the incredible diversity of form and color that evolution can produce 
              when survival depends on standing out rather than blending in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bird Cards */}
      <section className="birds-grid">
        <div className="container">
          {colorfulBirds.map((bird, index) => (
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
                  {(bird.billLength) && (
                    <div className="stat">
                      <span className="stat-label">{bird.billLength ? 'Bill Length:' : ''}</span>
                      <span className="stat-value">{bird.billLength}</span>
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

export default ColorfulDisplayers