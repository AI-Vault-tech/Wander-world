import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './CompassNav.css'

const CompassNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const directions = [
    { name: 'Horizons', path: '/atlas/horizons', angle: 0 },
    { name: 'Microcosms', path: '/atlas/microcosms', angle: 90 },
    { name: 'Elements', path: '/atlas/elements', angle: 180 },
    { name: 'Echoes', path: '/atlas/echoes', angle: 270 },
  ]

  return (
    <div className="compass-container">
      <motion.div
        className="compass-rose"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="var(--aurora-glow)"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="var(--mineral-teal)"
            strokeWidth="0.3"
            opacity="0.5"
          />
          <path
            d="M50,10 L55,45 L50,50 L45,45 Z"
            fill="var(--sky-light)"
            opacity="0.8"
          />
          <circle cx="50" cy="50" r="3" fill="var(--golden-hour)" />
        </svg>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="compass-menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {directions.map((direction) => (
                <Link
                  key={direction.name}
                  to={direction.path}
                  className="compass-direction"
                  style={{
                    transform: `rotate(${direction.angle}deg) translateX(80px) rotate(-${direction.angle}deg)`,
                  }}
                >
                  {direction.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <Link to="/serendipity" className="serendipity-button">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Serendipity
        </motion.button>
      </Link>
    </div>
  )
}

export default CompassNav
