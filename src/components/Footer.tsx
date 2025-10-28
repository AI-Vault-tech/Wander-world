import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { name: 'Tallest Places', path: '/tallest-places' },
      { name: 'Deepest Places', path: '/deepest-places' },
      { name: 'Most Beautiful', path: '/most-beautiful' },
      { name: 'Natural Wonders', path: '/natural-wonders' },
      { name: 'Futuristic Cities', path: '/futuristic-cities' },
    ],
    discover: [
      { name: 'Waterfalls', path: '/waterfalls' },
      { name: 'Deserts', path: '/deserts' },
      { name: 'Forests', path: '/forests' },
      { name: 'Islands', path: '/islands' },
      { name: 'Blog', path: '/blog' },
    ],
    wonder: [
      { name: 'Caves', path: '/caves' },
      { name: 'Glaciers', path: '/glaciers' },
      { name: 'Serendipity', path: '/serendipity' },
    ],
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h2>The Beauty of the World</h2>
          <p className="footer-tagline">
            A meditation on the profound, intricate, and overlooked wonders of Earth.
            Discover the planet's most breathtaking landscapes, from the tallest peaks
            to the deepest oceans, from vast deserts to ancient forests.
          </p>
          <div className="footer-social">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="social-icon"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="social-icon"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="social-icon"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul className="footer-links">
            {footerLinks.explore.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Discover</h3>
          <ul className="footer-links">
            {footerLinks.discover.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Wonder</h3>
          <ul className="footer-links">
            {footerLinks.wonder.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} The Beauty of the World. All rights reserved.</p>
          <p className="footer-quote">
            "In every walk with nature, one receives far more than he seeks." — John Muir
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
