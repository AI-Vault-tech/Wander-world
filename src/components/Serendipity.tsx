import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Serendipity.css'

const serendipityScenes = [
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    location: 'Torres del Paine, Chile',
    quote: 'In every walk with nature, one receives far more than he seeks.',
    author: 'John Muir'
  },
  {
    url: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80',
    location: 'Lofoten Islands, Norway',
    quote: 'Look deep into nature, and then you will understand everything better.',
    author: 'Albert Einstein'
  },
  {
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
    location: 'Mountain Vista',
    quote: 'The clearest way into the Universe is through a forest wilderness.',
    author: 'John Muir'
  },
  {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
    location: 'Ancient Forest',
    quote: 'Nature does not hurry, yet everything is accomplished.',
    author: 'Lao Tzu'
  },
  {
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1920&q=80',
    location: 'Coastal Majesty',
    quote: 'The earth has music for those who listen.',
    author: 'Shakespeare'
  }
]

const Serendipity = () => {
  const [currentScene, setCurrentScene] = useState(0)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    // Random scene on load
    setCurrentScene(Math.floor(Math.random() * serendipityScenes.length))
  }, [])

  const scene = serendipityScenes[currentScene]

  return (
    <div className="serendipity">
      <motion.div
        className="serendipity-background"
        key={currentScene}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        style={{ backgroundImage: `url('${scene.url}')` }}
      />

      <div className="serendipity-overlay" />

      <motion.div
        className="serendipity-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <motion.div
          className="quote-container"
          onClick={() => setShowInfo(!showInfo)}
        >
          <p className="quote">"{scene.quote}"</p>
          <p className="author">— {scene.author}</p>
        </motion.div>

        <motion.div
          className="location-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: showInfo ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{scene.location}</p>
        </motion.div>
      </motion.div>

      <button
        className="discover-more"
        onClick={() => setCurrentScene((prev) => (prev + 1) % serendipityScenes.length)}
      >
        Discover Another
      </button>
    </div>
  )
}

export default Serendipity
