import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './BeautifulPlaces.css'

const BeautifulPlaces = () => {
  // Define the enhanced hierarchical structure with poetic pillars
  const pillars = [
    {
      id: 'scale-form',
      title: 'The Poetry of Scale',
      description: 'The beauty of dimension and physical extremes',
      categories: [
        {
          name: 'Tallest Wonders',
          path: '/tallest-places',
          description: 'Mountains, Skyscrapers, Waterfalls, Trees',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
        },
        {
          name: 'Deepest Places',
          path: '/deepest-places',
          description: 'Canyons, Trenches, Caves, Lakes',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80'
        },
        {
          name: 'Vast Expanses',
          path: '/vast-expanses',
          description: 'Deserts, Salt Flats, Tundras, Grasslands',
          image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80'
        },
        {
          name: 'Minute Marvels',
          path: '/minute-marvels',
          description: 'Microscopic Landscapes, Sand Patterns, Snowflakes, Tiny Islands',
          image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80'
        }
      ]
    },
    {
      id: 'elements-light',
      title: 'The Dance of Elements',
      description: 'The beauty of fundamental natural forces and visual phenomena',
      categories: [
        {
          name: 'Waterfalls',
          path: '/waterfalls',
          description: 'Tiered, Plunge, Cascade, Frozen',
          image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80'
        },
        {
          name: 'Deserts',
          path: '/deserts',
          description: 'Sand, Rock, Ice, Colorful',
          image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80'
        },
        {
          name: 'Azure Worlds',
          path: '/azure-worlds',
          description: 'Lakes, Lagoons, Oceans, Rivers',
          image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
        },
        {
          name: 'Frozen Realms',
          path: '/frozen-realms',
          description: 'Glaciers, Icebergs, Frozen Waterfalls, Snowscapes',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'
        },
        {
          name: 'Volcanic Lands',
          path: '/volcanic-lands',
          description: 'Volcanoes, Lava Flows, Geothermal Areas, Unique Rock Formations',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80'
        },
        {
          name: 'Light & Shadow',
          path: '/light-shadow',
          description: 'Canyons of Light, Alpenglow, Sunbeams, Reflections',
          image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80'
        }
      ]
    },
    {
      id: 'secrets-time',
      title: 'Secrets Woven in Time',
      description: 'The beauty of the hidden, ancient, and ephemeral',
      categories: [
        {
          name: 'Hidden Realms',
          path: '/hidden-realms',
          description: 'Caves, Cenotes, Secret Beaches, Hidden Valleys',
          image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80'
        },
        {
          name: 'Ancient Stones',
          path: '/ancient-stones',
          description: 'Rock Formations, Arches, Hoodoos, Fossils',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80'
        },
        {
          name: 'Living Landscapes',
          path: '/living-landscapes',
          description: 'Rainforests, Temperate, Boreal, Jungles, Wetlands, Mangroves',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80'
        },
        {
          name: 'Ephemeral Beauty',
          path: '/ephemeral-beauty',
          description: 'Blooming Seasons, Fall Foliage, Temporary Lakes',
          image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1920&q=80'
        }
      ]
    },
    {
      id: 'human-connection',
      title: 'A Human Touch',
      description: 'The beauty of the intersection between nature and humanity',
      categories: [
        {
          name: 'Cultivated Beauty',
          path: '/cultivated-beauty',
          description: 'Terraced Landscapes, Majestic Gardens, Flower Fields',
          image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80'
        },
        {
          name: 'Isolated Sanctuaries',
          path: '/isolated-sanctuaries',
          description: 'Remote Islands, Mountain Monasteries, Secluded Villages',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
        },
        {
          name: 'Coastal Dreams',
          path: '/coastal-dreams',
          description: 'Beaches, Sea Stacks, Cliffs, Archipelagos',
          image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80'
        }
      ]
    }
  ]

  // New premium sections to enhance the page
  const premiumFeatures = [
    {
      title: "Virtual Reality Expeditions",
      description: "Immerse yourself in 360° virtual tours of the world's most inaccessible wonders.",
      icon: "🌐"
    },
    {
      title: "Photographer's Showcase",
      description: "Curated galleries from award-winning photographers capturing Earth's beauty.",
      icon: "📸"
    },
    {
      title: "Time-lapse Collections",
      description: "Experience the changing beauty of landscapes through stunning time-lapse videos.",
      icon: "⏱️"
    },
    {
      title: "Conservation Stories",
      description: "Learn how we're protecting these precious places for future generations.",
      icon: "🌿"
    }
  ]

  const featuredCollections = [
    {
      name: "Seven Natural Wonders",
      description: "The most iconic natural landmarks from every continent.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
    },
    {
      name: "Hidden Gems",
      description: "Lesser-known treasures that deserve recognition.",
      image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&q=80"
    },
    {
      name: "Seasonal Transformations",
      description: "How landscapes change throughout the year.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
    },
    {
      name: "Extreme Environments",
      description: "The beauty found in Earth's harshest conditions.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80"
    }
  ]

  return (
    <div className="beautiful-places">
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
            Beautiful Places
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            Discover the extraordinary beauty of our world, from the tallest peaks to the hidden valleys, the vast deserts to the minute patterns in the sand.
          </motion.p>
        </div>
      </motion.div>

      {/* Premium Features Section */}
      <section className="premium-features-section">
        <div className="section-header">
          <h2>Premium Experiences</h2>
          <p>Enhanced ways to explore and connect with Earth's magnificent places</p>
        </div>
        <div className="features-grid">
          {premiumFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Render each pillar as a section */}
      {pillars.map((pillar, pillarIndex) => (
        <section key={pillar.id} className="pillar-section">
          <motion.div 
            className="pillar-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: pillarIndex * 0.2 }}
          >
            <h2>{pillar.title}</h2>
            <p>{pillar.description}</p>
          </motion.div>

          <div className="categories-grid">
            {pillar.categories.map((category, index) => (
              <motion.div
                key={category.path + index}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: (pillarIndex * 0.2) + (index * 0.1) }}
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
      ))}

      {/* Featured Collections Section */}
      <section className="featured-collections-section">
        <div className="section-header">
          <h2>Curated Collections</h2>
          <p>Handpicked selections of Earth's most captivating places</p>
        </div>
        <div className="collections-grid">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={index}
              className="collection-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15 }}
            >
              <div 
                className="collection-image"
                style={{ backgroundImage: `url('${collection.image}')` }}
              />
              <div className="collection-content">
                <h3>{collection.name}</h3>
                <p>{collection.description}</p>
                <button className="collection-button">View Collection</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="all-wonders-section">
        <div className="section-header">
          <h2>All Wonders</h2>
          <p>Discover the complete, unfiltered collection of Earth's magnificent places.</p>
        </div>
        <div className="wonders-grid">
          {pillars.flatMap(pillar => pillar.categories).map((category, index) => (
            <motion.div
              key={`wonder-${index}`}
              className="wonder-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div 
                className="wonder-image"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="wonder-content">
                <h4>{category.name}</h4>
                <p>{category.description}</p>
                <Link to={category.path} className="read-more">View Collection</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="explore-more-section">
        <div className="section-header">
          <h2>Explore More Wonders</h2>
          <p>Discover the beauty of Earth's creatures in our new Wonderful Creatures section</p>
        </div>
        <div className="explore-card">
          <motion.div
            className="explore-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Wonderful Creatures</h3>
            <p>
              From the majestic elephants to the tiny hummingbirds, explore the breathtaking beauty 
              and diversity of Earth's inhabitants. Discover the stories behind these remarkable 
              creatures and their incredible adaptations.
            </p>
            <Link to="/creatures" className="explore-link-btn">Explore Creatures</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BeautifulPlaces