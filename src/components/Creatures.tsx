import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Creatures.css'

const Creatures = () => {
  // Define the hierarchical structure for Wonderful Creatures
  const creatureCategories = [
    {
      id: 'majestic-beasts',
      name: 'Majestic Beasts',
      description: 'Large mammals, apex predators, iconic terrestrial and marine wildlife',
      path: '/creatures/majestic-beasts',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80'
    },
    {
      id: 'tiny-marvels',
      name: 'Tiny Marvels',
      description: 'Insects, microorganisms, small amphibians, and reptiles',
      path: '/creatures/tiny-marvels',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80'
    },
    {
      id: 'aerial-wonders',
      name: 'Aerial Wonders',
      description: 'Birds, flying insects, bats, and the beauty of flight',
      path: '/creatures/aerial-wonders',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'aquatic-life',
      name: 'Aquatic Life',
      description: 'Marine and freshwater creatures, from coral reefs to deep-sea oddities',
      path: '/creatures/aquatic-life',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'colorful-beings',
      name: 'Colorful Beings',
      description: 'The most vibrant, patterned, and camouflaged creatures',
      path: '/creatures/colorful-beings',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'
    },
    {
      id: 'ancient-species',
      name: 'Ancient Species',
      description: 'Living fossils, endangered species, and prehistoric descendants',
      path: '/creatures/ancient-species',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80'
    },
    // Additional creature categories
    {
      id: 'desert-survivors',
      name: 'Desert Survivors',
      description: 'Creatures that have adapted to thrive in the harshest desert environments',
      path: '/creatures/desert-survivors',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'arctic-adventurers',
      name: 'Arctic Adventurers',
      description: 'Animals that call the frozen polar regions their home',
      path: '/creatures/arctic-adventurers',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80'
    },
    {
      id: 'jungle-giants',
      name: 'Jungle Giants',
      description: 'Massive creatures that inhabit the world\'s dense rainforests',
      path: '/creatures/jungle-giants',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'night-hunters',
      name: 'Night Hunters',
      description: 'Nocturnal predators with incredible hunting abilities',
      path: '/creatures/night-hunters',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'
    },
    {
      id: 'deep-sea-mysteries',
      name: 'Deep Sea Mysteries',
      description: 'Enigmatic creatures that dwell in the darkest depths of the ocean',
      path: '/creatures/deep-sea-mysteries',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
    },
    {
      id: 'camouflage-masters',
      name: 'Camouflage Masters',
      description: 'Animals with extraordinary abilities to blend into their surroundings',
      path: '/creatures/camouflage-masters',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80'
    },
    // Special category for Creature Profiles
    {
      id: 'creature-profiles',
      name: 'Creature Profiles',
      description: 'In-depth explorations of Earth\'s most remarkable beings',
      path: '/creature-profiles',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80'
    }
  ]

  return (
    <div className="creatures">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Wonderful Creatures
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            From the microscopic to the monumental, life in all its glorious forms.
          </motion.p>
        </div>
      </motion.div>

      <section className="categories-section">
        <div className="categories-grid">
          {creatureCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="category-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link to={category.path} className="category-link">
                <div 
                  className="category-image"
                  style={{ 
                    backgroundImage: `linear-gradient(to bottom, transparent, rgba(10, 30, 43, 0.9)), url('${category.image}')` 
                  }}
                >
                  <div className="category-overlay">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <span className="explore-link">Explore →</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="creatures-info">
        <div className="info-content">
          <h2>Beauty in Every Being</h2>
          <p>
            The primary user emotion should be Wonder. Secondary emotions are Curiosity, Respect, and a sense of Connection.
            This is not a zoo or a encyclopedia; it is a digital sanctuary, a living gallery dedicated to the breathtaking 
            beauty and diversity of Earth's inhabitants.
          </p>
          <p>
            From the blue whale to the bioluminescent fungus, every creature is presented as a marvel of evolution, 
            worthy of wonder and protection. The core philosophy here is "Beauty in Every Being."
          </p>
        </div>
      </section>
    </div>
  )
}

export default Creatures