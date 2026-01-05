import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './BirdsWorld.css'

const BirdsWorld = () => {
  // Define the hierarchical structure for Birds World
  const birdCategories = [
    {
      id: 'flight-masters',
      name: 'Flight Masters',
      description: 'Birds with extraordinary flying abilities and aerial acrobatics',
      path: '/birds-world/flight-masters',
      image: 'https://images.unsplash.com/photo-1611623576676-6757429a25d0?w=1920&q=80'
    },
    {
      id: 'ocean-navigators',
      name: 'Ocean Navigators',
      description: 'Seabirds that traverse vast oceans and coastal waters',
      path: '/birds-world/ocean-navigators',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'forest-singers',
      name: 'Forest Singers',
      description: 'Melodious songbirds that fill woodlands with their beautiful calls',
      path: '/birds-world/forest-singers',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80'
    },
    {
      id: 'desert-survivors',
      name: 'Desert Survivors',
      description: 'Birds that have adapted to thrive in arid, water-scarce environments',
      path: '/birds-world/desert-survivors',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'arctic-adventurers',
      name: 'Arctic Adventurers',
      description: 'Birds and animals that thrive in frozen polar regions with extraordinary cold adaptations',
      path: '/birds-world/arctic-adventurers',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'wetland-wonders',
      name: 'Wetland Wonders',
      description: 'Birds that thrive in marshes, swamps, and other wetland environments with specialized adaptations',
      path: '/birds-world/wetland-wonders',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'mountain-soarers',
      name: 'Mountain Soarers',
      description: 'Birds that excel in high-altitude environments with specialized adaptations for thin air and extreme conditions',
      path: '/birds-world/mountain-soarers',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'night-hunters',
      name: 'Night Hunters',
      description: 'Birds that hunt and are active during the night with specialized adaptations for darkness',
      path: '/birds-world/night-hunters',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'colorful-displayers',
      name: 'Colorful Displayers',
      description: 'Birds known for their vibrant plumage and spectacular mating displays that captivate observers',
      path: '/birds-world/colorful-displayers',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'ancient-species',
      name: 'Ancient Species',
      description: 'Birds that have remained relatively unchanged for millions of years, representing living fossils',
      path: '/birds-world/ancient-species',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'urban-adapters',
      name: 'Urban Adapters',
      description: 'Birds that have successfully adapted to city life, thriving alongside humans in metropolitan environments',
      path: '/birds-world/urban-adapters',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'migratory-marvels',
      name: 'Migratory Marvels',
      description: 'Birds known for their extraordinary long-distance migrations across continents and oceans',
      path: '/birds-world/migratory-marvels',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'aquatic-specialists',
      name: 'Aquatic Specialists',
      description: 'Birds that have evolved unique adaptations for life in and around water with extraordinary abilities',
      path: '/birds-world/aquatic-specialists',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'island-endemics',
      name: 'Island Endemics',
      description: 'Birds that evolved in isolation on remote islands with unique characteristics found nowhere else',
      path: '/birds-world/island-endemics',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'tool-users',
      name: 'Tool Users',
      description: 'Birds known for their remarkable ability to create and use tools with sophisticated problem-solving skills',
      path: '/birds-world/tool-users',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'vocal-virtuosos',
      name: 'Vocal Virtuosos',
      description: 'Birds with extraordinary vocal abilities, from complex songs to remarkable mimicry',
      path: '/birds-world/vocal-virtuosos',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'cooperative-breeders',
      name: 'Cooperative Breeders',
      description: 'Birds that exhibit remarkable cooperative behaviors in breeding and raising young',
      path: '/birds-world/cooperative-breeders',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'extreme-survivors',
      name: 'Extreme Survivors',
      description: 'Birds that live in the most extreme environments on Earth',
      path: '/birds-world/extreme-survivors',
      image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80'
    },
    {
      id: 'shape-shifters',
      name: 'Shape Shifters',
      description: 'Birds that undergo dramatic physical changes through molting or seasonal adaptations',
      path: '/birds-world/shape-shifters',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80'
    },
    {
      id: 'flightless-wonders',
      name: 'Flightless Wonders',
      description: 'Birds that traded flight for extraordinary terrestrial adaptations',
      path: '/birds-world/flightless-wonders',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'aquatic-masters',
      name: 'Aquatic Masters',
      description: 'Birds that have mastered life on, in, and above water with extraordinary adaptations',
      path: '/birds-world/aquatic-masters',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'forest-architects',
      name: 'Forest Architects',
      description: 'Birds that engineer their environments through nest-building and habitat modification',
      path: '/birds-world/forest-architects',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'sky-dancers',
      name: 'Sky Dancers',
      description: 'Birds known for their spectacular aerial displays and mastery of flight',
      path: '/birds-world/sky-dancers',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'jungle-acrobats',
      name: 'Jungle Acrobats',
      description: 'Masters of agility and specialized adaptations for life in dense forest canopies',
      path: '/birds-world/jungle-acrobats',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'ice-sculptors',
      name: 'Ice Sculptors',
      description: 'Masters of frozen environments that create remarkable structures in ice and snow',
      path: '/birds-world/ice-sculptors',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'desert-engineers',
      name: 'Desert Engineers',
      description: 'Masters of arid environments that create sustainable habitats in the desert',
      path: '/birds-world/desert-engineers',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'coral-gardeners',
      name: 'Coral Gardeners',
      description: 'Guardians of the underwater rainforests that maintain coral reef ecosystems',
      path: '/birds-world/coral-gardeners',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'highland-sentinels',
      name: 'Highland Sentinels',
      description: 'Guardians of mountain ecosystems that serve as indicators of environmental health',
      path: '/birds-world/highland-sentinels',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'night-whisperers',
      name: 'Night Whisperers',
      description: 'Masters of darkness with exceptional nighttime adaptations and stealth abilities',
      path: '/birds-world/night-whisperers',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'mud-architects',
      name: 'Mud Architects',
      description: 'Masters of earthen construction who build elaborate structures using mud and clay',
      path: '/birds-world/mud-architects',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'seed-guardians',
      name: 'Seed Guardians',
      description: 'Forest regenerators that disperse seeds and maintain biodiversity through their feeding habits',
      path: '/birds-world/seed-guardians',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    },
    {
      id: 'honey-hunters',
      name: 'Honey Hunters',
      description: 'Specialists in seeking out sweet rewards from bees and nectar-rich plants',
      path: '/birds-world/honey-hunters',
      image: 'https://images.unsplash.com/photo-1546182999-70d4d9d6c8c6?w=1920&q=80'
    },
    {
      id: 'shadow-stalkers',
      name: 'Shadow Stalkers',
      description: 'Masters of stealth and camouflage who hunt in low light or use concealment to ambush prey',
      path: '/birds-world/shadow-stalkers',
      image: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?w=1920&q=80'
    },
    {
      id: 'sound-sculptors',
      name: 'Sound Sculptors',
      description: 'Masters of acoustic communication who create complex sounds and manipulate their sonic environment',
      path: '/birds-world/sound-sculptors',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80'
    }
  ]

  return (
    <div className="birds-world">
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
            Birds World
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="subtitle"
          >
            From the smallest hummingbird to the mighty eagle, discover the breathtaking beauty and diversity of Earth's avian wonders.
          </motion.p>
        </div>
      </motion.div>

      <section className="categories-section">
        <div className="categories-grid">
          {birdCategories.map((category, index) => (
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

      <section className="birds-info">
        <div className="info-content">
          <h2>Beauty in Every Wingbeat</h2>
          <p>
            The primary user emotion should be Wonder. Secondary emotions are Curiosity, Respect, and a sense of Connection.
            This is not a zoo or a encyclopedia; it is a digital sanctuary, a living gallery dedicated to the breathtaking 
            beauty and diversity of Earth's avian inhabitants.
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

export default BirdsWorld