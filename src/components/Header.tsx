import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tallest Places', path: '/tallest-places' },
    { name: 'Deepest Places', path: '/deepest-places' },
    { name: 'Most Beautiful', path: '/most-beautiful' },
    { name: 'Natural Wonders', path: '/natural-wonders' },
    { name: 'Futuristic Cities', path: '/futuristic-cities' },
    { name: 'Blog', path: '/blog' },
    { name: 'Waterfalls', path: '/waterfalls' },
    { name: 'Deserts', path: '/deserts' },
    { name: 'Forests', path: '/forests' },
    { name: 'Islands', path: '/islands' },
    { name: 'Caves', path: '/caves' },
    { name: 'Glaciers', path: '/glaciers' },
  ]

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            The Beauty of the World
          </motion.h1>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="mobile-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
